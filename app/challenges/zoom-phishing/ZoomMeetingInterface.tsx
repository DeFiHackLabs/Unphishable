import React, { useState, useEffect } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ZoomLaunchPage from "./ZoomLaunchPage";

interface ZoomMeetingInterfaceProps {
  authorized: boolean;
  selectedDate?: string;
  selectedTime?: string;
}

const ZoomMeetingInterface: React.FC<ZoomMeetingInterfaceProps> = ({ selectedDate, selectedTime }) => {
  const { t, language } = useLanguage();
  const [selectedLink, setSelectedLink] = useState("");
  const [showLaunchPage, setShowLaunchPage] = useState(false);
  const [formattedDate, setFormattedDate] = useState("今天");
  const [meetingTime, setMeetingTime] = useState("15:00-16:00");
  const [selectLocaleDateString, setSelectLocaleDateString] = useState<string>("en-US");

  // 監聽語言變化並更新地區設置
  useEffect(() => {
    // 根據當前語言設置合適的日期地區格式
    const localeMap: Record<string, string> = {
      'zh-hant': 'zh-TW',
      'zh-hans': 'zh-CN',
      'en': 'en-US'
    };

    // 使用當前語言或預設為英文
    setSelectLocaleDateString(localeMap[language] || 'en-US');
  }, [language]);

  // 格式化日期和時間顯示 - 當地區設置或日期/時間變化時重新計算
  useEffect(() => {
    // 格式化日期
    if (selectedDate) {
      try {
        const date = new Date(selectedDate);
        setFormattedDate(date.toLocaleDateString(selectLocaleDateString, {
          month: 'long',
          day: 'numeric'
        }));
      } catch (error) {
        console.error("日期格式化錯誤:", error);
        // 提供後備值
        setFormattedDate(selectedDate);
      }
    } else {
      // 沒有選擇日期時的預設值
      const today = new Date();
      setFormattedDate(today.toLocaleDateString(selectLocaleDateString, {
        month: 'long',
        day: 'numeric'
      }));
    }

    // 格式化時間
    if (selectedTime) {
      try {
        // 假設時間長度為1小時
        const [hours, minutes] = selectedTime.split(':');
        const endHour = (parseInt(hours) + 1) % 24; // 確保時間不超過24小時
        const endTime = `${endHour.toString().padStart(2, '0')}:${minutes}`;
        setMeetingTime(`${selectedTime}-${endTime}`);
      } catch (error) {
        console.error("時間格式化錯誤:", error);
        // 提供後備值
        setMeetingTime(selectedTime || "15:00-16:00");
      }
    } else {
      // 沒有選擇時間的預設值
      setMeetingTime("15:00-16:00");
    }
  }, [selectLocaleDateString, selectedDate, selectedTime]);
  // 使用一個不重複的種子來確保偽隨機性
  const generateRandomIndex = () => {
    // 使用當前時間戳作為額外的隨機因素
    const timestamp = new Date().getTime();
    // 使用 Math.sin 生成基於時間戳的介於 -1 和 1 之間的一個值
    const randomValue = Math.abs(Math.sin(timestamp));
    // 將這個值映射到 0-3 的範圍（4個網址）
    return Math.floor(randomValue * 4);
  };

  useEffect(() => {
    // 釣魚網址列表
    const phishingDomains = [
      "https://us05web-zoom.org/j/87993853595?pwd=xIDXrVURyZkcJkq6FXu30WMIwjmWsA.1",
      "https://zoomus-web.live/j/87993853595?pwd=xIDXrVURyZkcJkq6FXu30WMIwjmWsA.1",
      "https://zoom.us-web05.com/j/87993853595?pwd=xIDXrVURyZkcJkq6FXu30WMIwjmWsA.1",
      "https://us05web.zoom-login.tk/j/87993853595?pwd=xIDXrVURyZkcJkq6FXu30WMIwjmWsA.1"
    ];

    // 生成一個基於時間戳的隨機索引
    const randomIndex = generateRandomIndex();
    console.log("Selected domain index:", randomIndex); // 調試用
    setSelectedLink(phishingDomains[randomIndex]);
  }, []);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowLaunchPage(true);
  };

  const handleFinishLaunch = () => {
    // 完成學習環節後導向下一步
    console.log("User completed the phishing awareness activity");
    // 這裡可以添加其他需要的功能
  };

  return (
    <div className="w-full py-5 bg-white flex items-center justify-center">
      {showLaunchPage ? (
        <ZoomLaunchPage
          onLaunchMeeting={handleFinishLaunch}
          phishingUrl={selectedLink}
        />
      ) : (
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg border border-gray-200 p-6">
          <div className="flex items-center mb-4">
            <img
              src="https://safety.zoom.us/_next/static/media/Zoom_logo.9368e9f1.svg"
              alt="Zoom"
              className=" mr-2"
            />
          </div>
          <div className="mb-4">
            <div className="bg-gray-100 p-4 rounded-lg text-sm border border-gray-300">
              <p className="mb-2">
                <span className="font-semibold">{t.zoomPhishing.meeting.subject}:</span> {t.zoomPhishing.meeting.interviewTitle}
              </p>
              <p className="mb-2">
                <span className="font-semibold">{t.zoomPhishing.meeting.time}:</span> {formattedDate}, {meetingTime}
              </p>
              <p className="mb-2">
                <span className="font-semibold">{t.zoomPhishing.meeting.meetingID}:</span> 879 9385 3595
              </p>
              <p className="mb-2">
                <span className="font-semibold">{t.zoomPhishing.meeting.password}:</span> c8TBqT
              </p>
              <p>
                <span className="font-semibold">{t.zoomPhishing.meeting.joinLink}:</span>{" "}
                <a
                  href="#"
                  onClick={handleLinkClick}
                  className="text-blue-600 hover:underline break-all"
                >
                  {selectedLink}
                </a>
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={handleLinkClick}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              {t.zoomPhishing.meeting.joinMeeting}
            </button>
            <p className="text-xs text-gray-500 mt-2">
              {t.zoomPhishing.meeting.manualEntryHint}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ZoomMeetingInterface;
