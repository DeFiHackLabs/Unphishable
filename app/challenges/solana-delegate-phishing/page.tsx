import { SolanaDelegatePhishing } from "./SolanaDelegatePhishing";
import DynamicMetadata from "@/app/components/DynamicMetadata";

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="solana-delegate-phishing" />
      <SolanaDelegatePhishing />
    </>
  );
}
