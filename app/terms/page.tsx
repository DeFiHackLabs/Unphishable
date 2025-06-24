'use client';

import DynamicMetadata from '@/app/components/DynamicMetadata';
import TopBar from '@/app/components/index/TopBar';
import Banner from '@/app/components/index/Banner';
import Footer from '@/app/components/index/Footer';
import { useLanguage } from '@/app/contexts/LanguageContext'; // Assuming you have a LanguageContext
import { translations } from '@/app/i18n';
import styles from '@/app/styles/Privacy.module.css';

const TermsOfServicePage = () => {
  const { language } = useLanguage();
  const t = translations[language].termsOfService;


  return (

    <div className={`${styles.privacyBackground} min-h-screen `}>
      <TopBar />
      <Banner />
      <DynamicMetadata pageKey="Privacy" />
      <main className="mx-auto lg:px-32 py-16">
        <div className='flex items-center mb-14'>
          <span className={styles.privacyBox} />
          <h1 className={styles.privacyTitle}>{t.title}</h1>
        </div>
        <div className={`pl-6 mb-10 ${styles.privacyContent}`}>
          <h2 className={`text-lg ${styles.sectionTitle} font-semibold mb-10`}>{t.sections.acceptance.title}</h2>
          <p className="mr-[20px]">{t.sections.acceptance.content}</p>
        </div>

        <div className={`pl-6 mb-10 ${styles.privacyContent}`}>
          <h2 className={`text-lg ${styles.sectionTitle} font-semibold mb-10`}>{t.sections.description.title}</h2>
          <p className="mb-5">{t.sections.description.content}</p>
          <p className="mr-[20px]">{t.sections.description.content2}</p>
        </div>

        <div className={`pl-6 mb-10 ${styles.privacyContent}`}>
          <h2 className={`text-lg ${styles.sectionTitle} font-semibold mb-10`}>{t.sections.personalUse.title}</h2>
          <p className="mr-[20px]">{t.sections.personalUse.content}</p>
        </div>

        <div className={`pl-6 mb-10 ${styles.privacyContent}`}>
          <h2 className={`text-lg ${styles.sectionTitle} font-semibold mb-10`}>{t.sections.disclaimer.title}</h2>
          <p className="mb-5 mr-[20px]">{t.sections.disclaimer.content}</p>
          <p className={styles.text}>{t.sections.disclaimer.content2}</p>
        </div>

        <div className={`pl-6 mb-10 ${styles.privacyContent}`}>
          <h2 className={`text-lg ${styles.sectionTitle} font-semibold mb-10`}>{t.sections.prohibitedUses.title}</h2>
          <p className="mr-[15px]">{t.sections.prohibitedUses.content}</p>
        </div>

        <div className={`pl-6 mb-10 ${styles.privacyContent}`}>
          <h2 className={`text-lg ${styles.sectionTitle} font-semibold mb-10`}>{t.sections.limitationOfLiability.title}</h2>
          <p className="mr-[20px]">{t.sections.limitationOfLiability.content}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;