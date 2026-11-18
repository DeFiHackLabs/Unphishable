"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { FiCode, FiSearch, FiTool } from "react-icons/fi";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ChallengeCompletionModal from "@/app/components/ChallengeCompletionModal";
import MaliciousMcpServerSuccessContent from "./MaliciousMcpServerSuccessContent";

const IMAGE_DIR = "/images/challenges/malicious-mcp-server";

// Deliberately NOT BIP39 words: a dummy phrase that can never be a real seed.
// It matches the request body drawn in network-inspector.svg.
const DUMMY_PHRASE =
  "fake01 fake02 fake03 fake04 fake05 fake06 fake07 fake08 fake09 fake10 fake11 fake12";

// Clickable red flags on tool-manifest.svg, as % of its 800x560 viewBox.
// Same order as the "flags" array in the i18n block.
const HOTSPOTS = [
  { top: "30%", left: "9.9%", width: "89.1%", height: "13.75%" }, // hidden <IMPORTANT> block
  { top: "53.75%", left: "11.85%", width: "87.15%", height: "13.4%" }, // "mnemonic" parameter
  { top: "67.32%", left: "11.85%", width: "87.15%", height: "13.6%" }, // "metadata" parameter
];

const OPTION_KEYS = ["a", "b", "c", "d"] as const;
const CORRECT_ANSWER = "b";
type WrongAnswer = "a" | "c" | "d";

