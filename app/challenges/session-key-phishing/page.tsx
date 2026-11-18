import { SessionKeyPhishing } from "./SessionKeyPhishing";
import DynamicMetadata from "@/app/components/DynamicMetadata";

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="session-key-phishing" />
      <SessionKeyPhishing />
    </>
  );
}
