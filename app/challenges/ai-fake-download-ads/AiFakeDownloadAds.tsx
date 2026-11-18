"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { FiCopy, FiLock } from "react-icons/fi";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ChallengeCompletionModal from "@/app/components/ChallengeCompletionModal";
import AiFakeDownloadAdsSuccessContent from "./AiFakeDownloadAdsSuccessContent";

const IMAGE_DIR = "/images/challenges/ai-fake-download-ads";

// Clickable rows on search.svg (viewBox 800x500), as percentages of the image.
// `shown` is the domain the result displays, `lands` is where the click really ends up.
// Every domain in this file is defanged on purpose.
const RESULTS = [
  { top: "31%", height: "25%", shown: "brew[.]sh", lands: "brewe[.]sh" },
  { top: "57.6%", height: "20%", shown: "brew[.]sh", lands: "brew[.]sh" },
  { top: "79.2%", height: "16.8%", shown: "github[.]com", lands: "github[.]com" },
];

const OPTIONS = ["ad", "organic", "typed", "chat"] as const;
type Option = (typeof OPTIONS)[number];
type WrongKey = Exclude<Option, "typed"> | "fakeTab";

// Both tabs show the same cut-off command box. Truncated and defanged: not runnable.
const SNIPPET = '/bin/bash -c "$(curl -fsSL hxxps://…';
const TABS = [
  { id: "a", domain: "brewe[.]sh" },
  { id: "b", domain: "brew[.]sh" },
];
const REAL_TAB = "b";

