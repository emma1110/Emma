"use client";

import React from "react";
import { motion } from "framer-motion";

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
      className="w-full flex flex-col items-center bg-[var(--bg-color)] transition-colors duration-450"
      style={{ 
        paddingBlock: "128px", 
        paddingInline: "var(--spacing-8, 32px)" 
      }}
    >
      <div className="flex w-full max-w-[1440px] flex-col items-center gap-[64px] px-4 sm:px-8">
        
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center gap-[12px] max-w-[800px] text-center">
          <h2 
            className="w-full font-bold"
            style={{ 
              color: "var(--color-text-inverse, black)",
              fontSize: "var(--font-display-xl-size)",
              fontWeight: "var(--font-display-xl-weight)",
              lineHeight: "var(--font-display-xl-line)",
              letterSpacing: "var(--font-display-xl-tracking)"
            }}
          >
            How I Use AI
          </h2>
          <p 
            className="font-medium text-lg sm:text-[20px] whitespace-normal md:whitespace-nowrap"
            style={{ 
              color: "var(--color-text-secondary, #525252)", 
              lineHeight: "var(--font-body-xl-medium-line, 30px)",
              maxWidth: "100%"
            }}
          >
            AI helps me spend less time on repetitive work and more time solving meaningful problems.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1280px]">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col gap-6 items-start p-6 rounded-[24px] transition-all duration-450 w-full"
              style={{ backgroundColor: "var(--color-surface-elevated)" }}
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
                />
              </div>

              {/* Text Block */}
              <div className="flex flex-col gap-3 items-start w-full text-left">
                <h3 
                  className="font-semibold text-[var(--color-text-inverse)] text-[22px] tracking-[-0.2px]"
                  style={{ lineHeight: "30px" }}
                >
                  {card.title}
                </h3>
                <p 
                  className="font-medium text-[15px]"
                  style={{ 
                    color: "var(--color-text-secondary, #525252)",
                    lineHeight: "22px" 
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
