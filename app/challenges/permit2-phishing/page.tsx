'use client';

import Permit2PhishingChallenge from './Permit2PhishingChallenge';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Permit2PhishingPage() {
  return (
    <>
      <DynamicMetadata pageKey="permit2-phishing" />
      <Permit2PhishingChallenge />
    </>
  )
}