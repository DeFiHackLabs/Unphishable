import TwitterPhishing from './TwitterPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="twitter-phishing" />
      <TwitterPhishing />
    </>
  );
}