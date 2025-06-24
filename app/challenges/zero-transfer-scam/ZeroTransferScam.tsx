'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useTheme } from 'next-themes';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import { transactions, REAL_ADDRESS, FAKE_ADDRESS } from '@/app/challenges/zero-transfer-scam/transactions';
import ZeroTransferScamSuccessContent from './ZeroTransferScamSuccessContent';

const ZeroTransferScam = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [realAddress, setRealAddress] = useState('');
  const [fakeAddress, setFakeAddress] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedTx, setSelectedTx] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showInspect, setShowInspect] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const checkAnswers = async () => {
    setShowResult(true);
    const isCorrect = realAddress.trim().toLowerCase() === REAL_ADDRESS.toLowerCase() &&
      fakeAddress.trim().toLowerCase() === FAKE_ADDRESS.toLowerCase();
    setIsSuccess(isCorrect);

    if (isCorrect) {
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleTxClick = (index: number) => {
    setSelectedTx(index);
    setShowDetails(true);
  };

  const handleInspect = () => {
    // 在這裡可以添加更多檢查邏輯
    setShowDetails(false);
    setShowInspect(true);
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="parent">
          <div className="p-4 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4 challenge-title">{t.zeroTransferScam.title}</h1>
              <h2 className="text-xl mb-2 challenge-subtitle">{t.zeroTransferScam.subtitle}</h2>
              <h3 className="text-lg text-yellow-600">{t.zeroTransferScam.warning}</h3>
            </div>

            <div className="div2 challenge-title">
              <div className="wallet-interface">
                <div className="wallet-header">
                  <div className="wallet-title">
                    <h3>{t.zeroTransferScam.yourWallet}</h3>
                    <p>{t.zeroTransferScam.address}: <span className="address">{REAL_ADDRESS}</span></p>
                  </div>
                </div>

                <div className="transaction-list bg-white">
                  <table className="transaction-table">
                    <thead>
                      <tr>
                        <th>{t.zeroTransferScam.transactionDetails.hash}</th>
                        <th>{t.zeroTransferScam.transactionDetails.method}</th>
                        <th>{t.zeroTransferScam.transactionDetails.age}</th>
                        <th>{t.zeroTransferScam.transactionDetails.from}</th>
                        <th>{t.zeroTransferScam.transactionDetails.to}</th>
                        <th>{t.zeroTransferScam.transactionDetails.amount}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((tx, index) => (
                        <tr key={tx.hash} onClick={() => handleTxClick(index)} style={{ cursor: 'pointer' }}>
                          <td className="tx-hash">{tx.hash}...</td>
                          <td className="tx-method">{tx.method}</td>
                          <td className="tx-age">{tx.age}</td>
                          <td>
                            <span className="tx-address" title={tx.fromAddress}>
                              {tx.from.slice(0, 8)}...{tx.from.slice(-6)}
                            </span>
                          </td>
                          <td>
                            <span className={`badge-${tx.type} tx-badge`}>
                              {tx.type === 'out' ? t.zeroTransferScam.transactionDetails.out : t.zeroTransferScam.transactionDetails.in}
                            </span>
                            <span className="tx-address" title={tx.toAddress}>
                              {tx.to.slice(0, 8)}...{tx.to.slice(-6)}
                            </span>
                          </td>
                          <td className="tx-amount">{tx.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {showDetails && selectedTx !== null && (
                  <div className="transaction-details">
                    <h3 className="details-title">{t.zeroTransferScam.transactionDetails.title}</h3>
                    <div className="details-item">
                      <span className="details-label">{t.zeroTransferScam.transactionDetails.hash}:</span>
                      <span className="details-value">{transactions[selectedTx].hash}</span>
                    </div>
                    <div className="details-item">
                      <span className="details-label">{t.zeroTransferScam.transactionDetails.method}:</span>
                      <span className="details-value">{transactions[selectedTx].method}</span>
                    </div>
                    <div className="details-item">
                      <span className="details-label">{t.zeroTransferScam.transactionDetails.from}:</span>
                      <span className="details-value address">{transactions[selectedTx].from}</span>
                    </div>
                    <div className="details-item">
                      <span className="details-label">{t.zeroTransferScam.transactionDetails.to}:</span>
                      <span className="details-value address">{transactions[selectedTx].to}</span>
                    </div>
                    <div className="details-item">
                      <span className="details-label">{t.zeroTransferScam.transactionDetails.amount}:</span>
                      <span className="details-value">{transactions[selectedTx].amount}</span>
                    </div>
                    <div className="details-item">
                      <span className="details-label">{t.zeroTransferScam.transactionDetails.gasUse}:</span>
                      <span className="details-value">{transactions[selectedTx].gas}</span>
                    </div>
                    <button className="submit-button" onClick={handleInspect}>
                      {t.zeroTransferScam.transactionDetails.phishingAlert.check}
                    </button>
                  </div>
                )}
                {showInspect &&
                  <div className="phishing-alert">
                    <h4 className="alert-title">{t.zeroTransferScam.transactionDetails.phishingAlert.title}</h4>
                    <p>{t.zeroTransferScam.transactionDetails.phishingAlert.description}</p>
                    <ul className="alert-list">
                      {t.zeroTransferScam.transactionDetails.phishingAlert.tactics.map((tactic: string, index: number) => (
                        <li key={index}>{tactic}</li>
                      ))}
                    </ul>
                    <p>{t.zeroTransferScam.transactionDetails.phishingAlert.addressComparison}</p>
                    <p>{t.zeroTransferScam.transactionDetails.phishingAlert.techniques}</p>
                    <ul className="alert-list">
                      {t.zeroTransferScam.transactionDetails.phishingAlert.techniquesList.map((technique: string, index: number) => (
                        <li key={index}>{technique}</li>
                      ))}
                    </ul>
                    <p>{t.zeroTransferScam.transactionDetails.phishingAlert.note}</p>

                    <button className="submit-button learn-more-btn" onClick={
                      () => {
                        setShowInspect(false);
                      }
                    }>
                      {t.zeroTransferScam.transactionDetails.phishingAlert.learnMoreButton}
                    </button>
                  </div>
                }
                <div className="challenge-form">
                  <h3>{t.zeroTransferScam.completeChallenge}</h3>
                  <div className="form-group">
                    <label htmlFor="real-address">{t.zeroTransferScam.realAddressLabel}</label>
                    <input
                      type="text"
                      id="real-address"
                      placeholder={t.zeroTransferScam.realAddressPlaceholder}
                      value={realAddress}
                      onChange={(e) => setRealAddress(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="fake-address">{t.zeroTransferScam.fakeAddressLabel}</label>
                    <input
                      type="text"
                      id="fake-address"
                      placeholder={t.zeroTransferScam.fakeAddressPlaceholder}
                      value={fakeAddress}
                      onChange={(e) => setFakeAddress(e.target.value)}
                    />
                  </div>

                  <button className="submit-button" onClick={checkAnswers}>
                    {t.zeroTransferScam.submitButton}
                  </button>
                </div>

                {showResult && (
                  <div className={isSuccess ? 'success' : 'error'} style={{ marginTop: '20px' }}>
                    {isSuccess ? (
                      <>
                        <h3>{t.zeroTransferScam.successTitle}</h3>
                        <p>{t.zeroTransferScam.successDescription}</p>
                        <p>{t.zeroTransferScam.protectionTitle}</p>
                        <ul>
                          {t.zeroTransferScam.protectionTips.map((tip: string, index: number) => (
                            <li key={index}>{tip}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <>
                        <h3 className='text-[#000000]'>{t.zeroTransferScam.failureTitle}</h3>
                        <p className='text-[#000000]'>{t.zeroTransferScam.failureDescription}</p>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            <style jsx>{`
        .transaction-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }

        .transaction-table th {
          background-color: #f8f9fa;
          color: #6c757d;
          font-weight: normal;
          text-align: left;
          padding: 12px 8px;
          border-bottom: 1px solid #e7eaf3;
        }

        .transaction-table td {
          padding: 12px 8px;
          border-bottom: 1px solid #e7eaf3;
          vertical-align: middle;
        }

        .tx-hash {
          font-family: monospace;
          color: #3498db;
        }

        .tx-method {
          display: inline-block;
          padding: 2px 8px;
          background-color: #eef2ff;
          color: #6b7ed6;
          border-radius: 4px;
          font-size: 12px;
        }

        .tx-badge {
          display: inline-block;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 12px;
          margin-right: 5px;
        }

        .badge-out {
          background-color: #ffebee;
          color: #f44336;
        }

        .badge-in {
          background-color: #e8f5e9;
          color: #4caf50;
        }

        .tx-address {
          font-family: monospace;
          color: #3498db;
          cursor: pointer;
        }

        .transaction-details {
          background-color: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
          margin-top: 20px;
        }

        .details-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
          color: #333;
        }

        .details-item {
          display: flex;
          margin-bottom: 12px;
          align-items: center;
        }

        .details-label {
          width: 120px;
          color: #6c757d;
          font-size: 14px;
        }

        .details-value {
          flex: 1;
          font-size: 14px;
          color: #333;
          word-break: break-all;
        }

        .details-value.address {
          font-family: monospace;
          background-color: #f1f3f4;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }

        .submit-button {
          background: #4CAF50;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.2s;
        }

        .submit-button:hover {
          background: #45a049;
        }

        .success {
          background-color: #e8f5e9;
          border-left: 5px solid #4caf50;
          padding: 15px;
          border-radius: 4px;
        }

        .error {
          background-color: #ffebee;
          border-left: 5px solid #f44336;
          padding: 20px;
          margin: 20px 0;
          border-radius: 4px;
        }

        .alert-title {
          color: #d32f2f;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .alert-list {
          margin: 15px 0;
          padding-left: 20px;
        }

        .alert-list li {
          margin-bottom: 8px;
          color: #333;
        }

        .learn-more-btn {
          margin-top: 15px;
        }

        .phishing-alert {
          background-color: #ffebee;
          border-left: 5px solid #f44336;
          padding: 20px;
          margin: 20px 0;
          border-radius: 4px;
        }

        .alert-title {
          color: #d32f2f;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .alert-list {
          margin: 15px 0;
          padding-left: 20px;
        }

        .alert-list li {
          margin-bottom: 8px;
          color: #333;
        }

        .learn-more-btn {
          margin-top: 15px;
        }

        .error {
          background-color: #ffebee;
          border-left: 5px solid #f44336;
          padding: 15px;
          border-radius: 4px;
        }

        .back-to-home {
          display: block;
          text-align: left;
          margin-top: 30px;
          color: #2196F3;
          text-decoration: none;
        }

        .back-to-home:hover {
          text-decoration: underline;
        }
      `}</style>
          </div>
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="zero-transfer-scam"
        successContent={<ZeroTransferScamSuccessContent />}
      />
    </>
  );
};

export default ZeroTransferScam;