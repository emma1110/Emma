"use client";

import React from "react";

export default function HowIUseAI() {
  const cards = [
    {
      title: "ChatGPT for Product Thinking",
      desc: "Research, UX writing, and exploring product ideas.",
      src: "/images/chat gpt.svg",
      invert: true
    },
    {
      title: "Claude for Deep Research",
      desc: "Research synthesis and competitive analysis.",
      src: "/images/claude.svg",
      invert: false
    },
    {
      title: "Google AI Studio for Internal Tools",
      desc: "Building Figma plugins and workflow automations.",
      src: "/images/googleAi.svg",
      invert: true
    },
    {
      title: "Antigravity for Design-to-Code",
      desc: "Turning concepts into prototypes and working code.",
      src: "/images/antigravity.svg",
      invert: false
    }
  ];

  return (
    <section 
      id="about"
      className="w-full flex flex-col items-center bg-[var(--bg-color)] transition-colors duration-450"
      style={{ 
        paddingBlock: "clamp(64px, 10vw, 128px)", 
        paddingInline: "clamp(16px, 4vw, 32px)" 
      }}
    >
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-10 sm:gap-[64px] px-0 sm:px-8">
        
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center gap-[12px] max-w-[1200px] text-center" data-reveal>
          <h2 
            className="type-display-md w-full"
            style={{ 
              color: "var(--color-text-inverse, black)"
            }}
          >
            How I Use AI
          </h2>
          <p 
            className="type-body-lg-medium whitespace-normal lg:whitespace-nowrap"
            style={{ 
              color: "var(--color-text-secondary, #525252)", 
              maxWidth: "100%"
            }}
          >
            AI helps me spend less time on repetitive work and more time solving meaningful problems.
          </p>
        </div>

        {/* Cards Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1280px]"
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              data-reveal
              className="flex flex-col gap-5 sm:gap-6 items-start p-5 sm:p-6 rounded-[20px] sm:rounded-[24px] w-full"
              style={{ 
                backgroundColor: "var(--color-surface-elevated)",
                "--reveal-delay": `${idx * 80}ms`
              }}
            >
              {/* Icon Container */}
              <div 
                className="overflow-hidden relative rounded-[16px] shrink-0 w-20 h-20 flex items-center justify-center shadow-sm bg-transparent"
              >
                <img 
                  alt={card.title} 
                  className="w-full h-full object-contain rounded-[16px]" 
                  style={{
                    filter: card.invert ? "invert(1)" : "none"
                  }}
                  src={card.src} 
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Text Block */}
              <div className="flex flex-col gap-3 items-start w-full text-left">
                <h3 
                  className="text-[var(--color-text-inverse)] type-heading-h6"
                >
                  {card.title}
                </h3>
                <p 
                  className="type-body-sm-medium"
                  style={{ 
                    color: "var(--color-text-secondary, #525252)"
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