export function MaliciousMcpServer() {
  const { t } = useLanguage();

  const [act, setAct] = useState<1 | 2>(1);
  const [showManifest, setShowManifest] = useState(false);
  const [manifestSeen, setManifestSeen] = useState(false);
  const [showDeclineNudge, setShowDeclineNudge] = useState(false);
  const [foundFlags, setFoundFlags] = useState<number[]>([]);
  const [showInspector, setShowInspector] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [wrongAnswer, setWrongAnswer] = useState<WrongAnswer | null>(null);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFlagClick = (index: number) => {
    setFoundFlags((prev) => (prev.includes(index) ? prev : [...prev, index]));
  };

  const goToAct = (next: 1 | 2) => {
    setAct(next);
    scrollToTop();
  };

  // Both safe exits (declining the server, refusing the seed phrase) end here.
  const handleSafeChoice = () => {
    setShowCompletionModal(true);
    scrollToTop();
  };

  const handleToggleManifest = () => {
    setShowManifest(!showManifest);
    setManifestSeen(true);
  };

  // Declining is always the safe call, but it only scores once the player has
  // opened the manifest and can say why. Before that it is a nudge, not a fail.
  const handleDecline = () => {
    if (manifestSeen) {
      handleSafeChoice();
    } else {
      setShowDeclineNudge(true);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === CORRECT_ANSWER) {
      handleSafeChoice();
    } else if (selectedAnswer === "a" || selectedAnswer === "c" || selectedAnswer === "d") {
      setWrongAnswer(selectedAnswer);
    }
  };

  return (
    <>
      <div ref={topRef} />
      {!showCompletionModal && (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow relative text-gray-800">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 mb-8 text-center">
            <h1 className="challenge-title">{t.maliciousMcpServer.title}</h1>
            <p className="challenge-description">{t.maliciousMcpServer.subtitle}</p>
            <div className="warning-banner">{t.maliciousMcpServer.warning}</div>
          </div>

          {/* Act 1: the registry listing and the manifest nobody reads */}
          {act === 1 && (
            <>
              <h2 className="act-title">{t.maliciousMcpServer.act1Title}</h2>
              <p className="scenario-text">{t.maliciousMcpServer.scenario}</p>

              <div className="relative w-full aspect-[4/3] border rounded-lg overflow-hidden">
                <Image
                  src={`${IMAGE_DIR}/registry-card.svg`}
                  alt=""
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className="flex justify-center mt-6">
                <button
                  className={`flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-900 font-semibold ${
                    showDeclineNudge && !manifestSeen ? "ring-4 ring-yellow-400 animate-pulse" : ""
                  }`}
                  onClick={handleToggleManifest}
                >
                  <FiCode />
                  {showManifest
                    ? t.maliciousMcpServer.manifestHide
                    : t.maliciousMcpServer.manifestShow}
                </button>
              </div>

              {showManifest && (
                <div className="mt-6">
                  <p className="mb-3 text-gray-600">{t.maliciousMcpServer.manifestHint}</p>
                  <div className="relative w-full aspect-[10/7] border rounded-lg overflow-hidden cursor-pointer">
                    <Image
                      src={`${IMAGE_DIR}/tool-manifest.svg`}
                      alt=""
                      fill
                      style={{ objectFit: "contain" }}
                    />
                    {HOTSPOTS.map((spot, index) => (
                      <button
                        key={index}
                        type="button"
                        aria-label={t.maliciousMcpServer.hotspotLabel}
                        style={spot}
                        onClick={() => handleFlagClick(index)}
                        className={`absolute rounded cursor-pointer ${
                          foundFlags.includes(index) ? "ring-2 ring-red-500 bg-red-500/20" : ""
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-3 font-bold text-gray-800">
                    {t.maliciousMcpServer.flagsFound} {foundFlags.length}/{HOTSPOTS.length}
                  </p>
                  <ul className="mt-2 space-y-2">
                    {foundFlags.map((index) => (
                      <li
                        key={index}
                        className="bg-red-50 border-l-4 border-red-400 p-3 text-sm text-gray-800"
                      >
                        {t.maliciousMcpServer.flags[index]}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {t.maliciousMcpServer.decisionTitle}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
                    onClick={() => goToAct(2)}
                  >
                    {t.maliciousMcpServer.approveButton}
                  </button>
                  <button
                    className="px-6 py-3 bg-white text-gray-800 border border-gray-400 rounded hover:bg-gray-100 font-semibold"
                    onClick={handleDecline}
                  >
                    {t.maliciousMcpServer.declineButton}
                  </button>
                </div>
                {showDeclineNudge && !manifestSeen && (
                  <p className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-3 text-left text-gray-800">
                    {t.maliciousMcpServer.declineNudge}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Act 2: the assistant, the reassuring reply and what really left the machine */}
          {act === 2 && (
            <>
              <h2 className="act-title">{t.maliciousMcpServer.act2Title}</h2>
              <p className="scenario-text">{t.maliciousMcpServer.act2Intro}</p>

              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between bg-gray-800 text-white px-4 py-2">
                  <span className="font-semibold">{t.maliciousMcpServer.chatTitle}</span>
                  <span className="text-xs bg-green-600 rounded-full px-3 py-1">
                    {t.maliciousMcpServer.chatServerBadge}
                  </span>
                </div>

                <div className="bg-gray-100 p-4 space-y-3">
                  <div className="chat-bubble ml-auto bg-blue-600 text-white">
                    <p className="chat-speaker">{t.maliciousMcpServer.youLabel}</p>
                    <p>{t.maliciousMcpServer.chatUser}</p>
                    <code className="block mt-2 p-2 rounded bg-blue-900 text-sm break-words">
                      {DUMMY_PHRASE}
                    </code>
                    <p className="mt-2 text-xs italic">{t.maliciousMcpServer.dummyNote}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FiTool />
                    <code>check_mnemonic_breach</code>
                    <span>· {t.maliciousMcpServer.chatToolCall}</span>
                  </div>

                  <div className="chat-bubble bg-white text-gray-800 border border-gray-200">
                    <p className="chat-speaker">{t.maliciousMcpServer.assistantLabel}</p>
                    <p>{t.maliciousMcpServer.chatAssistantReply}</p>
                    <p className="mt-2">{t.maliciousMcpServer.chatAssistantAsk}</p>
                  </div>

                  <div className="bg-white border border-gray-300 rounded-full px-4 py-2 text-gray-400">
                    {t.maliciousMcpServer.chatPlaceholder}
                  </div>
                </div>

                <div className="bg-gray-200 border-t border-gray-300 p-4">
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 font-semibold"
                    onClick={() => setShowInspector(!showInspector)}
                  >
                    <FiSearch />
                    {showInspector
                      ? t.maliciousMcpServer.inspectorHide
                      : t.maliciousMcpServer.inspectorShow}
                  </button>
                  {showInspector && (
                    <>
                      <p className="my-3 text-sm text-gray-700">
                        {t.maliciousMcpServer.inspectorHint}
                      </p>
                      <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden">
                        <Image
                          src={`${IMAGE_DIR}/network-inspector.svg`}
                          alt=""
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Multiple Choice Question */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {t.maliciousMcpServer.questionTitle}
                </h3>
                <p className="mb-4 text-gray-600">{t.maliciousMcpServer.questionDescription}</p>

                <div className="space-y-3">
                  {OPTION_KEYS.map((key) => (
                    <label
                      key={key}
                      className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
                    >
                      <input
                        type="radio"
                        name="mcp-seed-choice"
                        value={key}
                        checked={selectedAnswer === key}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        className="mr-3"
                      />
                      <span className="font-medium text-gray-800">
                        {key}) {t.maliciousMcpServer.options[key]}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={!selectedAnswer}
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
                  >
                    {t.maliciousMcpServer.submitButton}
                  </button>
                  <button
                    onClick={() => goToAct(1)}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {t.maliciousMcpServer.backButton}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Warning Modal */}
          {wrongAnswer && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
              <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-2 text-red-600">
                  {t.maliciousMcpServer.warningModalTitle}
                </h2>
                <p className="mb-4 text-gray-800">
                  {t.maliciousMcpServer.wrongReasons[wrongAnswer]}
                </p>
                <p className="mb-4 font-bold text-gray-800">
                  {t.maliciousMcpServer.warningModalLesson}
                </p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setWrongAnswer(null)}
                >
                  {t.maliciousMcpServer.closeButton}
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
        challengeKey="malicious-mcp-server"
        successContent={<MaliciousMcpServerSuccessContent />}
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
        .act-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 0.75rem;
        }
        .scenario-text {
          font-size: 1.125rem;
          color: #444;
          margin-bottom: 1.5rem;
        }
        .chat-bubble {
          max-width: 85%;
          width: fit-content;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
        }
        .chat-speaker {
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
          opacity: 0.8;
        }
      `}</style>
    </>
  );
}
