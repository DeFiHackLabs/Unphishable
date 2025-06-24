'use client';

import DefiProxyPhishing from './DefiProxyPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function DefiProxyPhishingPage() {
  return (
    <>
      <DynamicMetadata pageKey="defi-proxy-phishing" />
      <DefiProxyPhishing />
    </>
  )
}
