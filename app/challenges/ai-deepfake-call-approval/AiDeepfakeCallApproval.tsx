"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FiRotateCw,
  FiPhoneCall,
  FiKey,
  FiSearch,
  FiHelpCircle,
  FiPhoneForwarded,
  FiLink,
  FiUsers,
  FiImage,
} from "react-icons/fi";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ChallengeCompletionModal from "@/app/components/ChallengeCompletionModal";
import AiDeepfakeCallApprovalSuccessContent from "./AiDeepfakeCallApprovalSuccessContent";

const IMG = "/images/challenges/ai-deepfake-call-approval";
const MAX_CHECKS = 3;
const CORRECT_ANSWER = "c";

// Fictional addresses, shown truncated on purpose.
const RESCUE_ADDRESS = "0x7c1E…9aB4";
const TREASURY_ADDRESS = "0x51Fe…C0d2";
const RESERVE_ADDRESS = "0xA08b…77E1";

type Step = "call" | "verify" | "decide";
type OptionKey = "a" | "b" | "c" | "d";
type ActionKey =
  | "screenshot"
  | "profileTurn"
  | "givenNumber"
  | "checkAddress"
  | "askOnCall"
  | "knownNumber"
  | "signedMessage"
  | "chatLink"
  | "personalQuestion";

// good: the check tests the caller through something the caller does not control.
const ACTIONS: { key: ActionKey; Icon: IconType; good: boolean }[] = [
  { key: "screenshot", Icon: FiImage, good: false },
  { key: "profileTurn", Icon: FiRotateCw, good: true },
  { key: "givenNumber", Icon: FiPhoneForwarded, good: false },
  { key: "checkAddress", Icon: FiSearch, good: true },
  { key: "askOnCall", Icon: FiUsers, good: false },
  { key: "knownNumber", Icon: FiPhoneCall, good: true },
  { key: "signedMessage", Icon: FiKey, good: true },
  { key: "chatLink", Icon: FiLink, good: false },
  { key: "personalQuestion", Icon: FiHelpCircle, good: true },
];
const OPTIONS: OptionKey[] = ["a", "b", "c", "d"];

const isGood = (key: ActionKey) =>
  ACTIONS.some((action) => action.key === key && action.good);

