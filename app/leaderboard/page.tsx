'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import TopBar from '@/app/components/index/TopBar';
import Banner from '@/app/components/index/Banner';
import Footer from '@/app/components/index/Footer';

// 使用動態導入且禁用 SSR
const Leaderboard = dynamic(
  () => import('@/app/components/index/Leaderboard'),
  { ssr: false }
);

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Banner />
      <Suspense fallback={<div className="p-10 text-center">Loading leaderboard...</div>}>
        <Leaderboard title="page" />
      </Suspense>
      <Footer />
    </div>
  );
}