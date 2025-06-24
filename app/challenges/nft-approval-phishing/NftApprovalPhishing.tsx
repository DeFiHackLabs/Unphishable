'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import NftApprovalPhishingSuccessContent from './NftApprovalPhishingSuccessContent';

import { createWalletClient, custom, getContract, Account } from 'viem';
import { holesky } from 'viem/chains';

const HOLESKY_CHAIN_ID = '0x4268'; // Holesky testnet
const MALICIOUS_OPERATOR = "0xbe535a82f2c3895bdaceb3ffe6b9b80ac2f832a0";
interface WalletError extends Error {
  code: number;
}
interface TransactionError extends Error {
  code: number | string;
  message: string;
}
export default function NftApprovalPhishing() {
  const { t } = useLanguage();

  const [wallet, setWallet] = useState({
    address: '',
    isConnected: false,
    networkName: '',
    chainId: ''
  });

  const [showApproveSection, setShowApproveSection] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [simulationCompleted, setSimulationCompleted] = useState(false);
  const [txHash, setTxHash] = useState('');
  const [status, setStatus] = useState({ message: '', type: '' });
  const [challengeSuccess, setChallengeSuccess] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Setup MetaMask event listeners
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', () => window.location.reload());
    }

    return () => {
      if (typeof window.ethereum !== 'undefined') {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', () => { });
      }
    };
  }, []);

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length > 0) {
      const account = accounts[0];
      const displayAccount = `${account.substring(0, 6)}...${account.substring(38)}`;
      setWallet(prev => ({
        ...prev,
        address: displayAccount,
        isConnected: true
      }));
    } else {
      setWallet(prev => ({
        ...prev,
        address: '',
        isConnected: false
      }));
      setShowApproveSection(false);
    }
  };

  const updateStatus = (message: string, type: 'error' | 'info' | 'success' | 'warning') => {
    setStatus({ message, type });
  };

  const connectWallet = async () => {
    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum === 'undefined') {
        alert(t.nftApprovalPhishing.metaMaskNotInstalled);
        return;
      }

      updateStatus(t.nftApprovalPhishing.connecting, 'info');

      // Request account access
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      if (accounts.length === 0) {
        updateStatus(t.nftApprovalPhishing.noAccountsFound, 'error');
        return;
      }

      const account = accounts[0];
      const displayAccount = `${account.substring(0, 6)}...${account.substring(38)}`;
      setWallet(prev => ({
        ...prev,
        address: displayAccount,
        isConnected: true
      }));

      // Check network
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      console.log('Chain ID:', chainId);

      if (chainId !== HOLESKY_CHAIN_ID) {
        updateStatus(t.nftApprovalPhishing.pleaseSwitch, 'info');
        setWallet(prev => ({
          ...prev,
          networkName: t.nftApprovalPhishing.networkSwitchRequired,
          chainId: chainId
        }));

        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: HOLESKY_CHAIN_ID }],
          });
        } catch (switchError: unknown) {
          // 類型守衛確保錯誤處理的類型安全
          if (
            switchError instanceof Error &&
            'code' in switchError &&
            (switchError as WalletError).code === 4902
          ) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: HOLESKY_CHAIN_ID,
                  chainName: 'Holesky Testnet',
                  nativeCurrency: {
                    name: 'ETH',
                    symbol: 'ETH',
                    decimals: 18
                  },
                  rpcUrls: ['https://ethereum-holesky.publicnode.com'],
                  blockExplorerUrls: ['https://holesky.etherscan.io']
                }]
              });
            } catch (addError: unknown) {
              if (addError instanceof Error) {
                updateStatus(t.nftApprovalPhishing.failedToAdd + addError.message, 'error');
              } else {
                updateStatus(t.nftApprovalPhishing.failedToAdd + 'Unknown error', 'error');
              }
              return;
            }
          } else if (switchError instanceof Error) {
            updateStatus(t.nftApprovalPhishing.switchFailed + switchError.message, 'error');
            return;
          } else {
            updateStatus(t.nftApprovalPhishing.switchFailed + 'Unknown error', 'error');
            return;
          }
        }
      }

      updateStatus(t.nftApprovalPhishing.walletConnected, 'success');
      setWallet(prev => ({
        ...prev,
        networkName: 'Holesky Testnet',
        chainId: HOLESKY_CHAIN_ID
      }));
      setShowApproveSection(true);

    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error connecting to MetaMask:', error);
        updateStatus(t.nftApprovalPhishing.error + error.message, 'error');
      } else {
        console.error('Unknown error connecting to MetaMask');
        updateStatus(t.nftApprovalPhishing.error + 'Unknown error', 'error');
      }
    }
  };

  const approveNFTs = async () => {
    try {
      // Prevent multiple attempts
      if (simulationCompleted) {
        return;
      }

      updateStatus(t.nftApprovalPhishing.preparingApproval, 'info');

      // Get current account
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts.length === 0) {
        updateStatus(t.nftApprovalPhishing.noAccountsFound, 'error');
        return;
      }
      const account = accounts[0];

      // 使用 viem 創建錢包客戶端
      const walletClient = createWalletClient({
        chain: holesky,
        transport: custom(window.ethereum),
        account: account as Account
      });

      // 創建一個模擬 NFT 合約地址
      // 在真實的釣魚攻擊中，這可能是用戶擁有的合法 NFT 合約
      const fakeNftContractAddress = "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e"; // Doodles NFT 合約地址

      // 這是一個簡化的 ERC-721 ABI，只包含 setApprovalForAll 函數
      const erc721Abi = [
        {
          name: "setApprovalForAll",
          type: "function",
          stateMutability: "nonpayable",
          inputs: [
            { name: "operator", type: "address" },
            { name: "approved", type: "bool" }
          ],
          outputs: []
        }
      ] as const;

      // 使用 viem 創建合約實例
      const nftContract = getContract({
        address: fakeNftContractAddress,
        abi: erc721Abi,
        client: walletClient
      });

      // 調用 setApprovalForAll
      // 這將使惡意運營商完全控制此系列中的所有 NFT
      try {
        const hash = await nftContract.write.setApprovalForAll([MALICIOUS_OPERATOR, true]);
        setTxHash(hash);
        setSimulationCompleted(true);
        setShowExplanation(true);
        updateStatus(t.nftApprovalPhishing.approvalSent, 'error');
      } catch (txError: unknown) {
        console.error('Transaction error:', txError);

        if (txError instanceof Error) {
          const error = txError as TransactionError;

          // 檢查是否為用戶拒絕交易的情況
          const isUserRejection =
            error.code === 4001 ||
            error.code === 'ACTION_REJECTED' ||
            [
              'user rejected',
              'User denied',
              'User rejected',
              'rejected',
              'denied',
              'cancel'
            ].some(text => error.message.toLowerCase().includes(text.toLowerCase()));

          if (isUserRejection) {
            // 用戶拒絕交易 - 這是此挑戰的成功路徑
            setSimulationCompleted(true);
            setChallengeSuccess(true);
            setShowExplanation(true);
            updateStatus(t.nftApprovalPhishing.transactionRejected, 'success');
            setShowCompletionModal(true);
            if (chatEndRef.current) {
              chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
            }
          } else {
            updateStatus(t.nftApprovalPhishing.error + error.message, 'error');
          }
        } else {
          updateStatus(t.nftApprovalPhishing.error + 'Unknown error', 'error');
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error approving NFTs:', error);
        updateStatus(t.nftApprovalPhishing.error + error.message, 'error');
      }

    }
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 challenge-title">{t.nftApprovalPhishing.title}</h1>
            <p className="text-xl mb-2 challenge-subtitle">{t.nftApprovalPhishing.subtitle}</p>
            <p className="text-red-500 font-semibold">{t.nftApprovalPhishing.warning}</p>
          </div>

          <div className="mb-6 challenge-subtitle">
            <p className="mb-2">
              {t.nftApprovalPhishing.currentNetwork}{' '}
              <span className="font-medium">
                {wallet.isConnected ? wallet.networkName : t.common.notConnected}
              </span>
            </p>
            <p>
              {t.nftApprovalPhishing.walletStatus}{' '}
              <span className="font-mono">
                {wallet.isConnected ? wallet.address : t.common.notConnected}
              </span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold mb-4">{t.nftApprovalPhishing.yourCollection}</h3>
            <p className="mb-6">{t.nftApprovalPhishing.collectionDescription}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {t.nftApprovalPhishing.nfts.map((nft, index) => (
                <div key={index} className="border rounded-lg p-4 flex flex-col items-center">
                  <div className="w-full h-40 flex items-center justify-center rounded-md mb-2 overflow-hidden bg-gradient-to-r from-blue-100 to-purple-100">
                    {index === 0 && (
                      <div className="w-full h-full flex items-center justify-center relative bg-amber-100">
                        <svg width="120" height="120" viewBox="0 0 120 120" className="absolute">
                          {/* Rare Monkey */}
                          <circle cx="60" cy="60" r="50" fill="#8B4513" />
                          <circle cx="40" cy="48" r="12" fill="#FFD700" /> {/* Gold eye for rarity */}
                          <circle cx="80" cy="48" r="12" fill="#FFD700" />
                          <circle cx="40" cy="48" r="6" fill="#000000" />
                          <circle cx="80" cy="48" r="6" fill="#000000" />
                          <ellipse cx="60" cy="75" rx="15" ry="10" fill="#FFA07A" />
                          <path d="M45 65 Q60 55 75 65" stroke="#000000" strokeWidth="2" fill="none" />
                          <path d="M30 30 Q40 15 55 25" stroke="#8B4513" strokeWidth="8" fill="none" /> {/* Left ear */}
                          <path d="M90 30 Q80 15 65 25" stroke="#8B4513" strokeWidth="8" fill="none" /> {/* Right ear */}
                          <path d="M30 60 Q45 65 40 45" stroke="#FFA07A" strokeWidth="2" fill="#FFA07A" /> {/* Left cheek */}
                          <path d="M90 60 Q75 65 80 45" stroke="#FFA07A" strokeWidth="2" fill="#FFA07A" /> {/* Right cheek */}
                          <path d="M50 90 Q60 100 70 90" stroke="#8B4513" strokeWidth="2" fill="#8B4513" /> {/* Chin */}
                          <path d="M20 50 Q10 60 20 70" stroke="#8B4513" strokeWidth="4" fill="none" /> {/* Left side hair */}
                          <path d="M100 50 Q110 60 100 70" stroke="#8B4513" strokeWidth="4" fill="none" /> {/* Right side hair */}
                          <circle cx="60" cy="60" r="55" stroke="#FFD700" strokeWidth="3" fill="none" /> {/* Gold border for rarity */}
                        </svg>
                        <div className="absolute top-2 right-2 bg-yellow-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg">#1</div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="w-full h-full flex items-center justify-center relative bg-indigo-900">
                        <svg width="120" height="120" viewBox="0 0 120 120" className="absolute">
                          {/* Space Cat */}
                          <circle cx="60" cy="60" r="50" fill="#4B0082" /> {/* Deep space background */}
                          <circle cx="20" cy="30" r="2" fill="white" opacity="0.8" /> {/* Stars */}
                          <circle cx="30" cy="20" r="1" fill="white" opacity="0.8" />
                          <circle cx="80" cy="25" r="1.5" fill="white" opacity="0.8" />
                          <circle cx="95" cy="40" r="2" fill="white" opacity="0.8" />
                          <circle cx="75" cy="90" r="1" fill="white" opacity="0.8" />
                          <circle cx="40" cy="85" r="1.5" fill="white" opacity="0.8" />
                          <circle cx="15" cy="60" r="1" fill="white" opacity="0.8" />
                          <circle cx="90" cy="70" r="2" fill="white" opacity="0.8" />

                          {/* Cat face */}
                          <circle cx="60" cy="60" r="30" fill="#C0C0C0" /> {/* Silver cat */}
                          <circle cx="45" cy="50" r="8" fill="#00FFFF" /> {/* Glowing cyan eyes */}
                          <circle cx="75" cy="50" r="8" fill="#00FFFF" />
                          <circle cx="45" cy="50" r="4" fill="black" />
                          <circle cx="75" cy="50" r="4" fill="black" />
                          <ellipse cx="60" cy="70" rx="6" ry="4" fill="#FF69B4" />

                          {/* Space helmet */}
                          <circle cx="60" cy="60" r="35" stroke="#FFFFFF" strokeWidth="3" fill="none" />
                          <circle cx="75" cy="45" r="5" fill="white" opacity="0.3" /> {/* Helmet reflection */}

                          {/* Cat ears */}
                          <path d="M35 35 Q45 15 55 35" stroke="#C0C0C0" strokeWidth="6" fill="#C0C0C0" />
                          <path d="M85 35 Q75 15 65 35" stroke="#C0C0C0" strokeWidth="6" fill="#C0C0C0" />

                          {/* Whiskers */}
                          <line x1="35" y1="65" x2="20" y2="60" stroke="#FFFFFF" strokeWidth="1.5" />
                          <line x1="35" y1="70" x2="20" y2="70" stroke="#FFFFFF" strokeWidth="1.5" />
                          <line x1="35" y1="75" x2="20" y2="80" stroke="#FFFFFF" strokeWidth="1.5" />
                          <line x1="85" y1="65" x2="100" y2="60" stroke="#FFFFFF" strokeWidth="1.5" />
                          <line x1="85" y1="70" x2="100" y2="70" stroke="#FFFFFF" strokeWidth="1.5" />
                          <line x1="85" y1="75" x2="100" y2="80" stroke="#FFFFFF" strokeWidth="1.5" />
                        </svg>
                        <div className="absolute top-2 right-2 bg-cyan-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg">#2</div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="w-full h-full flex items-center justify-center relative bg-gray-800">
                        <svg width="120" height="120" viewBox="0 0 120 120" className="absolute">
                          {/* Pixel Art */}
                          <rect x="20" y="20" width="10" height="10" fill="#FF0000" />
                          <rect x="30" y="20" width="10" height="10" fill="#FF7F00" />
                          <rect x="40" y="20" width="10" height="10" fill="#FFFF00" />
                          <rect x="50" y="20" width="10" height="10" fill="#00FF00" />
                          <rect x="60" y="20" width="10" height="10" fill="#0000FF" />
                          <rect x="70" y="20" width="10" height="10" fill="#4B0082" />
                          <rect x="80" y="20" width="10" height="10" fill="#9400D3" />
                          <rect x="90" y="20" width="10" height="10" fill="#FF1493" />

                          <rect x="20" y="30" width="10" height="10" fill="#FF7F00" />
                          <rect x="30" y="30" width="10" height="10" fill="#FFFFFF" />
                          <rect x="40" y="30" width="10" height="10" fill="#FFFFFF" />
                          <rect x="50" y="30" width="10" height="10" fill="#FFFFFF" />
                          <rect x="60" y="30" width="10" height="10" fill="#FFFFFF" />
                          <rect x="70" y="30" width="10" height="10" fill="#FFFFFF" />
                          <rect x="80" y="30" width="10" height="10" fill="#FFFFFF" />
                          <rect x="90" y="30" width="10" height="10" fill="#FF0000" />

                          <rect x="20" y="40" width="10" height="10" fill="#FFFF00" />
                          <rect x="30" y="40" width="10" height="10" fill="#FFFFFF" />
                          <rect x="40" y="40" width="10" height="10" fill="#000000" />
                          <rect x="50" y="40" width="10" height="10" fill="#FFFFFF" />
                          <rect x="60" y="40" width="10" height="10" fill="#FFFFFF" />
                          <rect x="70" y="40" width="10" height="10" fill="#000000" />
                          <rect x="80" y="40" width="10" height="10" fill="#FFFFFF" />
                          <rect x="90" y="40" width="10" height="10" fill="#00FF00" />

                          <rect x="20" y="50" width="10" height="10" fill="#00FF00" />
                          <rect x="30" y="50" width="10" height="10" fill="#FFFFFF" />
                          <rect x="40" y="50" width="10" height="10" fill="#FFFFFF" />
                          <rect x="50" y="50" width="10" height="10" fill="#FFFFFF" />
                          <rect x="60" y="50" width="10" height="10" fill="#FFFFFF" />
                          <rect x="70" y="50" width="10" height="10" fill="#FFFFFF" />
                          <rect x="80" y="50" width="10" height="10" fill="#FFFFFF" />
                          <rect x="90" y="50" width="10" height="10" fill="#0000FF" />

                          <rect x="20" y="60" width="10" height="10" fill="#0000FF" />
                          <rect x="30" y="60" width="10" height="10" fill="#FFFFFF" />
                          <rect x="40" y="60" width="10" height="10" fill="#FFFFFF" />
                          <rect x="50" y="60" width="10" height="10" fill="#FF0000" />
                          <rect x="60" y="60" width="10" height="10" fill="#FF0000" />
                          <rect x="70" y="60" width="10" height="10" fill="#FFFFFF" />
                          <rect x="80" y="60" width="10" height="10" fill="#FFFFFF" />
                          <rect x="90" y="60" width="10" height="10" fill="#4B0082" />

                          <rect x="20" y="70" width="10" height="10" fill="#4B0082" />
                          <rect x="30" y="70" width="10" height="10" fill="#FFFFFF" />
                          <rect x="40" y="70" width="10" height="10" fill="#FFFFFF" />
                          <rect x="50" y="70" width="10" height="10" fill="#FFFFFF" />
                          <rect x="60" y="70" width="10" height="10" fill="#FFFFFF" />
                          <rect x="70" y="70" width="10" height="10" fill="#FFFFFF" />
                          <rect x="80" y="70" width="10" height="10" fill="#FFFFFF" />
                          <rect x="90" y="70" width="10" height="10" fill="#9400D3" />

                          <rect x="20" y="80" width="10" height="10" fill="#9400D3" />
                          <rect x="30" y="80" width="10" height="10" fill="#FFFFFF" />
                          <rect x="40" y="80" width="10" height="10" fill="#FFFFFF" />
                          <rect x="50" y="80" width="10" height="10" fill="#000000" />
                          <rect x="60" y="80" width="10" height="10" fill="#000000" />
                          <rect x="70" y="80" width="10" height="10" fill="#FFFFFF" />
                          <rect x="80" y="80" width="10" height="10" fill="#FFFFFF" />
                          <rect x="90" y="80" width="10" height="10" fill="#FF1493" />

                          <rect x="20" y="90" width="10" height="10" fill="#FF1493" />
                          <rect x="30" y="90" width="10" height="10" fill="#FF0000" />
                          <rect x="40" y="90" width="10" height="10" fill="#FF7F00" />
                          <rect x="50" y="90" width="10" height="10" fill="#FFFF00" />
                          <rect x="60" y="90" width="10" height="10" fill="#00FF00" />
                          <rect x="70" y="90" width="10" height="10" fill="#0000FF" />
                          <rect x="80" y="90" width="10" height="10" fill="#4B0082" />
                          <rect x="90" y="90" width="10" height="10" fill="#9400D3" />
                        </svg>
                        <div className="absolute top-2 right-2 bg-green-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg">#3</div>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-r from-purple-500 to-pink-500">
                        <svg width="120" height="120" viewBox="0 0 120 120" className="absolute">
                          {/* Digital Collectible */}
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#8A2387" />
                              <stop offset="50%" stopColor="#E94057" />
                              <stop offset="100%" stopColor="#F27121" />
                            </linearGradient>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                              <feGaussianBlur stdDeviation="3" result="blur" />
                              <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                          </defs>

                          {/* Base shape */}
                          <circle cx="60" cy="60" r="40" fill="url(#gradient)" />

                          {/* Digital elements */}
                          <path d="M40 40 L80 40 L80 80 L40 80 Z" stroke="white" strokeWidth="2" fill="none" />
                          <circle cx="60" cy="60" r="15" stroke="white" strokeWidth="2" fill="none" />
                          <path d="M30 60 L90 60" stroke="white" strokeWidth="1" />
                          <path d="M60 30 L60 90" stroke="white" strokeWidth="1" />

                          {/* Binary code decoration */}
                          <text x="45" y="50" fill="white" fontSize="8" fontFamily="monospace">10110</text>
                          <text x="65" y="70" fill="white" fontSize="8" fontFamily="monospace">01001</text>

                          {/* Glowing elements */}
                          <circle cx="40" cy="40" r="5" fill="white" opacity="0.8" filter="url(#glow)" />
                          <circle cx="80" cy="40" r="5" fill="white" opacity="0.8" filter="url(#glow)" />
                          <circle cx="40" cy="80" r="5" fill="white" opacity="0.8" filter="url(#glow)" />
                          <circle cx="80" cy="80" r="5" fill="white" opacity="0.8" filter="url(#glow)" />

                          {/* Animated-looking elements */}
                          <path d="M50 50 Q60 30 70 50" stroke="#00FFFF" strokeWidth="2" fill="none" />
                          <path d="M50 70 Q60 90 70 70" stroke="#00FFFF" strokeWidth="2" fill="none" />

                          {/* Collectible border */}
                          <circle cx="60" cy="60" r="45" stroke="#FFD700" strokeWidth="2" strokeDasharray="5,3" fill="none" />
                        </svg>
                        <div className="absolute top-2 right-2 bg-purple-500 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg">#4</div>
                      </div>
                    )}
                  </div>
                  <div className="font-bold">{nft.title}</div>
                  <div className="text-sm text-gray-600">ID: {nft.id}</div>
                </div>
              ))}
            </div>

            {!wallet.isConnected && (
              <div>
                <h3 className="text-xl font-bold mb-4">{t.nftApprovalPhishing.step1}</h3>
                <button
                  onClick={connectWallet}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md transition-colors"
                >
                  {t.common.connectWallet}
                </button>
              </div>
            )}

            {showApproveSection && (
              <div>
                <h3 className="text-xl font-bold mb-4">{t.nftApprovalPhishing.step2}</h3>
                <p className="mb-2">{t.nftApprovalPhishing.approveDescription}</p>
                <p className="mb-4">
                  {t.nftApprovalPhishing.operatorAddress}{' '}
                  <span className="font-mono text-sm break-all">
                    {MALICIOUS_OPERATOR}
                  </span>
                </p>
                <button
                  onClick={approveNFTs}
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md transition-colors w-full"
                  disabled={simulationCompleted}
                >
                  {t.nftApprovalPhishing.approveButton}
                </button>
              </div>
            )}
          </div>
          {status.message && (
            <div
              className={`p-4 mb-6 rounded-md ${status.type === 'error' ? 'bg-red-50 border-l-4 border-red-500 text-red-700' :
                status.type === 'success' ? 'bg-green-50 border-l-4 border-green-500 text-green-700' :
                  status.type === 'warning' ? 'bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700' :
                    'bg-blue-50 border-l-4 border-blue-500 text-blue-700'
                }`}
            >
              {status.message}
            </div>
          )}
          {showExplanation && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              {challengeSuccess ? (
                <>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                    <p className="text-green-700 font-bold text-xl">{t.nftApprovalPhishing.successTitle}</p>
                    <p className="text-green-700">{t.nftApprovalPhishing.successMessage}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">{t.nftApprovalPhishing.whatWasAttack}</h3>
                    <p className="mb-4">{t.nftApprovalPhishing.attackDescription}</p>
                    <p className="mb-4">{t.nftApprovalPhishing.functionDescription}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                    <p className="text-red-700 font-bold text-xl">{t.nftApprovalPhishing.phishingWarningTitle}</p>
                    <p className="text-red-700">{t.nftApprovalPhishing.phishingWarningMessage}</p>
                  </div>
                  <div>
                    <p className="mb-4">
                      {t.nftApprovalPhishing.transactionHash}{' '}
                      <a
                        href={`https://holesky.etherscan.io/tx/${txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {txHash}
                      </a>
                    </p>
                    <p className="mb-4">
                      {t.nftApprovalPhishing.approvedOperator.replace('{operator}', MALICIOUS_OPERATOR)}
                    </p>
                    <p className="mb-4">{t.nftApprovalPhishing.phishingExplanation}</p>
                  </div>
                </>
              )}

              <h4 className="font-bold text-lg mt-6 mb-2">{t.nftApprovalPhishing.technicalDetails}</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                {t.nftApprovalPhishing.technicalPointsList.map((point, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: point }}></li>
                ))}
              </ul>

              <h4 className="font-bold text-lg mb-2">{t.nftApprovalPhishing.protectionTitle}</h4>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                {t.nftApprovalPhishing.protectionList.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="nft-approval-phishing"
        successContent={<NftApprovalPhishingSuccessContent />}
      />
    </>
  );
}
