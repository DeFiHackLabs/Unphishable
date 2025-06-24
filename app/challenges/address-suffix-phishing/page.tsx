'use client';

import AddressSuffixPhishing from './AddressSuffixPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="address-suffix-phishing" />
      <AddressSuffixPhishing />
    </>
  )
}