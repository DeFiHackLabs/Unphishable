"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ChallengeCompletionModal from "@/app/components/ChallengeCompletionModal";
import SlopsquattingDependencySuccessContent from "./SlopsquattingDependencySuccessContent";

const IMG_DIR = "/images/challenges/slopsquatting-dependency";

type PackageId = "ghost" | "squat" | "real";
type OptionId = "a" | "b" | "c" | "d";
type WarningKind = "paste" | "a" | "b" | "d";

interface RegistryDetails {
  key: "squat" | "real";
  publisher: string;
  version: string;
  downloads: string;
  repo: string;
  scripts: string;
}

// Registry screenshots live at `${IMG_DIR}/npm-<name>.svg`.
const PACKAGES: { id: PackageId; name: string; details?: RegistryDetails }[] = [
  { id: "ghost", name: "react-codeshift" },
  {
    id: "squat",
    name: "unused-imports",
    details: {
      key: "squat",
      publisher: "lint-utils-official",
      version: "3.2.1",
      downloads: "233",
      repo: "github.com/lint-utils-official/unused-imports",
      scripts: "{ postinstall: 'node scripts/setup.js' }",
    },
  },
  {
    id: "real",
    name: "eslint-plugin-unused-imports",
    details: {
      key: "real",
      publisher: "sweepline, antfu",
      version: "4.4.1",
      downloads: "13,227,917",
      repo: "github.com/sweepline/eslint-plugin-unused-imports",
      scripts: `{
  build: 'tsup',
  test: 'vitest',
  format: "prettier --write '**/*.[jt]s'",
  release: 'bumpp'
}`,
    },
  },
];

const AI_COMMANDS = [
  "npx react-codeshift --transform=remove-unused-imports src/",
  "npm install --save-dev unused-imports",
];

const OPTIONS: { id: OptionId; command?: string }[] = [
  { id: "a", command: AI_COMMANDS[1] },
  { id: "b", command: AI_COMMANDS[0] },
  { id: "c", command: "npm install --save-dev eslint-plugin-unused-imports --ignore-scripts" },
  { id: "d" },
];

const OUT_404 = `$ ${AI_COMMANDS[0]}
npm error code E404
npm error 404 Not Found - GET https://registry.npmjs.org/react-codeshift
npm error 404 'react-codeshift@*' is not in this registry.`;

// npm does not print a dependency's install scripts unless asked to.
const OUT_INSTALL = `$ ${AI_COMMANDS[1]}

added 1 package, and audited 912 packages in 2s

found 0 vulnerabilities`;

const TERMINAL: Record<WarningKind, string> = {
  paste: `${OUT_404}\n\n${OUT_INSTALL}`,
  a: OUT_INSTALL,
  b: OUT_404,
  d: OUT_INSTALL,
};

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-3">
      <dt className="sm:w-36 shrink-0 font-semibold text-gray-600">{label}</dt>
      <dd className="min-w-0 break-words text-gray-900">{children}</dd>
    </div>
  );
}

