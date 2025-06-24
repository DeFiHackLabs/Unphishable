'use client';

import GoogleSpoofedPhishing from './GoogleSpoofedPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="google-spoofed-phishing" />
      <GoogleSpoofedPhishing />
    </>
  );
} 