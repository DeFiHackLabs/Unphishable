import { Metadata } from 'next';
import HomePage from './components/HomePage';

export const metadata: Metadata = {
  title: 'Unphishable',
  description: 'Learn Web3 Security through Interactive Challenges',
};

export default function Page() {
  return <HomePage />;
}