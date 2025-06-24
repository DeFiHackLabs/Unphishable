'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCard from './ChallengeCard';
import { challenges } from '@/app/data/challenges'
import { FaArrowRight } from "react-icons/fa";
import styles from '@/app/styles/ChallengeCard.module.css';

export default function ChallengeCards() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }


  return (
    <div className={styles.challengeCardsSection}>
      <div className="max-w-7xl lg:max-w-6xl mx-auto lg:px-14 px-5 py-12">
        <h2 className={styles.title}>{t.home.securityChallenges}</h2>

        <p className="text-center mb-8">{t.home.challengeDescription}</p>

        <div className="challenge-grid">
          {challenges.slice(0, 4).map((challenge, index) => (
            <ChallengeCard
              key={index}
              {...challenge}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className='flex items-center justify-center mt-10 gap-5'>
            <button className="more-link flex items-center gap-2">
              {t.home.challengeMore} <FaArrowRight />
            </button>
            <button className="more-contributions flex items-center gap-2">
              {t.home.contributions} <FaArrowRight />
            </button>
          </div>

        </div>
      </div>
    </div >
  );
}