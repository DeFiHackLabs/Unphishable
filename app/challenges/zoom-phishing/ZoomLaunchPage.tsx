import React, { useEffect, useState } from "react";
import { FaLock, FaStar, FaChevronLeft, FaChevronRight, FaRedo, FaEllipsisV, FaExclamationTriangle } from "react-icons/fa";
import ChallengeCompletionModal from "@/app/components/ChallengeCompletionModal";
import ZoomPhishingSuccessContent from "./ZoomPhishingSuccessContent";
import { useLanguage } from "@/app/contexts/LanguageContext";

interface ZoomLaunchPageProps {
  onLaunchMeeting: () => void;
  phishingUrl: string;
}

const ZoomLaunchPage: React.FC<ZoomLaunchPageProps> = ({ onLaunchMeeting, phishingUrl }) => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [showPhishingWarning, setShowPhishingWarning] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("");
  const [showDomainSelection, setShowDomainSelection] = useState(false);
  const [shuffledDomains, setShuffledDomains] = useState<string[]>([]);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  // 定義正確的 Zoom 域名和釣魚域名
  const domains = [
    "us05web-zoom.org",
    "zoomus-web.live",
    "zoom.us",  // 這是真實的
    "us05web.zoom-login.tk"
  ];

  // 在組件載入時打亂網域順序
  useEffect(() => {
    // Fisher-Yates (Knuth) 洗牌算法
    const shuffleArray = (array: string[]) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    setShuffledDomains(shuffleArray(domains));
  }, []);

  // 模擬載入過程
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowPhishingWarning(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleDomainSelect = (domain: string) => {
    setSelectedDomain(domain);
  };

  const handleSubmit = () => {
    if (selectedDomain === "zoom.us") {
      // 正確答案，顯示完成模態窗
      setShowDomainSelection(false);
      setShowCompletionModal(true);
    } else {
      // 錯誤答案，可以顯示提示
      alert(t.zoomPhishing.error.wrongDomain);
    }
  };

  const handleContinue = () => {
    setShowPhishingWarning(false);
    setShowDomainSelection(true);
  };

  const handleModalClose = () => {
    setShowCompletionModal(false);
    onLaunchMeeting(); // 關閉模態窗後繼續流程
  };

  // 釣魚警告提示
  if (showPhishingWarning) {
    return (
      <div className="bg-white w-full min-h-[600px] flex flex-col rounded-lg overflow-hidden shadow-xl border border-gray-300">
        <div className="flex-grow flex flex-col items-center justify-center p-8 text-center">
          <div className="bg-red-100 p-6 rounded-lg shadow-md max-w-lg w-full">
            <div className="flex items-center justify-center mb-4">
              <FaExclamationTriangle className="text-red-500 text-4xl" />
            </div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">{t.zoomPhishing.warning.title}</h2>
            <p className="text-gray-800 mb-4">
              {t.zoomPhishing.warning.message}
            </p>
            <p className="text-gray-800 mb-6">
              {t.zoomPhishing.warning.urlPrefix} <span className="font-mono font-bold">{phishingUrl}</span>
            </p>
            <button
              onClick={handleContinue}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md font-medium transition-colors"
            >
              {t.zoomPhishing.warning.continueButton}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 域名選擇界面
  if (showDomainSelection) {
    return (
      <div className="bg-white w-full min-h-[600px] flex flex-col rounded-lg overflow-hidden shadow-xl border border-gray-300">
        <div className="flex-grow flex flex-col items-center justify-center p-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md max-w-lg w-full">
            <h2 className="text-xl font-bold text-center mb-6">{t.zoomPhishing.domainSelection.title}</h2>
            <div className="space-y-3 mb-6">
              {shuffledDomains.map((domain, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-3 cursor-pointer hover:bg-blue-100 transition-colors ${selectedDomain === domain ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
                  onClick={() => handleDomainSelect(domain)}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="domain"
                      checked={selectedDomain === domain}
                      onChange={() => handleDomainSelect(domain)}
                      className="mr-3"
                    />
                    <span className="font-mono">{domain}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                onClick={handleSubmit}
                disabled={!selectedDomain}
                className={`py-2 px-6 rounded-md font-medium transition-colors ${selectedDomain ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
              >
                {t.zoomPhishing.domainSelection.confirmButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 原始 Zoom 加載頁面
  return (
    <>
      {!showCompletionModal && (
        <div className="bg-white w-full min-h-[600px] flex flex-col rounded-lg overflow-hidden shadow-xl border border-gray-300">
          {/* 瀏覽器模擬頂部 */}
          <div className="bg-gray-100 border-b border-gray-300">
            {/* 瀏覽器標籤列 */}
            <div className="flex items-center px-2 pt-2">
              <div className="bg-white rounded-t-lg border-t border-l border-r border-gray-300 flex items-center h-8 px-3 relative z-10 max-w-[200px]">
                <img src="https://safety.zoom.us/favicon.ico" alt="Zoom" className="w-4 h-4 mr-2" />
                <span className="text-xs truncate">{t.zoomPhishing.browserTab.joinMeeting}</span>
              </div>
              <div className="flex-grow"></div>
            </div>

            {/* 瀏覽器工具列 */}
            <div className="flex items-center px-3 py-2">
              <div className="flex space-x-2 mr-4 text-gray-500">
                <FaChevronLeft className="text-gray-400" />
                <FaChevronRight className="text-gray-400" />
                <FaRedo />
              </div>

              {/* URL 地址欄 */}
              <div className="flex-grow bg-white border border-gray-300 rounded-lg py-1 px-2 flex items-center">
                <FaLock className="text-green-600 mr-2 text-xs" />
                <span className="text-xs text-gray-800 truncate flex-grow">{phishingUrl}</span>
                <FaStar className="text-gray-400 ml-2" />
              </div>

              <div className="flex space-x-3 ml-4 text-gray-500">
                <FaEllipsisV />
              </div>
            </div>
          </div>

          {/* Zoom 內容區域 */}
          <div className="flex flex-col flex-grow overflow-auto">
            {/* Zoom 標題列 */}
            <header className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200">
              <div className="flex items-center">
                <img
                  src="https://safety.zoom.us/_next/static/media/Zoom_logo.9368e9f1.svg"
                  alt="Zoom"
                  className=" mr-2"
                />
              </div>
              <div className="flex items-center">
                <a href="#" className="mr-4 text-[#2D8CFF] hover:underline text-sm">Support</a>
                <div className="flex items-center text-sm">
                  <span className="mr-1">English</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </header>

            {/* 主要內容 */}
            <div className="flex-grow flex flex-col items-center justify-center w-full max-w-lg mx-auto px-4 py-8 text-center">
              {/* 載入動畫 */}
              {loading && (
                <div className="mb-8">
                  <div className="w-16 h-16 border-4 border-gray-200 border-t-[#2D8CFF] rounded-full animate-spin"></div>
                </div>
              )}

              {/* 文字內容 */}
              <h2 className="text-2xl text-gray-700 mb-4">{t.zoomPhishing.mainContent.launchedMessage}</h2>
              <p className="text-lg text-gray-600 mb-6">{t.zoomPhishing.mainContent.notSeeingMeeting}</p>

              {/* 使用條款 */}
              <p className="text-sm text-gray-500 mb-6">
                {t.zoomPhishing.mainContent.termsMessage}{" "}
                <a href="#" className="text-[#2D8CFF] hover:underline">{t.zoomPhishing.mainContent.termsLink}</a> {t.zoomPhishing.mainContent.andText}{" "}
                <a href="#" className="text-[#2D8CFF] hover:underline">{t.zoomPhishing.mainContent.privacyLink}</a>
              </p>

              {/* 啟動會議按鈕 */}
              <button
                onClick={onLaunchMeeting}
                className="bg-[#2D8CFF] hover:bg-[#2681eb] text-white py-3 px-6 rounded-md font-medium text-lg transition-colors duration-300 w-full max-w-xs shadow-md"
              >
                {t.zoomPhishing.mainContent.launchButton}
              </button>

              {/* 下載信息 */}
              <p className="mt-12 text-gray-600 text-sm">
                {t.zoomPhishing.mainContent.downloadMessage}{" "}
                <a href="#" className="text-[#2D8CFF] hover:underline">{t.zoomPhishing.mainContent.downloadLink}</a>
              </p>
            </div>

            {/* 頁腳 */}
            <footer className="w-full py-4 px-6 border-t border-gray-200">
              <div className="max-w-5xl mx-auto">
                <p className="text-xs text-gray-500 mb-2">{t.zoomPhishing.footer.copyright}</p>
                <div className="flex flex-wrap gap-x-2 text-xs text-gray-500">
                  <a href="#" className="text-[#2D8CFF] hover:underline">{t.zoomPhishing.footer.trustCenter}</a>
                  <span>|</span>
                  <a href="#" className="text-[#2D8CFF] hover:underline">{t.zoomPhishing.footer.acceptableUse}</a>
                  <span>|</span>
                  <a href="#" className="text-[#2D8CFF] hover:underline">{t.zoomPhishing.footer.legal}</a>
                  <span>|</span>
                  <a href="#" className="text-[#2D8CFF] hover:underline">{t.zoomPhishing.footer.doNotSell}</a>
                  <span>|</span>
                  <a href="#" className="text-[#2D8CFF] hover:underline">{t.zoomPhishing.footer.cookiePreferences}</a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      )}

      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={handleModalClose}
        challengeKey="zoom-phishing"
        successContent={<ZoomPhishingSuccessContent />}
      />
    </>
  );
};

export default ZoomLaunchPage;
