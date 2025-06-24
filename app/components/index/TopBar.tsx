'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import WalletConnect from './WalletConnect';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { type Language } from '@/app/i18n';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FaGlobeAsia, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import '@/app/styles/TopBar.css';

export default function TopBar() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const { theme, setTheme } = useTheme();
  // 處理主題切換
  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // 初始化主題設置
  useEffect(() => {
    // console.log('theme------', theme);
  }, [theme]);



  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsLanguageDropdownOpen(false);
    // metadata 將通過 DynamicMetadata 組件自動更新
  };

  // 確定是否為首頁
  const isHomePage = pathname === '/';

  // 監聽滾動事件，檢測是否超出 hero-section 高度的 80%
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        const heroHeight = heroSection.getBoundingClientRect().height;
        const scrollPosition = window.scrollY;

        if (scrollPosition > heroHeight * 0.8) {
          setScrolledPastHero(true);
        } else {
          setScrolledPastHero(false);
        }
      }
    };

    // 初始檢查滾動位置
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);


  // 根據是否為首頁和滾動位置動態設置樣式
  const topbarStyle = isHomePage
    ? `topbar px-4 md:px-5 fixed top-0 left-0 right-0 z-50 flex justify-between items-center ${scrolledPastHero ? 'scrolled-past-hero' : ''}`
    : "topbar px-4 md:px-5 absolute w-full z-[9999] flex justify-between items-center non-homepage"


  // 獲取當前頁面的路徑，用於高亮顯示當前頁面的導航鏈接
  const getNavLinkClass = (href: string) => {
    const isActive = pathname === href;
    return isActive
      ? "nav-link active"
      : "nav-link";
  };

  // 關閉移動端菜單的函數
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // 點擊外部區域關閉移動端菜單
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);
  if (!theme) {
    return null;
  }
  return (
    <div className={topbarStyle}>
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

      {/* 漢堡菜單按鈕 - 僅在移動端顯示 */}
      <div className="md:hidden flex items-center">
        <button
          className="text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* 移動端菜單 */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 right-0 bg-gray-800 z-50 shadow-lg py-4"
        >
          <div className="flex flex-col space-y-4 px-5">
            <Link href="/" className={`${getNavLinkClass("/")} block py-2`} onClick={closeMobileMenu}>{t.home.page}</Link>
            <Link href="/challenges" className={`${getNavLinkClass("/challenges")} block py-2`} onClick={closeMobileMenu}>{t.home.challenges}</Link>
            <Link href="/leaderboard" className={`${getNavLinkClass("/leaderboard")} block py-2`} onClick={closeMobileMenu}>{t.home.leaderboard}</Link>
            <Link href="/aboutus" className={`${getNavLinkClass("/aboutus")} block py-2`} onClick={closeMobileMenu}>{t.home.about}</Link>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-4">
                <div className="language-switch relative">
                  <button
                    className="flex items-center text-white"
                    onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  >
                    <FaGlobeAsia className="text-lg" />
                  </button>

                  {isLanguageDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-40 bg-gray-600 rounded-md shadow-lg py-1 z-50">
                      <button
                        className={`block px-4 py-2 text-sm w-full text-left ${language === 'en' ? 'text-[#daff6a]' : ''}`}
                        onClick={() => handleLanguageChange('en')}
                      >
                        English
                      </button>
                      <button
                        className={`block px-4 py-2 text-sm w-full text-left ${language === 'zh-hant' ? 'text-[#daff6a]' : ''}`}
                        onClick={() => handleLanguageChange('zh-hant')}
                      >
                        中文繁體
                      </button>
                      <button
                        className={`block px-4 py-2 text-sm w-full text-left ${language === 'zh-hans' ? 'text-[#daff6a]' : ''}`}
                        onClick={() => handleLanguageChange('zh-hans')}
                      >
                        中文简体
                      </button>
                    </div>
                  )}
                </div>

                <button
                  className="theme-toggle flex items-center justify-center text-white"
                  onClick={toggleDarkMode}
                >
                  {theme === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
                </button>
              </div>

              <div className="connect-button">
                <WalletConnect language={language} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 桌面端菜單 */}
      <div className="hidden md:flex items-center gap-4 lg:gap-10">
        <div className="nav-links flex gap-4 lg:gap-12 mx-4 lg:mx-12">
          <Link href="/" className={getNavLinkClass("/")}>{t.home.page}</Link>
          <Link href="/challenges" className={getNavLinkClass("/challenges")}>{t.home.challenges}</Link>
          <Link href="/leaderboard" className={getNavLinkClass("/leaderboard")}>{t.home.leaderboard}</Link>
          <Link href="/aboutus" className={getNavLinkClass("/aboutus")}>{t.home.about}</Link>
        </div>

        <div className="language-switch relative hidden md:block">
          <button
            className="flex items-center hover:text-gray-900 text-white"
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
          >
            <FaGlobeAsia className="text-lg" />
          </button>

          {isLanguageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-600 rounded-md shadow-lg py-1 z-20">
              <button
                className={`block px-4 py-2 text-sm w-full text-left ${language === 'en' ? 'text-[#daff6a]' : ''}`}
                onClick={() => handleLanguageChange('en')}
              >
                English
              </button>
              <button
                className={`block px-4 py-2 text-sm w-full text-left ${language === 'zh-hant' ? 'text-[#daff6a]' : ''}`}
                onClick={() => handleLanguageChange('zh-hant')}
              >
                中文繁體
              </button>
              <button
                className={`block px-4 py-2 text-sm w-full text-left ${language === 'zh-hans' ? 'text-[#daff6a]' : ''}`}
                onClick={() => handleLanguageChange('zh-hans')}
              >
                中文简体
              </button>
            </div>
          )}
        </div>

        <button
          className="theme-toggle hidden md:flex items-center justify-center text-white hover:text-gray-300"
          onClick={toggleDarkMode}
        >
          {theme === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
        </button>

        <div className="connect-button hidden md:block">
          <WalletConnect language={language} />
        </div>
      </div>
    </div>
  );
}