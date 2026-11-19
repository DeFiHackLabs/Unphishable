"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ChallengeCompletionModal from "@/app/components/ChallengeCompletionModal";
import CelsiusEmailPhishingSuccessContent from "./CelsiusEmailPhishingSuccessContent";

const IMAGE_DIR = "/images/challenges/celsius-email-phishing";

// Inspectable bands on email.svg (viewBox 800x500), as percentages of the image.
// Each one lines up with a block of the rendered mail; the copy for both sides of
// the comparison lives in the locale files.
const PARTS = [
  { key: "sender", top: "8.8%", height: "5.2%" },
  { key: "spf", top: "17.2%", height: "5.2%" },
  { key: "deadline", top: "31.6%", height: "8.4%" },
  { key: "otp", top: "57.6%", height: "8.8%" },
  { key: "button", top: "69.6%", height: "9.6%" },
  { key: "wallet", top: "80.8%", height: "6.8%" },
] as const;

type PartKey = (typeof PARTS)[number]["key"];

const OPTIONS = ["clickLink", "suspicious", "reportPhishing"] as const;
type Option = (typeof OPTIONS)[number];

const PORTAL_OPTIONS = ["accessPortal", "waitSomethingWrong"] as const;
type PortalOption = (typeof PORTAL_OPTIONS)[number];

