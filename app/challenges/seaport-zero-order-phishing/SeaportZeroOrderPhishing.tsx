'use client';

import React, { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import SeaportZeroOrderPhishingSuccessContent from './SeaportZeroOrderPhishingSuccessContent';

export function SeaportZeroOrderPhishing() {
  const { t } = useLanguage();

  const [showMetaMask, setShowMetaMask] = useState(false);
  const [answers, setAnswers] = useState({
    isPhishing: '',
    consequence: '',
    issue: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleAnswerChange = (field: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const checkAnswers = async () => {
    const isCorrect =
      answers.isPhishing === 'yes' &&
      answers.consequence === 'get0' &&
      answers.issue === 'price';
    if (isCorrect) {
      setShowError(false);
      setShowSuccess(true);
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setShowError(true);
      setShowSuccess(false);
    }
  };

  const seaportOrder = {
    parameters: {
      offerer: "0x6278A1E803A76796a3A1F7F6344fE874ebfe94B2",
      offer: [
        {
          itemType: 2,
          token: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
          identifierOrCriteria: "8865",
          startAmount: "1",
          endAmount: "1"
        }
      ],
      consideration: [
        {
          itemType: 0,
          token: "0x0000000000000000000000000000000000000000",
          identifierOrCriteria: "0",
          startAmount: "0",
          endAmount: "0",
          recipient: "0x6278A1E803A76796a3A1F7F6344fE874ebfe94B2"
        }
      ],
      orderType: 0,
      startTime: "1678969800",
      endTime: "1679574600",
      zoneHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
      salt: "16356",
      conduitKey: "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
      totalOriginalConsiderationItems: 1
    },
    signature: "0x3c7913f7e9842e432525e3a60c85412f14f824abf4068052732fae7d3ecd8d1e"
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-[800px] mx-auto p-5">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 mb-8 text-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 challenge-title">🔍 {t.seaportZeroOrderPhishing.title} 🔍</h1>
            <h2 className="text-xl mb-3 text-gray-700 challenge-subtitle">{t.seaportZeroOrderPhishing.subtitle}</h2>
            <h3 className="text-red-500 font-medium">{t.seaportZeroOrderPhishing.warning}</h3>
          </div>
          <div>
            <h3 className='challenge-description'>{t.seaportZeroOrderPhishing.scenarioDescription}</h3>

            <div className="border border-gray-300 rounded-lg p-4 my-5 bg-white shadow-sm">
              <img
                src="https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?auto=format&w=1000"
                alt="Bored Ape NFT"
                className="w-full h-auto rounded mb-2.5"
              />
              <div className="flex justify-between mb-2.5">
                <div className="font-bold text-lg">Bored Ape #8865</div>
                <div className="font-bold text-green-600">100 ETH</div>
              </div>
              <button
                onClick={() => setShowMetaMask(true)}
                className="w-full bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 transition-colors"
              >
                {t.seaportZeroOrderPhishing.acceptOffer}
              </button>
            </div>

            <div>
              <h4 className="challenge-title">{t.seaportZeroOrderPhishing.seaportOrderDetails}</h4>
              <pre className="bg-gray-100 border border-gray-300 rounded p-4 my-4 font-mono whitespace-pre-wrap overflow-x-auto text-sm leading-relaxed">
                {JSON.stringify(seaportOrder, null, 2)}
              </pre>
            </div>

            <h3 className='challenge-title'>{t.seaportZeroOrderPhishing.yourTask}</h3>

            <div className="mb-4 challenge-title">
              <label className="block font-bold mb-1">{t.seaportZeroOrderPhishing.question1}</label>
              <select
                value={answers.isPhishing}
                onChange={(e) => handleAnswerChange('isPhishing', e.target.value)}
                className="w-full p-2.5 border border-gray-300 rounded text-base"
              >
                <option value="">{t.seaportZeroOrderPhishing.pleaseSelect}</option>
                <option value="yes">{t.seaportZeroOrderPhishing.yesPhishing}</option>
                <option value="no">{t.seaportZeroOrderPhishing.noLegitimate}</option>
              </select>
            </div>

            <div className="mb-4 challenge-title">
              <label className="block font-bold mb-1">{t.seaportZeroOrderPhishing.question2}</label>
              <select
                value={answers.consequence}
                onChange={(e) => handleAnswerChange('consequence', e.target.value)}
                className="w-full p-2.5 border border-gray-300 rounded text-base"
              >
                <option value="">{t.seaportZeroOrderPhishing.pleaseSelect}</option>
                <option value="get100">{t.seaportZeroOrderPhishing.receive100ETH}</option>
                <option value="get0">{t.seaportZeroOrderPhishing.transferForFree}</option>
                <option value="nothing">{t.seaportZeroOrderPhishing.nothingHappens}</option>
              </select>
            </div>

            <div className="mb-4 challenge-title">
              <label className="block font-bold mb-1">{t.seaportZeroOrderPhishing.question3}</label>
              <select
                value={answers.issue}
                onChange={(e) => handleAnswerChange('issue', e.target.value)}
                className="w-full p-2.5 border border-gray-300 rounded text-base"
              >
                <option value="">{t.seaportZeroOrderPhishing.pleaseSelect}</option>
                <option value="signature">{t.seaportZeroOrderPhishing.invalidSignature}</option>
                <option value="price">{t.seaportZeroOrderPhishing.zeroPrice}</option>
                <option value="token">{t.seaportZeroOrderPhishing.incorrectToken}</option>
                <option value="none">{t.seaportZeroOrderPhishing.noIssue}</option>
              </select>
            </div>

            <button
              onClick={checkAnswers}
              className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 transition-colors text-base"
            >
              {t.seaportZeroOrderPhishing.submitAnswers}
            </button>
            {showError && (
              <div className="text-red-500 my-4">{t.seaportZeroOrderPhishing.errorMessage}</div>
            )}
            {showSuccess && (
              <div className="text-green-500 my-4">{t.seaportZeroOrderPhishing.successMessage}</div>
            )}
            {(showSuccess || showError) && (
              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold mb-4">{t.seaportZeroOrderPhishing.explanationTitle}</h3>
                <p className="mb-4">{t.seaportZeroOrderPhishing.explanationContent}</p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="font-bold mb-2">{t.seaportZeroOrderPhishing.keyIssueTitle}</p>
                  <pre className="bg-gray-100 border border-gray-300 rounded-lg p-4 my-2 font-mono text-sm leading-relaxed overflow-x-auto">
                    <div dangerouslySetInnerHTML={{
                      __html: `"consideration": [
                    {
                      "itemType": 0,
                      "token": "0x0000000000000000000000000000000000000000",
                      "identifierOrCriteria": "0",
                      "<span class=\"bg-yellow-200 px-1\">startAmount": 0</span>",
                      "<span class=\"bg-yellow-200 px-1\">endAmount": 0</span>",
                      "recipient": "0x6278A1E803A76796a3A1F7F6344fE874ebfe94B2"
                    }
                  ]`}} />
                  </pre>
                  <pre className="bg-gray-100 border border-gray-300 rounded p-4 my-2 font-mono whitespace-pre-wrap overflow-x-auto text-sm leading-relaxed">
                    {t.seaportZeroOrderPhishing.considerationExample}
                  </pre>
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">{t.seaportZeroOrderPhishing.protectionTitle}</h4>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  {t.seaportZeroOrderPhishing.protectionTips.map((tip: string, index: number) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>

                <h4 className="text-lg font-bold mt-6 mb-3">{t.seaportZeroOrderPhishing.comparisonTitle}</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 mb-4">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left">{t.seaportZeroOrderPhishing.comparisonTable.parameter}</th>
                        <th className="border border-gray-300 p-2 text-left">{t.seaportZeroOrderPhishing.comparisonTable.legitimate}</th>
                        <th className="border border-gray-300 p-2 text-left">{t.seaportZeroOrderPhishing.comparisonTable.phishing}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">offer</td>
                        <td className="border border-gray-300 p-2">{t.seaportZeroOrderPhishing.comparisonTable.offer.legitimate}</td>
                        <td className="border border-gray-300 p-2">{t.seaportZeroOrderPhishing.comparisonTable.offer.phishing}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">consideration</td>
                        <td className="border border-gray-300 p-2">{t.seaportZeroOrderPhishing.comparisonTable.consideration.legitimate}</td>
                        <td className="border border-gray-300 p-2">{t.seaportZeroOrderPhishing.comparisonTable.consideration.phishing}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">startAmount/endAmount</td>
                        <td className="border border-gray-300 p-2 text-green-600">{t.seaportZeroOrderPhishing.comparisonTable.startEndAmount.legitimate}</td>
                        <td className="border border-gray-300 p-2 text-red-600">{t.seaportZeroOrderPhishing.comparisonTable.startEndAmount.phishing}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}


            {showMetaMask && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1001]">
                <div className="bg-white rounded-2xl w-[380px] max-w-[90%] shadow-lg overflow-hidden">
                  <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#f6851b] rounded-full flex items-center justify-center overflow-hidden">
                        <img src="/images/metamask-fox.svg" width="24" height="24" alt="User" />
                      </div>
                      <span>User</span>
                    </div>
                    <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2">
                      <div className="w-2.5 h-2.5 bg-[#1098fc] rounded-full"></div>
                      <span className="text-sm">Ethereum Mainnet</span>
                    </div>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-xl font-bold mb-6">Signature request</h3>
                    <div className="w-20 h-20 mx-auto mb-4 bg-[#f6851b] rounded-full flex items-center justify-center overflow-hidden">
                      <img src="https://opensea.io/static/images/logos/opensea-logo.svg" width="60" height="60" alt="Seaport" />
                    </div>
                    <div className="text-lg font-bold mb-2">Seaport</div>
                    <div className="text-gray-500 text-sm mb-2">https://opensea.io</div>
                    <div className="text-gray-500 text-sm mb-6">0xf16635...fee98cd9</div>
                    <div className="text-left font-bold mb-2">Message</div>
                    <div className="bg-gray-100 p-4 rounded-lg text-left font-mono text-sm mb-6 overflow-y-auto max-h-[200px] whitespace-pre-wrap">
                      token: {seaportOrder.parameters.offer[0].token}
                      identifierOrCriteria: {seaportOrder.parameters.offer[0].identifierOrCriteria}
                      startAmount: {seaportOrder.parameters.offer[0].startAmount}
                      endAmount: {seaportOrder.parameters.offer[0].endAmount}
                      consideration:
                      startAmount: <span className="bg-yellow-200 px-1">{seaportOrder.parameters.consideration[0].startAmount}</span>
                      endAmount: <span className="bg-yellow-200 px-1">{seaportOrder.parameters.consideration[0].endAmount}</span>
                      startTime: {seaportOrder.parameters.startTime}
                      endTime: {seaportOrder.parameters.endTime}
                      orderType: {seaportOrder.parameters.orderType}
                      zone: {seaportOrder.parameters.zoneHash}
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowMetaMask(false)}
                        className="flex-1 py-3 px-4 rounded-full bg-gray-100 font-bold hover:bg-gray-200 transition-colors"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => {
                          setShowMetaMask(false);
                          alert(t.seaportZeroOrderPhishing.alertError)
                        }}
                        className="flex-1 py-3 px-4 rounded-full bg-[#037dd6] text-white font-bold hover:bg-[#0369a1] transition-colors"
                      >
                        Sign
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="seaport-zero-order-phishing"
        successContent={<SeaportZeroOrderPhishingSuccessContent />}
      />
    </>
  );
}