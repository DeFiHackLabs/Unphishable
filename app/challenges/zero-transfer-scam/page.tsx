'use client';

import ZeroTransferScam from './ZeroTransferScam';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="zero-transfer-scam" />
      <ZeroTransferScam />
    </>
  );

}