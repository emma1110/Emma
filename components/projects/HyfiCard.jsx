import React from "react";
import Link from "next/link";

export default function HyfiCard() {
  return (
    <Link
      href="/hyfi-2024"
      className="project-card-link block w-full"
      data-reveal
      style={{ "--reveal-delay": "140ms" }}
    >
      <div
        className="motion-card relative flex h-[414px] w-full cursor-pointer flex-col overflow-hidden rounded-[24px] bg-[#0b0a0b] pt-[96px] sm:h-[550px] sm:pt-[110px] lg:h-[576px]"
        data-tilt
      >
        <img
          src="/images/hyfi/hyfi-home-card-v2.avif"
          alt="HYFI 2024 event landing page shown on a phone mockup"
          className="absolute -bottom-[180px] left-1/2 h-[420px] w-[625px] max-w-none -translate-x-[58%] object-fill sm:-bottom-[100px] sm:h-[500px] sm:w-[744px] lg:-bottom-[25px] lg:left-0 lg:h-[500px] lg:w-[744px] lg:translate-x-0"
          width="1332"
          height="1000"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-5 sm:px-[20px] sm:py-[24px]">
          <div className="flex h-[56px] w-[132px] items-center sm:h-[62px]">
            <div className="flex h-[16px] w-[110px] items-center gap-[3px]">
              <img
                src="/images/hyfi/hyfi-logo-word.svg"
                alt="HYFI"
                className="h-[16px] w-auto"
                width="53"
                height="16"
              />
              <img
                src="/images/hyfi/hyfi-logo-2024.svg"
                alt="2024"
                className="h-[16px] w-auto"
                width="50"
                height="16"
              />
            </div>
          </div>
          <p className="type-label-lg whitespace-nowrap text-white">CASE STUDY</p>
        </div>

        <div className="z-10 flex flex-col gap-[12px] px-4 sm:gap-[16px] sm:px-[20px] lg:gap-[12px]">
          <p className="type-heading-h3 text-white">
            Connecting brand, web, and event experiences
          </p>
          <div className="flex flex-wrap items-center gap-[12px]">
            {["Landing Page", "Event Design"].map((tag) => (
              <span
                key={tag}
                className="type-label-lg rounded-full bg-[rgba(255,255,255,0.1)] px-[12px] py-[4px] text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pointer-events-none mt-[16px] w-full flex-1 sm:mt-[24px] lg:mt-[40px]" />
      </div>
    </Link>
  );
}
