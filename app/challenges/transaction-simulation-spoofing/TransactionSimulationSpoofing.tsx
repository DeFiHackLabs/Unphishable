'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import TransactionSimulationSpoofingSuccessContent from './TransactionSimulationSpoofingSuccessContent';

export default function TransactionSimulationSpoofing() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState('intro'); // intro, transaction-review, metamask-signature, metamask-processing, metamask-result, complete
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizResult, setQuizResult] = useState<{ success: boolean; message: string } | null>(null);
  const [simulationTime, setSimulationTime] = useState(30);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear any existing timer when component unmounts
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, []);

  const startSimulationTimer = () => {
    setSimulationTime(30);
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }

    timerIntervalRef.current = setInterval(() => {
      setSimulationTime(prev => prev + 1);
    }, 1000);
  };

  const stopSimulationTimer = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  const showTransactionReview = () => {
    setCurrentStep('transaction-review');
    startSimulationTimer();
  };

  const cancelTransactionReview = () => {
    // Show educational message when user clicks cancel
    alert(t.transactionSimulationSpoofing.educationalMessage);
  };

  const proceedWithTransaction = () => {
    stopSimulationTimer();
    setCurrentStep('metamask-signature');
  };

  const confirmSignature = () => {
    setCurrentStep('metamask-processing');

    // After 3 seconds, show the result
    setTimeout(() => {
      setCurrentStep('metamask-result');
    }, 3000);
  };

  const closeMetaMask = () => {
    if (currentStep === 'metamask-result') {
      setCurrentStep('complete');
    } else {
      setCurrentStep('intro');
    }
  };

  const continueToComplete = () => {
    setCurrentStep('complete');
  };

  const checkAnswer = async (answer: string) => {
    if (answer === 'correct') {
      setQuizResult({
        success: true,
        message: t.transactionSimulationSpoofing.quiz.correctMessage
      });
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (answer === 'incorrect1') {
      setQuizResult({
        success: false,
        message: t.transactionSimulationSpoofing.quiz.incorrect1Message
      });
    } else if (answer === 'incorrect2') {
      setQuizResult({
        success: false,
        message: t.transactionSimulationSpoofing.quiz.incorrect2Message
      });
    }

    setSelectedAnswer(answer);
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6">
          <div className="challenge-header bg-gray-50 p-5 rounded-lg mb-8 shadow-md flex flex-wrap justify-between items-center">
            <div className="challenge-title flex-1 min-w-[300px]">
              <h1 className="text-2xl font-bold text-blue-600">{t.transactionSimulationSpoofing.title}</h1>
            </div>
            <div className=" flex-2 min-w-[300px] text-right text-sm text-gray-600">
              <p>{t.transactionSimulationSpoofing.description}</p>
              <p>{t.transactionSimulationSpoofing.warning}</p>
            </div>
          </div>

          {(currentStep === 'intro' || currentStep === 'complete') && (
            <>
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">{t.transactionSimulationSpoofing.scenario.title}</h2>
                <div className="mb-6">
                  <p className="mb-4">{t.transactionSimulationSpoofing.scenario.description1}</p>
                  <p>{t.transactionSimulationSpoofing.scenario.description2}</p>
                </div>

                {currentStep === 'intro' && (
                  <div className="text-center my-8">
                    <button
                      onClick={showTransactionReview}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition duration-200"
                    >
                      {t.transactionSimulationSpoofing.buttons.claimNFT}
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">{t.transactionSimulationSpoofing.howItWorks.title}</h2>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <p>{t.transactionSimulationSpoofing.howItWorks.step1}</p>
                  </div>

                  <div className="flex">
                    <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <p>{t.transactionSimulationSpoofing.howItWorks.step2}</p>
                  </div>

                  <div className="flex">
                    <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <p>{t.transactionSimulationSpoofing.howItWorks.step3}</p>
                  </div>
                </div>
              </div>

              {currentStep === 'complete' && (
                <>
                  <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-xl font-bold mb-4">{t.transactionSimulationSpoofing.exploitation.title}</h2>
                    <p className="mb-4">{t.transactionSimulationSpoofing.exploitation.description}</p>

                    <div className="space-y-6 my-6">
                      {t.transactionSimulationSpoofing.exploitation.steps.map((step, index) => (
                        <div key={index} className="flex">
                          <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">{index + 1}</div>
                          <p>{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-xl font-bold mb-4">{t.transactionSimulationSpoofing.realWorldExamples.title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: t.transactionSimulationSpoofing.realWorldExamples.description }}></p>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-xl font-bold mb-4">{t.transactionSimulationSpoofing.protection.title}</h2>
                    <p className="mb-4">{t.transactionSimulationSpoofing.protection.description}</p>

                    <ul className="list-disc pl-8 space-y-2">
                      {t.transactionSimulationSpoofing.protection.guidelines.map((guideline, index) => (
                        <li key={index}>{guideline}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-xl font-bold mb-4">{t.transactionSimulationSpoofing.quiz.title}</h2>
                    <p className="mb-4">{t.transactionSimulationSpoofing.quiz.question}</p>

                    <div className="space-y-3">
                      <button
                        className={`w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors ${selectedAnswer === 'incorrect1' ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                        onClick={() => checkAnswer('incorrect1')}
                      >
                        {t.transactionSimulationSpoofing.quiz.options.incorrect1}
                      </button>

                      <button
                        className={`w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors ${selectedAnswer === 'correct' ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
                        onClick={() => checkAnswer('correct')}
                      >
                        {t.transactionSimulationSpoofing.quiz.options.correct}
                      </button>

                      <button
                        className={`w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors ${selectedAnswer === 'incorrect2' ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                        onClick={() => checkAnswer('incorrect2')}
                      >
                        {t.transactionSimulationSpoofing.quiz.options.incorrect2}
                      </button>
                    </div>

                    {quizResult && (
                      <div className={`mt-4 p-4 rounded-lg ${quizResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                        {quizResult.message}
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          )}

          {/* Transaction Review Modal */}
          {currentStep === 'transaction-review' && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 mx-4">
                <h2 className="text-xl font-bold mb-4">{t.transactionSimulationSpoofing.transactionReview.title}</h2>

                <div className="my-4">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b">
                    <div>
                      <h3 className="font-bold">{t.transactionSimulationSpoofing.transactionReview.nftName}</h3>
                      <p className="text-sm text-gray-500">{t.transactionSimulationSpoofing.transactionReview.website}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-bold">{t.transactionSimulationSpoofing.transactionReview.simulationTitle}</h4>
                      <span className="text-red-500 font-medium">{simulationTime} {t.transactionSimulationSpoofing.transactionReview.secondsAgo}</span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t.transactionSimulationSpoofing.transactionReview.function}</span>
                        <span>claimEarlySupporter()</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600">{t.transactionSimulationSpoofing.transactionReview.receive}</span>
                        <span>{t.transactionSimulationSpoofing.transactionReview.nftAmount}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600">{t.transactionSimulationSpoofing.transactionReview.fee}</span>
                        <span>{t.transactionSimulationSpoofing.transactionReview.feeAmount}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600">{t.transactionSimulationSpoofing.transactionReview.gasFee}</span>
                        <span>{t.transactionSimulationSpoofing.transactionReview.gasFeeAmount}</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 text-sm">
                      <p><strong>{t.transactionSimulationSpoofing.transactionReview.note}</strong> {t.transactionSimulationSpoofing.transactionReview.noteDescription}</p>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={cancelTransactionReview}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      {t.common.cancel}
                    </button>

                    <button
                      onClick={proceedWithTransaction}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      {t.common.confirm}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MetaMask Signature Modal */}
          {currentStep === 'metamask-signature' && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-0 mx-4 overflow-hidden">
                <div className="p-4 flex items-center border-b">
                  <img src="/images/metamask-fox.svg" alt="MetaMask" className="w-8 h-8 mr-2" />
                  <h2 className="text-xl font-bold flex-1">MetaMask</h2>
                  <button onClick={closeMetaMask} className="text-2xl">&times;</button>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-4">{t.transactionSimulationSpoofing.metamask.signatureRequest}</h3>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="space-y-3">
                      <div className="flex justify-between pb-2 border-b">
                        <span>{t.transactionSimulationSpoofing.metamask.website}</span>
                        <span>metaapes.club</span>
                      </div>

                      <div className="flex justify-between pb-2 border-b">
                        <span>{t.transactionSimulationSpoofing.metamask.action}</span>
                        <span>{t.transactionSimulationSpoofing.metamask.claimNFT}</span>
                      </div>

                      <div className="flex justify-between pb-2 border-b bg-yellow-50 p-2 rounded-lg">
                        <span className="font-bold">{t.transactionSimulationSpoofing.metamask.fee}</span>
                        <span className="font-bold">1 ETH ($1,750)</span>
                      </div>

                      <div className="flex justify-between pb-2 border-b">
                        <span>{t.transactionSimulationSpoofing.metamask.gasFee}</span>
                        <span>~0.002 ETH ($3.50)</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-400 text-red-800 text-sm">
                      <p>{t.transactionSimulationSpoofing.metamask.authorizeMessage}</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={confirmSignature}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full"
                    >
                      {t.common.sign}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MetaMask Processing Modal */}
          {currentStep === 'metamask-processing' && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-0 mx-4 overflow-hidden">
                <div className="p-4 flex items-center border-b">
                  <img src="/images/metamask-fox.svg" alt="MetaMask" className="w-8 h-8 mr-2" />
                  <h2 className="text-xl font-bold flex-1">MetaMask</h2>
                  <button onClick={closeMetaMask} className="text-2xl">&times;</button>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-4">{t.transactionSimulationSpoofing.metamask.processingTransaction}</h3>

                  <div className="flex justify-center py-6">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
                  </div>

                  <p className="text-center">{t.transactionSimulationSpoofing.metamask.pleaseWait}</p>
                </div>

                <div className="p-4 border-t flex justify-end">
                  <button
                    onClick={closeMetaMask}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    {t.common.close}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* MetaMask Result Modal */}
          {currentStep === 'metamask-result' && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-0 mx-4 overflow-hidden">
                <div className="p-4 flex items-center border-b">
                  <img src="/images/metamask-fox.svg" alt="MetaMask" className="w-8 h-8 mr-2" />
                  <h2 className="text-xl font-bold flex-1">MetaMask</h2>
                  <button onClick={closeMetaMask} className="text-2xl">&times;</button>
                </div>

                <div className="p-6 max-h-[70vh] overflow-y-auto">
                  <h3 className="text-lg font-bold text-red-600 mb-4">{t.transactionSimulationSpoofing.metamask.resultTitle}</h3>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 flex">
                    <div className="text-2xl mr-3">⚠️</div>
                    <div>
                      <h4 className="font-bold">{t.transactionSimulationSpoofing.metamask.warningTitle}</h4>
                      <p>{t.transactionSimulationSpoofing.metamask.warningDesc}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-center mb-3 pb-2 border-b">{t.transactionSimulationSpoofing.metamask.expected}</h4>
                      <ul className="space-y-2">
                        <li>✅ {t.transactionSimulationSpoofing.metamask.expectedReceive}</li>
                        <li>✅ {t.transactionSimulationSpoofing.metamask.expectedFee}</li>
                        <li>✅ {t.transactionSimulationSpoofing.metamask.expectedGasFee}</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-center mb-3 pb-2 border-b">{t.transactionSimulationSpoofing.metamask.actual}</h4>
                      <ul className="space-y-2">
                        <li>❌ {t.transactionSimulationSpoofing.metamask.actualReceive}</li>
                        <li>❌ {t.transactionSimulationSpoofing.metamask.actualFee}</li>
                        <li>❌ {t.transactionSimulationSpoofing.metamask.actualGasFee}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">{t.transactionSimulationSpoofing.metamask.whatHappened}</h4>
                    <p className="mb-2">{t.transactionSimulationSpoofing.metamask.explanation1}</p>
                    <p>{t.transactionSimulationSpoofing.metamask.explanation2}</p>
                  </div>
                </div>

                <div className="p-4 border-t flex justify-end space-x-3">
                  <button
                    onClick={closeMetaMask}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    {t.common.close}
                  </button>

                  <button
                    onClick={continueToComplete}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    {t.common.continue}
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="transaction-simulation-spoofing"
        successContent={
          <TransactionSimulationSpoofingSuccessContent />
        }
      />
    </>
  );
}
