'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import TwitterPhishingSuccessContent from './TwitterPhishingSuccessContent';

export default function TwitterPhishingPage() {
  const { t } = useLanguage();
  const [realHandle, setRealHandle] = useState('');
  const [fakeHandle, setFakeHandle] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const REAL_HANDLE = "mubarak_cto";
  const FAKE_HANDLE = "mubcrckcfo";

  const checkAnswers = async () => {
    const normalizedReal = realHandle.trim().toLowerCase().replace(/^@/, '');
    const normalizedFake = fakeHandle.trim().toLowerCase().replace(/^@/, '');

    setShowResult(true);

    if (normalizedReal === REAL_HANDLE.toLowerCase() && normalizedFake === FAKE_HANDLE.toLowerCase()) {
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
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 challenge-title">{t.twitterPhishing.title}</h1>
            <h2 className="text-xl mb-2 challenge-subtitle">{t.twitterPhishing.subtitle}</h2>
            <h3 className="text-lg text-yellow-600">{t.twitterPhishing.warning}</h3>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 challenge-title">{t.twitterPhishing.scenarioTitle}</h3>
            <p className="mb-4 challenge-title">{t.twitterPhishing.scenarioDescription}</p>

            <div className="border border-gray-300 rounded-lg overflow-hidden mb-8 bg-white">
              {/* Original Post */}
              <div className="p-4 border-b border-gray-300">
                <div className="flex items-start gap-3">
                  <img src="https://pbs.twimg.com/profile_images/1902993492755812352/9ERvbxrO_x96.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
                  <div className="flex-1">
                    <div className="font-bold">mubarak -Community takeover</div>
                    <div className="text-gray-500">@mubarak_cto</div>
                    <div className="mt-2">
                      {t.twitterPhishing.originalPostContent}
                    </div>

                    <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-1">
                        <span className="font-medium">847</span>
                        <span>{t.twitterPhishing.reposts}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">122</span>
                        <span>{t.twitterPhishing.quotes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">2,941</span>
                        <span>{t.twitterPhishing.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">152.5K</span>
                        <span>{t.twitterPhishing.views}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 text-gray-500">
                      <span>💭</span>
                      <span>🔄</span>
                      <span>❤️</span>
                      <span>📊</span>
                      <span>📤</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reply Input */}
              <div className="p-4 border-b border-gray-300 flex gap-3">
                <img src="https://pbs.twimg.com/profile_images/1569640683216195585/sv0gkd56_x96.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
                <div className="flex-1">
                  <textarea
                    placeholder={t.twitterPhishing.replyPlaceholder}
                    className="w-full border border-gray-300 rounded-lg p-2 mb-2 resize-none"
                    rows={1}
                  ></textarea>
                  <button
                    className="bg-gray-200 text-gray-500 px-4 py-1 rounded-full font-bold"
                    disabled
                  >
                    {t.twitterPhishing.postButton}
                  </button>
                </div>
              </div>

              {/* Scam Reply */}
              <div className="p-4 border-b border-gray-300">
                <div className="flex items-start gap-3">
                  <img src="https://pbs.twimg.com/profile_images/1902993492755812352/9ERvbxrO_x96.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
                  <div className="flex-1">
                    <div className="font-bold">mubcrak - Ccmmunity takecver</div>
                    <div className="text-gray-500">@mubcrckcfo</div>
                    <div className="mt-2" dangerouslySetInnerHTML={{ __html: t.twitterPhishing.scamReplyContent }}></div>

                    <div className="flex items-center justify-between mt-4 text-gray-500">
                      <span>💭</span>
                      <span>🔄</span>
                      <span>❤️</span>
                      <span>📊</span>
                      <span>📤</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Show more */}
              <div className="p-4 text-gray-500 text-sm">
                {t.twitterPhishing.showMoreReplies}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">{t.twitterPhishing.yourTask}</h3>
              <p className="mb-4">{t.twitterPhishing.taskDescription}</p>

              <div className="mb-4">
                <label className="block font-semibold mb-2">{t.twitterPhishing.realHandleLabel}</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder={t.twitterPhishing.realHandlePlaceholder}
                  value={realHandle}
                  onChange={(e) => setRealHandle(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold mb-2">{t.twitterPhishing.fakeHandleLabel}</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder={t.twitterPhishing.fakeHandlePlaceholder}
                  value={fakeHandle}
                  onChange={(e) => setFakeHandle(e.target.value)}
                />
              </div>

              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                onClick={checkAnswers}
              >
                {t.twitterPhishing.submitButton}
              </button>

              {showResult && (
                <div className={`mt-6 p-4 rounded-lg ${isSuccess ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border-2`}>
                  {isSuccess ? (
                    <div>
                      <h3 className="text-xl font-bold text-green-700 mb-4">{t.twitterPhishing.success.title}</h3>
                      <p className="mb-2">{t.twitterPhishing.success.differences}</p>
                      <ul className="list-disc pl-6 mb-4 space-y-2">
                        {t.twitterPhishing.success.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                      <p className="font-medium">{t.twitterPhishing.success.tip}</p>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xl font-bold text-red-700 mb-4">{t.twitterPhishing.error.title}</h3>
                      <p>{t.twitterPhishing.error.hint}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="twitter-phishing"
        successContent={<TwitterPhishingSuccessContent />}
      />
    </>
  );
}
