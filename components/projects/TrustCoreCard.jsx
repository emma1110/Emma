import React from "react";
import Link from "next/link";

export default function TrustCoreCard() {
  return (
    <Link href="/trustcore" className="block w-full">
    <div className="relative w-full overflow-hidden rounded-[24px] sm:rounded-[32px] bg-gradient-to-b from-[#1446E4] to-[#4FBAF7] transition-all duration-500 ease-out hover:scale-[1.005] cursor-pointer flex flex-col items-center min-h-[520px] sm:min-h-[560px] lg:h-[576px]">
      
      {/* Top Row: Logo & CASE STUDY */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-[20px] py-5 sm:py-[24px] z-20">
        <div className="bg-white flex items-center justify-center p-[10px] sm:p-[12px] rounded-[14px] sm:rounded-[16px] shadow-sm w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] shrink-0">
          <img src="/images/tc.svg" alt="TrustCore" className="w-full h-full object-contain" />
        </div>
        <p className="font-semibold text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-white tracking-wide uppercase opacity-90">
          CASE STUDY
        </p>
      </div>

      {/* Centered Text Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-[20px] pt-[120px] sm:pt-[136px] w-full">
        <h3 className="font-semibold text-[26px] sm:text-[32px] lg:text-[36px] leading-[34px] sm:leading-[40px] lg:leading-[44px] text-white tracking-normal whitespace-normal lg:whitespace-nowrap max-w-[760px]">
          Making self-custody simpler for everyday crypto users
        </h3>
        
        <div className="flex flex-wrap gap-[12px] items-center justify-center mt-[24px]">
          {["Fintech", "Mobile App", "Wallet UX"].map((tag) => (
            <span
              key={tag}
              className="bg-[rgba(255,255,255,0.15)] text-white text-[14px] md:text-[15px] font-medium px-[16px] py-[6px] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Center Bottom Image (Absolutely positioned to match exact cropping) */}
      <div className="absolute top-[300px] sm:top-[284px] lg:top-[270px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[720px] lg:w-[820px] flex justify-center pointer-events-none">
        <img
          src="/images/trustcore.avif"
          alt="TrustCore App"
          className="w-full h-auto object-contain object-top"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
    </Link>
  );
}
