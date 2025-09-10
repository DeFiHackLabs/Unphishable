'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useTheme } from 'next-themes';
import { FaArrowRight } from "react-icons/fa";
import styles from '@/app/styles/Founders.module.css';


export default function Sponsors({
  title
}: { title?: string }) {
  const { t } = useLanguage();
  const { theme } = useTheme();
  //   {
  //     name: 'DefiHackLabs',
  //     logo: '/images/defihacklabs.svg',
  //     description: 'Web3 Security Research Lab'
  //   },
  //   {
  //     name: 'SlowMist',
  //     logo: '/images/slowmist.svg',
  //     description: 'Blockchain Security Expert'
  //   }
  // ];
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const sponsors = [
    {
      name: 'EFESP',
      lightImage: '/images/Sponsors/EF-ESP-logo-white.svg',
      darkImage: '/images/Sponsors/EF-ESP-logo-dark.svg',
    },
    {
      name: 'GEODEWORK',
      lightImage: '/images/Sponsors/GEODEWORK-logo-white.svg',
      darkImage: '/images/Sponsors/GEODEWORK-logo-dark.svg',
    },
    {
      name: 'GOPLUS',
      lightImage: '/images/Sponsors/GOPLUS-logo-white.svg',
      darkImage: '/images/Sponsors/GOPLUS-logo-dark.svg',
    },
    {
      name: 'Coinspect',
      lightImage: '/images/Sponsors/Coinspect-logo-dark.svg',
      darkImage: '/images/Sponsors/Coinspect-logo-dark.svg',
    }
  ];
  return (
    <div className={styles.foundersSection}>
      <div className="max-w-7xl lg:max-w-6xl mx-auto lg:px-14 px-5">
        <h2 className="text-xl font-bold text-center mb-8">
          {t.home.sponsors}
        </h2>
        {/* <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          {t.home.sponsorsDescription}
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className={sponsor.name === 'Coinspect' ? styles.coinspectCard : styles.founderCard}>
              <img
                src={theme === 'dark' ? sponsor.darkImage : sponsor.lightImage}
                alt={sponsor.name}
                className={sponsor.name === 'Coinspect' && theme === 'light' ? styles.coinspectImage : styles.founderImage}
              />
            </div>
          ))}
        </div>
        {title === 'index' && (
          <div className='flex items-center justify-center mt-10'>
            <button className="more-link flex items-center gap-2">
              {t.home.viewMore} <FaArrowRight />
            </button>
          </div>
        )
        }
      </div>
    </div>
  );
}