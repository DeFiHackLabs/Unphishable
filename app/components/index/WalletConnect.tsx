'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useAccount, useConnect, useDisconnect } from 'wagmi'; // 添加 useChainId
import { injected } from 'wagmi/connectors';
import Image from 'next/image';
import { useUserStore } from '@/app/stores/userStore';
import { userService } from '@/app/services/userService';
import { useAuthStore } from '@/app/stores/authStore';
import FirstLoginModal from '@/app/components/FirstLoginModal';
//import { createPortal } from 'react-dom';
import { FiUser } from "react-icons/fi";
import { IoPower } from "react-icons/io5";

interface WalletConnectProps {
  language?: string;
}

export default function WalletConnect({ language = 'en' }: WalletConnectProps) {
  const { address, isConnected: wagmiIsConnected } = useAccount();
  const { connectAsync } = useConnect();
  const { disconnect } = useDisconnect();
  const { profile, lastFetchAddress, fetchProfile } = useUserStore();
  const [, setIsConnected] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(true);
  const [showMetaMaskModal, setShowMetaMaskModal] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [showFirstLoginModal, setShowFirstLoginModal] = useState(false);
  const [, setIsFirstLogin] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  // 定義 Holesky 測試網相關常數
  const HOLESKY_CHAIN_ID = '0x4268'; // 16進制的 Holesky chainId


  useEffect(() => {
    setIsMounted(true);

    // 檢測 MetaMask 安裝情況（包括手機版）
    const checkMetaMaskInstalled = (): boolean => {
      // 基本檢測 - 檢查 ethereum 對象
      const hasEthereum = !!(typeof window !== 'undefined' && window.ethereum);

      // 檢測是否是移動設備
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile) {
        // 手機上可能沒有 window.ethereum，但可能有 MetaMask 應用
        // 檢查如果是 in-app 瀏覽器
        const isMetaMaskBrowser = /MetaMask/i.test(navigator.userAgent);

        // 在手機上，我們假設未安裝，除非是在 MetaMask 瀏覽器中或有 ethereum 對象
        const mobileInstalled = isMetaMaskBrowser || (hasEthereum && window.ethereum?.isMetaMask);
        setIsMetaMaskInstalled(mobileInstalled);
        return mobileInstalled;
      } else {
        // 桌面版檢測
        const desktopInstalled = hasEthereum && window.ethereum?.isMetaMask;
        setIsMetaMaskInstalled(desktopInstalled);
        return desktopInstalled;
      }
    };

    checkMetaMaskInstalled();

    // 檢查是否已經有 token 和地址
    const token = localStorage.getItem('token');
    if (token && address) {
      setIsConnected(true);
    }
    console.log('address:', address);
  }, []);

  useEffect(() => {
    if (isMounted) {
      // 只有在 wagmi 狀態為 false 且 localStorage 中沒有有效 token 時才將狀態設為 false
      if (!wagmiIsConnected) {
        const token = localStorage.getItem('token');
        const address = localStorage.getItem('setAddress');

        // 檢查 token 是否存在且有效 (這裡可以添加簡單的 token 有效性檢查)
        if (!token || !address) {
          setIsConnected(false);
        }
      } else {
        // 如果 wagmi 連接成功，確保我們的狀態也是連接的
        setIsConnected(true);
      }
    }
  }, [wagmiIsConnected, isMounted]);

  useEffect(() => {
    const handleDisconnect = () => {
      //disconnect();
      setIsConnected(false);
    };

    window.addEventListener('wallet:disconnect', handleDisconnect);
    return () => {
      window.removeEventListener('wallet:disconnect', handleDisconnect);
    };
  }, [disconnect]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const fetchUserProfile = async () => {
      if (address && (!profile || lastFetchAddress !== address)) {
        try {
          console.log('Fetching profile for address:', address);
          await fetchProfile(address);
        } catch (error) {
          if (error instanceof Error && error.message.includes('401')) {
            //handleLogout();
          }
          console.error('Error fetching profile:', error);
        }
      }
    };

    fetchUserProfile();
  }, [address, isMounted]);


  const handleAuthentication = async (walletAddress: string) => {
    try {
      setIsAuthenticating(true);
      setAuthError(null);

      const loginResponse = await userService.login(walletAddress);

      if (loginResponse && loginResponse.token) {
        localStorage.setItem('token', loginResponse.token);
        localStorage.setItem('setAddress', walletAddress);  // 確保地址也被保存

        try {
          await fetchProfile(walletAddress);
          const currentProfile = useUserStore.getState().profile;

          if (!currentProfile?.nickname) {
            setIsFirstLogin(true);
            setShowFirstLoginModal(true);
          }

          setIsConnected(true); // 確保設置連接狀態
          return true;
        } catch (error) {
          console.error('Error fetching profile after login:', error);
          return false;
        }
      } else {
        console.error('Login response missing token');
        return false;
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setAuthError(typeof error === 'object' && error !== null && 'message' in error
        ? (error as Error).message
        : '登入失敗，請重試');
      return false;
    } finally {
      setIsAuthenticating(false);
    }
  };

  // 添加切換到 Holesky 測試網的函數
  const switchToHoleskyNetwork = async () => {
    if (typeof window.ethereum === 'undefined') {
      return false;
    }

    try {
      // 嘗試切換到 Holesky 網絡
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: HOLESKY_CHAIN_ID }],
      });
      return true;
    } catch (switchError: any) {
      // 如果錢包中沒有 Holesky 網絡，添加它
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: HOLESKY_CHAIN_ID,
              chainName: 'Holesky Testnet',
              nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18
              },
              rpcUrls: ['https://ethereum-holesky.publicnode.com'],
              blockExplorerUrls: ['https://holesky.etherscan.io']
            }]
          });
          return true;
        } catch (addError) {
          console.error('Failed to add Holesky network:', addError);
          return false;
        }
      } else {
        console.error('Failed to switch to Holesky network:', switchError);
        return false;
      }
    }
  };

  // 修改 handleConnect 函數來在連接後檢查並切換網絡
  const handleConnect = async () => {
    try {
      // 避免重複連接
      if (isConnecting || isAuthenticating) {
        return;
      }

      if (!isMetaMaskInstalled) {
        setShowMetaMaskModal(true);
        return;
      }

      setIsConnecting(true);

      const result = await connectAsync({ connector: injected() });
      console.log('Connected:', result);

      if (result?.accounts[0]) {
        // 檢查當前是否已在 Holesky 網絡
        const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });

        if (currentChainId !== HOLESKY_CHAIN_ID) {
          const switched = await switchToHoleskyNetwork();
          if (!switched) {
            disconnect();
            setIsConnecting(false);
            return;
          }
        }

        const authSuccess = await handleAuthentication(result.accounts[0]);

        if (!authSuccess) {
          disconnect();
          setIsConnected(false);
        }
      }
    } catch (error) {
      console.error('Connection error:', error);
      setIsConnected(false);
    } finally {
      setIsConnecting(false);
    }
  }

  const closeMetaMaskModal = () => {
    setShowMetaMaskModal(false);
  };

  const closeFirstLoginModal = () => {
    setShowFirstLoginModal(false);
  };

  const handleProfileUpdate = async (nickname: string, photoUrl: string | null) => {
    if (address) {
      await fetchProfile(address);
    }
    console.log('Profile updated:', nickname, photoUrl);
  };

  const handleLogout = () => {
    useAuthStore.getState().logout();
    localStorage.removeItem('token');
    localStorage.removeItem('setAddress');
    disconnect(); // 斷開連接
    setIsConnected(false); // 更新連接狀態
    setShowDropdown(false); // 關閉下拉選單
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOpenAppStore = () => {
    console.log('Opening MetaMask download page or deep link');
    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iphone|ipad|ipod/i.test(userAgent);
    const isMobile = isAndroid || isIOS;

    if (isMobile) {
      // 手機網頁環境 - 嘗試使用 Deep Link
      try {
        if (isIOS) {
          // iOS Deep Link
          const deepLink = 'metamask://';
          const appStoreLink = 'https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202';

          // 嘗試開啟應用程式，如果失敗則跳轉到 App Store
          window.location.href = deepLink;

          // 設定計時器檢查是否成功打開應用，如果沒有，則轉到 App Store
          setTimeout(() => {
            const now = Date.now();
            setTimeout(() => {
              // 如果頁面仍在，表示沒有成功跳轉到 App
              if (Date.now() - now < 1500) {
                window.location.href = appStoreLink;
              }
            }, 500);
          }, 100);
        } else if (isAndroid) {
          // Android Deep Link
          const dappDomain = "unphishable.io"; // 不加 https://
          const metamaskDeepLink = `https://metamask.app.link/dapp/${dappDomain}`;
          const playStoreLink = 'https://play.google.com/store/apps/details?id=io.metamask';

          // 先嘗試使用 Intent 協議
          //const intentLink = 'intent:#Intent;scheme=metamask;package=io.metamask;end';

          // 嘗試開啟 Deep Link
          window.location.href = metamaskDeepLink;

          // 設置超時，如果 Deep Link 跳轉失敗，則使用 Play Store 連結
          const timer = setTimeout(() => {
            window.location.href = playStoreLink;
          }, 2000);

          // 如果成功跳轉，清除超時定時器
          window.addEventListener('pagehide', () => {
            clearTimeout(timer);
          });
        }
      } catch (error) {
        console.error('Error opening MetaMask app:', error);
        // 失敗時直接導向下載頁面
        if (isIOS) {
          window.location.href = 'https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202';
        } else if (isAndroid) {
          window.location.href = 'https://play.google.com/store/apps/details?id=io.metamask';
        }
      }
    } else {
      // 桌面環境 - 開啟官方網站下載頁面
      window.open('https://metamask.io/download/', '_blank');
    }
  };

  const translations = {
    connectWallet: {
      en: 'Connect Wallet',
      'zh-hant': '連接錢包',
      'zh-hans': '连接钱包',
    },
    connecting: {
      en: 'Connecting...',
      'zh-hant': '連接中...',
      'zh-hans': '连接中...',
    },
    authenticating: {
      en: 'Authenticating...',
      'zh-hant': '驗證中...',
      'zh-hans': '验证中...',
    },
    loginFailed: {
      en: 'Login failed, please try again',
      'zh-hant': '登入失敗，請重試',
      'zh-hans': '登录失败，请重试',
    },
    disconnect: {
      en: 'Disconnect',
      'zh-hant': '退出登入',
      'zh-hans': '退出登录',
    },
    userCenter: {
      en: 'User Center',
      'zh-hant': '用戶中心',
      'zh-hans': '用户中心',
    },
    installMetaMask: {
      en: 'Please install MetaMask!',
      'zh-hant': '請安裝 MetaMask！',
      'zh-hans': '请安装 MetaMask！',
    },
    installNow: {
      en: 'Install Now',
      'zh-hant': '立即安裝',
      'zh-hans': '立即安装',
    },
    close: {
      en: 'Close',
      'zh-hant': '關閉',
      'zh-hans': '关闭',
    },
    downloadMetaMask: {
      en: 'Download MetaMask',
      'zh-hant': '下載 MetaMask',
      'zh-hans': '下载 MetaMask',
    },
  };

  if (!isMounted) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-gray-300 rounded-full" />
        <button
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {translations.connectWallet[language as keyof typeof translations.connectWallet]}
        </button>
      </div>
    );
  }

  return (
    <div>
      {isMounted && (
        <>
          {showFirstLoginModal && (
            <FirstLoginModal
              isOpen={showFirstLoginModal}
              onClose={closeFirstLoginModal}
              onProfileUpdate={handleProfileUpdate as (nickname: string | undefined, photoUrl: string | null) => void}
            />
          )}

          {(lastFetchAddress && profile) ? (
            <div className="flex items-center">
              <div className="mr-4 relative group" ref={dropdownRef}>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300 mr-2">
                    {profile?.photo_url ? (
                      <img src={profile.photo_url} alt="User Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white">
                        {lastFetchAddress.substring(0, 2)}
                      </div>
                    )}
                  </div>
                  <div className="cursor-pointer flex items-center">
                    <span className="mr-1">{profile?.nickname}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 transition-transform duration-200 ${showDropdown ? 'transform rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* 下拉選單 */}
                {showDropdown && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 md:w-32 sm:w-full xs:w-full bg-[#202027] rounded shadow-lg py-1 z-[9999] max-sm:fixed max-sm:top-16 max-sm:right-4 max-sm:left-4 max-sm:w-auto">
                    <Link href="/profile">
                      <div className="block px-4 py-2 my-1 text-sm text-white hover:bg-[#0B0B0C] hover:text-[#DAFF6A]">
                        <div className="flex items-center justify-center gap-2">
                          <FiUser />
                          {translations.userCenter[language as keyof typeof translations.userCenter]}
                        </div>
                      </div>
                    </Link>
                    <div
                      className="block px-4 py-2 my-1 text-sm  text-white hover:bg-[#0B0B0C] hover:text-[#DAFF6A] cursor-pointer"
                      onClick={handleLogout}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <IoPower />
                        {translations.disconnect[language as keyof typeof translations.disconnect]}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              {authError && (
                <div className="text-red-500 text-xs mb-1">
                  {translations.loginFailed[language as keyof typeof translations.loginFailed]}
                </div>
              )}
              <button
                onClick={handleConnect}
                disabled={isAuthenticating}
                className={`flex items-center gap-2 ${isAuthenticating ? 'bg-gray-400' : 'bg-gradient-to-r bg-gray-300'} text-white px-4 py-2 rounded-lg transition-colors shadow-md hover:shadow-lg`}
              >
                <Image src="/images/metamask-fox.svg" alt="MetaMask" width={20} height={20} />
                {isAuthenticating ?
                  translations.authenticating[language as keyof typeof translations.authenticating] :
                  (language === 'en' ? 'Connect MetaMask' : language === 'zh-hant' ? '連接 MetaMask' : '连接 MetaMask')}
              </button>
            </div>
          )}

          {showMetaMaskModal && isMounted && typeof document !== 'undefined' && (
            <div
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999]"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                className="bg-white rounded-xl p-8 max-w-md w-full relative shadow-2xl animate-fadeIn mx-4"
                style={{
                  maxWidth: '90vw',
                  width: '450px',
                  margin: 'auto'
                }}
              >
                <button
                  type="button"
                  onClick={closeMetaMaskModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="flex flex-col items-center justify-center mb-6">
                  <div className="bg-red-100 p-4 rounded-full mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-center text-black">
                    {translations.installMetaMask[language as keyof typeof translations.installMetaMask]}
                  </h3>
                </div>

                <div className="relative flex flex-wrap justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleOpenAppStore}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg font-medium text-center flex items-center justify-center min-w-[120px]"
                  >
                    {translations.downloadMetaMask[language as keyof typeof translations.downloadMetaMask]}
                  </button>
                  <button
                    type="button"
                    onClick={closeMetaMaskModal}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition-all border border-gray-300 min-w-[80px]"
                  >
                    {translations.close[language as keyof typeof translations.close]}
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}