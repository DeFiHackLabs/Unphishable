'use client';

import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { userService } from '@/app/services/userService';
import { useAccount } from 'wagmi';
import { useTheme } from 'next-themes';
import { useUserStore } from '@/app/stores/userStore';

interface FirstLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProfileUpdate: (nickname: string | undefined, photoUrl: string | null) => void;
  language?: string;
}

const FirstLoginModal = ({
  isOpen,
  onClose,
  onProfileUpdate,
  language = 'en'
}: FirstLoginModalProps) => {
  const { address } = useAccount();
  const { theme } = useTheme();
  const [step, setStep] = useState(1); // 1: 昵称设置, 2: 头像上传
  const [nickname, setNickname] = useState('');
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const translations = {
    setProfile: {
      en: 'Set Personal Information',
      'zh-hant': '設置個人信息',
      'zh-hans': '设置个人信息'
    },
    nickname: {
      en: 'Nickname',
      'zh-hant': '暱稱',
      'zh-hans': '昵称'
    },
    pleaseEnterNickname: {
      en: 'Please enter your nickname',
      'zh-hant': '請輸入您的暱稱',
      'zh-hans': '请输入您的昵称'
    },
    uploadPhoto: {
      en: 'Upload Photo',
      'zh-hant': '上傳頭像',
      'zh-hans': '上传头像'
    },
    next: {
      en: 'Next',
      'zh-hant': '下一步',
      'zh-hans': '下一步'
    },
    finish: {
      en: 'Finish',
      'zh-hant': '完成',
      'zh-hans': '完成'
    }
  };

  const handlePhotoChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && address) {
      setIsLoading(true);
      try {
        const photoUrl = await userService.updateAvatar(address, file);
        if (photoUrl) {
          setPhotoUrl(photoUrl);

          useUserStore.setState({
            profile: {
              ...useUserStore.getState().profile,
              photo_url: photoUrl
            }
          });
        }
      } catch (error) {
        console.error('Error uploading photo:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleNextStep = async () => {
    if (step === 1) {
      if (!nickname.trim()) return;

      setIsLoading(true);
      try {
        if (address) {
          await userService.updateNickname(address, nickname);
          useUserStore.setState({
            profile: {
              ...useUserStore.getState().profile,
              nickname: nickname
            }
          });
        }
      } catch (error) {
        console.error('Error updating nickname:', error);
      } finally {
        setIsLoading(false);
        setStep(2);
      }
    } else {
      // 完成所有步骤
      onProfileUpdate(nickname, photoUrl);
      onClose();
    }
  };

  if (!isOpen) return null;

  const isDarkMode = theme === 'dark';

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-[100]">
      {/* 遮罩層 */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      {/* 內容層 - 使用 grid 確保完全置中 */}
      <div className={`
        relative mx-auto
        ${isDarkMode ? 'bg-[#1a1a1a] text-white' : 'bg-white text-gray-800'} 
        rounded-lg p-6 w-full max-w-md shadow-xl
      `}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className={`text-xl font-semibold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          {translations.setProfile[language as keyof typeof translations.setProfile]}
        </h2>

        {step === 1 ? (
          <div>
            <div className="mb-6">
              <label className={`block text-sm font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                * {translations.nickname[language as keyof typeof translations.nickname]}
              </label>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder={translations.pleaseEnterNickname[language as keyof typeof translations.pleaseEnterNickname]}
                className={`shadow appearance-none border rounded w-full py-2 px-3 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-700'} leading-tight focus:outline-none focus:shadow-outline`}
              />
            </div>

            <button
              onClick={handleNextStep}
              disabled={!nickname.trim() || isLoading}
              className={`w-full py-2 px-4 rounded font-medium ${isDarkMode ? 'bg-[#d9ff6a] text-black hover:bg-[#c8eb5e]' : 'bg-blue-500 text-white hover:bg-blue-600'} transition-colors ${(!nickname.trim() || isLoading) ? ' cursor-not-allowed' : ''}`}
            >
              {translations.next[language as keyof typeof translations.next]}
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className='flex justify-center'>
                <label className={`block text-sm font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                  {translations.uploadPhoto[language as keyof typeof translations.uploadPhoto]}
                </label>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div
                  className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center relative group cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {photoUrl ? (
                    <>
                      <img src={photoUrl} alt="Profile" className="w-full h-full object-cover group-hover:opacity-70 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-3xl font-bold">+</span>
                      </div>
                    </>
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} group-hover:opacity-70 transition-opacity`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-3xl font-bold group-hover:opacity-100 opacity-0 transition-opacity">+</span>
                      </div>
                    </div>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </div>
            </div>

            <button
              onClick={handleNextStep}
              disabled={isLoading}
              className={`w-full py-2 px-4 rounded font-medium ${isDarkMode ? 'bg-[#d9ff6a] text-black hover:bg-[#c8eb5e]' : 'bg-blue-500 text-white hover:bg-blue-600'} transition-colors ${isLoading ? ' cursor-not-allowed' : ''}`}
            >
              {translations.finish[language as keyof typeof translations.finish]}
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default FirstLoginModal;