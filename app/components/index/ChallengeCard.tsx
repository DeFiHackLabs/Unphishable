import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/contexts/LanguageContext';
import styles from '@/app/styles/ChallengeCard.module.css';
import { IoShareSocialOutline } from "react-icons/io5";
import { useState } from 'react';
import ShareModal from '@/app/components/ShareModal';
import { useIsGuest } from '@/app/components/GuestModeBanner';
import { GoLock } from 'react-icons/go';

interface ChallengeProps {
  name?: string;
  difficulty: string;
  no: string;
  title: {
    en: string;
    'zh-hant': string;
    'zh-hans': string;
  };
  description: {
    en: string;
    'zh-hant': string;
    'zh-hans': string;
  };
  link: string;
  requiresWallet?: boolean;
}

export default function ChallengeCard({ name, difficulty, no, title, description, link, requiresWallet }: ChallengeProps) {
  const router = useRouter();
  const isGuest = useIsGuest();
  const { t, language } = useLanguage();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [, setCloseShareModal] = useState(false);
  const openShareModal = () => {
    setIsShareModalOpen(true);
  }
  return (
    <>
      <div className={`${styles.challengeCard} flex flex-col`}>
        <span className={styles.tag}>NO.{no}</span>
        {/* 0x0001 是連錢包的入門教學，訪客本來就能進，不標 */}
        {isGuest && requiresWallet && name !== 'wallet-setup-guide' && (
          <span
            data-testid="wallet-required-badge"
            className="right-3 top-3 flex items-center gap-1 rounded-full bg-black px-3 py-1 text-xs text-[#c4ff41]"
            // .challengeCard > * 會強制 position: relative，蓋過 Tailwind 的 absolute
            style={{ position: 'absolute' }}
          >
            <GoLock /> {t.guestMode.walletBadge}
          </span>
        )}

        <div className='ml-4 mt-5 flex-1 flex flex-col'>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">
              {title[language]}
            </h3>
            <p className="text-sm leading-relaxed min-h-[4.5rem] line-clamp-3">
              {description[language]}
            </p>
          </div>

          <div className="flex items-center justify-between mt-auto pt-4">
            <div className="flex items-center">
              {difficulty.toLowerCase() === 'beginner' && (
                <div className="flex items-center mr-4">
                  <Image src="/images/icon-star-s.svg" alt="Star" width={24} height={24} className="mr-1" />
                  <Image src="/images/icon-star-n.svg" alt="Star" width={24} height={24} className="mr-1" />
                  <Image src="/images/icon-star-n.svg" alt="Star" width={24} height={24} className="mr-1" />
                </div>
              )}
              {difficulty.toLowerCase() === 'intermediate' && (
                <div className="flex items-center mr-4">
                  <Image src="/images/icon-star-s.svg" alt="Star" width={24} height={24} className="mr-1" />
                  <Image src="/images/icon-star-s.svg" alt="Star" width={24} height={24} className="mr-1" />
                  <Image src="/images/icon-star-n.svg" alt="Star" width={24} height={24} className="mr-1" />
                </div>
              )}
              {difficulty.toLowerCase() === 'advanced' && (
                <div className="flex items-center mr-4">
                  <Image src="/images/icon-star-s.svg" alt="Star" width={24} height={24} className="mr-1" />
                  <Image src="/images/icon-star-s.svg" alt="Star" width={24} height={24} className="mr-1" />
                  <Image src="/images/icon-star-s.svg" alt="Star" width={24} height={24} className="mr-1" />
                </div>
              )}
            </div>

            <div className='flex gap-7'>
              <button className={styles.share}
                onClick={openShareModal}
              >
                <IoShareSocialOutline className='text-[#ffffff]' />
              </button>
              <div className={styles.btnBase}>
                <button
                  onClick={() => router.push(`${link}?lang=${language}`)}
                  className={styles.btnChallenge}
                >
                  <span>{t.challengeCard.startChallenge}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => {
          setIsShareModalOpen(false);
          setCloseShareModal(true);
        }}
        shareUrl={
          typeof window !== 'undefined'
            ? `${window.location.origin}/challenges/${name || ''}`
            : `https://unphishable.io/challenges/${name || ''}`
        }
      />
    </>
  );
}