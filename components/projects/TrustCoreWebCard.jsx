import React from "react";
import Link from "next/link";

export default function TrustCoreWebCard() {
  return (
    <Link href="/trustcore-web" className="project-card-link block w-full" data-reveal style={{ "--reveal-delay": "80ms" }}>
      <div 
        className="motion-card relative w-full overflow-hidden rounded-[24px] cursor-pointer flex flex-col justify-between pt-[96px] sm:pt-[110px] min-h-[500px] sm:min-h-[540px] lg:h-[568px]"
        style={{ background: "linear-gradient(180deg, #3FB0BC 0%, #43A5BC 57.32%, #60A4D0 100%)" }}
        data-tilt
      >
        {/* Logo · CASE STUDY */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-[20px] py-5 sm:py-[24px] z-10">
          <div className="bg-[rgba(255,255,255,0.9)] flex items-center justify-center p-[10px] sm:p-[12px] rounded-[14px] sm:rounded-[16px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] w-[56px] h-[56px] sm:w-[62px] sm:h-[62px] shrink-0">
            <img src="/images/tc.svg" alt="TrustCore" className="w-full h-full object-contain" width="62" height="62" />
          </div>
          <p className="type-label-lg text-[#c3e9fb]">
            CASE STUDY
          </p>
        </div>

        {/* Title + badges */}
        <div className="flex flex-col gap-[12px] z-10 px-4 sm:px-[20px]">
          <p className="type-heading-h3 text-white">
            Explaining a complex Web3 ecosystem with clarity
          </p>
          <div className="flex flex-wrap gap-[12px] items-center">
            {["Landing Page", "Growth", "Conversion"].map((tag) => (
              <span
                key={tag}
                className="type-label-lg bg-[rgba(255,255,255,0.1)] text-white px-[12px] py-[4px] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Mockup */}
        <div className="mt-8 sm:mt-[40px] flex justify-center w-full px-4 lg:px-0 flex-1 items-end">
          <div className="w-full lg:w-[94%] max-w-[490px] flex items-end">
            <img
              src="/images/tc page.avif"
              alt="TrustCore Landing"
              className="w-full h-auto object-contain object-bottom"
              width="490"
              height="300"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
