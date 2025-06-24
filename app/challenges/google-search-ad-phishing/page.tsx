
import GoogleSearchAdPhishing from './GoogleSearchAdPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="google-search-ad-phishing" />
      <GoogleSearchAdPhishing />
    </>
  )
}