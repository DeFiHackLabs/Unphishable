import { McpSilentToolUpdate } from "./McpSilentToolUpdate";
import DynamicMetadata from "@/app/components/DynamicMetadata";

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="mcp-silent-tool-update" />
      <McpSilentToolUpdate />
    </>
  );
}
