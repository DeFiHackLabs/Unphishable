"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ChallengeCompletionModal from "@/app/components/ChallengeCompletionModal";
import SessionKeyPhishingSuccessContent from "./SessionKeyPhishingSuccessContent";

const IMG_DIR = "/images/challenges/session-key-phishing";

type Rect = { x: number; y: number; w: number; h: number };

// Hotspots are written in each SVG's own viewBox units and converted to % at
// render time, so they stay glued to the artwork at any width.
const SHEET_ART = { w: 900, h: 600 };
const SHEET_SPOTS: Record<"raw" | "reject" | "sign", Rect> = {
  raw: { x: 272, y: 438, w: 356, h: 36 },
  reject: { x: 272, y: 488, w: 170, h: 44 },
  sign: { x: 458, y: 488, w: 170, h: 44 },
};

// One entry per clickable region of payload.svg, in the same order as
// t.sessionKeyPhishing.lines.
const PAYLOAD_ART = { w: 760, h: 560 };
const PAYLOAD_LINES = [
  { y: 121, h: 44, danger: false }, // account + chainId
  { y: 165, h: 22, danger: false }, // signer
  { y: 187, h: 44, danger: true }, // validAfter / validUntil: 30 days
  { y: 231, h: 22, danger: false }, // paymaster
  { y: 275, h: 22, danger: false }, // permissions[0]: router + swap selector
  { y: 297, h: 22, danger: true }, // permissions[1]: wildcard target + selector
  { y: 319, h: 22, danger: true }, // permissions[2]: installModule on the account itself
  { y: 385, h: 44, danger: true }, // spendingLimits: uint256 max
];
const TOTAL_FLAGS = PAYLOAD_LINES.filter((line) => line.danger).length;

// What a selector directory would tell you. Facts only, no verdicts.
const SELECTOR_LOOKUP = [
  {
    selector: "0x38ed1739",
    signature: "swapExactTokensForTokens(uint256,uint256,address[],address,uint256)",
  },
  { selector: "0x00000000", signature: "" },
  { selector: "0x9517e29f", signature: "installModule(uint256,address,bytes)" },
];

const CORRECT_OPTION = 2;

const toBox = (rect: Rect, art: { w: number; h: number }) => ({
  left: `${(rect.x / art.w) * 100}%`,
  top: `${(rect.y / art.h) * 100}%`,
  width: `${(rect.w / art.w) * 100}%`,
  height: `${(rect.h / art.h) * 100}%`,
});

