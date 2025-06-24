'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import styles from './FakeCaptchaPhishing.module.css';
import FakeCaptchaPhishingSuccessContent from './FakeCaptchaPhishingSuccessContent';

export default function FakeCaptchaPhishing() {
  const { t } = useLanguage();
  const [stage, setStage] = useState<'intro' | 'challenge' | 'result'>('intro');
  const [challengeState, setChallengeState] = useState<'cryptoPage' | 'securityPage'>('cryptoPage');
  const [showRunDialog, setShowRunDialog] = useState(false);
  const [checked, setChecked] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [resultSuccess, setResultSuccess] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [currentUrl, setCurrentUrl] = useState('https://dexscreener.com');
  const runCommandRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (stage === 'challenge') {
      setTimeout(() => {
        setHintVisible(true);
      }, 1000);
    }
  }, [stage]);

  useEffect(() => {
    if (showInstructions) {
      // 設置淡入效果的延遲
      setTimeout(() => {
        setFadeIn(true);
      }, 50);
    } else {
      setFadeIn(false);
    }
  }, [showInstructions]);

  const startChallenge = () => {
    setStage('challenge');
    resetChallenge();
  };

  const resetChallenge = () => {
    setChallengeState('cryptoPage');
    setChecked(false);
    setVerifying(false);
    setExpanded(false);
    setShowInstructions(false);
    setFadeIn(false);
    setCurrentUrl('https://dexscreener.com');
    setHintVisible(true);
  };

  const showSecurityCheck = () => {
    setChallengeState('securityPage');
    setCurrentUrl('https://gettrumpmemess.com');
    setHintVisible(false);
  };

  const handleCheckboxChange = () => {
    setChecked(true);
    setVerifying(true);

    // After 2 seconds, expand and show instructions
    setTimeout(() => {
      setExpanded(true);

      setTimeout(() => {
        setVerifying(false); // 隱藏驗證中狀態
        setShowInstructions(true);

        // Copy command to clipboard
        navigator.clipboard.writeText('powershell -Command "Start-Process powershell -Verb RunAs"');

        // Show run dialog after 3 seconds
        setTimeout(() => {
          setShowRunDialog(true);
        }, 3000);
      }, 500);
    }, 2000);
  };

  const handleChallenge = async (isCancelled: boolean) => {
    setShowRunDialog(false);
    setStage('result');
    setResultSuccess(isCancelled);

    if (isCancelled) {
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
          {stage === 'intro' && (
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4 challenge-title">{t.fakeCaptchaPhishing.title}</h1>
              <h2 className="text-xl mb-2 challenge-subtitle">{t.fakeCaptchaPhishing.subtitle}</h2>
              <h3 className="text-lg text-yellow-600 mb-4">{t.fakeCaptchaPhishing.warning}</h3>

              <p className="mb-4 text-gray-600 challenge-description">{t.fakeCaptchaPhishing.intro.description}</p>
              <p className="mb-6 text-gray-600 challenge-description"><strong>Scenario:</strong> {t.fakeCaptchaPhishing.intro.scenario}</p>

              <button
                onClick={startChallenge}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mx-auto block"
              >
                {t.fakeCaptchaPhishing.startButton}
              </button>
            </div>
          )}

          {stage === 'challenge' && (
            <div className="browser-window bg-white rounded-lg shadow-md overflow-hidden">
              {/* Browser Header */}
              <div className="bg-gray-100 p-3 border-b border-gray-200">
                <div className="flex gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex gap-1">
                    <button className="px-2 py-1 text-gray-600">←</button>
                    <button className="px-2 py-1 text-gray-600">→</button>
                    <button className="px-2 py-1 text-gray-600">↻</button>
                  </div>
                  <div className="flex-1 bg-white border border-gray-300 rounded px-3 py-2 text-sm flex items-center">
                    <span className="text-green-600 mr-2">🔒</span>
                    <span>{currentUrl}</span>
                  </div>
                  <button className="px-2 py-1 text-gray-600">⭐</button>
                  <button className="px-2 py-1 text-gray-600">☰</button>
                </div>
              </div>

              {/* Browser Content */}
              <div className="p-4">
                {/* Crypto Page */}
                {challengeState === 'cryptoPage' && (
                  <div className="crypto-page">
                    <div className="flex justify-between items-center mb-6">
                      <h1 className="text-2xl font-bold">Dexscreener</h1>
                    </div>
                    <div className="mb-4">
                      <h2 className="text-xl mb-2">Dexscreener</h2>
                      <p className="text-gray-600">The #1 DEX explorer for traders and analysts.</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          N
                        </div>
                        <div>
                          <h2 className="font-bold">{t.fakeCaptchaPhishing.browser.tokenTitle}</h2>
                          <p className="text-gray-600">{t.fakeCaptchaPhishing.browser.tokenPrice}</p>
                        </div>
                      </div>
                      <button
                        onClick={showSecurityCheck}
                        className={`text-blue-600 flex items-center gap-1 relative ${hintVisible ? 'animate-pulse' : ''}`}
                      >
                        {t.fakeCaptchaPhishing.browser.websiteButton}

                        {hintVisible && (
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-2 py-1 rounded text-sm animate-bounce whitespace-nowrap">
                            👆 Click here to verify your account
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Security Check Page */}
                {challengeState === 'securityPage' && (
                  <div className="bg-white py-8">
                    <div className="max-w-2xl mx-auto text-center">
                      <h1 className="text-3xl font-bold mb-4">{t.fakeCaptchaPhishing.captcha.domainTitle}</h1>
                      <h2 className="text-xl mb-6">{t.fakeCaptchaPhishing.captcha.verifyHuman}</h2>

                      <div className="verify-section bg-gray-50 border border-gray-200 rounded-lg p-1 pl-5 w-full max-w-md mx-auto relative overflow-hidden transition-all duration-500" style={{ height: expanded ? '200px' : '65px' }}>
                        {/* Checkbox Container */}
                        {!checked && (
                          <div className="flex items-center gap-2 h-14">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                className="sr-only"
                                onChange={handleCheckboxChange}
                              />
                              <span className="w-6 h-6 border-2 border-gray-400 rounded flex items-center justify-center bg-white mr-2">
                                <span className="opacity-0">✓</span>
                              </span>
                              {t.fakeCaptchaPhishing.captcha.verifyCheckbox}
                            </label>
                          </div>
                        )}

                        {/* Verifying State */}
                        {verifying && (
                          <div className="flex items-center h-14 px-4">
                            <div id="verifying-msg" className="flex items-center">
                              <svg
                                className={styles['spinner-cloudflare']}
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                              >
                                <line x1="15" x2="15" y1="1.5" y2="5.5" className={styles.circle}></line>
                                <line x1="24.5459" x2="24.5459" y1="5.45405" y2="10.45405" transform="rotate(45 24.5459 5.45405)" className={styles.circle}></line>
                                <line x1="28.5" x2="28.5" y1="15" y2="20" transform="rotate(90 28.5 15)" className={styles.circle}></line>
                                <line x1="24.5459" x2="24.5459" y1="24.546" y2="29.546" transform="rotate(135 24.5459 24.546)" className={styles.circle}></line>
                                <line x1="15" x2="15" y1="28.5" y2="33.5" transform="rotate(180 15 28.5)" className={styles.circle}></line>
                                <line x1="5.4541" x2="5.4541" y1="24.5459" y2="29.5459" transform="rotate(-135 5.4541 24.5459)" className={styles.circle}></line>
                                <line x1="1.5" x2="1.5" y1="15" y2="20" transform="rotate(-90 1.5 15)" className={styles.circle}></line>
                                <line x1="5.45408" x2="5.45408" y1="5.45404" y2="10.45404" transform="rotate(-45 5.45408 5.45404)" className={styles.circle}></line>
                              </svg>
                              <span className="text-base font-normal ml-1">{t.fakeCaptchaPhishing.captcha.verifying}</span>
                            </div>
                          </div>
                        )}

                        {/* Instructions */}
                        {showInstructions && (
                          <div
                            className={`py-2 transition-opacity duration-300 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
                            style={{ transform: fadeIn ? 'translateY(0)' : 'translateY(-10px)' }}
                          >
                            <h3 className="font-bold text-center mb-2">{t.fakeCaptchaPhishing.captcha.additionalVerification}</h3>
                            <ol className="pl-6 space-y-2 text-sm">
                              <li>
                                {t.fakeCaptchaPhishing.captcha.instructions.step1}
                                <span className="inline-flex items-center mx-1 px-1 py-0.5 bg-white border border-gray-300 rounded text-xs">
                                  <svg className="w-3 h-3 mr-1" viewBox="0 0 448 448">
                                    <path d="M0 64v160h194.667V38.814L0 64M225.333 33.067L448 0v224H225.333V33.067M194.667 256v173.186L0 455.11V256h194.667M225.333 256H448v224l-222.667-32.933V256"></path>
                                  </svg>
                                  {t.fakeCaptchaPhishing.captcha.instructions.windowsKey}
                                </span>
                                +
                                <span className="inline-flex items-center mx-1 px-1 py-0.5 bg-white border border-gray-300 rounded text-xs">
                                  R
                                </span>
                                {t.fakeCaptchaPhishing.captcha.instructions.step2}
                              </li>
                              <li>
                                {t.fakeCaptchaPhishing.captcha.instructions.step3}
                                <span className="inline-flex items-center mx-1 px-1 py-0.5 bg-white border border-gray-300 rounded text-xs">
                                  Ctrl
                                </span>
                                +
                                <span className="inline-flex items-center mx-1 px-1 py-0.5 bg-white border border-gray-300 rounded text-xs">
                                  V
                                </span>
                                {t.fakeCaptchaPhishing.captcha.instructions.step4}
                              </li>
                              <li>
                                {t.fakeCaptchaPhishing.captcha.instructions.step5}
                                <strong className="mx-1">OK</strong>
                                {t.fakeCaptchaPhishing.captcha.instructions.step7}
                              </li>
                            </ol>
                          </div>
                        )}

                        {/* Branding - Cloudflare Logo */}
                        <div className="absolute bottom-2 right-2 text-right">
                          <a
                            className="cf-link"
                            target="_blank"
                            href="https://www.cloudflare.com/products/turnstile/?utm_source=turnstile&amp;utm_campaign=widget"
                            rel="noopener noreferrer"
                          >
                            <svg role="img" aria-label="Cloudflare" className="h-5 mb-1" viewBox="0 0 73 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              {/* Cloudflare logo 主體 */}
                              <path d="M61.8848 15.7841L62.0632 15.1578C62.2758 14.4126 62.1967 13.7239 61.8401 13.2178C61.5118 12.7517 60.9649 12.4773 60.3007 12.4453L47.7201 12.2836C47.6811 12.2829 47.6428 12.2728 47.6083 12.2542C47.5738 12.2356 47.5442 12.209 47.5217 12.1766C47.4996 12.1431 47.4856 12.1049 47.4807 12.0649C47.4758 12.025 47.4801 11.9844 47.4933 11.9465C47.5149 11.8839 47.5541 11.8291 47.6061 11.7888C47.658 11.7486 47.7204 11.7247 47.7856 11.72L60.4827 11.5566C61.9889 11.4864 63.6196 10.2462 64.1905 8.73372L64.9146 6.81361C64.9443 6.73242 64.951 6.64444 64.9341 6.55957C64.112 2.80652 60.8115 0 56.8652 0C53.2293 0 50.1421 2.38158 49.0347 5.69186C48.2864 5.12186 47.3535 4.85982 46.4228 4.95823C44.6785 5.13401 43.276 6.55928 43.1034 8.32979C43.059 8.77189 43.0915 9.21845 43.1992 9.64918C40.3497 9.73347 38.0645 12.1027 38.0645 15.0151C38.0649 15.2751 38.0838 15.5347 38.1212 15.7919C38.1294 15.8513 38.1584 15.9057 38.2029 15.9452C38.2474 15.9847 38.3044 16.0067 38.3635 16.0071L61.5894 16.0099C61.5916 16.0101 61.5938 16.0101 61.596 16.0099C61.6616 16.0088 61.7252 15.9862 61.7772 15.9455C61.8293 15.9049 61.867 15.8483 61.8848 15.7841Z" fill="#F6821F"></path>
                              <path d="M66.0758 6.95285C65.9592 6.95285 65.843 6.95582 65.7274 6.96177C65.7087 6.96312 65.6904 6.96719 65.6729 6.97385C65.6426 6.98437 65.6152 7.00219 65.5931 7.02579C65.5711 7.04939 65.555 7.07806 65.5462 7.10936L65.0515 8.84333C64.8389 9.58847 64.918 10.2766 65.2749 10.7827C65.6029 11.2494 66.1498 11.5233 66.814 11.5552L69.4959 11.7186C69.5336 11.7199 69.5705 11.73 69.6037 11.7483C69.6369 11.7666 69.6654 11.7925 69.687 11.8239C69.7092 11.8576 69.7234 11.896 69.7283 11.9363C69.7332 11.9765 69.7288 12.0173 69.7153 12.0555C69.6937 12.118 69.6546 12.1727 69.6028 12.2129C69.5509 12.2531 69.4887 12.2771 69.4236 12.2819L66.6371 12.4453C65.1241 12.5161 63.4937 13.7558 62.9233 15.2682L62.722 15.8022C62.7136 15.8245 62.7105 15.8486 62.713 15.8724C62.7155 15.8961 62.7236 15.9189 62.7365 15.9389C62.7495 15.9589 62.7669 15.9755 62.7874 15.9873C62.8079 15.9991 62.8309 16.0058 62.8544 16.0068C62.8569 16.0068 62.8592 16.0068 62.8618 16.0068H72.4502C72.506 16.0073 72.5604 15.9893 72.6051 15.9554C72.6498 15.9216 72.6823 15.8739 72.6977 15.8195C72.8677 15.2043 72.9535 14.5684 72.9529 13.9296C72.9517 10.0767 69.8732 6.95285 66.0758 6.95285Z" fill="#FBAD41"></path>

                              {/* 文字部分 */}
                              <path d="M8.11963 18.8904H9.75541V23.4254H12.6139V24.8798H8.11963V18.8904Z" className="fill-black"></path>
                              <path d="M14.3081 21.9023V21.8853C14.3081 20.1655 15.674 18.7704 17.4952 18.7704C19.3164 18.7704 20.6653 20.1482 20.6653 21.8681V21.8853C20.6653 23.6052 19.2991 24.9994 17.4785 24.9994C15.6578 24.9994 14.3081 23.6222 14.3081 21.9023ZM18.9958 21.9023V21.8853C18.9958 21.0222 18.3806 20.2679 17.4785 20.2679C16.5846 20.2679 15.9858 21.0038 15.9858 21.8681V21.8853C15.9858 22.7484 16.6013 23.5025 17.4952 23.5025C18.3973 23.5025 18.9958 22.7666 18.9958 21.9023Z" className="fill-black"></path>
                              <path d="M22.6674 22.253V18.8901H24.3284V22.2191C24.3284 23.0822 24.7584 23.4939 25.4159 23.4939C26.0733 23.4939 26.5034 23.1003 26.5034 22.2617V18.8901H28.1647V22.2093C28.1647 24.1432 27.0772 24.9899 25.3991 24.9899C23.7211 24.9899 22.6674 24.1268 22.6674 22.2522" className="fill-black"></path>
                              <path d="M30.668 18.8907H32.9445C35.0526 18.8907 36.275 20.1226 36.275 21.8508V21.8684C36.275 23.5963 35.0355 24.88 32.911 24.88H30.668V18.8907ZM32.97 23.4076C33.9483 23.4076 34.597 22.8609 34.597 21.8928V21.8759C34.597 20.9178 33.9483 20.3614 32.97 20.3614H32.3038V23.4082L32.97 23.4076Z" className="fill-black"></path>
                              <path d="M38.6525 18.8904H43.3738V20.3453H40.2883V21.3632H43.079V22.7407H40.2883V24.8798H38.6525V18.8904Z" className="fill-black"></path>
                              <path d="M45.65 18.8904H47.2858V23.4254H50.1443V24.8798H45.65V18.8904Z" className="fill-black"></path>
                              <path d="M54.4187 18.8475H55.9949L58.5079 24.8797H56.7541L56.3238 23.8101H54.047L53.6257 24.8797H51.9058L54.4187 18.8475ZM55.8518 22.5183L55.1941 20.8154L54.5278 22.5183H55.8518Z" className="fill-black"></path>
                              <path d="M60.6149 18.8901H63.4056C64.3083 18.8901 64.9317 19.13 65.328 19.5406C65.6742 19.883 65.8511 20.3462 65.8511 20.9357V20.9526C65.8511 21.8678 65.3691 22.4754 64.6369 22.7919L66.045 24.88H64.1558L62.9671 23.0658H62.2507V24.88H60.6149V18.8901ZM63.3299 21.7654C63.8864 21.7654 64.2071 21.4915 64.2071 21.0551V21.0381C64.2071 20.5674 63.8697 20.328 63.3211 20.328H62.2507V21.7665L63.3299 21.7654Z" className="fill-black"></path>
                              <path d="M68.2112 18.8904H72.9578V20.3024H69.8302V21.209H72.6632V22.5183H69.8302V23.4683H73V24.8798H68.2112V18.8904Z" className="fill-black"></path>
                              <path d="M4.53824 22.6043C4.30918 23.13 3.82723 23.5022 3.18681 23.5022C2.29265 23.5022 1.67746 22.7493 1.67746 21.8851V21.8678C1.67746 21.0047 2.27593 20.2676 3.1698 20.2676C3.84367 20.2676 4.35681 20.6882 4.5734 21.2605H6.29764C6.02151 19.8349 4.78716 18.7707 3.18681 18.7707C1.36533 18.7707 0 20.1666 0 21.8851V21.9021C0 23.6219 1.3486 25 3.1698 25C4.72762 25 5.94525 23.9764 6.26645 22.6046L4.53824 22.6043Z" className="fill-black"></path>
                            </svg>
                          </a>
                          <div className="text-xs text-gray-500">
                            <a href="#" className="text-gray-600 hover:underline">{t.fakeCaptchaPhishing.captcha.privacyLink}</a>
                            <span className="mx-1">•</span>
                            <a href="#" className="text-gray-600 hover:underline">{t.fakeCaptchaPhishing.captcha.termsLink}</a>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mt-6">{t.fakeCaptchaPhishing.captcha.securityCheck}</p>

                      <div className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-500 flex justify-center">
                        <div>
                          <div>{t.fakeCaptchaPhishing.captcha.footer.rayId} <code>8c71b9257c3eb4ee</code></div>
                          <div className="mt-1">
                            {t.fakeCaptchaPhishing.captcha.footer.performanceSecurity}{' '}
                            <a href="#" className="text-blue-500 hover:underline">Cloudflare</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Run Dialog */}
          {showRunDialog && (
            <div className="fixed left-5 bottom-5 z-50">
              <div className="bg-white w-80 rounded shadow-lg overflow-hidden border border-gray-300">
                <div className="bg-[#0078d7] text-black p-1.5 flex justify-between items-center">
                  <span className="text-sm font-normal">{t.fakeCaptchaPhishing.runDialog.title}</span>
                  <button
                    onClick={() => handleChallenge(true)}
                    className="text-black text-sm hover:bg-[#e81123] hover:text-white px-1 rounded"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-3">
                  <label className="block text-xs text-black mb-1">
                    {t.fakeCaptchaPhishing.runDialog.openLabel}
                  </label>
                  <input
                    ref={runCommandRef}
                    type="text"
                    className="w-full p-1.5 text-sm border border-gray-400 rounded-sm mb-3 text-black"
                    defaultValue="powershell -Command &quot;Start-Process powershell -Verb RunAs&quot;"
                    readOnly
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      className="px-4 py-1 bg-[#e1e1e1] border border-[#adadad] text-black rounded hover:bg-gray-300"
                      onClick={() => handleChallenge(true)}
                    >
                      {t.fakeCaptchaPhishing.runDialog.cancelButton}
                    </button>
                    <button
                      className="px-4 py-1 bg-[#e1e1e1] border border-[#adadad] text-black rounded hover:bg-gray-300 animate-pulse"
                      onClick={() => handleChallenge(false)}
                    >
                      {t.fakeCaptchaPhishing.runDialog.okButton}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Result Dialog */}
          {stage === 'result' && (
            <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
              {resultSuccess ? (
                <div>
                  <h3 className="text-xl font-bold text-green-600 mb-4 text-center">
                    {t.fakeCaptchaPhishing.results.success.title}
                  </h3>
                  <p className="mb-4"><strong>{t.fakeCaptchaPhishing.results.success.description}</strong></p>
                  <p className="mb-2">{t.fakeCaptchaPhishing.results.success.learned}</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    {t.fakeCaptchaPhishing.results.success.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  <p className="mb-4">{t.fakeCaptchaPhishing.results.success.reminder}</p>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-4 text-center">
                    {t.fakeCaptchaPhishing.results.failure.title}
                  </h3>
                  <p className="mb-4"><strong>{t.fakeCaptchaPhishing.results.failure.description}</strong></p>
                  <p className="mb-2">{t.fakeCaptchaPhishing.results.failure.learned}</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    {t.fakeCaptchaPhishing.results.failure.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  <p className="mb-4">{t.fakeCaptchaPhishing.results.failure.reminder}</p>
                </div>
              )}

              <div className="flex justify-center mt-6 gap-4">
                <button
                  onClick={startChallenge}
                  className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  {t.fakeCaptchaPhishing.results.tryAgainButton}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="fake-captcha"
        successContent={<FakeCaptchaPhishingSuccessContent />}
      />
    </>
  );
}