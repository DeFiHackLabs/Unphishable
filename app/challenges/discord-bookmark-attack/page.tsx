
import DiscordBookmarkAttack from './DiscordBookmarkAttack';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="discord-bookmark-attack" />
      <DiscordBookmarkAttack />
    </>
  )
}