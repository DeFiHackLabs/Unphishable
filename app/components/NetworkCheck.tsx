'use client';

import React, { useState, useEffect, cloneElement } from 'react';
import { useAccount } from 'wagmi';
import NetworkSwitchModal from './NetworkSwitchModal';

// 常見的 EVM 網路映射表
export const getNetworkName = (chainId: number): string => {
  const networks: Record<number, string> = {
    1: 'Ethereum Mainnet',
    5: 'Goerli Testnet',
    11155111: 'Sepolia Testnet',
    137: 'Polygon Mainnet',
    80001: 'Mumbai Testnet',
    17000: 'Holesky Testnet',
    42161: 'Arbitrum One',
    421613: 'Arbitrum Goerli',
    10: 'Optimism',
    420: 'Optimism Goerli',
    56: 'BNB Smart Chain',
    97: 'BSC Testnet',
    43114: 'Avalanche C-Chain',
    43113: 'Fuji Testnet',
    250: 'Fantom Opera',
    4002: 'Fantom Testnet',
    100: 'Gnosis Chain (xDai)',
    42170: 'Arbitrum Nova',
    8453: 'Base',
    84531: 'Base Goerli',
    1101: 'Polygon zkEVM',
    1442: 'Polygon zkEVM Testnet',
    324: 'zkSync Era',
    280: 'zkSync Era Testnet',
    81457: 'Blast',
    168587773: 'Blast Sepolia',
  };

  return networks[chainId] || `Unknown Network`;
};

// 定義子組件應該接受的屬性
interface NetworkCheckChildProps {
  onCheckNetwork?: () => boolean;
  isOnCorrectNetwork?: boolean;
  [key: string]: any; // 允許其他屬性
}

interface NetworkCheckProps {
  requiredChainId: number;
  requiredNetworkName?: string;
  children?: React.ReactElement<NetworkCheckChildProps>;
  onCorrectNetwork?: () => void;
  onCancelNetworkSwitch?: () => void;
}

const NetworkCheck: React.FC<NetworkCheckProps> = ({
  children,
  requiredChainId,
  requiredNetworkName = "Holesky Testnet",
  onCorrectNetwork,
  onCancelNetworkSwitch
}) => {
  const { chainId: accountChainId } = useAccount();
  const [showNetworkModal, setShowNetworkModal] = useState(false);

  // 監聽 chainId 變化
  useEffect(() => {
    if (accountChainId === requiredChainId && onCorrectNetwork) {
      onCorrectNetwork();
    }
  }, [accountChainId, requiredChainId, onCorrectNetwork]);

  // 檢查是否有 trigger 元素被點擊
  useEffect(() => {
    const triggerElement = document.getElementById('trigger-network-check');
    if (triggerElement && accountChainId !== requiredChainId) {
      setShowNetworkModal(true);
    }
  }, [accountChainId, requiredChainId, children]);

  const handleNetworkModalClose = (success?: boolean) => {
    setShowNetworkModal(false);

    // 如果用戶取消了網路切換，調用相應的回調函數
    if (success === false && onCancelNetworkSwitch) {
      onCancelNetworkSwitch();
    }
  };

  const handleCheckNetwork = () => {
    if (accountChainId !== requiredChainId) {
      setShowNetworkModal(true);
      return false;
    }
    return true;
  };

  return (
    <>
      {children && cloneElement(children as React.ReactElement<NetworkCheckChildProps>, {
        onCheckNetwork: handleCheckNetwork,
        isOnCorrectNetwork: accountChainId === requiredChainId
      })}

      <NetworkSwitchModal
        isOpen={showNetworkModal}
        onClose={handleNetworkModalClose}
        requiredChainId={requiredChainId}
        networkName={requiredNetworkName}
      />
    </>
  );
}

export default NetworkCheck;
