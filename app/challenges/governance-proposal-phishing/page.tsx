import GovernanceProposalPhishing from './GovernanceProposalPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="governance-proposal-phishing" />
      <GovernanceProposalPhishing />
    </>
  )
}