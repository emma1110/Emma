"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


/**
 * Hero
 * ----
 * Tương ứng frame "Hero" (121:243) trong Figma sau khi đã thêm auto layout.
 * Spacing/radius/màu lấy từ CSS variables định nghĩa trong tokens.css
 */
export default function Hero() {
  const [toast, setToast] = useState({ visible: false, message: "" });

  const words = [
    "Humanize",
    "Simplify",
    "Clarify",
    "Transform",
    "Elevate",
    "Shape",
    "Refine",
    "Reimagine",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      // Typing: add one character after short delay
      if (displayText !== currentWord) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, 100);
      } else {
        // Fully typed: pause for 2 seconds, then transition to delete mode
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting: remove one character after short delay
      if (displayText !== "") {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        }, 50);
      } else {
        // Fully deleted: pause for 400ms to clear ghost characters, then swap to the next word
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 400);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

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
      className="relative flex w-full max-w-[1440px] mx-auto flex-col items-center bg-[var(--bg-color)] gap-[40px] lg:gap-[48px] px-4 sm:px-8 lg:px-[80px] py-16 sm:py-24 lg:py-[74px] transition-colors duration-450 overflow-hidden"
    >
      {/* ---------- Centered Hero Layout ---------- */}
      <div className="flex w-full max-w-[850px] flex-col items-center text-center gap-[32px]">
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
              fontSize: "clamp(18px, 6.5vw, var(--font-display-xl-size))",
              fontWeight: "var(--font-display-xl-weight)",
              lineHeight: "var(--font-display-xl-line)",
              letterSpacing: "var(--font-display-xl-tracking)",
              "--entrance-delay": "150ms"
            }}
          >
            <span className="line-reveal" style={{ "--entrance-delay": "150ms" }}>
              <span className="whitespace-nowrap">I design products</span>
            </span>
            <span className="line-reveal" style={{ "--entrance-delay": "230ms" }}>
              <span className="whitespace-nowrap inline-block">
                that{" "}
                {/* Notion-style Typewriter Pill Container (Hugs content, animated dynamically) */}
                <motion.span 
                  layout
                  className="typewriter-pill relative"
                  transition={{ type: "spring", stiffness: 180, damping: 20 }}
                >
                  {/* Invisible placeholder of the FULL active word to drive container layout width */}
                  <span
                    className="opacity-0 pointer-events-none select-none invisible whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-libre-caslon)",
                      fontStyle: "italic",
                      fontWeight: 600,
                      lineHeight: 1,
                    }}
                  >
                    {words[wordIndex]}
                    {/* Add extra space for the cursor */}
                    <span className="inline-block w-[2px] ml-[2px]" />
                  </span>

                  {/* Absolute positioned typing text centered on top */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="inline-block whitespace-nowrap"
                      style={{
                        fontFamily: "var(--font-libre-caslon)",
                        fontStyle: "italic",
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                    >
                      {displayText}
                      {/* Blinking typewriter cursor */}
                      <span className="animate-pulse bg-white inline-block w-[2px] h-[0.85em] ml-[2px] align-middle" />
                    </span>
                  </span>
                </motion.span>{" "}
                technology.
              </span>
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
          className="copy-email-button mx-auto"
          data-entrance
          data-magnetic
          style={{ fontSize: "16px", "--entrance-delay": "410ms" }}
        >
          Copy My Email
        </button>
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
