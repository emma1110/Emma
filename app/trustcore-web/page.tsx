"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/nav/Navbar';

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse bg-[linear-gradient(110deg,var(--card-bg)_0%,rgba(255,255,255,0.18)_45%,var(--card-bg)_90%)] bg-[length:200%_100%]" />
  ),
});

interface ScrollPlayLottieProps {
  src: string;
}

function ScrollPlayLottie({ src }: ScrollPlayLottieProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const lottieRef = React.useRef<any>(null);
  const [animationData, setAnimationData] = useState<any>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [hasError, setHasError] = useState(false);

  React.useEffect(() => {
    if (!shouldLoad || animationData || hasError) return;

    const controller = new AbortController();

    fetch(src, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Unable to load animation: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setAnimationData(data))
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Failed to load Lottie animation:", err);
          setHasError(true);
        }
      });

    return () => controller.abort();
  }, [animationData, hasError, shouldLoad, src]);

  React.useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current || !animationData) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lottieRef.current?.play();
        } else {
          lottieRef.current?.pause();
        }
      },
      {
        threshold: 0.15,
      }
    );

    const currentRef = containerRef.current;
    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [animationData]);

  const preview = (
    <div className="relative flex h-full w-full items-center justify-center bg-[var(--card-bg)]">
      <img
        src="/images/cover.avif"
        alt=""
        className="h-full w-full object-cover opacity-90"
        loading="lazy"
        decoding="async"
      />
      {!hasError && (
        <button
          type="button"
          onClick={() => setShouldLoad(true)}
          className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-xl backdrop-blur-md transition-transform duration-200 hover:scale-105 active:scale-95"
          aria-label="Play animation"
        >
          <svg className="ml-1 h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="lottie-container flex h-full w-full items-center justify-center overflow-hidden">
      {hasError ? preview : animationData ? (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={true}
          autoplay={false}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid meet",
            progressiveLoad: true,
          }}
          style={{ width: "100%", height: "100%" }}
        />
      ) : shouldLoad ? (
        <div className="h-full w-full animate-pulse bg-[linear-gradient(110deg,var(--card-bg)_0%,rgba(255,255,255,0.18)_45%,var(--card-bg)_90%)] bg-[length:200%_100%]" />
      ) : (
        preview
      )}
    </div>
  );
}

