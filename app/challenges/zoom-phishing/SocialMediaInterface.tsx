import React, { useState } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
interface SocialMediaInterfaceProps {
  onComplete: () => void;
}

export default function SocialMediaInterface({ onComplete }: SocialMediaInterfaceProps) {
  const [platform, setPlatform] = useState<'linkedin' | 'telegram'>('linkedin');
  const { t } = useLanguage();
  return (
    <div className="p-6">
      <div className="flex justify-center mb-6 space-x-4">
        <button
          className={`px-4 py-2 rounded ${platform === 'linkedin' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => setPlatform('linkedin')}>
          LinkedIn
        </button>
        <button
          className={`px-4 py-2 rounded ${platform === 'telegram' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setPlatform('telegram')}>
          Telegram
        </button>
      </div>

      {platform === 'linkedin' && (
        <div className="border rounded p-4 max-w-2xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 mr-3"></div>
            <div>
              <h3 className="font-bold">{t.zoomPhishing.linkedin.recruiterTitle}</h3>
              <p className="text-gray-600 text-sm">{t.zoomPhishing.linkedin.company} · {t.zoomPhishing.linkedin.timeAgo}</p>
            </div>
          </div>
          <p className="mb-4">
            {t.zoomPhishing.linkedin.message}
          </p>
          <div className="text-center">
            <button
              onClick={onComplete}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              {t.zoomPhishing.linkedin.scheduleButton}
            </button>
          </div>
        </div>
      )}

      {platform === 'telegram' && (
        <div className="border rounded p-4 max-w-md mx-auto bg-gray-100">
          <div className="bg-white rounded p-3 mb-3 ml-auto max-w-xs">
            <p className="text-sm text-gray-800">{t.zoomPhishing.telegram.message1}</p>
            <p className="text-xs text-right text-gray-500">10:30</p>
          </div>
          <div className="bg-white rounded p-3 mb-3 ml-auto max-w-xs">
            <p className="text-sm text-gray-800">{t.zoomPhishing.telegram.message2}</p>
            <button
              onClick={onComplete}
              className="text-blue-500 underline text-sm">
              {t.zoomPhishing.telegram.link}
            </button>
            <p className="text-xs text-right text-gray-500">10:31</p>
          </div>
        </div>
      )}
    </div>
  );
}
