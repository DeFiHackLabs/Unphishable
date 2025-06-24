'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import XAuthorizeDoubleclickjackingSuccessContent from './XAuthorizeDoubleclickjackingSuccessContent';

export default function XAuthorizeDoubleclickjacking() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [showSecurityAlert, setShowSecurityAlert] = useState(false);
  const [showEducationalSection, setShowEducationalSection] = useState(false);
  const [quizAnswerSelected, setQuizAnswerSelected] = useState('');
  const [flagInput, setFlagInput] = useState('');
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizResult, setQuizResult] = useState({ correct: false, message: '' });
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // For double-click detection
  const lastClickTimeRef = useRef(0);
  //const doubleClickThreshold = 300; // milliseconds

  // For the hidden button in DoubleClickjacking attack
  const authorizeButtonRef = useRef<HTMLButtonElement>(null);

  // Function to handle the authorize button click
  const handleAuthorizeClick = () => {
    const currentTime = new Date().getTime();

    // This is a double-click, move to the next step
    handleNextStep();

    lastClickTimeRef.current = currentTime;
  };

  // Function to handle the next step
  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);

      // If moving to step 3 (success), show educational section and mark challenge as completed
      if (currentStep === 2) {
        setShowEducationalSection(true);
        //submitChallenge();
      } else if (currentStep === 1) {
        // After a short delay, automatically move to step 3
        setTimeout(() => {
          setCurrentStep(3);
          setShowEducationalSection(true);
          //submitChallenge();
        }, 1000);
      }
    }
  };

  // Submit the challenge completion
  // const submitChallenge = async () => {
  //   //setShowCompletionModal(true);
  //   //chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
  // };

  // Function to show security alert
  const handleCancel = () => {
    setShowSecurityAlert(true);
  };

  // Function to continue simulation after security alert
  const continueSimulation = () => {
    setShowSecurityAlert(false);
  };

  // Handle quiz submission
  const handleQuizSubmit = () => {
    const isQuizCorrect = quizAnswerSelected === 'option2';
    const isFlagCorrect = flagInput.trim() === 'X_DOUBLECLICKJACKING_2025';

    let resultMessage = '';

    if (!quizAnswerSelected) {
      resultMessage = t.xAuthorizeDoubleclickjacking.quiz.results.selectAnswer;
    } else if (!flagInput.trim()) {
      resultMessage = t.xAuthorizeDoubleclickjacking.quiz.results.enterFlag;
    } else if (isQuizCorrect && isFlagCorrect) {
      resultMessage = `<span style="font-size: 24px; color: #155724;">${t.xAuthorizeDoubleclickjacking.quiz.results.correct.title}</span><br><br>
        ${t.xAuthorizeDoubleclickjacking.quiz.results.correct.answer}<br><br>
        ${t.xAuthorizeDoubleclickjacking.quiz.results.correct.flag}`;
      setShowCompletionModal(true);
      if (chatEndRef.current)
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      resultMessage = `<span style="font-size: 24px; color: #721c24;">${t.xAuthorizeDoubleclickjacking.quiz.results.incorrect.title}</span><br><br>`;

      if (!isQuizCorrect) {
        resultMessage += `${t.xAuthorizeDoubleclickjacking.quiz.results.incorrect.answer}<br><br>`;
      }

      if (!isFlagCorrect) {
        resultMessage += t.xAuthorizeDoubleclickjacking.quiz.results.incorrect.flag;
      }
    }

    setQuizResult({
      correct: isQuizCorrect && isFlagCorrect,
      message: resultMessage
    });

    setQuizSubmitted(true);
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6">
          {/* Warning Banner */}
          <div className="bg-red-500 text-white text-center p-3 rounded-lg mb-6">
            ⚠️ {t.xAuthorizeDoubleclickjacking.warning} ⚠️
          </div>

          {/* Header */}
          <h1 className="text-3xl font-bold text-center mb-4 challenge-title">{t.xAuthorizeDoubleclickjacking.title}</h1>
          <h2 className="text-xl text-center mb-4 challenge-subtitle">{t.xAuthorizeDoubleclickjacking.subtitle}</h2>

          {/* Scenario Description */}
          <div className="mb-8 challenge-description">
            <h3 className="text-xl font-bold mb-2">{t.xAuthorizeDoubleclickjacking.scenario.title}</h3>
            <p className="mb-4">{t.xAuthorizeDoubleclickjacking.scenario.description}</p>
            <p className="mb-4">{t.xAuthorizeDoubleclickjacking.scenario.explanation}</p>
            <p className="mb-4">{t.xAuthorizeDoubleclickjacking.scenario.discovery}</p>
          </div>

          {/* Step Indicator */}
          <div className="flex justify-center items-center mb-8">
            <div className="flex flex-col items-center">
              <div className={`rounded-full w-10 h-10 flex items-center justify-center ${currentStep >= 1 ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>
                {currentStep >= 1 ? ' 1✓' : '1'}
              </div>
              <div className={`text-center mx-2 ${currentStep >= 1 ? 'text-green-500 font-medium' : ''}`}>{t.xAuthorizeDoubleclickjacking.steps.step1}</div>
            </div>
            <div className={`w-16 h-1 mx-2 ${currentStep >= 2 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            <div className="flex flex-col items-center">
              <div className={`rounded-full w-10 h-10 flex items-center justify-center ${currentStep >= 2 ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>
                {currentStep >= 2 ? ' 2✓' : '2'}
              </div>
              <div className={`text-center mx-2 ${currentStep >= 2 ? 'text-green-500 font-medium' : ''}`}>{t.xAuthorizeDoubleclickjacking.steps.step2}</div>
            </div>
            <div className={`w-16 h-1 mx-2 ${currentStep >= 3 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            <div className="flex flex-col items-center">
              <div className={`rounded-full w-10 h-10 flex items-center justify-center ${currentStep >= 3 ? 'bg-green-500 text-white' : 'bg-gray-300'}`}>
                {currentStep >= 3 ? ' 3✓' : '3'}
              </div>
              <div className={`text-center mx-2 ${currentStep >= 3 ? 'text-green-500 font-medium' : ''}`}>{t.xAuthorizeDoubleclickjacking.steps.step3}</div>
            </div>
          </div>

          {/* Browser Simulation */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            {/* Browser Header */}
            <div className="bg-gray-200 p-3">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-white px-4 py-1 rounded flex items-center">
                <span className="mr-2">🔒</span>
                <span className="text-gray-600 font-mono text-sm">
                  {currentStep === 3
                    ? "https://xx.com/premium/confirmation"
                    : "https://xx.com/i/oauth2/authorize"}
                </span>
              </div>
            </div>

            {/* Browser Content */}
            <div className="p-6">
              {/* Step 1: Authorization */}
              {currentStep === 1 && (
                <div className="relative">
                  <div className="max-w-md mx-auto">
                    <div className="flex items-center mb-6">
                      <img
                        src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-1024.png"
                        alt="X Logo"
                        className="w-10 h-10 mr-4"
                      />
                      <div className="text-xl font-bold">{t.xAuthorizeDoubleclickjacking.oauth.title}</div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold mr-4">
                          TR
                        </div>
                        <div>
                          <div className="font-bold">{t.xAuthorizeDoubleclickjacking.oauth.appName}</div>
                          <div className="text-sm text-gray-600">{t.xAuthorizeDoubleclickjacking.oauth.appDeveloper}</div>
                        </div>
                      </div>

                      <div className="mb-2">{t.xAuthorizeDoubleclickjacking.oauth.permissionsTitle}</div>
                      <div className="space-y-2 mb-4">
                        <div className="flex">
                          <span className="text-blue-500 mr-2">✓</span>
                          <span>{t.xAuthorizeDoubleclickjacking.oauth.permissions.viewProfile}</span>
                        </div>
                        <div className="flex">
                          <span className="text-blue-500 mr-2">✓</span>
                          <span>{t.xAuthorizeDoubleclickjacking.oauth.permissions.viewFollowers}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      ref={authorizeButtonRef}
                      onDoubleClick={handleAuthorizeClick}
                      className="w-full bg-black text-white rounded-full py-2 font-bold mb-4"
                    >
                      {t.xAuthorizeDoubleclickjacking.oauth.authorizeButton}
                    </button>
                    <div className="text-center">
                      <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); handleCancel(); }}
                        className="text-blue-500 hover:underline"
                      >
                        {t.xAuthorizeDoubleclickjacking.oauth.cancelLink}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: More Permissions */}
              {currentStep === 2 && (
                <div className="max-w-md mx-auto">
                  <div className="flex items-center mb-6">
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-1024.png"
                      alt="X Logo"
                      className="w-10 h-10 mr-4"
                    />
                    <div className="text-xl font-bold">{t.xAuthorizeDoubleclickjacking.oauth.title}</div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold mr-4">
                        TR
                      </div>
                      <div>
                        <div className="font-bold">{t.xAuthorizeDoubleclickjacking.oauth.appName}</div>
                        <div className="text-sm text-gray-600">{t.xAuthorizeDoubleclickjacking.oauth.appDeveloper}</div>
                      </div>
                    </div>

                    <div className="mb-2">{t.xAuthorizeDoubleclickjacking.oauth.permissionsTitle}</div>
                    <div className="space-y-2 mb-4">
                      <div className="flex">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>{t.xAuthorizeDoubleclickjacking.oauth.permissions.viewProfile}</span>
                      </div>
                      <div className="flex">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span className="font-bold bg-yellow-100 px-1">{t.xAuthorizeDoubleclickjacking.oauth.permissions.postTweets}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onDoubleClick={handleAuthorizeClick}
                    className="w-full bg-black text-white rounded-full py-2 font-bold mb-4"
                  >
                    {t.xAuthorizeDoubleclickjacking.oauth.authorizeButton}
                  </button>
                  <div className="text-center">
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); handleCancel(); }}
                      className="text-blue-500 hover:underline"
                    >
                      {t.xAuthorizeDoubleclickjacking.oauth.cancelLink}
                    </a>
                  </div>
                </div>
              )}

              {/* Step 3: Success */}
              {currentStep === 3 && (
                <div className="max-w-md mx-auto text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-2xl mx-auto mb-4">
                    ✓
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{t.xAuthorizeDoubleclickjacking.success.title}</h2>
                  <p className="mb-2">{t.xAuthorizeDoubleclickjacking.success.description}</p>
                  <p className="mb-6">{t.xAuthorizeDoubleclickjacking.success.upgradePeriod}</p>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
                    <h3 className="font-bold mb-2">{t.xAuthorizeDoubleclickjacking.success.featuresTitle}</h3>
                    <ul className="list-disc pl-5">
                      {t.xAuthorizeDoubleclickjacking.success.features.map((feature, index) => (
                        <li key={index} className="mb-1">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="text-blue-700">
                      <strong>Flag:</strong> {t.xAuthorizeDoubleclickjacking.success.flag}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Educational Section */}
          {showEducationalSection && (
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-4">{t.xAuthorizeDoubleclickjacking.educational.title}</h3>
              <p className="mb-4">{t.xAuthorizeDoubleclickjacking.educational.description}</p>
              <ol className="list-decimal pl-5 mb-6 space-y-2">
                {t.xAuthorizeDoubleclickjacking.educational.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2">{t.xAuthorizeDoubleclickjacking.educational.attackExplanation.title}</h4>
                <p className="mb-4">{t.xAuthorizeDoubleclickjacking.educational.attackExplanation.description}</p>

                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="flex-1 border rounded-lg overflow-hidden shadow-sm">
                    <div className="bg-gray-100 p-2 text-center font-bold border-b">
                      {t.xAuthorizeDoubleclickjacking.educational.attackExplanation.firstScreen}
                    </div>
                    <div className="p-4">
                      <div className="text-center mb-4">
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-1024.png"
                          alt="X Logo"
                          className="w-8 h-8 mx-auto mb-1"
                        />
                        <div className="font-bold">{t.xAuthorizeDoubleclickjacking.oauth.title}</div>
                      </div>

                      <div className="mb-2 font-bold">{t.xAuthorizeDoubleclickjacking.oauth.permissionsTitle}</div>
                      <div className="space-y-2 mb-4">
                        <div className="flex">
                          <span className="mr-2">✓</span>
                          <span>{t.xAuthorizeDoubleclickjacking.oauth.permissions.viewProfile}</span>
                        </div>
                        <div className="flex">
                          <span className="mr-2">✓</span>
                          <span>{t.xAuthorizeDoubleclickjacking.oauth.permissions.viewFollowers}</span>
                        </div>
                      </div>

                      <div className="text-center mt-4">
                        <button className="bg-blue-500 text-white px-4 py-1 rounded-full font-bold">
                          {t.xAuthorizeDoubleclickjacking.oauth.authorizeButton.split(' ')[0]}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 border rounded-lg overflow-hidden shadow-sm">
                    <div className="bg-gray-100 p-2 text-center font-bold border-b">
                      {t.xAuthorizeDoubleclickjacking.educational.attackExplanation.secondScreen}
                    </div>
                    <div className="p-4">
                      <div className="text-center mb-4">
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-1024.png"
                          alt="X Logo"
                          className="w-8 h-8 mx-auto mb-1"
                        />
                        <div className="font-bold">{t.xAuthorizeDoubleclickjacking.oauth.title}</div>
                      </div>

                      <div className="mb-2 font-bold">{t.xAuthorizeDoubleclickjacking.oauth.permissionsTitle}</div>
                      <div className="space-y-2 mb-4">
                        <div className="flex">
                          <span className="mr-2">✓</span>
                          <span>{t.xAuthorizeDoubleclickjacking.oauth.permissions.viewProfile}</span>
                        </div>
                        <div className="flex bg-yellow-100 px-1">
                          <span className="mr-2">✓</span>
                          <span>{t.xAuthorizeDoubleclickjacking.oauth.permissions.postTweets}</span>
                        </div>
                      </div>

                      <div className="text-center mt-4">
                        <button className="bg-blue-500 text-white px-4 py-1 rounded-full font-bold">
                          {t.xAuthorizeDoubleclickjacking.oauth.authorizeButton.split(' ')[0]}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="bg-red-100 text-red-700 p-3 rounded-lg text-center font-bold">
                  {t.xAuthorizeDoubleclickjacking.educational.attackExplanation.warning}
                </p>
              </div>

              <h4 className="font-bold mb-2">{t.xAuthorizeDoubleclickjacking.educational.dangers.title}</h4>
              <ul className="list-disc pl-5 mb-6">
                {t.xAuthorizeDoubleclickjacking.educational.dangers.points.map((point, index) => (
                  <li key={index} className="mb-1">{point}</li>
                ))}
              </ul>

              <p dangerouslySetInnerHTML={{ __html: t.xAuthorizeDoubleclickjacking.educational.moreInfo }}></p>
            </div>
          )}

          {/* Quiz Section */}
          {showEducationalSection && (
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <div className="text-xl font-bold mb-4">{t.xAuthorizeDoubleclickjacking.quiz.title}</div>
              <div className="mb-4">{t.xAuthorizeDoubleclickjacking.quiz.question}</div>
              <div className="space-y-3 mb-6">
                {t.xAuthorizeDoubleclickjacking.quiz.options.map((option, index) => (
                  <label key={index} className="flex items-start p-3 bg-gray-50 border rounded-md hover:border-blue-300 cursor-pointer">
                    <input
                      type="radio"
                      name="quiz-answer"
                      value={`option${index + 1}`}
                      checked={quizAnswerSelected === `option${index + 1}`}
                      onChange={() => setQuizAnswerSelected(`option${index + 1}`)}
                      className="mt-1 mr-3"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>

              <div className="mb-6">
                <div className="font-bold mb-2">{t.xAuthorizeDoubleclickjacking.quiz.flagInput.title}</div>
                <input
                  type="text"
                  value={flagInput}
                  onChange={(e) => setFlagInput(e.target.value)}
                  placeholder={t.xAuthorizeDoubleclickjacking.quiz.flagInput.placeholder}
                  className="w-full p-2 border rounded"
                />
              </div>

              <button
                onClick={handleQuizSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {t.xAuthorizeDoubleclickjacking.quiz.submitButton}
              </button>

              {quizSubmitted && (
                <div className={`mt-4 p-4 rounded-lg ${quizResult.correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <div dangerouslySetInnerHTML={{ __html: quizResult.message }}></div>
                </div>
              )}
            </div>
          )}

          {/* Security Alert */}
          {showSecurityAlert && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
              <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-4">{t.xAuthorizeDoubleclickjacking.securityAlert.title}</h3>
                <p className="mb-6">{t.xAuthorizeDoubleclickjacking.securityAlert.description}</p>
                <div className="flex gap-3">
                  <button
                    onClick={continueSimulation}
                    className="flex-1 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                  >
                    {t.xAuthorizeDoubleclickjacking.securityAlert.continueButton}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="x-authorize-doubleclickjacking"
        successContent={<XAuthorizeDoubleclickjackingSuccessContent />}
      />
    </>
  );
}
