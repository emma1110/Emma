import React from "react";
import Link from "next/link";

export default function TrustCoreCard() {
  return (
    <Link href="/trustcore" className="project-card-link block w-full">
    <div className="motion-card relative w-full overflow-hidden rounded-[24px] sm:rounded-[32px] bg-gradient-to-b from-[#1446E4] to-[#4FBAF7] cursor-pointer flex flex-col items-center min-h-[520px] sm:min-h-[560px] lg:h-[576px]">
      
      {/* Top Row: Logo & CASE STUDY */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-[20px] py-5 sm:py-[24px] z-20">
        <div className="bg-white flex items-center justify-center p-[10px] sm:p-[12px] rounded-[14px] sm:rounded-[16px] shadow-sm w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] shrink-0">
          <img src="/images/tc.svg" alt="TrustCore" className="w-full h-full object-contain" width="64" height="64" />
        </div>
        <p className="type-label-lg text-white uppercase opacity-90">
          CASE STUDY
        </p>
      </div>

      {/* Centered Text Content */}
      <div className="relative z-10 flex w-full flex-col items-center text-center px-4 sm:px-[20px] pt-[118px] sm:pt-[132px]">
        <h2 className="mx-auto max-w-[1100px] text-center type-heading-h3 text-white md:whitespace-nowrap">
          Making self-custody simpler for everyday crypto users
        </h2>
        
        <div className="flex flex-wrap gap-[12px] items-center justify-center mt-[16px]">
          {["Fintech", "Mobile App", "Wallet UX"].map((tag) => (
            <span
              key={tag}
              className="type-label-lg bg-[rgba(255,255,255,0.15)] text-white px-[16px] py-[6px] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Mockup follows the text block with the 24px gap from the design. */}
      <div className="relative mt-[24px] shrink-0 w-[480px] sm:w-[560px] lg:w-[800px] flex justify-center pointer-events-none">
        <img
          src="/images/trustcore.avif"
          alt="TrustCore App"
          className="w-full h-auto object-contain object-top"
          width="820"
          height="644"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
    </Link>
  );
}
