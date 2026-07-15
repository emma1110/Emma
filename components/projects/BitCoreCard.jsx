import React from "react";
import Link from "next/link";

export default function BitCoreCard() {
  return (
    <Link href="/bitcore" className="project-card-link w-full block">
      <div className="motion-card relative w-full overflow-hidden rounded-[24px] bg-gradient-to-b from-[#ff5731] to-[#fea213] cursor-pointer flex flex-col lg:block min-h-[560px] lg:h-[576px]" data-reveal data-tilt>
      {/* Logo · CASE STUDY */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-[20px] py-5 sm:py-[24px] z-10">
        <div className="bg-[rgba(255,255,255,0.9)] flex items-center justify-center p-[10px] sm:p-[12px] rounded-[14px] sm:rounded-[16px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] w-[56px] h-[56px] sm:w-[62px] sm:h-[62px] shrink-0">
          <img src="/images/bitcore.svg" alt="BitCore" className="w-full h-full object-contain" width="62" height="62" />
        </div>
        <p className="type-label-lg text-white">
          CASE STUDY
        </p>
      </div>

      {/* Title + badges */}
      <div className="relative z-10 flex flex-col gap-[16px] px-4 sm:px-[20px] lg:px-0 pt-[96px] sm:pt-[110px] lg:pt-0 lg:absolute lg:left-[27px] lg:top-[217px] w-full lg:w-[342px]">
        <p className="type-heading-h3 text-white">
          Designing a Layer 1 experience anyone can understand
        </p>
        <div className="flex flex-wrap gap-[12px] items-center">
          {["Landing Page", "Layer 1", "Web3"].map((tag) => (
            <span
              key={tag}
              className="type-label-lg bg-[rgba(255,255,255,0.1)] text-white px-[12px] py-[4px] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop Safari mockup — right */}
      <div className="relative z-0 mt-8 sm:mt-[40px] lg:mt-0 lg:absolute lg:left-[419px] lg:top-[98px] lg:bottom-0 lg:right-0 ml-4 sm:ml-[20px] lg:ml-0 h-[320px] sm:h-[420px] lg:h-auto overflow-hidden">
        <img
          src="/images/bitcore.avif"
          alt="BitCore"
          className="w-[145%] max-w-none lg:w-full h-full object-contain object-left-top lg:object-cover lg:object-left-top rounded-tl-[16px]"
          width="942"
          height="522"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
    </Link>
  );
}
