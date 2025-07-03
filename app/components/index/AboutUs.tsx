'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import styles from '@/app/styles/AboutUs.module.css';

export default function AboutUs({
  title
}: { title?: string }) {
  const { t } = useLanguage();

  return (
    <div className={styles.aboutUsSection}>
      <div className="max-w-7xl lg:max-w-6xl mx-auto lg:px-14 px-5">
        {title === 'index' &&
          <h2 className={`${styles.title} text-xl`}>{t.home.aboutUs}</h2>
        }
        {title === 'page' &&
          <div className='flex items-center mb-5'>
            <span className={styles.aboutBox} />
            <h1 className={styles.aboutTitle}>{t.home.aboutUs}</h1>
          </div>
        }
        <div className="flex justify-center items-center ">
          <div className="flex flex-col justify-start items-center">
            <img
              src='/images/about-us-white.svg'
              alt="About Us"
            />
            <p className={styles.description}>{t.home.aboutUsDescription}</p>
          </div>
        </div>

      </div>
    </div>
  );
}