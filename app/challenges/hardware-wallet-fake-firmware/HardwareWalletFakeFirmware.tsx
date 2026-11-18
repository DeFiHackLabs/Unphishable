"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiCheck, FiSearch } from "react-icons/fi";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ChallengeCompletionModal from "@/app/components/ChallengeCompletionModal";
import HardwareWalletFakeFirmwareSuccessContent from "./HardwareWalletFakeFirmwareSuccessContent";

const IMAGE_DIR = "/images/challenges/hardware-wallet-fake-firmware";

type ClueId = "sender" | "greeting" | "link";
type WarningId = "reply" | "typed" | "verify";

// Clickable regions over email.svg, as percentages of its 800x600 viewBox.
const CLUES: { id: ClueId; spot: React.CSSProperties }[] = [
  { id: "sender", spot: { left: "21.25%", top: "23%", width: "52.5%", height: "7%" } },
  { id: "greeting", spot: { left: "23.25%", top: "41.33%", width: "72.25%", height: "28.33%" } },
  { id: "link", spot: { left: "23.25%", top: "70.67%", width: "72.25%", height: "9%" } },
];

const ANSWERS = ["update", "bookmark", "reply"] as const;

// The 24 word boxes drawn in update-page.svg: 4 columns x 6 rows in an 800x600 viewBox,
// first box at (124, 268), 129x30 each, column step 141, row step 38.
const wordBoxStyle = (index: number): React.CSSProperties => ({
  left: `${(124 + (index % 4) * 141) / 8}%`,
  top: `${(268 + Math.floor(index / 4) * 38) / 6}%`,
  width: `${129 / 8}%`,
  height: "5%",
  paddingLeft: "3.5%",
});

// The "Verify my device" button drawn in update-page.svg.
const VERIFY_SPOT: React.CSSProperties = { left: "15.5%", top: "87.67%", width: "69%", height: "7%" };

