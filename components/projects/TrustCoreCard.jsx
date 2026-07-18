import React from "react";
import Link from "next/link";

export default function TrustCoreCard() {
  return (
    <Link href="/trustcore" className="project-card-link block w-full">
    <div className="motion-card relative flex h-[414px] w-full cursor-pointer flex-col items-start overflow-hidden rounded-[24px] bg-gradient-to-b from-[#1446E4] to-[#4FBAF7] sm:h-[550px] lg:h-[576px] lg:items-center">
      
      {/* Top Row: Logo & CASE STUDY */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-[20px] py-5 sm:py-[24px] z-20">
        <div className="bg-white flex items-center justify-center p-[10px] sm:p-[12px] rounded-[14px] sm:rounded-[16px] shadow-sm w-[56px] h-[56px] sm:w-[62px] sm:h-[62px] shrink-0">
          <img src="/images/tc.svg" alt="TrustCore" className="w-full h-full object-contain" width="64" height="64" />
        </div>
        <p className="type-label-lg text-white uppercase opacity-90">
          CASE STUDY
        </p>
      </div>

      {/* Centered Text Content */}
      <div className="relative z-10 flex w-full flex-col items-start px-4 pt-[96px] text-left sm:px-[20px] sm:pt-[110px] lg:items-center lg:text-center">
        <h2 className="max-w-[1100px] text-left type-heading-h3 text-white lg:mx-auto lg:text-center lg:whitespace-nowrap">
          Making self-custody simpler for everyday crypto users
        </h2>
        
        <div className="mt-[12px] flex flex-wrap items-center justify-start gap-[12px] sm:mt-[16px] lg:mt-[12px] lg:justify-center">
          {["Fintech", "Mobile App", "Wallet UX"].map((tag) => (
            <span
              key={tag}
              className="type-label-lg rounded-full bg-[rgba(255,255,255,0.15)] px-[12px] py-[4px] text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Mockup follows the text block with the 24px gap from the design. */}
      <div className="pointer-events-none relative mt-[24px] flex w-[640px] shrink-0 self-center justify-center sm:mt-[32px] sm:w-[720px] lg:mt-[40px] lg:w-[800px]">
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
