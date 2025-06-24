'use client';

import TopBar from './index/TopBar';
import Banner from '@/app/components/index/Banner';
import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import '@/app/styles/ChallengeLayout.css';
import Image from 'next/image';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import { GoLock } from "react-icons/go";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useUserStore } from '@/app/stores/userStore';
import { usePathname } from 'next/navigation';
import { challenges } from '@/app/data/challenges';
import { useChallengeStore } from '@/app/stores/challengeStore';
import ShareModal from '@/app/components/ShareModal';

interface ChallengeLayoutProps {
  children: React.ReactNode;
}

const ChallengeLayout = ({ children }: ChallengeLayoutProps) => {
  const { t } = useLanguage();
  const [openLevels, setOpenLevels] = useState<{ [key: number]: boolean }>({ 0: true, 1: true, 2: true });
  const { theme } = useTheme();
  const { profile } = useUserStore();
  const pathname = usePathname();
  const [currentChallenge, setCurrentChallenge] = useState<any>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [, setCloseShareModal] = useState(false);
  // 使用 challengeStore
  const {
    userChallengesStatus,
    currentChallengeInfo,
    getUserChallengesStatus,
    getChallengeInfo
  } = useChallengeStore();

  // 獲取當前 challenge 數據
  useEffect(() => {
    if (pathname) {
      const challengeName = pathname.split('/').pop();
      if (challengeName) {
        // 從本地數據獲取基本信息
        const challenge = challenges.find((c) => c.name === challengeName);
        if (challenge) {
          setCurrentChallenge(challenge);
          // 從 API 獲取更多詳細信息
          getChallengeInfo(challengeName);
        }
      }
    }
  }, [pathname, getChallengeInfo]);

  // 載入使用者挑戰狀態
  useEffect(() => {
    if (profile) {
      getUserChallengesStatus();

    }
  }, [profile, getUserChallengesStatus]);

  const openShareModal = () => {
    setIsShareModalOpen(true);
  }
  // 檢查挑戰是否已完成
  const isChallengeCompleted = (challengeName: string) => {
    if (!userChallengesStatus) return false;

    // 使用 some() 方法檢查是否有任何符合條件的項目
    return userChallengesStatus.some(challenge => {
      if (challenge.challenge_key === challengeName) {
        return true;
      }
      return false;
    });
  };

  // 獲取已完成挑戰數量
  const getCompletedCount = () => {
    return currentChallengeInfo?.completion_count || '-'; // 預設值與原代碼保持一致
  };

  const toggleLevel = (index: number) => {
    setOpenLevels(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // 根據 challenges.ts 中的數據生成難度等級
  const { language } = useLanguage();
  const [difficultyLevels, setDifficultyLevels] = useState([
    {
      title: language === 'en' ? 'Beginner' : language === 'zh-hans' ? '初級' : '初级',
      stars: 1,
      challenges: challenges
        .filter(challenge => challenge.difficulty === "Beginner")
        .map(challenge => ({
          id: challenge.no,
          name: challenge.name,
          title: challenge.title[language] || challenge.title.en,
          completed: isChallengeCompleted(challenge.name),
          link: challenge.link
        })),
    },
    {
      title: language === 'en' ? 'Intermediate' : language === 'zh-hans' ? '中級' : '中级',
      stars: 2,
      challenges: challenges
        .filter(challenge => challenge.difficulty === "Intermediate")
        .map(challenge => ({
          id: challenge.no,
          name: challenge.name,
          title: challenge.title[language] || challenge.title.en,
          completed: isChallengeCompleted(challenge.name),
          link: challenge.link
        })),
    },
    {
      title: language === 'en' ? 'Advanced' : language === 'zh-hans' ? '高級' : '高级',
      stars: 3,
      challenges: challenges
        .filter(challenge => challenge.difficulty === "Advanced")
        .map(challenge => ({
          id: challenge.no,
          name: challenge.name,
          title: challenge.title[language] || challenge.title.en,
          completed: isChallengeCompleted(challenge.name),
          link: challenge.link
        })),
    },
  ]);

  // 當 userChallengesStatus 更新時重新計算 difficultyLevels
  useEffect(() => {
    const levels = [
      {
        title: language === 'en' ? 'Beginner' : language === 'zh-hans' ? '初級' : '初级',
        stars: 1,
        challenges: challenges
          .filter(challenge => challenge.difficulty === "Beginner")
          .map(challenge => ({
            id: challenge.no,
            name: challenge.name,
            title: challenge.title[language] || challenge.title.en,
            completed: isChallengeCompleted(challenge.name),
            link: challenge.link
          })),
      },
      {
        title: language === 'en' ? 'Intermediate' : language === 'zh-hans' ? '中級' : '中级',
        stars: 2,
        challenges: challenges
          .filter(challenge => challenge.difficulty === "Intermediate")
          .map(challenge => ({
            id: challenge.no,
            name: challenge.name,
            title: challenge.title[language] || challenge.title.en,
            completed: isChallengeCompleted(challenge.name),
            link: challenge.link
          })),
      },
      {
        title: language === 'en' ? 'Advanced' : language === 'zh-hans' ? '高級' : '高级',
        stars: 3,
        challenges: challenges
          .filter(challenge => challenge.difficulty === "Advanced")
          .map(challenge => ({
            id: challenge.no,
            name: challenge.name,
            title: challenge.title[language] || challenge.title.en,
            completed: isChallengeCompleted(challenge.name),
            link: challenge.link
          })),
      },
    ];

    setDifficultyLevels(levels);
  }, [userChallengesStatus, language]);

  // 檢查用戶是否已登錄
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(useUserStore.getState().profile !== null);
  }, [profile]);

  // 在現有的 state 定義區域添加
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 添加一個切換選單的函數
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  // 在 state 定義區域添加
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // 定義滑動事件處理函數
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) { // 左滑
      setIsMobileMenuOpen(false);
    }

    if (touchStart - touchEnd < -100) { // 右滑
      setIsMobileMenuOpen(true);
    }
  };

  // 添加響應式字體大小調整
  useEffect(() => {
    // 設置字體大小縮放比例的函數
    const setTextScale = () => {
      const width = window.innerWidth;
      let scale = 1; // 預設縮放比例

      // 根據螢幕寬度設定不同的縮放比例
      if (width < 640) {
        scale = 0.7; // 小型螢幕
      } else if (width >= 640 && width < 768) {
        scale = 0.9; // 小到中型螢幕
      } else if (width >= 768 && width < 1024) {
        scale = 1; // 中型螢幕（基準尺寸）
      }

      // else if (width >= 1024 && width < 1280) {
      //   scale = 1.1; // 大型螢幕
      // } else if (width >= 1280) {
      //   scale = 1.2; // 超大型螢幕
      // }

      // 將縮放比例設置為 CSS 變數
      document.documentElement.style.setProperty('--text-scale', scale.toString());

      // 為整個內容區應用縮放
      const contentArea = document.querySelector('main');
      if (contentArea) {
        contentArea.style.fontSize = `calc(1rem * ${scale})`;
      }
    };

    // 立即執行一次設置
    setTextScale();

    // 監聽視窗大小變化事件
    window.addEventListener('resize', setTextScale);

    // 清理函數
    return () => {
      window.removeEventListener('resize', setTextScale);
    };
  }, []);


  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <style jsx global>{`
        :root {
          --text-scale: 1;
        }
        
        /* 設定基本字體大小，所有子元素將繼承這個比例 */
        .responsive-text {
          font-size: calc(1rem * var(--text-scale));
        }
        
        /* 確保在桌面模式下隱藏手機版選單按鈕 */
        @media (min-width: 768px) {
          .mobile-menu-button {
            display: none !important;
          }
        }
                  /* 針對不同元素的特定縮放 */
        .responsive-text h1 {
          font-size: calc(1.5rem * var(--text-scale));
        }
        
        .responsive-text h2 {
          font-size: calc(1.25rem * var(--text-scale));
        }
        
        .responsive-text p, .responsive-text li {
          font-size: calc(1rem * var(--text-scale));
          line-height: calc(1.5 * var(--text-scale));
        }
        
        /* 按鈕文字縮放 */
        .responsive-text button {
          font-size: calc(0.875rem * var(--text-scale));
        }
      `}</style>

      {/* 頂部導覽列 */}
      <TopBar />
      <Banner />
      {/* 主內容區 */}
      <main
        className={`mx-auto flex ${theme === 'dark' ? 'bg-[#0b0b0c]' : 'bg-white'} shadow-md relative transition-all duration-300 ${isMobileMenuOpen ? 'md:ml-0 ml-64' : 'ml-0'
          }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* 左側關卡選單 - 桌面版 */}
        <aside className="hidden md:block w-64 mr-6 h-fit sticky top-6 self-start rounded-lg p-4 leftMenu">
          <div className="flex my-3 items-center gap-2">
            <IoArrowBackCircleOutline className={theme === 'dark' ? 'text-[#c4ff41]' : 'text-[#000000]'} />
            <Link href="/challenges" className={theme === 'dark' ? 'text-[#c4ff41]' : 'text-[#000000]'}>
              {t.common.backButton}
            </Link>
          </div>
          {difficultyLevels.map((level, index) => (
            <div key={index} className="mb-6">
              <h2
                className={`text-lg font-semibold flex items-center justify-between level-header ${openLevels[index] ? 'open' : ''}`}
                onClick={() => toggleLevel(index)}
              >
                <div className='flex items-center'>
                  <div className='flex items-center'>
                    <span className="aboutBox" />
                    <h1 className="aboutTitle">{level.title}</h1>
                  </div>
                  {index === 0 && (
                    <div className="flex items-center ml-3">
                      <Image src="/images/icon-star-s.svg" alt="Star" width={16} height={16} className="mr-1" />
                      <Image src="/images/icon-star-n.svg" alt="Star" width={16} height={16} className="mr-1" />
                      <Image src="/images/icon-star-n.svg" alt="Star" width={16} height={16} className="mr-1" />
                    </div>
                  )}
                  {index === 1 && (
                    <div className="flex items-center ml-3">
                      <Image src="/images/icon-star-s.svg" alt="Star" width={16} height={16} className="mr-1" />
                      <Image src="/images/icon-star-s.svg" alt="Star" width={16} height={16} className="mr-1" />
                      <Image src="/images/icon-star-n.svg" alt="Star" width={16} height={16} className="mr-1" />
                    </div>
                  )}
                  {index === 2 && (
                    <div className="flex items-center ml-3">
                      <Image src="/images/icon-star-s.svg" alt="Star" width={16} height={16} className="mr-1" />
                      <Image src="/images/icon-star-s.svg" alt="Star" width={16} height={16} className="mr-1" />
                      <Image src="/images/icon-star-s.svg" alt="Star" width={16} height={16} className="mr-1" />
                    </div>
                  )}
                </div>
              </h2>
              {openLevels[index] && (
                <ul className="mt-2 space-y-1">
                  {level.challenges.map((challenge) => (
                    <li
                      key={challenge.id}
                      className={`flex items-center justify-between py-1`}
                    >
                      <Link href={challenge.link} className="hover:text-[#c4ff41] transition-colors duration-200 flex-1 truncate">
                        <span className="truncate block">No.{challenge.id}</span>
                      </Link>
                      <span>
                        {useUserStore.getState().profile?.has_completed_challenge1 ? (
                          theme === 'dark' ? (
                            challenge.name === "wallet-setup-guide" ?
                              <IoMdCheckmarkCircleOutline className='text-[#c4ff41]' /> :
                              challenge.completed ?
                                <IoMdCheckmarkCircleOutline className='text-[#c4ff41]' /> :
                                <IoMdCheckmarkCircleOutline className='text-gray-500' />
                          ) : (
                            challenge.name === "wallet-setup-guide" ?
                              <div className='bg-[#c4ff41] rounded-full flex items-center justify-center'>
                                <FaCircleCheck className='text-[#000000]' />
                              </div> :
                              challenge.completed ?
                                <div className='bg-[#c4ff41] rounded-full flex items-center justify-center'>
                                  <FaCircleCheck className='text-[#000000]' />
                                </div> :
                                <FaCircleCheck className='text-gray-300' />
                          )
                        ) : (
                          challenge.name === "wallet-setup-guide" ?
                            theme === 'dark' ?
                              <IoMdCheckmarkCircleOutline className='text-gray-500' /> :
                              <FaCircleCheck className='text-gray-300' /> :
                            <GoLock className='text-gray-500' />
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </aside>

        {/* 手機版選單開關按鈕 - 優化觸控體驗與顯示邏輯 */}
        <button
          onClick={toggleMobileMenu}
          className="mobile-menu-button fixed left-0 top-1/2 transform -translate-y-1/2 z-30 bg-[#c4ff41] p-3 rounded-r-lg shadow-md"
          aria-label="Toggle menu"
          style={{
            width: '50px',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            touchAction: 'manipulation'
          }}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          )}
        </button>

        {/* 手機版側邊選單 - 優化觸控體驗與顯示邏輯 */}
        <aside
          className={`block md:hidden fixed inset-y-0 left-0 z-20 transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } bg-white dark:bg-[#0b0b0c] shadow-xl overflow-y-auto`}
          style={{
            width: '280px',
            touchAction: 'pan-y'
          }}
        >
          {/* 手機版選單內容 */}
          <div className="p-4">
            <div className="flex my-3 items-center gap-2">
              <IoArrowBackCircleOutline className={theme === 'dark' ? 'text-[#c4ff41]' : 'text-[#000000]'} />
              <Link href="/challenges" className={theme === 'dark' ? 'text-[#c4ff41]' : 'text-[#000000]'} onClick={() => setIsMobileMenuOpen(false)}>
                {t.common.backButton}
              </Link>
            </div>
            {difficultyLevels.map((level, index) => (
              <div key={index} className="mb-6">
                <h2
                  className={`text-lg font-semibold flex items-center justify-between level-header ${openLevels[index] ? 'open' : ''}`}
                  onClick={() => toggleLevel(index)}
                >
                  <div className='flex items-center'>
                    <div className='flex items-center'>
                      <span className="aboutBox" />
                      <h1 className="aboutTitle">{level.title}</h1>
                    </div>
                    {/* 星星圖標 */}
                    {index === 0 && (
                      <div className="flex items-center ml-3">
                        <Image src="/images/icon-star-s.svg" alt="Star" width={16} height={16} className="mr-1" />
                        <Image src="/images/icon-star-n.svg" alt="Star" width={16} height={16} className="mr-1" />
                        <Image src="/images/icon-star-n.svg" alt="Star" width={16} height={16} className="mr-1" />
                      </div>
                    )}
                    {index === 1 && (
                      <div className="flex items-center ml-3">
                        <Image src="/images/icon-star-s.svg" alt="Star" width={16} height={16} className="mr-1" />
                        <Image src="/images/icon-star-s.svg" alt="Star" width={16} height={16} className="mr-1" />
                        <Image src="/images/icon-star-n.svg" alt="Star" width={16} height={16} className="mr-1" />
                      </div>
                    )}
                    {index === 2 && (
                      <div className="flex items-center ml-3">
                        <Image src="/images/icon-star-s.svg" alt="Star" width={16} height={16} className="mr-1" />
                        <Image src="/images/icon-star-s.svg" alt="Star" width={16} height={16} className="mr-1" />
                        <Image src="/images/icon-star-s.svg" alt="Star" width={16} height={16} className="mr-1" />
                      </div>
                    )}
                  </div>
                </h2>
                {openLevels[index] && (
                  <ul className="mt-2 space-y-1">
                    {level.challenges.map((challenge) => (
                      <li
                        key={challenge.id}
                        className={`flex items-center justify-between py-1`}
                      >
                        <Link
                          href={challenge.link}
                          className="hover:text-[#c4ff41] transition-colors duration-200 flex-1 truncate"
                          onClick={() => setIsMobileMenuOpen(false)} // 點擊後關閉選單
                        >
                          <span className="truncate block">No.{challenge.id}</span>
                        </Link>
                        {/* 挑戰狀態圖標 */}
                        <span>
                          {useUserStore.getState().profile?.has_completed_challenge1 ? (
                            theme === 'dark' ? (
                              challenge.name === "wallet-setup-guide" ?
                                <IoMdCheckmarkCircleOutline className='text-[#c4ff41]' /> :
                                challenge.completed ?
                                  <IoMdCheckmarkCircleOutline className='text-[#c4ff41]' /> :
                                  <IoMdCheckmarkCircleOutline className='text-gray-500' />
                            ) : (
                              challenge.name === "wallet-setup-guide" ?
                                <div className='bg-[#c4ff41] rounded-full flex items-center justify-center'>
                                  <FaCircleCheck className='text-[#000000]' />
                                </div> :
                                challenge.completed ?
                                  <div className='bg-[#c4ff41] rounded-full flex items-center justify-center'>
                                    <FaCircleCheck className='text-[#000000]' />
                                  </div> :
                                  <FaCircleCheck className='text-gray-300' />
                            )
                          ) : (
                            challenge.name === "wallet-setup-guide" ?
                              theme === 'dark' ?
                                <IoMdCheckmarkCircleOutline className='text-gray-500' /> :
                                <FaCircleCheck className='text-gray-300' /> :
                              <GoLock className='text-gray-500' />
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* 點擊背景關閉選單的覆蓋層 - 提高觸控靈敏度 */}
        {isMobileMenuOpen && (
          <div
            className="block md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{ touchAction: 'manipulation' }}
          ></div>
        )}

        {/* 右側內容區域 */}
        <section className="flex-1">
          <div className="flex justify-between items-center p-2 mb-4">
            <div className="flex items-center">
              <div className="bg-[#1e1e1e] text-[#c4ff41] px-4 py-1 rounded-full mr-4">
                NO.{currentChallenge?.no || '0x0001'}
              </div>
              <span className={`${theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#999999]'}`}>
                {language === 'en' ? (
                  <>
                    <span className={`${theme === 'dark' ? 'text-[#DAFF6A] font-bold' : 'text-[#000000] font-bold'}`}>{getCompletedCount()}</span> people have completed this challenge
                  </>
                ) : language === 'zh-hans' ? (
                  <>
                    已有 <span className={`${theme === 'dark' ? 'text-[#DAFF6A] font-bold' : 'text-[#000000] font-bold'}`}>{getCompletedCount()}</span> 人通过此关
                  </>
                ) : (
                  <>
                    已有 <span className={`${theme === 'dark' ? 'text-[#DAFF6A] font-bold' : 'text-[#000000] font-bold'}`}>{getCompletedCount()}</span> 人通過此關
                  </>
                )}
              </span>
            </div>
            <div className="flex items-center mt-1">
              <button
                className="bg-[#c4ff41] p-2 rounded-full mr-3"
                onClick={openShareModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>

              <div className="flex items-center mr-2">
                <span className={`mr-2 ${theme === 'dark' ? 'text-white' : 'text-[#000000]'}`}>
                  {language === 'en' ? 'Contributors:' : language === 'zh-hans' ? '贡献者：' : '貢獻者：'}
                </span>
                <div className="flex items-center">
                  {currentChallengeInfo?.contributor ? (
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden">
                        <a href={currentChallengeInfo.contributor.x_url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                          <img
                            src={currentChallengeInfo.contributor.avatar || "https://i.pravatar.cc/32"}
                            alt={`${currentChallengeInfo.contributor.name} 頭像`}
                            className="w-full h-full object-cover"
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className={`text-xs text-center ${theme === 'dark' ? 'text-white' : 'text-[#000000]'}`}>{currentChallengeInfo.contributor.name || "貢獻者"}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 overflow-hidden">
                      {/* <img src="https://i.pravatar.cc/32" alt="貢獻者頭像" className="w-full h-full object-cover" /> */}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            {currentChallenge?.name === "wallet-setup-guide" ?
              (children) : (
                isLoggedIn && (
                  profile?.has_completed_challenge1
                ) ? (
                  children
                ) : (
                  <div className="relative">
                    {/* 顯示模糊且無法操作的內容 */}
                    <div
                      className="relative overflow-hidden pointer-events-none select-none"
                      style={{
                        maxHeight: '5%',
                        filter: 'blur(2px)'
                      }}
                    >
                      {children}
                    </div>

                    {/* 鎖定遮罩 - 即使被刪除，下方內容也無法操作 */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
                      id="lock-overlay"
                      data-testid="lock-overlay"
                    >
                      {/* 上半部分顯示，下半部分遮罩 */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90" style={{ top: '5%' }}></div>

                      {/* 鎖圖標和提示文字 */}
                      <div className="absolute flex flex-col items-center justify-center" style={{ top: '50%', transform: 'translateY(-50%)', height: '50%' }}>
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 border-2 border-[#c4ff41]">
                          <GoLock className="text-[#c4ff41] text-3xl" />
                        </div>
                        <p className="text-white text-lg font-medium">{t.challenges.locked2}</p>
                        <Link href='/challenges/wallet-setup-guide'>
                          <button className="mt-4 bg-[#c4ff41] text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all">
                            No.0x0001
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              )}

          </div>
        </section>
      </main>

      {/* 分享模態框 */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => {
          setIsShareModalOpen(false);
          setCloseShareModal(true);
        }}
        shareUrl={
          typeof window !== 'undefined'
            ? `${window.location.origin}/challenges/${currentChallenge?.name || ''}`
            : `https://unphishable.io/challenges/${currentChallenge?.name || ''}`
        }
      />
    </div>
  );
};

export default ChallengeLayout;