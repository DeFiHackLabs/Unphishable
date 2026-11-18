import { SlopsquattingDependency } from "./SlopsquattingDependency";
import DynamicMetadata from "@/app/components/DynamicMetadata";

export default function Page() {
  return (
    <>
      <DynamicMetadata pageKey="slopsquatting-dependency" />
      <SlopsquattingDependency />
    </>
  );
}