export function HardwareWalletFakeFirmware() {
  const { t } = useLanguage();

  const [stage, setStage] = useState<"inbox" | "page">("inbox");
  const [inspected, setInspected] = useState<ClueId[]>([]);
  const [activeClue, setActiveClue] = useState<ClueId | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const [warning, setWarning] = useState<WarningId | null>(null);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  // Step 2: the fake download runs to 100% before the page asks for the words.
  useEffect(() => {
    if (stage !== "page" || progress >= 100) return;
    const timer = setTimeout(() => setProgress((p) => Math.min(100, p + 4)), 90);
    return () => clearTimeout(timer);
  }, [stage, progress]);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const inspect = (id: ClueId) => {
    setActiveClue(id);
    setInspected((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleWin = () => {
    setShowCompletionModal(true);
    scrollToTop();
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === "bookmark") {
      handleWin();
    } else if (selectedAnswer === "update") {
      setStage("page");
      scrollToTop();
    } else {
      setWarning("reply");
    }
  };

  return (
    <>
      <div ref={topRef} />
      {!showCompletionModal && (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow relative">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 mb-8 text-center">
            <h1 className="challenge-title">{t.hardwareWalletFakeFirmware.title}</h1>
            <p className="challenge-description">
              {t.hardwareWalletFakeFirmware.subtitle}
            </p>
            <div className="warning-banner">
              {t.hardwareWalletFakeFirmware.warning}
            </div>
          </div>

          {stage === "inbox" ? (
            <>
              {/* Step 1: the email */}
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {t.hardwareWalletFakeFirmware.stepInbox}
              </h2>
              <p className="text-gray-700 mb-4">
                {t.hardwareWalletFakeFirmware.scenarioDescription}
              </p>

              <div className="relative w-full aspect-[4/3] border rounded-lg overflow-hidden">
                <Image
                  src={`${IMAGE_DIR}/email.svg`}
                  alt={t.hardwareWalletFakeFirmware.emailAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
                {CLUES.map((clue, index) => (
                  <button
                    key={clue.id}
                    type="button"
                    style={clue.spot}
                    onClick={() => inspect(clue.id)}
                    aria-label={t.hardwareWalletFakeFirmware.clues[clue.id].button}
                    className={`absolute rounded-md border-2 border-dashed transition-colors cursor-zoom-in ${
                      activeClue === clue.id
                        ? "border-amber-500 bg-amber-300/20"
                        : "border-transparent hover:border-amber-400 hover:bg-amber-200/20"
                    }`}
                  >
                    <span
                      className={`absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white shadow ${
                        inspected.includes(clue.id) ? "bg-green-600" : "bg-amber-500 animate-pulse"
                      }`}
                    >
                      {inspected.includes(clue.id) ? <FiCheck /> : index + 1}
                    </span>
                  </button>
                ))}
              </div>

              {/* Detective toolkit */}
              <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-gray-800">
                    {t.hardwareWalletFakeFirmware.detectiveTitle}
                  </h3>
                  <span className="text-sm font-semibold text-amber-700">
                    {t.hardwareWalletFakeFirmware.cluesFound} {inspected.length}/{CLUES.length}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {t.hardwareWalletFakeFirmware.detectiveHint}
                </p>
                <div className="flex flex-wrap gap-2">
                  {CLUES.map((clue, index) => (
                    <button
                      key={clue.id}
                      type="button"
                      onClick={() => inspect(clue.id)}
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium text-left ${
                        activeClue === clue.id
                          ? "border-amber-500 bg-amber-200 text-amber-900"
                          : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {inspected.includes(clue.id) ? (
                        <FiCheck className="shrink-0 text-green-600" />
                      ) : (
                        <FiSearch className="shrink-0" />
                      )}
                      {index + 1}. {t.hardwareWalletFakeFirmware.clues[clue.id].button}
                    </button>
                  ))}
                </div>
                {activeClue && (
                  <div className="mt-3 rounded-md border border-amber-300 bg-white p-3">
                    <p className="font-semibold text-gray-800">
                      {t.hardwareWalletFakeFirmware.clues[activeClue].title}
                    </p>
                    <p className="my-2 break-all rounded bg-gray-900 px-3 py-2 font-mono text-sm text-amber-200">
                      {t.hardwareWalletFakeFirmware.clues[activeClue].evidence}
                    </p>
                    <p className="text-sm text-gray-700">
                      {t.hardwareWalletFakeFirmware.clues[activeClue].body}
                    </p>
                  </div>
                )}
              </div>

              {/* Multiple Choice Question */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {t.hardwareWalletFakeFirmware.questionTitle}
                </h3>
                <p className="mb-4 text-gray-600">
                  {t.hardwareWalletFakeFirmware.questionDescription}
                </p>
                <div className="space-y-3">
                  {ANSWERS.map((answer) => (
                    <label
                      key={answer}
                      className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 text-gray-800"
                    >
                      <input
                        type="radio"
                        name="firmware-choice"
                        value={answer}
                        checked={selectedAnswer === answer}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        className="mr-3 shrink-0"
                      />
                      <span className="font-medium">
                        {t.hardwareWalletFakeFirmware.options[answer]}
                      </span>
                    </label>
                  ))}
                </div>
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
                >
                  {t.hardwareWalletFakeFirmware.submitButton}
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Step 2: the fake update page */}
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {t.hardwareWalletFakeFirmware.stepPage}
              </h2>
              <p className="text-gray-700 mb-4">
                {progress < 100
                  ? t.hardwareWalletFakeFirmware.pageLoadingText
                  : t.hardwareWalletFakeFirmware.pageReadyText}
              </p>

              <div className="relative w-full aspect-[4/3] border rounded-lg overflow-hidden">
                <Image
                  src={`${IMAGE_DIR}/update-page.svg`}
                  alt={t.hardwareWalletFakeFirmware.pageAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
                {progress < 100 ? (
                  <div className="absolute inset-x-0 bottom-0 top-[21.2%] flex flex-col items-center justify-center bg-[#f5f7fa] px-6 text-center">
                    <p className="font-semibold text-gray-800">
                      {t.hardwareWalletFakeFirmware.downloading} {progress}%
                    </p>
                    <div className="mt-3 h-2 w-2/3 overflow-hidden rounded-full bg-gray-200">
                      <div className="h-full bg-green-600" style={{ width: `${progress}%` }} />
                    </div>
                    <p className="mt-3 text-sm text-gray-500">
                      {t.hardwareWalletFakeFirmware.doNotClose}
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Live inputs over the drawn grid. Nothing typed is ever kept: the value stays empty. */}
                    {Array.from({ length: 24 }, (_, index) => (
                      <input
                        key={index}
                        type="text"
                        value=""
                        autoFocus={index === 0}
                        autoComplete="off"
                        spellCheck={false}
                        aria-label={`${t.hardwareWalletFakeFirmware.wordLabel} ${index + 1}`}
                        onChange={(e) => {
                          if (e.target.value) setWarning("typed");
                        }}
                        style={wordBoxStyle(index)}
                        className="word-box"
                      />
                    ))}
                    <button
                      type="button"
                      style={VERIFY_SPOT}
                      onClick={() => setWarning("verify")}
                      aria-label={t.hardwareWalletFakeFirmware.verifyButton}
                      className="absolute rounded-md cursor-pointer hover:bg-white/15"
                    />
                  </>
                )}
              </div>

              {progress >= 100 && (
                <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {t.hardwareWalletFakeFirmware.decisionTitle}
                  </h3>
                  <p className="mb-4 text-gray-600">
                    {t.hardwareWalletFakeFirmware.decisionDescription}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setWarning("verify")}
                      className="flex-1 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
                    >
                      {t.hardwareWalletFakeFirmware.verifyButton}
                    </button>
                    <button
                      onClick={handleWin}
                      className="flex-1 px-6 py-3 bg-white border-2 border-red-500 text-red-600 rounded hover:bg-red-50 font-semibold"
                    >
                      {t.hardwareWalletFakeFirmware.refuseButton}
                    </button>
                  </div>
                  <p className="mt-4 text-xs text-gray-500">
                    {t.hardwareWalletFakeFirmware.simulationNote}
                  </p>
                </div>
              )}
            </>
          )}

          {/* Warning Modal */}
          {warning && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
              <div className="bg-white p-8 rounded shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl font-bold mb-2 text-red-600">
                  {t.hardwareWalletFakeFirmware.warnings[warning].title}
                </h2>
                <p className="mb-4 text-gray-800">
                  {t.hardwareWalletFakeFirmware.warnings[warning].content}
                </p>
                {warning !== "reply" && (
                  <>
                    <p className="mb-2 font-semibold text-gray-800">
                      {t.hardwareWalletFakeFirmware.drainTimelineTitle}
                    </p>
                    <ul className="mb-4 space-y-1 border-l-4 border-red-300 pl-4 text-sm text-gray-700">
                      {t.hardwareWalletFakeFirmware.drainTimeline.map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                    </ul>
                    <p className="mb-4 rounded bg-red-50 p-3 text-sm font-semibold text-red-700">
                      {t.hardwareWalletFakeFirmware.irrelevantNote}
                    </p>
                  </>
                )}
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setWarning(null)}
                >
                  {t.hardwareWalletFakeFirmware.closeButton}
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
        challengeKey="hardware-wallet-fake-firmware"
        successContent={<HardwareWalletFakeFirmwareSuccessContent />}
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
        .word-box {
          position: absolute;
          box-sizing: border-box;
          min-width: 0;
          border: 0;
          border-radius: 5px;
          background: transparent;
          color: #111827;
          caret-color: #111827;
          font-size: 12px;
          outline: none;
          cursor: text;
        }
        .word-box:focus {
          box-shadow: 0 0 0 2px #1d6ef0;
        }
      `}</style>
    </>
  );
}
