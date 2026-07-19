"use client";

import { useState, useEffect } from "react";
import Button from "../ui/Button";

const HERO_WORDS = [
  { text: "Humanize", background: "#ffe2d9", foreground: "#ff5a36" },
  { text: "Simplify", background: "#e3edff", foreground: "#2563eb" },
  { text: "Clarify", background: "#ddfbf7", foreground: "#00a99d" },
  { text: "Transform", background: "#eee6ff", foreground: "#7c3aed" },
  { text: "Elevate", background: "#fff1b8", foreground: "#b86b00" },
  { text: "Shape", background: "#ffe2f0", foreground: "#e83e8c" },
  { text: "Refine", background: "#e8f7e8", foreground: "#22a447" },
  { text: "Reimagine", background: "#e4e8ff", foreground: "#4f46e5" },
];


/**
 * Hero
 * ----
 * Tương ứng frame "Hero" (121:243) trong Figma sau khi đã thêm auto layout.
 * Spacing/radius/màu lấy từ CSS variables định nghĩa trong tokens.css
 */
export default function Hero() {
  const [toast, setToast] = useState({ visible: false, message: "" });

  const [displayText, setDisplayText] = useState("");
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const activeWord = HERO_WORDS[activeWordIndex];

  useEffect(() => {
    let timerId;
    let currentWordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const loop = () => {
      const word = HERO_WORDS[currentWordIndex].text;

      if (!isDeleting) {
        if (charIndex <= word.length) {
          setDisplayText(word.slice(0, charIndex));
          charIndex++;
          timerId = setTimeout(loop, 90); // TYPE_SPEED = 90
        } else {
          isDeleting = true;
          timerId = setTimeout(loop, 1200); // HOLD_TIME = 1200
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
          setDisplayText(word.slice(0, charIndex));
          timerId = setTimeout(loop, 45); // DELETE_SPEED = 45
        } else {
          isDeleting = false;
          currentWordIndex = (currentWordIndex + 1) % HERO_WORDS.length;
          setActiveWordIndex(currentWordIndex);
          timerId = setTimeout(loop, 300); // GAP_TIME = 300
        }
      }
    };

    timerId = setTimeout(loop, 100);

    return () => clearTimeout(timerId);
  }, []);

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
      className="relative flex w-full max-w-[1920px] mx-auto flex-col items-center bg-[var(--bg-color)] gap-[40px] lg:gap-[48px] px-4 sm:px-8 lg:px-[80px] transition-colors duration-450"
      style={{ paddingBlock: "var(--spacing-20)" }}
    >
      {/* ---------- Centered Hero Layout ---------- */}
      <div className="flex w-full max-w-[1760px] flex-col items-center text-center gap-[32px]">
        {/* SVG Sticker Cluster */}
        <div 
          data-entrance
          style={{ "--entrance-delay": "80ms" }}
          className="flex items-center justify-center -space-x-4 select-none cursor-default"
        >
          {/* star.svg (Left) */}
          <div 
            className="w-[68px] h-[68px] sm:w-[80px] sm:h-[80px] sticker-hover-wobble"
            style={{ "--base-rot": "-12deg" }}
          >
            <img
              src="/images/star.svg?v=1"
              alt="Star Sticker"
              className="w-full h-full object-contain pointer-events-none"
              draggable={false}
            />
          </div>

          {/* Layer_1.svg (Center Avatar) */}
          <div 
            className="w-[68px] h-[68px] sm:w-[80px] sm:h-[80px] sticker-hover-wobble z-10"
            style={{ "--base-rot": "0deg" }}
          >
            <img
              src="/images/Layer_1.svg?v=1"
              alt="Avatar Sticker"
              className="w-full h-full object-contain pointer-events-none"
              draggable={false}
            />
          </div>

          {/* Graphic_Element.svg (Right Smiley) */}
          <div 
            className="w-[68px] h-[68px] sm:w-[80px] sm:h-[80px] sticker-hover-wobble"
            style={{ "--base-rot": "12deg" }}
          >
            <img
              src="/images/Graphic_Element.svg?v=1"
              alt="Smiley Sticker"
              className="w-full h-full object-contain pointer-events-none"
              draggable={false}
            />
          </div>
        </div>

        {/* Content Substack */}
        <div className="flex flex-col items-center gap-[24px] w-full">
          {/* Headline */}
          <h1
            data-entrance
            className="w-full text-center"
            style={{
              color: "var(--color-text-inverse)",
              fontSize: "var(--font-hero-size)",
              fontWeight: "var(--font-hero-weight)",
              lineHeight: "var(--font-hero-line)",
              letterSpacing: "var(--font-hero-tracking)",
              "--entrance-delay": "150ms"
            }}
          >
            <span className="line-reveal" style={{ "--entrance-delay": "150ms" }}>
              <span className="whitespace-nowrap">
                I design products<span className="hidden sm:inline"> that</span>
              </span>
            </span>
            <span className="line-reveal" style={{ "--entrance-delay": "230ms" }}>
              <span className="whitespace-nowrap">
                <span className="sm:hidden">that </span>
                <span
                  className="pill"
                  style={{
                    "--hero-pill-bg": activeWord.background,
                    "--hero-pill-fg": activeWord.foreground,
                  }}
                >
                  <span className="dot"></span>
                  <span
                    className="type-text"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontStyle: "normal",
                    }}
                  >
                    {displayText}
                  </span>
                  <span className="cursor">&nbsp;</span>
                </span>
                <span className="hidden sm:inline"> technology.</span>
              </span>
            </span>
            <span className="line-reveal sm:hidden" style={{ "--entrance-delay": "270ms" }}>
              <span className="whitespace-nowrap">technology.</span>
            </span>
          </h1>

          {/* Description */}
          <p
            data-entrance
            className="type-body-lg-medium w-full max-w-[760px] text-balance"
            style={{
              color: "var(--color-text-secondary)",
              "--entrance-delay": "300ms"
            }}
          >
            Senior Product Designer with 8+ years of experience
            <br className="hidden sm:block" />
            {" "}turning complex systems into intuitive products.
          </p>
        </div>

        {/* Copy My Email Button */}
        <div
          className="flex justify-center"
          data-entrance
          style={{ "--entrance-delay": "410ms" }}
        >
          <Button
            onClick={handleCopyEmail}
            className="copy-email-button"
            magnetic
          >
            Copy My Email
          </Button>
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
          <span className="type-label-lg text-neutral-100">Copied!</span>
          <span className="type-caption text-neutral-400">lananhnguyen.arena@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
