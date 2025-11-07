'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useAccount, useConnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import MaliciousRPCProviderSuccessContent from './MaliciousRPCProviderSuccessContent';

export default function MaliciousRPCProvider() {
  const { t } = useLanguage();
  const { address, isConnected } = useAccount();
  const { connectAsync } = useConnect();

  const [currentRPC, setCurrentRPC] = useState("Default Sepolia RPC");
  const [isMaliciousRPC, setIsMaliciousRPC] = useState(false);
  const [, setShowWalletSection] = useState(false);
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [transactionAmount, setTransactionAmount] = useState('0.01');
  const [recipientAddress, setRecipientAddress] = useState('0x742d35Cc6634C0532925a3b844Bc454e4438f44e');
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [rpcList, setRpcList] = useState([
    {
      name: 'Default Sepolia RPC',
      url: 'https://ethereum-sepolia-rpc.publicnode.com',
      isTrusted: true,
      isActive: true
    }
  ]);

  const [intendedRecipient] = useState('0x742d35Cc6634C0532925a3b844Bc454e4438f44e');
  const [actualRecipient] = useState('0x1234567890123456789012345678901234567890');

  const transactions = [
    {
      address: '0x1234...5678',
      amount: '+0.1 ETH',
      type: 'received'
    },
    {
      address: '0x8765...4321',
      amount: '-0.05 ETH',
      type: 'sent'
    }
  ];

  const handleConnect = async () => {
    try {
      await connectAsync({ connector: injected() });
      setShowWalletSection(true);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const handleAddCustomRPC = () => {
    const nameInput = document.getElementById('custom-rpc-name') as HTMLInputElement;
    const urlInput = document.getElementById('custom-rpc-url') as HTMLInputElement;

    if (!nameInput?.value || !urlInput?.value) {
      return;
    }

    const newRPC = {
      name: nameInput.value,
      url: urlInput.value,
      isTrusted: !urlInput.value.includes('tenderly.co/fork'),
      isActive: true
    };

    // Deactivate all other RPCs
    const updatedList = rpcList.map(rpc => ({
      ...rpc,
      isActive: false
    }));

    setRpcList([...updatedList, newRPC]);
    setCurrentRPC(newRPC.name);
    setIsMaliciousRPC(newRPC.url.includes('tenderly.co/fork'));

    // Clear inputs
    nameInput.value = '';
    urlInput.value = '';

    // Show warning for malicious RPC
    if (newRPC.url.includes('tenderly.co/fork')) {
      setTimeout(() => {
        alert(t.maliciousRPCProvider.maliciousRPCWarning);
      }, 500);
    }
  };

  const handleRPCConnect = (index: number) => {
    setRpcList(rpcList.map((rpc, i) => ({
      ...rpc,
      isActive: i === index
    })));
    setCurrentRPC(rpcList[index].name);
    setIsMaliciousRPC(rpcList[index].url.includes('tenderly.co/fork'));
  };

  const handleSendTransaction = async () => {
    try {
      // Simulated transaction 
      if (isMaliciousRPC) {
        // Show phishing warning
        setShowResult(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswerSubmit = async (answer: string) => {
    if (answer === 'A') { // Correct answer
      setChallengeCompleted(true);
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      alert(t.maliciousRPCProvider.wrongAnswer);
    }
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 challenge-title">{t.maliciousRPCProvider.title}</h1>
            <h2 className="text-xl mb-2 challenge-subtitle">{t.maliciousRPCProvider.subtitle}</h2>
            <h3 className="text-red-500">{t.maliciousRPCProvider.warning}</h3>
          </div>
          {!isConnected ? (
            <button onClick={handleConnect} className="w-full py-3 bg-blue-600 text-white rounded">
              {t.common.connectWallet}
            </button>
          ) : (
            <div className="space-y-6">
              <div className="wallet-info bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600">{t.maliciousRPCProvider.currentNetwork}</p>
                    <p className="font-mono">{address}</p>
                  </div>
                  <div>
                    <p>{t.maliciousRPCProvider.currentRPC}: {currentRPC}</p>
                  </div>
                </div>
              </div>

              <div className="rpc-settings bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-semibold mb-4">{t.maliciousRPCProvider.rpcSettings}</h4>
                <p className="mb-4">{t.maliciousRPCProvider.currentRPC}: {currentRPC}</p>

                <div className="rpc-list space-y-4 mb-6">
                  {rpcList.map((rpc, index) => (
                    <div key={index} className={`flex justify-between items-center p-4 border rounded ${rpc.isActive ? 'border-blue-500' : 'border-gray-200'}`}>
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium">{rpc.name}</span>
                          <span className={`ml-2 px-2 py-1 text-xs rounded ${rpc.isTrusted ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {rpc.isTrusted ? t.maliciousRPCProvider.trusted : t.maliciousRPCProvider.untrusted}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 font-mono">{rpc.url}</div>
                      </div>
                      <button
                        onClick={() => handleRPCConnect(index)}
                        disabled={rpc.isActive}
                        className={`px-4 py-2 rounded ${rpc.isActive ? 'bg-green-100 text-gray-500' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                      >
                        {rpc.isActive ? t.maliciousRPCProvider.connected : t.maliciousRPCProvider.connect}
                      </button>
                    </div>
                  ))}
                </div>

                <h4 className="text-xl font-bold mb-4">{t.maliciousRPCProvider.addCustomRPC}</h4>
                <div className="info-box bg-blue-50 border-blue-200 border p-4 rounded mb-4">
                  <p>
                    <strong>{t.maliciousRPCProvider.scenario}</strong> {t.maliciousRPCProvider.scenarioDescription}
                  </p>
                </div>
                <div className="space-y-4">
                  <input
                    id="custom-rpc-name"
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder={t.maliciousRPCProvider.rpcName}
                    defaultValue="快速 Tenderly Fork RPC"
                  />
                  <input
                    id="custom-rpc-url"
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder={t.maliciousRPCProvider.rpcURL}
                    defaultValue="https://rpc.tenderly.co/fork/34ce4192-e929-4e48-a02b-d96180f9f748"
                  />
                  <button
                    onClick={handleAddCustomRPC}
                    className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    {t.maliciousRPCProvider.addRPC}
                  </button>
                </div>
              </div>

              <div className="transaction-history bg-white p-6 rounded-lg shadow mt-4">
                <h4 className="text-lg font-semibold mb-4">{t.maliciousRPCProvider.transactionHistory.title}</h4>
                <div className="space-y-3">
                  {transactions.map((tx, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-mono text-sm">{tx.address}</span>
                      <span className={`${tx.type === 'received' ? 'text-green-600' : 'text-red-600'}`}>
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {isMaliciousRPC && (
                <div className="token-balances bg-white p-6 rounded-lg shadow mt-4">
                  <h4 className="text-lg font-semibold mb-4">{t.maliciousRPCProvider.tokenBalances.title}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span>{t.maliciousRPCProvider.tokenBalances.usdt}</span>
                    </div>
                    <span>10,000.00 USDT</span>
                  </div>
                </div>
              )}

              {/* Transaction section */}
              <div className="transaction-section bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">{t.maliciousRPCProvider.sendTransaction}</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder={t.maliciousRPCProvider.recipientAddress}
                    value={recipientAddress}
                    onChange={(e) => setRecipientAddress(e.target.value)}
                  />
                  <input
                    type="number"
                    className="w-full p-2 border rounded"
                    placeholder={t.maliciousRPCProvider.amount}
                    value={transactionAmount}
                    onChange={(e) => setTransactionAmount(e.target.value)}
                    step="0.001"
                    min="0.001"
                  />
                  <button
                    onClick={handleSendTransaction}
                    className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    {t.maliciousRPCProvider.send}
                  </button>
                </div>
              </div>

              {/* Result section */}
              <div className="result-section bg-white p-6 rounded-lg shadow">
                {/* <h3 className="text-xl font-bold mb-4">{t.maliciousRPCProvider.result.title}</h3> */}
                {showResult && (
                  <div className="alert bg-red-50 border-red-200 border p-4 rounded mb-4">
                    <h4 className="text-lg font-semibold mb-2">{t.maliciousRPCProvider.alert.title}</h4>
                    <div dangerouslySetInnerHTML={{
                      __html: t.maliciousRPCProvider.alert.description.replace(
                        '{amount}', transactionAmount
                      ).replace(
                        '{intendedRecipient}', intendedRecipient
                      ).replace(
                        '{actualRecipient}', actualRecipient
                      )
                    }} />
                    <p className="mt-2">{t.maliciousRPCProvider.alert.balance}</p>
                  </div>
                )}

                <div className="info-box bg-blue-50 border-blue-200 border p-4 rounded mb-4">
                  <h4 className="text-lg font-semibold mb-2">{t.maliciousRPCProvider.result.howItWorks}</h4>
                  <p>{t.maliciousRPCProvider.result.description}</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    {t.maliciousRPCProvider.result.capabilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-semibold mt-6 mb-2">{t.maliciousRPCProvider.result.protectionTitle}</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    {t.maliciousRPCProvider.result.protectionTips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Challenge completion section */}

              <div className="challenge-question bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">{t.maliciousRPCProvider.question}</h3>
                <div className="space-y-2">
                  {['A', 'B', 'C'].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswerSubmit(option)}
                      className="w-full p-2 border rounded hover:bg-gray-100"
                    >
                      {t.maliciousRPCProvider.answers[option as keyof typeof t.maliciousRPCProvider.answers]}
                    </button>
                  ))}
                </div>
              </div>


              {challengeCompleted && (
                <div className="success-message bg-green-50 border-2 border-green-500 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-700 mb-4">
                    {t.maliciousRPCProvider.success.title}
                  </h3>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="malicious-rpc-provider"
        successContent={<MaliciousRPCProviderSuccessContent />}
      />
    </>
  );
}