export function SessionKeyPhishing() {
  const { t } = useLanguage();
  const s = t.sessionKeyPhishing;

  const [step, setStep] = useState(1);
  const [rejected, setRejected] = useState(false);
  const [flagged, setFlagged] = useState<boolean[]>(PAYLOAD_LINES.map(() => false));
  // Snapshot of the flags at the last "Submit audit", so feedback does not move while the player edits.
  const [audited, setAudited] = useState<boolean[] | null>(null);
  const [showTools, setShowTools] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const found = PAYLOAD_LINES.filter((line, i) => line.danger && audited?.[i]).length;
  const falseAlarms = PAYLOAD_LINES.filter((line, i) => !line.danger && audited?.[i]).length;
  const auditPassed = found === TOTAL_FLAGS && falseAlarms === 0;

  const toggleFlag = (index: number) => {
    setFlagged((prev) => prev.map((value, i) => (i === index ? !value : value)));
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    if (selectedAnswer === CORRECT_OPTION) {
      setShowCompletionModal(true);
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setWarning(s.options[selectedAnswer].wrong);
    }
  };

  return (
    <>
      <div ref={topRef} />
      {!showCompletionModal && (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow relative text-gray-800">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 mb-6 text-center">
            <h1 className="challenge-title">{s.title}</h1>
            <p className="challenge-description">{s.subtitle}</p>
            <div className="warning-banner">{s.warning}</div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {s.stepLabels.map((label, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  i + 1 === step
                    ? "bg-blue-600 text-white"
                    : i + 1 < step
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500"
                }`}
              >
                {label}
              </span>
            ))}
          </div>

          {/* Step 1: the friendly signing sheet */}
          {step === 1 && (
            <>
              <p className="text-lg text-gray-700 mb-4">{s.scenarioDescription}</p>
              <div className="relative w-full aspect-[3/2] border rounded-lg overflow-hidden">
                <Image
                  src={`${IMG_DIR}/sheet.svg`}
                  alt={s.sheetAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
                <button
                  type="button"
                  aria-label={s.hotspotRaw}
                  className="absolute rounded-lg cursor-pointer hover:bg-indigo-500/15"
                  style={toBox(SHEET_SPOTS.raw, SHEET_ART)}
                  onClick={() => setStep(2)}
                />
                <button
                  type="button"
                  aria-label={s.hotspotReject}
                  className="absolute rounded-lg cursor-pointer hover:bg-indigo-500/15"
                  style={toBox(SHEET_SPOTS.reject, SHEET_ART)}
                  onClick={() => setRejected(true)}
                />
                <button
                  type="button"
                  aria-label={s.hotspotSign}
                  className="absolute rounded-lg cursor-pointer hover:bg-white/20"
                  style={toBox(SHEET_SPOTS.sign, SHEET_ART)}
                  onClick={() => setWarning(s.blindSignWarning)}
                />
              </div>
              <p className="mt-3 text-sm text-gray-500 text-center">{s.sheetHint}</p>
              {rejected && (
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-gray-700">
                  {s.rejectHint}
                </div>
              )}
              <div className="flex justify-center mt-4">
                <button
                  className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
                  onClick={() => setStep(2)}
                >
                  {s.openRawButton}
                </button>
              </div>
            </>
          )}

          {/* Step 2: scope audit on the expanded payload */}
          {step === 2 && (
            <>
              <h2 className="text-2xl font-bold mb-2">{s.auditTitle}</h2>
              <p className="text-gray-700 mb-4">
                {s.auditDescription.replace("{total}", String(TOTAL_FLAGS))}
              </p>
              {/* min width keeps the payload readable on phones (it scrolls sideways instead of shrinking) */}
              <div className="overflow-x-auto">
                <div className="relative min-w-[640px] aspect-[19/14] border rounded-lg overflow-hidden">
                  <Image
                    src={`${IMG_DIR}/payload.svg`}
                    alt={s.payloadAlt}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                  {PAYLOAD_LINES.map((line, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={s.lines[i].label}
                      aria-pressed={flagged[i]}
                      onClick={() => toggleFlag(i)}
                      className={`absolute flex items-start rounded cursor-pointer transition-colors ${
                        flagged[i] ? "bg-red-500/20 ring-2 ring-inset ring-red-500" : "hover:bg-blue-500/10"
                      }`}
                      style={toBox({ x: 26, y: line.y, w: 708, h: line.h }, PAYLOAD_ART)}
                    >
                      {flagged[i] && (
                        <span className="ml-0.5 mt-0.5 px-0.5 rounded-sm bg-red-100 text-xs leading-none">
                          🚩
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="text-blue-700 font-semibold underline"
                  onClick={() => setShowTools(!showTools)}
                >
                  {s.toolsButton}
                </button>
                {showTools && (
                  <div className="mt-2 p-4 bg-gray-900 text-gray-100 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto whitespace-nowrap space-y-1">
                    {SELECTOR_LOOKUP.map((row) => (
                      <div key={row.selector}>
                        {row.selector} → {row.signature || s.toolNoMatch}
                      </div>
                    ))}
                    <div className="pt-2">
                      1775865600 − 1773273600 = 2,592,000 {s.toolDuration}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-4">
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
                  onClick={() => setAudited(flagged)}
                >
                  {s.auditSubmit}
                </button>
                <span className="text-gray-600">
                  {s.flaggedCount.replace("{n}", String(flagged.filter(Boolean).length))}
                </span>
              </div>

              {audited && (
                <div
                  className={`mt-4 p-4 rounded-lg border ${
                    auditPassed ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-300"
                  }`}
                >
                  <p className="font-bold">
                    {s.auditScore
                      .replace("{found}", String(found))
                      .replace("{total}", String(TOTAL_FLAGS))
                      .replace("{false}", String(falseAlarms))}
                  </p>
                  <p className="mb-3">{auditPassed ? s.auditPerfect : s.auditKeepLooking}</p>
                  <ul className="space-y-3">
                    {PAYLOAD_LINES.map(
                      (line, i) =>
                        audited[i] && (
                          <li key={i} className="text-sm">
                            <p className="font-semibold">
                              {line.danger ? s.verdictHit : s.verdictMiss} · {s.lines[i].label}
                            </p>
                            <p
                              className="audit-verdict"
                              dangerouslySetInnerHTML={{ __html: s.lines[i].verdict }}
                            />
                          </li>
                        )
                    )}
                  </ul>
                  {auditPassed && (
                    <button
                      className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold"
                      onClick={() => setStep(3)}
                    >
                      {s.continueButton}
                    </button>
                  )}
                </div>
              )}
            </>
          )}

          {/* Step 3: pick the grant you would actually sign */}
          {step === 3 && (
            <>
              <h2 className="text-2xl font-bold mb-2">{s.decisionTitle}</h2>
              <p className="text-gray-700 mb-4">{s.decisionDescription}</p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      {s.grantHeaders.map((header, i) => (
                        <th key={i} className="border border-gray-300 p-2 text-left">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.grantRows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className={`border border-gray-300 p-2 ${
                              c === 0 ? "font-semibold bg-gray-50" : ""
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4">{s.questionTitle}</h3>
                <div className="space-y-3">
                  {s.options.map((option, i) => (
                    <label
                      key={i}
                      className="flex items-start p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-white"
                    >
                      <input
                        type="radio"
                        name="session-key-choice"
                        checked={selectedAnswer === i}
                        onChange={() => setSelectedAnswer(i)}
                        className="mr-3 mt-1"
                      />
                      <span className="font-medium">{option.text}</span>
                    </label>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
                  >
                    {s.submitButton}
                  </button>
                  <button
                    type="button"
                    className="text-blue-700 underline"
                    onClick={() => setStep(2)}
                  >
                    {s.backButton}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Warning Modal */}
          {warning && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
              <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-2 text-red-600">{s.warningModalTitle}</h2>
                <p className="mb-4 text-gray-700">{warning}</p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setWarning(null)}
                >
                  {s.closeButton}
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
        challengeKey="session-key-phishing"
        successContent={<SessionKeyPhishingSuccessContent />}
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
        .audit-verdict :global(code) {
          font-family: ui-monospace, "SF Mono", Menlo, monospace;
          font-size: 0.9em;
          background: rgba(0, 0, 0, 0.06);
          padding: 0 0.25em;
          border-radius: 3px;
        }
      `}</style>
    </>
  );
}