export function SlopsquattingDependency() {
  const { t } = useLanguage();
  const T = t.slopsquattingDependency;

  const [step, setStep] = useState<1 | 2>(1);
  const [activePkg, setActivePkg] = useState<PackageId>("ghost");
  const [compare, setCompare] = useState(false);
  const [checks, setChecks] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<OptionId | "">("");
  const [warning, setWarning] = useState<WarningKind | null>(null);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const pkg = PACKAGES.find((p) => p.id === activePkg) ?? PACKAGES[0];
  const details = pkg.details;
  const facts = details ? T.facts[details.key] : null;
  const repoKey = `${pkg.id}-repo`;
  const scriptsKey = `${pkg.id}-scripts`;

  const scrollToTop = () => topRef.current?.scrollIntoView({ behavior: "smooth" });

  const goToStep = (next: 1 | 2) => {
    setStep(next);
    scrollToTop();
  };

  const runCheck = (key: string) => setChecks((done) => [...done, key]);

  const handleSubmitAnswer = () => {
    if (selectedAnswer === "") return;
    if (selectedAnswer === "c") {
      setShowCompletionModal(true);
      scrollToTop();
    } else {
      setWarning(selectedAnswer);
    }
  };

  return (
    <>
      <div ref={topRef} />
      {!showCompletionModal && (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow relative">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 mb-8 text-center">
            <h1 className="challenge-title">{T.title}</h1>
            <p className="challenge-description">{T.subtitle}</p>
            <div className="warning-banner">{T.warning}</div>
          </div>

          {/* Step 1: the AI's answer */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">{T.step1Title}</h2>
              <p className="mb-3 text-gray-700">{T.scenario}</p>
              <p className="mb-4 p-3 text-sm font-medium text-amber-900 bg-amber-50 border border-amber-200 rounded">
                {T.keyNote}
              </p>
              <div className="relative w-full aspect-[760/660] border rounded-lg overflow-hidden">
                <Image
                  src={`${IMG_DIR}/ai-chat.svg`}
                  alt={T.chatAlt}
                  fill
                  unoptimized
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="mt-5 mb-2 font-semibold text-gray-800">{T.commandsLabel}</p>
              <div className="space-y-2">
                {AI_COMMANDS.map((command) => (
                  <code key={command} className="terminal-line">
                    $ {command}
                  </code>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
                <button
                  className="px-6 py-3 bg-orange-600 text-white rounded hover:bg-orange-700 font-semibold"
                  onClick={() => setWarning("paste")}
                >
                  {T.pasteButton}
                </button>
                <button
                  className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
                  onClick={() => goToStep(2)}
                >
                  {T.inspectButton}
                </button>
              </div>
            </div>
          )}

          {/* Step 2: the registry + the decision */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">{T.step2Title}</h2>
              <p className="mb-4 text-gray-700">{T.registryIntro}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {PACKAGES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePkg(p.id)}
                    className={`px-3 py-2 rounded border font-mono text-sm ${
                      p.id === activePkg
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              <div className="relative w-full aspect-[4/3] border rounded-lg overflow-hidden">
                <Image
                  src={`${IMG_DIR}/npm-${pkg.name}.svg`}
                  alt={T.registryAlt}
                  fill
                  unoptimized
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">{T.registryNote}</p>

              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 text-sm font-semibold text-purple-700 border border-purple-300 rounded hover:bg-purple-50"
                  onClick={() => setCompare(!compare)}
                >
                  {compare ? T.compareOff : T.compareOn}
                </button>
              </div>

              <div className={`grid gap-4 mt-3 ${compare ? "md:grid-cols-2" : ""}`}>
                {compare && (
                  <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                    <h4 className="font-bold mb-2 text-purple-900">{T.aiColumnTitle}</h4>
                    <p className="text-sm italic text-gray-700">{T.aiSaid[pkg.id]}</p>
                  </div>
                )}
                <div className="p-4 rounded-lg border border-gray-200 bg-gray-50 min-w-0">
                  <h4 className="font-bold mb-2 text-gray-900">{T.registryColumnTitle}</h4>
                  <p className="mb-3 font-mono text-sm text-gray-700 break-all">{pkg.name}</p>
                  {details && facts ? (
                    <dl className="space-y-2 text-sm">
                      <Fact label={T.labels.publisher}>
                        <code>{details.publisher}</code> · {facts.publisherNote}
                      </Fact>
                      <Fact label={T.labels.version}>
                        <code>{details.version}</code>
                      </Fact>
                      <Fact label={T.labels.firstPublished}>{facts.firstPublished}</Fact>
                      <Fact label={T.labels.weeklyDownloads}>{details.downloads}</Fact>
                      <Fact label={T.labels.repository}>
                        <code className="break-all">{details.repo}</code>
                        {checks.includes(repoKey) ? (
                          <span className="block mt-1 font-medium">→ {facts.repoResult}</span>
                        ) : (
                          <button className="check-button" onClick={() => runCheck(repoKey)}>
                            {T.openRepoButton}
                          </button>
                        )}
                      </Fact>
                      <Fact label={T.labels.installScripts}>
                        {checks.includes(scriptsKey) ? (
                          <>
                            <pre className="p-2 text-xs bg-gray-900 text-gray-100 rounded overflow-x-auto">
                              {details.scripts}
                            </pre>
                            <span className="block mt-1 text-xs text-gray-500">{T.scriptsHint}</span>
                          </>
                        ) : (
                          <button className="check-button font-mono" onClick={() => runCheck(scriptsKey)}>
                            npm view {pkg.name} scripts
                          </button>
                        )}
                      </Fact>
                    </dl>
                  ) : (
                    <p className="text-sm text-gray-900">{T.notFound}</p>
                  )}
                </div>
              </div>

              {/* Decision */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{T.questionTitle}</h3>
                <p className="mb-4 text-gray-600">{T.questionDescription}</p>
                <div className="space-y-3">
                  {OPTIONS.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-start p-3 border rounded-lg cursor-pointer hover:bg-white ${
                        selectedAnswer === option.id ? "border-blue-500 bg-blue-50" : "border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="slopsquatting-choice"
                        value={option.id}
                        checked={selectedAnswer === option.id}
                        onChange={() => setSelectedAnswer(option.id)}
                        className="mr-3 mt-1"
                      />
                      <span className="flex-1 min-w-0">
                        <span className="font-medium">{T.options[option.id]}</span>
                        {option.command && <code className="terminal-line mt-2">$ {option.command}</code>}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={!selectedAnswer}
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
                  >
                    {T.submitButton}
                  </button>
                  <button className="text-sm text-blue-700 hover:underline" onClick={() => goToStep(1)}>
                    {T.backButton}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Warning Modal */}
          {warning && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
              <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl font-bold mb-3 text-red-600">{T.warnings[warning].title}</h2>
                <p className="mb-1 text-sm font-semibold text-gray-600">{T.terminalLabel}</p>
                <pre className="mb-4 p-3 text-xs bg-gray-900 text-gray-100 rounded overflow-x-auto">
                  {TERMINAL[warning]}
                </pre>
                <p className="mb-4">{T.warnings[warning].content}</p>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setWarning(null)}
                >
                  {T.closeButton}
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
        challengeKey="slopsquatting-dependency"
        successContent={<SlopsquattingDependencySuccessContent />}
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
        .terminal-line {
          display: block;
          background-color: #111827;
          color: #86efac;
          border-radius: 4px;
          padding: 8px 12px;
          font-size: 0.8125rem;
          overflow-x: auto;
          white-space: nowrap;
        }
        .check-button {
          display: block;
          margin-top: 4px;
          padding: 4px 10px;
          font-size: 0.75rem;
          color: #1d4ed8;
          background-color: #fff;
          border: 1px solid #93c5fd;
          border-radius: 4px;
          cursor: pointer;
        }
        .check-button:hover {
          background-color: #eff6ff;
        }
      `}</style>
    </>
  );
}
