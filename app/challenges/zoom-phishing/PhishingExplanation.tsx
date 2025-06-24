import React from "react";

interface PhishingExplanationProps {
  wasAuthorized: boolean;
  completedSteps: {
    social: boolean;
    calendly: boolean;
    zoom: boolean;
  };
}

export default function PhishingExplanation({
  wasAuthorized,
  completedSteps,
}: PhishingExplanationProps) {
  return (
    <div className="mt-6 bg-white rounded-lg p-6 shadow-lg border border-gray-200">
      <h2 className="text-xl font-bold mb-4">釣魚攻擊解析</h2>

      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2">攻擊路徑：</h3>
        <div className="flex items-center space-x-2 mb-2">
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center ${completedSteps.social
              ? "bg-green-500 text-white"
              : "bg-gray-300"
              }`}
          >
            1
          </div>
          <div>
            社交媒體初始接觸 -{" "}
            {completedSteps.social ? "✅ 您點擊了" : "❌ 已避免"}
          </div>
        </div>
        <div className="flex items-center space-x-2 mb-2">
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center ${completedSteps.calendly
              ? "bg-green-500 text-white"
              : "bg-gray-300"
              }`}
          >
            2
          </div>
          <div>
            Calendly 日程安排 -{" "}
            {completedSteps.calendly ? "✅ 您預約了" : "❌ 已避免"}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center ${completedSteps.zoom && wasAuthorized
              ? "bg-green-500 text-white"
              : "bg-gray-300"
              }`}
          >
            3
          </div>
          <div>
            Zoom 遠端控制 -{" "}
            {wasAuthorized ? "✅ 您授權了" : "❌ 已拒絕"}
          </div>
        </div>
      </div>

      <div className="prose max-w-none">
        <h3>這是如何運作的？</h3>
        <p>
          這種多階段釣魚攻擊從社交媒體平台（LinkedIn 或 Telegram）開始，
          攻擊者假扮為招聘人員來建立信任。
        </p>
        <p>
          然後通過看似合法的 Calendly 預約系統引導您進入下一步。這增加了攻擊的真實性，
          因為很多公司確實使用 Calendly 來安排面試。
        </p>
        <p>
          最後，在假的 Zoom 會議中，攻擊者請求遠端控制權限。如果您授權，
          他們將獲得對您電腦的完全訪問權，可能會：
        </p>
        <ul className="list-disc pl-5">
          <li>安裝惡意軟體</li>
          <li>存取您的加密貨幣錢包</li>
          <li>竊取敏感資訊</li>
          <li>獲取其他帳戶的憑證</li>
        </ul>

        <h3 className="mt-4">如何保護自己：</h3>
        <ul className="list-disc pl-5">
          <li>驗證發送會議邀請人的身份，通過官方管道確認</li>
          <li>不要點擊不明來源的鏈接，即使它們看起來很專業</li>
          <li>
            永遠不要授予遠端控制權限，除非您完全確定對方的身份和目的
          </li>
          <li>
            注意多階段釣魚攻擊，每個階段都會增加信任感和真實性
          </li>
        </ul>
      </div>
    </div>
  );
}
