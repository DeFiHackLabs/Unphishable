'use client';

import { useState, useEffect, Suspense } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { challenges } from '@/app/data/challenges';
import { useRouter, useSearchParams } from 'next/navigation';
import TopBar from '@/app/components/index/TopBar';
import Banner from '@/app/components/index/Banner';
import Footer from '@/app/components/index/Footer';
import ChallengeCard from '@/app/components/index/ChallengeCard';
import styles from '@/app/styles/ChallengesPage.module.css';

// 這是一個搜尋參數加載器組件，將實際邏輯移至此處
function ChallengesContent() {
  const { t } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();

  // 從 URL 參數獲取 type 和 page
  const typeFromUrl = searchParams?.get('type') || 'All';
  const pageFromUrl = parseInt(searchParams?.get('page') || '1', 10);

  const [currentDifficulty, setCurrentDifficulty] = useState(typeFromUrl);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const itemsPerPage = 6;

  const difficulties = [
    { label: t.challenges.all, key: 'All' },
    { label: t.challenges.beginner, key: 'Beginner' },
    { label: t.challenges.intermediate, key: 'Intermediate' },
    { label: t.challenges.advanced, key: 'Advanced' },
  ];

  // 每次渲染時重新從 challenges 篩選
  const filteredChallenges = challenges.filter(challenge =>
    currentDifficulty === 'All' ? true : challenge.difficulty === currentDifficulty
  );

  // 計算總頁數
  const totalPages = Math.ceil(filteredChallenges.length / itemsPerPage);

  // 根據當前頁碼切片顯示的挑戰
  const displayChallenges = filteredChallenges.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 當 URL 參數變更時，更新狀態
  useEffect(() => {
    setCurrentDifficulty(typeFromUrl);
    setCurrentPage(pageFromUrl);
  }, [typeFromUrl, pageFromUrl]);

  // 確保頁碼在有效範圍內
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      updateUrlParams(currentDifficulty, 1);
    }
  }, [totalPages, currentPage]);

  // 更新 URL 參數的函數
  const updateUrlParams = (difficulty: string, page: number) => {
    const params = new URLSearchParams();
    if (difficulty !== 'All') {
      params.set('type', difficulty);
    }
    if (page !== 1) {
      params.set('page', page.toString());
    }

    // 更新 URL，但不重新加載頁面
    const newUrl = `/challenges${params.toString() ? `?${params.toString()}` : ''}`;
    router.push(newUrl, { scroll: false });
  };

  // 處理難度變更
  const handleDifficultyChange = (difficulty: string) => {
    setCurrentDifficulty(difficulty);
    updateUrlParams(difficulty, 1); // 切換難度時重置為第一頁
  };

  // 處理頁碼變更
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      updateUrlParams(currentDifficulty, page);
    }
  };

  return (
    <div className={styles.contentWrapper}>
      <div className="max-w-7xl lg:max-w-6xl mx-auto lg:px-14 px-5 py-12">
        <div className="flex justify-between items-center">
          <div className='flex items-center mb-5'>
            <span className={styles.aboutBox} />
            <h1 className={styles.aboutTitle}>{t.home.securityChallenges}</h1>
          </div>
          <button className="more-contributions flex items-center gap-2">
            {t.home.contributions}
          </button>
        </div>

        <div className="flex justify-between items-center md:flex-row flex-col gap-4">
          <div className={`${styles.filterContainer}`}>
            {difficulties.map((difficulty) => (
              <button
                key={difficulty.key}
                onClick={() => handleDifficultyChange(difficulty.key)}
                className={`${styles.difficultyButton} ${currentDifficulty === difficulty.key ? styles.activeButton : ''}`}
              >
                {difficulty.label}
              </button>
            ))}
          </div>
          {totalPages > 1 && (
            <div className={`${styles.paginationContainer} w-full md:w-auto justify-center md:justify-start`}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`${styles.paginationButton} ${currentPage === page ? styles.activePage : ''}`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`${styles.paginationButton} ${currentPage === totalPages ? styles.disabledButton : ''}`}
              >
                {t.challenges.next}
              </button>
            </div>
          )}
        </div>
        <div className="challenge-grid mb-8">
          {displayChallenges.length > 0 ? (
            displayChallenges.map((challenge, index) => (
              <ChallengeCard
                key={index}
                {...challenge}
              />
            ))
          ) : (
            <div className="w-full text-center py-8">
              {t.challenges.noChallenges || "No results found"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// 主要的 ChallengesPage 組件
export default function ChallengesPage() {
  return (
    <div className={`min-h-screen ${styles.challengesPage}`}>
      <TopBar />
      <Banner />
      <Suspense fallback={
        <div className="p-10 text-center">
          Loading challenges...
        </div>
      }>
        <ChallengesContent />
      </Suspense>
      <Footer />
    </div>
  );
}