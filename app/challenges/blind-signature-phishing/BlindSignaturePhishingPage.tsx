'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import NetworkCheck, { getNetworkName } from '@/app/components/NetworkCheck';
const SEPOLIA_CHAIN_ID = 11155111; // Decimal form of 0xaa36a7

export default function BlindSignaturePhishingPage() {
  const { t } = useLanguage();
  const { address, isConnected, chainId: accountChainId } = useAccount();
  const { connectAsync } = useConnect();
  const { disconnect } = useDisconnect();

  const [showEthSignPopup, setShowEthSignPopup] = useState(false);
  const [ethSignResult, setEthSignResult] = useState('');
  const [personalSignResult, setPersonalSignResult] = useState('');
  const [personalSignHashResult, setPersonalSignHashResult] = useState('');
  const [ethSignRejected, setEthSignRejected] = useState(false);
  const [personalSignRejected, setPersonalSignRejected] = useState(false);
  const [personalSignHashRejected, setPersonalSignHashRejected] = useState(false);
  const [signTypedDataRejected, setSignTypedDataRejected] = useState(false);
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [networkCheckTriggered, setNetworkCheckTriggered] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ethSignRejected && personalSignRejected && personalSignHashRejected && signTypedDataRejected) {
      setChallengeCompleted(true);
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [ethSignRejected, personalSignRejected, personalSignHashRejected, signTypedDataRejected]);
  const handleConnect = async () => {
    try {
      await connectAsync({ connector: injected() });
    } catch (error) {
      console.error('Connection error:', error);
    }
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const useEthSign = () => {
    setShowEthSignPopup(true);
  };

  const showEthSignResult = () => {
    if (accountChainId !== SEPOLIA_CHAIN_ID) {
      setNetworkCheckTriggered(true);
      return; // 如果網路不正確，先不繼續執行
    }
    setShowEthSignPopup(false);
    setEthSignRejected(false);
    setEthSignResult('⚠️' + t.blindSignaturePhishing.method1.signedWarning);
  };

  const showEthSignCancelResult = () => {
    setShowEthSignPopup(false);
    setEthSignResult('✅' + t.blindSignaturePhishing.method1.cancelSuccess);
    setEthSignRejected(true);
  };

  const usePersonalSign = async () => {
    try {
      if (accountChainId !== SEPOLIA_CHAIN_ID) {
        setNetworkCheckTriggered(true);
        return; // 如果網路不正確，先不繼續執行
      }
      const message = t.blindSignaturePhishing.method2.message;
      await window.ethereum.request({
        method: 'personal_sign',
        params: [message, address],
      });
      setPersonalSignRejected(false);
      setPersonalSignResult('⚠️ ' + t.blindSignaturePhishing.method2.signedWarning);
    } catch (error) {
      setPersonalSignRejected(true);
      setPersonalSignResult('✅ ' + t.blindSignaturePhishing.method2.cancelSuccess);
      console.error('SignTypedData error:', error);
    }
  };

  const usePersonalSignHash = async () => {
    try {
      if (accountChainId !== SEPOLIA_CHAIN_ID) {
        setNetworkCheckTriggered(true);
        return; // 如果網路不正確，先不繼續執行
      }
      const hash = '0x87f9a053d4800c6354e76c7985a865d2922c82fb5b3f4577b2fe08b9989854f2';
      await window.ethereum.request({
        method: 'personal_sign',
        params: [hash, address],
      });
      setPersonalSignHashRejected(false);
      setPersonalSignHashResult('⚠️' + t.blindSignaturePhishing.method3.signedWarning);
    } catch (error) {
      setPersonalSignHashRejected(true);
      setPersonalSignHashResult('✅' + t.blindSignaturePhishing.method3.cancelSuccess);
      console.error('SignTypedData error:', error);
    }
  };

  const useSignTypedData = async () => {
    try {
      if (accountChainId !== SEPOLIA_CHAIN_ID) {
        setNetworkCheckTriggered(true);
        return; // 如果網路不正確，先不繼續執行
      }
      const domain = {
        name: t.blindSignaturePhishing.method3.domain.name,
        version: '1',
        chainId: 11155111,
        verifyingContract: '0x1234567890123456789012345678901234567890'
      };

      const types = {
        AirdropClaim: [
          { name: 'user', type: 'address' },
          { name: 'amount', type: 'uint256' },
          { name: 'referralCode', type: 'string' }
        ]
      };

      const value = {
        user: address,
        amount: '1000000000000000000000',
        referralCode: 'WELCOME2023'
      };

      const signature = await window.ethereum.request({
        method: 'eth_signTypedData_v4',
        params: [address, JSON.stringify({
          types: types,
          primaryType: 'AirdropClaim',
          domain: domain,
          message: value
        })],
      });
      console.log(signature);
      setSignTypedDataRejected(false);
    } catch (error) {
      setSignTypedDataRejected(true);
      console.error('SignTypedData error:', error);
    }
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">

          <h1 className="text-3xl font-bold text-center mb-4">
            {t.blindSignaturePhishing.title}
          </h1>
          <h2 className="text-xl text-center mb-4">
            {t.blindSignaturePhishing.subtitle}
          </h2>
          <h3 className="text-lg text-center mb-8 text-red-500">
            {t.blindSignaturePhishing.warning}
          </h3>

          <div className="mb-8 text-center">
            <p className="mb-2">
              {t.blindSignaturePhishing.networkStatus}
              {/* <span className="font-medium">
                {isConnected ? 'Sepia Testnet' : t.common.notConnected}
              </span> */}
              {isConnected ? (
                <span className={`font-medium ${accountChainId === SEPOLIA_CHAIN_ID ? 'text-green-600' : 'text-red-600'}`}>
                  {accountChainId === SEPOLIA_CHAIN_ID
                    ? 'Sepia Testnet'
                    : accountChainId
                      ? `${getNetworkName(accountChainId)} (ChainID: ${accountChainId})`
                      : "未知網路"
                  }
                  {accountChainId !== SEPOLIA_CHAIN_ID && (
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
              {t.blindSignaturePhishing.walletStatus}
              <span className="font-mono">
                {address
                  ? `${address.slice(0, 6)}...${address.slice(-4)}`
                  : t.common.notConnected}
              </span>
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
                <h3>{t.blindSignaturePhishing.step2Title}</h3>
                <p>{t.blindSignaturePhishing.signatureMethodDescription}</p>

                <div className="signature-method mb-8 p-6 border border-gray-200 rounded-lg bg-gray-50">
                  <h4 className="text-xl font-semibold mb-4">{t.blindSignaturePhishing.method1.title}</h4>
                  <p className="mb-4 text-gray-600">{t.blindSignaturePhishing.method1.description}</p>
                  <p className="mb-4 text-gray-500 italic">
                    {t.blindSignaturePhishing.method1.deprecatedNote}
                  </p>
                  <button
                    onClick={useEthSign}
                    className="w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors mb-4"
                  >
                    {t.blindSignaturePhishing.method1.button}
                  </button>

                  {showEthSignPopup && (
                    <div className="w-[360px] border border-gray-300 rounded-lg shadow-lg mx-auto my-5 bg-white overflow-hidden font-sans">
                      <div className="flex items-center p-3 bg-gray-50 border-b border-gray-200">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full border border-gray-300 bg-gray-300 flex items-center justify-center text-[8px] text-gray-600">−</div>
                          <div className="w-3 h-3 rounded-full border border-gray-300 bg-white flex items-center justify-center text-[8px] text-gray-600">□</div>
                          <div className="w-3 h-3 rounded-full border border-gray-300 bg-gray-300 flex items-center justify-center text-[8px] text-gray-600">×</div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 text-center border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-700 m-0">Signature Request</h3>
                      </div>

                      <div className="flex justify-between p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-2 font-bold">A</div>
                          <div className="text-gray-600 text-sm">Account 1</div>
                        </div>
                        <div className="text-gray-600 text-sm">Balance: 0 ETH</div>
                      </div>

                      <div className="p-4 text-center text-base text-gray-800 border-b border-gray-200">
                        Your signature is being requested
                      </div>

                      <div className="p-3 bg-red-50 border-b border-gray-200 text-red-600 text-xs leading-relaxed">
                        {t.blindSignaturePhishing.metamaskWarning}
                        <a href="#" className="text-blue-600 no-underline">{t.blindSignaturePhishing.method1.learnMore}</a>
                      </div>

                      <div className="p-4 border-b border-gray-200">
                        <div className="text-sm text-gray-500 mb-2">Message:</div>
                        <div className="font-mono text-xs text-gray-800 bg-gray-50 p-2 rounded break-all">
                          0x87f9a053d4800c6354e76c7985a865d2922c82fb5b3f4577b2fe08b9989854f2e0
                        </div>
                      </div>

                      <div className="flex p-4 gap-3">
                        <button
                          className="flex-1 py-2.5 rounded bg-gray-50 border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-100 transition-colors"
                          onClick={() => showEthSignCancelResult()}
                        >
                          {t.blindSignaturePhishing.method1.cancel}
                        </button>
                        <button
                          className="flex-1 py-2.5 rounded bg-blue-600 border border-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                          onClick={() => showEthSignResult()}
                        >
                          {t.blindSignaturePhishing.method1.sign}
                        </button>
                      </div>
                    </div>
                  )}

                  {ethSignResult.includes('⚠️') && (
                    <div className="mt-4 p-4 rounded-lg bg-gray-100 border border-gray-200">
                      ⚠️ {t.blindSignaturePhishing.method1.signedWarning}
                    </div>
                  )}
                  {ethSignResult.includes('✅') && (
                    <div className="mt-4 p-4 rounded-lg bg-gray-100 border border-gray-200">
                      ✅ {t.blindSignaturePhishing.method1.cancelSuccess}
                    </div>
                  )}
                </div>

                <div className="signature-method mb-8 p-6 border border-gray-200 rounded-lg bg-gray-50">
                  <h4 className="text-xl font-semibold mb-4">{t.blindSignaturePhishing.method2.title}</h4>
                  <p className="mb-4 text-gray-600">{t.blindSignaturePhishing.method2.description}</p>
                  <div className="space-y-4">
                    <button
                      onClick={usePersonalSign}
                      className="w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                    >
                      {t.blindSignaturePhishing.method2.button}
                    </button>
                    {personalSignResult.includes('⚠️') &&
                      <div className="p-4 rounded-lg bg-gray-100 border border-gray-200 ">
                        ⚠️ {t.blindSignaturePhishing.method2.signedWarning}
                      </div>
                    }
                    {personalSignResult.includes('✅') && (
                      <div className="p-4 rounded-lg bg-gray-100 border border-gray-200 ">
                        ✅ {t.blindSignaturePhishing.method2.cancelSuccess}
                      </div>
                    )}
                    <button
                      onClick={usePersonalSignHash}
                      className="w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                    >
                      {t.blindSignaturePhishing.method2.hashButton}
                    </button>
                    {personalSignHashResult.includes('⚠️') &&
                      <div className="p-4 rounded-lg bg-gray-100 border border-gray-200 ">
                        ⚠️ {t.blindSignaturePhishing.method2.signedWarning}
                      </div>
                    }
                    {personalSignHashResult.includes('✅') && (
                      <div className="p-4 rounded-lg bg-gray-100 border border-gray-200 ">
                        ✅ {t.blindSignaturePhishing.method2.cancelSuccess}
                      </div>
                    )}
                  </div>
                </div>

                <div className="signature-method mb-8 p-6 border border-gray-200 rounded-lg bg-gray-50">
                  <h4 className="text-xl font-semibold mb-4">{t.blindSignaturePhishing.method3.title}</h4>
                  <p className="mb-4 text-gray-600">{t.blindSignaturePhishing.method3.description}</p>
                  <button
                    onClick={useSignTypedData}
                    className="w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                  >
                    {t.blindSignaturePhishing.method3.button}
                  </button>
                  {signTypedDataRejected && (
                    <div className="mt-4 p-4 rounded-lg bg-gray-100 border border-gray-200">
                      ✅ {t.blindSignaturePhishing.method3.cancelSuccess}
                    </div>
                  )}
                </div>

                {challengeCompleted && (
                  <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
                    {t.blindSignaturePhishing.challengeCompleted}
                  </div>
                )}

                <button
                  onClick={handleDisconnect}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors mt-4"
                >
                  {t.common.disconnect}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="blind-signature-phishing"
      />
      {/* 使用 NetworkCheck 組件，不需要條件渲染，當按下按鈕時就會觸發 */}
      <NetworkCheck
        requiredChainId={SEPOLIA_CHAIN_ID}
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
