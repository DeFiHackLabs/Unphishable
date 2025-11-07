'use client';

import { useState } from 'react';
import { useAccount, useConnect, useSignTypedData } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Signature } from 'ethers';
import { getAddress } from 'viem';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import PermitPhishingSuccessContent from './PermitPhishingSuccessContent';
import NetworkCheck, { getNetworkName } from '@/app/components/NetworkCheck';

// Constants
const SEPOLIA_CHAIN_ID = 11155111; // Decimal form of 0xaa36a7
const USDC_CONTRACT_ADDRESS = '0x74a4a85c611679b73f402b36c0f84a7d2ccdfda3';
const PHISHING_SPENDER_ADDRESS = '0x1234567890123456780012345678901234567890';
const MAX_UINT256 = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
interface WalletError extends Error {
  code?: number;
  message: string;
}

export default function PermitPhishingPage() {
  const { t } = useLanguage();
  const { address, isConnected, chainId: accountChainId } = useAccount();
  const { connectAsync } = useConnect();
  const { signTypedDataAsync } = useSignTypedData();
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [networkCheckTriggered, setNetworkCheckTriggered] = useState(false);
  const [signatureData, setSignatureData] = useState<{
    domain?: {
      name: string;
      version: string;
      chainId: number;
      verifyingContract: string;
    };
    types?: {
      Permit: {
        name: string;
        type: string;
      }[];
    };
    message?: {
      owner: string;
      spender: string;
      value: string;
      nonce: number;
      deadline: number;
    };
    signature?: string;
    r?: string;
    s?: string;
    v?: number;
    challengeCompleted?: boolean;
  } | null>(null);

  const handleConnect = async () => {
    try {
      if (accountChainId !== SEPOLIA_CHAIN_ID) {
        if (accountChainId)
          setNetworkCheckTriggered(true);
        return; // 如果網路不正確，先不繼續執行
      }
      await connectAsync({ connector: injected() });

    } catch (error) {
      console.error('Connection error:', error);
    }
  };

  // const handleDisconnect = () => {
  //   disconnect();
  //   setSignatureData(null);
  // };

  const handleSignPermit = async () => {
    try {
      if (!address) return;

      // 直接檢查網路是否正確
      if (accountChainId !== SEPOLIA_CHAIN_ID) {
        setNetworkCheckTriggered(true);
        return; // 如果網路不正確，先不繼續執行
      }

      // 網路正確，繼續處理 Permit 簽名
      const domain = {
        name: 'USD Coin',
        version: '2',
        chainId: SEPOLIA_CHAIN_ID,
        verifyingContract: getAddress(USDC_CONTRACT_ADDRESS),
      };

      const nonce = Math.floor(Math.random() * 1_000_000);
      const deadline = Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60;

      const types = {
        Permit: [
          { name: 'owner', type: 'address' },
          { name: 'spender', type: 'address' },
          { name: 'value', type: 'uint256' },
          { name: 'nonce', type: 'uint256' },
          { name: 'deadline', type: 'uint256' },
        ],
      };

      const message = {
        owner: getAddress(address),
        spender: getAddress(PHISHING_SPENDER_ADDRESS),
        value: MAX_UINT256,
        nonce,
        deadline,
      };

      const signature = await signTypedDataAsync({
        domain,
        types,
        message,
        primaryType: 'Permit',
      });

      const sig = Signature.from(signature); // ethers v6

      setSignatureData({
        domain,
        types,
        message,
        signature,
        r: sig.r,
        s: sig.s,
        v: sig.v,
      });
    } catch (error: unknown) {
      console.error('Signature error:', error);

      const walletError = error as WalletError;
      if (
        walletError?.code === 4001 ||
        walletError?.message?.toLowerCase().includes('user denied') ||
        walletError?.message?.toLowerCase().includes('user rejected')
      ) {
        setSignatureData({
          challengeCompleted: true,
        });
        setShowCompletionModal(true);
      }
    }
  };

  return (
    <>
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">

          <>
            <h1 className="text-3xl font-bold text-center mb-4">
              {t.permitPhishing.title}
            </h1>
            <h2 className="text-xl text-center mb-4">
              {t.permitPhishing.subtitle}
            </h2>
            <h3 className="text-lg text-center mb-8 text-red-500">
              {t.permitPhishing.warning}
            </h3>

            <div className="mb-8 text-center">
              <p className="mb-2">
                {t.permitPhishing.networkStatus}{' '}
                {isConnected ? (
                  <span className={`font-medium ${accountChainId === SEPOLIA_CHAIN_ID ? 'text-green-600' : 'text-red-600'}`}>
                    {accountChainId === SEPOLIA_CHAIN_ID
                      ? 'Sepolia Testnet'
                      : accountChainId
                        ? `${getNetworkName(accountChainId)} (ChainID: ${accountChainId})`
                        : "未知網路"}
                    {accountChainId !== SEPOLIA_CHAIN_ID && (
                      <span className="text-red-600 text-sm ml-1">
                        ⚠️
                      </span>
                    )}
                  </span>
                ) : (
                  <span className="text-gray-500 font-medium">
                    {t.permitPhishing.notConnected}
                  </span>
                )}
              </p>
              <p>
                {t.permitPhishing.walletStatus}{' '}
                {address ? (
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                    {`${address.slice(0, 6)}...${address.slice(-4)}`}
                  </span>
                ) : (
                  <span className="text-gray-500 font-medium">
                    {t.permitPhishing.notConnected}
                  </span>
                )}
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              {!isConnected ? (
                <button
                  onClick={handleConnect}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  {t.common.connectWallet}
                </button>
              ) : (
                <div className="w-full max-w-md">
                  <div className="mb-4">
                    <p className="mb-2">{t.permitPhishing.spenderAddress}</p>
                    <code className="block p-2 bg-gray-100 rounded font-mono text-sm break-all">
                      {PHISHING_SPENDER_ADDRESS}
                    </code>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={handleSignPermit}
                      className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                    >
                      {t.permitPhishing.signPermit}
                    </button>
                    {/* <button
                      onClick={handleDisconnect}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      {t.common.disconnect}
                    </button> */}
                  </div>

                  {signatureData && (
                    <div className="mt-8">
                      {!signatureData.challengeCompleted && (
                        <>
                          <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4">
                              {t.permitPhishing.signatureResult}
                            </h3>
                            <div className="p-4 border-2 border-yellow-500 rounded-lg bg-yellow-50">
                              <p className="text-red-600 font-bold mb-4">
                                {t.permitPhishing.signatureDetails.warning}
                              </p>
                              <p className="font-bold mb-2">
                                {t.permitPhishing.signatureDetails.title}
                              </p>
                              <pre className="p-4 bg-gray-100 rounded overflow-x-auto text-sm mb-4">
                                {JSON.stringify(signatureData, null, 2)}
                              </pre>
                              <p className="text-gray-700">
                                {t.permitPhishing.signatureDetails.permissionNote.replace(
                                  '{spender}',
                                  `${PHISHING_SPENDER_ADDRESS.slice(0, 6)}...${PHISHING_SPENDER_ADDRESS.slice(-4)}`
                                ).replace(
                                  '{deadline}',
                                  new Date((signatureData.message?.deadline ?? 0) * 1000).toLocaleString()
                                )}
                              </p>
                              <p className="mt-4 text-yellow-600 font-semibold">
                                {t.permitPhishing.signatureDetails.success}
                              </p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </>

        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="permit-phishing"
        successContent={<PermitPhishingSuccessContent />}
      />

      {/* 使用 NetworkCheck 組件，不需要條件渲染，當按下按鈕時就會觸發 */}
      <NetworkCheck
        requiredChainId={SEPOLIA_CHAIN_ID}
        onCorrectNetwork={() => {
          setNetworkCheckTriggered(false);  // 當網路正確時，重置狀態
          // 如果切換到正確網路後，自動再次嘗試簽名
          // if (networkCheckTriggered) {
          //   setTimeout(() => handleSignPermit(), 500);  // 稍微延遲確保網路已切換
          // }
        }}
        onCancelNetworkSwitch={() => {
          setNetworkCheckTriggered(false); // 重置觸發狀態
        }}
      >
        {/* 提供一個自訂的模態顯示控制 */}
        <div style={{ display: 'none' }}>
          {networkCheckTriggered && <button id="trigger-network-check" />}
        </div>
      </NetworkCheck>
    </>
  );
}
