"use client";

import React, { useState, useRef } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";

import Image from "next/image";
import ChallengeCompletionModal from "@/app/components/ChallengeCompletionModal";
import FakeExtensionPhishingSuccessContent from "./FakeExtensionPhishingSuccessContent";

const OFFICIAL_URL = "https://metamask.io/en-GB/download";
const FIREFOX_ADDON_URL = "https://addons.mozilla.org/$lang/firefox/search/?q=MetaMask";
const overlayStyles = {
  fake: {
    top: "70px",
    left: "520px",
    width: "370px",
    height: "50px",
  },
  real: {
    top: "120px",
    left: "520px",
    width: "370px",
    height: "50px",
  },
};



export function FakeExtensionPhishing() {
  const { t, language } = useLanguage();

  const [showWarning, setShowWarning] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showQuestion,] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleOfficialClick = () => {
    window.open(OFFICIAL_URL, "_blank", "noopener,noreferrer");
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === "b") {
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setShowWarning(true);
    }
  };
  const handleFirefoxAddonClick = () => {
    //zh-TW
    //en-GB
    //zh-CN
    const lang = language === "zh-hant" ? "zh-TW" : language === "zh-hans" ? "zh-CN" : "en-GB";
    const url = FIREFOX_ADDON_URL.replace("$lang", lang);
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow relative">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 mb-8 text-center">
            <h1 className="challenge-title">{t.fakeExtensionPhishing.title}</h1>
            <p className="challenge-description">
              {t.fakeExtensionPhishing.subtitle}
            </p>
            <div className="warning-banner">
              {t.fakeExtensionPhishing.warning}
            </div>
          </div>

          <div className="challenge-description mb-3">
            <p>
              {t.fakeExtensionPhishing.scenarioDescription}
            </p>
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            <button
              className="px-6 py-3 my-2 bg-orange-600 text-white rounded hover:bg-orange-700 font-semibold"
              onClick={handleFirefoxAddonClick}
            >
              {t.fakeExtensionPhishing.firefoxAddonButton}
            </button>
          </div>
          <div className="relative w-full max-w-3xl aspect-[3/2] mx-auto border rounded-lg overflow-hidden">
            <Image
              src="/images/fake-extension.png"
              alt="Fake Extension Store Screenshot"
              fill
              style={{
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
                borderRadius: "8px",
              }}
            />
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            <label className="flex items-center   cursor-pointer hover:bg-gray-50">
              {t.fakeExtensionPhishing.hintLabel}{" "}
            </label>
            <button
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
              onClick={handleOfficialClick}
            >
              {t.fakeExtensionPhishing.officialSiteButton}
            </button>
          </div>

          {/* Multiple Choice Question */}
          {showQuestion && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {t.fakeExtensionPhishing.questionTitle}
              </h3>
              <p className="mb-4 text-gray-600">
                {t.fakeExtensionPhishing.questionDescription}
              </p>

              <div className="space-y-3">
                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="extension-choice"
                    value="a"
                    checked={selectedAnswer === "a"}
                    onChange={(e) => handleAnswerSelect(e.target.value)}
                    className="mr-3"
                  />
                  <span className="font-medium">a) Metamask</span>
                </label>

                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="extension-choice"
                    value="b"
                    checked={selectedAnswer === "b"}
                    onChange={(e) => handleAnswerSelect(e.target.value)}
                    className="mr-3"
                  />
                  <span className="font-medium">
                    b) Metamask - Crypto Wallet
                  </span>
                </label>
              </div>

              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
              >
                {t.fakeExtensionPhishing.submitButton}
              </button>
            </div>
          )}

          {/* Warning Modal */}
          {showWarning && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
              <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-2 text-red-600">
                  {t.fakeExtensionPhishing.warningModalTitle}
                </h2>
                <p className="mb-4">
                  {t.fakeExtensionPhishing.warningModalContent}
                </p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setShowWarning(false)}
                >
                  {t.fakeExtensionPhishing.closeButton}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Success Modal (ChallengeCompletionModal) */}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="fake-extension-phishing"
        successContent={<FakeExtensionPhishingSuccessContent />}
      />
      <style jsx>{`
        .challenge-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 1rem;
          text-align: center;
        }
        .challenge-description {
          font-size: 1.25rem;
          color: #444;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .warning-banner {
          background-color: #ffebee;
          color: #c62828;
          padding: 10px 15px;
          border-radius: 4px;
          margin-bottom: 20px;
          font-weight: bold;
          text-align: center;
          border: 1px solid #ef9a9a;
        }
      `}</style>
    </>
  );
}
