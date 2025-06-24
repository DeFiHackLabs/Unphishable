'use client';

import { useAccount } from 'wagmi';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import { translations } from '@/app/i18n';
import type { Language } from '@/app/i18n';
import GovernanceProposalPhishingSuccessContent from './GovernanceProposalPhishingSuccessContent';
import NetworkCheck, { getNetworkName } from '@/app/components/NetworkCheck';
const HOLESKY_CHAIN_ID = 17000; // Decimal form of 0x4268

const GovernanceProposalPhishing = () => {
  const { language, } = useLanguage();
  const { address, isConnected, chainId: accountChainId } = useAccount();
  const [walletConnected, setWalletConnected] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('info');
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [networkCheckTriggered, setNetworkCheckTriggered] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Constants
  const MALICIOUS_MESSAGE = "I authorize the transfer of all my assets to 0x1234567890abcdef1234567890abcdef12345678";

  // Get translations
  const currentT = translations[language as Language].governanceProposalPhishing;

  useEffect(() => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
      updateStatus(currentT.walletStatus.pleaseConnect, 'info');
    } else {
      updateStatus(currentT.walletStatus.installMetaMask, 'error');
    }
  }, [language]);

  // Update status message
  const updateStatus = (message: string, type: string) => {
    setStatusMessage(message);
    setStatusType(type);
  };

  // Connect wallet function
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        if (accountChainId !== HOLESKY_CHAIN_ID) {
          setNetworkCheckTriggered(true);
          return; // 如果網路不正確，先不繼續執行
        }
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletConnected(true);
        updateStatus(currentT.walletStatus.connected, 'success');
      } catch (error) {
        console.error('Error connecting wallet:', error);
        updateStatus(currentT.walletStatus.connectionError, 'error');
      }
    } else {
      updateStatus(currentT.walletStatus.installMetaMask, 'error');
    }
  };

  // Handle vote function
  const handleVote = async () => {
    if (!walletConnected) {
      updateStatus(currentT.walletStatus.connectFirst, 'warning');
      return;
    }

    try {
      if (accountChainId !== HOLESKY_CHAIN_ID) {
        setNetworkCheckTriggered(true);
        return; // 如果網路不正確，先不繼續執行
      }
      // Simulate a malicious transaction request
      const provider = window.ethereum;
      const accounts = await provider.request({ method: 'eth_accounts' });

      if (accounts.length === 0) {
        throw new Error('No connected accounts');
      }

      // Request signature for malicious message
      try {
        await provider.request({
          method: 'personal_sign',
          params: [MALICIOUS_MESSAGE, accounts[0]],
        });

        // If user signs the malicious message (fails the challenge)
        setShowResult(true);
        setIsSuccess(false);
        updateStatus(currentT.challengeResult.failure.description, 'error');
      } catch (error) {
        console.error('User rejected the signature:', error);
        // If user rejects the signature (passes the challenge)
        setShowResult(true);
        setIsSuccess(true);
        updateStatus(currentT.challengeResult.success.description, 'success');
        setShowCompletionModal(true);
        if (chatEndRef.current) {
          chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        // Submit challenge completion
      }
    } catch (error) {
      console.error('Error during voting:', error);
      updateStatus(currentT.walletStatus.connectionError, 'error');
    }
  };

  // Retry challenge function
  const retryChallenge = () => {
    setShowResult(false);
    setIsSuccess(false);
    updateStatus(currentT.walletStatus.pleaseConnect, 'info');
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Title and Description */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">{currentT.title}</h1>
              <p className="mb-4">{currentT.subtitle}</p>
            </div>

            {/* Proposal Section */}
            {!showResult && (
              <div className="border border-gray-300 p-5 my-5 rounded-md bg-gray-50">
                <h2 className="text-2xl font-bold text-center mb-4">{currentT.proposalTitle}</h2>
                <p className="mb-3">
                  <strong>{currentT.proposalDescriptionLabel}</strong>
                  {currentT.proposalDescription}
                </p>
                <p className="mb-3">
                  <strong>{currentT.proposerLabel}</strong> 0x742...F3b9
                  {`(${currentT.proposer})`}
                </p>
                <p className="mb-5">
                  <strong>{currentT.deadlineLabel}</strong>
                  {currentT.deadline}
                </p>

                {/* Vote Buttons */}
                <div className="flex justify-center space-x-4 mt-6">
                  <button
                    onClick={() => handleVote()}
                    className="bg-green-600 text-white px-6 py-3 rounded-md font-bold hover:bg-green-700 transition-colors"
                  >
                    {currentT.buttonVoteFor}
                  </button>
                  <button
                    onClick={() => handleVote()}
                    className="bg-red-600 text-white px-6 py-3 rounded-md font-bold hover:bg-red-700 transition-colors"
                  >
                    {currentT.buttonVoteAgainst}
                  </button>
                </div>
              </div>
            )}

            {/* Result Section */}
            {showResult && (
              <div className={`p-6 rounded-lg ${isSuccess ? 'bg-green-50' : 'bg-red-50'} border ${isSuccess ? 'border-green-200' : 'border-red-200'} my-6`}>
                {isSuccess ? (
                  <>
                    <div className="text-center py-4 px-3 bg-green-100 rounded-lg mb-6">
                      <h3 className="text-2xl font-bold text-green-700 mb-2">
                        {currentT.challengeResult.success.title}
                      </h3>
                      <p className="text-lg">
                        {currentT.challengeResult.success.description}
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="font-bold">{currentT.phishingAnalysis.warning}</p>
                      <p>{currentT.phishingAnalysis.voteMessage}</p>
                      <p className="my-2 p-3 bg-gray-100 font-mono text-sm rounded border border-gray-300 overflow-x-auto">
                        {MALICIOUS_MESSAGE}
                      </p>
                      <p>{currentT.phishingAnalysis.signatureConsequence}</p>
                      <p className="font-bold mt-3">{currentT.phishingAnalysis.alwaysRead}</p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
                      <h4 className="text-lg font-bold text-blue-700 mb-2">
                        {currentT.phishingAnalysis.title}
                      </h4>
                      <p>{currentT.phishingAnalysis.description}</p>

                      <ol className="list-decimal pl-6 my-3 space-y-1">
                        {currentT.phishingAnalysis.techniques.map((technique: string, index: number) => (
                          <li key={index}>{technique}</li>
                        ))}
                      </ol>

                      <p className="font-bold mt-3">{currentT.phishingAnalysis.protectionTitle}</p>
                      <ul className="list-disc pl-6 space-y-1">
                        {currentT.phishingAnalysis.protectionMeasures.map((measure: string, index: number) => (
                          <li key={index}>{measure}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-4 text-red-700">
                      {currentT.challengeResult.failure.title}
                    </h3>
                    <p className="mb-4">
                      {currentT.challengeResult.failure.description}
                    </p>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 my-4">
                      <h4 className="font-bold text-lg mb-2">{currentT.phishingAnalysis.whatWentWrong}</h4>
                      <p>{currentT.phishingAnalysis.signedMessage}</p>
                      <p className="my-2 p-3 bg-gray-100 font-mono text-sm rounded border border-gray-300 overflow-x-auto">
                        {MALICIOUS_MESSAGE}
                      </p>
                      <p>{currentT.phishingAnalysis.attackerCould}</p>
                    </div>
                  </>
                )}

                <button
                  onClick={retryChallenge}
                  className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  {currentT.buttons.retryChallenge}
                </button>
              </div>
            )}

            {/* Connect Wallet Button */}
            {!walletConnected && !showResult && (
              <div className="text-center my-6">
                <button
                  onClick={connectWallet}
                  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
                >
                  {currentT.buttons.connectWallet}
                </button>
              </div>
            )}

            {/* Status Message */}
            {statusMessage && (
              <div className={`p-4 my-4 rounded-md ${statusType === 'info' ? 'bg-blue-50 border-l-4 border-blue-500' :
                statusType === 'success' ? 'bg-green-50 border-l-4 border-green-500' :
                  statusType === 'warning' ? 'bg-yellow-50 border-l-4 border-yellow-500' :
                    'bg-red-50 border-l-4 border-red-500'}`}>
                {statusMessage}
              </div>
            )}
          </div>
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="governance-proposal-phishing"
        successContent={<GovernanceProposalPhishingSuccessContent />}
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
};

export default GovernanceProposalPhishing;