export function AiFakeDownloadAds() {
  const { t } = useLanguage();

  const [step, setStep] = useState(1);
  const [traced, setTraced] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<Option | "">("");
  const [selectedTab, setSelectedTab] = useState("");
  const [wrongKey, setWrongKey] = useState<WrongKey | null>(null);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === "") return;
    if (selectedAnswer === "typed") {
      setStep(2);
      scrollToTop();
    } else {
      setWrongKey(selectedAnswer);
    }
  };

  const handlePaste = () => {
    if (selectedTab === REAL_TAB) {
      setShowCompletionModal(true);
      scrollToTop();
    } else {
      setWrongKey("fakeTab");
    }
  };

  // The stealer only "runs" when the player actually pasted the lookalike's command.
  const wasDrained = wrongKey === "ad" || wrongKey === "fakeTab";

  return (
    <>
      <div ref={topRef} />
      {!showCompletionModal && (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow relative text-gray-800">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 mb-6 text-center">
            <h1 className="challenge-title">{t.aiFakeDownloadAds.title}</h1>
            <p className="challenge-description">
              {t.aiFakeDownloadAds.subtitle}
            </p>
            <div className="warning-banner">
              {t.aiFakeDownloadAds.warning}
            </div>
          </div>

          {/* Progress pills */}
          <div className="flex justify-center gap-2 mb-6 text-sm font-semibold">
            {t.aiFakeDownloadAds.steps.map((label, index) => (
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

          {/* Round 1: the search results page */}
          {step === 1 && (
            <>
              <p className="text-lg text-gray-700 mb-3">
                {t.aiFakeDownloadAds.scenario}
              </p>
              <p className="text-gray-600 mb-3">
                {t.aiFakeDownloadAds.traceHint}
              </p>

              <div className="relative w-full aspect-[16/10] border border-gray-300 rounded-t-lg overflow-hidden">
                <Image
                  src={`${IMAGE_DIR}/search.svg`}
                  alt={t.aiFakeDownloadAds.searchAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
                {RESULTS.map((result, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`${t.aiFakeDownloadAds.traceAria} ${index + 1}`}
                    className={`absolute rounded-md border-2 cursor-pointer transition-colors ${
                      traced === index
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-transparent hover:border-blue-400"
                    }`}
                    style={{
                      left: "17.75%",
                      width: "78.5%",
                      top: result.top,
                      height: result.height,
                    }}
                    onMouseEnter={() => setTraced(index)}
                    onFocus={() => setTraced(index)}
                    onClick={() => setTraced(index)}
                  />
                ))}
              </div>

              {/* Status bar: what the result shows vs. where the click lands */}
              <div className="border border-t-0 border-gray-300 rounded-b-lg bg-gray-100 px-4 py-3 text-sm min-h-[4.5rem] flex items-center">
                {traced === null ? (
                  <span className="text-gray-500">
                    {t.aiFakeDownloadAds.tracePlaceholder}
                  </span>
                ) : (
                  <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 items-baseline">
                    <span className="text-gray-500">
                      {t.aiFakeDownloadAds.traceShown}
                    </span>
                    <span className="font-mono text-gray-900">
                      {RESULTS[traced].shown}
                    </span>
                    <span className="text-gray-500">
                      {t.aiFakeDownloadAds.traceLands}
                    </span>
                    <span className="font-mono font-bold text-gray-900">
                      {RESULTS[traced].lands}
                    </span>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {t.aiFakeDownloadAds.defangNote}
              </p>

              <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {t.aiFakeDownloadAds.questionTitle}
                </h3>
                <p className="mb-4 text-gray-600">
                  {t.aiFakeDownloadAds.questionDescription}
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
                        name="install-source"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => setSelectedAnswer(option)}
                        className="mr-3 mt-1"
                      />
                      <span className="font-medium">
                        {t.aiFakeDownloadAds.options[option]}
                      </span>
                    </label>
                  ))}
                </div>

                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
                >
                  {t.aiFakeDownloadAds.submitButton}
                </button>
              </div>
            </>
          )}

          {/* Round 2: the paste moment */}
          {step === 2 && (
            <>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                {t.aiFakeDownloadAds.roundTwoTitle}
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {t.aiFakeDownloadAds.roundTwoIntro}
              </p>

              <div className="relative w-full aspect-[16/10] border border-gray-300 rounded-lg overflow-hidden">
                <Image
                  src={`${IMAGE_DIR}/terminal.svg`}
                  alt={t.aiFakeDownloadAds.terminalAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="text-gray-600 mt-2">
                {t.aiFakeDownloadAds.terminalCaption}
              </p>

              <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {t.aiFakeDownloadAds.tabsQuestion}
                </h3>
                <p className="mb-4 text-gray-600">
                  {t.aiFakeDownloadAds.tabsHint}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {TABS.map((tab) => (
                    <label
                      key={tab.id}
                      className={`block bg-white rounded-lg border-2 overflow-hidden cursor-pointer ${
                        selectedTab === tab.id
                          ? "border-blue-500"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {/* Mini browser chrome */}
                      <div className="flex items-center gap-2 bg-gray-200 px-3 py-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        <span className="flex-1 flex items-center gap-2 ml-1 bg-white rounded-full px-3 py-1 font-mono text-sm text-gray-900">
                          <FiLock className="text-gray-500 shrink-0" />
                          {tab.domain}
                        </span>
                      </div>
                      <div className="p-4">
                        <div className="text-lg font-bold text-gray-900">
                          🍺 Homebrew
                        </div>
                        <div className="text-sm text-gray-600 mb-3">
                          {t.aiFakeDownloadAds.tabTagline}
                        </div>
                        <div className="text-xs font-semibold text-gray-500 mb-1">
                          {t.aiFakeDownloadAds.tabInstall}
                        </div>
                        <div className="flex items-center justify-between gap-2 bg-gray-900 text-gray-100 font-mono text-xs rounded px-3 py-2">
                          <span className="truncate">{SNIPPET}</span>
                          <FiCopy className="shrink-0" />
                        </div>
                        <div className="flex items-center mt-4 font-semibold text-gray-800">
                          <input
                            type="radio"
                            name="tab-choice"
                            value={tab.id}
                            checked={selectedTab === tab.id}
                            onChange={() => setSelectedTab(tab.id)}
                            className="mr-2"
                          />
                          {t.aiFakeDownloadAds.tabLabel} {tab.id.toUpperCase()}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  {t.aiFakeDownloadAds.defangNote}
                </p>

                <button
                  onClick={handlePaste}
                  disabled={!selectedTab}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
                >
                  {t.aiFakeDownloadAds.pasteButton}
                </button>
              </div>
            </>
          )}

          {/* Warning Modal */}
          {wrongKey && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
              <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-gray-800">
                <h2 className="text-xl font-bold mb-2 text-red-600">
                  {t.aiFakeDownloadAds.wrong[wrongKey].title}
                </h2>
                <p className="mb-4">
                  {t.aiFakeDownloadAds.wrong[wrongKey].content}
                </p>
                {wasDrained && (
                  <div className="bg-red-50 border-l-4 border-red-400 p-3 mb-4 text-sm">
                    <p className="font-bold mb-1">
                      {t.aiFakeDownloadAds.lootTitle}
                    </p>
                    <ul className="space-y-1">
                      {t.aiFakeDownloadAds.loot.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setWrongKey(null)}
                >
                  {t.aiFakeDownloadAds.closeButton}
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
        challengeKey="ai-fake-download-ads"
        successContent={<AiFakeDownloadAdsSuccessContent />}
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
