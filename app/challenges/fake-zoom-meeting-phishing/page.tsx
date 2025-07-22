"use client";

import FakeZoomMeetingPhishing from './FakeZoomMeetingPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function FakeZoomMeetingPhishingPage() {
  return (
    <>
      <DynamicMetadata pageKey="fake-zoom-meeting-phishing" />
      <FakeZoomMeetingPhishing />
    </>
  )
}