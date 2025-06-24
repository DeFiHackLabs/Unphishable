"use client";

import React, { useState, useEffect } from "react";
import ZoomMeetingInterface from "@/app/challenges/zoom-phishing/ZoomMeetingInterface";
//import RemoteControlRequest from "@/app/challenges/zoom-phishing/RemoteControlRequest";
//import PhishingExplanation from "@/app/challenges/zoom-phishing/PhishingExplanation";
import SocialMediaInterface from "@/app/challenges/zoom-phishing/SocialMediaInterface";
import CalendlyInterface from "@/app/challenges/zoom-phishing/CalendlyInterface";

export default function ZoomPhishingSimulation() {
  //const [showRemoteRequest, setShowRemoteRequest] = useState(false);
  //const [showExplanation, setShowExplanation] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  // 追蹤用戶當前所處的階段
  const [currentStage, setCurrentStage] = useState("social"); // social -> calendly -> zoom
  const [, setSocialCompleted] = useState(false);
  const [, setCalendlyCompleted] = useState(false);

  // 新增以下狀態以儲存選擇的日期和時間
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    // 只有在進入 zoom 階段後才顯示釣魚請求
    // if (currentStage === "zoom") {
    //   const timer = setTimeout(() => {
    //     setShowRemoteRequest(true);
    //   }, 5000);

    //   return () => clearTimeout(timer);
    // }
  }, [currentStage]);

  const handleSocialComplete = () => {
    setSocialCompleted(true);
    setCurrentStage("calendly");
  };

  // 修改這個函數來接收和儲存日期和時間
  const handleCalendlyComplete = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setCalendlyCompleted(true);
    setCurrentStage("zoom");
  };

  // const handleAccept = () => {
  //   setShowRemoteRequest(false);
  //   setAuthorized(true);
  //   setTimeout(() => {
  //     setShowExplanation(true);
  //   }, 3000);
  // };

  // const handleDecline = () => {
  //   setShowRemoteRequest(false);
  //   setTimeout(() => {
  //     setShowExplanation(true);
  //   }, 1000);
  // };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1">
        {currentStage === "social" && (
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl border border-gray-300 relative">
            <SocialMediaInterface onComplete={handleSocialComplete} />
          </div>
        )}

        {currentStage === "calendly" && (
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl border border-gray-300 relative">
            <CalendlyInterface onComplete={handleCalendlyComplete} />
          </div>
        )}

        {currentStage === "zoom" && (
          <div className="bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-700 relative">
            <ZoomMeetingInterface
              authorized={authorized}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
            />

            {/* {showRemoteRequest && (
              <RemoteControlRequest
                onAccept={handleAccept}
                onDecline={handleDecline}
              />
            )} */}
          </div>
        )}

        {/* {showExplanation && (
          <PhishingExplanation
            wasAuthorized={authorized}
            completedSteps={{
              social: socialCompleted,
              calendly: calendlyCompleted,
              zoom: true
            }}
          />
        )} */}
      </div>
    </div>
  );
}
