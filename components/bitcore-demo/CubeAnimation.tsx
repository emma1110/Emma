import animationData from "@/public/bitcore-assets/cube-loop.json";
import { ViewportLottie } from "@/components/bitcore-demo/ViewportLottie";

export function CubeAnimation() {
  return (
    <ViewportLottie
      className="stakingCubeLottie"
      animationData={animationData}
      preserveAspectRatio="xMidYMid meet"
      ariaLabel="Animated Bitcore staking cube"
    />
  );
}
