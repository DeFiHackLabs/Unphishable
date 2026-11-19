import { Eip7702Phishing } from "./Eip7702Phishing";
import DynamicMetadata from "@/app/components/DynamicMetadata";

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="eip-7702-phishing" />
      <Eip7702Phishing />
    </>
  );
}
