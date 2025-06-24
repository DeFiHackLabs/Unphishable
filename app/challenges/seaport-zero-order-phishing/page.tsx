import { SeaportZeroOrderPhishing } from './SeaportZeroOrderPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="seaport-zero-order-phishing" />
      <SeaportZeroOrderPhishing />
    </>
  );
}