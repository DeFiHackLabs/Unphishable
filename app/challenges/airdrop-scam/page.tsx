'use client';

import AirdropScam from './AirdropScam';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="airdrop-scam" />
      <AirdropScam />;
    </>
  )

}
