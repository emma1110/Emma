"use client";

import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import HeroVisual from "./HeroVisual";
import logoData from "./logo.json";

/**
 * Hero
 * ----
 * Tương ứng frame "Hero" (121:243) trong Figma sau khi đã thêm auto layout.
 * Cấu trúc: vertical stack (navbar → row), row = horizontal (content + visual).
 *
 * Toàn bộ spacing/radius/màu lấy từ CSS variables định nghĩa trong tokens.css
 * (đúng tên biến trong file Figma — xem comment ở từng dòng).
 */
export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "" });
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const navLinksRef = useRef(null);
  const pillRef = useRef(null);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

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

  useEffect(() => {
    setIsMounted(true);
    const activeTheme = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(activeTheme);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navLinks = navLinksRef.current;
    const pill = pillRef.current;
    if (!navLinks || !pill) return;

    const links = Array.from(navLinks.querySelectorAll(".nav-link-item"));
    let activeLink = links[0]; // "Home" is active by default

    const movePillTo = (link, instant = false) => {
      const containerRect = navLinks.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();

      const x = linkRect.left - containerRect.left;
      const width = linkRect.width;

      if (instant) {
        pill.style.transition = "none";
      } else {
        pill.style.transition = "";
      }
      pill.style.width = `${width}px`;
      pill.style.transform = `translateX(${x}px)`;
      pill.style.opacity = "1";
    };

    // Set Home as active on mount
    activeLink.classList.add("is-active");
    // Use rAF to ensure layout is ready before reading rect
    requestAnimationFrame(() => {
      movePillTo(activeLink, true);
      // Restore transitions after instant snap
      requestAnimationFrame(() => {
        pill.style.transition = "";
      });
    });

    const handleMouseEnter = (e) => {
      const link = e.currentTarget;
      links.forEach((l) => l.classList.remove("is-active"));
      link.classList.add("is-active");
      movePillTo(link);
    };

    const handleMouseLeave = () => {
      // Return pill to active link instead of hiding
      links.forEach((l) => l.classList.remove("is-active"));
      activeLink.classList.add("is-active");
      movePillTo(activeLink);
    };

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        activeLink = link;
      });
      link.addEventListener("mouseenter", handleMouseEnter);
    });

    navLinks.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      movePillTo(activeLink, true);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
      });
      navLinks.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMounted]);

  return (
    <>
      {/* ══════════════════════════════════════
          STICKY NAVBAR
      ══════════════════════════════════════ */}
      <div
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "var(--navbar-glass-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid var(--navbar-border-scrolled)" : "1px solid transparent",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[80px] py-3">
          <nav
            className="flex w-full shrink-0 items-center justify-between"
          >
            {/* Logo */}
            <div 
              className="flex items-center shrink-0 select-none relative w-[80px] h-[40px]"
              style={{ filter: "var(--logo-filter)", transition: "filter 0.45s ease" }}
            >
              <div className="absolute left-[-18px] top-1/2 -translate-y-1/2 w-[120px] h-[120px] flex items-center justify-center pointer-events-none">
                {isMounted && (
                  <Lottie
                    animationData={logoData}
                    loop={true}
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
              </div>
            </div>

            {/* Links — center black pill */}
            <div
              ref={navLinksRef}
              className="navbar-links-container hidden md:flex shrink-0 font-medium"
            >
              <span ref={pillRef} className="nav-pill" />
              <a href="#" className="nav-link-item">Home</a>
              <a href="#project" className="nav-link-item">Project</a>
              <a href="#about" className="nav-link-item">About</a>
              <a href="#contact" className="nav-link-item">Contact</a>
            </div>

            {/* Right: Theme Toggle only */}
            <div className="flex-shrink-0">
              <button 
                className="toggle" 
                onClick={toggleTheme}
                aria-label="Toggle theme" 
                aria-pressed={theme === "light"}
              >
                <span className="knob">
                  <span className="icon moon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 1 0 20.354 15.354Z"/>
                    </svg>
                  </span>
                  <span className="icon sun">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none"/>
                      <line x1="12" y1="1.5" x2="12" y2="4"/>
                      <line x1="12" y1="20" x2="12" y2="22.5"/>
                      <line x1="4.2" y1="4.2" x2="5.9" y2="5.9"/>
                      <line x1="18.1" y1="18.1" x2="19.8" y2="19.8"/>
                      <line x1="1.5" y1="12" x2="4" y2="12"/>
                      <line x1="20" y1="12" x2="22.5" y2="12"/>
                      <line x1="4.2" y1="19.8" x2="5.9" y2="18.1"/>
                      <line x1="18.1" y1="5.9" x2="19.8" y2="4.2"/>
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* ══════════════════════════════════════
          HERO CONTENT
      ══════════════════════════════════════ */}
      <div
        className="relative flex w-full max-w-[1440px] mx-auto flex-col items-center bg-[var(--bg-color)] gap-[40px] md:gap-[74px] px-4 sm:px-8 md:px-[80px] py-[32px] transition-colors duration-450"
      >

      {/* ---------- Row: Content + Visual ---------- */}
      <div className="flex w-full flex-col lg:flex-row shrink-0 items-center justify-between gap-12 lg:gap-[113px]">
        {/* ---------- Hero Content ---------- */}
        <div className="flex w-full lg:w-[708px] shrink-0 flex-col items-start gap-[24px]">
          {/* Substack for tag, headline, and description */}
          <div className="flex flex-col items-start gap-[12px] w-full">
            {/* Tag pill */}
            <div
              className="flex items-center justify-center rounded-[var(--radius-full)] px-[var(--spacing-5)] py-1 transition-colors duration-450"
              style={{ backgroundColor: "var(--color-surface-elevated)" }}
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
              className="w-full"
              style={{
                color: "var(--color-text-inverse)",
                fontSize: "var(--font-display-xl-size)",
                fontWeight: "var(--font-display-xl-weight)",
                lineHeight: "var(--font-display-xl-line)",
                letterSpacing: "var(--font-display-xl-tracking)"
              }}
            >
              I design <span style={{ fontFamily: "var(--font-libre-caslon)", fontStyle: "italic", color: "var(--headline-accent)", fontWeight: 600 }}>products</span> that <br className="hidden sm:inline" />
              turn complexity into <span style={{ fontFamily: "var(--font-libre-caslon)", fontStyle: "italic", color: "var(--headline-accent)", fontWeight: 600 }}>clarity.</span>
            </h1>

            {/* Description */}
            <p
              className="w-full font-medium text-lg lg:text-[20px] leading-relaxed lg:leading-[30px]"
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              Senior Product Designer with 8+ years of experience
              <br />
              turning complex systems into intuitive products.
            </p>
          </div>

          {/* Copy My Email Button */}
          <button
            onClick={handleCopyEmail}
            className="copy-email-button"
            style={{ fontSize: "16px", gap: "8px" }}
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
        <div className="w-full lg:w-[428px] flex justify-center lg:justify-end scale-75 sm:scale-90 md:scale-100 origin-center lg:origin-right my-[-60px] sm:my-0 shrink-0">
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
  </>
  );
}
