'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useChallengeStore } from '@/app/stores/challengeStore';
import { useUserStore } from '../stores/userStore';
import { challengeService } from '@/app/services/challengeService';
import { challenges } from '@/app/data/challenges';
import { FiCheckCircle } from "react-icons/fi";
import '@/app/styles/ErrorModal.css';
// import { Balloons } from "@/app/components/balloons";

interface ChallengeCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  challengeKey: string;
  successContent?: React.ReactNode;
}

const ChallengeCompletionModal = ({
  isOpen,
  onClose,
  challengeKey,
  successContent,
}: ChallengeCompletionModalProps) => {
  // const balloonsRef = useRef<{ launchAnimation: () => void } | null>(null)
  const { theme } = useTheme();
  const router = useRouter();
  const { t, language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [nextChallenge, setNextChallenge] = useState<{
    name: string;
    link: string;
    title: { [key: string]: string };
  } | null>(null);
  const [challengeInfo, setChallengeInfo] = useState<any>(null);

  // 获取当前挑战的信息
  const { currentChallengeInfo, getChallengeInfo } = useChallengeStore();

  useEffect(() => {
    setIsMounted(true);
    if (isOpen) {
      getChallengeInfo(challengeKey);
    }
  }, [isOpen, getChallengeInfo]);

  useEffect(() => {
    const handleChallenge = async () => {
      if (challengeKey && isOpen) {
        const currentIndex = challenges.findIndex(c => c.name === challengeKey);
        setChallengeInfo(challenges[currentIndex]);
        setIsSave(true);
        try {
          // 提交挑戰
          await challengeService.submitChallenge(challengeKey);

          // 立即更新挑戰狀態
          const challengeStore = useChallengeStore.getState();
          await challengeStore.getUserChallengesStatus();
          if (challengeKey === 'wallet-setup-guide') {
            const r = await useUserStore.getState().lastFetchAddress;
            await useUserStore.getState().fetchProfile(r || '', true);
          }

          // 啟動氣球動畫
          // if (balloonsRef.current) {
          //   balloonsRef.current.launchAnimation();
          // }
          // 設置下一個挑戰
          if (currentIndex !== -1 && currentIndex < challenges.length - 1) {
            setNextChallenge(challenges[currentIndex + 1]);
          } else {
            setNextChallenge(challenges[0]);
          }
        } catch (error) {
          setIsSave(false);
          console.error("Failed to submit challenge:", error);
        }
        setIsSave(false);
      }
    };

    handleChallenge();
  }, [challengeKey, isOpen]);

  const handleNextChallenge = () => {
    if (nextChallenge) {
      router.push(`${nextChallenge.link}?lang=${language}`);
      onClose();
    } else {
      // 如果没有下一个挑战，返回挑战列表页面
      router.push('/challenges');
      onClose();
    }
  };

  if (!isMounted || !isOpen || !challengeInfo) return null;

  return (
    <>
      {/* 讓氣球在內容前面，給予更高的 z-index */}
      {/* <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-[10000]">
        <Balloons
          ref={balloonsRef}
          type="default"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
      </div> */}

      {/* 模態框內容 */}
      <div className="h-full w-full">
        <div className={`flex items-center justify-center h-full error-modal ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
          <div className="modal-content md:p-8 w-full max-w-[95%] md:max-w-md lg:max-w-lg mx-auto relative shadow-2xl animate-fadeIn">
            {/* 不再需要關閉按鈕 */}

            {/* 計算中 */}
            <div className="flex items-center justify-center mb-6">
              {isSave ? (
                <svg
                  className="animate-spin h-8 w-8 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    strokeWidth="4"
                    stroke="currentColor"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4.93 4.93a10 10 0 0114.14 14.14l1.41 1.41a12 12 0 00-16.97-16.97l1.42 1.42z"
                  />
                </svg>
              ) : (
                <div className="flex flex-col items-center justify-center mb-6">
                  <FiCheckCircle className="text-[#c4ff41] text-6xl" />

                  <p className={`text-center mt-6 ${theme === 'dark' ? `text-gray-300 ` : `text-gray-600`}`}>
                    {t.challengeCompletionModal?.congratulations || '恭喜！'}
                    {t.challengeCompletionModal?.completed || '您已完成'}
                    <span className="font-semibold mx-2">{challengeInfo.title[language]}</span>
                    <span className='mr-2'>{t.challengeCompletionModal?.challenge || '已通过'}</span>
                    <span className="font-semibold mx-2">NO.{challengeInfo.no}</span>
                  </p>
                  <p className={`text-center ${theme === 'dark' ? `text-gray-300 ` : `text-gray-600`} my-4`}>
                    {t.challengeCompletionModal?.earned || '获得'}
                    <span className="font-semibold text-yellow-500 px-2">{currentChallengeInfo?.points}</span>
                    {t.challengeCompletionModal?.experiencePoints || '经验值'}
                  </p>
                </div>
              )}
            </div>

            <div className="relative flex justify-center space-x-4">
              {nextChallenge ? (
                <>
                  <button
                    onClick={handleNextChallenge}
                    className="primary-button px-6 py-3 rounded-sm max-w-sm transition-all font-medium flex-1 text-center"
                  >
                    {
                      (nextChallenge.name === 'wallet-setup-guide')
                        ? t.challengeCompletionModal?.challengeCompletion
                        : t.challengeCompletionModal?.nextChallenge || '挑战下一关'
                    }

                  </button>
                </>
              ) : (
                <button
                  className="primary-button px-6 py-3 rounded-sm transition-all font-medium flex-1 text-center"
                >
                  {t.challengeCompletionModal?.calculating || '计算执行中...'}
                </button>
              )}
            </div>

            {successContent && (
              <div className="mt-6 mb-6">
                {successContent}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChallengeCompletionModal;