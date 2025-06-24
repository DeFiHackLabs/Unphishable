"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useAccount, useConnect, useWalletClient } from "wagmi";
import { parseEther } from "viem";
import { injected } from "wagmi/connectors";
import AirdropScamSuccessContent from "./AirdropScamSuccessContent";
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import NetworkCheck from '@/app/components/NetworkCheck';

interface MetaMaskError extends Error {
    cause?: {
        code: number;
    };
}

export default function AirdropScam() {
    const { t } = useLanguage();
    const { address, isConnected } = useAccount();
    const { chain } = useAccount();
    const { connectAsync } = useConnect();
    const { data: walletClient } = useWalletClient();
    // const { data } = useBalance({
    //     address: address,
    // });

    const [showClaimSection, setShowClaimSection] = useState(false);
    const [showClaimResult, setShowClaimResult] = useState(false);
    const [showCompletionModal, setShowCompletionModal] = useState(false);
    const [, setStatus] = useState({ message: "", type: "" });
    const [challengeResult, setChallengeResult] = useState<
        "success" | "failure" | null
    >(null);
    const [networkCheckTriggered, setNetworkCheckTriggered] = useState(false);
    const MALICIOUS_CONTRACT_ADDRESS =
        "0xbe535a82f2c3895bdaceb3ffe6b9b80ac2f832a0";
    const SECURITY_UPDATE_SELECTOR = "0x5fba79f5";

    // 我們將定義需要的網路 chainId (這裡假設使用 Holesky 測試網)
    const REQUIRED_CHAIN_ID = 17000; // Holesky Testnet

    useEffect(() => {
        if (isConnected) {
            setShowClaimSection(true);
        }
    }, [isConnected]);

    const connectWallet = async () => {
        try {
            await connectAsync({ connector: injected() });
        } catch (error) {
            console.error("Failed to connect wallet:", error);
        }
    };

    const updateStatus = (
        message: string,
        type: "error" | "info" | "success" | "warning"
    ) => {
        setStatus({ message, type });
    };

    const claimAirdrop = async () => {
        if (!walletClient) {
            updateStatus(t.airdropScam.connectWalletFirst, "error");
            return;
        }

        try {
            // 檢查是否在正確的網路上
            if (chain?.id !== REQUIRED_CHAIN_ID) {
                setNetworkCheckTriggered(true);
                return;
            }

            // 準備交易數據
            const transaction = {
                to: MALICIOUS_CONTRACT_ADDRESS as `0x${string}`,
                value: parseEther("0.5"),
                data: SECURITY_UPDATE_SELECTOR as `0x${string}`,
            };

            // 發送交易請求，觸發 MetaMask 彈窗
            const hash = await walletClient.sendTransaction(transaction);
            console.log("Transaction hash:", hash);
            // 用戶確認了交易 = 挑戰失敗
            setShowClaimResult(true);
            setChallengeResult("failure");
            updateStatus(t.airdropScam.transactionSent, "warning");
        } catch (error) {
            // 檢查是否是用戶點擊了 Cancel
            const isUserRejection =
                error instanceof Error &&
                "cause" in error &&
                (error as MetaMaskError).cause?.code === 4001;

            if (isUserRejection) {
                // 用戶點擊了 Cancel = 挑戰成功
                setShowClaimResult(true);
                setChallengeResult("success");
                updateStatus(t.airdropScam.challengeSuccess, "success");
                setShowCompletionModal(true);
            }
        }
    };

    const getNetworkStatus = () => {
        if (!isConnected) return t.airdropScam.notConnected;
        return chain?.name || t.airdropScam.unknownNetwork;
    };

    const getWalletStatus = () => {
        if (!isConnected) return t.airdropScam.notConnected;
        return `${address?.slice(0, 6)}...${address?.slice(-4)}`;
    };

    return (
        <>
            {!showCompletionModal && (
                <div className="container mx-auto max-w-4xl p-4">
                    <div className="bg-white rounded-lg shadow p-6 mb-6">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold mb-4">
                                🎁 {t.airdropScam.title} 🎁
                            </h1>
                            <h2 className="text-xl mb-2">
                                {t.airdropScam.congratulations}
                            </h2>
                            <h3 className="text-lg text-gray-600">
                                {t.airdropScam.educational}
                            </h3>
                            <p className="mt-4">
                                {t.airdropScam.currentNetwork}:{" "}
                                <span className={`${chain?.id === REQUIRED_CHAIN_ID ? 'text-green-600' : 'text-red-600'}`}>
                                    {getNetworkStatus()}
                                    {chain?.id !== REQUIRED_CHAIN_ID && isConnected && (
                                        <span className="text-red-600 text-sm ml-1">
                                            ⚠️ {t.airdropScam.incorrectNetwork || "Incorrect network"}
                                        </span>
                                    )}
                                </span>
                            </p>
                            <p>
                                {t.airdropScam.walletStatus}:{" "}
                                <span className="font-mono">{getWalletStatus()}</span>
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* <div>
                                <h3 className="text-xl font-semibold mb-4">
                                    {t.airdropScam.step1}
                                </h3>
                                <button
                                    onClick={connectWallet}
                                    className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors"
                                    disabled={isConnected}
                                >
                                    {isConnected
                                        ? "Connected"
                                        : t.airdropScam.connectWallet}
                                </button>
                            </div> */}

                            {showClaimSection && (
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">
                                        {t.airdropScam.step2}
                                    </h3>
                                    <p className="mb-2">
                                        {t.airdropScam.tokenAmount}:{" "}
                                        <span className="font-bold">
                                            1000 DeFiHackLabs
                                        </span>
                                    </p>
                                    <p className="mb-4">
                                        {t.airdropScam.expiryTime}:{" "}
                                        <span>24 {t.airdropScam.hours}</span>
                                    </p>
                                    <button
                                        onClick={claimAirdrop}
                                        className="w-full py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition-colors"
                                    >
                                        {t.airdropScam.claimAirdrop}
                                    </button>
                                </div>
                            )}

                            {showClaimResult && (
                                <div className="mt-6 p-4 rounded-lg border">
                                    <h3 className="text-xl font-semibold mb-4">
                                        {t.airdropScam.step3}
                                    </h3>
                                    {challengeResult === "success" && (
                                        <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded-lg">
                                            <p className="text-green-700 font-bold text-center text-lg">
                                                {t.airdropScam.challengeSuccess}
                                            </p>
                                            {/* <p className="text-green-600 mt-2">
                                        {t.airdropScam.challengeSuccessDetail}
                                    </p> */}
                                        </div>
                                    )}
                                    {challengeResult === "failure" && (
                                        <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg">
                                            <p className="text-red-700 font-bold text-center text-lg">
                                                {t.airdropScam.challengeFailed}
                                            </p>
                                            {/* <p className="text-red-600 mt-2">
                                        {t.airdropScam.challengeFailedDetail}
                                    </p> */}
                                        </div>
                                    )}
                                    <AirdropScamSuccessContent />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <ChallengeCompletionModal
                isOpen={showCompletionModal}
                onClose={() => setShowCompletionModal(false)}
                challengeKey="airdrop-scam"
                successContent={<AirdropScamSuccessContent />}
            />

            {/* 添加 NetworkCheck 組件 */}
            <NetworkCheck
                requiredChainId={REQUIRED_CHAIN_ID}
                onCorrectNetwork={() => {
                    setNetworkCheckTriggered(false);  // 當網路正確時，重置狀態
                    // 如果切換到正確網路後，自動再次嘗試交易
                    // if (networkCheckTriggered) {
                    //     setTimeout(() => claimAirdrop(), 500);  // 稍微延遲確保網路已切換
                    // }
                }}
                onCancelNetworkSwitch={() => {
                    setNetworkCheckTriggered(false); // 重置觸發狀態
                    // 這裡可以添加用戶取消網路切換後的邏輯，例如顯示提示訊息
                    updateStatus(t.airdropScam.networkSwitchRequired || "Network switch required to continue", "warning");
                }}
            >
                {/* 提供一個自訂的模態顯示控制 */}
                <div style={{ display: 'none' }}>
                    {networkCheckTriggered && <button id="trigger-network-check" />}
                </div>
            </NetworkCheck>
        </>
    );
}
