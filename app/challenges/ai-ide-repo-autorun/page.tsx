import { AiIdeRepoAutorun } from "./AiIdeRepoAutorun";
import DynamicMetadata from "@/app/components/DynamicMetadata";

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="ai-ide-repo-autorun" />
      <AiIdeRepoAutorun />
    </>
  );
}
