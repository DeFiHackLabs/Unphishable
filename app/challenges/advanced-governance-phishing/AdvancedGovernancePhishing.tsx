'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import { translations } from '@/app/i18n';
import type { Language } from '@/app/i18n';
import AdvancedGovernancePhishingSuccessContent from './AdvancedGovernancePhishingSuccessContent';

const AdvancedGovernancePhishing = () => {
  const { language } = useLanguage();
  const [stage, setStage] = useState('initial'); // initial, walletConnected, signature, challenge, success, failure
  const [showMetaMaskPopup, setShowMetaMaskPopup] = useState(false);
  const [currentVoteType, setCurrentVoteType] = useState('for');
  const [question1Answer, setQuestion1Answer] = useState('');
  const [question2Answer, setQuestion2Answer] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [countdownMinutes, setCountdownMinutes] = useState(5);
  const [countdownSeconds, setCountdownSeconds] = useState(23);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  // Get translations
  const currentT = translations[language as Language].advancedGovernancePhishing;

  // Constants
  const TRANSACTION_DATA = "0x0900f010157000000000000000000";
  const MALICIOUS_FUNCTION = "vоte"; // Using Cyrillic 'o' (looking like Latin 'o')

  useEffect(() => {
    // Generate random countdown timer
    setCountdownMinutes(Math.floor(Math.random() * 10) + 1);
    setCountdownSeconds(Math.floor(Math.random() * 60));
  }, []);

  const handleConnectWallet = () => {
    setStage('walletConnected');
  };

  const handleVote = (voteType: string) => {
    setCurrentVoteType(voteType);
    setStage('signature');
  };

  const handleSignTransaction = () => {
    setShowMetaMaskPopup(true);
  };

  const handleSignatureAction = (action: 'sign' | 'reject') => {
    console.log(`User chose to ${action} the transaction.`);
    setShowMetaMaskPopup(false);
    setStage('challenge');
  };

  const handleQuestionChange = (question: number, value: string) => {
    if (question === 1) {
      setQuestion1Answer(value);
    } else if (question === 2) {
      setQuestion2Answer(value);
    }
  };

  const checkAnswers = async () => {
    // Check if answers are selected
    if (!question1Answer || !question2Answer) {
      alert(language === 'en' ? 'Please answer all questions' :
        language === 'zh-hant' ? '請回答所有問題' :
          '请回答所有问题');
      return;
    }

    // Check if answers are correct (option4 for question 1 and option2 for question 2)
    const isCorrect = question1Answer === 'option4' && question2Answer === 'option2';

    if (isCorrect) {
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
    }
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{currentT.title}</h1>
            <h2 className="text-xl mb-2">{currentT.subtitle}</h2>
            <p className="text-red-600 font-bold">{currentT.warning}</p>
            <p className="text-gray-600">{currentT.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">{currentT.scenario.title}</h3>
            <p className="mb-4">{currentT.scenario.description}</p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <strong>{currentT.warning_detail}</strong>
              <p className="mt-1">{currentT.note}</p>
            </div>

            {/* URL Bar */}
            <div className="bg-gray-100 border border-gray-300 rounded px-3 py-2 mb-4 flex items-center text-sm font-mono relative group">
              <span className="text-green-600 mr-2">🔒</span>
              <span>https://<span className="font-medium">qu<span className="underline decoration-wavy decoration-yellow-500">α</span>ntumdao.finance</span>/governance/proposals/157</span>

              {/* Tooltip */}
              <div className="absolute invisible group-hover:visible bg-gray-800 text-white text-xs rounded py-1 px-2 -bottom-8 left-1/2 transform -translate-x-1/2 w-80 text-center">
                {currentT.urlBar.domainWarning}
              </div>
            </div>

            {/* Governance Interface */}
            <div className="border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
              <div className="flex justify-between items-center border-b pb-4 mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-700 rounded-full mr-2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white"></div>
                  </div>
                  <span className="font-bold text-lg">{currentT.governance.logo}</span>
                </div>

                {stage === 'initial' ? (
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                    onClick={handleConnectWallet}
                  >
                    {currentT.governance.connectWallet}
                  </button>
                ) : (
                  <span className="text-green-600 font-medium flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Connected
                  </span>
                )}
              </div>

              {/* Tabs */}
              <div className="flex border-b mb-4">
                <button className="px-4 py-2 font-medium text-gray-500 hover:text-blue-600">
                  {currentT.governance.tabs.dashboard}
                </button>
                <button className="px-4 py-2 font-medium text-blue-600 border-b-2 border-blue-600">
                  {currentT.governance.tabs.proposals}
                </button>
                <button className="px-4 py-2 font-medium text-gray-500 hover:text-blue-600">
                  {currentT.governance.tabs.delegate}
                </button>
                <button className="px-4 py-2 font-medium text-gray-500 hover:text-blue-600">
                  {currentT.governance.tabs.forum}
                </button>
              </div>

              {/* Active Proposal */}
              <div className="border rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-lg">{currentT.governance.proposal.title}</h4>
                    <span className="text-gray-500 text-sm">{currentT.governance.proposal.id}</span>
                  </div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {currentT.governance.proposal.status}
                  </span>
                </div>

                <p className="text-gray-700 mb-4">{currentT.governance.proposal.description}</p>

                <div className="flex justify-between bg-gray-50 p-3 rounded-lg mb-4 text-center">
                  <div>
                    <div className="font-bold">42.7%</div>
                    <div className="text-sm text-gray-500">{currentT.governance.proposal.stats.for}</div>
                  </div>
                  <div>
                    <div className="font-bold">5.3%</div>
                    <div className="text-sm text-gray-500">{currentT.governance.proposal.stats.against}</div>
                  </div>
                  <div>
                    <div className="font-bold">2.1%</div>
                    <div className="text-sm text-gray-500">{currentT.governance.proposal.stats.abstain}</div>
                  </div>
                  <div>
                    <div className="font-bold">49.9%</div>
                    <div className="text-sm text-gray-500">{currentT.governance.proposal.stats.required}</div>
                  </div>
                  <div>
                    <div className="font-bold">11h 23m</div>
                    <div className="text-sm text-gray-500">{currentT.governance.proposal.stats.remaining}</div>
                  </div>
                </div>

                {stage !== 'initial' && (
                  <div className="flex gap-2">
                    <button
                      className="flex-1 bg-green-100 hover:bg-green-200 text-green-700 font-medium py-2 rounded-md"
                      onClick={() => handleVote('for')}
                    >
                      {currentT.governance.proposal.buttons.voteFor}
                    </button>
                    <button
                      className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 font-medium py-2 rounded-md"
                      onClick={() => handleVote('against')}
                    >
                      {currentT.governance.proposal.buttons.voteAgainst}
                    </button>
                    <button
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 rounded-md"
                      onClick={() => handleVote('abstain')}
                    >
                      {currentT.governance.proposal.buttons.abstain}
                    </button>
                  </div>
                )}
              </div>

              {/* Past Proposal */}
              <div className="border rounded-lg p-4 mb-2 hover:shadow-md transition-shadow">
                <div className="flex justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-lg">{currentT.governance.pastProposal.title}</h4>
                    <span className="text-gray-500 text-sm">{currentT.governance.pastProposal.id}</span>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {currentT.governance.pastProposal.status}
                  </span>
                </div>
                <p className="text-gray-700">{currentT.governance.pastProposal.description}</p>
              </div>
            </div>

            {/* Wallet Prompt */}
            {stage === 'signature' && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="mb-2">{currentT.walletPrompt.message1}</p>
                <p className="mb-4">{currentT.walletPrompt.message2}</p>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                  onClick={handleSignTransaction}
                >
                  {currentT.walletPrompt.signButton}
                </button>
              </div>
            )}

            {/* MetaMask Popup */}
            {showMetaMaskPopup && (
              <>
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowMetaMaskPopup(false)}></div>
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-5 w-full max-w-md z-50">
                  <div className="flex items-center border-b pb-3 mb-3">
                    <h3 className="font-bold text-lg">{currentT.metamaskPopup.title}</h3>
                  </div>

                  <div className="text-red-600 font-bold text-center mb-3">
                    {currentT.metamaskPopup.countdown} {countdownMinutes}:{countdownSeconds.toString().padStart(2, '0')}
                  </div>

                  <div className="bg-green-50 border border-green-200 p-3 rounded-md mb-4 text-sm text-green-700">
                    {currentT.metamaskPopup.gasOptimization}
                  </div>

                  <div className="bg-gray-100 p-3 rounded-md mb-4 text-xs font-mono overflow-auto max-h-40">
                    <pre className="whitespace-pre-wrap break-all">
                      {currentT.metamaskPopup.signatureMessage
                        .replace('{voteType}', currentT.metamaskPopup.voteTypes[currentVoteType as keyof typeof currentT.metamaskPopup.voteTypes])
                        .replace('{transactionData}', TRANSACTION_DATA)
                        .replace('{maliciousFunction}', MALICIOUS_FUNCTION)
                        .replace('{voteValue}', currentVoteType === 'for' ? '1' : '0')
                      }
                    </pre>
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
                      onClick={() => handleSignatureAction('reject')}
                    >
                      {currentT.metamaskPopup.rejectButton}
                    </button>
                    <button
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                      onClick={() => handleSignatureAction('sign')}
                    >
                      {currentT.metamaskPopup.signButton}
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Challenge Questions */}
            {stage === 'challenge' && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">{currentT.challenge.questions.question1.title}</h3>
                <div className="space-y-3 mb-6">
                  {currentT.challenge.questions.question1.options.map((option, index) => (
                    <div key={`q1-option-${index}`} className="flex items-start p-3 bg-white border rounded-md hover:border-blue-300">
                      <input
                        type="radio"
                        id={`q1-option-${index}`}
                        name="phishing-technique"
                        value={`option${index + 1}`}
                        checked={question1Answer === `option${index + 1}`}
                        onChange={() => handleQuestionChange(1, `option${index + 1}`)}
                        className="mt-1 mr-3"
                      />
                      <label htmlFor={`q1-option-${index}`} className="cursor-pointer">{option}</label>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-4">{currentT.challenge.questions.question2.title}</h3>
                <div className="space-y-3 mb-6">
                  {currentT.challenge.questions.question2.options.map((option, index) => (
                    <div key={`q2-option-${index}`} className="flex items-start p-3 bg-white border rounded-md hover:border-blue-300">
                      <input
                        type="radio"
                        id={`q2-option-${index}`}
                        name="method-selector"
                        value={`option${index + 1}`}
                        checked={question2Answer === `option${index + 1}`}
                        onChange={() => handleQuestionChange(2, `option${index + 1}`)}
                        className="mt-1 mr-3"
                      />
                      <label htmlFor={`q2-option-${index}`} className="cursor-pointer">{option}</label>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium"
                  onClick={checkAnswers}
                >
                  {currentT.challenge.questions.submitButton}
                </button>

                {/* Success Message */}
                {showSuccessMessage && (
                  <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-5">
                    <h3 className="font-bold text-xl text-green-700 mb-3">{currentT.challenge.success.title}</h3>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      {currentT.challenge.success.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    <p className="mb-3">{currentT.challenge.success.conclusion}</p>
                    <p className="font-bold text-green-700">{currentT.challenge.success.congratulation}</p>
                  </div>
                )}

                {/* Failure Message */}
                {showFailureMessage && (
                  <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-5">
                    <p className="text-red-700">{currentT.challenge.failure.title}</p>
                  </div>
                )}
              </div>
            )}

            {stage === 'initial' && (
              <div>
                <h3 className="text-xl font-bold mb-2">{currentT.challenge.title}</h3>
                <p className="mb-4">{currentT.challenge.description}</p>
                <p>{currentT.challenge.instruction}</p>
              </div>
            )}

            {/* Educational Content */}
            {(showSuccessMessage || showFailureMessage) && (
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-5">
                <h3 className="font-bold text-xl text-blue-700 mb-3">{currentT.educational.title}</h3>
                <p className="mb-4">{currentT.educational.description}</p>

                <h4 className="font-bold text-lg mb-2">{currentT.educational.techniques.title}</h4>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  {currentT.educational.techniques.list.map((point, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: point }}></li>
                  ))}
                </ul>

                <h4 className="font-bold text-lg mb-2">{currentT.educational.protection.title}</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  {currentT.educational.protection.list.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                <p className="text-gray-700 italic">{currentT.educational.realWorldExample}</p>
              </div>
            )}
          </div>
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="advanced-governance-phishing"
        successContent={<AdvancedGovernancePhishingSuccessContent />}
      />
    </>
  );
};

export default AdvancedGovernancePhishing;
