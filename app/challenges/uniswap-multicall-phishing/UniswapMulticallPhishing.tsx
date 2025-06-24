'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import UniswapMulticallPhishingSuccessContent from './UniswapMulticallPhishingSuccessContent';

const UniswapMulticallPhishing = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState('intro'); // intro, wallet, swap, signature, transaction, phishingAlert, explanation, challenge, success
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: ''
  });
  const [verificationFeedback, setVerificationFeedback] = useState('');
  const [showVerificationFeedback, setShowVerificationFeedback] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const startChallenge = () => {
    setCurrentStep('wallet');
  };

  const showSwapInterface = () => {
    setCurrentStep('swap');
  };

  const confirmSwap = () => {
    setCurrentStep('signature');
  };

  const rejectSignature = () => {
    setCurrentStep('explanation');
  };

  const signSignature = () => {
    setCurrentStep('transaction');
  };

  const inspectTransaction = () => {
    setCurrentStep('phishingAlert');
  };

  const learnMore = () => {
    setCurrentStep('explanation');
  };

  const completeChallenge = () => {
    setCurrentStep('challenge');
  };

  const handleAnswerChange = (question: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [question]: value
    }));
  };

  const verifyAnswers = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!answers.q1 || !answers.q2 || !answers.q3) {
      setVerificationFeedback(t.uniswapMulticallPhishing.challenge.answerRequired);
      setShowVerificationFeedback(true);
      return;
    }

    // Check if all answers are correct (correct answers are at index 2 for all questions)
    const isCorrect =
      answers.q1 === '2' &&
      answers.q2 === '3' &&
      answers.q3 === '2';

    if (isCorrect) {
      setCurrentStep('success');
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setVerificationFeedback(t.uniswapMulticallPhishing.challenge.incorrectAnswers);
      setShowVerificationFeedback(true);
    }
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 challenge-title">{t.uniswapMulticallPhishing.title}</h1>
            <h2 className="text-xl mb-2 challenge-subtitle">{t.uniswapMulticallPhishing.subtitle}</h2>
            <h3 className="text-red-500 mb-4">{t.uniswapMulticallPhishing.warning}</h3>
          </div>

          {currentStep === 'intro' && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <p className="mb-4">{t.uniswapMulticallPhishing.description}</p>
              <p className="mb-4">{t.uniswapMulticallPhishing.simulation}</p>
              <button onClick={startChallenge} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                {t.uniswapMulticallPhishing.startChallenge}
              </button>
            </div>
          )}

          {currentStep !== 'intro' && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              {/* Wallet Interface */}
              {['wallet', 'swap', 'signature', 'transaction', 'phishingAlert', 'explanation', 'challenge', 'success'].includes(currentStep) && (
                <div className="wallet-interface">
                  <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{t.uniswapMulticallPhishing.wallet.title}</h3>
                      <p>{t.uniswapMulticallPhishing.wallet.address} <span className="font-mono text-sm">0x1234ab7890123456781232345678901234567890</span></p>
                    </div>
                    <div className="text-right">
                      <h3 className="font-bold text-lg">{t.uniswapMulticallPhishing.wallet.totalBalance}</h3>
                      <p>$15,245.67</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">{t.uniswapMulticallPhishing.wallet.yourTokens}</h4>
                    <div className="space-y-3">
                      <div className="flex items-center p-2 border-b">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                          <img src="https://etherscan.io/token/images/weth_28.png" alt="ETH" className="w-8 h-8" />
                        </div>
                        <div>
                          <div className="font-medium">{t.uniswapMulticallPhishing.wallet.tokenNames.eth}</div>
                          <div className="text-gray-600 text-sm">2.5 ETH</div>
                        </div>
                      </div>
                      <div className="flex items-center p-2 border-b">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                          <img src="https://etherscan.io/token/images/lido-dao_32.png" alt="stETH" className="w-8 h-8" />
                        </div>
                        <div>
                          <div className="font-medium">{t.uniswapMulticallPhishing.wallet.tokenNames.stEth}</div>
                          <div className="text-gray-600 text-sm">85 stETH</div>
                        </div>
                      </div>
                      <div className="flex items-center p-2 border-b">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                          <img src="https://etherscan.io/token/images/uniswap_32.png" alt="UNI" className="w-8 h-8" />
                        </div>
                        <div>
                          <div className="font-medium">{t.uniswapMulticallPhishing.wallet.tokenNames.uni}</div>
                          <div className="text-gray-600 text-sm">500 UNI</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {currentStep === 'wallet' && (
                    <button
                      onClick={showSwapInterface}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                      {t.uniswapMulticallPhishing.swap.button}
                    </button>
                  )}

                  {/* Swap Interface */}
                  {currentStep === 'swap' && (
                    <div className="border rounded-lg p-5 bg-gray-50 mb-4">
                      <h3 className="font-bold text-lg mb-4">{t.uniswapMulticallPhishing.swap.title}</h3>
                      <div className="space-y-4 mb-4">
                        <div>
                          <label className="block mb-1">{t.uniswapMulticallPhishing.swap.from}</label>
                          <input
                            type="text"
                            value="85 stETH"
                            readOnly
                            className="w-full p-2 border rounded bg-gray-100"
                          />
                        </div>
                        <div>
                          <label className="block mb-1">{t.uniswapMulticallPhishing.swap.to}</label>
                          <input
                            type="text"
                            value="85 ETH"
                            readOnly
                            className="w-full p-2 border rounded bg-gray-100"
                          />
                        </div>
                      </div>
                      <button
                        onClick={confirmSwap}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      >
                        {t.uniswapMulticallPhishing.swap.confirm}
                      </button>
                    </div>
                  )}

                  {/* Signature Request */}
                  {currentStep === 'signature' && (
                    <div className="border-2 border-red-500 rounded-lg p-5 bg-red-50 mb-4">
                      <h3 className="font-bold text-lg text-center mb-4 text-red-700">
                        {t.uniswapMulticallPhishing.signature.request}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <p><strong>{t.uniswapMulticallPhishing.signature.method}</strong> Permit</p>
                        <p><strong>{t.uniswapMulticallPhishing.signature.owner}</strong> <span className="font-mono text-sm">0x1234ab7890123456781232345678901234567890</span></p>
                        <p><strong>{t.uniswapMulticallPhishing.signature.spender}</strong> <span className="font-mono text-sm">0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45</span> (Uniswap V3: Multicall)</p>
                        <p><strong>{t.uniswapMulticallPhishing.signature.value}</strong> 115792089237316195423570985008687907853269984665640564039457584007913129639935</p>
                        <p><strong>{t.uniswapMulticallPhishing.signature.nonce}</strong> 5</p>
                        <p><strong>{t.uniswapMulticallPhishing.signature.token}</strong> {t.uniswapMulticallPhishing.wallet.tokenNames.stEth}</p>
                        <p><strong>{t.uniswapMulticallPhishing.signature.deadline}</strong> 2025-04-21</p>
                      </div>
                      <div className="flex justify-between">
                        <button
                          onClick={rejectSignature}
                          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                        >
                          {t.uniswapMulticallPhishing.signature.reject}
                        </button>
                        <button
                          onClick={signSignature}
                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        >
                          {t.uniswapMulticallPhishing.signature.sign}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Transaction Details */}
                  {currentStep === 'transaction' && (
                    <div className="border rounded-lg p-5 bg-gray-50 mb-4">
                      <h3 className="font-bold text-lg mb-4">{t.uniswapMulticallPhishing.transaction.details}</h3>
                      <div className="space-y-2 mb-4">
                        <p><strong>{t.uniswapMulticallPhishing.transaction.hash}</strong> 0x7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b</p>
                        <p><strong>{t.uniswapMulticallPhishing.transaction.from}</strong> <span className="font-mono text-sm">Hacker</span></p>
                        <p><strong>{t.uniswapMulticallPhishing.transaction.to}</strong> <span className="font-mono text-sm">0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696</span> (Uniswap V3: Multicall)</p>
                        <p><strong>{t.uniswapMulticallPhishing.transaction.function}</strong> aggregate</p>
                        <p><strong>{t.uniswapMulticallPhishing.transaction.callData}</strong> <span className="font-mono text-sm">0x252dba42000000000000000000000000...</span></p>
                        <p><strong>{t.uniswapMulticallPhishing.transaction.includedOperations}</strong></p>
                        <ul className="list-disc pl-8 text-sm space-y-1">
                          <li>permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s)</li>
                          <li>transferFrom(address from, address to, uint256 value)</li>
                        </ul>
                        <p><strong>{t.uniswapMulticallPhishing.transaction.note}</strong> {t.uniswapMulticallPhishing.transaction.noteContent}</p>
                      </div>
                      <button
                        onClick={inspectTransaction}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      >
                        {t.uniswapMulticallPhishing.transaction.inspect}
                      </button>
                    </div>
                  )}

                  {/* Phishing Alert */}
                  {currentStep === 'phishingAlert' && (
                    <div className="border-2 border-red-500 rounded-lg p-5 bg-red-50 mb-4">
                      <h3 className="font-bold text-lg mb-4 text-red-700">
                        {t.uniswapMulticallPhishing.phishingAlert.title}
                      </h3>
                      <p className="mb-2">{t.uniswapMulticallPhishing.phishingAlert.description}</p>
                      <p className="mb-2">{t.uniswapMulticallPhishing.phishingAlert.whatHappened}</p>
                      <ul className="list-disc pl-8 mb-4 space-y-1">
                        {t.uniswapMulticallPhishing.phishingAlert.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                      <p className="font-bold mb-2">{t.uniswapMulticallPhishing.phishingAlert.securityNote}</p>
                      <p className="mb-4">{t.uniswapMulticallPhishing.phishingAlert.securityNoteContent}</p>
                      <button
                        onClick={learnMore}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      >
                        {t.uniswapMulticallPhishing.phishingAlert.learnMore}
                      </button>
                    </div>
                  )}

                  {/* Explanation */}
                  {currentStep === 'explanation' && (
                    <div className="border-2 border-yellow-500 rounded-lg p-5 bg-yellow-50 mb-4">
                      <h3 className="font-bold text-lg mb-4 text-yellow-800">
                        {t.uniswapMulticallPhishing.explanation.title}
                      </h3>
                      <p className="mb-2">{t.uniswapMulticallPhishing.explanation.description}</p>

                      <h4 className="font-semibold mt-4 mb-2">{t.uniswapMulticallPhishing.explanation.howItWorksTitle}</h4>
                      <ol className="list-decimal pl-8 mb-4 space-y-1">
                        {t.uniswapMulticallPhishing.explanation.howItWorksSteps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>

                      <h4 className="font-semibold mt-4 mb-2">{t.uniswapMulticallPhishing.explanation.dangerousTitle}</h4>
                      <ul className="list-disc pl-8 mb-4 space-y-1">
                        {t.uniswapMulticallPhishing.explanation.dangerousPoints.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>

                      <button
                        onClick={completeChallenge}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      >
                        {t.uniswapMulticallPhishing.explanation.completeChallenge}
                      </button>
                    </div>
                  )}

                  {/* Challenge Form */}
                  {currentStep === 'challenge' && (
                    <div className="border-2 border-yellow-500 rounded-lg p-5 bg-yellow-50 mb-4">
                      <h3 className="font-bold text-lg mb-4 text-yellow-800">
                        {t.uniswapMulticallPhishing.challenge.title}
                      </h3>
                      <p className="mb-4">{t.uniswapMulticallPhishing.challenge.instruction}</p>

                      <form onSubmit={verifyAnswers} className="space-y-6">
                        <div>
                          <label className="block font-medium mb-2">
                            1. {t.uniswapMulticallPhishing.challenge.questions.q1.text}
                          </label>
                          <select
                            className="w-full p-2 border rounded"
                            value={answers.q1}
                            onChange={(e) => handleAnswerChange('q1', e.target.value)}
                          >
                            {t.uniswapMulticallPhishing.challenge.questions.q1.options.map((option, index) => (
                              <option key={index} value={index}>{option}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block font-medium mb-2">
                            2. {t.uniswapMulticallPhishing.challenge.questions.q2.text}
                          </label>
                          <select
                            className="w-full p-2 border rounded"
                            value={answers.q2}
                            onChange={(e) => handleAnswerChange('q2', e.target.value)}
                          >
                            {t.uniswapMulticallPhishing.challenge.questions.q2.options.map((option, index) => (
                              <option key={index} value={index}>{option}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block font-medium mb-2">
                            3. {t.uniswapMulticallPhishing.challenge.questions.q3.text}
                          </label>
                          <select
                            className="w-full p-2 border rounded"
                            value={answers.q3}
                            onChange={(e) => handleAnswerChange('q3', e.target.value)}
                          >
                            {t.uniswapMulticallPhishing.challenge.questions.q3.options.map((option, index) => (
                              <option key={index} value={index}>{option}</option>
                            ))}
                          </select>
                        </div>

                        {showVerificationFeedback && (
                          <div className="p-3 bg-red-100 text-red-700 rounded">
                            {verificationFeedback}
                          </div>
                        )}

                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        >
                          {t.uniswapMulticallPhishing.challenge.verify}
                        </button>
                      </form>
                    </div>
                  )}

                  {/* Success */}
                  {currentStep === 'success' && (
                    <div className="border-2 border-green-500 rounded-lg p-5 bg-green-50 mb-4">
                      <h3 className="font-bold text-lg mb-4 text-green-700">
                        {t.uniswapMulticallPhishing.success.title}
                      </h3>
                      <p className="mb-4">{t.uniswapMulticallPhishing.success.description}</p>
                      <ul className="list-disc pl-8 mb-6 space-y-1">
                        {t.uniswapMulticallPhishing.success.protectionTips.map((tip, index) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="uniswap-multicall-phishing"
        successContent={<UniswapMulticallPhishingSuccessContent />}
      />
    </>
  );
};

export default UniswapMulticallPhishing;
