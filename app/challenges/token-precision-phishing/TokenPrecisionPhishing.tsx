'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import TokenPrecisionPhishingSuccessContent from './TokenPrecisionPhishingSuccessContent';

const TokenPrecisionPhishing = () => {
  const { t } = useLanguage();

  const [decimalsValue, setDecimalsValue] = useState<string | null>(null);
  const [amountDisplay, setAmountDisplay] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [decimalsInput, setDecimalsInput] = useState('18');

  const checkAnswers = async () => {
    if (!decimalsValue || !amountDisplay.trim()) {
      alert(t.tokenPrecisionPhishing.pleaseAnswerAll);
      setIsSuccess(false);
      return;
    }

    setShowResult(true);

    // Check if answers are correct
    const isDecimalsCorrect = decimalsValue === '18';
    const isAmountCorrect = amountDisplay.includes('89589');

    setShowExplanation(true);

    if (isDecimalsCorrect && isAmountCorrect) {
      setIsSuccess(true);
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsSuccess(false);
    }
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="p-4 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 challenge-title">{t.tokenPrecisionPhishing.title}</h1>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-left">
              <strong>{t.tokenPrecisionPhishing.warning}</strong>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 challenge-description">{t.tokenPrecisionPhishing.background.title}</h2>
            <p className="mb-4 challenge-description">{t.tokenPrecisionPhishing.background.description}</p>

            <div className="border border-gray-200 rounded-lg p-4 mb-6 bg-gray-200">
              <div className="flex items-center border-b pb-3 mb-3">
                {/* <img
              src="https://www.svgrepo.com/show/331550/recovery.svg"
              alt="CYBER RESCUE"
              className="w-8 h-8 mr-2"
            /> */}
                <h3 className="font-bold text-lg">{t.tokenPrecisionPhishing.chat.title}</h3>
              </div>

              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg max-w-[80%]">
                  {t.tokenPrecisionPhishing.chat.message1}
                </div>
                <div className="bg-green-50 p-3 rounded-lg max-w-[80%] ml-auto">
                  {t.tokenPrecisionPhishing.chat.reply1}
                </div>
                <div className="bg-white p-3 rounded-lg max-w-[80%]">
                  {t.tokenPrecisionPhishing.chat.message2}
                </div>
                <div className="bg-white p-3 rounded-lg max-w-[80%]">
                  {t.tokenPrecisionPhishing.chat.message3}
                </div>
                <div className="bg-green-50 p-3 rounded-lg max-w-[80%] ml-auto">
                  {t.tokenPrecisionPhishing.chat.reply2}
                </div>
                <div className="bg-white p-3 rounded-lg max-w-[80%]">
                  {t.tokenPrecisionPhishing.chat.message4}
                </div>
                <div className="bg-white p-3 rounded-lg max-w-[80%]">
                  <div dangerouslySetInnerHTML={{ __html: t.tokenPrecisionPhishing.chat.message5 }} />
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white mb-6">
              <div className="border-b pb-3 mb-6">
                <h3 className="font-bold text-xl">MathWallet</h3>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-4">{t.tokenPrecisionPhishing.wallet.addTokenTitle}</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-24 font-bold">{t.tokenPrecisionPhishing.wallet.contract}:</div>
                    <input
                      type="text"
                      className="flex-1 p-2 border rounded bg-gray-100"
                      value="0x55d398326f99059ff775485246999027b3197955"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 font-bold">{t.tokenPrecisionPhishing.wallet.name}:</div>
                    <input
                      type="text"
                      className="flex-1 p-2 border rounded bg-gray-100"
                      value="USDT"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 font-bold">{t.tokenPrecisionPhishing.wallet.symbol}:</div>
                    <input
                      type="text"
                      className="flex-1 p-2 border rounded bg-gray-100"
                      value="USDT"
                      readOnly
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 font-bold">{t.tokenPrecisionPhishing.wallet.decimals}:</div>
                    <input
                      type="number"
                      className="flex-1 p-2 border rounded"
                      value={decimalsInput}
                      onChange={(e) => setDecimalsInput(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <h4 className="font-bold mb-4">{t.tokenPrecisionPhishing.questions.decimalsQuestion}</h4>
              <div className="space-y-3 mb-6">
                <div
                  className={`p-3 border rounded-lg cursor-pointer hover:bg-gray-50 flex items-center ${decimalsValue === '18' ? 'border-blue-500 bg-blue-50' : ''}`}
                  onClick={() => setDecimalsValue('18')}
                >
                  <input
                    type="radio"
                    id="decimals-18"
                    name="decimals"
                    checked={decimalsValue === '18'}
                    onChange={() => setDecimalsValue('18')}
                    className="mr-3"
                  />
                  <label htmlFor="decimals-18" className="cursor-pointer flex-1">
                    {t.tokenPrecisionPhishing.questions.keepDefault}
                  </label>
                </div>
                <div
                  className={`p-3 border rounded-lg cursor-pointer hover:bg-gray-50 flex items-center ${decimalsValue === '0' ? 'border-blue-500 bg-blue-50' : ''}`}
                  onClick={() => setDecimalsValue('0')}
                >
                  <input
                    type="radio"
                    id="decimals-0"
                    name="decimals"
                    checked={decimalsValue === '0'}
                    onChange={() => setDecimalsValue('0')}
                    className="mr-3"
                  />
                  <label htmlFor="decimals-0" className="cursor-pointer flex-1">
                    {t.tokenPrecisionPhishing.questions.changeToZero}
                  </label>
                </div>
              </div>

              <h4 className="font-bold mb-4">{t.tokenPrecisionPhishing.questions.amountQuestion}</h4>
              <div className="mb-6">
                <input
                  type="text"
                  className="w-full p-3 border rounded"
                  placeholder={t.tokenPrecisionPhishing.questions.amountPlaceholder}
                  value={amountDisplay}
                  onChange={(e) => setAmountDisplay(e.target.value)}
                />
              </div>

              <button
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
                onClick={checkAnswers}
              >
                {t.tokenPrecisionPhishing.submitButton}
              </button>

              {showResult && (
                <div className={`mt-6 p-4 rounded-lg ${isSuccess ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <h3 className="font-bold text-lg">
                    {isSuccess
                      ? t.tokenPrecisionPhishing.results.success.title
                      : t.tokenPrecisionPhishing.results.failure.title
                    }
                  </h3>
                  <p>
                    {isSuccess
                      ? t.tokenPrecisionPhishing.results.success.description
                      : t.tokenPrecisionPhishing.results.failure.description
                    }
                  </p>
                </div>
              )}

              {showExplanation && (
                <div className="mt-6 bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4">{t.tokenPrecisionPhishing.explanation.title}</h3>
                  <p className="mb-4">{t.tokenPrecisionPhishing.explanation.description}</p>

                  <h4 className="font-bold text-lg mb-2">{t.tokenPrecisionPhishing.explanation.howItWorksTitle}</h4>
                  <ol className="list-decimal pl-8 mb-4 space-y-2">
                    {t.tokenPrecisionPhishing.explanation.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>

                  <h4 className="font-bold text-lg mb-2">{t.tokenPrecisionPhishing.explanation.protectionTitle}</h4>
                  <ul className="list-disc pl-8 mb-4 space-y-2">
                    {t.tokenPrecisionPhishing.explanation.protectionTips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>

                  <h4 className="font-bold text-lg mb-2">{t.tokenPrecisionPhishing.explanation.comparisonTitle}</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-blue-200 p-2 text-left">{t.tokenPrecisionPhishing.explanation.table.actualAmount}</th>
                          <th className="border border-blue-200 p-2 text-left">{t.tokenPrecisionPhishing.explanation.table.correctDisplay}</th>
                          <th className="border border-blue-200 p-2 text-left">{t.tokenPrecisionPhishing.explanation.table.modifiedDisplay}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-blue-200 p-2">0.00000000000089589 USDT</td>
                          <td className="border border-blue-200 p-2">0.00000000000089589 USDT</td>
                          <td className="border border-blue-200 p-2 text-red-600">89589 USDT</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="token-precision-phishing"
        successContent={<TokenPrecisionPhishingSuccessContent />}
      />
    </>
  );
};

export default TokenPrecisionPhishing;
