import PunycodePhishing from './PunycodePhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="punycode-phishing" />
      <PunycodePhishing />
    </>
  );
}