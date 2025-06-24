import TelegramFakeSafeguard from './TelegramFakeSafeguard';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="telegram-fake-safeguard" />
      <TelegramFakeSafeguard />
    </>
  )
}