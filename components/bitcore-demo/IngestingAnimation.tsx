import animationData from "@/public/bitcore-assets/bitcore-ingesting.json";
import { ViewportLottie } from "@/components/bitcore-demo/ViewportLottie";

export function IngestingAnimation() {
  return (
    <ViewportLottie
      className="ingestingLottie"
      animationData={animationData}
      preserveAspectRatio="xMidYMid slice"
      ariaLabel="Data moving from a document into the Bitcore database"
    />
  );
}
