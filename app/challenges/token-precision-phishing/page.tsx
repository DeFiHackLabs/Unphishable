import TokenPrecisionPhishing from './TokenPrecisionPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="token-precision-phishing" />
      <TokenPrecisionPhishing />
    </>
  );
}
