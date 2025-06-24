'use client';

import { useState, useEffect, useRef } from 'react';
import { useAccount, useConnect, useChainId, useSwitchChain } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { holesky } from 'viem/chains';
import { useLanguage } from '@/app/contexts/LanguageContext';
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import AddressSuffixPhishingSuccessContent from './AddressSuffixPhishingSuccessContent'

const ADDRESSES: { address: string; isCorrect: boolean }[] = [];

export default function AddressSuffixPhishing() {
  const { t } = useLanguage();
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const [addressList, setAddressList] = useState<{ address: string; isCorrect: boolean }[] | null>(null);
  //const { disconnect } = useDisconnect();

  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [, setSelectedAddress] = useState('');
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (address) {
      console.log('User address:', address);
      generateSimilarAddresses(address);
    }
  }, [address]);

  const handleConnectWallet = async () => {
    try {
      await connect({ connector: injected() });
      if (chainId !== holesky.id) {
        try {
          await switchChain({ chainId: holesky.id });
        } catch (error) {
          console.error('Failed to switch network:', error);
        }
      }
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  const generateSimilarAddresses = (userAddress: string) => {
    // Clear the addresses array
    ADDRESSES.length = 0;

    // Add the user's real address
    ADDRESSES.push({ address: userAddress, isCorrect: true });
    console.log('Real address:', ADDRESSES);
    // Generate 4 similar-looking addresses
    for (let i = 0; i < 4; i++) {
      const fakeAddress = createSimilarAddress(userAddress);
      ADDRESSES.push({ address: fakeAddress, isCorrect: false });
    }

    // Shuffle the addresses
    for (let i = ADDRESSES.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ADDRESSES[i], ADDRESSES[j]] = [ADDRESSES[j], ADDRESSES[i]];
    }
    setAddressList(ADDRESSES);
  };

  const createSimilarAddress = (originalAddress: string) => {
    // Keep the prefix (0x + 3 chars) and suffix (last 5 chars) the same
    const prefix = originalAddress.substring(0, 5);
    const suffix = originalAddress.slice(-5);

    // Generate a random middle part (30 characters)
    let middlePart = "";
    const possibleChars = "0123456789abcdefABCDEF";

    for (let i = 0; i < 30; i++) {
      middlePart += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }

    return prefix + middlePart + suffix;
  };

  const handleAddressSelect = async (address: string) => {
    setSelectedAddress(address);
    setShowResult(true);
    const isCorrect = ADDRESSES.find(a => a.address === address)?.isCorrect;
    if (isCorrect) {
      setChallengeCompleted(true);
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
        <div className="p-4 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 challenge-title">{t.addressSuffixPhishing.title}</h1>
            <h2 className="text-xl mb-2 challenge-subtitle">{t.addressSuffixPhishing.subtitle}</h2>
            <h3 className="text-lg text-yellow-600">{t.addressSuffixPhishing.warning}</h3>
          </div>

          <div className="mb-8 text-center challenge-title">
            <p className="mb-2">
              {t.addressSuffixPhishing.networkStatus}{' '}
              <span>{chainId === holesky.id ? 'Holesky Testnet' : t.common.notConnected}</span>
            </p>
            <p>
              {t.addressSuffixPhishing.walletStatus}{' '}
              <span className="font-mono cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors" title="點擊選擇此地址">
                {isConnected ? `${address?.slice(0, 6)}...${address?.slice(-4)}` : t.common.notConnected}
              </span>
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 challenge-title">{t.addressSuffixPhishing.step1Title}</h3>
              <button
                onClick={handleConnectWallet}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                {t.addressSuffixPhishing.connectWallet}
              </button>
            </div>

            {isConnected && (
              <div>
                <h3 className="text-lg font-semibold mb-2 challenge-title">{t.addressSuffixPhishing.step2Title}</h3>
                <p className="mb-4 challenge-title">{t.addressSuffixPhishing.step2Description}</p>

                <div className="space-y-4">
                  {addressList?.map((addr, index) => (
                    <div key={index} className="w-full bg-gray-50 hover:bg-gray-100 rounded transition-colors p-4 flex">
                      <div className="font-mono text-sm flex-grow">
                        {addr.address}
                      </div>
                      <div className="flex-shrink-0 ml-3">
                        <button
                          onClick={() => handleAddressSelect(addr.address)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                        >
                          {t.addressSuffixPhishing.selectThisAddress}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {showResult && (
                  <div className="mt-8 p-6 rounded-lg border-2 border-blue-500">
                    <h3 className="text-xl font-bold mb-4 challenge-title">{t.addressSuffixPhishing.resultTitle}</h3>
                    <div className="text-red-600">
                      <p>{t.addressSuffixPhishing.failureMessage}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      <ChallengeCompletionModal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        challengeKey="address-suffix-phishing"
        successContent={<AddressSuffixPhishingSuccessContent />}
      />
    </>
  );
}