"use client";

import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/nav/Navbar';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'final-outcome', label: 'Final Outcome' }
];

export default function TrustCoreWebPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [indicatorOffset, setIndicatorOffset] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);

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
    let scrollTimeout: any = null;
    const sectionIds = SECTIONS.map(s => s.id);
    
    const handleScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = requestAnimationFrame(() => {
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
          scrollTimeout = null;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
    };
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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

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
              {SECTIONS.map((sec) => (
                <li key={sec.id}>
                  <a
                    id={`nav-link-${sec.id}`}
                    href={`#${sec.id}`}
                    onClick={(e) => handleNavClick(e, sec.id)}
                    className={`type-caption block py-[3px] transition-all duration-200 ${
                      activeSection === sec.id
                        ? 'text-[var(--color-text-inverse)] font-bold'
                        : 'text-[var(--text-muted)] opacity-60 hover:opacity-100'
                    }`}
                  >
                    {sec.label}
                  </a>
                </li>
              ))}

              {/* Next Project Link */}
              <li className="mt-[12px]">
                <a
                  href="/bitcore"
                  className="type-caption flex items-center gap-[6px] py-[3px] text-[var(--text-muted)] opacity-60 hover:opacity-100 transition-all duration-200"
                >
                  <span>Next Project</span>
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
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
            <div className="flex flex-col gap-[16px]" data-entrance style={{ "--entrance-delay": "80ms" } as React.CSSProperties}>
              <div className="flex items-center gap-2 type-label-lg text-[var(--color-text-secondary)] uppercase">
                <span>TRUSTCORE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] opacity-40"></span>
                <span>2026</span>
              </div>
              
              <h1 className="type-heading-h1 text-[var(--color-text-inverse)] w-full">
                TrustCore Wallet - Landing Page Design
              </h1>
              
              <p className="type-body-medium text-[var(--color-text-secondary)]">
                Designing a high-converting landing page for a Web3 wallet built around trust, clarity, and ownership.
              </p>
            </div>

            {/* Primary Cover Image */}
            <div className="w-full rounded-[20px] sm:rounded-[24px] overflow-hidden" data-entrance style={{ "--entrance-delay": "220ms" } as React.CSSProperties}>
              <img
                className="w-full h-auto block"
                src="/images/tchero.avif"
                alt="TrustCore Web Case Study Cover"
                width="1600"
                height="920"
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full pt-[8px] type-body-medium" data-reveal>
              <div className="flex flex-col gap-1">
                <span className="type-label-lg text-[var(--color-text-secondary)] uppercase">ROLE</span>
                <span className="text-[var(--color-text-inverse)]">Product Designer</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="type-label-lg text-[var(--color-text-secondary)] uppercase">TIMELINE</span>
                <span className="text-[var(--color-text-inverse)]">1 month</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="type-label-lg text-[var(--color-text-secondary)] uppercase">TOOLS</span>
                <span className="text-[var(--color-text-inverse)]">Figma, Jitter, Illustrator, Photoshop</span>
              </div>
            </div>

            <hr className="border-[var(--footer-border)] w-full mt-4" />

            {/* Overview Details */}
            <div className="flex flex-col gap-[12px] w-full" data-reveal>
              <span className="type-label-lg mb-[4px] text-[var(--color-text-secondary)] uppercase">OVERVIEW</span>
              <ul className="list-disc pl-5 type-body text-[var(--Semantic-Text-Inverse)] flex flex-col gap-2">
                <li>Most crypto wallet landing pages fail before onboarding begins.</li>
                <li>They overwhelm users with technical language, weak trust signals, and unclear product value. Users leave before understanding what the product does or whether it feels safe enough to trust.</li>
                <li>TrustCore Wallet needed a landing page that could simplify complex ownership models while positioning the product as secure, premium, and beginner-friendly.</li>
                <li>The goal was simple:</li>
                <li>Build trust before asking for conversion.</li>
              </ul>
            </div>

            {/* Secondary Video Block */}
            <div 
              className="w-full rounded-[20px] sm:rounded-[24px] overflow-hidden mt-4 border"
              style={{ borderColor: "var(--color-border-default)" }}
              data-reveal
            >
              <video
                ref={videoRef}
                className="w-full h-auto block [transform:translate3d(0,0,0)] [backface-visibility:hidden] will-change-transform"
                src="/images/tclanding.webm"
                poster="/images/cover.avif"
                muted
                playsInline
                preload="none"
              />
            </div>

            <hr className="border-[var(--footer-border)] w-full" />

            {/* Strategy Details */}
            <div className="flex flex-col gap-[12px] w-full" data-reveal>
              <span className="type-label-lg mb-[4px] text-[var(--color-text-secondary)] uppercase">STRATEGY</span>
              <p className="type-body text-[var(--Semantic-Text-Inverse)]">
                The experience was designed around one principle:<br />
                <strong className="text-[var(--color-text-inverse)]">Users convert when they feel safe.</strong>
              </p>
              <p className="type-body text-[var(--color-text-secondary)]">
                Instead of leading with features, the landing page focused on progressive confidence-building through clear messaging, product understanding, security validation, and strong conversion flow.
              </p>
              <div className="flex flex-col gap-[8px]">
                <span className="type-label-lg mb-[8px] text-[var(--color-text-secondary)] uppercase">THE STRUCTURE FOLLOWED:</span>
                <div className="flex flex-wrap items-center gap-2 type-body-sm text-[var(--color-text-inverse)] bg-[var(--card-bg)] px-4 py-3 rounded-[12px] w-fit border border-[var(--footer-border)]">
                  <span>Value Proposition</span>
                  <span className="text-[var(--color-text-secondary)]">→</span>
                  <span>Trust</span>
                  <span className="text-[var(--color-text-secondary)]">→</span>
                  <span>Security</span>
                  <span className="text-[var(--color-text-secondary)]">→</span>
                  <span>Action</span>
                </div>
              </div>
              <p className="type-body text-[var(--color-text-secondary)] mt-1">
                Every section was designed to reduce hesitation before wallet creation.
              </p>
              
              {/* Strategy Mockups from Figma */}
              <div className="w-full flex flex-row gap-4 sm:gap-6 items-stretch mt-6">
                <div 
                  className="overflow-hidden rounded-[12px] border flex-1 flex flex-col"
                  style={{ borderColor: "var(--color-border-default)" }}
                >
                  <img
                    src="/images/Mini Apps.avif"
                    alt="Mini Apps Mockup"
                    className="w-full h-auto block flex-1 object-cover object-top"
                    width="2880"
                    height="8946"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div 
                  className="overflow-hidden rounded-[12px] border flex-1 flex flex-col"
                  style={{ borderColor: "var(--color-border-default)" }}
                >
                  <img
                    src="/images/Buy Crypto.avif"
                    alt="Buy Crypto Mockup"
                    className="w-full h-auto block flex-1 object-cover object-top"
                    width="2880"
                    height="8406"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

          </section>

          <hr className="border-[var(--footer-border)] w-full" />

          {/* Final Outcome Section */}
          <section id="final-outcome" className="flex flex-col gap-[24px] w-full mb-12 scroll-mt-28" data-reveal>
            <div className="flex flex-col gap-[8px]">
              <span className="type-label-lg mb-[8px] text-[var(--color-text-secondary)] uppercase">FINAL OUTCOME</span>
              <p className="type-body text-[var(--Semantic-Text-Inverse)]">
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
