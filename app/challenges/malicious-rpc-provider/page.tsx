'use client';

import MaliciousRPCProvider from './MaliciousRPCProvider';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function DefiProxyPhishingPage() {
  return (
    <>
      <DynamicMetadata pageKey="malicious-rpc-provider" />
      <MaliciousRPCProvider />
    </>
  )
}
