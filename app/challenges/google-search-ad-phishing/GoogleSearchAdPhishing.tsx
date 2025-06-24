'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import GoogleSearchAdPhishingSuccessContent from './GoogleSearchAdPhishingSuccessContent';

const GoogleSearchAdPhishing = () => {
  const { t } = useLanguage();
  const [realDomain, setRealDomain] = useState('');
  const [fakeDomain, setFakeDomain] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const REAL_DOMAIN = 'lido.fi';
  const FAKE_DOMAIN = 'lido.is';

  const checkAnswers = async () => {
    setShowResult(true);
    const isCorrect = realDomain.trim().toLowerCase() === REAL_DOMAIN &&
      fakeDomain.trim().toLowerCase() === FAKE_DOMAIN;
    setIsSuccess(isCorrect);

    if (isCorrect) {
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 challenge-title">{t.googleSearchAdPhishing.title}</h1>
            <h2 className="text-xl mb-4 challenge-subtitle">{t.googleSearchAdPhishing.subtitle}</h2>
            <h3 className="text-lg text-red-500 mb-8">{t.googleSearchAdPhishing.warning}</h3>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center">{t.googleSearchAdPhishing.scenarioTitle}</h3>
              <p className="text-center mb-8">{t.googleSearchAdPhishing.scenarioDescription}</p>

              <div className="max-w-2xl mx-auto">
                <div className="search-result">
                  <div className="sponsored-tag">Sponsored · Ad</div>
                  <div className="search-title">Lido Finance | Ethereum Staking | Start Staking Now</div>
                  <div className="search-url">lido.is</div>
                  <div className="search-description">
                    Stake your ETH easily with Lido. No minimum deposits, no infrastructure maintenance. Start earning rewards now!
                  </div>
                </div>

                <div className="search-result">
                  <div className="search-title">Lido - Ethereum Staking Platform</div>
                  <div className="search-url">lido.fi</div>
                  <div className="search-description">
                    Lido allows users to stake Ethereum without locking assets or maintaining infrastructure while participating in on-chain activities.
                  </div>
                </div>
              </div>

              <div className="max-w-xl mx-auto space-y-6 mt-12">
                <div className="bg-gray-50 rounded-lg shadow-md p-6">
                  <label htmlFor="real-domain" className="block font-semibold mb-2 text-center">
                    {t.googleSearchAdPhishing.realDomainLabel}
                  </label>
                  <input
                    type="text"
                    id="real-domain"
                    value={realDomain}
                    onChange={(e) => setRealDomain(e.target.value)}
                    placeholder={t.googleSearchAdPhishing.realDomainPlaceholder}
                    className="w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none text-center font-mono"
                  />
                </div>

                <div className="bg-gray-50 rounded-lg shadow-md p-6">
                  <label htmlFor="fake-domain" className="block font-semibold mb-2 text-center">
                    {t.googleSearchAdPhishing.fakeDomainLabel}
                  </label>
                  <input
                    type="text"
                    id="fake-domain"
                    value={fakeDomain}
                    onChange={(e) => setFakeDomain(e.target.value)}
                    placeholder={t.googleSearchAdPhishing.fakeDomainPlaceholder}
                    className="w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none text-center font-mono"
                  />
                </div>

                <button
                  onClick={checkAnswers}
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg"
                >
                  {t.googleSearchAdPhishing.submitButton}
                </button>

                {showResult && (
                  <div className={`mt-8 p-6 rounded-lg ${isSuccess ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'}`}>
                    <h3 className="font-bold text-xl mb-4 text-center">
                      {isSuccess ? t.googleSearchAdPhishing.successTitle : t.googleSearchAdPhishing.failureTitle}
                    </h3>
                    <p className="mb-6 text-center">
                      {isSuccess
                        ? t.googleSearchAdPhishing.successDescription
                        : t.googleSearchAdPhishing.failureDescription}
                    </p>
                    {isSuccess && (
                      <div className="mt-6">
                        <h4 className="font-bold text-lg mb-4 text-center">{t.googleSearchAdPhishing.protectionTitle}</h4>
                        <ul className="list-disc pl-6 space-y-3">
                          {t.googleSearchAdPhishing.protectionTips.map((tip, index) => (
                            <li key={index} className="text-gray-700">{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="google-search-ad-phishing"
        successContent={<GoogleSearchAdPhishingSuccessContent />}
      />
      <style jsx>{`
        .search-result {
          border: 1px solid #ddd;
          border-radius: 12px;
          padding: 16px;
          margin: 20px 0;
          background-color: #fff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s;
        }

        .search-result:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .sponsored-tag {
          display: inline-block;
          color: #5f6368;
          font-size: 12px;
          margin-bottom: 6px;
          background-color: #f8f9fa;
          padding: 2px 8px;
          border-radius: 4px;
        }

        .search-title {
          color: #1a0dab;
          font-size: 18px;
          margin: 5px 0;
          text-decoration: none;
          font-weight: 500;
        }

        .search-url {
          color: #006621;
          font-size: 14px;
          margin: 6px 0;
        }

        .search-description {
          color: #4d5156;
          font-size: 14px;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
};

export default GoogleSearchAdPhishing;