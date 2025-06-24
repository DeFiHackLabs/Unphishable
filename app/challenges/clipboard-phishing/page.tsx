'use client';

import ClipboardPhishing from './ClipboardPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="clipboard-phishing" />
      <ClipboardPhishing />;
    </>
  )

}
