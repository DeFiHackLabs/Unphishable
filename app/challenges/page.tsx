import { Metadata } from 'next';
import ChallengesPage from './ChallengesPage';

export const metadata: Metadata = {
  title: 'Unphishable',
  description: 'Learn Web3 Security through Interactive Challenges',
};

export default function Page() {
  return <ChallengesPage />;
}