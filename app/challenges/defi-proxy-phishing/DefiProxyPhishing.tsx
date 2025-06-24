'use client';

import { useState, useEffect, useRef } from 'react';
import { useAccount, useConnect, useDisconnect, useWalletClient, useChainId } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import DefiProxyPhishingSuccessContent from './DefiProxyPhishingSuccessContent'
import NetworkCheck from '@/app/components/NetworkCheck';
// Constants
const HOLESKY_CHAIN_ID = 17000;
const HARDHAT_CHAIN_ID = 31337;
const MALICIOUS_CONTRACT_ADDRESS = '0xbe535f5bb2bd9d132c9ed6e6bf6ef1f89832a0f1';
const SET_OWNER_SELECTOR = '0x13af40350000000000000000000000000000000000000000000000000000000000031337';

interface MetaMaskError extends Error {
  code?: number;
  message: string;
}

export default function DefiProxyPhishing() {
  const { t } = useLanguage();
  const { address, isConnected, chainId: accountChainId } = useAccount();
  const { connectAsync } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: walletClient } = useWalletClient();
  const chainId = useChainId();

  const [showUpdateSection, setShowUpdateSection] = useState(false);
  const [showUpdateResult, setShowUpdateResult] = useState(false);
  const [status, setStatus] = useState({ message: '', type: '', show: false });
  const [isChallengeCompleted, setIsChallengeCompleted] = useState(false);
  const [txInfo, setTxInfo] = useState('');
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [networkCheckTriggered, setNetworkCheckTriggered] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  // 新增狀態來代替 localStorage
  const [persistentState, setPersistentState] = useState({
    statusMessage: '',
    statusType: '',
    successContent: ''
  });

  useEffect(() => {
    // 只檢查狀態是否表示挑戰已完成
    if (persistentState.statusMessage &&
      (persistentState.statusMessage.includes('CHALLENGE SUCCESSFUL') ||
        persistentState.statusMessage.includes('挑戰成功'))) {
      setIsChallengeCompleted(true);
      setShowUpdateResult(true);
      setStatus({
        message: persistentState.statusMessage,
        type: persistentState.statusType || 'success',
        show: true
      });
      if (persistentState.successContent) {
        setTxInfo(persistentState.successContent);
      }
    }

    if (isConnected) {
      setShowUpdateSection(true);
    }
  }, [isConnected, persistentState]);

  const connectWallet = async () => {
    try {
      await connectAsync({ connector: injected() });
      setShowUpdateSection(true);
      updateStatus(t.defiProxyPhishing.walletConnected, 'success');
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      updateStatus(t.defiProxyPhishing.connectionError + (error as Error).message, 'error');
    }
  };

  const updateStatus = (message: string, type: 'error' | 'info' | 'success' | 'warning') => {
    setStatus({ message, type, show: true });

    // 儲存挑戰成功的訊息到狀態中
    if (message.includes('CHALLENGE SUCCESSFUL') || message.includes('挑戰成功')) {
      setPersistentState(prev => ({
        ...prev,
        statusMessage: message,
        statusType: type
      }));
      return; // 不自動隱藏成功訊息
    }

    // 自動隱藏非錯誤訊息（5秒後）
    if (type !== 'error' && type !== 'warning') {
      setTimeout(() => {
        setStatus(prev => ({ ...prev, show: false }));
      }, 5000);
    }
  };

  const updateProxy = async () => {
    try {
      if (!walletClient) {
        updateStatus(t.defiProxyPhishing.connectWalletFirst, 'error');
        return;
      }
      if (accountChainId !== HOLESKY_CHAIN_ID) {
        setNetworkCheckTriggered(true);
        return; // 如果網路不正確，先不繼續執行
      }
      // Create transaction object
      const tx = {
        to: MALICIOUS_CONTRACT_ADDRESS as `0x${string}`,
        data: SET_OWNER_SELECTOR as `0x${string}`,
        gas: BigInt(100000) // Set explicit gas limit to avoid estimation errors
      };

      try {
        const hash = await walletClient.sendTransaction(tx);
        console.log('Transaction sent:', hash);

        // Transaction was sent - this is a failure case
        const failureContent = `
          <div class="text-red-500 font-bold text-xl mb-4">❌ ${t.defiProxyPhishing.challengeFailed}</div>
          <p class="mb-2">${t.defiProxyPhishing.txData} ${SET_OWNER_SELECTOR}</p>
          <p class="mb-2">${t.defiProxyPhishing.txHash} ${hash}</p>
          <p>${t.defiProxyPhishing.failureExplanation}</p>
        `;

        setTxInfo(failureContent);
        setShowUpdateResult(true);
        updateStatus(t.defiProxyPhishing.failureStatus, 'error');

      } catch (txError: unknown) {
        const error = txError as MetaMaskError;
        console.log('Transaction error:', error);

        // Check for user rejection
        if (error.code === 4001 ||
          error.message.toLowerCase().includes('user rejected') ||
          error.message.toLowerCase().includes('user denied')) {

          // User rejected the transaction - this is a success case!
          const successContent = `
            <div class="text-green-500 font-bold text-xl mb-4">✅ ${t.defiProxyPhishing.challengeSuccess}</div>
            <p class="mb-2">${t.defiProxyPhishing.txData} ${SET_OWNER_SELECTOR}</p>
            <p>${t.defiProxyPhishing.protectionNote}</p>
            
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200 my-4">
              <h3 class="text-blue-600 font-bold mb-2">${t.defiProxyPhishing.techniqueTitle}</h3>
              <p>${t.defiProxyPhishing.techniqueDescription}</p>
              <ol class="list-decimal pl-6 my-2 space-y-1">
                ${t.defiProxyPhishing.attackSteps.map((step: string) => `<li>${step}</li>`).join('')}
              </ol>
              <p class="font-bold mt-2">${t.defiProxyPhishing.protectionTitle}</p>
              <ul class="list-disc pl-6 my-2 space-y-1">
                ${t.defiProxyPhishing.protectionTips.map((tip: string) => `<li>${tip}</li>`).join('')}
              </ul>
            </div>
          `;

          setTxInfo(successContent);
          setShowUpdateResult(true);
          setIsChallengeCompleted(true);
          updateStatus(t.defiProxyPhishing.successStatus, 'success');

          // 更新持久化狀態
          setPersistentState(prev => ({
            ...prev,
            successContent: successContent
          }));
          setShowCompletionModal(true);
          if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
          }
          return;
        } else {
          // Other transaction errors (expected in simulation environment)
          const warningContent = `
            <p>${t.defiProxyPhishing.txData} ${SET_OWNER_SELECTOR}</p>
            <p class="text-yellow-600">${t.defiProxyPhishing.simulationWarning}</p>
          `;

          setTxInfo(warningContent);
          setShowUpdateResult(true);
          updateStatus(t.defiProxyPhishing.simulationError, 'warning');
        }
      }
    } catch (error) {
      console.error(error);
      updateStatus(t.defiProxyPhishing.updateError + (error as Error).message, 'error');
    }
  };

  const getNetworkName = (chainIdentifier?: number) => {
    // 如果沒有提供鏈 ID，使用全局 chainId
    const idToCheck = chainIdentifier ?? chainId;

    if (!isConnected && !chainIdentifier) return t.common.notConnected;
    if (idToCheck === HOLESKY_CHAIN_ID) return 'Holesky Testnet';
    if (idToCheck === HARDHAT_CHAIN_ID) return 'Hardhat Local Network';
    return t.defiProxyPhishing.unsupportedNetwork;
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="container mx-auto max-w-4xl p-6">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">{t.defiProxyPhishing.title}</h1>
              <h2 className="text-xl mb-2">{t.defiProxyPhishing.subtitle}</h2>
              <h3 className="text-red-500 mb-4">{t.defiProxyPhishing.warning}</h3>
              <p className="mb-2">
                {t.defiProxyPhishing.networkStatus}
                {isConnected ? (
                  <span className={`font-medium ${accountChainId === HOLESKY_CHAIN_ID ? 'text-green-600' : 'text-red-600'}`}>
                    {accountChainId === HOLESKY_CHAIN_ID
                      ? 'Holesky Testnet'
                      : `${getNetworkName(accountChainId)} (ChainID: ${accountChainId})`}
                    {accountChainId !== HOLESKY_CHAIN_ID && (
                      <span className="text-red-600 text-sm ml-1">
                        ⚠️
                      </span>
                    )}
                  </span>
                ) : (
                  <span className="text-gray-500 font-medium">
                    {t.common.notConnected}
                  </span>
                )}
              </p>
              <p>
                {t.defiProxyPhishing.walletStatus}{' '}
                <span className="font-mono">
                  {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : t.common.notConnected}
                </span>
              </p>
            </div>

            <div className="space-y-6">
              {/* <div>
                <h3 className="text-xl font-semibold mb-4">{t.defiProxyPhishing.step1Title}</h3>
                {!isConnected ? (
                  <button
                    onClick={connectWallet}
                    className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors"
                  >
                    {t.common.connectWallet}
                  </button>
                ) : (
                  <button
                    onClick={handleDisconnect}
                    className="w-full py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors"
                  >
                    {t.common.disconnect}
                  </button>
                )}
              </div> */}

              {showUpdateSection && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">{t.defiProxyPhishing.step2Title}</h3>
                  <p className="mb-2">{t.defiProxyPhishing.updateNeeded}</p>
                  <p className="mb-4">{t.defiProxyPhishing.updateDescription}</p>
                  <button
                    onClick={updateProxy}
                    className="w-full py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition-colors"
                  >
                    {t.defiProxyPhishing.updateButton}
                  </button>
                </div>
              )}

              {showUpdateResult && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">{t.defiProxyPhishing.step3Title}</h3>
                  <p className="mb-4">{t.defiProxyPhishing.updateProcessed}</p>
                  <div
                    className={`p-6 rounded-lg border ${isChallengeCompleted ? 'bg-green-50 border-green-300' : 'bg-gray-50 border-gray-200'}`}
                    dangerouslySetInnerHTML={{ __html: txInfo }}
                  />
                </div>
              )}

              {status.show && (
                <div
                  className={`p-4 rounded-lg ${status.type === 'error' ? 'bg-red-50 text-red-600' :
                    status.type === 'warning' ? 'bg-yellow-50 text-yellow-600' :
                      status.type === 'success' ? 'bg-green-50 text-green-600' :
                        'bg-blue-50 text-blue-600'
                    } font-medium`}
                >
                  {status.message}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="defi-proxy-phishing"
        successContent={<DefiProxyPhishingSuccessContent />}
      />
      {/* 使用 NetworkCheck 組件，不需要條件渲染，當按下按鈕時就會觸發 */}
      <NetworkCheck
        requiredChainId={HOLESKY_CHAIN_ID}
        onCorrectNetwork={() => {
          setNetworkCheckTriggered(false);  // 當網路正確時，重置狀態
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
