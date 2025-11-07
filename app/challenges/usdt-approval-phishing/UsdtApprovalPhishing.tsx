"use client";

import { useState, useEffect, useRef } from "react";
import {
    useAccount,
    useConnect,
    useChainId,
    useSwitchChain,
    useWriteContract,
} from "wagmi";
import { injected } from "wagmi/connectors";
import { sepolia } from "wagmi/chains";
import { useLanguage } from "@/app/contexts/LanguageContext";
import ChallengeCompletionModal from '@/app/components/ChallengeCompletionModal';
import UsdtApprovalPhishingSuccessContent from "./UsdtApprovalPhishingSuccessContent";
import NetworkCheck from '@/app/components/NetworkCheck';

const USDT_CONTRACT_ADDRESS = "0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0";
const PHISHING_SPENDER_ADDRESS = "0x0000000066663456789012345678901234560000";
const MAX_UINT256 = BigInt(Math.pow(2, 256)) - 1n;

export default function UsdtApprovalPhishing() {
    const [status, setStatus] = useState<string>("");
    const [txHash, setTxHash] = useState<string>("");
    const [, setIsApproveUSDT] = useState<boolean>(false);
    const [isChallengeFailed, setIsChallengeFailed] = useState<boolean>(false);
    const [revokeTxHash, setRevokeTxHash] = useState<string>("");
    const [showCompletionModal, setShowCompletionModal] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    //const [isRevokeUSDT, setIsRevokeUSDT] = useState<boolean>(false);
    const { t } = useLanguage();
    const { address, isConnected } = useAccount();
    const { connect } = useConnect();
    const chainId = useChainId();
    const { chain } = useAccount();
    const { switchChain } = useSwitchChain();
    const [networkCheckTriggered, setNetworkCheckTriggered] = useState(false);
    const [isExecute, setIsExecute] = useState(false);
    const [isExecuteRevoke, setIsExecuteRevoke] = useState(false);
    const REQUIRED_CHAIN_ID = 11155111; // Sepolia Testnet

    useEffect(() => { }, []);

    const handleConnectWallet = async () => {
        try {
            await connect({ connector: injected() });
            if (chainId !== sepolia.id) {
                try {
                    await switchChain({ chainId: sepolia.id });
                } catch (error) {
                    console.error("Failed to switch network:", error);
                }
            }
        } catch (error) {
            console.error("Failed to connect:", error);
        }
    };

    const { writeContractAsync, isIdle } = useWriteContract();

    const handleApproveUSDT = async () => {
        try {
            setIsExecute(true);
            // 檢查是否在正確的網路上
            if (chain?.id !== REQUIRED_CHAIN_ID) {
                setNetworkCheckTriggered(true);
                setIsExecute(false);
                return;
            }
            const tx = await writeContractAsync({
                address: USDT_CONTRACT_ADDRESS,
                abi: [
                    {
                        name: "approve",
                        type: "function",
                        stateMutability: "nonpayable",
                        inputs: [
                            { name: "spender", type: "address" },
                            { name: "amount", type: "uint256" },
                        ],
                        outputs: [{ type: "bool" }],
                    },
                ],
                functionName: "approve",
                args: [PHISHING_SPENDER_ADDRESS, MAX_UINT256],
                chainId: sepolia.id,
            });
            console.log("Approval tx:", tx, isIdle);
            setTxHash(tx);
            // User approved the transaction - this is the wrong action
            setIsChallengeFailed(true);
            setIsExecute(false);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Approval error:", error.message);

                // 檢查是否為用戶拒絕交易的錯誤
                const isUserRejection =
                    ("code" in error && error.code === 4001) ||
                    error.message.toLowerCase().includes("user denied") ||
                    error.message.toLowerCase().includes("user rejected");

                if (isUserRejection) {
                    setIsApproveUSDT(true);
                    if (chatEndRef.current) {
                        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
                    }
                    setShowCompletionModal(true);

                }
            } else {
                console.error("Unknown approval error:", error);
            }
        }
    };

    const handleRevokeUSDT = async () => {
        try {
            console.log("Revoking USDT...");
            setIsExecuteRevoke(true);
            // 檢查是否在正確的網路上
            if (chain?.id !== REQUIRED_CHAIN_ID) {
                setNetworkCheckTriggered(true);
                setIsExecuteRevoke(false);
                return;
            }
            const tx = await writeContractAsync({
                address: USDT_CONTRACT_ADDRESS,
                abi: [
                    {
                        name: "approve",
                        type: "function",
                        stateMutability: "nonpayable",
                        inputs: [
                            { name: "spender", type: "address" },
                            { name: "amount", type: "uint256" },
                        ],
                        outputs: [{ type: "bool" }],
                    },
                ],
                functionName: "approve",
                args: [PHISHING_SPENDER_ADDRESS, 0n], // 設置為 0 來撤銷授權
                chainId: sepolia.id,
            });

            console.log("Revoke tx:", tx);
            setRevokeTxHash(tx);
            setIsExecuteRevoke(false);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Revoke error:", error.message);

                // 檢查是否為用戶拒絕交易的錯誤
                const isUserRejection =
                    ("code" in error && error.code === 4001) ||
                    error.message.toLowerCase().includes("user denied") ||
                    error.message.toLowerCase().includes("user rejected");

                if (isUserRejection) {
                    setStatus(t.usdtApprovalPhishing.revokeRejected);
                    if (chatEndRef.current) {
                        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
                    }
                    setShowCompletionModal(true);
                }
            } else {
                console.error("Unknown revoke error:", error);
            }
        }
    };

    return (
        <>
            <div ref={chatEndRef} />
            {!showCompletionModal && (
                <div className="p-4 max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-4 challenge-title">
                            {t.usdtApprovalPhishing.title}
                        </h1>
                        <h2 className="text-xl mb-2 challenge-subtitle">
                            {t.usdtApprovalPhishing.subtitle}
                        </h2>
                        <h3 className="text-lg text-yellow-600">
                            {t.usdtApprovalPhishing.warning}
                        </h3>
                    </div>

                    {/* 添加場景介紹部分 */}
                    <div className="mb-8 bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-4 ">
                            {t.usdtApprovalPhishing.scenario.title}
                        </h3>
                        <p className="mb-4 ">
                            {t.usdtApprovalPhishing.scenario.description}
                        </p>

                        <div className="space-y-4">
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="text-blue-700">
                                    {t.usdtApprovalPhishing.scenario.message1}
                                </p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="text-blue-700">
                                    {t.usdtApprovalPhishing.scenario.message2}
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                            <p className="text-yellow-700">
                                {t.usdtApprovalPhishing.scenario.warning}
                            </p>
                        </div>
                    </div>

                    {/* 原有的錢包連接狀態部分 */}
                    <div className="mb-8 text-center challenge-title">
                        <p className="mb-2">
                            {t.usdtApprovalPhishing.networkStatus}{" "}
                            <span>
                                {chainId === sepolia.id
                                    ? "Sepolia Testnet"
                                    : t.usdtApprovalPhishing.notConnected}
                            </span>
                        </p>
                        <p>
                            {t.usdtApprovalPhishing.walletStatus}{" "}
                            <span className="font-mono">
                                {isConnected
                                    ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
                                    : t.usdtApprovalPhishing.notConnected}
                            </span>
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* <div>
                            <h3 className="text-lg font-semibold mb-2 challenge-title">
                                Step 1: {t.usdtApprovalPhishing.connectWallet}
                            </h3>
                            <button
                                onClick={handleConnectWallet}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                                disabled={isConnected}
                            >
                                {isConnected
                                    ? "Connected"
                                    : t.usdtApprovalPhishing.connectWallet}
                            </button>
                        </div> */}

                        {isConnected && (
                            <div>
                                <h3 className="text-lg font-semibold mb-2 challenge-title">
                                    {t.usdtApprovalPhishing.step2Title}
                                </h3>
                                <p className="mb-2 challenge-title">
                                    {t.usdtApprovalPhishing.spenderAddress}{" "}
                                    <span className="font-mono">
                                        {PHISHING_SPENDER_ADDRESS}
                                    </span>
                                </p>
                                <button
                                    onClick={handleApproveUSDT}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors disabled:bg-red-300"
                                    disabled={isExecute}
                                >
                                    {!isExecute ? (
                                        t.usdtApprovalPhishing.approveButton
                                    ) : (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            {t.usdtApprovalPhishing.approvingButton}
                                        </span>
                                    )}
                                </button>
                                {txHash && (
                                    <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
                                        {isChallengeFailed && (
                                            <p className="font-bold mb-2">
                                                {t.usdtApprovalPhishing.challengeFailed}
                                            </p>
                                        )}
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: t.usdtApprovalPhishing.signatureDetails.permissionNote.replaceAll(
                                                    "{txHash}",
                                                    txHash
                                                ),
                                            }}
                                        />
                                    </div>
                                )}
                                <h3 className="text-lg font-semibold mb-2 challenge-title">
                                    {t.usdtApprovalPhishing.step3Title}
                                </h3>
                                <p className="mb-2 challenge-title">
                                    {t.usdtApprovalPhishing.revokeDescription}
                                </p>
                                <button
                                    onClick={handleRevokeUSDT}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                                >
                                    {!isExecuteRevoke ? t.usdtApprovalPhishing.revokeButton :
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            {t.usdtApprovalPhishing.revokingButton}
                                        </span>
                                    }
                                </button>
                                {revokeTxHash && (
                                    <div className="mt-4 p-4 bg-blue-100 text-blue-700 rounded">
                                        <p>
                                            {
                                                t.usdtApprovalPhishing
                                                    .revokeTransactionView
                                            }{" "}
                                            <a
                                                href={`https://sepolia.etherscan.io/tx/${revokeTxHash}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 underline"
                                            >
                                                View on Etherscan
                                            </a>
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}

                        {status && (
                            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
                                {status}
                            </div>
                        )}
                    </div>
                </div>
            )}
            <ChallengeCompletionModal
                isOpen={showCompletionModal}
                onClose={() => setShowCompletionModal(false)}
                challengeKey="usdt-approval-phishing"
                successContent={<UsdtApprovalPhishingSuccessContent />}
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
