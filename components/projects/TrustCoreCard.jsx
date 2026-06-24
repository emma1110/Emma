import React from "react";
import Link from "next/link";

export default function TrustCoreCard() {
  return (
    <Link href="/trustcore" className="block w-full">
    <div className="relative w-full overflow-hidden rounded-[32px] bg-gradient-to-b from-[#1446E4] to-[#4FBAF7] transition-all duration-500 ease-out hover:scale-[1.005] cursor-pointer flex flex-col items-center h-auto md:h-[576px]">
      
      {/* Top Row: Logo & CASE STUDY */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-[20px] py-[24px] z-20">
        <div className="bg-white flex items-center justify-center p-[12px] rounded-[16px] shadow-sm w-[64px] h-[64px] shrink-0">
          <img src="/images/tc.svg" alt="TrustCore" className="w-full h-full object-contain" />
        </div>
        <p className="font-semibold text-[16px] leading-[24px] text-white tracking-wide uppercase opacity-90">
          CASE STUDY
        </p>
      </div>

      {/* Centered Text Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-[20px] pt-[136px] w-full">
        <h3 className="font-semibold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] text-white tracking-[-0.8px] whitespace-normal md:whitespace-nowrap">
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
      <div className="absolute top-[260px] md:top-[270px] left-1/2 -translate-x-1/2 w-[700px] md:w-[820px] flex justify-center pointer-events-none">
        <img
          src="/images/trustcore.avif"
          alt="TrustCore App"
          className="w-full h-auto object-contain object-top"
        />
      </div>
    </div>
    </Link>
  );
}
