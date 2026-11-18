"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ChallengeCompletionModal from "@/app/components/ChallengeCompletionModal";
import WalletConnectSessionHijackSuccessContent from "./WalletConnectSessionHijackSuccessContent";

const IMG = "/images/challenges/walletconnect-session-hijack";
const STD_METHODS = ["eth_sendTransaction", "personal_sign", "eth_signTypedData_v4"];
const MANY_CHAINS = "Ethereum, Arbitrum, Base, Optimism, Polygon, BNB Chain";

// Same order as the rows drawn in sessions.svg. Every dApp and domain here is fictional.
const SESSIONS = [
  { name: "Saltmarsh Swap", origin: "app.saltmarsh[.]exchange", chains: "Ethereum, Arbitrum", methods: STD_METHODS },
  { name: "Thimble Lend", origin: "app.thimblelend[.]xyz", chains: "Ethereum", methods: STD_METHODS },
  { name: "Saltmarsh Swap", origin: "saltmarsh-rewards[.]app", chains: MANY_CHAINS, methods: [...STD_METHODS, "eth_sign"] },
  { name: "Driftwood Market", origin: "driftwood[.]market", chains: "Ethereum", methods: STD_METHODS },
  { name: "Node Sync", origin: "sync-node[.]cloud", chains: MANY_CHAINS, methods: [...STD_METHODS, "eth_sign"] },
  { name: "Pixel Puffins Mint", origin: "mint.pixelpuffins[.]art", chains: "Ethereum", methods: ["eth_sendTransaction", "personal_sign"] },
  { name: "Mossgrid Bridge", origin: "bridge.mossgrid[.]io", chains: "Ethereum, Arbitrum", methods: STD_METHODS },
];
const ACTIVE = 0; // mid-swap, so it stays connected during the audit
const HOSTILE = [2, 4]; // leaving either of these connected fails the audit
const IDLE_COUNT = SESSIONS.length - 1;

// Clickable regions of request.svg, in artwork units (viewBox 400 x 820).
const CLUE_SPOTS = [
  { y: 210, h: 102 }, // name + icon
  { y: 320, h: 36 }, // origin
  { y: 362, h: 78 }, // method + dApp caption
  { y: 452, h: 190 }, // decoded permit
  { y: 744, h: 26 }, // session timing
];

const OPTION_KEYS = ["a", "b", "c", "d", "e"];
const CORRECT_OPTION = "c";
type WrongOption = "a" | "b" | "d" | "e";

const TAG_STYLES = {
  active: "bg-blue-100 text-blue-800",
  closed: "bg-green-100 text-green-800",
  open: "bg-amber-100 text-amber-800",
};

const RAW_REQUEST = `{
  "method": "eth_signTypedData_v4",
  "params": [
    "0x52a1b7e0c3f4d98a6e2b1c07d5f3a9e84b6cc9e4",
    {
      "primaryType": "Permit",
      "domain": {
        "name": "USD Coin",
        "version": "2",
        "chainId": 1,
        "verifyingContract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      },
      "message": {
        "owner": "0x52a1b7e0c3f4d98a6e2b1c07d5f3a9e84b6cc9e4",
        "spender": "0x9ce1f0a47b3d2c685e9a10fd4b7c2e63a8d541b7",
        "value": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
        "nonce": 0,
        "deadline": 2100000000
      }
    }
  ]
}`;

// Turns a box in artwork units into a percentage box over the phone image.
const spot = (y: number, h: number, x: number, w: number): React.CSSProperties => ({
  top: `${(y / 820) * 100}%`,
  height: `${(h / 820) * 100}%`,
  left: `${(x / 400) * 100}%`,
  width: `${(w / 400) * 100}%`,
});

