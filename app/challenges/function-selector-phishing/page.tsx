import FunctionSelectorPhishing from './FunctionSelectorPhishing';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="function-selector-phishing" />
      <FunctionSelectorPhishing />
    </>
  );
}
