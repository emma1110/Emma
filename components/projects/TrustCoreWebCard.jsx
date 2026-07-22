import React from "react";
import Link from "next/link";

export default function TrustCoreWebCard() {
  return (
    <Link href="/trustcore-web" className="project-card-link block w-full" data-reveal style={{ "--reveal-delay": "80ms" }}>
      <div 
        className="motion-card relative flex h-[414px] w-full cursor-pointer flex-col overflow-hidden rounded-[24px] pt-[96px] sm:h-[550px] sm:pt-[110px] lg:h-[576px] lg:justify-between"
        style={{ background: "linear-gradient(180deg, #3FB0BC 0%, #43A5BC 57.32%, #60A4D0 100%)" }}
        data-tilt
      >
        {/* Logo · CASE STUDY */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-[20px] py-5 sm:py-[24px] z-10">
          <div className="flex min-w-0 items-center gap-3">
            <div className="bg-[rgba(255,255,255,0.9)] flex items-center justify-center p-[10px] sm:p-[12px] rounded-[14px] sm:rounded-[16px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] w-[56px] h-[56px] sm:w-[62px] sm:h-[62px] shrink-0">
              <img src="/images/tc.svg" alt="TrustCore" className="w-full h-full object-contain" width="62" height="62" />
            </div>
            <p className="type-label-lg whitespace-nowrap uppercase text-[#c3e9fb]">Trustcore Web</p>
          </div>
          <p className="type-label-lg uppercase text-[#c3e9fb]">
            CASE STUDY
          </p>
        </div>

        {/* Title + badges */}
        <div className="flex flex-col gap-[12px] z-10 px-4 sm:gap-[16px] sm:px-[20px] lg:gap-[12px]">
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
        <div className="mt-[16px] flex min-h-0 w-full flex-1 items-end justify-center px-4 sm:mt-[24px] sm:px-[20px] lg:mt-[40px] lg:px-0">
          <div className="flex h-full min-h-0 w-full items-end overflow-hidden lg:w-[94%]">
            <img
              src="/images/tc-page-square.webp"
              alt="TrustCore Landing"
              className="block h-full min-h-0 w-full object-contain object-bottom"
              width="1400"
              height="858"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
