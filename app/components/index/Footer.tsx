'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/DeFiHackLabs/Unphishable', icon: <FaGithub /> },
    { name: 'Twitter', href: 'https://x.com/DeFiHackLabs', icon: <FaXTwitter /> },
    // { name: 'Discord', href: '#', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg' },
    { name: 'Telegram', href: 'https://t.me/+hBfBSw1_zIUyZTQ1', icon: <BsTelegram /> }
  ];

  const footerLinks = [
    { name: t.home.footer.about, href: '/aboutus' },
    { name: t.home.footer.contact, href: '/contact' },
    { name: t.home.footer.privacy, href: '/privacy' },
    { name: t.home.footer.terms, href: '/terms' }
  ];

  return (
    <footer className="bg-[#0B0B0C] text-white pt-12 pb-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-8 mb-8">
            <div className="flex items-center">
              <Link href="/">
                <div className="flex items-center">
                  <Image
                    src="/images/unphishable_logo.svg"
                    alt="Unphishable Logo"
                    width={264}
                    height={46}
                    className="w-auto h-8 md:h-10 lg:h-auto"
                  />
                </div>
              </Link>
            </div>
            <p className='text-sm'>© {t.home.footer.right1} {new Date().getFullYear()} Unphishable. {t.home.footer.right2}</p>
          </div>
          <div className="flex flex-col gap-8 mb-8">
            <div className='flex space-x-6 justify-end'>
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white text-4xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
            <div className='flex gap-5'>
              {footerLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white text-sm hover:underline"
                >
                  {item.name}
                </Link>
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}