'use client';

import { useEffect } from 'react';
import styles from '@/app/styles/Leaderboard.module.css';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { CgProfile } from "react-icons/cg";
import { useLeaderboardStore } from '@/app/stores/leaderboardStore';
// const language: "en" | "zh-hant" | "zh-hans"
// 等級資訊介面
export interface LevelInfo {
  level: number;
  title: {
    'en': string;
    'zh-hant': string;
    'zh-hans': string;
  };
  minScore: number;
  maxScore: number;
}

// 等級資訊定義
export const LEVELS: LevelInfo[] = [
  {
    level: 1,
    title: {
      'en': "Cybersecurity Newbie",
      'zh-hant': "網路安全新手",
      'zh-hans': "网络安全新手"
    },
    minScore: 0,
    maxScore: 1000
  },
  {
    level: 2,
    title: {
      'en': "Web3 Guardian",
      'zh-hant': "Web3 防護員",
      'zh-hans': "Web3 防护员"
    },
    minScore: 1001,
    maxScore: 2000
  },
  {
    level: 3,
    title: {
      'en': "Blockchain Defense Warrior",
      'zh-hant': "區塊鏈防禦戰士",
      'zh-hans': "区块链防御战士"
    },
    minScore: 2001,
    maxScore: 3500
  },
  {
    level: 4,
    title: {
      'en': "Crypto Security Expert",
      'zh-hant': "加密安全專家",
      'zh-hans': "加密安全专家"
    },
    minScore: 3501,
    maxScore: 5000
  },
  {
    level: 5,
    title: {
      'en': "Web3 Security Master",
      'zh-hant': "Web3 安全大師",
      'zh-hans': "Web3 安全大师"
    },
    minScore: 5001,
    maxScore: 6000
  },
  {
    level: 6,
    title: {
      'en': "Blockchain Security Legend",
      'zh-hant': "區塊鏈安全傳奇",
      'zh-hans': "区块链安全传奇"
    },
    minScore: 6001,
    maxScore: 999999 // 設置較高的上限或使用 Infinity
  }
];

// 計算等級資訊函式
export const getLevelInfo = (score: number): LevelInfo => {
  return LEVELS.find(
    level => score >= level.minScore && score <= level.maxScore
  ) || LEVELS[0];
};

