import { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';

export default function GoogleSpoofedPhishing() {
  const { t } = useLanguage();
  const [emailViewed, setEmailViewed] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [showFakeSupport, setShowFakeSupport] = useState<boolean>(false);
  const [showRawEmail, setShowRawEmail] = useState<boolean>(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [challengeFailed, setChallengeFailed] = useState<boolean>(false);
  const [question1Answer, setQuestion1Answer] = useState<string>('');
  const [question2Answer, setQuestion2Answer] = useState<string>('');

  const rawEmailContent = `X-Received: by 2002:a05:6402:3b8a:b0:4c5:432a:5706 with SMTP id p10-20020a056402:b0:4c5:432a:5706mr10886636edd.146.1649565262572;
        Thu, 10 Apr 2025 06:27:42 +0200 (CEST)
X-Received: by 2002:a05:6402:3b8a:b0:4c5:432a:5706 with SMTP id p10-20020a056402:b0:4c5:432a:5706mr10886636edd.146.1649565262572;
        Thu, 10 Apr 2025 06:27:42 +0200 (CEST)
ARC-Seal: i=1; a=rsa-sha256; t=1649565262; cv=none;
        d=google.com; s=arc-20160816;
        b=E4Wy8zCxchTBgDHHPA+eST9tCK+qKtQD4tCnl8IOlumFYv9MnGzKpH/Qp1Ry1q9Qn5
         Xj9ZQh1Z2kY3W4vN5Q5Q==
ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;
        h=to:subject:message-id:date:from:mime-version:dkim-signature;
        bh=DqVj+2RiMGJyk2hU+G5KhNKFP7s1FST8Ui/hoDiAWZU=;
        b=E4Wy8zCxchTBgDHHPA+eST9tCK+qKtQD4tCnl8IOlumFYv9MnGzKpH/Qp1Ry1q9Qn5
         Xj9ZQh1Z2kY3W4vN5Q5Q==
ARC-Authentication-Results: i=1; mx.google.com;
       dkim=pass header.i=@accounts.google.com header.s=20230601 header.b=A4XNBtK5;
       spf=pass (google.com: domain of no-reply@accounts.google.com designates 209.85.220.69 as permitted sender) smtp.mailfrom=no-reply@accounts.google.com;
       dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=accounts.google.com
Return-Path: <no-reply@accounts.google.com>
Received: from LO2P265MB5805.GBRP265.PROD.OUTLOOK.COM ([::1]) by LO2P265MB5805.GBRP265.PROD.OUTLOOK.COM ([fe80::a534:82a8:7142:f82e%4]) with mapi id 15.20.6544.030; Thu, 10 Apr 2025 06:27:37 +0200
Received: from LO2P265MB5805.GBRP265.PROD.OUTLOOK.COM (2603:10a6:600:26f::14) by CWLP265MB6786.GBRP265.PROD.OUTLOOK.COM (2603:10a6:400:1e8::12) with Microsoft SMTP Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.6544.030; Thu, 10 Apr 2025 06:27:37 +0200
Received: from LO3P265CU004.outbound.protection.outlook.com (mail-uksouthaz17010003.outbound.protection.outlook.com [40.93.67.3]) by asp-relay-pe.jellyfish.systems (Postfix) with ESMTPS id 4NkXhf0Mjtz8vF; Thu, 10 Apr 2025 06:27:39 +0200
Received: from asp-relay-pe.jellyfish.systems (unknown [162.255.118.7]) by mta-02.privateemail.com (Postfix) with ESMTP id 4NkXhf0Mjtz8vF; Thu, 10 Apr 2025 06:27:40 +0200
Received: from mta-02.privateemail.com ([10.50.14.12]) by DIR-08 with LMTP id 4NkXhf0Mjtz8vF; Thu, 10 Apr 2025 06:27:40 +0200
Received: from DIR-08 ([10.50.14.198]) by localhost with LMTP id 4NkXhf0Mjtz8vF; Thu, 10 Apr 2025 06:27:40 +0200
Received: from localhost (unknown [10.50.14.190]) by fwd-04.fwd.privateemail.com (Postfix) with ESMTP id 4NkXhf0Mjtz8vF; Thu, 10 Apr 2025 06:27:41 +0200
Received: from fwd-04.fwd.privateemail.com (localhost [127.0.0.1]) by fwd-04.fwd.privateemail.com (Postfix) with ESMTP id 4NkXhf0Mjtz8vF; Thu, 10 Apr 2025 06:27:41 +0200
Received: from FWD-04.fwd.privateemail.com (localhost [127.0.0.1]) by fwd-04.fwd.privateemail.com (Postfix) with ESMTPS id 4NkXhf0Mjtz8vF; Thu, 10 Apr 2025 06:27:41 +0200
Received: from fwd-04-1.fwd.privateemail.com (fwd-04-1.fwd.privateemail.com [66.29.159.58]) by mx.google.com with ESMTPS id p13-20020a170902f48900b001eaa9c0b444si1882909plb.388; Thu, 10 Apr 2025 06:27:42 +0200
Received: from unknown (HELO 2002:a59:a4af:0:b0:4c5:432a:5706) ([2002:a59:a4af:0:b0:4c5:432a:5706]) by with SMTP; Thu, 10 Apr 2025 06:27:42 +0200
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=accounts.google.com; s=20230601; t=1649565262; x=1652157262;
        h=to:subject:message-id:date:from:mime-version:from:to:cc:subject
         :date:message-id:reply-to;
        bh=DqVj+2RiMGJyk2hU+G5KhNKFP7s1FST8Ui/hoDiAWZU=;
        b=A4XNBtK5oX2K1Z2J3Y4L5M6N7P8Q9R0S1T2U3V4W5X6Y7Z8a9b0c1d2e3f4g
Message-ID: <URL325y_eLEyudzEZjKfSA@notifications.google.com>
Date: Thu, 10 Apr 2025 06:27:42 +0200
From: Google <no-reply@accounts.google.com>
To: me@e-fwd-000000000000097a33d0631f6fe58-goog-ssl.com
Subject: Security alert
MIME-Version: 1.0
Content-Type: multipart/alternative; boundary="000000000000b330ee05f9c7d8d4"`;

  const handleSubmit = async () => {
    console.log('Submit clicked');
    console.log('Current state:', {
      emailViewed,
      question1Answer,
      question2Answer,
      completed,
      challengeFailed
    });

    if (!emailViewed) {
      alert('Please view the phishing email first!');
      return;
    }

    if (!question1Answer || !question2Answer) {
      alert('Please answer both questions!');
      return;
    }

    const normalizedAnswer = question1Answer.toLowerCase().trim();
    console.log('Checking answers:', {
      answer1: normalizedAnswer,
      answer2: question2Answer
    });

    if (normalizedAnswer === 'privateemail.com' && question2Answer === 'no') {
      console.log('Answers are correct');
      setCompleted(true);
      setChallengeFailed(false);
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      console.log('Answers are incorrect');
      setChallengeFailed(true);
      setCompleted(false);
    }
  };

  const testAnswers = () => {
    console.log('Testing answers directly');
    const normalizedAnswer = question1Answer.toLowerCase().trim();
    console.log({
      normalizedAnswer,
      question2Answer,
      isCorrect: normalizedAnswer === 'privateemail.com' && question2Answer === 'no'
    });
  };

  const resetAnswers = () => {
    setQuestion1Answer('');
    setQuestion2Answer('');
    setChallengeFailed(false);
    setCompleted(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  // const parseReceivedHeaders = (content: string) => {
  //   const lines = content.split('\n');
  //   const headers: any[] = [];
  //   let currentHeader: any = {};
  //   let hop = 1;

  //   lines.forEach(line => {
  //     if (line.startsWith('Received: ')) {
  //       if (Object.keys(currentHeader).length > 0) {
  //         headers.push(currentHeader);
  //         currentHeader = {};
  //       }
  //       const match = line.match(/from\s+([^\s]+).*?by\s+([^\s]+)/);
  //       if (match) {
  //         currentHeader = {
  //           hop,
  //           submittingHost: match[1],
  //           receivingHost: match[2],
  //           time: '',
  //           delay: '',
  //           details: ''
  //         };
  //         hop++;
  //       }
  //     } else if (line.includes(';') && Object.keys(currentHeader).length > 0) {
  //       const timeMatch = line.match(/;\s*(.+GMT)/);
  //       if (timeMatch) {
  //         currentHeader.time = timeMatch[1];
  //       }
  //     }
  //   });

  //   if (Object.keys(currentHeader).length > 0) {
  //     headers.push(currentHeader);
  //   }

  //   return headers;
  // };

  // const parsedHeaders = parseReceivedHeaders(rawEmailContent);

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-2xl font-bold mb-4 challenge-title">{t.googleSpoofedPhishing.title}</h1>
          <p className="mb-6 challenge-subtitle">{t.googleSpoofedPhishing.subtitle}</p>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">{t.googleSpoofedPhishing.scenario.title}</h2>
            <p className="mb-4">{t.googleSpoofedPhishing.scenario.description}</p>
          </div>

          {!showFakeSupport ? (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">{t.googleSpoofedPhishing.email.title}</h2>
              <div className="border rounded-lg p-4 mb-4">
                <div className="flex items-center mb-4">
                  <img src="/images/google-logo.svg" alt="Google Logo" className="w-6 h-6 mr-2" />
                  <div>
                    <div className="flex items-center gap-3">
                      <p className="font-semibold">Google &lt;no-reply@google.com&gt;</p>
                      <button
                        onClick={() => setShowRawEmail(true)}
                        className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        Show headers
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">to me</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">{t.googleSpoofedPhishing.email.subject}</h3>
                  <p className="mb-2 whitespace-pre-wrap">{t.googleSpoofedPhishing.email.content}</p>
                  <p className="mb-2">{t.googleSpoofedPhishing.email.action}</p>
                  <button
                    onClick={() => {
                      setEmailViewed(true);
                      setShowFakeSupport(true);
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    {t.googleSpoofedPhishing.email.button}
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  <p>{t.googleSpoofedPhishing.email.authentication.title}</p>
                  <pre className="bg-gray-100 p-2 rounded mt-1">
                    {t.googleSpoofedPhishing.email.authentication.spf}
                    {t.googleSpoofedPhishing.email.authentication.dkim}
                    {t.googleSpoofedPhishing.email.authentication.dmarc}
                  </pre>
                </div>

                <div className="mt-6 border-t pt-6">
                  <h2 className="text-xl font-semibold mb-4">{t.googleSpoofedPhishing.securityCheck.title}</h2>
                  <div className="space-y-6">
                    <div>
                      <p className="font-medium mb-2">{t.googleSpoofedPhishing.securityCheck.question1.title}</p>
                      <div className="space-y-2">
                        <input
                          type="text"
                          placeholder={t.googleSpoofedPhishing.securityCheck.question1.placeholder}
                          className="w-full px-4 py-2 border rounded-lg"
                          value={question1Answer}
                          onChange={(e) => {
                            const value = e.target.value;
                            console.log('Question 1 input changed:', value);
                            setQuestion1Answer(value);
                          }}
                        />
                        <p className="text-sm text-gray-600">{t.googleSpoofedPhishing.securityCheck.question1.hint}</p>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <p className="font-medium mb-2">{t.googleSpoofedPhishing.securityCheck.question2.title}</p>
                      <div className="space-y-2">
                        <button
                          onClick={() => {
                            console.log('Selected Yes');
                            setQuestion2Answer('yes');
                          }}
                          className={`w-full px-4 py-2 rounded transition-colors ${question2Answer === 'yes'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                            }`}
                        >
                          {t.googleSpoofedPhishing.securityCheck.question2.option1}
                        </button>
                        <button
                          onClick={() => {
                            console.log('Selected No');
                            setQuestion2Answer('no');
                          }}
                          className={`w-full px-4 py-2 rounded transition-colors ${question2Answer === 'no'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                            }`}
                        >
                          {t.googleSpoofedPhishing.securityCheck.question2.option2}
                        </button>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <button
                        onClick={() => {
                          console.log('Submit button clicked');
                          handleSubmit();
                          testAnswers();
                        }}
                        disabled={!question1Answer || !question2Answer}
                        className={`w-full bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors ${(!question1Answer || !question2Answer) ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                      >
                        {t.googleSpoofedPhishing.securityCheck.submitButton}
                      </button>

                      {completed && (
                        <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                          <strong className="font-bold">{t.googleSpoofedPhishing.challengeResult.success.title}</strong>
                          <span className="block sm:inline">{t.googleSpoofedPhishing.challengeResult.success.description}</span>
                        </div>
                      )}

                      {challengeFailed && (
                        <div className="mt-4">
                          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                            <strong className="font-bold">{t.googleSpoofedPhishing.challengeResult.failure.title}</strong>
                            <span className="block sm:inline">{t.googleSpoofedPhishing.challengeResult.failure.title}</span>
                          </div>
                          <div className="mt-4 text-center">
                            <button
                              onClick={resetAnswers}
                              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
                            >
                              {t.googleSpoofedPhishing.challengeResult.failure.title}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center gap-2 bg-gray-100 p-2 rounded mb-6">
                <div className="flex items-center gap-1 text-gray-600 bg-white px-2 py-1 rounded">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-sm">https://</span>
                </div>
                <span className="text-sm text-gray-800">{t.googleSpoofedPhishing.fakeSupport.urlBar}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <button
                  className="text-gray-600 hover:text-gray-800"
                  onClick={() => setShowFakeSupport(false)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
                <h2 className="text-2xl">{t.googleSpoofedPhishing.fakeSupport.title}</h2>
              </div>

              <div className="flex border-b mb-6">
                <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600">{t.googleSpoofedPhishing.fakeSupport.tabs.allCases}</button>
                <button className="px-4 py-2 text-gray-600">{t.googleSpoofedPhishing.fakeSupport.tabs.open}</button>
                <button className="px-4 py-2 text-gray-600">{t.googleSpoofedPhishing.fakeSupport.tabs.inProgress}</button>
                <button className="px-4 py-2 text-gray-600">{t.googleSpoofedPhishing.fakeSupport.tabs.resolved}</button>
                <button className="px-4 py-2 text-gray-600">{t.googleSpoofedPhishing.fakeSupport.tabs.closed}</button>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder={t.googleSpoofedPhishing.fakeSupport.searchPlaceholder}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-50"
                  />
                </div>
              </div>

              <div className="border rounded-lg p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium">{t.googleSpoofedPhishing.fakeSupport.caseDetails.title}</h3>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">{t.googleSpoofedPhishing.fakeSupport.caseDetails.status.inProgress}</span>
                        <span className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded-full">{t.googleSpoofedPhishing.fakeSupport.caseDetails.status.urgent}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{t.googleSpoofedPhishing.fakeSupport.caseDetails.reference}</p>
                    <p className="mb-4">{t.googleSpoofedPhishing.fakeSupport.caseDetails.description1}</p>
                    <p className="mb-6">{t.googleSpoofedPhishing.fakeSupport.caseDetails.description2}</p>

                    <div className="flex items-start gap-4 mb-4">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div>
                        <h4 className="font-medium">{t.googleSpoofedPhishing.fakeSupport.caseDetails.documentReview.title}</h4>
                        <p className="text-gray-600">{t.googleSpoofedPhishing.fakeSupport.caseDetails.documentReview.estimatedCompletion}</p>
                      </div>
                    </div>

                    <div className="flex justify-end gap-4">
                      <button
                        onClick={() => {
                          setChallengeFailed(true);
                          setShowFakeSupport(false);
                        }}
                        className="px-6 py-2 border rounded-lg hover:bg-gray-50"
                      >
                        {t.googleSpoofedPhishing.fakeSupport.caseDetails.buttons.uploadDocuments}
                      </button>
                      <button
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        disabled
                      >
                        {t.googleSpoofedPhishing.fakeSupport.caseDetails.buttons.viewCase}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center text-sm text-gray-600 space-x-4">
                <a href="#" className="hover:underline">{t.googleSpoofedPhishing.fakeSupport.footer.privacy}</a>
                <a href="#" className="hover:underline">{t.googleSpoofedPhishing.fakeSupport.footer.terms}</a>
                <a href="#" className="hover:underline">{t.googleSpoofedPhishing.fakeSupport.footer.help}</a>
                <a href="#" className="hover:underline">{t.googleSpoofedPhishing.fakeSupport.footer.about}</a>
                <span>{t.googleSpoofedPhishing.fakeSupport.footer.copyright}</span>
              </div>
            </div>
          )}

          {completed && (
            <div className="bg-white rounded-lg shadow-md p-6 mt-8">
              <h2 className="text-xl font-semibold mb-4">{t.googleSpoofedPhishing.challengeAnalysis.title}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg mb-2">{t.googleSpoofedPhishing.challengeAnalysis.keyFindings.title}:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {t.googleSpoofedPhishing.challengeAnalysis.keyFindings.points.map((point: string, index: number) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">{t.googleSpoofedPhishing.challengeAnalysis.securityLessons.title}:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {t.googleSpoofedPhishing.challengeAnalysis.securityLessons.lessons.map((lesson: string, index: number) => (
                      <li key={index}>{lesson}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">{t.googleSpoofedPhishing.challengeAnalysis.preventionTips.title}:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {t.googleSpoofedPhishing.challengeAnalysis.preventionTips.tips.map((tip: string, index: number) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-medium text-lg mb-3">References:</h3>
                  <a
                    href="https://easydmarc.com/blog/google-spoofed-via-dkim-replay-attack-a-technical-breakdown/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                  >
                    Google Spoofed Via DKIM Replay Attack: A Technical Breakdown
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}

          {showRawEmail && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg p-6 max-h-[90vh] w-[90vw] overflow-hidden flex flex-col">
                <div className="flex justify-between items-center mb-4 flex-shrink-0">
                  <div>
                    <h3 className="text-lg font-semibold">Received headers</h3>
                    <p className="text-sm text-gray-600">
                      Copy these headers and analyze them at{" "}
                      <a
                        href="https://toolbox.googleapps.com/apps/messageheader/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Google Admin Toolbox
                      </a>
                    </p>
                  </div>
                  <button
                    onClick={() => setShowRawEmail(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                <div className="overflow-y-auto flex-grow">
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard(rawEmailContent)}
                      className="sticky top-2 right-2 float-right px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 z-10"
                    >
                      Copy
                    </button>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead className="bg-blue-600 text-white sticky top-0">
                          <tr>
                            <th className="py-2 px-4 text-left border">Hop</th>
                            <th className="py-2 px-4 text-left border">Submitting host</th>
                            <th className="py-2 px-4 text-left border">Receiving host</th>
                            <th className="py-2 px-4 text-left border">Time</th>
                            <th className="py-2 px-4 text-left border">Delay</th>
                            <th className="py-2 px-4 text-left border">Details</th>
                          </tr>
                        </thead>
                        <tbody className="bg-gray-50">
                          <tr className="border">
                            <td className="py-2 px-4 border">1</td>
                            <td className="py-2 px-4 border">LO2P265MB5805.GBRP265.PROD.OUTLOOK.COM ([::1])</td>
                            <td className="py-2 px-4 border">LO2P265MB5805.GBRP265.PROD.OUTLOOK.COM ([fe80::a534:82a8:7142:f82e%4])</td>
                            <td className="py-2 px-4 border">4/10/2025 6:27:37 AM</td>
                            <td className="py-2 px-4 border"></td>
                            <td className="py-2 px-4 border">Microsoft SMTP Server</td>
                          </tr>
                          <tr className="border">
                            <td className="py-2 px-4 border">2</td>
                            <td className="py-2 px-4 border">LO2P265MB5805.GBRP265.PROD.OUTLOOK.COM (2603:10a6:600:26f::14)</td>
                            <td className="py-2 px-4 border">CWLP265MB6786.GBRP265.PROD.OUTLOOK.COM (2603:10a6:400:1e8::12)</td>
                            <td className="py-2 px-4 border">4/10/2025 6:27:37 AM</td>
                            <td className="py-2 px-4 border">0 seconds</td>
                            <td className="py-2 px-4 border">Microsoft SMTP Server cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384</td>
                          </tr>
                          <tr className="border">
                            <td className="py-2 px-4 border">3</td>
                            <td className="py-2 px-4 border">LO3P265CU004.outbound.protection.outlook.com (mail-uksouthaz17010003.outbound.protection.outlook.com [40.93.67.3])</td>
                            <td className="py-2 px-4 border">asp-relay-pe.jellyfish.systems (Postfix)</td>
                            <td className="py-2 px-4 border">4/10/2025 6:27:39 AM</td>
                            <td className="py-2 px-4 border">2 seconds</td>
                            <td className="py-2 px-4 border">cipher TLS_AES_256_GCM_SHA384 server-signature RSA-PSK ESMTPS</td>
                          </tr>
                          <tr className="border">
                            <td className="py-2 px-4 border">4</td>
                            <td className="py-2 px-4 border">asp-relay-pe.jellyfish.systems (unknown [162.255.118.7])</td>
                            <td className="py-2 px-4 border">mta-02.privateemail.com (Postfix)</td>
                            <td className="py-2 px-4 border">4/10/2025 6:27:40 AM</td>
                            <td className="py-2 px-4 border">1 second</td>
                            <td className="py-2 px-4 border">ESMTP</td>
                          </tr>
                          <tr className="border">
                            <td className="py-2 px-4 border">5</td>
                            <td className="py-2 px-4 border">mta-02.privateemail.com ([10.50.14.12])</td>
                            <td className="py-2 px-4 border">DIR-08</td>
                            <td className="py-2 px-4 border">4/10/2025 6:27:40 AM</td>
                            <td className="py-2 px-4 border">0 seconds</td>
                            <td className="py-2 px-4 border">LMTP</td>
                          </tr>
                          <tr className="border">
                            <td className="py-2 px-4 border">6</td>
                            <td className="py-2 px-4 border">DIR-08 ([10.50.14.198])</td>
                            <td className="py-2 px-4 border">localhost</td>
                            <td className="py-2 px-4 border">4/10/2025 6:27:40 AM</td>
                            <td className="py-2 px-4 border">0 seconds</td>
                            <td className="py-2 px-4 border">LMTP</td>
                          </tr>
                          <tr className="border">
                            <td className="py-2 px-4 border">7</td>
                            <td className="py-2 px-4 border">localhost (unknown [10.50.14.190])</td>
                            <td className="py-2 px-4 border">fwd-04.fwd.privateemail.com (Postfix)</td>
                            <td className="py-2 px-4 border">4/10/2025 6:27:41 AM</td>
                            <td className="py-2 px-4 border">1 second</td>
                            <td className="py-2 px-4 border">ESMTP</td>
                          </tr>
                          <tr className="border">
                            <td className="py-2 px-4 border">8</td>
                            <td className="py-2 px-4 border">fwd-04.fwd.privateemail.com (localhost [127.0.0.1])</td>
                            <td className="py-2 px-4 border">fwd-04.fwd.privateemail.com (Postfix)</td>
                            <td className="py-2 px-4 border">4/10/2025 6:27:41 AM</td>
                            <td className="py-2 px-4 border">0 seconds</td>
                            <td className="py-2 px-4 border">ESMTP</td>
                          </tr>
                          <tr className="border">
                            <td className="py-2 px-4 border">9</td>
                            <td className="py-2 px-4 border">FWD-04.fwd.privateemail.com (localhost [127.0.0.1])</td>
                            <td className="py-2 px-4 border">fwd-04.fwd.privateemail.com (Postfix)</td>
                            <td className="py-2 px-4 border">4/10/2025 6:27:41 AM</td>
                            <td className="py-2 px-4 border">0 seconds</td>
                            <td className="py-2 px-4 border">cipher TLS_AES_256_GCM_SHA384 (certificate requested)</td>
                          </tr>
                          <tr className="border">
                            <td className="py-2 px-4 border">10</td>
                            <td className="py-2 px-4 border">fwd-04-1.fwd.privateemail.com (fwd-04-1.fwd.privateemail.com. [66.29.159.58])</td>
                            <td className="py-2 px-4 border">mx.google.com</td>
                            <td className="py-2 px-4 border">4/10/2025 6:27:42 AM</td>
                            <td className="py-2 px-4 border">1 second</td>
                            <td className="py-2 px-4 border">ESMTPS</td>
                          </tr>
                          <tr className="border">
                            <td className="py-2 px-4 border">11</td>
                            <td className="py-2 px-4 border"></td>
                            <td className="py-2 px-4 border">2002:a59:a4af:0:b0:4c5:432a:5706</td>
                            <td className="py-2 px-4 border">4/10/2025 6:27:42 AM</td>
                            <td className="py-2 px-4 border">0 seconds</td>
                            <td className="py-2 px-4 border">SMTP</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-6">
                      <pre className="bg-gray-100 p-4 rounded font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                        {rawEmailContent}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="google-spoofed-phishing"
        successContent={
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">{t.googleSpoofedPhishing.challengeAnalysis.title}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg mb-2">{t.googleSpoofedPhishing.challengeAnalysis.keyFindings.title}:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {t.googleSpoofedPhishing.challengeAnalysis.keyFindings.points.map((point: string, index: number) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">{t.googleSpoofedPhishing.challengeAnalysis.securityLessons.title}:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {t.googleSpoofedPhishing.challengeAnalysis.securityLessons.lessons.map((lesson: string, index: number) => (
                    <li key={index}>{lesson}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">{t.googleSpoofedPhishing.challengeAnalysis.preventionTips.title}:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {t.googleSpoofedPhishing.challengeAnalysis.preventionTips.tips.map((tip: string, index: number) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t">
                <h3 className="font-medium text-lg mb-3">References:</h3>
                <a
                  href="https://easydmarc.com/blog/google-spoofed-via-dkim-replay-attack-a-technical-breakdown/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                >
                  Google Spoofed Via DKIM Replay Attack: A Technical Breakdown
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}