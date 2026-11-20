import { create } from "zustand";

// 訪客進度：只存在這個瀏覽器的 localStorage，不計分、不送後端。
// 登入後畫面改看後端紀錄，這裡的資料保留不刪，登出後還看得到。
const COMPLETED_KEY = "guestCompleted";
// 登入後「你用訪客身分玩過 N 關」提醒，使用者按掉時的 N；之後 N 變多才會再提醒
const NOTICE_KEY = "guestNoticeDismissedCount";
// 訪客橫幅按「知道了」之後就不再出現；完成彈窗仍會提醒不計分
const BANNER_KEY = "guestBannerDismissed";

const read = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

const write = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // 無痕模式或儲存空間被封鎖時就不記，遊戲照常進行
  }
};

interface GuestProgressState {
  completed: string[];
  noticeDismissedCount: number;
  // 載入前先當作已關閉，避免按掉過的人每次進頁面都看到橫幅閃一下
  bannerDismissed: boolean;
  // SSR 與第一次 render 都是空的，載入放在 useEffect 裡呼叫，避免 hydration 不一致
  load: () => void;
  markCompleted: (challengeKey: string) => void;
  dismissNotice: () => void;
  dismissBanner: () => void;
}

export const useGuestProgressStore = create<GuestProgressState>((set, get) => ({
  completed: [],
  noticeDismissedCount: 0,
  bannerDismissed: true,

  load: () => {
    const completed = read<unknown>(COMPLETED_KEY, []);
    set({
      completed: Array.isArray(completed) ? completed.filter((c): c is string => typeof c === "string") : [],
      noticeDismissedCount: Number(read<unknown>(NOTICE_KEY, 0)) || 0,
      bannerDismissed: read<unknown>(BANNER_KEY, false) === true,
    });
  },

  markCompleted: (challengeKey) => {
    const current = read<string[]>(COMPLETED_KEY, []);
    const completed = Array.isArray(current) ? current : [];
    if (!completed.includes(challengeKey)) completed.push(challengeKey);
    write(COMPLETED_KEY, completed);
    set({ completed });
  },

  dismissNotice: () => {
    const count = get().completed.length;
    write(NOTICE_KEY, count);
    set({ noticeDismissedCount: count });
  },

  dismissBanner: () => {
    write(BANNER_KEY, true);
    set({ bannerDismissed: true });
  },
}));
