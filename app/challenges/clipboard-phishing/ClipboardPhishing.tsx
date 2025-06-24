'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import ClipboardPhishingSuccessContent from './ClipboardPhishingSuccessContent';

export default function ClipboardPhishingPage() {
  const { t } = useLanguage();
  const [showFailure, setShowFailure] = useState(false);
  const [showCopyConfirmation, setShowCopyConfirmation] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const displayedAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
  const maliciousAddress = '0x742D35Cc6634c0532925a3b844Bc454e4438F42e';

  const copyAddress = () => {
    navigator.clipboard.writeText(maliciousAddress);
    setShowCopyConfirmation(true);
    setTimeout(() => setShowCopyConfirmation(false), 3000); // Hide after 3 seconds
  };

  const handleTransfer = () => {
    const recipientAddress = (document.getElementById('recipient-address') as HTMLInputElement)?.value;
    if (recipientAddress === displayedAddress) {
      setShowFailure(false);
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setShowFailure(true);
    }
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-4 challenge-title">
            {t.clipboardPhishing.title}
          </h1>
          <h2 className="text-xl text-center mb-4 challenge-subtitle">
            {t.clipboardPhishing.subtitle}
          </h2>
          <h3 className="text-lg text-center mb-8 text-red-500">
            {t.clipboardPhishing.warning}
          </h3>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 challenge-title">{t.clipboardPhishing.scenarioTitle}</h3>
            <p className="mb-4">{t.clipboardPhishing.scenarioDescription}</p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <strong className="text-yellow-700">⚠️ {t.clipboardPhishing.educationalWarning.title}</strong>
              <p>{t.clipboardPhishing.educationalWarning.description}</p>
            </div>

            <div className="screen-container">
              {/* Chat Screen */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="border-b pb-4 mb-4">
                  <h3 className="font-semibold">{t.clipboardPhishing.chatWithFriend}</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
                      <p>{t.clipboardPhishing.friendMessage1}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <code className="bg-white px-3 py-1 rounded font-mono text-sm">
                          {displayedAddress}
                        </code>
                        <button
                          onClick={copyAddress}
                          className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
                        >
                          {t.clipboardPhishing.copyButton}
                        </button>
                      </div>
                    </div>
                  </div>
                  {showCopyConfirmation && (
                    <div className="flex items-start justify-end">
                      <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[70%]">
                        <p>{t.clipboardPhishing.addressCopied}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Transfer Form */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold mb-4">{t.clipboardPhishing.transferEth}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2">{t.clipboardPhishing.recipientAddress}</label>
                    <input
                      type="text"
                      id="recipient-address"
                      className="w-full p-2 border rounded font-mono"
                      placeholder={t.clipboardPhishing.recipientPlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block mb-2">{t.clipboardPhishing.amount}</label>
                    <input
                      type="number"
                      value="1.0"
                      step="0.1"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <button
                    onClick={handleTransfer}
                    className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition-colors"
                  >
                    {t.clipboardPhishing.sendButton}
                  </button>
                </div>
              </div>
            </div>

            {/* {showSuccess && (
              <div className="mt-8 p-6 bg-green-50 border-2 border-green-500 rounded-lg">
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  {t.clipboardPhishing.success.title}
                </h3>
                <p className="mb-4">{t.clipboardPhishing.success.description}</p>

                <h4 className="font-bold mb-2">{t.clipboardPhishing.success.howItWorks}</h4>
                <ol className="list-decimal pl-6 mb-4 space-y-2">
                  {t.clipboardPhishing.success.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>

                <h4 className="font-bold mb-2">{t.clipboardPhishing.success.protectionTitle}</h4>
                <ul className="list-disc pl-6 space-y-2">
                  {t.clipboardPhishing.success.protectionTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )} */}

            {showFailure && (
              <div className="mt-8 p-4 bg-red-50 border-2 border-red-500 rounded-lg">
                <h3 className="text-xl font-bold text-red-700 mb-2">
                  {t.clipboardPhishing.failure.title}
                </h3>
                <p className="mb-4">{t.clipboardPhishing.failure.description}</p>

                <div className="mt-4 p-4 bg-red-100 rounded-lg">
                  <h4 className="font-bold mb-2">
                    {t.clipboardPhishing.maliciousWarning.title}
                  </h4>
                  <p className="mb-2">
                    {t.clipboardPhishing.maliciousWarning.displayedAddress} {displayedAddress}
                  </p>
                  <p className="mb-2">
                    {t.clipboardPhishing.maliciousWarning.copiedAddress} {maliciousAddress}
                  </p>
                  <p>{t.clipboardPhishing.maliciousWarning.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="clipboard-phishing"
        successContent={<ClipboardPhishingSuccessContent />}
      />
    </>
  );
}