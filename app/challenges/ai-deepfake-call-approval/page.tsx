import { AiDeepfakeCallApproval } from "./AiDeepfakeCallApproval";
import DynamicMetadata from "@/app/components/DynamicMetadata";

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="ai-deepfake-call-approval" />
      <AiDeepfakeCallApproval />
    </>
  );
}
