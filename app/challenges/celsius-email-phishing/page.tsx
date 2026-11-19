import { CelsiusEmailPhishing } from "./CelsiusEmailPhishing";
import DynamicMetadata from "@/app/components/DynamicMetadata";

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="celsius-email-phishing" />
      <CelsiusEmailPhishing />
    </>
  );
}
