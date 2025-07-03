'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useUserStore } from '@/app/stores/userStore';
import WalletConnect from '@/app/components/index/WalletConnect';
import TopBar from '@/app/components/index/TopBar';
import Footer from '@/app/components/index/Footer';
import Banner from '@/app/components/index/Banner';
import EditProfileModal from '@/app/components/EditProfileModal';
import { FiEdit } from "react-icons/fi";
import '@/app/styles/ProfilePage.css';
// 導入等級相關定義
import { getLevelInfo } from '@/app/constants/levels';

export default function ProfilePage() {
  const { address } = useAccount();
  const { t, language } = useLanguage();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { profile, userInfo, updateProfile, fetchUserInfo } = useUserStore();

  useEffect(() => {
    console.log('Address:', address);
    if (address) {
      fetchUserInfo(address, true);
    }
  }, []);

  const handleProfileUpdate = (nickname: string, photoUrl: string | null) => {
    updateProfile(nickname, photoUrl);
  };

  const translations = {
    title: {
      en: 'Personal Center',
      'zh-hant': '個人中心',
      'zh-hans': '个人中心'
    },
    basicInfo: {
      en: 'Basic Information',
      'zh-hant': '基本信息',
      'zh-hans': '基本信息'
    },
    achievements: {
      en: 'My Achievements',
      'zh-hant': '我的成績',
      'zh-hans': '我的成绩'
    },
    badges: {
      en: 'My Badges',
      'zh-hant': '我的獎章',
      'zh-hans': '我的奖章'
    },
    securityRank: {
      en: 'Security Rank',
      'zh-hant': '安全等級',
      'zh-hans': '安全等级'
    },
    securityScore: {
      en: 'Security Score',
      'zh-hant': '安全積分',
      'zh-hans': '安全积分'
    },
    completedChallenges: {
      en: 'Web3 Phishing Security Challenge',
      'zh-hant': 'Web3 钓鱼安全挑戰',
      'zh-hans': 'Web3  钓鱼安全挑战'
    },
    notConnected: {
      en: 'Please connect your wallet first',
      'zh-hant': '請先連接錢包',
      'zh-hans': '请先连接钱包'
    }
  };

  if (!address) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex-col justify-center align-middle text-center text-gray-600">
          {translations.notConnected[language as keyof typeof translations.notConnected]}
          <div className="connect-button flex items-center justify-center">
            <WalletConnect language={language} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen infoBackground">
      <TopBar />
      <Banner />
      <div className="max-w-7xl lg:max-w-6xl mx-auto lg:px-14 lg:py-10">
        {/* <h1 className="text-3xl font-bold mb-8">
          {translations.title[language as keyof typeof translations.title]}
        </h1> */}

        {/* 基本信息區塊 */}
        {/* <div className="bg-white rounded-lg shadow-md p-6 mb-6"> */}
        <div className="flex mb-4 gap-4">
          <div className='flex items-center'>
            <span className="infoBox" />
            <h1 className="infoTitle">{translations.basicInfo[language as keyof typeof translations.basicInfo]}</h1>
          </div>
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
            title="編輯資料"
          >
            <FiEdit size={16} />
          </button>
        </div>

        <div className="flex items-center justify-between pl-6 mb-10">
          <div className="flex items-start justify-between w-full infoContent">
            <div className="grid grid-cols-2 gap-10">
              <div className="flex items-center space-x-2">
                <p className="w-20">{t.profile.userName}</p>
                <p>{profile?.nickname}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="w-20">{t.profile.SecurityTitle}</p>
                <p>{getLevelInfo(userInfo?.total_score || 0).title[language]}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="w-20">{t.profile.Rank}</p>
                <p className=" text-sm">{userInfo?.rank}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="w-20 ">{t.profile.SecurityScore}</p>
                <p className=" text-sm">{userInfo?.total_score}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300 mr-4">
              {profile?.photo_url ? (
                <img src={profile.photo_url} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white text-2xl">
                  {address.substring(0, 2)}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* 成就區塊 */}

        <div className='flex items-center my-4'>
          <span className="infoBox" />
          <h1 className="infoTitle">{translations.achievements[language as keyof typeof translations.achievements]}</h1>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className='progress-text'>
                {translations.completedChallenges[language as keyof typeof translations.completedChallenges]}
              </h3>
              <div className="progress-stats">
                {/* <span>通過 20 關</span>
                <span>完成 {Math.round(((20) / (30)) * 100)}%</span> */}
                <span>{t.profile.stats.passed.replace('{count}', String(userInfo?.completion_count))}</span>
                <span>{t.profile.stats.completed.replace('{percentage}', Math.round(((userInfo?.completion_count || 0) / (userInfo?.total_challenges || 1)) * 100).toString())}</span>
              </div>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${((userInfo?.completion_count || 0) / (userInfo?.total_challenges || 1)) * 100}%` }}></div>
              {/* <div className="progress-bar" style={{ width: `${((20) / (30)) * 100}%` }}></div> */}
            </div>
          </div>
        </div>


        {/* 獎章區塊 */}

        {/* <div className='flex items-center my-4'>
          <span className="infoBox" />
          <h1 className="infoTitle">{translations.badges[language as keyof typeof translations.badges]}</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((badge) => (
            <div key={badge} className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full" />
            </div>
          ))}
        </div> */}

      </div>
      <Footer />
      {profile && (
        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          currentNickname={profile.nickname}
          currentPhotoUrl={profile.photo_url || null}
          onProfileUpdate={handleProfileUpdate as (nickname: string | undefined, photoUrl: string | null) => void}
        />
      )}
    </div>
  );
}