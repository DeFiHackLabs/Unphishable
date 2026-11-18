import { WalletConnectSessionHijack } from "./WalletConnectSessionHijack";
import DynamicMetadata from "@/app/components/DynamicMetadata";

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="walletconnect-session-hijack" />
      <WalletConnectSessionHijack />
    </>
  );
}
