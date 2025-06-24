'use client';

import React, { useState, useRef } from 'react';
//import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useAccount, useConnect, useWriteContract } from 'wagmi';
import { injected } from 'wagmi/connectors';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import NetworkCheck, { getNetworkName } from '@/app/components/NetworkCheck';

import FakeStakingContractSuccessContent from './FakeStakingContractSuccessContent';
const HOLESKY_CHAIN_ID = 17000; // Decimal form of 0x4268
const USDC_CONTRACT_ADDRESS = '0x87350147a24099Bf1e7E677576f01C1415857C75';
const FAKE_STAKING_CONTRACT = '0x0000000066663456789012345678901234560000';
const MAX_UINT256 = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

const FakeStakingContract = () => {
  const { t } = useLanguage();
  //const router = useRouter();
  const { address, isConnected, chainId: accountChainId } = useAccount();
  const { connect } = useConnect();

  const [stakeAmount, setStakeAmount] = useState('');
  const [showStakeResult, setShowStakeResult] = useState(false);
  const [txHash, setTxHash] = useState('');
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [networkCheckTriggered, setNetworkCheckTriggered] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const connectWallet = async () => {
    try {
      if (accountChainId !== HOLESKY_CHAIN_ID) {
        setNetworkCheckTriggered(true);
        return; // 如果網路不正確，先不繼續執行
      }
      await connect({ connector: injected() });
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  const { writeContractAsync, isPending } = useWriteContract();

  const stakeTokens = async () => {
    try {
      if (!stakeAmount || parseFloat(stakeAmount) < 100) {
        alert(t.fakeStakingContract.invalidAmount);
        return;
      }

      if (accountChainId !== HOLESKY_CHAIN_ID) {
        setNetworkCheckTriggered(true);
        return; // 如果網路不正確，先不繼續執行
      }

      const tx = await writeContractAsync({
        address: USDC_CONTRACT_ADDRESS,
        abi: [{
          name: 'approve',
          type: 'function',
          stateMutability: 'nonpayable',
          inputs: [
            { name: 'spender', type: 'address' },
            { name: 'amount', type: 'uint256' }
          ],
          outputs: [{ type: 'bool' }]
        }],
        functionName: 'approve',
        args: [FAKE_STAKING_CONTRACT, BigInt(MAX_UINT256)]
      });

      setTxHash(tx);
      setShowStakeResult(true);

    } catch (error: unknown) {
      if (error instanceof Error) {

        // 檢查是否為用戶拒絕交易的錯誤
        const isUserRejection =
          'code' in error && (error).code === 4001 ||
          error.message.toLowerCase().includes('user denied') ||
          error.message.toLowerCase().includes('user rejected');

        if (isUserRejection) {
          setShowStakeResult(true);
          setShowCompletionModal(true);
          if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        console.error('Unknown revoke error:', error);
      }
    }
  };

  return (
    <>
      <div ref={chatEndRef} />
      {!showCompletionModal && (
        <div className="max-w-4xl mx-auto p-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 challenge-title">{t.fakeStakingContract.title}</h1>
            <h2 className="text-xl mb-2 challenge-subtitle">{t.fakeStakingContract.subtitle}</h2>
            <h3 className="text-red-500 mb-4">{t.fakeStakingContract.warning}</h3>
            <p className="mb-2 challenge-title">
              {t.fakeStakingContract.networkStatus}
              {isConnected ? (
                <span className={`font-medium ${accountChainId === HOLESKY_CHAIN_ID ? 'text-green-600' : 'text-red-600'}`}>
                  {accountChainId === HOLESKY_CHAIN_ID
                    ? 'Holesky Testnet'
                    : accountChainId
                      ? `${getNetworkName(accountChainId)} (ChainID: ${accountChainId})`
                      : "未知網路"}
                  {accountChainId !== HOLESKY_CHAIN_ID && (
                    <span className="text-red-600 text-sm ml-1">
                      ⚠️
                    </span>
                  )}
                </span>
              ) : (
                <span className="text-gray-500 font-medium">
                  {t.fakeStakingContract.notConnected}
                </span>
              )}
              {/* <span>{isConnected ? chainId : t.fakeStakingContract.notConnected}</span> */}
            </p>



            <p className="challenge-title">
              {t.fakeStakingContract.walletStatus} <span className="font-mono">{isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : t.fakeStakingContract.notConnected}</span>
            </p>
          </div>

          <div className="space-y-8">
            {/* <div>
              <h3 className="text-xl font-semibold mb-4 challenge-title">Step 1: {t.common.connectWallet}</h3>
              <button
                onClick={connectWallet}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                {t.common.connectWallet}
              </button>
            </div> */}

            {isConnected && (
              <div>
                <h3 className="text-xl font-semibold mb-4 challenge-title">{t.fakeStakingContract.step2Title}</h3>
                <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                  <div className="bg-red-500 text-white px-4 py-1 rounded-full inline-block">{t.fakeStakingContract.dailyReturns}</div>
                  <h3 className="text-xl font-bold">{t.fakeStakingContract.stakingPool}</h3>
                  <p>{t.fakeStakingContract.stakingDescription}</p>
                  <p>{t.fakeStakingContract.minimumStake}</p>
                  <p>{t.fakeStakingContract.lockPeriod}</p>
                  <p>{t.fakeStakingContract.withdrawAnytime}</p>

                  <input
                    type="number"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    placeholder={t.fakeStakingContract.stakePlaceholder}
                    min="100"
                    step="1"
                    className="w-full p-2 border rounded"
                  />
                  <button
                    onClick={stakeTokens}
                    disabled={isPending}
                    className={`bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors w-full ${isPending ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                  >
                    {isPending ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        {t.common.processing || '處理中...'}
                      </div>
                    ) : (
                      t.fakeStakingContract.stakeButton
                    )}
                  </button>
                </div>
              </div>
            )}
            {showStakeResult && txHash && (
              <div>
                <h3 className="text-xl font-semibold mb-4">{t.fakeStakingContract.step3Title}</h3>
                <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                  <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
                    {t.fakeStakingContract.failureTitle}
                  </div>

                  <div>
                    <p className="mb-4">
                      {t.fakeStakingContract.failureMessage}
                    </p>

                    <div className="bg-gray-100 p-4 rounded mb-4">
                      <p>
                        {t.fakeStakingContract.transactionSent}{' '}
                        <a
                          href={`https://holesky.etherscan.io/tx/${txHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline break-all"
                        >
                          {txHash}
                        </a>
                      </p>
                    </div>

                    <h5 className="font-semibold mt-6 mb-2">{t.fakeStakingContract.whyDangerous}</h5>
                    <p className="mb-4">{t.fakeStakingContract.seedPhraseExplanation}</p>
                    <ul className="list-disc pl-6 space-y-2">
                      {t.fakeStakingContract.dangerList.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <h5 className="font-semibold mt-6 mb-2">{t.fakeStakingContract.rememberTitle}</h5>
                    <p className="text-red-600">{t.fakeStakingContract.rememberMessage}</p>
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
        challengeKey="fake-staking-contract"
        successContent={<FakeStakingContractSuccessContent />}
      />
      {/* 使用 NetworkCheck 組件，不需要條件渲染，當按下按鈕時就會觸發 */}
      <NetworkCheck
        requiredChainId={HOLESKY_CHAIN_ID}
        onCorrectNetwork={() => {
          setNetworkCheckTriggered(false);  // 當網路正確時，重置狀態
          // 如果切換到正確網路後，自動再次嘗試簽名
          // if (networkCheckTriggered) {
          //   setTimeout(() => handleSignPermit(), 500);  // 稍微延遲確保網路已切換
          // }
        }}
        onCancelNetworkSwitch={() => {
          setNetworkCheckTriggered(false); // 重置觸發狀態
        }}
      >
        {/* 提供一個自訂的模態顯示控制 */}
        <div style={{ display: 'none' }}>
          {networkCheckTriggered && <button id="trigger-network-check" />}
        </div>
      </NetworkCheck>
    </>
  );
};

export default FakeStakingContract;