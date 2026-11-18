import { AiFakeDownloadAds } from "./AiFakeDownloadAds";
import DynamicMetadata from "@/app/components/DynamicMetadata";

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="ai-fake-download-ads" />
      <AiFakeDownloadAds />
    </>
  );
}