export default function TrustCoreWebPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [indicatorOffset, setIndicatorOffset] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(0);

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'final-outcome', label: 'Final Outcome' }
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 110; // offset for sticky navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const sectionIds = sections.map(s => s.id);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activeElement = document.getElementById(`nav-link-${activeSection}`);
    if (activeElement) {
      const elementCenter = activeElement.offsetTop + (activeElement.offsetHeight / 2);
      const markerHeight = 14;
      setIndicatorOffset(elementCenter - (markerHeight / 2));
      setIndicatorHeight(markerHeight);
    }
  }, [activeSection]);

  return (
    <main className="w-full min-h-screen bg-[var(--bg-color)] transition-colors duration-450 flex flex-col items-center relative">
      <Navbar />
      
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-12 sm:py-16 lg:py-[128px] flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Sticky Sidebar */}
        <aside className="w-full lg:w-[180px] shrink-0 sticky top-28 hidden lg:flex flex-col gap-8 pt-4">
          <div className="flex gap-4">
            {/* Sidebar Track Line */}
            <div className="relative w-[1.5px] bg-[var(--footer-border)] rounded-full">
              <div 
                className="absolute left-0 w-[1.5px] bg-[var(--color-text-inverse)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full"
                style={{
                  height: `${indicatorHeight}px`,
                  transform: `translateY(${indicatorOffset}px)`
                }}
              />
            </div>
            <ul className="flex flex-col gap-[6px] relative w-full">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <a
                    id={`nav-link-${sec.id}`}
                    href={`#${sec.id}`}
                    onClick={(e) => handleNavClick(e, sec.id)}
                    className={`text-[12px] font-medium block py-[3px] leading-[18px] tracking-[0.1px] transition-all duration-200 ${
                      activeSection === sec.id
                        ? 'text-[var(--color-text-inverse)] font-bold'
                        : 'text-[var(--text-muted)] opacity-60 hover:opacity-100'
                    }`}
                  >
                    {sec.label}
                  </a>
                </li>
              ))}

              {/* Back to Home Link */}
              <li className="mt-[12px]">
                <a
                  href="/"
                  className="text-[12px] font-medium flex items-center gap-[6px] py-[3px] leading-[18px] tracking-[0.1px] text-[var(--text-muted)] opacity-60 hover:opacity-100 transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  <span>Back to home</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 w-full max-w-[800px] mx-auto lg:mx-0 flex flex-col gap-10 sm:gap-[56px] overflow-hidden">
          
          {/* Overview Section */}
          <section id="overview" className="flex flex-col gap-[32px] scroll-mt-28 w-full">
            
            {/* Header / Titles */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-center gap-2 text-[14px] font-medium tracking-[0.1px] text-[var(--color-text-secondary)] uppercase">
                <span>TRUSTCORE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] opacity-40"></span>
                <span>2026</span>
              </div>
              
              <h1 style={{ fontFamily: 'var(--font-libre-caslon)' }} className="text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.2] font-bold text-[var(--color-text-inverse)] tracking-normal w-full">
                TrustCore Wallet - Landing Page Design
              </h1>
              
              <p className="text-[16px] leading-[24px] text-[var(--color-text-secondary)]">
                Designing a high-converting landing page for a Web3 wallet built around trust, clarity, and ownership.
              </p>
            </div>

            {/* Primary Cover Image Block */}
            <div className="w-full rounded-[20px] sm:rounded-[24px] overflow-hidden relative">
              <img 
                className="w-full h-auto block"
                src="/images/cover.avif"
                alt="TrustCore Web Case Study Cover"
                width="1600"
                height="1000"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full pt-[8px] font-medium text-[16px]">
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-medium tracking-[0.1px] text-[var(--color-text-secondary)] uppercase">ROLE</span>
                <span className="text-[var(--color-text-inverse)]">Product Designer</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-medium tracking-[0.1px] text-[var(--color-text-secondary)] uppercase">TIMELINE</span>
                <span className="text-[var(--color-text-inverse)]">1 month</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-medium tracking-[0.1px] text-[var(--color-text-secondary)] uppercase">TOOLS</span>
                <span className="text-[var(--color-text-inverse)]">Figma, Jitter, Illustrator, Photoshop</span>
              </div>
            </div>

            <hr className="border-[var(--footer-border)] w-full mt-4" />

            {/* Overview Details */}
            <div className="flex flex-col gap-[12px] w-full">
              <span className="text-[14px] font-medium tracking-[0.1px] text-[var(--color-text-secondary)] uppercase">OVERVIEW</span>
              <p className="text-[16px] font-normal leading-[24px] text-[var(--Semantic-Text-Inverse)]">
                Most crypto wallet landing pages fail before onboarding begins. They overwhelm users with technical language, weak trust signals, and unclear product value. Users leave before understanding what the product does or whether it feels safe enough to trust. TrustCore Wallet needed a landing page that could simplify complex ownership models while positioning the product as secure, premium, and beginner-friendly. The goal was simple: Build trust before asking for conversion.
              </p>
            </div>

            {/* Secondary Lottie Block */}
            <div className="w-full aspect-[1.40625] min-h-[260px] rounded-[20px] sm:rounded-[24px] overflow-hidden border border-[var(--footer-border)] flex items-center justify-center mt-4 bg-[var(--card-bg)]">
              <ScrollPlayLottie src="/images/Scene.json" />
            </div>
            
          </section>

          <hr className="border-[var(--footer-border)] w-full" />

          {/* Final Outcome Section */}
          <section id="final-outcome" className="flex flex-col gap-[24px] w-full mb-12 scroll-mt-28">
            <div className="flex flex-col gap-[8px]">
              <span className="text-[14px] font-medium tracking-[0.1px] text-[var(--color-text-secondary)] uppercase">FINAL OUTCOME</span>
              <p className="text-[16px] font-normal leading-[24px] text-[var(--Semantic-Text-Inverse)]">
                Rather than asking users to learn blockchain before using a wallet, TrustCore introduces blockchain concepts only when they become meaningful. The experience shifts from technology-first to ownership-first, helping users build confidence before complexity.
              </p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
