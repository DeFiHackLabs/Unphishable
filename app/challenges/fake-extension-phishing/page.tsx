import { FakeExtensionPhishing } from "./FakeExtensionPhishing";
import DynamicMetadata from "@/app/components/DynamicMetadata";

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="fake-extension-phishing" />
      <FakeExtensionPhishing />
    </>
  );
}
