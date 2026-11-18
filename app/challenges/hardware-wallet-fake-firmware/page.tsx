import { HardwareWalletFakeFirmware } from "./HardwareWalletFakeFirmware";
import DynamicMetadata from "@/app/components/DynamicMetadata";

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="hardware-wallet-fake-firmware" />
      <HardwareWalletFakeFirmware />
    </>
  );
}
