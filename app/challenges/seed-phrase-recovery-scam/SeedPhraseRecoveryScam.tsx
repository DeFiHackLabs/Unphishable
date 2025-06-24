'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import SeedPhraseSuccessContent from './SeedPhraseSuccessContent';

type ChatMessage = {
  type: 'support' | 'user';
  content: string;
};

export default function SeedPhraseRecoveryScam() {
  const { t, language } = useLanguage();

  const [chatStep, setChatStep] = useState(0);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [showChat, setShowChat] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [issueText, setIssueText] = useState('');
  const [emailText, setEmailText] = useState('');
  const [keysText, setKeysText] = useState('');
  // Always default to true for checkResult to ensure success message shows when endConversation is called
  const [checkResult, setCheckResult] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  useEffect(() => {
    // const existingSuccess = localStorage.getItem('seedPhraseRecoverySuccess');
    // if (existingSuccess) {
    //   setShowResult(true);
    //   setShowChat(false);
    // }
  }, []);

  // 在 chatMessages 更新後滾動聊天容器到底部
  useEffect(() => {
    // 獲取聊天容器元素
    const chatContainer = document.querySelector('.chat-container');
    if (chatContainer) {
      // 捲動聊天容器到底部
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatMessages]); // 當 chatMessages 變化時觸發

  const startSupportChat = () => {
    if (!issueText.trim() || !emailText.trim()) {
      // Check if emailText matches email format
      if (!emailText.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert(language === 'zh-hans' ?
          '请输入有效的电子邮件地址' :
          language === 'zh-hant' ?
            '請輸入有效的電子郵件地址' :
            'Please enter a valid email address');
        return;
      }
      alert(language === 'zh-hans' ?
        '请填写问题描述和电子邮件地址' :
        language === 'zh-hant' ?
          '請填寫問題描述和電子郵件地址' :
          'Please fill in both issue description and email address');
      return;
    }

    // Initialize chat with support messages
    const initialMessages: ChatMessage[] = [
      {
        type: 'support' as const,
        content: t.seedPhraseRecoveryScam.supporterMessage
      },
      {
        type: 'support' as const,
        content: t.seedPhraseRecoveryScam.verificationMessage
      },
      {
        type: 'support' as const,
        content: t.seedPhraseRecoveryScam.securityMessage
      }
    ];

    setChatMessages(initialMessages);
    setShowChat(true);
    setChatStep(0);
  };

  const handleUserResponse = () => {
    if (!keysText.trim() || isProcessing) return;

    setIsProcessing(true);

    // Add user message to chat
    const updatedMessages = [...chatMessages, { type: 'user' as const, content: keysText }];
    setChatMessages(updatedMessages);

    // Check if it looks like a seed phrase
    const seedPhraseCheck = isSeedPhraseAttempt(keysText);
    if (seedPhraseCheck) {
      // This is a failure case - user tried to enter seed phrase
      setCheckResult(false);
      setShowResult(true);
      setShowChat(false);
      setIsProcessing(false);
      return;
    }

    // Increment chat step
    const newChatStep = chatStep + 1;
    setChatStep(newChatStep);

    // Clear input field
    setKeysText('');

    // Add support response based on chat step
    setTimeout(() => {
      let supportMessage = '';

      if (newChatStep === 1) {
        supportMessage = language === 'zh-hans' ?
          '谢谢您的回复。为了进行钱包恢复，我需要您的助记词（种子短语）。请提供您的 12-24 个单词的恢复短语，这样我才能帮助您重新获得钱包访问权限。' :
          language === 'zh-hant' ?
            '謝謝您的回覆。為了進行錢包恢復，我需要您的助記詞（種子短語）。請提供您的 12-24 個單詞的恢復短語，這樣我才能幫助您重新獲得錢包訪問權限。' :
            'Thank you for your response. To proceed with wallet recovery, I need your seed phrase. Please provide your 12-24 word recovery phrase so I can help you regain access to your wallet.';
      } else if (newChatStep === 2) {
        supportMessage = language === 'zh-hans' ?
          '我理解您可能有所顾虑。但请放心，我们是官方支持团队，需要您的助记词才能恢复您的钱包访问权限。如果没有这些信息，我们将无法帮助您。请提供您的完整助记词（所有 12-24 个单词），以便我们继续。' :
          language === 'zh-hant' ?
            '我理解您可能有所顧慮。但請放心，我們是官方支持團隊，需要您的助記詞才能恢復您的錢包訪問權限。如果沒有這些信息，我們將無法幫助您。請提供您的完整助記詞（所有 12-24 個單詞），以便我們繼續。' :
            'I understand your concerns. But rest assured, we are the official support team and need your seed phrase to restore your wallet access. Without this information, we won\'t be able to help you. Please provide your complete seed phrase (all 12-24 words) so we can proceed.';
      } else {
        supportMessage = language === 'zh-hans' ?
          '我们注意到您似乎不愿提供您的助记词。请理解，没有这些信息，我们无法恢复您的钱包访问权限。如果您改变主意，请随时提供您的完整助记词（12-24个单词），我们将立即为您提供帮助。' :
          language === 'zh-hant' ?
            '我們注意到您似乎不願提供您的助記詞。請理解，沒有這些信息，我們無法恢復您的錢包訪問權限。如果您改變主意，請隨時提供您的完整助記詞（12-24個單詞），我們將立即為您提供幫助。' :
            'We notice you seem reluctant to provide your seed phrase. Please understand that without this information, we cannot restore your wallet access. If you change your mind, please provide your complete seed phrase (12-24 words) at any time, and we will assist you immediately.';
      }

      setChatMessages(prev => [...prev, { type: 'support' as const, content: supportMessage }]);
      setIsProcessing(false);
    }, 1000); // Delay to simulate typing
  };

  const isSeedPhraseAttempt = (input: string) => {
    // Count words (roughly)
    const wordCount = input.split(/\s+/).filter(word => word.length > 0).length;

    // Check if it has between 8-24 words (most seed phrases are 12 or 24 words)
    // We use 8 as a lower threshold to catch partial seed phrases too
    return wordCount >= 8 && wordCount <= 24;
  }

  const endConversation = async () => {
    setIsProcessing(true);

    try {
      // Create success message based on language
      const message = language === 'zh-hans' ?
        '✅ 挑战成功！您识别并拒绝了钓鱼尝试，保护了您的助记词。' :
        language === 'zh-hant' ?
          '✅ 挑戰成功！您識別並拒絕了釣魚嘗試，保護了您的助記詞。' :
          '✅ CHALLENGE SUCCESSFUL! You identified and rejected the phishing attempt, protecting your seed phrase.';

      // Save success message to state and localStorage
      setSuccessMessage(message);
      localStorage.setItem('seedPhraseRecoverySuccess', message);

      // Always show success message first
      setCheckResult(true);
      setShowResult(true);
      setShowChat(false);
      setShowCompletionModal(true);

      // // Then try to submit challenge to server (but don't block success display if this fails)
      // try {
      //   await challengeService.submitChallenge('seed-phrase-recovery-scam');
      // } catch (submitError) {
      //   console.error('Error submitting challenge (non-blocking):', submitError);
      //   // Don't alert the user - we still want to show success
      // }
    } catch (error) {
      console.error('Unexpected error in endConversation:', error);
      // Still show success even if there's an error
      setCheckResult(true);
      setShowResult(true);
      setShowChat(false);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <div className="container mx-auto max-w-4xl p-4">

        {!showResult && !showChat && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h1 className="text-2xl font-bold text-center mb-4">
              {t.seedPhraseRecoveryScam.title}
            </h1>
            <p className="text-center mb-6">
              {t.seedPhraseRecoveryScam.description}
            </p>

            <div className="border rounded-lg p-6 bg-gray-50">
              <h2 className="text-xl font-semibold mb-4 text-center">
                {t.seedPhraseRecoveryScam.serviceTitle}
              </h2>
              <p className="mb-6 text-center">
                {t.seedPhraseRecoveryScam.serviceDescription}
              </p>

              <div className="mb-4">
                <label className="block font-medium mb-2">
                  {t.seedPhraseRecoveryScam.issueLabel}
                </label>
                <textarea
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder={t.seedPhraseRecoveryScam.issuePlaceholder}
                  value={issueText}
                  onChange={(e) => setIssueText(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label className="block font-medium mb-2">
                  {t.seedPhraseRecoveryScam.emailLabel}
                </label>
                <input
                  type="email"
                  className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder={t.seedPhraseRecoveryScam.emailPlaceholder}
                  value={emailText}
                  onChange={(e) => setEmailText(e.target.value)}
                />
              </div>

              <button
                onClick={startSupportChat}
                className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors"
              >
                {t.seedPhraseRecoveryScam.submitButton}
              </button>
            </div>
          </div>
        )}

        {showChat && (
          <>
            <div className="bg-white rounded-lg shadow p-6 mb-6">

              <h2 className="text-xl font-semibold mb-4 text-center">
                {t.seedPhraseRecoveryScam.chatTitle}
              </h2>

              <div className="chat-container border rounded-lg p-4 bg-gray-50 mb-4 max-h-[400px] overflow-y-auto">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`chat-message mb-4 p-3 rounded ${message.type === 'support'
                      ? 'bg-blue-50 border-l-4 border-blue-500 mr-12'
                      : 'bg-gray-100 border-r-4 border-gray-400 ml-12 text-right'}`}
                  >
                    <p>{message.content}</p>
                  </div>
                ))}
              </div>

              <div className="flex space-x-2">
                <input
                  type="text"
                  className="flex-grow p-3 border rounded focus:ring-2 focus:ring-blue-500"
                  placeholder={t.seedPhraseRecoveryScam.inputPlaceholder}
                  value={keysText}
                  onChange={(e) => setKeysText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !isProcessing && handleUserResponse()}
                  disabled={isProcessing}
                />
                <button
                  onClick={handleUserResponse}
                  className={`px-4 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isProcessing}
                >
                  {t.seedPhraseRecoveryScam.sendButton}
                </button>
                <button
                  onClick={endConversation}
                  className={`px-4 py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isProcessing}
                >
                  {t.seedPhraseRecoveryScam.endButton}
                </button>
              </div>
            </div>
          </>
        )}

        {/* {showResult && checkResult && (
        <SeedPhraseSuccessContent successMessage={successMessage} />
      )} */}

        {showResult && !checkResult && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-6">
            <p className="text-red-700 font-bold">
              {t.seedPhraseRecoveryScam.failureStatus}
            </p>
            <div className="mt-4">
              <h2 className="text-2xl font-bold m-4 text-center">
                {t.seedPhraseRecoveryScam.failureTitle}
              </h2>
              <p className="mb-4">
                {t.seedPhraseRecoveryScam.failureMessage}
              </p>
              <h3 className="text-lg font-semibold mb-5">
                {t.seedPhraseRecoveryScam.whyDangerous}
              </h3>
              <p className="mb-4">
                {t.seedPhraseRecoveryScam.seedPhraseExplanation}
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                {t.seedPhraseRecoveryScam.dangerList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h3 className="text-lg font-semibold mb-5">
                {t.seedPhraseRecoveryScam.rememberTitle}
              </h3>
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.seedPhraseRecoveryScam.rememberMessage }}></p>
              <button
                onClick={() => {
                  localStorage.removeItem('seedPhraseRecoveryFailure');
                  setShowResult(false);
                  setShowChat(false);
                  setKeysText('');
                  setChatStep(0);
                }}
                className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors"
              >
                {t.seedPhraseRecoveryScam.retryButton}
              </button>
            </div>
          </div>
        )}
      </div>
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="seed-phrase-recovery-scam"
        successContent={<SeedPhraseSuccessContent successMessage={successMessage} />}
      />
    </>
  )
}