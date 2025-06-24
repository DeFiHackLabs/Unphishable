'use client';

import WalletSetupGuide from './WalletSetupGuide';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function WalletSetupGuidePage() {
  return (
    <>
      <DynamicMetadata pageKey="wallet-setup-guide" />
      <WalletSetupGuide />
    </>
  );

}