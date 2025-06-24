'use client';

import FakeCaptchaPhishing from './FakeCaptchaPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="fake-captcha" />
      <FakeCaptchaPhishing />
    </>
  );
}