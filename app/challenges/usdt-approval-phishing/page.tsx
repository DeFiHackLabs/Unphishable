'use client';

import UsdtApprovalPhishing from './UsdtApprovalPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="usdt-approval-phishing" />
      <UsdtApprovalPhishing />
    </>
  );
}