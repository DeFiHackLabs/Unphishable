'use client';

import DynamicMetadata from '@/app/components/DynamicMetadata';
import TopBar from '@/app/components/index/TopBar';
import Banner from '@/app/components/index/Banner';
import Footer from '@/app/components/index/Footer';
import { useLanguage } from '@/app/contexts/LanguageContext'; // Assuming you have a LanguageContext
import { translations } from '@/app/i18n';
import styles from '@/app/styles/Privacy.module.css';

export default function PrivacyPage() {
  const { language } = useLanguage();
  const t = translations[language].privacy;

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

        <div className={`pl-6 ${styles.privacyContent}`}>
          <p className="mb-9">{t.welcome}</p>
          <section className="mb-6">
            <h2 className={`text-lg ${styles.sectionTitle} font-semibold mb-5`}>{t.sections.informationCollection.title}</h2>

            <p className="mb-7 mr-[20px]">{t.sections.informationCollection.description}</p>
            <div className="ml-4">
              <h3 className="text-xl font-medium mb-6">{t.sections.informationCollection.subsections.provided.title}</h3>
              <p className="mb-7 ">{t.sections.informationCollection.subsections.provided.content}</p>
              <h3 className="text-xl font-medium mb-6">{t.sections.informationCollection.subsections.automatic.title}</h3>
              <p className="mb-7 mr-[-5px] ">{t.sections.informationCollection.subsections.automatic.content}</p>
              <h3 className="text-xl font-medium mb-6">{t.sections.informationCollection.subsections.thirdParty.title}</h3>
              <p>{t.sections.informationCollection.subsections.thirdParty.content}</p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className={`text-lg ${styles.sectionTitle} font-semibold mb-5`}>{t.sections.cookies.title}</h2>
            <p className="mb-7">{t.sections.cookies.content}</p>
          </section>

          <section className="mb-6">
            <h2 className={`text-lg ${styles.sectionTitle} font-semibold mb-5`}>{t.sections.personalizedServices.title}</h2>
            <p className="mb-7">{t.sections.personalizedServices.content}</p>
          </section>

          <section className="mb-6">
            <h2 className={`text-lg ${styles.sectionTitle} font-semibold mb-5`}>{t.sections.updates.title}</h2>
            <p className="mb-7">{t.sections.updates.content}</p>
          </section>

          <section>
            <h2 className={`text-lg ${styles.sectionTitle} font-semibold mb-5`}>{t.sections.contact.title}</h2>
            <p className="mb-7 whitespace-pre-line">{t.sections.contact.content}</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}