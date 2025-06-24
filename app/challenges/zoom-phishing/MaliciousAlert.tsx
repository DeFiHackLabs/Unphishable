import React, { useState, useEffect } from "react";

interface MaliciousAlertProps {
  onComplete: () => void;
}

const MaliciousAlert = ({ onComplete }: MaliciousAlertProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 10;
      });
    }, 400);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1000);

      return () => clearTimeout(completeTimer);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-[400px] w-full overflow-hidden">
        <div className="p-4">
          <h3 className="text-center text-red-600 flex items-center justify-center gap-2 text-xl font-bold">
            <span className="animate-pulse">⚠️</span>
            正在偵測到可疑活動
          </h3>
        </div>

        <div className="space-y-4 py-4 px-4">
          <div className="text-sm text-center">
            <p className="mb-2 font-medium">正在偵測到加密貨幣錢包資料盜取</p>
            <pre className="bg-black text-green-400 p-2 rounded text-xs overflow-auto text-left">
              {`> 搜尋加密貨幣錢包檔案...
> 複製私鑰資料...
> 掃描 MetaMask 擴充功能...
> 存取 wallet.dat...
> 複製種子助記詞...
> 上傳至遠端伺服器...`}
            </pre>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-500">
              <span>資料盜取進度</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50">
          <p className="text-xs text-gray-500 text-center w-full mb-2">
            這是釣魚攻擊模擬教育示範
          </p>
          <button
            onClick={onComplete}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded transition-colors duration-200 font-medium"
          >
            結束模擬
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaliciousAlert;
