'use client';

import { useState, useEffect } from 'react';
import { useAccount, useConnect, useChainId } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useTheme } from 'next-themes';
import "@/app/styles/ErrorModal.css";
import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import { userService } from '@/app/services/userService';
import { useUserStore } from '@/app/stores/userStore';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';

// 建立 public client
const publicClient = createPublicClient({
  chain: sepolia,
  transport: http('https://ethereum-sepolia-rpc.publicnode.com')
});

export default function WalletSetupGuide() {
  const { address } = useAccount();
  const { connectAsync } = useConnect();
  const chainId = useChainId();
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorType, setErrorType] = useState<'install' | 'connect' | 'network' | 'balance'>('install');
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const { t } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (showCompletionModal) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [showCompletionModal]);

  const [, setIsConnecting] = useState(false);
  const [verified, setVerified] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [setupCompleted, setSetupCompleted] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const { fetchProfile } = useUserStore();

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  const showError = (message: string, type: 'install' | 'connect' | 'network' | 'balance') => {
    setErrorMessage(message);
    setErrorType(type);
    setShowErrorModal(true);
  };

  // 添加 balance 狀態
  const [, setBalance] = useState<bigint | null>(null);

  // 更新檢查餘額的函數
  const checkBalance = async (walletAddress: string) => {
    try {
      const balanceValue = await publicClient.getBalance({
        address: walletAddress as `0x${string}`,
      });
      setBalance(balanceValue);
      return balanceValue;
    } catch (error) {
      console.error('Error fetching balance:', error);
      setBalance(null);
      return 0n;
    }
  };

  // 修改 verifyWalletSetup 函數
  const verifyWalletSetup = async (account: string) => {
    try {
      if (typeof window.ethereum === 'undefined' || !window.ethereum.isMetaMask) {
        showError(t.walletSetupGuide.installMetaMask, 'install');
        throw new Error(t.walletSetupGuide.installMetaMask);
      }

      if (chainId !== sepolia.id) {
        showError(t.walletSetupGuide.wrongNetwork, 'network');
        throw new Error(t.walletSetupGuide.wrongNetwork);
      }

      if (!account) {
        showError(t.walletSetupGuide.connectWallet, 'connect');
        throw new Error(t.walletSetupGuide.connectWallet);
      }

      const currentBalance = await checkBalance(account);

      if (currentBalance === 0n) {
        showError(t.walletSetupGuide.noTestEth, 'balance');
        throw new Error(t.walletSetupGuide.noTestEth);
      }

      setWalletConnected(true);
    } catch (error) {
      console.error('Verification error:', error);
      setWalletConnected(false);
    }
  };

  // 在地址變更時檢查餘額
  useEffect(() => {
    if (address) {
      checkBalance(address);
    }
  }, [address]);

  const completeSetup = async () => {
    try {
      setIsAuthenticating(true);

      if (!address) {
        showError(t.walletSetupGuide.connectWallet, 'connect');
        return;
      }

      // 使用與 WalletConnect 相同的登入邏輯
      try {
        const loginResponse = await userService.login(address);
        localStorage.setItem('token', loginResponse.token);

        // 獲取用戶資料
        await fetchProfile(address);
        localStorage.setItem('setAddress', address);
        setLoginSuccess(true);
        setVerified(true);
        setSetupCompleted(true);
        setShowCompletionModal(true);
      } catch (authError) {
        console.error('Authentication error:', authError);
        showError(
          typeof authError === 'object' && authError !== null && 'message' in authError
            ? (authError as Error).message
            : t.walletSetupGuide.authenticationFailed || 'Authentication failed',
          'connect'
        );
        return;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        showError(error.message || 'Failed to complete setup', 'connect');
      }
      console.error('Completion error:', error);
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleConnect = async () => {
    if (typeof window.ethereum === 'undefined' || !window.ethereum.isMetaMask) {
      showError(t.walletSetupGuide.installMetaMask, 'install');
      throw new Error(t.walletSetupGuide.installMetaMask);
    }

    try {
      setIsConnecting(true);
      setVerified(false);
      const result = await connectAsync({ connector: injected() });

      const account = result.accounts[0];
      if (result) {
        await verifyWalletSetup(account);
      }
    } catch (error) {
      console.error('Connection error:', error);
      if ((error as { code: number }).code === -32002) {
        showError(t.walletSetupGuide.pendingRequest, 'connect');
      } else {
        showError(t.walletSetupGuide.connectionError, 'connect');
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const handleAddSepoliaNetwork = async () => {
    if (typeof window.ethereum === 'undefined') {
      showError(t.walletSetupGuide.installMetaMask, 'install');
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    try {
      // 首先嘗試切換到 Sepolia 網路
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0xaa36a7' }],
      });
      alert(t.walletSetupGuide.networkSwitched || 'Switched to Sepolia network');
    } catch (switchError) {
      console.log('Switch error:', switchError);
      const switchErrorCode = (switchError as { code: number })?.code;

      // 如果網路不存在 (4902)，則添加網路
      if (switchErrorCode === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0xaa36a7',
              chainName: 'Sepolia Test Network',
              nativeCurrency: {
                name: 'Sepolia ETH',
                symbol: 'ETH',
                decimals: 18
              },
              rpcUrls: ['https://ethereum-sepolia-rpc.publicnode.com'],
              blockExplorerUrls: ['https://sepolia.etherscan.io/']
            }]
          });
          alert(t.walletSetupGuide.networkAdded || 'Sepolia network added successfully');
        } catch (addError) {
          console.error('Add network error:', addError);
          const addErrorCode = (addError as { code: number })?.code;

          if (addErrorCode === 4001) {
            // 用戶拒絕
            alert(t.walletSetupGuide.userRejected || 'User rejected the request');
          } else {
            alert(t.walletSetupGuide.networkError || 'Failed to add network');
          }
        }
      } else if (switchErrorCode === 4001) {
        // 用戶拒絕切換
        alert(t.walletSetupGuide.userRejected || 'User rejected the request');
      } else if (switchErrorCode === -32602) {
        // 網路已存在但參數不匹配，直接提示用戶檢查設定
        alert(t.walletSetupGuide.networkExists || 'Sepolia network already exists. Please check your network settings.');
      } else {
        // 其他錯誤
        console.error('Unexpected switch error:', switchError);
        alert(t.walletSetupGuide.networkError || 'Failed to switch network');
      }
    }
  };

  const steps = [
    {
      title: t.walletSetupGuide.steps[1].title,
      content: t.walletSetupGuide.steps[1].content,
      action: (
        <div>
          <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-purple-500 transition-all">
            {t.walletSetupGuide.downloadMetaMask}
          </a>
          <ol className="mt-4 mb-4 list-decimal pl-5 space-y-2 text-gray-600">
            <li>{t.walletSetupGuide.steps[1].visitMetaMask}</li>
            <li>{t.walletSetupGuide.steps[1].clickInstall}</li>
            <li>{t.walletSetupGuide.steps[1].followProcess}</li>
            <li>{t.walletSetupGuide.steps[1].clickIcon}</li>
          </ol>
          <div className="bg-indigo-50/50 border-l-4 border-indigo-500 p-4 my-4">
            <p className="text-indigo-700">
              <strong>{t.walletSetupGuide.securityTip}:</strong> {t.walletSetupGuide.downloadWarning}
            </p>
          </div>
        </div>
      )
    },
    {
      title: t.walletSetupGuide.steps[2].title,
      content: t.walletSetupGuide.steps[2].content,
      action: (
        <div>
          <ol className="mt-4 mb-4 list-decimal pl-5 space-y-2 text-gray-600">
            <li>{t.walletSetupGuide.steps[2].clickCreateWallet}</li>
            <li>{t.walletSetupGuide.steps[2].createSecurePassword}</li>
            <li>{t.walletSetupGuide.steps[2].watchSecurityVideo}</li>
            <li>{t.walletSetupGuide.steps[2].clickRevealSeedPhrase}</li>
          </ol>
          <div className="bg-purple-50/50 border border-purple-200 rounded-lg p-4 shadow-sm">
            <p className="text-purple-700"><strong>{t.walletSetupGuide.important}:</strong> {t.walletSetupGuide.seedPhraseWarning}</p>
          </div>
        </div>
      )
    },
    {
      title: t.walletSetupGuide.steps[3].title,
      content: t.walletSetupGuide.steps[3].content,
      action: (
        <div>
          <div className="seed-phrase-example bg-gray-50 p-4 rounded-lg text-gray-600 font-mono text-sm">
            apple banana cherry diamond elephant forest guitar history island journey kitchen lemon
          </div>
          <ul className="mt-4 mb-4 list-decimal pl-5 space-y-2 text-gray-600">
            {t.walletSetupGuide.bestPractices.map((practice, index) => (
              <li key={index}>{practice}</li>
            ))}
          </ul>
          <div className="warning-box bg-red-50/50 border border-red-200 rounded-lg p-4 shadow-sm">
            <p className="text-red-700"><strong>{t.walletSetupGuide.warning}:</strong> {t.walletSetupGuide.phishingWarning}</p>
          </div>
        </div>
      )
    },
    {
      title: t.walletSetupGuide.steps[4].title,
      content: t.walletSetupGuide.steps[4].content,
      action: (
        <div>
          <ul className="mt-4 mb-4 list-decimal pl-5 space-y-2 text-gray-600">
            <li>Network Name: Sepolia</li>
            <li>ChainID: 11155111 (0xaa36a7)</li>
            <li>RPC URL: https://ethereum-sepolia-rpc.publicnode.com</li>
            <li>Block Explorer: https://sepolia.etherscan.io/</li>
          </ul>
          <button onClick={handleAddSepoliaNetwork} className="px-6 py-3 rounded-lg font-medium transition-all bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-indigo-600 hover:to-purple-600">
            {t.walletSetupGuide.addNetwork}
          </button>
        </div>
      )
    },
    {
      title: t.walletSetupGuide.steps[5].title,
      content: t.walletSetupGuide.steps[5].content,
      action: (
        <div>
          <ol className="mt-4 mb-4 list-decimal pl-5 space-y-2 text-gray-600">
            {t.walletSetupGuide.faucetSteps.map((step, index) => {
              if (index === 3) {
                return (
                  <li key={index}>
                    {step.split('Google Cloud Sepolia')[0]}
                    <a
                      href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 hover:text-purple-500 transition-all"
                    >
                      Google Cloud Sepolia {step.includes('水龍頭') ? '水龍頭' : step.includes('水龙头') ? '水龙头' : 'Faucet'}
                    </a>
                  </li>
                );
              }
              return <li key={index}>{step}</li>;
            })}
          </ol>
          <div className="info-box bg-blue-50/50 border border-blue-200 rounded-lg p-4 shadow-sm">
            <p className="text-blue-700"><strong>{t.walletSetupGuide.note}:</strong> {t.walletSetupGuide.testEthNote}</p>
          </div>
        </div>
      )
    },
    {
      title: t.walletSetupGuide.steps[6].title,
      content: t.walletSetupGuide.steps[6].content,
      action: (
        <div>
          <div className="space-y-4">
            {!walletConnected && (
              <button
                onClick={handleConnect}
                className="w-full px-6 py-4 rounded-lg font-medium transition-all bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-indigo-600 hover:to-purple-600"
              >
                {t.walletSetupGuide.connectWallet}
              </button>
            )}

            {walletConnected && !setupCompleted && (
              <div className="step-content">
                <p className="text-gray-600 mb-4">{t.walletSetupGuide.walletReadyMessage}</p>
                <div className="info-box bg-blue-50/50 border border-blue-200 rounded-lg p-4 shadow-sm mb-4">
                  <p className="text-blue-700">{t.walletSetupGuide.walletConnected}: <span className="font-mono">{address}</span></p>
                </div>
                <button
                  onClick={completeSetup}
                  disabled={isAuthenticating}
                  className={`w-full px-6 py-4 rounded-lg font-medium transition-all ${isAuthenticating
                    ? "bg-gray-400"
                    : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                    } text-white`}
                >
                  {isAuthenticating
                    ? (t.walletSetupGuide.authenticating || "Authenticating...")
                    : t.walletSetupGuide.confirmCompletion}
                </button>
              </div>
            )}

            {setupCompleted && verified && (
              <div className="step-content">
                <div className="info-box bg-blue-50/50 border border-blue-200 rounded-lg p-4 shadow-sm mb-4">
                  <p className="text-blue-700">{t.walletSetupGuide.walletConnected}: <span className="font-mono">{address}</span></p>
                </div>
                <div className="success-box bg-green-50/50 border border-green-200 rounded-lg p-4 shadow-sm">
                  <h3 className="text-green-700 font-bold mb-2">{t.walletSetupGuide.congratulations}</h3>
                  <p className="text-green-600">
                    {loginSuccess
                      ? (t.walletSetupGuide.loginSuccess || "您已成功登入!")
                      : t.walletSetupGuide.setupCompleteMessage}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    }
  ];

  if (!isMounted) return null;

  return (
    <div className=" bg-[#f5f5f5]">
      {!showCompletionModal && (
        <>
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-[#2d2d3a]">{t.walletSetupGuide.title}</h1>
                <p className="text-lg text-gray-600">{t.walletSetupGuide.welcome}</p>
              </div>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`rounded-lg transition-all duration-300 bg-white border-2 border-purple-200 shadow-md p-6`}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold shrink-0
                      bg-gradient-to-r from-blue-500 to-blue-600 text-white`}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-[#2d2d3a] mb-3">{step.title}</h2>
                        <p className="text-gray-600 mb-4">{step.content}</p>
                        <div className="mt-4">{step.action}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {showErrorModal && isMounted && typeof document !== 'undefined' && createPortal(
            <div className={`fixed inset-0 flex items-center justify-center z-[9999] error-modal ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
              <div className="modal-content rounded-sm p-8 max-w-md w-full relative shadow-2xl animate-fadeIn mx-4">
                <button
                  onClick={closeErrorModal}
                  className="close-button absolute top-3 right-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="flex flex-col items-center justify-center mb-6">
                  <div className="warning-icon p-4 rounded-full mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="error-message text-2xl font-bold mb-3 text-center">
                    {errorMessage}
                  </h3>
                </div>

                <div className="relative flex justify-center space-x-4">
                  {errorType === 'install' && (
                    <>
                      <a
                        href="https://metamask.io/download/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button px-6 py-3 rounded-sm transition-all font-medium flex-1 text-center"
                      >
                        {t.walletSetupGuide.installNow || "Install Now"}
                      </a>
                      <button
                        onClick={closeErrorModal}
                        className="secondary-button px-6 py-3 rounded-sm transition-all flex-1"
                      >
                        {t.walletSetupGuide.close || "Close"}
                      </button>
                    </>
                  )}

                  {errorType === 'network' && (
                    <>
                      <button
                        onClick={() => {
                          closeErrorModal();
                          handleAddSepoliaNetwork();
                        }}
                        className="primary-button px-6 py-3 rounded-sm transition-all font-medium flex-1 text-center"
                      >
                        {t.walletSetupGuide.switchNetwork || "Switch Network"}
                      </button>
                      <button
                        onClick={closeErrorModal}
                        className="secondary-button px-6 py-3 rounded-sm transition-all flex-1"
                      >
                        {t.walletSetupGuide.close || "Close"}
                      </button>
                    </>
                  )}

                  {(errorType === 'connect' || errorType === 'balance') && (
                    <button
                      onClick={closeErrorModal}
                      className="secondary-button px-6 py-3 rounded-sm transition-all flex-1"
                    >
                      {t.walletSetupGuide.close || "Close"}
                    </button>
                  )}
                </div>
              </div>
            </div>,
            document.body
          )}
        </>
      )}
      {/* 挑战完成模态框 */}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="wallet-setup-guide"
      />
    </div>
  );
}
