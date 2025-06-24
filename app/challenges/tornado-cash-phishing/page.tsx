import TornadoCashPhishing from './TornadoCashPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="tornado-cash-phishing" />
      <TornadoCashPhishing />
    </>
  )
}
