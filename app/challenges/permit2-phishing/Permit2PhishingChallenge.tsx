'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useAccount, } from 'wagmi';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import Permit2PhishingSuccessContent from './Permit2PhishingSuccessContent';

const USDC_CONTRACT_ADDRESS = '0x000000000022d473030f116ddee9f6b43ac78ba3';
const PHISHING_SPENDER_ADDRESS = '0x1234567890123456789012345678901234567890';



export default function Permit2PhishingChallenge() {
  const { t } = useLanguage();
  const { address, isConnected } = useAccount();
  const [currentStep, setCurrentStep] = useState<'intro' | 'wallet' | 'swap' | 'signature' | 'alert' | 'explanation' | 'quiz' | 'success' | 'failure'>('intro');
  const [showWalletInterface, setShowWalletInterface] = useState(false);
  const [showSwapInterface, setShowSwapInterface] = useState(false);
  const [showSignatureRequest, setShowSignatureRequest] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [, setSignatureData] = useState<{
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

  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
  });

  const handleConnect = async () => {
    try {
      // await connectAsync({ connector: injected() });
      setShowWalletInterface(true);
      setCurrentStep('wallet');
    } catch (error) {
      console.error('Connection error:', error);
    }
  };


  const handleStartSwap = () => {
    setShowSwapInterface(true);
    setCurrentStep('swap');
  };

  const handleConfirmSwap = () => {
    setShowSignatureRequest(true);
    setCurrentStep('signature');
  };

  const handleSignPermit = async () => {
    setSignatureData({
      challengeCompleted: false,
    });
    setCurrentStep('alert');
  };
  const handleQuizSubmit = async () => {
    const isCorrect =
      answers.q1 === "correct" &&
      answers.q2 === "correct"
    if (isCorrect) {
      setCurrentStep('success');
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setCurrentStep('failure');
    }

    //
    return;
  }
  const handleRejectSignature = () => {
    setShowSignatureRequest(false);
    setCurrentStep('explanation');
  };

  const handleLearnMore = () => {
    setCurrentStep('explanation');
  };

  const handleCompleteChallenge = () => {
    setCurrentStep('quiz');
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">{t.permitPhishing2.title}</h1>
            <h2 className="text-xl mb-4">{t.permitPhishing2.subtitle}</h2>
            <h3 className="text-lg text-red-500">{t.permitPhishing2.warning}</h3>
          </div>



          {showWalletInterface && (
            <div className="wallet-interface bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="mb-4">
                <p className="mb-2">
                  {t.permitPhishing2.networkStatus}
                  <span className="font-medium ml-2">
                    {isConnected ? 'Holesky Testnet' : t.common.notConnected}
                  </span>
                </p>
                <p>
                  {t.permitPhishing2.walletAddress}
                  <span className="font-mono ml-2">
                    {address ? address : t.common.notConnected}
                  </span>
                </p>
              </div>

              <div className="token-balances mb-6">
                <h4 className="text-lg font-semibold mb-4">{t.permitPhishing2.tokenBalances.title}</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-bold">{t.permitPhishing2.tokenBalances.weth}</p>
                    <p>2.5 WETH</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-bold">{t.permitPhishing2.tokenBalances.pepe}</p>
                    <p>1,000,000 PEPE</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-bold">{t.permitPhishing2.tokenBalances.usdt}</p>
                    <p>5,000 USDT</p>
                  </div>
                </div>
              </div>

              <div className="transaction-list mb-6">
                <h4 className="text-lg font-semibold mb-4">{t.permitPhishing2.transactions.title}</h4>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-left">
                      <th className="p-2">{t.permitPhishing2.transactions.hash}</th>
                      <th className="p-2">{t.permitPhishing2.transactions.method}</th>
                      <th className="p-2">{t.permitPhishing2.transactions.age}</th>
                      <th className="p-2">{t.permitPhishing2.transactions.from}</th>
                      <th className="p-2">{t.permitPhishing2.transactions.to}</th>
                      <th className="p-2">{t.permitPhishing2.transactions.value}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-2 font-mono text-sm">0xac0137d0808d...</td>
                      <td className="p-2">Approve</td>
                      <td className="p-2">1 day ago</td>
                      <td className="p-2 font-mono text-sm">
                        {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ''}
                      </td>
                      <td className="p-2">
                        <span className="font-mono text-sm">0x000000...78BA3</span>
                        <span className="ml-2 px-2 py-1 text-xs bg-red-100 text-red-700 rounded">Permit2</span>
                      </td>
                      <td className="p-2">{t.permitPhishing2.transactions.unlimited}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="approval-management mb-6">
                <h4 className="text-lg font-semibold mb-4">{t.permitPhishing2.approvals.title}</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                    <div className="flex items-center">
                      <img src="https://etherscan.io/token/images/weth_28.png" alt="WETH" className="w-6 h-6 rounded-full mr-2" />
                      <span className="font-bold">WETH</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-mono text-sm">0x000000...78BA3 (Permit2)</span>
                      <span>{t.permitPhishing2.transactions.unlimited}</span>
                      <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600">{t.permitPhishing2.approvals.revoke}</button>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                    <div className="flex items-center">
                      <img src="https://etherscan.io/token/images/tethernew_32.svg" alt="USDT" className="w-6 h-6 rounded-full mr-2" />
                      <span className="font-bold">USDT</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-mono text-sm">0x000000...78BA3 (Permit2)</span>
                      <span>{t.permitPhishing2.transactions.unlimited}</span>
                      <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600">{t.permitPhishing2.approvals.revoke}</button>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                    <div className="flex items-center">
                      <img src="https://etherscan.io/token/images/pepe_32.svg" alt="PEPE" className="w-6 h-6 rounded-full mr-2" />
                      <span className="font-bold">PEPE</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-mono text-sm">0x000000...78BA3 (Permit2)</span>
                      <span>{t.permitPhishing2.transactions.unlimited}</span>
                      <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600">{t.permitPhishing2.approvals.revoke}</button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="font-bold text-blue-700 mb-2">{t.permitPhishing2.approvals.permit2Contract}</div>
                  <div className="font-mono text-sm mb-2">0x000000000022D473030F116dDEE9F6B43aC78BA3</div>
                  <p className="text-sm text-blue-600">{t.permitPhishing2.approvals.permit2Description}</p>
                </div>
              </div>

              <button
                onClick={handleStartSwap}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                {t.permitPhishing2.swapTokens}
              </button>
            </div>
          )}

          {showSwapInterface && (
            <div className="swap-interface bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">Swap</h3>
              <div className="swap-form space-y-4">
                <div className="p-4 border rounded-lg">
                  <input
                    type="text"
                    value="1.0"
                    className="w-full p-2 border rounded"
                    readOnly
                  />
                  <div className="flex items-center mt-2">
                    <img
                      src="https://etherscan.io/token/images/weth_28.png"
                      alt="WETH"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span>WETH</span>
                  </div>
                </div>

                <div className="text-center text-2xl">↓</div>

                <div className="p-4 border rounded-lg">
                  <input
                    type="text"
                    value="500,000"
                    className="w-full p-2 border rounded"
                    readOnly
                  />
                  <div className="flex items-center mt-2">
                    <img
                      src="https://etherscan.io/token/images/pepe_32.svg"
                      alt="PEPE"
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span>PEPE</span>
                  </div>
                </div>

                <button
                  onClick={handleConfirmSwap}
                  className="w-full px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Confirm Swap
                </button>
              </div>
            </div>
          )}

          {showSignatureRequest && (
            <div className="signature-request bg-gray-50 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">Signature Request</h3>
              <div className="space-y-2 mb-6">
                <p>
                  <strong>Contract:</strong>{' '}
                  <span className="font-mono">{USDC_CONTRACT_ADDRESS}</span>
                </p>
                <p>
                  <strong>Method:</strong> permit2
                </p>
                <p>
                  <strong>Token:</strong> PEPE
                </p>
                <p>
                  <strong>Spender:</strong>{' '}
                  <span className="font-mono">{PHISHING_SPENDER_ADDRESS}</span>
                </p>
                <p>
                  <strong>Amount:</strong> Unlimited
                </p>
                <p>
                  <strong>Deadline:</strong> 2025-04-21
                </p>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleRejectSignature}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                >
                  Reject
                </button>
                <button
                  onClick={handleSignPermit}
                  className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                  Sign
                </button>
              </div>
            </div>
          )}

          {currentStep === 'alert' && (
            <div className="alert-box bg-red-50 border-2 border-red-200 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-bold text-red-700 mb-4">{t.permitPhishing2.phishingAlert.title}</h4>
              <p className="mb-4">{t.permitPhishing2.phishingAlert.description}</p>
              <p className="mb-2">{t.permitPhishing2.phishingAlert.whatHappened}</p>
              <ul className="list-disc pl-6 mb-4">
                {t.permitPhishing2.phishingAlert.points.map((point, index) => (
                  <li key={index} className="mb-2">{point}</li>
                ))}
              </ul>
              <p className="font-bold text-red-700 mb-4">{t.permitPhishing2.phishingAlert.keyIssue}</p>
              <button
                onClick={handleLearnMore}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                {t.permitPhishing2.phishingAlert.learnMore}
              </button>
            </div>
          )}

          {currentStep === 'explanation' && (
            <div className="explanation-box bg-yellow-50 border-2 border-yellow-200 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-bold mb-4">{t.permitPhishing2.explanation.title}</h4>
              <p className="mb-4">{t.permitPhishing2.explanation.description}</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>{t.permitPhishing2.explanation.models.traditional}</strong></li>
                <li><strong>{t.permitPhishing2.explanation.models.permit2}</strong></li>
              </ul>
              <p className="font-bold mb-2">{t.permitPhishing2.explanation.twoLayerSystem}</p>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                {t.permitPhishing2.explanation.layers.map((layer, index) => (
                  <li key={index}>{layer}</li>
                ))}
              </ol>
              <p className="text-red-600 mb-4">{t.permitPhishing2.explanation.vulnerability}</p>
              <h4 className="font-bold mb-2">{t.permitPhishing2.explanation.protectionTitle}</h4>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                {t.permitPhishing2.explanation.protectionSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <button
                onClick={handleCompleteChallenge}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                {t.permitPhishing2.explanation.completeChallenge}
              </button>
            </div>
          )}

          {(currentStep === 'quiz' || currentStep === 'failure') && (
            <div className="quiz-box bg-white border-2 border-gray-200 p-6 rounded-lg mb-8">
              <div id="challenge-form" className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-4">{t.permitPhishing2.quiz.title}</h4>
                <p className="mb-4">{t.permitPhishing2.quiz.description}</p>

                <form id="permit2-verification-form">
                  <div className="form-group mb-6 bg-white p-4 rounded border border-gray-200">
                    <label className="block mb-2 font-medium">
                      <span className="mr-2">1.</span>
                      {t.permitPhishing2.quiz.question1.text}
                    </label>
                    <select
                      id="question1"
                      className="w-full p-3 border rounded bg-white"
                      value={answers.q1}
                      onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}
                      required
                    >
                      <option value="">{t.permitPhishing2.quiz.pleaseSelect}</option>
                      {t.permitPhishing2.quiz.question1.options.map((option, index) => (
                        <option key={index} value={index === 0 ? 'correct' : `incorrect${index}`}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group mb-6 bg-white p-4 rounded border border-gray-200">
                    <label className="block mb-2 font-medium">
                      <span className="mr-2">2.</span>
                      {t.permitPhishing2.quiz.question2.text}
                    </label>
                    <select
                      id="question2"
                      className="w-full p-3 border rounded bg-white"
                      value={answers.q2}
                      onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}
                      required
                    >
                      <option value="">{t.permitPhishing2.quiz.pleaseSelect}</option>
                      {t.permitPhishing2.quiz.question2.options.map((option, index) => (
                        <option key={index} value={index === 2 ? 'correct' : `incorrect${index}`}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={handleQuizSubmit}
                    className="w-full px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    {t.permitPhishing2.quiz.verifyAnswers}
                  </button>

                  <div id="verification-feedback" className="hidden mt-4 p-3 rounded text-center"></div>
                </form>
              </div>
            </div>
          )}

          {currentStep === 'intro' && (
            <div className="challenge-intro bg-white p-6 rounded-lg shadow-md mb-8">
              <p className="mb-4">{t.permitPhishing2.introText}</p>
              <p className="mb-4">{t.permitPhishing2.introText2}</p>
              <button
                onClick={handleConnect}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Start
              </button>
            </div>
          )}
          {/* {currentStep === 'success' && (
            <div className="success-box bg-green-50 border-2 border-green-200 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-green-700 mb-4">{t.permitPhishing2.success.title}</h4>
              <p className="mb-4">{t.permitPhishing2.success.description}</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                {t.permitPhishing2.success.protectionTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          )} */}

          {
            currentStep === 'failure' && (
              <div className="failure-box bg-red-50 border-2 border-red-200 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-red-700 mb-4">{t.permitPhishing2.failure.title}</h4>
              </div>
            )
          }
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="permit2-phishing"
        successContent={<Permit2PhishingSuccessContent />}
      />
    </>
  );
}