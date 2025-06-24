import BlindSignaturePhishingPage from './BlindSignaturePhishingPage';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="blind-signature-phishing" />
      <BlindSignaturePhishingPage />
    </>
  )
}
