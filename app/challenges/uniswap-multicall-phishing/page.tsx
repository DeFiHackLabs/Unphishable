import UniswapMulticallPhishing from './UniswapMulticallPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="uniswap-multicall-phishing" />
      <UniswapMulticallPhishing />
    </>
  );
}