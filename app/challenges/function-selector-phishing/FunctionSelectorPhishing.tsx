'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';

export default function FunctionSelectorPhishing() {
  const { t } = useLanguage();

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [, setShowExplanation] = useState(false);
  const [status, setStatus] = useState({ message: '', type: '' });
  const [, setChallengeCompleted] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Constants
  const FUNCTION_SELECTOR = '0x38ed1739';
  const CORRECT_OPTION_INDEX = 2; // swapExactTokensForTokens option index

  useEffect(() => {
    // Setup MetaMask event listeners
    if (typeof window.ethereum !== 'undefined') {

      window.ethereum.on('chainChanged', () => window.location.reload());
    }

    return () => {
      if (typeof window.ethereum !== 'undefined') {
        window.ethereum.removeListener('chainChanged', () => { });
      }
    };
  }, []);

  const updateStatus = (message: string, type: 'error' | 'info' | 'success' | 'warning') => {
    setStatus({ message, type });
  };


  const selectOption = async (index: number) => {
    setSelectedOption(index);

    if (index === CORRECT_OPTION_INDEX) {
      // Correct answer
      updateStatus(t.functionSelectorPhishing.results.correct, 'success');
      setShowExplanation(true);
      setChallengeCompleted(true);
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }

    } else {
      // Incorrect answer
      updateStatus(t.functionSelectorPhishing.results.incorrect, 'error');
    }
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 challenge-title">{t.functionSelectorPhishing.title}</h1>
            <h2 className="text-xl mb-2 challenge-subtitle">{t.functionSelectorPhishing.subtitle}</h2>
            <h3 className="text-lg text-yellow-600">{t.functionSelectorPhishing.warning}</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold mb-4">{t.functionSelectorPhishing.challengeTitle}</h3>
            <p className="mb-4">{t.functionSelectorPhishing.challengeDescription}</p>

            <div className="transaction-data bg-gray-100 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto whitespace-nowrap">
              <span className="text-red-600 font-bold">{FUNCTION_SELECTOR}</span>
              00000000000000000000000000000000000000000000000000000008d25c45400000000000000000000000000000000000000000000000000312379636e2540000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000006a5104e426158849a2fc9749561fab575604c62a0000000000000000000000000000000000000000000000000000000067d07fd70000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a3d4bee77b05d4a0c943877558ce21a763c4fa29000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
            </div>

            <p className="mb-2">
              {t.functionSelectorPhishing.decodeFunctionHint}{' '}
              <a href="https://openchain.xyz/signatures" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                https://openchain.xyz/signatures
              </a>
            </p>
            <p className="mb-6">
              {t.functionSelectorPhishing.decodeCalldataHint}{' '}
              <a href="https://calldata.swiss-knife.xyz/decoder" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                https://calldata.swiss-knife.xyz/decoder
              </a>
            </p>

            <div className="mb-6">
              <p className="mb-4 font-medium">
                {t.functionSelectorPhishing.questionTitle.replace('{selector}', FUNCTION_SELECTOR)}
              </p>
              <div className="space-y-3">
                {t.functionSelectorPhishing.options.map((option, index) => (
                  <div
                    key={index}
                    className={`p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors ${selectedOption === index
                      ? index === CORRECT_OPTION_INDEX
                        ? 'bg-green-100 border-green-500'
                        : 'bg-red-100 border-red-500'
                      : 'bg-white border-gray-300'
                      }`}
                    onClick={() => selectOption(index)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>

            {/* {status.message && (
            <div
              className={`p-4 rounded-md ${status.type === 'error' ? 'bg-red-50 text-red-700 border-l-4 border-red-500' :
                status.type === 'success' ? 'bg-green-50 text-green-700 border-l-4 border-green-500' :
                  status.type === 'warning' ? 'bg-yellow-50 text-yellow-700 border-l-4 border-yellow-500' :
                    'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                }`}
            >
              {status.message}
            </div>
          )}

          {showExplanation && (
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-4">{t.functionSelectorPhishing.explanation.title}</h3>
              <p className="mb-3" dangerouslySetInnerHTML={{ __html: t.functionSelectorPhishing.explanation.correctAnswer }}></p>
              <p className="mb-3" dangerouslySetInnerHTML={{ __html: t.functionSelectorPhishing.explanation.selectorInfo }}></p>

              <h4 className="text-lg font-semibold mt-4 mb-2">{t.functionSelectorPhishing.explanation.decodedTitle}</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                {t.functionSelectorPhishing.explanation.decodedDetails.map((detail, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: detail }}></li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">{t.functionSelectorPhishing.explanation.whyTitle}</h4>
              <p className="mb-2">{t.functionSelectorPhishing.explanation.whyDescription1}</p>
              <p className="mb-2">{t.functionSelectorPhishing.explanation.whyDescription2}</p>
              <p className="mb-4">{t.functionSelectorPhishing.explanation.whyDescription3}</p>

              <h4 className="text-lg font-semibold mt-4 mb-2">{t.functionSelectorPhishing.explanation.protectionTitle}</h4>
              <ul className="list-disc pl-6 space-y-1">
                {t.functionSelectorPhishing.explanation.protectionTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">{t.functionSelectorPhishing.explanation.realWorldExample.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: t.functionSelectorPhishing.explanation.realWorldExample.description }}></p>
            </div>
          )} */}
          </div>
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="function-selector-phishing"
        successContent={
          <>
            <div
              className={`p-4 rounded-md ${status.type === 'error' ? 'bg-red-50 text-red-700 border-l-4 border-red-500' :
                status.type === 'success' ? 'bg-green-50 text-green-700 border-l-4 border-green-500' :
                  status.type === 'warning' ? 'bg-yellow-50 text-yellow-700 border-l-4 border-yellow-500' :
                    'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                }`}
            >
              {status.message}
            </div>
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-4">{t.functionSelectorPhishing.explanation.title}</h3>
              <p className="mb-3 overflow-auto break-words whitespace-normal" dangerouslySetInnerHTML={{ __html: t.functionSelectorPhishing.explanation.correctAnswer }}></p>
              <p className="mb-3" dangerouslySetInnerHTML={{ __html: t.functionSelectorPhishing.explanation.selectorInfo }}></p>

              <h4 className="text-lg font-semibold mt-4 mb-2">{t.functionSelectorPhishing.explanation.decodedTitle}</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                {t.functionSelectorPhishing.explanation.decodedDetails.map((detail, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: detail }}></li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">{t.functionSelectorPhishing.explanation.whyTitle}</h4>
              <p className="mb-2">{t.functionSelectorPhishing.explanation.whyDescription1}</p>
              <p className="mb-2">{t.functionSelectorPhishing.explanation.whyDescription2}</p>
              <p className="mb-4">{t.functionSelectorPhishing.explanation.whyDescription3}</p>

              <h4 className="text-lg font-semibold mt-4 mb-2">{t.functionSelectorPhishing.explanation.protectionTitle}</h4>
              <ul className="list-disc pl-6 space-y-1">
                {t.functionSelectorPhishing.explanation.protectionTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">{t.functionSelectorPhishing.explanation.realWorldExample.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: t.functionSelectorPhishing.explanation.realWorldExample.description }}></p>
            </div>
          </>
        }
      />
    </>
  );
}