export default function Leaderboard({
  title
}: { title?: string }) {
  const { t, language } = useLanguage();
  const { leaderboard, isLoading, error, fetchLeaderboard } = useLeaderboardStore();

  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  useEffect(() => {
    if (leaderboard) {
      console.log('aaa Leaderboard data:', leaderboard);
    }
  }, [leaderboard]);
  // 格式化分數顯示
  const formatScore = (score: number): string => {
    return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // 獲取排名徽章樣式
  const getRankBadgeClass = (rank: number): string => {
    if (rank === 1) return `${styles.goldRank} ${styles.rankBadge}`;
    if (rank === 2) return `${styles.silverRank} ${styles.rankBadge}`;
    if (rank === 3) return `${styles.bronzeRank} ${styles.rankBadge}`;
    return styles.normalRank;
  };

  // 獲取排名徽章背景圖
  const getRankBadgeBackground = (rank: number): string => {
    if (rank === 1) return '/images/rankBadge-1.svg';
    if (rank === 2) return '/images/rankBadge-2.svg';
    if (rank === 3) return '/images/rankBadge-3.svg';
    return '';
  };

  // 獲取趨勢圖標
  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    if (trend === 'up') return <span className={styles.trendUp}>↑</span>;
    if (trend === 'down') return <span className={styles.trendDown}>↓</span>;
    return <span className={styles.trendStable}>-</span>;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-500">Error loading leaderboard: {error}</div>
      </div>
    );
  }

  // 手機版和桌面版的渲染
  const renderDesktopTable = () => (
    <table className={`${styles.leaderboardTable} hidden md:table`}>
      <thead>
        <tr>
          <th className={styles.rankHeader}>{t.leaderboard.ranking}</th>
          <th className={styles.challengerHeader}>{t.leaderboard.challenger}</th>
          <th className={styles.titleHeader}>{t.leaderboard.securityTitle}</th>
          <th className={styles.levelHeader}>{t.leaderboard.level}</th>
          <th className={styles.scoreHeader}>{t.leaderboard.score}</th>
        </tr>
      </thead>
      <tbody>
        {leaderboard.map((user, index) => {
          const userLevel = getLevelInfo(user.total_score);
          return (
            <tr key={index} className={styles.leaderboardRow}>
              <td className={styles.rankCell}>
                <div className={`${styles.rankBadge} ${getRankBadgeClass(index + 1)}`} style={{ backgroundImage: `url(${getRankBadgeBackground(index + 1)})` }}>
                  {index + 1}
                </div>
                {getTrendIcon('stable')}
              </td>
              <td className={`${styles.challengerCell}`}>
                <div className='flex items-center gap-4'>
                  <div className={styles.avatarContainer}>
                    <div className={styles.topLeft}></div>
                    <div className={styles.bottomRight}></div>
                    <div className={styles.avatarWrapper}>
                      {user.photo_url ? (
                        <img
                          src={user.photo_url}
                          alt={`${user.nickname}'s avatar`}
                          className={styles.avatar}
                        />
                      ) : (
                        <CgProfile className={styles.avatar} />
                      )}
                    </div>
                  </div>
                  <span className={styles.challengerName}>{user.nickname}</span>
                </div>
              </td>
              <td className={styles.titleCell}>{userLevel.title[language] || userLevel.title['zh-hant']}</td>
              {language === 'zh-hant' && (
                <td className={styles.levelCell}>
                  <span className={styles.levelIcon} />
                  等級 {userLevel.level}
                </td>
              )}
              {language === 'en' && (
                <td className={styles.levelCell}>
                  <span className={styles.levelIcon} />
                  Level {userLevel.level}
                </td>
              )}
              {language === 'zh-hans' && (
                <td className={styles.levelCell}>
                  <span className={styles.levelIcon} />
                  等级 {userLevel.level}
                </td>
              )}
              <td className={styles.scoreCell}>{formatScore(user.total_score)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  const renderMobileCards = () => (
    <div className="md:hidden">
      {leaderboard.map((user, index) => {
        const userLevel = getLevelInfo(user.total_score);
        return (
          <div key={index} className={`${styles.mobileCard} mb-4 p-4 bg-white rounded-lg shadow`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className={`${styles.rankBadge} ${getRankBadgeClass(index + 1)}`} style={{ backgroundImage: `url(${getRankBadgeBackground(index + 1)})`, marginRight: '0.5rem' }}>
                  {index + 1}
                </div>
                {getTrendIcon('stable')}
              </div>
              <div className={`${styles.scoreCell} text-right`}>{formatScore(user.total_score)} 分</div>
            </div>

            <div className="flex items-center mb-3">
              <div className={styles.avatarContainer} style={{ marginRight: '0.75rem' }}>
                <div className={styles.topLeft}></div>
                <div className={styles.bottomRight}></div>
                <div className={styles.avatarWrapper}>
                  {user.photo_url ? (
                    <img
                      src={user.photo_url}
                      alt={`${user.nickname}'s avatar`}
                      className={styles.avatar}
                    />
                  ) : (
                    <CgProfile className={styles.avatar} />
                  )}
                </div>
              </div>
              <span className={`${styles.challengerName} truncate flex-1`}>{user.nickname}</span>
            </div>

            <div className="flex flex-col">
              <div className="mb-1 flex flex-wrap">
                <span className="font-medium mr-2">稱號:</span>
                <span className="break-words">{userLevel.title[language] || userLevel.title['zh-hant']}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">等級:</span>
                <span className={styles.levelIcon} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                <span>
                  {language === 'zh-hant' && `等級 ${userLevel.level}`}
                  {language === 'en' && `Level ${userLevel.level}`}
                  {language === 'zh-hans' && `等级 ${userLevel.level}`}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={styles.leaderboardContainer}>
      <div className="max-w-7xl lg:max-w-6xl mx-auto lg:px-14 px-5 py-12">
        {title === 'index' && <h1 className={styles.title}>{t.home.leaderboard}</h1>}
        {title === 'page' && (
          <div className='flex items-center mb-5'>
            <span className={styles.aboutBox} />
            <h1 className={styles.aboutTitle}>{t.home.leaderboard}</h1>
          </div>
        )}
        {renderDesktopTable()}
        {renderMobileCards()}
      </div>
    </div>
  );
}