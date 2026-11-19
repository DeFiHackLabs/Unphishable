"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ChallengeCompletionModal from "@/app/components/ChallengeCompletionModal";
import Eip7702PhishingSuccessContent from "./Eip7702PhishingSuccessContent";

const IMAGE_DIR = "/images/challenges/eip-7702-phishing";

// Inspectable rows on request.svg (viewBox 800x500), as percentages of the image.
// Each band covers one row of the mock signature request; the text for both sides
// lives in the locale files.
const ROWS = [
  { key: "type", top: "26%" },
  { key: "delegate", top: "35.6%" },
  { key: "chain", top: "45.2%" },
  { key: "nonce", top: "54.8%" },
  { key: "fee", top: "64.4%" },
  { key: "amount", top: "74%" },
] as const;

const ROW_HEIGHT = "9.6%";

type RowKey = (typeof ROWS)[number]["key"];

const OPTIONS = ["oneSwap", "approval", "delegation", "nothing"] as const;
type Option = (typeof OPTIONS)[number];
type WrongKey = Exclude<Option, "delegation">;

export function Eip7702Phishing() {
  const { t } = useLanguage();

  const [step, setStep] = useState(1);
  const [inspected, setInspected] = useState<RowKey | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<Option | "">("");
  const [wrongKey, setWrongKey] = useState<WrongKey | null>(null);
  const [showDecision, setShowDecision] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === "") return;
    if (selectedAnswer === "delegation") {
      setShowDecision(true);
    } else {
      setWrongKey(selectedAnswer);
    }
  };

  return (
    <>
      <div ref={topRef} />
      {!showCompletionModal && (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow relative text-gray-800">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 mb-6 text-center">
            <h1 className="challenge-title">{t.eip7702.title}</h1>
            <p className="challenge-description">{t.eip7702.subtitle}</p>
            <div className="warning-banner">{t.eip7702.warning}</div>
          </div>

          {/* Progress pills */}
          <div className="flex justify-center gap-2 mb-6 text-sm font-semibold">
            {t.eip7702.steps.map((label, index) => (
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

          {/* Round 1: what the mechanism actually does */}
          {step === 1 && (
            <>
              <p className="text-lg text-gray-700 mb-4">
                {t.eip7702.primerIntro}
              </p>

              <div className="relative w-full aspect-[800/420] border border-gray-300 rounded-lg overflow-hidden bg-white">
                <Image
                  src={`${IMAGE_DIR}/delegation.svg`}
                  alt={t.eip7702.diagramAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {t.eip7702.primerFactsTitle}
                </h3>
                <ul className="list-disc pl-6 space-y-3">
                  {t.eip7702.primerFacts.map((fact, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: fact }} />
                  ))}
                </ul>
                <p className="text-xs text-gray-500 mt-4">
                  {t.eip7702.specNote}
                </p>
              </div>

              <button
                onClick={() => {
                  setStep(2);
                  scrollToTop();
                }}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
              >
                {t.eip7702.connectWallet}
              </button>
            </>
          )}

          {/* Round 2: the request itself */}
          {step === 2 && (
            <>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                {t.eip7702.dappTitle}
              </h2>
              <p className="text-lg text-gray-700 mb-3">
                {t.eip7702.dappIntro}
              </p>
              <p className="text-gray-600 mb-3">{t.eip7702.inspectHint}</p>

              <div className="relative w-full aspect-[16/10] border border-gray-300 rounded-t-lg overflow-hidden">
                <Image
                  src={`${IMAGE_DIR}/request.svg`}
                  alt={t.eip7702.requestAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
                {ROWS.map((row) => (
                  <button
                    key={row.key}
                    type="button"
                    aria-label={`${t.eip7702.inspectAria}: ${row.key}`}
                    className={`absolute rounded-md border-2 cursor-pointer transition-colors ${
                      inspected === row.key
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-transparent hover:border-blue-400"
                    }`}
                    style={{
                      left: "7.5%",
                      width: "85%",
                      top: row.top,
                      height: ROW_HEIGHT,
                    }}
                    onMouseEnter={() => setInspected(row.key)}
                    onFocus={() => setInspected(row.key)}
                    onClick={() => setInspected(row.key)}
                  />
                ))}
              </div>

              {/* Row reader */}
              <div className="border border-t-0 border-gray-300 rounded-b-lg bg-gray-100 px-4 py-3 text-sm min-h-[6rem] flex items-center">
                {inspected === null ? (
                  <span className="text-gray-500">
                    {t.eip7702.inspectPlaceholder}
                  </span>
                ) : (
                  <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 items-baseline">
                    <span className="text-gray-500 whitespace-nowrap">
                      {t.eip7702.inspectField}
                    </span>
                    <span className="font-mono text-gray-900">
                      {t.eip7702.rows[inspected].field}
                    </span>
                    <span className="text-gray-500 whitespace-nowrap">
                      {t.eip7702.inspectMeaning}
                    </span>
                    <span className="text-gray-900">
                      {t.eip7702.rows[inspected].meaning}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {t.eip7702.questionTitle}
                </h3>
                <p className="mb-4 text-gray-600">
                  {t.eip7702.questionDescription}
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
                        name="eip7702-meaning"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => setSelectedAnswer(option)}
                        className="mr-3 mt-1"
                      />
                      <span className="font-medium">
                        {t.eip7702.options[option]}
                      </span>
                    </label>
                  ))}
                </div>

                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
                >
                  {t.eip7702.submitButton}
                </button>
              </div>

              {/* The request is still open: sign or reject */}
              {showDecision && (
                <div className="mt-6 p-6 bg-white rounded-lg border-2 border-blue-500">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {t.eip7702.decisionTitle}
                  </h3>
                  <p className="mb-4 text-gray-600">
                    {t.eip7702.decisionBody}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setShowFail(true)}
                      className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
                    >
                      {t.eip7702.signButton}
                    </button>
                    <button
                      onClick={() => {
                        setShowCompletionModal(true);
                        scrollToTop();
                      }}
                      className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 font-semibold"
                    >
                      {t.eip7702.rejectButton}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Wrong reading of the request */}
          {wrongKey && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
              <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-gray-800">
                <h2 className="text-xl font-bold mb-2 text-red-600">
                  {t.eip7702.wrong[wrongKey].title}
                </h2>
                <p className="mb-4">{t.eip7702.wrong[wrongKey].content}</p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setWrongKey(null)}
                >
                  {t.eip7702.closeButton}
                </button>
              </div>
            </div>
          )}

          {/* Signed it */}
          {showFail && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
              <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-gray-800">
                <h2 className="text-xl font-bold mb-2 text-red-600">
                  {t.eip7702.failTitle}
                </h2>
                <p className="mb-4">{t.eip7702.failBody}</p>
                <div className="bg-red-50 border-l-4 border-red-400 p-3 mb-4 text-sm">
                  <p className="font-bold mb-1">{t.eip7702.lootTitle}</p>
                  <ul className="space-y-1">
                    {t.eip7702.loot.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setShowFail(false)}
                >
                  {t.eip7702.closeButton}
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
        challengeKey="eip-7702-phishing"
        successContent={<Eip7702PhishingSuccessContent />}
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
