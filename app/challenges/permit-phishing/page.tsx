'use client';
import PermitPhishingPage from './PermitPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {

  return (
    <>
      <DynamicMetadata pageKey="permit-phishing" />
      <PermitPhishingPage />;
    </>
  )
}