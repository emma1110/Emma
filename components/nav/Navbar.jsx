"use client";

import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import logoData from "../hero/logo.json";
import Link from "next/link";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinksRef = useRef(null);
  const pillRef = useRef(null);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  useEffect(() => {
    setIsMounted(true);
    const activeTheme = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(activeTheme);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent page scroll when mobile menu is active
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const navLinks = navLinksRef.current;
    const pill = pillRef.current;
    if (!navLinks || !pill) return;

    const links = Array.from(navLinks.querySelectorAll(".nav-link-item"));
    if (links.length === 0) return;
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
        <nav className="flex w-full shrink-0 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div 
              className="flex items-center shrink-0 select-none relative w-[80px] h-[40px] cursor-pointer"
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
          </Link>

          {/* Links — center black pill */}
          <div
            ref={navLinksRef}
            className="navbar-links-container hidden md:flex shrink-0 font-medium"
          >
            <span ref={pillRef} className="nav-pill" />
            <Link href="/" className="nav-link-item">Home</Link>
            <Link href="/#project" className="nav-link-item">Project</Link>
            <Link href="/#about" className="nav-link-item">About</Link>
            <Link href="/#contact" className="nav-link-item">Contact</Link>
          </div>

          {/* Right: Theme Toggle & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 flex-shrink-0 z-50">
            {/* Sliding Toggle Capsule for Desktop */}
            <button 
              className="toggle hidden md:flex" 
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

            {/* Simple Theme Toggle Icon for Mobile */}
            <button 
              className="flex md:hidden items-center justify-center w-9 h-9 rounded-full text-[var(--color-text-inverse)] hover:bg-[var(--card-bg)] transition-colors cursor-pointer"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 1 0 20.354 15.354Z"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            {/* Burger Menu Button on Mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex md:hidden flex-col gap-[5px] justify-center items-center w-9 h-9 rounded-full border border-[var(--footer-border)] hover:bg-[var(--card-bg)] transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <span className={`w-4 h-[1.5px] bg-[var(--color-text-inverse)] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`w-4 h-[1.5px] bg-[var(--color-text-inverse)] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-4 h-[1.5px] bg-[var(--color-text-inverse)] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 top-0 h-screen bg-[var(--bg-color)] z-40 flex flex-col pt-24 px-6 gap-6 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        <div className="flex flex-col gap-6 text-xl font-medium pt-8">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-[var(--color-text-inverse)] py-2 border-b border-[var(--footer-border)]">Home</Link>
          <Link href="/#project" onClick={() => setMenuOpen(false)} className="text-[var(--color-text-inverse)] py-2 border-b border-[var(--footer-border)]">Project</Link>
          <Link href="/#about" onClick={() => setMenuOpen(false)} className="text-[var(--color-text-inverse)] py-2 border-b border-[var(--footer-border)]">About</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)} className="text-[var(--color-text-inverse)] py-2 border-b border-[var(--footer-border)]">Contact</Link>
        </div>
      </div>
    </div>
  );
}