export function AiDeepfakeCallApproval() {
  const { t } = useLanguage();
  const c = t.aiDeepfakeCallApproval;

  const [step, setStep] = useState<Step>("call");
  const [used, setUsed] = useState<ActionKey[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<OptionKey | "">("");
  const [showWarning, setShowWarning] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const checksLeft = MAX_CHECKS - used.length;
  const wrongAnswer =
    selectedAnswer === "a" || selectedAnswer === "b" || selectedAnswer === "d"
      ? selectedAnswer
      : null;

  const goTo = (next: Step) => {
    setStep(next);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const runCheck = (key: ActionKey) => {
    if (checksLeft > 0 && !used.includes(key)) {
      setUsed([...used, key]);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === CORRECT_ANSWER) {
      setShowCompletionModal(true);
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setShowWarning(true);
    }
  };

  return (
    <>
      <div ref={topRef} />
      {!showCompletionModal && (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow relative">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 mb-8 text-center">
            <h1 className="challenge-title">{c.title}</h1>
            <p className="challenge-description">{c.subtitle}</p>
            <div className="warning-banner">{c.warning}</div>
            <p className="text-xs text-gray-500">{c.fictionNote}</p>
          </div>

          {/* Step 1: the call comes in */}
          {step === "call" && (
            <>
              <p className="scenario-text">{c.scenarioDescription}</p>
              <div className="relative w-full aspect-[16/10] border border-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={`${IMG}/call.svg`}
                  alt={c.callImageAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-bold text-gray-800 mb-3">
                  {c.callerSaysTitle}
                </p>
                <div className="space-y-2">
                  {c.callerLines.map((line, index) => (
                    <div
                      key={index}
                      className="max-w-[90%] bg-white border border-gray-200 rounded-lg px-3 py-2 text-gray-800"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <button
                  className="px-6 py-3 bg-orange-600 text-white rounded hover:bg-orange-700 font-semibold"
                  onClick={() => goTo("decide")}
                >
                  {c.signNowButton}
                </button>
                <button
                  className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
                  onClick={() => goTo("verify")}
                >
                  {c.startVerifyButton}
                </button>
              </div>
            </>
          )}

          {/* Step 2: verification round, 3 checks from the menu */}
          {step === "verify" && (
            <>
              <div className="flex items-center justify-between gap-4 rounded-lg bg-gray-900 text-white px-4 py-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-red-500 animate-pulse" />
                  <div>
                    <p className="text-xs text-gray-400">{c.callStatusLabel}</p>
                    <p className="font-medium">{c.pressure[used.length]}</p>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs text-gray-400">{c.checksLeftLabel}</p>
                  <p className="text-2xl font-bold">{checksLeft}</p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {c.verifyTitle}
              </h3>
              <p className="mb-4 text-gray-600">{c.verifyDescription}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ACTIONS.map(({ key, Icon }) => {
                  const done = used.includes(key);
                  return (
                    <button
                      key={key}
                      onClick={() => runCheck(key)}
                      disabled={done || checksLeft === 0}
                      className={`flex items-start gap-3 p-3 text-left border rounded-lg disabled:cursor-not-allowed ${
                        done
                          ? "border-blue-500 bg-blue-50"
                          : checksLeft === 0
                            ? "border-gray-200 opacity-50"
                            : "border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="mt-1 shrink-0 text-gray-600" />
                      <span className="font-medium text-gray-800">
                        {c.actions[key].label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 space-y-4">
                {used.map((key) => (
                  <div
                    key={key}
                    className={`p-4 rounded-lg border-l-4 ${
                      isGood(key)
                        ? "bg-green-50 border-green-500"
                        : "bg-yellow-50 border-yellow-400"
                    }`}
                  >
                    <p className="font-bold text-gray-800 mb-1">
                      {c.actions[key].label}
                    </p>
                    <p className="text-gray-700">{c.actions[key].result}</p>
                    {key === "profileTurn" && (
                      <div className="relative w-full aspect-[16/10] mt-3 border border-gray-200 rounded-lg overflow-hidden">
                        <Image
                          src={`${IMG}/profile-turn.svg`}
                          alt={c.profileImageAlt}
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    )}
                    {key === "checkAddress" && (
                      <div className="mt-3 p-3 bg-white rounded border border-gray-200 text-sm text-gray-700">
                        <p>{c.addressClaimedLabel}</p>
                        <p className="font-mono text-red-600 mb-2">
                          {RESCUE_ADDRESS}
                        </p>
                        <p>{c.addressPublishedLabel}</p>
                        <p className="font-mono">
                          {TREASURY_ADDRESS} · {c.addressTreasuryName}
                        </p>
                        <p className="font-mono">
                          {RESERVE_ADDRESS} · {c.addressReserveName}
                        </p>
                      </div>
                    )}
                    <p className="mt-3 text-sm text-gray-800">
                      <span className="font-bold">
                        {isGood(key) ? c.goodBadge : c.badBadge}
                      </span>{" "}
                      {c.actions[key].verdict}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-6">
                <button
                  className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
                  onClick={() => goTo("decide")}
                  disabled={used.length === 0}
                >
                  {c.decideButton}
                </button>
              </div>
            </>
          )}

          {/* Step 3: the signing request and the decision */}
          {step === "decide" && (
            <>
              <div className="relative w-full aspect-[16/10] border border-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={`${IMG}/sign-request.svg`}
                  alt={c.signImageAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              {used.length > 0 && (
                <div className="mt-6 p-4 rounded-lg border border-gray-200">
                  <p className="font-bold text-gray-800 mb-2">{c.notesTitle}</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {used.map((key) => (
                      <li key={key}>
                        <span className="font-semibold">
                          {isGood(key) ? c.goodBadge : c.badBadge}
                        </span>{" "}
                        {c.actions[key].label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {c.questionTitle}
                </h3>
                <p className="mb-4 text-gray-600">{c.questionDescription}</p>

                <div className="space-y-3">
                  {OPTIONS.map((option) => (
                    <label
                      key={option}
                      className="flex items-start p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <input
                        type="radio"
                        name="deepfake-call-choice"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => setSelectedAnswer(option)}
                        className="mr-3 mt-1"
                      />
                      <span className="font-medium">
                        {option}) {c.options[option]}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={!selectedAnswer}
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
                  >
                    {c.submitButton}
                  </button>
                  {checksLeft > 0 && (
                    <button
                      onClick={() => goTo("verify")}
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 font-semibold"
                    >
                      {c.backToChecksButton}
                    </button>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Warning Modal */}
          {showWarning && wrongAnswer && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
              <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-2 text-red-600">
                  {c.warningModalTitle}
                </h2>
                <p className="mb-3">{c.wrongFeedback[wrongAnswer]}</p>
                <p className="mb-4 text-sm text-gray-700">
                  {c.warningModalOutcome}
                </p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setShowWarning(false)}
                >
                  {c.closeButton}
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
        challengeKey="ai-deepfake-call-approval"
        successContent={<AiDeepfakeCallApprovalSuccessContent />}
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
        .scenario-text {
          font-size: 1.125rem;
          color: #444;
          margin-bottom: 1.5rem;
        }
        .warning-banner {
          background-color: #ffebee;
          color: #c62828;
          padding: 10px 15px;
          border-radius: 4px;
          margin-bottom: 12px;
          font-weight: bold;
          text-align: center;
          border: 1px solid #ef9a9a;
        }
      `}</style>
    </>
  );
}