export function CelsiusEmailPhishing() {
  const { t } = useLanguage();

  const [step, setStep] = useState(1);
  const [inspected, setInspected] = useState<PartKey | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<Option | "">("");
  const [portalAnswer, setPortalAnswer] = useState<PortalOption | "">("");
  const [showNudge, setShowNudge] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const [recovered, setRecovered] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === "") return;
    if (selectedAnswer === "reportPhishing") {
      setShowCompletionModal(true);
      scrollToTop();
    } else if (selectedAnswer === "clickLink") {
      setStep(2);
      scrollToTop();
    } else {
      setShowNudge(true);
    }
  };

  const handlePortalAnswer = () => {
    if (portalAnswer === "") return;
    if (portalAnswer === "waitSomethingWrong") {
      setRecovered(true);
      setShowCompletionModal(true);
      scrollToTop();
    } else {
      setShowFail(true);
    }
  };

  return (
    <>
      <div ref={topRef} />
      {!showCompletionModal && (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow relative text-gray-800">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 mb-6 text-center">
            <h1 className="challenge-title">{t.celsiusEmail.title}</h1>
            <p className="challenge-description">{t.celsiusEmail.subtitle}</p>
            <div className="warning-banner">{t.celsiusEmail.warning}</div>
          </div>

          {/* Progress pills */}
          <div className="flex justify-center gap-2 mb-6 text-sm font-semibold">
            {t.celsiusEmail.steps.map((label, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full ${
                  step === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {label}
              </span>
            ))}
          </div>

          {/* Round 1: the email */}
          {step === 1 && (
            <>
              <p className="text-lg text-gray-700 mb-3">
                {t.celsiusEmail.scenario}
              </p>
              <p className="text-gray-600 mb-3">{t.celsiusEmail.inspectHint}</p>

              <div className="relative w-full aspect-[16/10] border border-gray-300 rounded-t-lg overflow-hidden">
                <Image
                  src={`${IMAGE_DIR}/email.svg`}
                  alt={t.celsiusEmail.emailAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
                {PARTS.map((part) => (
                  <button
                    key={part.key}
                    type="button"
                    aria-label={`${t.celsiusEmail.inspectAria}: ${part.key}`}
                    className={`absolute rounded-md border-2 cursor-pointer transition-colors ${
                      inspected === part.key
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-transparent hover:border-blue-400"
                    }`}
                    style={{
                      left: "5%",
                      width: "90%",
                      top: part.top,
                      height: part.height,
                    }}
                    onMouseEnter={() => setInspected(part.key)}
                    onFocus={() => setInspected(part.key)}
                    onClick={() => setInspected(part.key)}
                  />
                ))}
              </div>

              {/* What it shows vs. what it is */}
              <div className="border border-t-0 border-gray-300 rounded-b-lg bg-gray-100 px-4 py-3 text-sm min-h-[6rem] flex items-center">
                {inspected === null ? (
                  <span className="text-gray-500">
                    {t.celsiusEmail.inspectPlaceholder}
                  </span>
                ) : (
                  <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 items-baseline">
                    <span className="text-gray-500 whitespace-nowrap">
                      {t.celsiusEmail.inspectShows}
                    </span>
                    <span className="font-mono text-gray-900">
                      {t.celsiusEmail.parts[inspected].shows}
                    </span>
                    <span className="text-gray-500 whitespace-nowrap">
                      {t.celsiusEmail.inspectTruth}
                    </span>
                    <span className="text-gray-900">
                      {t.celsiusEmail.parts[inspected].truth}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {t.celsiusEmail.questionTitle}
                </h3>
                <p className="mb-4 text-gray-600">
                  {t.celsiusEmail.questionDescription}
                </p>

                <div className="space-y-3">
                  {OPTIONS.map((option) => (
                    <label
                      key={option}
                      className={`flex items-start p-3 border rounded-lg cursor-pointer hover:bg-white ${
                        selectedAnswer === option
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="celsius-action"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => setSelectedAnswer(option)}
                        className="mr-3 mt-1"
                      />
                      <span className="font-medium">
                        {t.celsiusEmail.options[option]}
                      </span>
                    </label>
                  ))}
                </div>

                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
                >
                  {t.celsiusEmail.submitButton}
                </button>
              </div>
            </>
          )}

          {/* Round 2: the portal */}
          {step === 2 && (
            <>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                {t.celsiusEmail.portalTitle}
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {t.celsiusEmail.portalIntro}
              </p>

              <div className="relative w-full aspect-[16/10] border border-gray-300 rounded-lg overflow-hidden">
                <Image
                  src={`${IMAGE_DIR}/portal.svg`}
                  alt={t.celsiusEmail.portalAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="text-gray-600 mt-2">
                {t.celsiusEmail.portalCaption}
              </p>

              <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {t.celsiusEmail.portalQuestion}
                </h3>

                <div className="space-y-3">
                  {PORTAL_OPTIONS.map((option) => (
                    <label
                      key={option}
                      className={`flex items-start p-3 border rounded-lg cursor-pointer hover:bg-white ${
                        portalAnswer === option
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="celsius-portal"
                        value={option}
                        checked={portalAnswer === option}
                        onChange={() => setPortalAnswer(option)}
                        className="mr-3 mt-1"
                      />
                      <span className="font-medium">
                        {t.celsiusEmail.portalOptions[option]}
                      </span>
                    </label>
                  ))}
                </div>

                <button
                  onClick={handlePortalAnswer}
                  disabled={!portalAnswer}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
                >
                  {t.celsiusEmail.submitButton}
                </button>
              </div>
            </>
          )}

          {/* Nudge: right instinct, incomplete action */}
          {showNudge && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
              <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-gray-800">
                <h2 className="text-xl font-bold mb-2 text-amber-600">
                  {t.celsiusEmail.nudgeTitle}
                </h2>
                <p className="mb-4">{t.celsiusEmail.nudgeBody}</p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setShowNudge(false)}
                >
                  {t.celsiusEmail.closeButton}
                </button>
              </div>
            </div>
          )}

          {/* Failure: wallet connected */}
          {showFail && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
              <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-gray-800">
                <h2 className="text-xl font-bold mb-2 text-red-600">
                  {t.celsiusEmail.failTitle}
                </h2>
                <p className="mb-4">{t.celsiusEmail.failBody}</p>
                <div className="bg-red-50 border-l-4 border-red-400 p-3 mb-4 text-sm">
                  <p className="font-bold mb-1">{t.celsiusEmail.lootTitle}</p>
                  <ul className="space-y-1">
                    {t.celsiusEmail.loot.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => {
                    setShowFail(false);
                    setPortalAnswer("");
                  }}
                >
                  {t.celsiusEmail.closeButton}
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
        challengeKey="celsius-email-phishing"
        successContent={
          <CelsiusEmailPhishingSuccessContent recovered={recovered} />
        }
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
          font-weight: bold;
          text-align: center;
          border: 1px solid #ef9a9a;
        }
      `}</style>
    </>
  );
}
