"use client";

import { useState, useEffect } from "react";
import HeroVisual from "./HeroVisual";

/**
 * Hero
 * ----
 * Tương ứng frame "Hero" (121:243) trong Figma sau khi đã thêm auto layout.
 * Spacing/radius/màu lấy từ CSS variables định nghĩa trong tokens.css
 */
export default function Hero() {
  const [toast, setToast] = useState({ visible: false, message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("lananhnguyen.arena@gmail.com").then(() => {
      setToast({ visible: true, message: "lananhnguyen.arena@gmail.com" });
    }).catch((err) => {
      console.error("Failed to copy email: ", err);
    });
  };

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast({ visible: false, message: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  return (
    <div
      className="relative flex w-full max-w-[1440px] mx-auto flex-col items-center bg-[var(--bg-color)] gap-[40px] lg:gap-[74px] px-4 sm:px-8 lg:px-[80px] py-8 sm:py-12 lg:py-[32px] transition-colors duration-450 overflow-hidden"
    >
      {/* ---------- Row: Content + Visual ---------- */}
      <div className="flex w-full flex-col lg:flex-row shrink-0 items-center justify-between gap-10 sm:gap-12 lg:gap-[113px]">
        {/* ---------- Hero Content ---------- */}
        <div className="flex w-full lg:w-[708px] shrink-0 flex-col items-start gap-[24px]">
          {/* Substack for tag, headline, and description */}
          <div className="flex flex-col items-start gap-[12px] w-full">
            {/* Tag pill */}
            <div
              data-entrance
              className="flex items-center justify-center rounded-[var(--radius-full)] px-[var(--spacing-5)] py-1 transition-colors duration-450"
              style={{ backgroundColor: "var(--color-surface-elevated)", "--entrance-delay": "80ms" }}
            >
              <p
                className="font-medium text-sm leading-[20px]"
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "var(--font-body-sm-medium-size)",
                  fontWeight: "var(--font-body-sm-medium-weight)",
                  lineHeight: "var(--font-body-sm-medium-line)",
                }}
              >
                OPEN TO OPPORTUNITIES
              </p>
            </div>

            {/* Headline */}
            <h1
              data-entrance
              className="w-full max-w-[12ch] sm:max-w-none"
              style={{
                color: "var(--color-text-inverse)",
                fontSize: "var(--font-display-xl-size)",
                fontWeight: "var(--font-display-xl-weight)",
                lineHeight: "var(--font-display-xl-line)",
                letterSpacing: "var(--font-display-xl-tracking)",
                "--entrance-delay": "150ms"
              }}
            >
              <span className="line-reveal" style={{ "--entrance-delay": "150ms" }}>
                <span>I design <span style={{ fontFamily: "var(--font-libre-caslon)", fontStyle: "italic", color: "var(--headline-accent)", fontWeight: 600 }}>products</span> that</span>
              </span>
              <span className="line-reveal" style={{ "--entrance-delay": "230ms" }}>
                <span>turn complexity into <span style={{ fontFamily: "var(--font-libre-caslon)", fontStyle: "italic", color: "var(--headline-accent)", fontWeight: 600 }}>clarity.</span></span>
              </span>
            </h1>

            {/* Description */}
            <p
              data-entrance
              className="w-full font-medium text-lg lg:text-[20px] leading-relaxed lg:leading-[30px]"
              style={{
                color: "var(--color-text-secondary)",
                "--entrance-delay": "300ms"
              }}
            >
              Senior Product Designer with 8+ years of experience
              <br className="hidden sm:block" />
              turning complex systems into intuitive products.
            </p>
          </div>

          {/* Copy My Email Button */}
          <button
            onClick={handleCopyEmail}
            className="copy-email-button"
            data-entrance
            data-magnetic
            style={{ fontSize: "16px", gap: "8px", "--entrance-delay": "410ms" }}
          >
            {/* Copy icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copy My Email
          </button>
        </div>

        {/* ---------- Hero Visual (ảnh người + 2 polaroid tách riêng) ---------- */}
        <div data-entrance className="w-full lg:w-[428px] flex justify-center lg:justify-end scale-[0.68] sm:scale-90 lg:scale-100 origin-center lg:origin-right my-[-92px] sm:my-[-36px] lg:my-0 shrink-0" style={{ "--entrance-delay": "260ms" }}>
          <HeroVisual />
        </div>
      </div>

      {/* Toast Notification */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-neutral-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl transition-all duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          toast.visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-neutral-900 shrink-0">
          <svg className="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-sm text-neutral-100">Copied!</span>
          <span className="text-xs text-neutral-400">lananhnguyen.arena@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
