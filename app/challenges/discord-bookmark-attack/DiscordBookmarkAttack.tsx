'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import DiscordBookmarkAttackSuccessContent from './DiscordBookmarkAttackSuccessContent';

export default function DiscordBookmarkAttack() {
  const { t, language } = useLanguage();
  const [showMaliciousWarning, setShowMaliciousWarning] = useState(false);
  const [challengeCompleted, setChallengeCompleted] = useState(false);

  const bookmarkPlaceholderRef = useRef<HTMLDivElement>(null);
  const [bookmarkText, setBookmarkText] = useState('');
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // 在組件內添加 useEffect
  useEffect(() => {
    if (showMaliciousWarning && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [showMaliciousWarning]);

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', 'Discord Verification');
    if (bookmarkPlaceholderRef.current) {
      bookmarkPlaceholderRef.current.style.borderColor = '#ef4444';
      bookmarkPlaceholderRef.current.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
    }

  };

  const handleDragEnd = () => {
    if (bookmarkPlaceholderRef.current) {
      bookmarkPlaceholderRef.current.style.borderColor = '#3b82f6';
      bookmarkPlaceholderRef.current.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (bookmarkPlaceholderRef.current) {
      bookmarkPlaceholderRef.current.style.borderColor = '#ef4444';
      bookmarkPlaceholderRef.current.style.backgroundColor = 'rgba(239, 68, 68, 0.3)';
    }
  };

  const handleDragLeave = () => {
    if (bookmarkPlaceholderRef.current) {
      bookmarkPlaceholderRef.current.style.borderColor = '#3b82f6';
      bookmarkPlaceholderRef.current.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    setBookmarkText(data);
    if (bookmarkPlaceholderRef.current) {
      bookmarkPlaceholderRef.current.style.borderColor = '';
      bookmarkPlaceholderRef.current.style.backgroundColor = '#374151';
    }
  };

  const handleBookmarkClick = () => {
    if (bookmarkText) {
      const currentLang = language;
      let alertMessage = 'Danger! This is a malicious bookmark attack demonstration. In a real situation, this bookmark could steal your Discord token or perform other malicious operations.\n\nFlag: DISCORD_BOOKMARK_ATTACK_2025';

      if (currentLang === 'zh-hant') {
        alertMessage = '危險！這是一個惡意書籤攻擊演示。在真實情況下，這個書籤可能會竊取您的 Discord 令牌或執行其他惡意操作。\n\nFlag: DISCORD_BOOKMARK_ATTACK_2025';
      } else if (currentLang === 'zh-hans') {
        alertMessage = '危险！这是一个恶意书签攻击演示。在真实情况下，这个书签可能会窃取您的 Discord 令牌或执行其他恶意操作。\n\nFlag: DISCORD_BOOKMARK_ATTACK_2025';
      }

      alert(alertMessage);
      setShowMaliciousWarning(true);
    }
  };

  const [flag, setFlag] = useState('');
  const [q1Answer, setQ1Answer] = useState('');
  const [q2Answer, setQ2Answer] = useState('');
  const [showError, setShowError] = useState(false);

  const handleCompleteChallenge = async () => {
    if (flag === 'DISCORD_BOOKMARK_ATTACK_2025' &&
      q1Answer === 'correct' &&
      q2Answer === 'correct') {
      setChallengeCompleted(true);
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setShowError(true);
    }
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6 bg-[#36393f] min-h-screen">
          <div className="bg-[#f04747] text-white text-center p-3 rounded-lg mb-6">
            ⚠️ {t.discordBookmarkAttack.warning}
          </div>

          <h1 className="text-3xl font-bold text-[#dcddde] mb-4">{t.discordBookmarkAttack.title}</h1>
          <p className="text-[#b9bbbe] mb-6">{t.discordBookmarkAttack.description}</p>

          <div className="bg-[#2f3136] rounded-lg shadow-lg overflow-hidden mb-8 border border-[#202225]">
            <div className="bg-[#202225] p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-[#ed4245]"></div>
                <div className="w-3 h-3 rounded-full bg-[#faa61a]"></div>
                <div className="w-3 h-3 rounded-full bg-[#3ba55c]"></div>
              </div>
              <div className="bg-[#2f3136] text-[#dcddde] text-center py-1 rounded">
                https://discord.com/channels/123456789/admin-panel
              </div>
            </div>
            <div className="bg-[#2f3136] p-2 flex space-x-2">
              <div className="bg-[#202225] px-3 py-1 rounded text-sm text-[#b9bbbe]">Gmail</div>
              <div className="bg-[#202225] px-3 py-1 rounded text-sm text-[#b9bbbe]">YouTube</div>
              <div className="bg-[#202225] px-3 py-1 rounded text-sm text-[#b9bbbe]">Discord</div>
              <div
                ref={bookmarkPlaceholderRef}
                className={`${bookmarkText ? 'bg-[#202225]' : 'border-2 border-dashed border-[#5865f2] bg-[#5865f2]/10'} px-3 py-1 rounded min-w-[100px] cursor-pointer text-[#dcddde]`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleBookmarkClick}
              >
                {bookmarkText}
              </div>
            </div>
            <div className="p-6 bg-[#2f3136]">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-[#dcddde]">{t.discordBookmarkAttack.verificationTitle}</h3>
                <p className="text-[#b9bbbe] mb-6">{t.discordBookmarkAttack.verificationDescription}</p>
                <div
                  className="bg-[#5865f2] text-white font-bold py-3 px-6 rounded inline-block cursor-pointer relative hover:bg-[#4752c4] transition-colors"
                  draggable="true"
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                >
                  {t.discordBookmarkAttack.dragButton}
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2">👆</span>
                </div>
              </div>
            </div>
          </div>
          {showMaliciousWarning && (
            <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-black-800 mb-4">{t.discordBookmarkAttack.bookmarkAttackExplanation.title}</h3>
              <p className="text-black-700 mb-4">{t.discordBookmarkAttack.bookmarkAttackExplanation.description}</p>

              {/* 添加新的常见攻击场景说明 */}
              <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-amber-800 mb-4">{t.discordBookmarkAttack.commonAttackScenario.title}</h3>
                <p className="text-amber-700 mb-4">{t.discordBookmarkAttack.commonAttackScenario.description}</p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <strong className="font-bold">{t.discordBookmarkAttack.commonAttackScenario.warning}</strong>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-2">{t.discordBookmarkAttack.attackScenario.title}</h4>
                <p className="mb-4">{t.discordBookmarkAttack.attackScenario.description}</p>
                {t.discordBookmarkAttack.attackScenario.steps.map((step, index) => (
                  <div key={index} className={`p-4 mb-4 rounded-lg ${index === 2 || index === 3 ? 'bg-red-50 border-l-4 border-red-500' : 'bg-gray-50 border-l-4 border-gray-500'}`}>
                    <h5 className="font-bold mb-2">{step.title}</h5>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-2">{t.discordBookmarkAttack.recentIncidents.title}</h4>
                <p className="text-gray-700">{t.discordBookmarkAttack.recentIncidents.description}</p>
              </div>
            </div>
          )}
          {showMaliciousWarning && !challengeCompleted && (
            <div
              ref={formRef}
              className="bg-[#2f3136] border border-[#202225] p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-[#dcddde] mb-4">{t.discordBookmarkAttack.challengeCompletion.title}</h3>

              <div className="space-y-4">
                <div className="form-group">
                  <label className="block text-[#dcddde] font-bold mb-2">{t.discordBookmarkAttack.challengeCompletion.flagLabel}</label>
                  <input
                    type="text"
                    value={flag}
                    onChange={(e) => setFlag(e.target.value)}
                    className="w-full p-2 bg-[#202225] border border-[#40444b] rounded text-[#dcddde] focus:border-[#5865f2] focus:outline-none"
                    placeholder={t.discordBookmarkAttack.challengeCompletion.flagPlaceholder}
                  />
                </div>

                <div className="form-group">
                  <label className="block text-[#dcddde] font-bold mb-2">{t.discordBookmarkAttack.challengeCompletion.question1.label}</label>

                  <select
                    value={q1Answer}
                    onChange={(e) => setQ1Answer(e.target.value)}
                    className="w-full p-2 bg-[#202225] border border-[#40444b] rounded text-[#dcddde] focus:border-[#5865f2] focus:outline-none"
                  >
                    {t.discordBookmarkAttack.challengeCompletion.question1.options.map((option, index) => (
                      <option key={index} value={index === 1 ? 'correct' : `incorrect${index}`}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="block text-[#dcddde] font-bold mb-2">{t.discordBookmarkAttack.challengeCompletion.question2.label}</label>
                  <select
                    value={q2Answer}
                    onChange={(e) => setQ2Answer(e.target.value)}
                    className="w-full p-2 bg-[#202225] border border-[#40444b] rounded text-[#dcddde] focus:border-[#5865f2] focus:outline-none"
                  >
                    {t.discordBookmarkAttack.challengeCompletion.question2.options.map((option, index) => (
                      <option key={index} value={index === 1 ? 'correct' : `incorrect${index}`}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {showError && (
                  <div className="bg-[#f04747]/10 border border-[#f04747] text-[#f04747] px-4 py-3 rounded">
                    <p>{t.discordBookmarkAttack.challengeCompletion.errorMessage}</p>
                  </div>
                )}

                <button
                  onClick={handleCompleteChallenge}
                  className="px-6 py-3 bg-[#5865f2] text-white rounded-lg hover:bg-[#4752c4] transition-colors w-full font-medium"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="discord-bookmark-attack"
        successContent={<DiscordBookmarkAttackSuccessContent />}
      />
    </>
  );
}