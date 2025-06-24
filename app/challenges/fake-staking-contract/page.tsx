import FakeStakingContract from './FakeStakingContract';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="fake-staking-contract" />
      <FakeStakingContract />
    </>
  )
}
