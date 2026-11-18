import { AiBrowserAgentInjection } from "./AiBrowserAgentInjection";
import DynamicMetadata from "@/app/components/DynamicMetadata";

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="ai-browser-agent-injection" />
      <AiBrowserAgentInjection />
    </>
  );
}
