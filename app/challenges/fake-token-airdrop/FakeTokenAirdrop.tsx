'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import FakeTokenAirdropSuccessContent from './FakeTokenAirdropSuccessContent';

export default function FakeTokenAirdrop() {
  const { t } = useLanguage();
  const [realDomain, setRealDomain] = useState('');
  const [fakeDomain, setFakeDomain] = useState('');
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Correct answers
  const REAL_DOMAIN = "app.uniswap.org";
  const FAKE_DOMAIN = "app.un1swap.org";

  const checkAnswers = async () => {
    if (realDomain.trim().toLowerCase() === REAL_DOMAIN &&
      fakeDomain.trim().toLowerCase() === FAKE_DOMAIN) {
      // Submit challenge completion
      try {
        // if (!result.success) {
        //   throw new Error(result.error);
        // }
        setResult({
          success: true,
          message: t.fakeTokenAirdrop.successMessage
        });
        setShowCompletionModal(true);
        if (chatEndRef.current) {
          chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (error) {
        console.error('Error submitting challenge:', error);
        setResult({
          success: true,
          message: t.fakeTokenAirdrop.successMessage
        });
      }
    } else {
      setResult({
        success: false,
        message: t.fakeTokenAirdrop.failureMessage
      });
    }
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="p-4 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 challenge-title">{t.fakeTokenAirdrop.title}</h1>
            <h2 className="text-xl mb-2 challenge-subtitle">{t.fakeTokenAirdrop.subtitle}</h2>
            <h3 className="text-lg text-yellow-600">{t.fakeTokenAirdrop.warning}</h3>
          </div>

          <div className="mb-8 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">{t.fakeTokenAirdrop.scenario.title}</h3>
            <p className="mb-4">{t.fakeTokenAirdrop.scenario.description}</p>

            <div className="transaction-container bg-gray-50 border border-gray-200 rounded-lg p-4 my-4 font-mono text-sm">
              <div className="flex justify-start mb-2 text-gray-600">
                <div>{t.fakeTokenAirdrop.transaction.hashLabel}</div>
                <div className="text-blue-500 cursor-pointer">
                  <a href="https://sepolia.etherscan.io/tx/0x1b23f927c47a6cb68fb7207a42c600a34726c583082301d2b7626d5447a5e363" target="_blank" rel="noopener noreferrer">
                    0x1b23f927c47a6cb68fb7207a42c600a34726c583082301d2b7626d5447a5e363
                  </a>
                </div>
              </div>
              <div className="flex mb-2">
                <div className="w-44 text-gray-600">{t.fakeTokenAirdrop.transaction.statusLabel}</div>
                <div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">{t.fakeTokenAirdrop.transaction.success}</span> {t.fakeTokenAirdrop.transaction.confirmations}
                </div>
              </div>
              <div className="flex mb-2">
                <div className="w-44 text-gray-600">{t.fakeTokenAirdrop.transaction.blockLabel}</div>
                <div>3504400</div>
              </div>
              <div className="flex mb-2">
                <div className="w-44 text-gray-600">{t.fakeTokenAirdrop.transaction.timestampLabel}</div>
                <div>{t.fakeTokenAirdrop.transaction.timestamp}</div>
              </div>
              <div className="flex mb-2">
                <div className="w-44 text-gray-600">{t.fakeTokenAirdrop.transaction.actionLabel}</div>
                <div>{t.fakeTokenAirdrop.transaction.action}</div>
              </div>
              <div className="flex mb-2">
                <div className="w-44 text-gray-600">{t.fakeTokenAirdrop.transaction.fromLabel}</div>
                <div>0x4276BF06Aebd8A1F3D89a1fd5BF84bFa1B7D03Ce</div>
              </div>
              <div className="flex mb-2">
                <div className="w-44 text-gray-600">{t.fakeTokenAirdrop.transaction.toLabel}</div>
                <div>0x4d264c6Ab8933633cd8B052dE243Fa41F757Fe5</div>
              </div>
              <div className="flex mb-2">
                <div className="w-44 text-gray-600">{t.fakeTokenAirdrop.transaction.tokensLabel}</div>
                <div>
                  {t.fakeTokenAirdrop.transaction.transferDetails}<br />
                  {t.fakeTokenAirdrop.transaction.amount} <span className="bg-yellow-100 px-1 py-0.5 rounded">{t.fakeTokenAirdrop.transaction.tokenName}</span>
                </div>
              </div>
              <div className="flex mb-2">
                <div className="w-44 text-gray-600">{t.fakeTokenAirdrop.transaction.valueLabel}</div>
                <div>0 ETH</div>
              </div>
              <div className="flex mb-2">
                <div className="w-44 text-gray-600">{t.fakeTokenAirdrop.transaction.feeLabel}</div>
                <div>0.0000001689464305 ETH</div>
              </div>
              <div className="flex mb-2">
                <div className="w-44 text-gray-600">{t.fakeTokenAirdrop.transaction.gasPriceLabel}</div>
                <div>0.003237514 Gwei (0.000000000003237514 ETH)</div>
              </div>
            </div>

            <p className="mt-4">{t.fakeTokenAirdrop.phishingExplanation}</p>

            <h3 className="text-xl font-bold mt-6 mb-4">{t.fakeTokenAirdrop.taskTitle}</h3>
            <p className="mb-4">{t.fakeTokenAirdrop.taskDescription}</p>

            <div className="mb-4">
              <label htmlFor="real-domain" className="block font-bold mb-2">{t.fakeTokenAirdrop.realDomainLabel}</label>
              <input
                type="text"
                id="real-domain"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder={t.fakeTokenAirdrop.realDomainPlaceholder}
                value={realDomain}
                onChange={(e) => setRealDomain(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="fake-domain" className="block font-bold mb-2">{t.fakeTokenAirdrop.fakeDomainLabel}</label>
              <input
                type="text"
                id="fake-domain"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder={t.fakeTokenAirdrop.fakeDomainPlaceholder}
                value={fakeDomain}
                onChange={(e) => setFakeDomain(e.target.value)}
              />
            </div>

            <button
              className="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600 transition-colors"
              onClick={checkAnswers}
            >
              {t.fakeTokenAirdrop.submitButton}
            </button>

            {result && (
              <div className={`mt-4 p-4 rounded ${result.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {result.message}
                {result.success && (
                  <div className="mt-4">
                    <h4 className="font-bold mb-2">{t.fakeTokenAirdrop.tipTitle}</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {t.fakeTokenAirdrop.tips.map((tip: string, index: number) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="fake-token-airdrop"
        successContent={<FakeTokenAirdropSuccessContent result={result} />}
      />
    </>

  );
}