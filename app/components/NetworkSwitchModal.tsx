'use client';

import { useState } from 'react';
import { useSwitchChain } from 'wagmi';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface NetworkSwitchModalProps {
  isOpen: boolean;
  onClose: (success?: boolean) => void; // 修改參數以傳遞是否成功的狀態
  requiredChainId: number;
  networkName: string;
}

export default function NetworkSwitchModal({
  isOpen,
  onClose,
  requiredChainId,
  networkName,
}: NetworkSwitchModalProps) {
  const { language } = useLanguage();
  const { switchChain } = useSwitchChain();
  const [isSwitchingNetwork, setIsSwitchingNetwork] = useState(false);

  const handleSwitchNetwork = async () => {
    try {
      setIsSwitchingNetwork(true); // 設置為切換中狀態
      await switchChain({ chainId: requiredChainId });

      // 網路切換需要一些時間，設置延遲確保切換完成
      setTimeout(() => {
        onClose(true); // 表示切換成功
        setIsSwitchingNetwork(false); // 切換完成後恢復狀態
      }, 1000); // 等待 1 秒確保切換完成
    } catch (error) {
      console.error('Failed to switch network:', error);
      setIsSwitchingNetwork(false); // 切換失敗也恢復狀態
      onClose(false); // 表示切換失敗
    }
  };

  const handleCancel = () => {
    onClose(false); // 表示用戶主動取消
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <h3 className="text-xl font-bold mb-4">
          {language === 'en' ? 'Network Switch Required' :
            language === 'zh-hans' ? '需要切换网络' : '需要切換網路'}
        </h3>
        <p className="mb-4">
          {language === 'en' ? `This challenge requires connecting to ${networkName}.` :
            language === 'zh-hans' ? `此挑战需要连接到 ${networkName}。` : `此挑戰需要連接到 ${networkName}。`}
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleCancel}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            {language === 'en' ? 'Cancel' :
              language === 'zh-hans' ? '取消' : '取消'}
          </button>
          <button
            onClick={handleSwitchNetwork}
            disabled={isSwitchingNetwork}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isSwitchingNetwork ?
              (language === 'en' ? 'Switching...' :
                language === 'zh-hans' ? '切换中...' : '切換中...') :
              (language === 'en' ? `Switch to ${networkName}` :
                language === 'zh-hans' ? `切换到 ${networkName}` : `切換到 ${networkName}`)}
          </button>
        </div>
      </div>
    </div>
  );
}
