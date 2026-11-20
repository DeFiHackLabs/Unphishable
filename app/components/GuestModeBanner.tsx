'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useUserStore } from '@/app/stores/userStore';
import { useGuestProgressStore } from '@/app/stores/guestProgressStore';

// 沒登入 = 訪客。localStorage 只能在 client 讀；預設當作有 token，
// 避免已登入的人在 profile 載入前看到訪客提示閃一下
export const useIsGuest = () => {
  const { profile } = useUserStore();
  const [hasToken, setHasToken] = useState(true);

  useEffect(() => {
    setHasToken(!!localStorage.getItem('token'));
  }, [profile]);

  return !profile && !hasToken;
};

// 訪客模式提示：沒登入時告訴使用者「可以直接玩，但不計分；連 MetaMask 才計分」。
// 登入後若有訪客紀錄，改成提醒一次「那些不計分，重玩才會記錄」。
const GuestModeBanner = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isGuest = useIsGuest();
  const { profile } = useUserStore();
  const { completed, noticeDismissedCount, load, dismissNotice } = useGuestProgressStore();

  useEffect(() => {
    load();
  }, [load]);

  // 背景用不透明色：深色模式下外層不一定是深底，半透明會讓字糊掉
  // 手機左側有 fixed 的選單拉環，pl-12 讓文字不被蓋住
  const boxClass = `mb-6 flex flex-col gap-3 rounded-lg border p-4 pl-12 md:pl-4 md:flex-row md:items-center md:justify-between ${
    theme === 'dark' ? 'border-[#c4ff41]/60 bg-[#161d07] text-gray-100' : 'border-[#9bc72a] bg-[#f4ffd6] text-gray-800'
  }`;

  if (profile && completed.length > noticeDismissedCount) {
    return (
      <div data-testid="guest-login-notice" className={boxClass}>
        <p className="text-sm">{t.guestMode.loginNotice.replace('{count}', String(completed.length))}</p>
        <button
          onClick={dismissNotice}
          className="shrink-0 rounded-full bg-[#c4ff41] px-5 py-2 text-center text-sm font-medium text-black transition-opacity hover:opacity-90"
        >
          {t.guestMode.dismiss}
        </button>
      </div>
    );
  }

  if (!isGuest) return null;

  return (
    <div data-testid="guest-mode-banner" className={boxClass}>
      <div>
        <p className="font-semibold">{t.guestMode.title}</p>
        <p className="text-sm mt-1">{t.guestMode.description}</p>
        {completed.length > 0 && (
          <p data-testid="guest-progress" className="text-sm mt-1 font-medium">
            ✓ {t.guestMode.progress.replace('{count}', String(completed.length))}
          </p>
        )}
      </div>
      <Link
        href="/challenges/wallet-setup-guide"
        className="shrink-0 rounded-full bg-[#c4ff41] px-5 py-2 text-center text-sm font-medium text-black transition-opacity hover:opacity-90"
      >
        {t.guestMode.cta}
      </Link>
    </div>
  );
};

export default GuestModeBanner;
