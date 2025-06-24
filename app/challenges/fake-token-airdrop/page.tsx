'use client';

import FakeTokenAirdrop from './FakeTokenAirdrop';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="fake-token-airdrop" />
      <FakeTokenAirdrop />
    </>
  );
}