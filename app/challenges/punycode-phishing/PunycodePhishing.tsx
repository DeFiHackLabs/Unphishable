'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import PunycodePhishingSuccessContent from './PunycodePhishingSuccessContent';

export default function PunycodePhishing() {
  const { t } = useLanguage();

  // Correct answers
  const REAL_DOMAIN = "trezor.io";
  const FAKE_DOMAINS = ["trẹzor.com", "xn--trzor-o51b.com", "trẹzor.io", "xn--trzor-io51b.com"];

  const [showPunycodeInfo, setShowPunycodeInfo] = useState(false);
  const [result, setResult] = useState({ show: false, success: false });
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const checkAnswers = async (realDomainInput: string, fakeDomainInput: string) => {
    setShowPunycodeInfo(true);

    const isCorrect = realDomainInput.trim().toLowerCase() === REAL_DOMAIN &&
      FAKE_DOMAINS.includes(fakeDomainInput.trim().toLowerCase());

    if (isCorrect) {
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setResult({
      show: true,
      success: isCorrect
    });
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="p-4 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 challenge-title">🔍 {t.punycodePhishing.title} 🔍</h1>
            <h2 className="text-xl mb-2 challenge-subtitle">{t.punycodePhishing.subtitle}</h2>
            <h3 className="text-lg text-yellow-600">{t.punycodePhishing.warning}</h3>
          </div>

          <div className="mb-8 ">
            <h3 className="text-xl font-semibold mb-4 challenge-title">{t.punycodePhishing.scenarioTitle}</h3>
            <p className="mb-4 challenge-title">{t.punycodePhishing.scenarioDescription}</p>

            <div className="domain-comparison">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-2xl font-bold mb-2">trẹzor.com</div>
                <div className="text-gray-600">{t.punycodePhishing.domainAppearance}</div>
              </div>
            </div>
          </div>

          {showPunycodeInfo && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold mb-4">{t.punycodePhishing.whatIsPunycode}</h4>
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.punycodePhishing.punycodeDescription }}></p>

              <table className="w-full border-collapse mb-4">
                <thead>
                  <tr className="bg-yellow-100">
                    <th className="border p-2 text-left">{t.punycodePhishing.displayedDomain}</th>
                    <th className="border p-2 text-left">{t.punycodePhishing.actualDomain}</th>
                    <th className="border p-2 text-left">{t.punycodePhishing.description}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">trẹzor.com</td>
                    <td className="border p-2">xn--trzor-o51b.com</td>
                    <td className="border p-2">{t.punycodePhishing.specialCharacters}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          <div className="mb-8 challenge-title">
            <h3 className="text-xl font-semibold mb-4">{t.punycodePhishing.yourTask}</h3>

            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">{t.punycodePhishing.realDomainLabel}</label>
                <input
                  type="text"
                  id="real-domain"
                  className="w-full p-2 border rounded"
                  placeholder={t.punycodePhishing.realDomainPlaceholder}
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">{t.punycodePhishing.fakeDomainLabel}</label>
                <input
                  type="text"
                  id="fake-domain"
                  className="w-full p-2 border rounded"
                  placeholder={t.punycodePhishing.fakeDomainPlaceholder}
                />
              </div>

              <button
                onClick={() => {
                  const realDomain = (document.getElementById('real-domain') as HTMLInputElement).value;
                  const fakeDomain = (document.getElementById('fake-domain') as HTMLInputElement).value;
                  checkAnswers(realDomain, fakeDomain);
                }}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                {t.punycodePhishing.submitButton}
              </button>
            </div>
          </div>

          {result.show && (
            <div className={`p-6 rounded-lg ${result.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              {result.success ? (
                <div>
                  <h3 className="text-xl font-semibold mb-4">{t.punycodePhishing.successTitle}</h3>
                  <p className="mb-4">{t.punycodePhishing.successDescription}</p>
                  <div className="space-y-4">
                    <h4 className="font-semibold">{t.punycodePhishing.protectionTitle}</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      {t.punycodePhishing.protectionTips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold mb-4">{t.punycodePhishing.failureTitle}</h3>
                  <p>{t.punycodePhishing.failureDescription}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="punycode-phishing"
        successContent={<PunycodePhishingSuccessContent />}
      />
    </>
  );
}