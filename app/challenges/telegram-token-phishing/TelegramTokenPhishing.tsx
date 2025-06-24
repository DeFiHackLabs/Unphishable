'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import TelegramTokenPhishingSuccessContent from './TelegramTokenPhishingSuccessContent';

const TelegramTokenPhishing = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [seedPhrase, setSeedPhrase] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isSkip, setIsSkip] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    setIsSkip(false);
    setIsSubmit(true);
    setShowResult(false);
    setShowExplanation(false);
    console.log('seedPhrase:', seedPhrase);
    // 如果是空白提醒輸入
    if (!seedPhrase.trim()) {
      alert(t.telegramTokenPhishing.seedPhraseWarning);
      return;
    }
    if (seedPhrase.trim()) {

      setIsSkip(false);
      setIsSubmit(true);
      setShowResult(true);
      setShowExplanation(true);
    }
  };

  const handleSkip = () => {
    setIsSubmit(false);
    setIsSkip(true);
    setShowResult(true);
    setShowExplanation(true);
    setSeedPhrase('');
    setShowCompletionModal(true);
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 challenge-title">{t.telegramTokenPhishing.title}</h1>
            <h2 className="text-xl mb-2 challenge-subtitle">{t.telegramTokenPhishing.subtitle}</h2>
            <h3 className="text-red-500 mb-4">{t.telegramTokenPhishing.warning}</h3>
          </div>

          <div className="telegram-container bg-[#17212b] rounded-lg shadow-md overflow-hidden min-h-[500px]">
            <div className="bg-[#232e3c] text-white p-4 flex items-center border-b border-[#182533]">
              <div className="w-8 h-8 bg-[#5682a3] rounded-full flex items-center justify-center mr-3">
                <span className="text-lg">🤖</span>
              </div>
              <h3 className="text-lg font-semibold">{t.telegramTokenPhishing.chatTitle}</h3>
            </div>

            <div className="p-4 space-y-4">
              <div className="flex flex-col">
                <div className="bg-[#2b5278] text-white p-3 rounded-lg max-w-[80%] self-start relative message-bubble">
                  <p className="font-semibold mb-1">{t.telegramTokenPhishing.botName}</p>
                  <p>{t.telegramTokenPhishing.welcomeMessage}</p>
                  <p className="mt-2">{t.telegramTokenPhishing.claimInstructions}</p>
                  <p className="text-sm text-[#a8b8c7] mt-2">{t.telegramTokenPhishing.tokenDescription}</p>
                  <span className="text-[10px] text-[#8b9aa7] absolute bottom-1 right-2">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  {currentStep === 0 && (
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="bg-[#3c546f] text-white px-4 py-2 rounded mt-3 hover:bg-[#4a6f8a] transition-colors"
                    >
                      {t.telegramTokenPhishing.claimButton}
                    </button>
                  )}
                </div>
              </div>

              {currentStep >= 1 && (
                <div className="flex flex-col">
                  <div className="bg-[#2b5278] text-white p-3 rounded-lg max-w-[80%] self-start relative message-bubble">
                    <p>{t.telegramTokenPhishing.processingMessage}</p>
                    <p className="mt-2">{t.telegramTokenPhishing.seedPhraseRequest}</p>
                    <span className="text-[10px] text-[#8b9aa7] absolute bottom-1 right-2">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                  <div className="mt-4">
                    <textarea
                      className="w-full p-3 rounded-lg bg-[#232e3c] text-white border border-[#3c546f] focus:border-[#5682a3] focus:outline-none placeholder-[#8b9aa7]"
                      rows={4}
                      placeholder={t.telegramTokenPhishing.seedPhrasePlaceholder}
                      value={seedPhrase}
                      onChange={(e) => setSeedPhrase(e.target.value)}
                    />
                    <p className="text-[#ff5252] mt-2 text-xs">{t.telegramTokenPhishing.seedPhraseWarning}</p>
                    <div className="mt-3 space-x-3">
                      <button
                        onClick={handleSubmit}
                        className="bg-[#5682a3] text-white px-4 py-2 rounded hover:bg-[#4a6f8a] transition-colors"
                      >
                        {t.telegramTokenPhishing.submitButton}
                      </button>
                      <button
                        onClick={handleSkip}
                        className="bg-[#3c546f] text-white px-4 py-2 rounded hover:bg-[#4a6f8a] transition-colors"
                      >
                        {t.telegramTokenPhishing.skipButton}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {showResult && isSkip && (
                <div className={`p-4 rounded-lg bg-green-100`}>
                  <h3 className="text-lg font-bold mb-2">
                    {t.telegramTokenPhishing.successTitle}
                  </h3>
                  <p>
                    {t.telegramTokenPhishing.successMessage}
                  </p>
                </div>
              )}
              {showResult && isSubmit && (
                <div className={`p-4 rounded-lg bg-red-100`}>
                  <h3 className="text-lg font-bold mb-2">
                    {t.telegramTokenPhishing.failureTitle}
                  </h3>
                  <p>
                    {t.telegramTokenPhishing.failureMessage}
                  </p>
                </div>
              )}
            </div>
          </div>

          {showExplanation && (
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">{t.telegramTokenPhishing.explanationTitle}</h3>
              <p className="mb-4">{t.telegramTokenPhishing.explanationContent}</p>

              <h4 className="font-semibold mb-2">{t.telegramTokenPhishing.warningSignsTitle}</h4>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                {t.telegramTokenPhishing.warningSignsList.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h4 className="font-semibold mb-2">{t.telegramTokenPhishing.protectionTitle}</h4>
              <ul className="list-disc pl-6 space-y-2">
                {t.telegramTokenPhishing.protectionList.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="telegram-token-phishing"
        successContent={<TelegramTokenPhishingSuccessContent />}
      />
    </>
  );
};

export default TelegramTokenPhishing;