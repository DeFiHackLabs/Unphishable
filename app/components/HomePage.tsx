'use client';
import TopBar from './index/TopBar';
import ChallengeCards from './index/ChallengeCards';
import Leaderboard from '@/app/components/index/Leaderboard';
import AboutUs from './index/AboutUs';
import Founders from './index/Founders';
import Sponsors from './index/Sponsors';
import Footer from './index/Footer';
import Image from 'next/image';

import { useLanguage } from '@/app/contexts/LanguageContext';
import Link from 'next/link';
import '@/app/styles/HomePage.css';
import { isChallengesAvailable } from '@/app/constants/timeConfig';
export default function Home() {
  const { t, language } = useLanguage();
  const challengesAvailable = isChallengesAvailable();

  // 根據條件定義行內樣式
  // const heroContentStyle = !challengesAvailable ? { marginTop: '9vh' } : {};

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <div className="hero-section bg-black text-gray-800 text-center">
        <div
          className="hero-content relative z-10 px-4"
        // style={heroContentStyle}
        >
          <div className="flex justify-center mb-4"> {/* 添加這個容器來置中圖片 */}
            <Image
              src={(language === 'en') ? '/images/banner-title-en.svg' : (language === 'zh-hans') ? '/images/banner-title-zh-hans.svg' : '/images/banner-title-zh-hant.svg'}
              alt={t.home.title}
              width={600}
              height={100}
              style={{ width: 'auto', height: 'auto' }} // 讓圖片保持其原始比例
            />
          </div>
          <>
            <p className="text-lg text-white max-w-lg mx-auto mb-6">
              {t.home.description}
            </p>

            <Link
              href="/challenges"
              className={`challenge-link mt-2`}
            >
              {t.home.startChallenge}
            </Link>
          </>

        </div>
      </div>
      {challengesAvailable &&
        <ChallengeCards />
      }
      {challengesAvailable &&
        <Leaderboard title='index' />
      }
      <AboutUs title='index' />
      <Founders />
      <Sponsors title='index' />
      <Footer />
    </div>
  );
}