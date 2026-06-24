import React from "react";

export default function CryptoHeroCard() {
  return (
    <div className="relative w-full overflow-hidden rounded-[24px] bg-[#171717] transition-all duration-500 ease-out hover:scale-[1.005] cursor-pointer flex flex-col justify-between pt-[110px] h-auto md:h-[568px]">
      {/* Logo · CASE STUDY */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-[20px] py-[24px] z-10">
        <div className="bg-[rgba(255,255,255,0.9)] flex items-center justify-center p-[12px] rounded-[16px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] w-[62px] h-[62px] shrink-0">
          <img src="/images/cryptohero.svg" alt="CryptoHero" className="w-full h-full object-contain" />
        </div>
        <p className="font-semibold text-[18px] leading-[26px] text-white">
          CASE STUDY
        </p>
      </div>

      {/* Title + badges */}
      <div className="flex flex-col gap-[16px] z-10 px-[20px]">
        <p className="font-semibold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] text-white tracking-[-0.8px]">
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
      <div className="mt-[40px] flex justify-center w-full px-[16px] md:px-0">
        <div className="w-[100%] md:w-[94%] max-w-[490px] h-[250px] md:h-[300px] overflow-hidden rounded-t-[8px]">
          <img
            src="/images/cryptohero.avif"
            alt="CryptoHero"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
