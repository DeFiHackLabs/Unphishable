'use client';

import { useState, useRef } from 'react';
import { userService } from '@/app/services/userService';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useAccount } from 'wagmi';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentNickname: string | undefined;
  currentPhotoUrl: string | null;
  onProfileUpdate: (nickname: string | undefined, photoUrl: string | null) => void;
}

const EditProfileModal = ({
  isOpen,
  onClose,
  currentNickname,
  currentPhotoUrl,
  onProfileUpdate
}: EditProfileModalProps) => {
  const { address } = useAccount();
  const { language } = useLanguage();
  const [nickname, setNickname] = useState(currentNickname);
  const [photoUrl, setPhotoUrl] = useState<string | null>(currentPhotoUrl);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const translations = {
    editProfile: {
      en: 'Edit Profile',
      'zh-hant': '編輯個人資料',
      'zh-hans': '编辑个人资料'
    },
    nickname: {
      en: 'Nickname',
      'zh-hant': '暱稱',
      'zh-hans': '昵称'
    },
    uploadPhoto: {
      en: 'Upload Photo',
      'zh-hant': '上傳照片',
      'zh-hans': '上传照片'
    },
    save: {
      en: 'Save',
      'zh-hant': '保存',
      'zh-hans': '保存'
    },
    cancel: {
      en: 'Cancel',
      'zh-hant': '取消',
      'zh-hans': '取消'
    }
  };

  const handlePhotoChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsLoading(true);
      try {
        const photoUrl = await userService.updateAvatar(`${address}`, file);
        if (photoUrl) {
          setPhotoUrl(photoUrl);
        }
      } catch (error) {
        console.error('Error uploading photo:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await userService.updateNickname(`${address}`, nickname);
      onProfileUpdate(nickname, photoUrl);
      onClose();
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* 添加遮罩層 */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* 內容層 */}
      <div className="relative bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          {translations.editProfile[language as keyof typeof translations.editProfile]}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {translations.nickname[language as keyof typeof translations.nickname]}
            </label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {translations.uploadPhoto[language as keyof typeof translations.uploadPhoto]}
            </label>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300">
                {photoUrl ? (
                  <img src={photoUrl} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white text-2xl">
                    ??
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {translations.uploadPhoto[language as keyof typeof translations.uploadPhoto]}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {translations.cancel[language as keyof typeof translations.cancel]}
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {translations.save[language as keyof typeof translations.save]}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;