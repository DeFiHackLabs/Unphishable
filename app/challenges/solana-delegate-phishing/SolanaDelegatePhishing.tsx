"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { FiCheck, FiSearch } from "react-icons/fi";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ChallengeCompletionModal from "@/app/components/ChallengeCompletionModal";
import SolanaDelegatePhishingSuccessContent from "./SolanaDelegatePhishingSuccessContent";
import {
  IMG,
  CLAIM_VIEW,
  CLAIM_BUTTON,
  POPUP,
  INSTRUCTIONS,
  TOKEN_ACCOUNTS,
  boxStyle,
  type LookupKey,
} from "./data";

const STAGES = ["claim", "popup", "revoke"] as const;
type Stage = (typeof STAGES)[number];

// "c" is the safe action: reject because of the Approve (delegate) instruction.
const ANSWERS = ["a", "b", "c", "d"] as const;
type Answer = (typeof ANSWERS)[number];

const HOTSPOT =
  "absolute rounded-lg cursor-pointer transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-violet-300";

export function SolanaDelegatePhishing() {
  const { t } = useLanguage();

  const [stage, setStage] = useState<Stage>("claim");
  const [expanded, setExpanded] = useState(false);
  const [openIx, setOpenIx] = useState<number | null>(null);
  const [readIx, setReadIx] = useState<number[]>([]);
  const [lookup, setLookup] = useState<LookupKey | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | "">("");
  const [showWarning, setShowWarning] = useState(false);
  const [revokeIds, setRevokeIds] = useState<string[]>([]);
  const [revokeFeedback, setRevokeFeedback] = useState<"" | "missed" | "over">("");
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const inspectorRef = useRef<HTMLDivElement>(null);

  const stageIndex = STAGES.indexOf(stage);
  const popup = expanded ? POPUP.expanded : POPUP.collapsed;
  const activeIx = openIx === null ? null : INSTRUCTIONS[openIx];

  const scrollToTop = () => topRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToQuestion = () =>
    questionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  const toggleAdvanced = () => {
    setExpanded((prev) => !prev);
    setOpenIx(null);
    setLookup(null);
  };

  const openInstruction = (index: number) => {
    setOpenIx(index);
    setLookup(null);
    setReadIx((prev) => (prev.includes(index) ? prev : [...prev, index]));
    // On narrow screens the inspector sits below the popup, so bring it into view.
    requestAnimationFrame(() =>
      inspectorRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
    );
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === "c") {
      setStage("revoke");
      scrollToTop();
    } else {
      setShowWarning(true);
    }
  };

  const toggleRevoke = (id: string) => {
    setRevokeFeedback("");
    setRevokeIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const handleRevoke = () => {
    const missed = TOKEN_ACCOUNTS.some((acc) => acc.shouldRevoke && !revokeIds.includes(acc.id));
    const over = TOKEN_ACCOUNTS.some((acc) => !acc.shouldRevoke && revokeIds.includes(acc.id));
    if (missed) {
      setRevokeFeedback("missed");
    } else if (over) {
      setRevokeFeedback("over");
    } else {
      setShowCompletionModal(true);
      scrollToTop();
    }
  };

  return (
    <>
      <div ref={topRef} />
      {!showCompletionModal && (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow relative text-gray-800">
          <div className="bg-gradient-to-r from-violet-500/10 to-teal-500/10 rounded-lg p-6 mb-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.solanaDelegatePhishing.title}</h1>
            <p className="text-xl text-gray-700 mb-6">{t.solanaDelegatePhishing.subtitle}</p>
            <div className="px-4 py-2.5 rounded border border-red-300 bg-red-50 text-red-800 font-bold">
              {t.solanaDelegatePhishing.warning}
            </div>
          </div>

          <ol className="flex flex-wrap justify-center gap-2 mb-6 text-sm">
            {t.solanaDelegatePhishing.steps.map((label, index) => (
              <li
                key={index}
                className={`px-3 py-1 rounded-full border ${
                  index === stageIndex
                    ? "bg-violet-600 text-white border-violet-600"
                    : index < stageIndex
                      ? "bg-violet-50 text-violet-700 border-violet-200"
                      : "bg-white text-gray-400 border-gray-200"
                }`}
              >
                {label}
              </li>
            ))}
          </ol>

          {/* Step 1: the lure */}
          {stage === "claim" && (
            <>
              <p className="text-xl text-gray-700 mb-6 text-center">{t.solanaDelegatePhishing.scenarioDescription}</p>
              <div className="relative w-full aspect-[16/10] border border-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={`${IMG}/claim-page.svg`}
                  alt={t.solanaDelegatePhishing.claimAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
                <button
                  type="button"
                  aria-label={t.solanaDelegatePhishing.claimButton}
                  className={HOTSPOT}
                  style={boxStyle(CLAIM_BUTTON, CLAIM_VIEW)}
                  onClick={() => setStage("popup")}
                />
              </div>
              <div className="flex justify-center mt-6">
                <button
                  className="px-6 py-3 bg-teal-600 text-white rounded hover:bg-teal-700 font-semibold cursor-pointer"
                  onClick={() => setStage("popup")}
                >
                  {t.solanaDelegatePhishing.claimButton}
                </button>
              </div>
            </>
          )}

          {/* Step 2: the wallet popup, the inspector and the decision */}
          {stage === "popup" && (
            <>
              <p className="text-xl text-gray-700 mb-6 text-center">{t.solanaDelegatePhishing.popupIntro}</p>
              <div className="flex flex-wrap justify-center items-start gap-4">
                <div className="w-full max-w-[380px]">
                  <div
                    className="relative w-full border border-gray-200 rounded-xl overflow-hidden"
                    style={{ aspectRatio: `${popup.view.w} / ${popup.view.h}` }}
                  >
                    <div key={popup.src} className="sdp-fade absolute inset-0">
                      <Image
                        src={popup.src}
                        alt={t.solanaDelegatePhishing.popupAlt}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <button
                      type="button"
                      aria-label={t.solanaDelegatePhishing.hotspots.advanced}
                      className={HOTSPOT}
                      style={boxStyle(popup.advanced, popup.view)}
                      onClick={toggleAdvanced}
                    />
                    {expanded &&
                      INSTRUCTIONS.map((ix, index) => (
                        <button
                          key={index}
                          type="button"
                          aria-label={`${t.solanaDelegatePhishing.hotspots.instruction} #${index + 1}`}
                          className={`${HOTSPOT} ${openIx === index ? "ring-2 ring-violet-400 bg-violet-400/10" : ""}`}
                          style={boxStyle(ix.box, popup.view)}
                          onClick={() => openInstruction(index)}
                        />
                      ))}
                    {(["reject", "approve"] as const).map((name) => (
                      <button
                        key={name}
                        type="button"
                        aria-label={t.solanaDelegatePhishing.hotspots[name]}
                        className={HOTSPOT}
                        style={boxStyle(popup[name], popup.view)}
                        onClick={scrollToQuestion}
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-center text-gray-500">
                    {t.solanaDelegatePhishing.popupHint}
                  </p>
                </div>

                <div
                  ref={inspectorRef}
                  className="flex-1 min-w-[260px] sticky top-24 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="font-bold text-gray-900">{t.solanaDelegatePhishing.inspector.title}</h3>
                    {expanded && (
                      <div className="flex gap-1">
                        {INSTRUCTIONS.map((_, index) => (
                          <span
                            key={index}
                            className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs ${
                              readIx.includes(index) ? "bg-violet-600 text-white" : "bg-gray-200 text-gray-500"
                            }`}
                          >
                            {readIx.includes(index) ? <FiCheck /> : index + 1}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {!expanded && <p className="text-gray-600">{t.solanaDelegatePhishing.inspector.collapsed}</p>}
                  {expanded && !activeIx && (
                    <p className="text-gray-600">{t.solanaDelegatePhishing.inspector.pickOne}</p>
                  )}
                  {activeIx && openIx !== null && (
                    <div key={openIx} className="sdp-fade">
                      <p className="font-mono text-xs text-gray-500">
                        #{openIx + 1} {activeIx.program}
                      </p>
                      <p className="font-mono font-bold text-base text-gray-900 mb-3">{activeIx.name}</p>
                      <dl className="space-y-3">
                        {activeIx.fields.map((field) => {
                          const key = field.lookup;
                          return (
                            <div key={field.label}>
                              <dt className="font-mono text-xs text-gray-500">{field.label}</dt>
                              <dd className="font-mono text-xs break-all text-gray-900">{field.value}</dd>
                              <dd className="flex flex-wrap items-center gap-x-2 text-xs text-gray-600">
                                {t.solanaDelegatePhishing.inspector.notes[field.note]}
                                {key && (
                                  <button
                                    type="button"
                                    className="inline-flex items-center gap-1 font-semibold text-violet-700 hover:underline cursor-pointer"
                                    onClick={() => setLookup(key)}
                                  >
                                    <FiSearch /> {t.solanaDelegatePhishing.inspector.lookupButton}
                                  </button>
                                )}
                              </dd>
                              {key && lookup === key && (
                                <dd className="sdp-fade mt-1 p-2 rounded border border-violet-200 bg-white text-xs">
                                  <span className="font-semibold">
                                    {t.solanaDelegatePhishing.inspector.lookupTitle}
                                  </span>{" "}
                                  {t.solanaDelegatePhishing.inspector.lookups[key]}
                                </dd>
                              )}
                            </div>
                          );
                        })}
                      </dl>
                      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-gray-500">
                        {t.solanaDelegatePhishing.inspector.whatItDoes}
                      </p>
                      <p>{t.solanaDelegatePhishing.inspector.instructions[openIx]}</p>
                    </div>
                  )}
                </div>
              </div>

              <div ref={questionRef} className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {t.solanaDelegatePhishing.questionTitle}
                </h3>
                <p className="mb-4 text-gray-600">{t.solanaDelegatePhishing.questionDescription}</p>
                <div className="space-y-3">
                  {ANSWERS.map((answer) => (
                    <label
                      key={answer}
                      className="flex items-start p-3 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
                    >
                      <input
                        type="radio"
                        name="delegate-choice"
                        value={answer}
                        checked={selectedAnswer === answer}
                        onChange={() => setSelectedAnswer(answer)}
                        className="mr-3 mt-1"
                      />
                      <span className="font-medium">{t.solanaDelegatePhishing.options[answer]}</span>
                    </label>
                  ))}
                </div>
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
                >
                  {t.solanaDelegatePhishing.submitButton}
                </button>
              </div>
            </>
          )}

          {/* Step 3: revoke the delegates that are already there */}
          {stage === "revoke" && (
            <>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 text-green-900">
                <p className="font-bold">{t.solanaDelegatePhishing.revoke.passedTitle}</p>
                <p>{t.solanaDelegatePhishing.revoke.passedBody}</p>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{t.solanaDelegatePhishing.revoke.title}</h3>
              <p className="mb-4 text-gray-600">{t.solanaDelegatePhishing.revoke.intro}</p>
              <div className="space-y-3">
                {TOKEN_ACCOUNTS.map((acc) => {
                  const picked = revokeIds.includes(acc.id);
                  return (
                    <label
                      key={acc.id}
                      className={`block p-4 border rounded-lg ${acc.delegate ? "cursor-pointer" : ""} ${
                        picked ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <input
                          type="checkbox"
                          checked={picked}
                          disabled={!acc.delegate}
                          onChange={() => toggleRevoke(acc.id)}
                        />
                        <span className="font-bold text-gray-900">{acc.token}</span>
                        <span className="text-sm text-gray-500">
                          {t.solanaDelegatePhishing.revoke.balance}: {acc.balance}
                        </span>
                        {picked && <span className="ml-auto font-mono text-xs font-bold text-red-600">Revoke</span>}
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="text-gray-500">{t.solanaDelegatePhishing.revoke.delegate}: </span>
                        <span className="font-mono text-xs break-all">
                          {acc.delegate || t.solanaDelegatePhishing.revoke.none}
                        </span>
                      </div>
                      {acc.delegate && (
                        <div className="text-sm">
                          <span className="text-gray-500">{t.solanaDelegatePhishing.revoke.amount}: </span>
                          <span className="font-mono text-xs break-all">{acc.delegated}</span>
                        </div>
                      )}
                      <p className="mt-2 text-sm text-gray-600">{t.solanaDelegatePhishing.revoke.notes[acc.id]}</p>
                    </label>
                  );
                })}
              </div>
              {revokeFeedback && (
                <div className="mt-4 p-4 rounded-lg bg-yellow-50 border border-yellow-300 text-yellow-900">
                  {t.solanaDelegatePhishing.revoke.feedback[revokeFeedback]}
                </div>
              )}
              <button
                onClick={handleRevoke}
                disabled={revokeIds.length === 0}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
              >
                {t.solanaDelegatePhishing.revoke.button}
              </button>
            </>
          )}

          {/* Warning Modal */}
          {showWarning && selectedAnswer !== "" && selectedAnswer !== "c" && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[1001] p-4">
              <div className="bg-white p-8 rounded shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto text-gray-800">
                <h2 className="text-xl font-bold mb-2 text-red-600">
                  {t.solanaDelegatePhishing.wrongFeedback[selectedAnswer].title}
                </h2>
                <p className="mb-4">{t.solanaDelegatePhishing.wrongFeedback[selectedAnswer].body}</p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                  onClick={() => setShowWarning(false)}
                >
                  {t.solanaDelegatePhishing.closeButton}
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
        challengeKey="solana-delegate-phishing"
        successContent={<SolanaDelegatePhishingSuccessContent />}
      />
      <style jsx>{`
        .sdp-fade {
          animation: sdp-fade 0.25s ease-out;
        }
        @keyframes sdp-fade {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
