'use client';

import SafeProxyAttack from './SafeProxyAttack';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function SafeProxyAttackPage() {
  return (
    <>
      <DynamicMetadata pageKey="safe-proxy-attack" />
      <SafeProxyAttack />
    </>
  );
}