export function WalletConnectSessionHijack() {
  const { t } = useLanguage();

  const [step, setStep] = useState<"audit" | "review" | "request">("audit");
  const [selected, setSelected] = useState(0);
  const [closed, setClosed] = useState<number[]>([]);
  const [clue, setClue] = useState<number | null>(null);
  const [seen, setSeen] = useState<number[]>([]);
  const [showRaw, setShowRaw] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [warning, setWarning] = useState<{ title: string; content: string } | null>(null);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => topRef.current?.scrollIntoView({ behavior: "smooth" });

  const goTo = (next: "review" | "request") => {
    setStep(next);
    scrollToTop();
  };

  const toggleClosed = (i: number) =>
    setClosed((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  const handleFinishAudit = () => {
    if (HOSTILE.every((i) => closed.includes(i))) {
      goTo("review");
    } else {
      setWarning({
        title: t.walletConnectSessionHijack.auditFailTitle,
        content: t.walletConnectSessionHijack.auditFailContent,
      });
    }
  };

  const handleInspect = (i: number) => {
    setClue(i);
    setSeen((prev) => (prev.includes(i) ? prev : [...prev, i]));
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === CORRECT_OPTION) {
      setShowCompletionModal(true);
      scrollToTop();
    } else {
      setWarning(t.walletConnectSessionHijack.wrong[selectedAnswer as WrongOption]);
    }
  };

  const session = SESSIONS[selected];
  const sessionText = t.walletConnectSessionHijack.sessions[selected];

  return (
    <>
      <div ref={topRef} />
      {!showCompletionModal && (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow relative text-gray-900">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 mb-8 text-center">
            <h1 className="wcs-title">{t.walletConnectSessionHijack.title}</h1>
            <p className="wcs-subtitle">{t.walletConnectSessionHijack.subtitle}</p>
            <div className="wcs-banner">{t.walletConnectSessionHijack.warning}</div>
          </div>

          {/* Step 1: audit the connected-sessions list */}
          {step === "audit" && (
            <>
              <h2 className="text-xl font-bold mb-2">{t.walletConnectSessionHijack.auditTitle}</h2>
              <p className="mb-2 text-gray-700">{t.walletConnectSessionHijack.scenarioDescription}</p>
              <p className="mb-4 text-sm text-gray-500">{t.walletConnectSessionHijack.auditInstruction}</p>

              <div className="flex flex-wrap gap-6 items-start justify-center">
                <div className="relative w-full max-w-[340px] aspect-[400/820] flex-none">
                  <Image src={`${IMG}/sessions.svg`} alt="" fill sizes="340px" style={{ objectFit: "contain" }} />
                  {SESSIONS.map((s, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`${s.name} ${s.origin}`}
                      onClick={() => setSelected(i)}
                      style={spot(124 + 90 * i, 84, 28, 344)}
                      className={`absolute rounded-xl cursor-pointer transition ${
                        selected === i ? "ring-2 ring-blue-500" : "hover:ring-2 hover:ring-blue-300"
                      } ${closed.includes(i) ? "bg-white/75" : ""}`}
                    >
                      {closed.includes(i) && (
                        <span className="absolute right-[2%] top-[12%] px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold">
                          {t.walletConnectSessionHijack.markedLabel}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                <div className="flex-1 min-w-[260px] p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm">
                  <div className="text-lg font-bold">{session.name}</div>
                  <code className="block mb-3 text-gray-600 break-all">{session.origin}</code>
                  <dl className="space-y-2">
                    {[
                      [t.walletConnectSessionHijack.labels.connected, sessionText.connected],
                      [t.walletConnectSessionHijack.labels.lastActive, sessionText.lastActive],
                      [t.walletConnectSessionHijack.labels.chains, session.chains],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt className="text-xs font-semibold text-gray-500">{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                    <div>
                      <dt className="text-xs font-semibold text-gray-500">{t.walletConnectSessionHijack.labels.methods}</dt>
                      <dd className="flex flex-wrap gap-1 mt-1">
                        {session.methods.map((m) => (
                          <code key={m} className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-xs">
                            {m}
                          </code>
                        ))}
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-3 p-3 bg-white border-l-4 border-blue-300 text-gray-700">
                    <strong>{t.walletConnectSessionHijack.labels.memory}</strong> {sessionText.memory}
                  </p>
                  {selected === ACTIVE ? (
                    <p className="mt-3 italic text-gray-500">{t.walletConnectSessionHijack.lockedNote}</p>
                  ) : (
                    <button
                      onClick={() => toggleClosed(selected)}
                      className={`mt-3 w-full px-4 py-2 rounded font-semibold ${
                        closed.includes(selected)
                          ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                          : "bg-red-600 text-white hover:bg-red-700"
                      }`}
                    >
                      {closed.includes(selected)
                        ? t.walletConnectSessionHijack.keepButton
                        : t.walletConnectSessionHijack.disconnectButton}
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <span className="font-semibold text-gray-700">
                  {t.walletConnectSessionHijack.closedCount} {closed.length} / {IDLE_COUNT}
                </span>
                <button
                  onClick={handleFinishAudit}
                  className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
                >
                  {t.walletConnectSessionHijack.finishAuditButton}
                </button>
              </div>
            </>
          )}

          {/* Audit passed: score it and explain every session */}
          {step === "review" && (
            <>
              <h2 className="text-xl font-bold mb-2">{t.walletConnectSessionHijack.reviewTitle}</h2>
              <p className="text-lg font-semibold">
                {t.walletConnectSessionHijack.scoreLabel} {closed.length} / {IDLE_COUNT}
              </p>
              <p className="mb-4 text-gray-700">
                {closed.length === IDLE_COUNT
                  ? t.walletConnectSessionHijack.reviewPerfect
                  : t.walletConnectSessionHijack.reviewPartial}
              </p>
              <ul className="space-y-3">
                {SESSIONS.map((s, i) => {
                  const tag = i === ACTIVE ? "active" : closed.includes(i) ? "closed" : "open";
                  return (
                    <li key={i} className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold">{s.name}</span>
                        <code className="text-xs text-gray-500">{s.origin}</code>
                        <span className={`ml-auto px-2 py-0.5 rounded-full text-xs font-bold ${TAG_STYLES[tag]}`}>
                          {t.walletConnectSessionHijack.tags[tag]}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-700">{t.walletConnectSessionHijack.sessions[i].verdict}</p>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => goTo("request")}
                  className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
                >
                  {t.walletConnectSessionHijack.continueButton}
                </button>
              </div>
            </>
          )}

          {/* Step 2: the unprompted signature request */}
          {step === "request" && (
            <>
              <h2 className="text-xl font-bold mb-2">{t.walletConnectSessionHijack.requestTitle}</h2>
              <ul className="mb-2 space-y-1 text-gray-700">
                {t.walletConnectSessionHijack.timeline.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
              <p className="mb-4 text-sm text-gray-500">{t.walletConnectSessionHijack.requestInstruction}</p>

              <div className="flex flex-wrap gap-6 items-start justify-center">
                <div className="relative w-full max-w-[340px] aspect-[400/820] flex-none">
                  <Image src={`${IMG}/request.svg`} alt="" fill sizes="340px" style={{ objectFit: "contain" }} />
                  {CLUE_SPOTS.map((c, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={t.walletConnectSessionHijack.clues[i].label}
                      onClick={() => handleInspect(i)}
                      style={spot(c.y, c.h, 36, 328)}
                      className={`absolute rounded-lg border-2 border-dashed cursor-pointer transition ${
                        clue === i
                          ? "border-blue-600 bg-blue-500/10"
                          : seen.includes(i)
                            ? "border-blue-300 hover:bg-blue-500/10"
                            : "border-blue-500/70 hover:bg-blue-500/10"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex-1 min-w-[260px] text-sm">
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <div className="mb-2 text-xs font-semibold text-gray-500">
                      {t.walletConnectSessionHijack.cluesSeen} {seen.length} / {CLUE_SPOTS.length}
                    </div>
                    {clue === null ? (
                      <p className="text-gray-500">{t.walletConnectSessionHijack.cluePlaceholder}</p>
                    ) : (
                      <>
                        <div className="mb-1 font-bold">{t.walletConnectSessionHijack.clues[clue].label}</div>
                        <p className="text-gray-700">{t.walletConnectSessionHijack.clues[clue].note}</p>
                      </>
                    )}
                  </div>
                  <button onClick={() => setShowRaw((v) => !v)} className="mt-3 text-blue-700 underline">
                    {showRaw ? t.walletConnectSessionHijack.rawHide : t.walletConnectSessionHijack.rawShow}
                  </button>
                  {showRaw && (
                    <>
                      <p className="mt-2 text-xs text-gray-500">{t.walletConnectSessionHijack.rawCaption}</p>
                      <pre className="mt-1 p-3 bg-gray-900 text-green-200 text-[11px] leading-snug rounded overflow-x-auto">
                        {RAW_REQUEST}
                      </pre>
                    </>
                  )}
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{t.walletConnectSessionHijack.questionTitle}</h3>
                <p className="mb-4 text-gray-600">{t.walletConnectSessionHijack.questionDescription}</p>
                <div className="space-y-3">
                  {OPTION_KEYS.map((key, i) => (
                    <label
                      key={key}
                      className="flex items-start p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
                    >
                      <input
                        type="radio"
                        name="wc-session-choice"
                        value={key}
                        checked={selectedAnswer === key}
                        onChange={(e) => setSelectedAnswer(e.target.value)}
                        className="mr-3 mt-1"
                      />
                      <span className="font-medium">
                        {key}) {t.walletConnectSessionHijack.options[i]}
                      </span>
                    </label>
                  ))}
                </div>
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
                >
                  {t.walletConnectSessionHijack.submitButton}
                </button>
              </div>
            </>
          )}

          {/* Warning Modal */}
          {warning && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
              <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-2 text-red-600">{warning.title}</h2>
                <p className="mb-4 text-gray-800">{warning.content}</p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setWarning(null)}
                >
                  {t.walletConnectSessionHijack.closeButton}
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
        challengeKey="walletconnect-session-hijack"
        successContent={<WalletConnectSessionHijackSuccessContent />}
      />
      <style jsx>{`
        .wcs-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 1rem;
          text-align: center;
        }
        .wcs-subtitle {
          font-size: 1.25rem;
          color: #444;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .wcs-banner {
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
