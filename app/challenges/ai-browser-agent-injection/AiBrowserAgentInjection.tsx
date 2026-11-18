"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiCheck, FiEye, FiEyeOff, FiPauseCircle, FiPlay } from "react-icons/fi";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ChallengeCompletionModal from "@/app/components/ChallengeCompletionModal";
import AiBrowserAgentInjectionSuccessContent from "./AiBrowserAgentInjectionSuccessContent";

const IMAGE_DIR = "/images/challenges/ai-browser-agent-injection";
const OPTIONS = ["a", "b", "c"] as const;
type Option = (typeof OPTIONS)[number];
const CORRECT_OPTION: Option = "c";
const STEP_DELAY_MS = 900;

export function AiBrowserAgentInjection() {
  const { t } = useLanguage();
  const text = t.aiBrowserAgentInjection;

  const [revealed, setRevealed] = useState(false);
  // Number of action-log rows currently visible; 0 means the agent has not been started.
  const [logStep, setLogStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Option | "">("");
  const [showWarning, setShowWarning] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const stepCount = text.agentSteps.length;
  const logDone = logStep >= stepCount;

  // Once started, the action log plays one step at a time until the agent asks for approval.
  useEffect(() => {
    if (logStep === 0 || logStep >= stepCount) return;
    const timer = setTimeout(() => setLogStep((step) => step + 1), STEP_DELAY_MS);
    return () => clearTimeout(timer);
  }, [logStep, stepCount]);

  const handleSubmitAnswer = () => {
    if (selectedAnswer === CORRECT_OPTION) {
      setShowCompletionModal(true);
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setShowWarning(true);
    }
  };

  const wrongFeedback = selectedAnswer === "b" ? text.wrongPartial : text.wrongApprove;

  return (
    <>
      <div ref={topRef} />
      {!showCompletionModal && (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow relative">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 mb-8 text-center">
            <h1 className="challenge-title">{text.title}</h1>
            <p className="challenge-description">{text.subtitle}</p>
            <div className="warning-banner">{text.warning}</div>
          </div>

          <p className="text-lg text-gray-700 mb-4">{text.scenarioDescription}</p>
          <div className="flex justify-end mb-8">
            <div className="max-w-md bg-violet-100 border border-violet-200 rounded-2xl rounded-br-sm px-4 py-3 text-gray-800">
              <p className="text-xs font-bold text-violet-700 mb-1">{text.youAsked}</p>
              <p>{text.userPrompt}</p>
            </div>
          </div>

          {/* Step 1: the page, as the player sees it or as the agent reads it */}
          <h2 className="section-title">{text.step1Title}</h2>
          <p className="text-gray-600 mb-4">{text.step1Description}</p>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span className="text-sm font-semibold text-gray-700">
              {revealed ? text.viewAgent : text.viewHuman}
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={revealed}
              onClick={() => setRevealed(!revealed)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                revealed
                  ? "bg-amber-100 border-amber-400 text-amber-900"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {revealed ? <FiEye /> : <FiEyeOff />}
              {text.revealToggle}
              <span
                className={`relative inline-block w-9 h-5 rounded-full transition-colors ${
                  revealed ? "bg-amber-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                    revealed ? "translate-x-4" : ""
                  }`}
                />
              </span>
            </button>
          </div>
          <div
            className={`relative w-full aspect-[4/3] border-2 rounded-lg overflow-hidden ${
              revealed ? "border-amber-400" : "border-gray-200"
            }`}
          >
            <Image
              src={`${IMAGE_DIR}/${revealed ? "agent-browser-revealed" : "agent-browser"}.svg`}
              alt={text.browserAlt}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          {revealed && (
            <div className="agent-fade-in mt-3 bg-amber-50 border-l-4 border-amber-400 p-4 text-gray-800">
              <p className="font-bold mb-1">{text.revealedTitle}</p>
              <p>{text.revealedNote}</p>
            </div>
          )}

          {/* Step 2: the agent's action log */}
          <h2 className="section-title mt-10">{text.step2Title}</h2>
          <p className="text-gray-600 mb-4">{text.step2Description}</p>
          <div className="border border-gray-200 rounded-lg p-5">
            {logStep === 0 ? (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-gray-500">{text.logIdle}</span>
                <button
                  type="button"
                  onClick={() => setLogStep(1)}
                  className="flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded hover:bg-violet-700 font-semibold"
                >
                  <FiPlay />
                  {text.runAgent}
                </button>
              </div>
            ) : (
              <ol className="space-y-2">
                {text.agentSteps.slice(0, logStep).map((step, index) => (
                  <li
                    key={index}
                    className="agent-fade-in flex items-center gap-3 p-2 rounded bg-gray-50 text-gray-800"
                  >
                    <span className="w-6 h-6 shrink-0 rounded-full bg-gray-200 text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="flex-1 text-sm break-words">{step}</span>
                    {index === stepCount - 1 ? (
                      <span className="flex items-center gap-1 text-xs font-semibold text-violet-700 whitespace-nowrap">
                        <FiPauseCircle />
                        {text.awaitingApproval}
                      </span>
                    ) : (
                      <FiCheck className="text-green-600 shrink-0" />
                    )}
                  </li>
                ))}
              </ol>
            )}
            {logDone && (
              <div className="agent-fade-in mt-4 p-4 rounded-lg bg-violet-50 border border-violet-200 text-gray-800">
                <p className="text-xs font-bold text-violet-700 mb-1">{text.agentLabel}</p>
                <p>{text.agentMessage}</p>
              </div>
            )}
          </div>

          {/* Step 3: approve the plan, approve part of it, or stop the agent */}
          {logDone && (
            <div className="agent-fade-in mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">{text.questionTitle}</h3>
              <p className="mb-4 text-gray-600">{text.questionDescription}</p>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full max-w-[300px] aspect-[9/14] mx-auto md:mx-0 shrink-0 border rounded-lg overflow-hidden">
                  <Image
                    src={`${IMAGE_DIR}/wallet-confirm.svg`}
                    alt={text.walletAlt}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="flex-1">
                  <div className="space-y-3">
                    {OPTIONS.map((option) => (
                      <label
                        key={option}
                        className={`flex items-start p-3 border rounded-lg cursor-pointer bg-white hover:bg-gray-50 text-gray-800 ${
                          selectedAnswer === option ? "border-blue-500" : "border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="agent-plan-choice"
                          value={option}
                          checked={selectedAnswer === option}
                          onChange={() => setSelectedAnswer(option)}
                          className="mr-3 mt-1"
                        />
                        <span className="font-medium">{text.options[option]}</span>
                      </label>
                    ))}
                  </div>
                  {!revealed && <p className="mt-3 text-sm text-gray-500">{text.revealHint}</p>}
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={!selectedAnswer}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
                  >
                    {text.submitButton}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Warning Modal */}
          {showWarning && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
              <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-gray-800">
                <h2 className="text-xl font-bold mb-2 text-red-600">{wrongFeedback.title}</h2>
                <p className="mb-4">{wrongFeedback.content}</p>
                <p className="mb-4 text-sm bg-red-50 border-l-4 border-red-400 p-3">
                  {text.warningModalLesson}
                </p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setShowWarning(false)}
                >
                  {text.tryAgainButton}
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
        challengeKey="ai-browser-agent-injection"
        successContent={<AiBrowserAgentInjectionSuccessContent />}
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
        .section-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 0.5rem;
        }
        .agent-fade-in {
          animation: agentFadeIn 0.35s ease-out;
        }
        @keyframes agentFadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
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
