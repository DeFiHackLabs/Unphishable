'use client';

import { usePathname } from 'next/navigation';
import ChallengeLayout from '../components/ChallengeLayout';
import ChallengesPage from './ChallengesPage';

export default function ChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 如果是 /challenges 路徑，直接顯示 ChallengesPage
  if (pathname === '/challenges') {
    return <ChallengesPage />
  }

  // 對於其他挑戰頁面，使用 ChallengeLayout
  return <ChallengeLayout>{children}</ChallengeLayout>
}