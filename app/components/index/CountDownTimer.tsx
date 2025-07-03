'use client';

import { useEffect, useState } from 'react';
import { CHALLENGES_START_DATE } from '@/app/constants/timeConfig';
import { useLanguage } from '@/app/contexts/LanguageContext';

// 輔助函數：格式化目標日期以供顯示
const getFormattedTargetDate = () => {
  const target = new Date(CHALLENGES_START_DATE);
  // 根據圖片樣式，以 UTC+8 時區顯示
  const year = target.getUTCFullYear();
  const month = String(target.getUTCMonth() + 1).padStart(2, '0');
  const day = String(target.getUTCDate()).padStart(2, '0');

  // 將 UTC 時間轉換為 UTC+8
  const targetHourUTC = target.getUTCHours();
  const targetHourUTC8 = (targetHourUTC + 8) % 24;
  const minutes = String(target.getUTCMinutes()).padStart(2, '0');

  return {
    date: `${year}/${month}/${day}`,
    time: `${String(targetHourUTC8).padStart(2, '0')}:${minutes}`,
  };
};

const CountdownTimer = () => {
  const { t } = useLanguage();

  const calculateTimeLeft = () => {
    const difference = +new Date(CHALLENGES_START_DATE) - +new Date();
    let timeLeft = { hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { date, time } = getFormattedTargetDate();

  return (
    <div className="flex flex-col items-center text-white mt-2">
      <p className="mb-4 text-lg font-semibold tracking-wider text-[#daff6a]">
        {t.home.countdownTitle?.replace('{date}', date).replace('{time}', time)} (UTC+8) {t.home.countdownSuffix}
      </p>
      <div className="flex items-center justify-center bg-opacity-25 border border-[#daff6a] rounded-lg px-6 py-3">
        <div className="text-center px-4 w-28">
          <span className="text-5xl font-bold font-mono text-[#daff6a]">{String(timeLeft.hours)}</span>
          <p className="text-sm mt-1 text-[#daff6a]">{t.home.hours}</p>
        </div>
        <div className="text-5xl font-thin text-[#daff6a] self-center pb-6">|</div>
        <div className="text-center px-4 w-28">
          <span className="text-5xl font-bold font-mono text-[#daff6a]">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <p className="text-sm mt-1 text-[#daff6a]">{t.home.minutes}</p>
        </div>
        <div className="text-5xl font-thin text-[#daff6a] self-center pb-6">|</div>
        <div className="text-center px-4 w-28">
          <span className="text-5xl font-bold font-mono text-[#daff6a]">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <p className="text-sm mt-1 text-[#daff6a]">{t.home.seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;