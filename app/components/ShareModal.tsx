import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl?: string;
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  shareUrl = "http://unphishable.io"
}) => {
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  // 處理點擊外部關閉模態框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // 處理複製功能
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2秒後重置複製狀態
    } catch (err) {
      console.error('複製失敗:', err);
    }
  };

  if (!isOpen) return null;

  const getShareText = () => {
    if (language === 'en') {
      return "I'm participating in the Unphishable Web3 phishing security challenge and invite you to join, enhancing security awareness together.";
    } else if (language === 'zh-hans') {
      return "我正在参加 Unphishable Web3 钓鱼安全挑战邀您一起，提高安全防范能力。";
    } else {
      return "我正在參加 Unphishable Web3 釣魚安全挑戰邀您一起，提高安全防范能力。";
    }
  };

  const getCopyText = () => {
    if (language === 'en') {
      return copied ? "Copied" : "Copy";
    } else if (language === 'zh-hans') {
      return copied ? "已复制" : "复制";
    } else {
      return copied ? "已複製" : "複製";
    }
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} // 直接使用 rgba 樣式確保透明度生效
    >
      <div
        ref={modalRef}
        className="bg-gray-900 rounded-md p-6 max-w-md w-full mx-4"
      >
        <div className='flex justify-end'>
          <button onClick={onClose} className="text-white text-2xl">
            &times;
          </button>
        </div>
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-[#c4ff41] text-xl font-bold">
            {language === 'en' ? 'Share Security Challenge' :
              language === 'zh-hans' ? '分享安全挑战关卡' :
                '分享安全挑戰關卡'}
          </h2>
        </div>

        <div className="text-white mb-6 text-center">
          <p>{getShareText()}</p>
        </div>

        <div className="text-center mb-6">
          <a
            href={shareUrl}
            className="text-blue-400 hover:underline break-all"
          >
            {shareUrl}
          </a>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleCopy}
            className="bg-[#c4ff41] hover:bg-[#b3e631] text-black py-2 px-10 rounded-md transition duration-300"
          >
            {getCopyText()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
