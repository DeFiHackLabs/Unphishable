"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { FiChevronDown, FiChevronRight, FiFileText, FiFlag, FiFolder } from "react-icons/fi";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ChallengeCompletionModal from "@/app/components/ChallengeCompletionModal";
import AiIdeRepoAutorunSuccessContent from "./AiIdeRepoAutorunSuccessContent";
import { README_FILE, REPO_FILES, REPO_TREE, TRAP_FILE } from "./repoFiles";

type ModalKind = "drained" | "blocked" | "wrongFlag";

const MODAL_TITLE_COLOR: Record<ModalKind, string> = {
  drained: "text-red-600",
  blocked: "text-emerald-600",
  wrongFlag: "text-amber-600",
};

const BUBBLE =
  "w-fit max-w-[90%] rounded-2xl rounded-tl-sm border border-gray-200 bg-white px-4 py-2 shadow-sm";
const TREE_ROW =
  "flex w-full items-center gap-2 rounded py-1 pr-2 text-left font-mono text-[13px] hover:bg-slate-700";

export function AiIdeRepoAutorun() {
  const { t } = useLanguage();

  const [showHidden, setShowHidden] = useState(false);
  const [openDirs, setOpenDirs] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [trustEnabled, setTrustEnabled] = useState(false);
  const [autoTasksOff, setAutoTasksOff] = useState(false);
  const [modal, setModal] = useState<ModalKind | null>(null);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const toggleDir = (name: string) =>
    setOpenDirs((prev) => (prev.includes(name) ? prev.filter((d) => d !== name) : [...prev, name]));

  // Opening the folder is only survivable if the editor was hardened first.
  const handleOpenFolder = () => setModal(trustEnabled || autoTasksOff ? "blocked" : "drained");

  const handleFlag = () => {
    if (selectedFile === TRAP_FILE) {
      setShowCompletionModal(true);
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setModal("wrongFlag");
    }
  };

  const settings = [
    {
      id: "security.workspace.trust.enabled",
      label: t.aiIdeRepoAutorun.trustLabel,
      safe: trustEnabled,
      state: trustEnabled ? t.aiIdeRepoAutorun.trustOn : t.aiIdeRepoAutorun.trustOff,
      toggle: () => setTrustEnabled(!trustEnabled),
    },
    {
      id: "task.allowAutomaticTasks",
      label: t.aiIdeRepoAutorun.autoTasksLabel,
      safe: autoTasksOff,
      state: autoTasksOff ? t.aiIdeRepoAutorun.autoTasksOff : t.aiIdeRepoAutorun.autoTasksAllowed,
      toggle: () => setAutoTasksOff(!autoTasksOff),
    },
  ];

  const renderFile = (path: string, label: string, nested: boolean) => (
    <button
      key={path}
      type="button"
      onClick={() => setSelectedFile(path)}
      className={`${TREE_ROW} ${nested ? "pl-[46px]" : "pl-[30px]"} ${
        selectedFile === path ? "bg-slate-700 text-white" : "text-slate-200"
      }`}
    >
      <FiFileText className="shrink-0 text-slate-400" />
      {label}
    </button>
  );

  return (
    <>
      <div ref={topRef} />
      {!showCompletionModal && (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded shadow relative">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 mb-8 text-center">
            <h1 className="challenge-title">{t.aiIdeRepoAutorun.title}</h1>
            <p className="challenge-description">{t.aiIdeRepoAutorun.subtitle}</p>
            <div className="warning-banner">{t.aiIdeRepoAutorun.warning}</div>
          </div>

          <p className="mb-4 text-lg text-gray-700">{t.aiIdeRepoAutorun.scenarioDescription}</p>

          {/* Step 1: the lure. A DM with a "this is how it should look" screenshot. */}
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-800">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500 font-bold text-white">
                MV
              </div>
              <div>
                <div className="font-semibold">Mara Voss</div>
                <div className="text-sm text-gray-500">{t.aiIdeRepoAutorun.dm.role}</div>
              </div>
            </div>
            <div className="space-y-2">
              {t.aiIdeRepoAutorun.dm.messages.map((message, index) => (
                <div key={index} className={BUBBLE}>
                  {message}
                </div>
              ))}
              <div className="relative w-full aspect-[16/10] border rounded-lg overflow-hidden">
                <Image
                  src="/images/challenges/ai-ide-repo-autorun/ide-window.svg"
                  alt={t.aiIdeRepoAutorun.dm.screenshotAlt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={BUBBLE}>{t.aiIdeRepoAutorun.dm.deadline}</div>
            </div>
          </div>

          <p
            className="mt-6 text-gray-700 [&_code]:rounded [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:text-sm"
            dangerouslySetInnerHTML={{ __html: t.aiIdeRepoAutorun.situation }}
          />

          <div className="mt-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 text-gray-800">
            <p className="font-bold">{t.aiIdeRepoAutorun.missionTitle}</p>
            <p>{t.aiIdeRepoAutorun.mission}</p>
          </div>

          {/* Step 2: pre-flight inspection from a terminal, before the editor ever sees the folder. */}
          <div className="mt-6 overflow-hidden rounded-lg border border-slate-700 bg-slate-900 text-slate-200">
            <div className="flex items-center gap-2 bg-slate-800 px-3 py-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 font-mono text-xs text-slate-400">zsh — ~/dev/vault-audit-task</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-700 px-3 py-2 font-mono text-[13px]">
              <span className="text-emerald-400">vault-audit-task $</span>
              {["ls", "ls -la"].map((command, index) => (
                <button
                  key={command}
                  type="button"
                  onClick={() => setShowHidden(index === 1)}
                  className={`rounded border px-2 py-0.5 ${
                    showHidden === (index === 1)
                      ? "border-emerald-400 bg-emerald-400/10 text-emerald-300"
                      : "border-slate-600 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {command}
                </button>
              ))}
              <span className="font-sans text-xs text-slate-400">{t.aiIdeRepoAutorun.treeHint}</span>
            </div>

            <div className="grid md:grid-cols-5">
              <div className="border-b border-slate-700 p-2 md:col-span-2 md:border-b-0 md:border-r">
                {REPO_TREE.filter((entry) => showHidden || !entry.hidden).map((entry) =>
                  entry.files ? (
                    <div key={entry.name}>
                      <button
                        type="button"
                        onClick={() => toggleDir(entry.name)}
                        className={`${TREE_ROW} pl-2 text-slate-200`}
                      >
                        {openDirs.includes(entry.name) ? (
                          <FiChevronDown className="shrink-0" />
                        ) : (
                          <FiChevronRight className="shrink-0" />
                        )}
                        <FiFolder className="shrink-0 text-sky-300" />
                        {entry.name}/
                      </button>
                      {openDirs.includes(entry.name) &&
                        entry.files.map((file) => renderFile(`${entry.name}/${file}`, file, true))}
                    </div>
                  ) : (
                    renderFile(entry.name, entry.name, false)
                  )
                )}
              </div>

              <div className="min-w-0 md:col-span-3 md:min-h-[320px]">
                {selectedFile ? (
                  <>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 px-3 py-2">
                      <code className="font-mono text-[13px] text-emerald-300">$ cat {selectedFile}</code>
                      <button
                        type="button"
                        onClick={handleFlag}
                        className="flex items-center gap-1 rounded bg-red-500 px-3 py-1 text-sm font-semibold text-white hover:bg-red-600"
                      >
                        <FiFlag />
                        {t.aiIdeRepoAutorun.flagButton}
                      </button>
                    </div>
                    <pre className="whitespace-pre-wrap break-words p-3 font-mono text-[13px] leading-5 text-slate-100">
                      {selectedFile === README_FILE ? t.aiIdeRepoAutorun.readmeContent : REPO_FILES[selectedFile]}
                    </pre>
                  </>
                ) : (
                  <p className="p-4 text-sm text-slate-400">{t.aiIdeRepoAutorun.viewerEmpty}</p>
                )}
              </div>
            </div>
          </div>

          {/* Editor settings the player may harden before opening anything. */}
          <div className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-5 text-gray-800">
            <h3 className="text-lg font-bold">{t.aiIdeRepoAutorun.settingsTitle}</h3>
            <p className="mb-3 text-sm text-gray-600">{t.aiIdeRepoAutorun.settingsHint}</p>
            {settings.map((setting) => (
              <div
                key={setting.id}
                className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 py-3"
              >
                <div>
                  <div className="font-semibold">{setting.label}</div>
                  <code className="text-xs text-gray-500">{setting.id}</code>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={setting.safe}
                  onClick={setting.toggle}
                  className="flex items-center gap-2 text-sm font-semibold"
                >
                  <span className={setting.safe ? "text-emerald-700" : "text-gray-600"}>{setting.state}</span>
                  <span
                    className={`flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 ${
                      setting.safe ? "justify-end bg-emerald-500" : "justify-start bg-gray-400"
                    }`}
                  >
                    <span className="h-5 w-5 rounded-full bg-white shadow" />
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Decision point: the tempting one-click path. */}
          <div className="mt-6 flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={handleOpenFolder}
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
            >
              {t.aiIdeRepoAutorun.openButton}
            </button>
            <p className="text-sm text-gray-500">{t.aiIdeRepoAutorun.openNote}</p>
          </div>

          {/* Warning Modal */}
          {modal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
              <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded bg-white p-8 text-gray-800 shadow-lg">
                <h2 className={`mb-3 text-xl font-bold ${MODAL_TITLE_COLOR[modal]}`}>
                  {t.aiIdeRepoAutorun.modals[modal].title}
                </h2>
                {t.aiIdeRepoAutorun.modals[modal].lines.map((line, index) => (
                  <p key={index} className="mb-3">
                    {line}
                  </p>
                ))}
                <button
                  className="mt-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => setModal(null)}
                >
                  {t.aiIdeRepoAutorun.modals[modal].button}
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
        challengeKey="ai-ide-repo-autorun"
        successContent={<AiIdeRepoAutorunSuccessContent />}
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
      `}</style>
    </>
  );
}
