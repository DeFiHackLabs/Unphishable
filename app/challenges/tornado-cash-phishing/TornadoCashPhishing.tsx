'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import TornadoCashPhishingSuccessContent from './TornadoCashPhishingSuccessContent';

export default function TornadoCashPhishing() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('withdraw');
  const [showExplanation, setShowExplanation] = useState(false);
  const [withdrawNote, setWithdrawNote] = useState('');
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [withdrawStatus, setWithdrawStatus] = useState({ show: false, message: '', type: '' });
  const [userAnswers, setUserAnswers] = useState({
    domainName: false,
    recipientAddress: false,
    contractAddress: false,
    uiDifferences: false,
  });
  const [submissionResult, setSubmissionResult] = useState({ show: false, allCorrect: false, count: 0 });

  const correctAnswers = ['domainName', 'recipientAddress', 'contractAddress', 'uiDifferences'];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleWithdrawSubmit = () => {
    if (!withdrawNote.trim()) {
      setWithdrawStatus({
        show: true,
        message: t.tornadoCashPhishing.errors.emptyNote,
        type: 'error',
      });
    } else {
      setWithdrawStatus({
        show: true,
        message: t.tornadoCashPhishing.phishingAlert,
        type: 'error',
      });
    }
  };

  const handleCheckboxChange = (name: keyof typeof userAnswers) => {
    setUserAnswers((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const checkAnswers = async () => {
    const selectedAnswers = Object.entries(userAnswers)
      .filter(([, isSelected]) => isSelected)
      .map(([key]) => key);

    const allCorrect = selectedAnswers.length === correctAnswers.length;

    setSubmissionResult({
      show: true,
      allCorrect,
      count: selectedAnswers.length,
    });

    if (allCorrect) {
      setShowExplanation(true);
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 challenge-title">{t.tornadoCashPhishing.title}</h1>
            <h2 className="text-xl mb-2 challenge-subtitle">{t.tornadoCashPhishing.subtitle}</h2>
            <h3 className="text-lg text-yellow-600">{t.tornadoCashPhishing.warning}</h3>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 challenge-title">{t.tornadoCashPhishing.scenarioTitle}</h3>
            <p className="mb-4 challenge-title">{t.tornadoCashPhishing.scenarioDescription}</p>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
              <p><strong>{t.tornadoCashPhishing.warningLabel}:</strong> {t.tornadoCashPhishing.warningText}</p>
            </div>

            {/* Tornado Cash Interface */}
            <div className="bg-[#0a0e17] rounded-xl p-6 mb-6 shadow-lg border border-[#2a2f3c]">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#2a2f3c]">
                <div className="flex items-center text-[#94febf] text-xl font-bold">
                  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#ffffff" />
                    <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#94febf" />
                    <path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" fill="#ffffff" />
                  </svg>
                  TornadoEth.cash
                </div>
                <div className="flex items-center">
                  <button className="flex items-center justify-center w-8 h-8 rounded border border-[#2a2f3c] text-[#94febf]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#94febf" strokeWidth="2" />
                      <path d="M12 16V12M12 8H12.01" stroke="#94febf" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex space-x-6">
                <div className="flex-grow bg-[#0a0e17] rounded-lg border border-[#2a2f3c] overflow-hidden">
                  <div className="flex border-b border-[#2a2f3c]">
                    <button
                      className={`px-6 py-3 ${activeTab === 'deposit' ? 'text-[#94febf] font-bold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#94febf]' : 'text-white'}`}
                      onClick={() => handleTabClick('deposit')}
                    >
                      {t.tornadoCashPhishing.tabs.deposit}
                    </button>
                    <button
                      className={`px-6 py-3 ${activeTab === 'withdraw' ? 'text-[#94febf] font-bold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#94febf]' : 'text-white'}`}
                      onClick={() => handleTabClick('withdraw')}
                    >
                      {t.tornadoCashPhishing.tabs.withdraw}
                    </button>
                  </div>

                  <div className="p-5">
                    {activeTab === 'deposit' && (
                      <div>
                        <div className="mb-4">
                          <label className="block text-white mb-2">{t.tornadoCashPhishing.form.token}</label>
                          <select className="w-full p-2.5 bg-[#0a0e17] border border-[#2a2f3c] rounded text-white">
                            <option value="eth">ETH</option>
                          </select>
                        </div>
                        <div className="mb-6">
                          <label className="block text-white mb-2">
                            {t.tornadoCashPhishing.form.amount}: <span>100</span>
                          </label>
                          <div className="mt-6 mb-6">
                            <div className="h-1 bg-[#2a2f3c] rounded relative">
                              <div className="absolute h-full w-full bg-[#94febf] rounded"></div>
                            </div>
                            <div className="flex justify-between mt-6 text-white">
                              <div className="relative">0.1 ETH</div>
                              <div className="relative">1 ETH</div>
                              <div className="relative">10 ETH</div>
                              <div className="relative font-bold text-[#94febf]">100 ETH</div>
                            </div>
                          </div>
                        </div>
                        <button className="w-full py-3 px-4 bg-[#94febf] text-black font-bold rounded-md hover:opacity-90 transition">
                          {t.tornadoCashPhishing.buttons.connect}
                        </button>
                      </div>
                    )}

                    {activeTab === 'withdraw' && (
                      <div>
                        <div className="mb-4">
                          <label className="block text-white mb-2">{t.tornadoCashPhishing.form.note}</label>
                          <textarea
                            className="w-full p-2.5 bg-[#0a0e17] border border-[#2a2f3c] rounded text-white"
                            rows={3}
                            placeholder={t.tornadoCashPhishing.form.notePlaceholder}
                            value={withdrawNote}
                            onChange={(e) => setWithdrawNote(e.target.value)}
                          ></textarea>
                        </div>

                        {/* 添加合約地址區域 - 使用釣魚地址 */}
                        <div className="mb-4">
                          <label className="block text-white mb-2">{t.tornadoCashPhishing.form.contractAddress || '合約地址'}</label>
                          <div className="flex items-center">
                            <input
                              type="text"
                              className="w-full p-2.5 bg-[#0a0e17] border border-[#2a2f3c] rounded text-white font-mono text-xs"
                              value="0x3e46de3d2fa2f429fDc8209560Fb808e993F96D3"
                              readOnly
                            />
                            <button className="ml-2 p-2 bg-[#131822] border border-[#2a2f3c] rounded hover:bg-[#1e293b] transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                              </svg>
                            </button>
                          </div>
                          <small className="text-gray-400">{t.tornadoCashPhishing.phishingCheckAddress}</small>
                        </div>

                        <div className="mb-4">
                          <label className="block text-white mb-2">{t.tornadoCashPhishing.form.recipient}</label>
                          <input
                            type="text"
                            className="w-full p-2.5 bg-[#0a0e17] border border-[#2a2f3c] rounded text-white"
                            value="0x1234567890123456789012345678901234567890"
                            readOnly
                          />
                          <small className="text-gray-400">{t.tornadoCashPhishing.form.recipientHelp}</small>
                        </div>
                        {withdrawStatus.show && (
                          <div className={`p-3 my-3 rounded ${withdrawStatus.type === 'success' ? 'bg-green-900 border-l-4 border-green-500 text-green-300' : 'bg-red-900 border-l-4 border-red-500 text-red-300'}`}>
                            {withdrawStatus.message}
                          </div>
                        )}
                        <button
                          className="w-full py-3 px-4 bg-[#94febf] text-black font-bold rounded-md hover:opacity-90 transition"
                          onClick={handleWithdrawSubmit}
                        >
                          {t.tornadoCashPhishing.buttons.withdraw}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-1/3 bg-[#0a0e17] rounded-lg border border-[#2a2f3c] p-5">
                  <div className="text-white text-lg font-bold mb-4">
                    {t.tornadoCashPhishing.stats.title} <span className="bg-[#94febf] text-black px-2 py-0.5 rounded text-sm ml-2">100 ETH</span>
                  </div>

                  <div className="text-white mb-3">
                    {t.tornadoCashPhishing.stats.anonymitySet} <span className="bg-[#94febf] text-black px-2 py-0.5 rounded text-xs ml-2">3</span>
                  </div>

                  <div className="text-white mb-3">38644 {t.tornadoCashPhishing.stats.equalDeposits}</div>

                  <div className="text-white">
                    <div className="mb-2">{t.tornadoCashPhishing.stats.latestDeposits}</div>
                    {/* 模擬 Tornado Cash 最新存款區域，包含截短的交易哈希 */}
                    <div className="h-10 bg-[#131822] rounded mb-2 flex items-center justify-between px-3 text-xs">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-[#94febf] mr-2"></div>
                        <span className="font-mono">100 ETH</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-400 font-mono mr-2">0x7ea2...f93d</span>
                        <span className="text-gray-400">3h</span>
                      </div>
                    </div>
                    <div className="h-10 bg-[#131822] rounded mb-2 flex items-center justify-between px-3 text-xs">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-[#94febf] mr-2"></div>
                        <span className="font-mono">100 ETH</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-400 font-mono mr-2">0x42c1...9e5b</span>
                        <span className="text-gray-400">1d</span>
                      </div>
                    </div>
                    <div className="h-10 bg-[#131822] rounded flex items-center justify-between px-3 text-xs">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-[#94febf] mr-2"></div>
                        <span className="font-mono">100 ETH</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-400 font-mono mr-2">0xa9f7...4b12</span>
                        <span className="text-gray-400">2d</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4 challenge-title">{t.tornadoCashPhishing.challenge.title}</h3>
            <p className="mb-6 challenge-title">{t.tornadoCashPhishing.challenge.description}</p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
              <p>{t.tornadoCashPhishing.challenge.hint}</p>
            </div>

            <div className="mb-6 challenge-title">
              <label className="block font-semibold mb-3">{t.tornadoCashPhishing.challenge.question}</label>
              <div className="space-y-3">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="domain-name"
                    checked={userAnswers.domainName}
                    onChange={() => handleCheckboxChange('domainName')}
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="domain-name" className={userAnswers.domainName && submissionResult.allCorrect ? 'text-green-600 font-bold' : ''}>
                    {t.tornadoCashPhishing.challenge.options[0]}
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="recipient-address"
                    checked={userAnswers.recipientAddress}
                    onChange={() => handleCheckboxChange('recipientAddress')}
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="recipient-address" className={userAnswers.recipientAddress && submissionResult.allCorrect ? 'text-green-600 font-bold' : ''}>
                    {t.tornadoCashPhishing.challenge.options[1]}
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="contract-address"
                    checked={userAnswers.contractAddress}
                    onChange={() => handleCheckboxChange('contractAddress')}
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="contract-address" className={userAnswers.contractAddress && submissionResult.allCorrect ? 'text-green-600 font-bold' : ''}>
                    {t.tornadoCashPhishing.challenge.options[2]}
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="ui-differences"
                    checked={userAnswers.uiDifferences}
                    onChange={() => handleCheckboxChange('uiDifferences')}
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="ui-differences" className={userAnswers.uiDifferences && submissionResult.allCorrect ? 'text-green-600 font-bold' : ''}>
                    {t.tornadoCashPhishing.challenge.options[3]}
                  </label>
                </div>
              </div>
            </div>

            <button
              className="px-6 py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition"
              onClick={checkAnswers}
            >
              {t.tornadoCashPhishing.buttons.submit}
            </button>

            {submissionResult.show && (
              <div className={`mt-4 p-4 rounded-lg ${submissionResult.allCorrect ? 'bg-green-50 border-green-300 text-green-800' : 'bg-yellow-50 border-yellow-300 text-yellow-800'} border`}>
                {submissionResult.allCorrect
                  ? t.tornadoCashPhishing.success.completeMessage
                  : t.tornadoCashPhishing.success.partialMessage.replace('{count}', submissionResult.count.toString()).replace('{total}', correctAnswers.length.toString())
                }
              </div>
            )}

            {showExplanation && (
              <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-4">{t.tornadoCashPhishing.explanation.title}</h3>
                <p className="mb-4">{t.tornadoCashPhishing.explanation.description}</p>

                <p className="font-semibold mb-2">{t.tornadoCashPhishing.explanation.indicatorsTitle}:</p>
                <ol className="list-decimal pl-6 mb-4 space-y-2">
                  {t.tornadoCashPhishing.explanation.indicators.map((indicator, index) => (
                    <li key={index} className="pl-2">
                      <span className="font-medium">{indicator.title}:</span> {indicator.description}
                    </li>
                  ))}
                </ol>

                <p className="mb-4">{t.tornadoCashPhishing.explanation.conclusion}</p>
              </div>
            )}
          </div>
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="tornado-cash-phishing"
        successContent={<TornadoCashPhishingSuccessContent />}
      />
    </>
  );
}
