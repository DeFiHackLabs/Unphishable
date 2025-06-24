'use client';

import DynamicMetadata from '@/app/components/DynamicMetadata';
import TopBar from '@/app/components/index/TopBar';
import Banner from '@/app/components/index/Banner';
import Footer from '@/app/components/index/Footer';
import styles from '@/app/styles/ContactPage.module.css';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { useTheme } from 'next-themes';

export default function ContactPage() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  return (
    <div>
      <TopBar />
      <Banner />
      <DynamicMetadata pageKey="Contact" />
      <div className={styles.contactSection}>
        <div className="max-w-7xl lg:max-w-6xl mx-auto lg:px-14 px-5 py-16">
          <div className='flex items-center mb-20'>
            <span className={styles.contactBox} />
            <h1 className={styles.contactTitle}>{t.contact.title}</h1>
          </div>

          <div className="space-y-14">
            <div className="flex items-center gap-4">
              {theme === 'dark' ? (
                <div className="w-16 h-16 flex items-center justify-center bg-[#111827] rounded-full">
                  <MdEmail className='text-4xl text-[#c1ff00]' />
                </div>
              ) : (
                <div className="w-16 h-16 flex items-center justify-center bg-[#c1ff00] rounded-full">
                  <MdEmail className='text-4xl' />
                </div>
              )}

              <div>
                <h2 className="text-xl font-medium mb-1">{t.contact.email}</h2>
                <p className="text-gray-400">defihacklabs@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {theme === 'dark' ? (
                <div className="w-16 h-16 flex items-center justify-center bg-[#111827] rounded-full">
                  <FaTelegramPlane className='text-4xl text-[#c1ff00]' />
                </div>
              ) : (
                <div className="w-16 h-16 flex items-center justify-center bg-[#c1ff00] rounded-full">
                  <FaTelegramPlane className='text-4xl' />
                </div>
              )}
              <div>
                <h2 className="text-xl font-medium mb-1">Telegram</h2>
                <p className="text-gray-400">defihacklabs@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}