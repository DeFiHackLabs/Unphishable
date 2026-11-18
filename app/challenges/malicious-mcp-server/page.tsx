import { MaliciousMcpServer } from "./MaliciousMcpServer";
import DynamicMetadata from "@/app/components/DynamicMetadata";

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="malicious-mcp-server" />
      <MaliciousMcpServer />
    </>
  );
}
