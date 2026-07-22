"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

function MoonIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 1 0 20.354 15.354Z" />
    </svg>
  );
}

function SunIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none" />
      <line x1="12" y1="1.5" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22.5" />
      <line x1="4.2" y1="4.2" x2="5.9" y2="5.9" />
      <line x1="18.1" y1="18.1" x2="19.8" y2="19.8" />
      <line x1="1.5" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22.5" y2="12" />
      <line x1="4.2" y1="19.8" x2="5.9" y2="18.1" />
      <line x1="18.1" y1="5.9" x2="19.8" y2="4.2" />
    </svg>
  );
}

function MenuIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function XIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinksRef = useRef(null);
  const pillRef = useRef(null);
  const themeTransitionTimerRef = useRef(null);

  const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "light" ? "dark" : "light";

    if (themeTransitionTimerRef.current) {
      clearTimeout(themeTransitionTimerRef.current);
    }

    root.classList.remove("theme-transitioning");
    void root.offsetWidth;
    root.classList.add("theme-transitioning");
    void root.offsetWidth;
    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);

    themeTransitionTimerRef.current = setTimeout(() => {
      root.classList.remove("theme-transitioning");
      themeTransitionTimerRef.current = null;
    }, 280);
  };

  useEffect(() => () => {
    if (themeTransitionTimerRef.current) {
      clearTimeout(themeTransitionTimerRef.current);
    }
    document.documentElement.classList.remove("theme-transitioning");
  }, []);

  useEffect(() => {
    const activeTheme = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(activeTheme);
    
    let scrollTimeout = null;
    const handleScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrolled(currentScrollY > 10);
          scrollTimeout = null;
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
    };
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

  useLayoutEffect(() => {
    const navLinks = navLinksRef.current;
    const pill = pillRef.current;
    if (!navLinks || !pill) return;

    const links = Array.from(navLinks.querySelectorAll(".nav-link-item"));
    if (links.length === 0) return;
    let activeLink = links[0];

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
      pill.style.transform = `translate3d(${x}px, 0, 0)`;
      pill.style.opacity = "1";
    };

    const syncActiveLink = (instant = true) => {
      const hash = window.location.hash;
      const activeHref = pathname === "/about"
        ? "/about"
        : pathname === "/" && (hash === "#project" || hash === "#contact")
          ? `/${hash}`
          : "/";

      activeLink = links.find((link) => link.getAttribute("href") === activeHref) || links[0];
      links.forEach((link) => link.classList.toggle("is-active", link === activeLink));
      movePillTo(activeLink, instant);
    };

    // useLayoutEffect positions the indicator before the browser paints the route.
    syncActiveLink(true);
    const transitionFrame = requestAnimationFrame(() => {
      pill.style.transition = "";
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

    const handleClick = (event) => {
      activeLink = event.currentTarget;
      links.forEach((link) => link.classList.toggle("is-active", link === activeLink));
      movePillTo(activeLink);
    };

    links.forEach((link) => {
      link.addEventListener("click", handleClick);
      link.addEventListener("mouseenter", handleMouseEnter);
    });

    navLinks.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("hashchange", syncActiveLink);

    let resizeTimeout = null;
    const handleResize = () => {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(() => {
          movePillTo(activeLink, true);
          resizeTimeout = null;
        }, 100);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
        link.removeEventListener("mouseenter", handleMouseEnter);
      });
      navLinks.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("hashchange", syncActiveLink);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(transitionFrame);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, [pathname]);

  return (
    <div
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "var(--navbar-glass-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid var(--navbar-border-scrolled)" : "1px solid transparent",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px] py-3">
        <nav className="flex w-full shrink-0 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Emma Home"
            className="group flex shrink-0 items-center"
          >
            <img
              src="/images/emma-logo.svg"
              alt=""
              width="67"
              height="54"
              className="h-[44px] w-auto origin-center select-none transition-[filter,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[7deg] group-hover:scale-[1.05] group-active:rotate-[3deg] group-active:scale-[0.98] motion-reduce:transform-none sm:h-[54px]"
              style={{ filter: "var(--logo-filter)" }}
              draggable="false"
            />
          </Link>

          {/* Links: center black pill */}
          <div
            ref={navLinksRef}
            className="navbar-links-container hidden lg:flex shrink-0"
          >
            <span ref={pillRef} className="nav-pill" />
            <Link href="/" className="nav-link-item">Home</Link>
            <Link href="/#project" className="nav-link-item">Project</Link>
            <Link href="/about" className="nav-link-item">About</Link>
            <a href="/Emma-Nguyen-CV.pdf" target="_blank" rel="noopener noreferrer" className="nav-link-item">Resume</a>
          </div>

          {/* Right: Theme Toggle & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 flex-shrink-0 z-50">
            {/* Sliding Toggle Capsule for Desktop */}
            <Button
              className="toggle hidden lg:flex"
              onClick={toggleTheme}
              aria-label="Toggle theme" 
              aria-pressed={theme === "light"}
              magnetic
            >
              <span className="knob">
                <span className="icon moon">
                  <MoonIcon className="w-full h-full" />
                </span>
                <span className="icon sun">
                  <SunIcon className="w-full h-full" />
                </span>
              </span>
            </Button>

            {/* Theme Toggle Icon for Phone and Tablet */}
            <Button
              className="flex lg:hidden items-center justify-center w-12 h-12 rounded-full text-[var(--color-text-inverse)] hover:bg-[var(--card-bg)] cursor-pointer"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              magnetic
            >
              {theme === "light" ? <MoonIcon className="h-7 w-7" /> : <SunIcon className="h-7 w-7" />}
            </Button>

            {/* Burger Menu Button on Phone and Tablet */}
            <Button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex lg:hidden justify-center items-center w-12 h-12 rounded-full text-[var(--color-text-inverse)] hover:bg-[var(--card-bg)] cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              magnetic
            >
              {menuOpen ? <XIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 top-0 h-screen bg-[var(--bg-color)] z-40 flex flex-col pt-24 px-6 sm:px-8 gap-6 transition-all duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        <div className="type-heading-h6 flex flex-col gap-6 pt-8">
          <Link href="/" onClick={() => setMenuOpen(false)} className="soft-link py-2 text-[var(--color-text-inverse)]">Home</Link>
          <Link href="/#project" onClick={() => setMenuOpen(false)} className="soft-link py-2 text-[var(--color-text-inverse)]">Project</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="soft-link py-2 text-[var(--color-text-inverse)]">About</Link>
          <a href="/Emma-Nguyen-CV.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="soft-link py-2 text-[var(--color-text-inverse)]">Resume</a>
        </div>
      </div>
    </div>
  );
}
