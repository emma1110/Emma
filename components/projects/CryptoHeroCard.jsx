import React from "react";

export default function CryptoHeroCard() {
  return (
    <div className="motion-card relative w-full overflow-hidden rounded-[24px] bg-[#171717] cursor-pointer flex flex-col justify-between pt-[96px] sm:pt-[110px] min-h-[500px] sm:min-h-[540px] lg:h-[568px]" data-reveal data-tilt style={{ "--reveal-delay": "140ms" }}>
      {/* Logo · CASE STUDY */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-[20px] py-5 sm:py-[24px] z-10">
        <div className="bg-[rgba(255,255,255,0.9)] flex items-center justify-center p-[10px] sm:p-[12px] rounded-[14px] sm:rounded-[16px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] w-[56px] h-[56px] sm:w-[62px] sm:h-[62px] shrink-0">
          <img src="/images/cryptohero.svg" alt="CryptoHero" className="w-full h-full object-contain" width="62" height="62" />
        </div>
        <p className="font-semibold text-[14px] sm:text-[18px] leading-[22px] sm:leading-[26px] text-white">
          CASE STUDY
        </p>
      </div>

      {/* Title + badges */}
      <div className="flex flex-col gap-[16px] z-10 px-4 sm:px-[20px]">
        <p className="font-semibold text-[26px] sm:text-[32px] lg:text-[36px] leading-[34px] sm:leading-[40px] lg:leading-[44px] text-white tracking-normal">
          Making automated trading more approachable.
        </p>
        <div className="flex flex-wrap gap-[12px] items-center">
          {["Landing Page", "Fintech"].map((tag) => (
            <span
              key={tag}
              className="bg-[rgba(255,255,255,0.1)] text-white text-[14px] font-medium px-[12px] py-[4px] rounded-full tracking-[0.1px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Mockup */}
      <div className="mt-8 sm:mt-[40px] flex justify-center w-full px-4 lg:px-0">
        <div className="w-full lg:w-[94%] max-w-[490px] h-[240px] sm:h-[280px] lg:h-[300px] overflow-hidden rounded-t-[8px]">
          <img
            src="/images/cryptohero.avif"
            alt="CryptoHero"
            className="w-full h-full object-cover object-top"
            width="490"
            height="300"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}
