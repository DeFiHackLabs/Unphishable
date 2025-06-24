import TelegramTokenPhishing from './TelegramTokenPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="telegram-token-phishing" />
      <TelegramTokenPhishing />
    </>
  );
}