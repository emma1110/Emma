"use client";

import { useEffect, useRef } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";

type ViewportLottieProps = {
  animationData: object;
  ariaLabel: string;
  className: string;
  preserveAspectRatio: string;
};

export function ViewportLottie({
  animationData,
  ariaLabel,
  className,
  preserveAspectRatio,
}: ViewportLottieProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lottieRef.current?.play();
        } else {
          lottieRef.current?.pause();
        }
      },
      { rootMargin: "160px 0px", threshold: 0.01 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        autoplay={false}
        loop
        rendererSettings={{ preserveAspectRatio }}
        aria-label={ariaLabel}
        role="img"
      />
    </div>
  );
}
