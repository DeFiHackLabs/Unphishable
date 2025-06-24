import TransactionSimulationSpoofing from './TransactionSimulationSpoofing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="transaction-simulation-spoofing" />
      <TransactionSimulationSpoofing />
    </>
  );
}
