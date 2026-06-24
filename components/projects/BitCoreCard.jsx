import React from "react";

export default function BitCoreCard() {
  return (
    <div className="relative w-full overflow-hidden rounded-[24px] bg-gradient-to-b from-[#ff5731] to-[#fea213] transition-all duration-500 ease-out hover:scale-[1.005] cursor-pointer flex flex-col md:block h-auto md:h-[576px]">
      {/* Logo · CASE STUDY */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-[20px] py-[24px] z-10">
        <div className="bg-[rgba(255,255,255,0.9)] flex items-center justify-center p-[12px] rounded-[16px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] w-[62px] h-[62px] shrink-0">
          <img src="/images/bitcore.svg" alt="BitCore" className="w-full h-full object-contain" />
        </div>
        <p className="font-semibold text-[18px] leading-[26px] text-white">
          CASE STUDY
        </p>
      </div>

      {/* Title + badges */}
      <div className="relative z-10 flex flex-col gap-[16px] px-[20px] md:px-0 pt-[110px] md:pt-0 md:absolute md:left-[27px] md:top-[217px] w-full md:w-[342px]">
        <p className="font-semibold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] text-white tracking-[-0.8px]">
          Designing a Layer 1 experience anyone can understand
        </p>
        <div className="flex flex-wrap gap-[12px] items-center">
          {["Landing Page", "Layer 1", "Web3"].map((tag) => (
            <span
              key={tag}
              className="bg-[rgba(255,255,255,0.1)] text-white text-[14px] font-medium px-[12px] py-[4px] rounded-full tracking-[0.1px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop Safari mockup — right */}
      <div className="relative z-0 mt-[40px] md:mt-0 md:absolute md:left-[419px] md:top-[98px] md:bottom-0 md:right-0 ml-[20px] md:ml-0 h-[300px] sm:h-[400px] md:h-auto overflow-hidden">
        <img
          src="/images/bitcore.avif"
          alt="BitCore"
          className="w-[150%] max-w-none md:w-full h-full object-contain object-left-top md:object-cover md:object-left-top rounded-tl-[16px]"
        />
      </div>
    </div>
  );
}
