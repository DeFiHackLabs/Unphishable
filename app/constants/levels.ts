// 等級資訊介面
export interface LevelInfo {
  level: number;
  title: {
    en: string;
    "zh-hant": string;
    "zh-hans": string;
  };
  minScore: number;
  maxScore: number;
}

// 等級資訊定義
export const LEVELS: LevelInfo[] = [
  {
    level: 1,
    title: {
      en: "Cybersecurity Newbie",
      "zh-hant": "網路安全新手",
      "zh-hans": "网络安全新手",
    },
    minScore: 0,
    maxScore: 1000,
  },
  {
    level: 2,
    title: {
      en: "Web3 Guardian",
      "zh-hant": "Web3 防護員",
      "zh-hans": "Web3 防护员",
    },
    minScore: 1001,
    maxScore: 2000,
  },
  {
    level: 3,
    title: {
      en: "Blockchain Defense Warrior",
      "zh-hant": "區塊鏈防禦戰士",
      "zh-hans": "区块链防御战士",
    },
    minScore: 2001,
    maxScore: 3500,
  },
  {
    level: 4,
    title: {
      en: "Crypto Security Expert",
      "zh-hant": "加密安全專家",
      "zh-hans": "加密安全专家",
    },
    minScore: 3501,
    maxScore: 5000,
  },
  {
    level: 5,
    title: {
      en: "Web3 Security Master",
      "zh-hant": "Web3 安全大師",
      "zh-hans": "Web3 安全大师",
    },
    minScore: 5001,
    maxScore: 6000,
  },
  {
    level: 6,
    title: {
      en: "Blockchain Security Legend",
      "zh-hant": "區塊鏈安全傳奇",
      "zh-hans": "区块链安全传奇",
    },
    minScore: 6001,
    maxScore: 999999, // 設置較高的上限或使用 Infinity
  },
];

// 計算等級資訊函式
export const getLevelInfo = (score: number): LevelInfo => {
  return (
    LEVELS.find(
      (level) => score >= level.minScore && score <= level.maxScore
    ) || LEVELS[0]
  );
};
