'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useTheme } from 'next-themes';
import styles from '@/app/styles/Founders.module.css';

export default function Founders() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const founders = [
    {
      name: 'DeFiHackLabs',
      lightImage: '/images/Founders/pic-fd1-black.svg',
      darkImage: '/images/Founders/pic-fd1.svg',
    },
    {
      name: 'ScamSniffer',
      lightImage: '/images/Founders/pic-fd2-black.svg',
      darkImage: '/images/Founders/pic-fd2.svg',
    },
    {
      name: 'slowmist',
      lightImage: '/images/Founders/pic-fd3-black.svg',
      darkImage: '/images/Founders/pic-fd3.svg',
    }
  ];

  return (
    <div className={styles.foundersSection}>
      <div className="max-w-7xl lg:max-w-6xl mx-auto lg:px-14 px-5">
        <h2 className={`text-xl font-bold text-center mb-8 ${styles.title}`}>
          {t.home.founders}
        </h2>
        {/* <p className={`text-center mb-12 max-w-3xl mx-auto ${styles.description}`}>
          {t.home.foundersDescription}
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className={styles.founderCard}>
              <img
                src={theme === 'dark' ? founder.darkImage : founder.lightImage}
                alt={founder.name}
                className={styles.founderImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}