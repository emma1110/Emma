"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/nav/Navbar';

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse rounded-[18px] bg-[linear-gradient(110deg,var(--card-bg)_0%,rgba(255,255,255,0.18)_45%,var(--card-bg)_90%)] bg-[length:200%_100%]" />
  ),
});

// --- Custom Inline SVG Icons ---

function FaceSmileIcon({ className = "size-6" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M12 21a9 9 0 110-18 9 9 0 010 18zM9 10.5h.01M15 10.5h.01" />
    </svg>
  );
}

function PhoneIcon({ className = "size-6" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
    </svg>
  );
}

function ShieldTickIcon({ className = "size-6" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.105-2.597-.309-3.85a11.959 11.959 0 01-8.691-3.136z" />
    </svg>
  );
}

function CheckBadgeIcon({ className = "size-4 text-white" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

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
    if (typeof window === "undefined" || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "160px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

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

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [animationData]);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center">
      {hasError ? (
        <div className="type-label-lg flex h-full w-full items-center justify-center rounded-[18px] bg-[var(--card-bg)] text-[var(--color-text-secondary)]">
          Animation unavailable
        </div>
      ) : animationData ? (
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
      ) : (
        <div className="h-full w-full animate-pulse rounded-[18px] bg-[linear-gradient(110deg,var(--card-bg)_0%,rgba(255,255,255,0.18)_45%,var(--card-bg)_90%)] bg-[length:200%_100%]" />
      )}
    </div>
  );
}

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'The Challenge' },
  { id: 'discovery', label: 'Research' },
  { id: 'strategy', label: 'Key Insight' },
  { id: 'opportunity', label: 'Design Opportunity' },
  { id: 'design-principles', label: 'Design Principles' },
  { id: 'design-execution', label: 'Design Execution' },
  { id: 'final-outcome', label: 'Final Outcome' },
  { id: 'learn-more', label: 'Learn More' }
];

export default function TrustCorePage() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const [activeSection, setActiveSection] = useState('overview');
  const [indicatorOffset, setIndicatorOffset] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

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
          if (isPlaying) video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [isPlaying]);

  return (
    <main className="case-study-theme case-trustcore w-full min-h-screen bg-[var(--bg-color)] transition-colors duration-450 flex flex-col items-center relative">
      <Navbar />
      
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-12 sm:py-16 lg:py-[128px] flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Sticky Sidebar */}
        <aside className="w-full lg:w-[180px] shrink-0 sticky top-28 hidden lg:flex flex-col gap-8 pt-4">
          <div className="flex gap-4">
            {/* Sidebar Track Line */}
            <div className="relative w-[1.5px] bg-[var(--footer-border)] rounded-full">
              <div 
                className="absolute left-0 w-[1.5px] bg-[var(--case-accent)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full"
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
                   href="/trustcore-web"
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
          
          {/* Hero: Label + Heading + Video + Metadata */}
          <section id="overview" className="flex flex-col gap-[24px] scroll-mt-28">
            <div className="flex flex-col gap-[16px]" data-entrance style={{ "--entrance-delay": "80ms" } as React.CSSProperties}>
              <div className="case-study-label flex items-center gap-2 type-label-lg uppercase">
                <span>TRUSTCORE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--case-accent)] opacity-50"></span>
                <span>2026</span>
              </div>
              <h1 className="type-heading-h1 text-[var(--color-text-inverse)] w-full">
                Helping people understand, protect, and pass on their digital assets.
              </h1>
              <div className="type-body-medium text-[var(--color-text-secondary)] flex flex-col gap-1">
                <p className="type-body-medium text-[var(--color-text-inverse)]">People think about ownership. Wallets think about blockchain.</p>
                <p>This project explores what happens when a wallet is designed around people instead.</p>
              </div>
            </div>

            {/* Video Player */}
            <div className="w-full aspect-video sm:aspect-[21/9] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-neutral-900 relative group" data-entrance style={{ "--entrance-delay": "220ms" } as React.CSSProperties}>
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                src="/images/video1.webm"
                poster="/images/trustcore banner.avif"
                muted={isMuted}
                playsInline
                autoPlay
                preload="metadata"
              />
              
              {/* Custom controls overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 sm:p-6">
                <button 
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  data-magnetic
                >
                  {isPlaying ? (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  data-magnetic
                >
                  {isMuted ? (
                    <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V4.5z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Metadata Grid */}
            <div className="case-study-summary grid grid-cols-1 gap-4 rounded-[16px] p-5 type-body-medium sm:grid-cols-2 sm:gap-6 sm:p-6 lg:grid-cols-4" data-reveal>
              <div className="flex flex-col gap-1">
                <span className="case-study-summary-label type-label-lg uppercase">ROLE</span>
                <span className="case-study-summary-value">Product Designer</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="case-study-summary-label type-label-lg uppercase">TIMELINE</span>
                <span className="case-study-summary-value">6 months</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="case-study-summary-label type-label-lg uppercase">TOOLS</span>
                <span className="case-study-summary-value">Figma, AE, Illustrator, Photoshop</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="case-study-summary-label type-label-lg uppercase">SCOPE</span>
                <span className="case-study-summary-value">Research, product strategy, wallet UX</span>
              </div>
            </div>
          </section>

          <hr className="border-[var(--footer-border)] w-full" />

          {/* Overview columns (The Challenge / What I Did) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-[56px] w-full" data-reveal>
            <div className="flex flex-col gap-[8px]">
              <span className="case-study-label type-label-lg mb-[8px] uppercase">OVERVIEW</span>
              <div className="type-body text-[var(--Semantic-Text-Inverse)] flex flex-col gap-[12px]">
                <p>TrustCore is a self-custody wallet designed to make digital ownership easier to understand.</p>
                <p>Rather than simplifying blockchain, the project rethinks how people are introduced to it.</p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <span className="case-study-label type-label-lg mb-[8px] uppercase">WHAT I DID</span>
              <p className="type-body text-[var(--Semantic-Text-Inverse)]">
                I led the product design from research through high-fidelity design, including product strategy, information architecture, interaction design, prototyping, and design system implementation.
              </p>
            </div>
          </section>

          <hr className="border-[var(--footer-border)] w-full" />

          {/* Problem Statement Section */}
          <section id="problem" className="flex flex-col gap-[8px] scroll-mt-28 w-full" data-reveal>
            <span className="case-study-label type-label-lg mb-[8px] uppercase">THE CHALLENGE</span>
            <div className="flex flex-col gap-[8px] w-full">
              <div className="type-body text-[var(--Semantic-Text-Inverse)] flex flex-col gap-1">
                <p>Self-custody gives people complete control over their assets. Most wallets expose that complexity immediately asking users to understand accounts, addresses, and recovery phrases before they understand why any of it matters.</p>
                <p>I wanted to question that approach.</p>
              </div>
              <div className="case-study-callout mt-4 flex flex-col gap-2 rounded-[20px] p-6 sm:p-8">
                <span className="type-label-lg uppercase opacity-70">Design question</span>
                <p className="type-heading-h4">What if a wallet was designed around how people naturally think about ownership instead?</p>
              </div>
            </div>
          </section>

          <hr className="border-[var(--footer-border)] w-full" />

          {/* Research & Discovery Section */}
          <section id="discovery" className="flex flex-col gap-[32px] scroll-mt-28 w-full" data-reveal>
            <div className="flex flex-col gap-[8px]">
              <span className="case-study-label type-label-lg mb-[8px] uppercase">RESEARCH</span>
              <h2 className="type-heading-h5 text-[var(--color-text-inverse)]">
                One insight changed the project.
              </h2>
              <p className="type-body text-[var(--Semantic-Text-Inverse)] mt-1">
                I expected blockchain to be the biggest obstacle. Research suggested otherwise. The real problem wasn't technical complexity - it was a mismatch between how users think and how wallets are designed.
              </p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <span className="case-study-label type-label-lg mb-[2px] uppercase">RESEARCH RESOURCE</span>
              
              {/* Research Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
                <div className="bg-[var(--bg-color)] border border-[var(--footer-border)] shadow-[0px_1px_1px_rgba(0,0,0,0.06)] rounded-[16px] p-[24px] flex flex-col gap-[12px] hover:shadow-md transition-shadow">
                  <span className="type-label text-[var(--color-text-secondary)]">01</span>
                  <h3 className="type-heading-h6 text-[var(--color-text-inverse)]">Competitor Review</h3>
                  <p className="type-body-sm text-[var(--Semantic-Text-Inverse)]">
                    I analysed leading self-custody wallets to understand how they introduced ownership, security, and recovery during onboarding.
                  </p>
                </div>
                <div className="bg-[var(--bg-color)] border border-[var(--footer-border)] shadow-[0px_1px_1px_rgba(0,0,0,0.06)] rounded-[16px] p-[24px] flex flex-col gap-[12px] hover:shadow-md transition-shadow">
                  <span className="type-label text-[var(--color-text-secondary)]">02</span>
                  <h3 className="type-heading-h6 text-[var(--color-text-inverse)]">Existing Research</h3>
                  <p className="type-body-sm text-[var(--Semantic-Text-Inverse)]">
                    I reviewed industry reports, published UX research, and educational resources to identify recurring usability patterns around self-custody.
                  </p>
                </div>
                <div className="bg-[var(--bg-color)] border border-[var(--footer-border)] shadow-[0px_1px_1px_rgba(0,0,0,0.06)] rounded-[16px] p-[24px] flex flex-col gap-[12px] hover:shadow-md transition-shadow">
                  <span className="type-label text-[var(--color-text-secondary)]">03</span>
                  <h3 className="type-heading-h6 text-[var(--color-text-inverse)]">Community Discussions</h3>
                  <p className="type-body-sm text-[var(--Semantic-Text-Inverse)]">
                    I explored discussions across Reddit, X, and crypto communities to understand where users became confused and why.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Quotes Row */}
            <div className="flex flex-col gap-[24px] w-full">
              <h4 className="type-body-medium text-[var(--color-text-inverse)]">Direct user quote from the study:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] w-full">
                {/* Quote 1 */}
                <div className="flex flex-col gap-[8px] py-1">
                  <div className="pl-[24px] border-l-[3px] border-[var(--color-text-inverse)] py-0.5">
                    <p className="type-body-medium text-[var(--color-text-inverse)]">
                      "This app has deleted all my funds and account. DO NOT DOWNLOAD THIS!!!"
                    </p>
                  </div>
                  <p className="type-body italic text-[var(--color-text-secondary)] pl-[27px]">
                    App store reviewer who misunderstood that the wallet app is just an interface, not the location of their funds
                  </p>
                </div>
                {/* Quote 2 */}
                <div className="flex flex-col gap-[8px] py-1">
                  <div className="pl-[24px] border-l-[3px] border-[var(--color-text-inverse)] py-0.5">
                    <p className="type-body-medium text-[var(--color-text-inverse)]">
                      "I generate my private key and send it to the cloud. Then I get back [from the cloud] a public key."
                    </p>
                  </div>
                  <p className="type-body italic text-[var(--color-text-secondary)] pl-[27px]">
                    Study participant 5[X], demonstrating a fundamental misunderstanding of public/private key cryptography
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-[var(--footer-border)] w-full" />

          {/* New Strategy Section */}
          <section id="strategy" className="flex flex-col gap-[32px] scroll-mt-28 w-full" data-reveal>
            <div className="case-study-callout flex flex-col gap-[8px] rounded-[20px] p-6 sm:p-8">
              <span className="type-label-lg mb-[8px] uppercase opacity-70">KEY INSIGHT</span>
              <h2 className="type-heading-h4">
                The interface wasn't introducing complexity. It was introducing the wrong concepts at the wrong time.
              </h2>
            </div>

            {/* Strategy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full mt-2">
              <div className="flex flex-col gap-[12px]">
                <h4 className="type-heading-h6 text-[var(--color-text-inverse)]">PEOPLE NATURALLY THINK ABOUT</h4>
                <div className="bg-[var(--bg-color)] border border-[var(--footer-border)] shadow-[0px_1px_1px_rgba(0,0,0,0.06)] rounded-[16px] p-[24px] flex-1">
                  <ul className="flex flex-col gap-4 pl-5 list-disc type-body text-[var(--Semantic-Text-Inverse)]">
                    <li>What do I own?</li>
                    <li>How can I protect it?</li>
                    <li>Who can access it?</li>
                    <li>What happens if I lose access?</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <h4 className="type-heading-h6 text-[var(--color-text-inverse)]">WALLETS INTRODUCE</h4>
                <div className="bg-[var(--bg-color)] border border-[var(--footer-border)] shadow-[0px_1px_1px_rgba(0,0,0,0.06)] rounded-[16px] p-[24px] flex-1">
                  <ul className="flex flex-col gap-4 pl-5 list-disc type-body text-[var(--Semantic-Text-Inverse)]">
                    <li>Accounts</li>
                    <li>Addresses</li>
                    <li>Permissions</li>
                    <li>Signatures</li>
                    <li>Recovery phrases</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mental Model Callout */}
            <div className="case-study-summary px-4 sm:px-[24px] py-[16px] rounded-[12px] flex items-start sm:items-center gap-[10px]">
              <div className="bg-[var(--case-accent)] rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                <CheckBadgeIcon className="size-4 text-white" />
              </div>
              <span className="case-study-summary-value type-body-medium">
                It was the mental model - not the interface.
              </span>
            </div>
          </section>

          <hr className="border-[var(--footer-border)] w-full" />

          {/* Design Opportunity Section */}
          <section id="opportunity" className="flex flex-col gap-[32px] scroll-mt-28 w-full">
            {/* Design Opportunity horizontal timeline */}
            <div className="flex flex-col gap-[32px] w-full">
              <div className="flex flex-col gap-[12px]">
                <span className="case-study-label type-label-lg mb-[4px] uppercase">DESIGN OPPORTUNITY</span>
                <p className="type-body text-[var(--Semantic-Text-Inverse)]">
                  Instead of organising the experience around blockchain architecture, TrustCore is organised around ownership. The progression mirrors how people naturally build trust with a product: understand first, then protect, then take control.
                </p>
              </div>

              {/* Timeline Horizontal Layout */}
              <div className="w-full overflow-x-auto no-scrollbar py-4">
                <div className="flex gap-[24px] min-w-max">
                  {/* Step 1 */}
                  <div className="flex flex-col gap-[4px] w-[180px]">
                    <div className="h-[103px] w-full bg-[#F5F5F7] rounded-[16px] flex items-center justify-center p-3 relative select-none">
                      <img 
                        src="/images/1home.avif" 
                        alt="Step 1 Account Home" 
                        className="w-full h-full object-contain pointer-events-none" 
                        width="180"
                        height="103"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                    </div>
                    <span className="type-label text-[var(--color-text-secondary)] mt-1">01</span>
                    <h5 className="type-body-medium text-[var(--color-text-inverse)]">Account Home</h5>
                    <p className="type-caption text-[var(--color-text-secondary)]">Start with what users care about most: their assets.</p>
                  </div>
                  {/* Step 2 */}
                  <div className="flex flex-col gap-[4px] w-[180px]">
                    <div className="h-[103px] w-full bg-[#F5F5F7] rounded-[16px] flex items-center justify-center p-3 relative select-none">
                      <img 
                        src="/images/2.manage.avif" 
                        alt="Step 2 Manage Wallet" 
                        className="w-full h-full object-contain pointer-events-none" 
                        width="180"
                        height="103"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                    </div>
                    <span className="type-label text-[var(--color-text-secondary)] mt-1">02</span>
                    <h5 className="type-body-medium text-[var(--color-text-inverse)]">Manage Wallet</h5>
                    <p className="type-caption text-[var(--color-text-secondary)]">Organise wallets before configuring them.</p>
                  </div>
                  {/* Step 3 */}
                  <div className="flex flex-col gap-[4px] w-[180px]">
                    <div className="h-[103px] w-full bg-[#F5F5F7] rounded-[16px] flex items-center justify-center p-3 relative select-none">
                      <img 
                        src="/images/3wallet.avif" 
                        alt="Step 3 Wallet & Account" 
                        className="w-full h-full object-contain pointer-events-none" 
                        width="180"
                        height="103"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                    </div>
                    <span className="type-label text-[var(--color-text-secondary)] mt-1">03</span>
                    <h5 className="type-body-medium text-[var(--color-text-inverse)]">Wallet &amp; Account</h5>
                    <p className="type-caption text-[var(--color-text-secondary)]">Build understanding before making decisions.</p>
                  </div>
                  {/* Step 4 */}
                  <div className="flex flex-col gap-[4px] w-[180px]">
                    <div className="h-[103px] w-full bg-[#F5F5F7] rounded-[16px] flex items-center justify-center p-3 relative select-none">
                      <img 
                        src="/images/4wallettype.avif" 
                        alt="Step 4 Wallet Type" 
                        className="w-full h-full object-contain pointer-events-none" 
                        width="180"
                        height="103"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                    </div>
                    <span className="type-label text-[var(--color-text-secondary)] mt-1">04</span>
                    <h5 className="type-body-medium text-[var(--color-text-inverse)]">Wallet Type</h5>
                    <p className="type-caption text-[var(--color-text-secondary)]">Choose the right level of control.</p>
                  </div>
                  {/* Step 5 */}
                  <div className="flex flex-col gap-[4px] w-[180px]">
                    <div className="h-[103px] w-full bg-[#F5F5F7] rounded-[16px] flex items-center justify-center p-3 relative select-none">
                      <img 
                        src="/images/5create.avif" 
                        alt="Step 5 Create or Import" 
                        className="w-full h-full object-contain pointer-events-none" 
                        width="180"
                        height="103"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                    </div>
                    <span className="type-label text-[var(--color-text-secondary)] mt-1">05</span>
                    <h5 className="type-body-medium text-[var(--color-text-inverse)]">Create or Import</h5>
                    <p className="type-caption text-[var(--color-text-secondary)]">Only show what's needed next.</p>
                  </div>
                </div>
              </div>

              {/* Foundation Callout */}
              <div className="case-study-summary px-4 sm:px-[24px] py-[16px] rounded-[12px] flex items-start sm:items-center gap-[10px] mt-4">
                <div className="bg-[var(--case-accent)] rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  <CheckBadgeIcon className="size-4 text-white" />
                </div>
                <span className="case-study-summary-value type-body-medium">
                  This structure became the foundation for every design decision that followed.
                </span>
              </div>
            </div>
          </section>

          <hr className="border-[var(--footer-border)] w-full" />

          {/* Design Execution / Principles Section */}
          <section id="design-principles" className="flex flex-col gap-[56px] w-full scroll-mt-28" data-reveal>
            <div className="flex flex-col gap-[16px]">
              <span className="case-study-label type-label-lg uppercase">DESIGN PRINCIPLES</span>
              
              {/* Principles Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
                {/* Card 1 */}
                <div className="case-study-summary shadow-[0px_1px_1px_rgba(0,0,0,0.06)] rounded-[16px] p-[24px] flex flex-col gap-[16px] hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[var(--card-bg)] flex items-center justify-center text-[var(--color-text-inverse)]">
                    <FaceSmileIcon />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="type-heading-h6 text-[var(--color-text-inverse)]">Start with what's familiar.</h3>
                    <p className="type-body text-[var(--color-text-secondary)]">
                      Introduce blockchain concepts only after users understand ownership.
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="case-study-summary shadow-[0px_1px_1px_rgba(0,0,0,0.06)] rounded-[16px] p-[24px] flex flex-col gap-[16px] hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[var(--card-bg)] flex items-center justify-center text-[var(--color-text-inverse)]">
                    <PhoneIcon />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="type-heading-h6 text-[var(--color-text-inverse)]">Explain before asking.</h3>
                    <p className="type-body text-[var(--color-text-secondary)]">
                      Every important decision begins with context.
                    </p>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="case-study-summary shadow-[0px_1px_1px_rgba(0,0,0,0.06)] rounded-[16px] p-[24px] flex flex-col gap-[16px] hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[var(--card-bg)] flex items-center justify-center text-[var(--color-text-inverse)]">
                    <ShieldTickIcon />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="type-heading-h6 text-[var(--color-text-inverse)]">Reveal complexity gradually.</h3>
                    <p className="type-body text-[var(--color-text-secondary)]">
                      Advanced features stay available without becoming the default experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-[var(--footer-border)] w-full" />

          {/* Design Execution Section */}
          <section id="design-execution" className="flex flex-col gap-[40px] w-full scroll-mt-28" data-reveal>
            {/* Spacing rows of illustrations */}
            <div className="flex flex-col gap-[40px]">
              <span className="case-study-label type-label-lg uppercase mb-[-24px]">DESIGN EXECUTION</span>
              
              {/* Feature 1 */}
              <div className="flex flex-col gap-[40px] w-full">
                <div className="flex flex-col gap-2">
                  <h3 className="type-heading-h5 text-[var(--color-text-inverse)]">Ownership comes first.</h3>
                  <p className="type-body text-[var(--Semantic-Text-Inverse)]">
                    Assets become the primary entry point instead of accounts. Rather than exposing technical structure immediately, the product helps users understand what they own before introducing how those assets are managed — reducing early drop-off caused by unfamiliar terminology.
                  </p>
                </div>
                <div className="w-full h-[360px] sm:h-[520px] lg:h-[620px] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[var(--card-bg)] flex items-center justify-center p-2">
                  <ScrollPlayLottie src="/images/ownship.json" />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-[40px] w-full">
                <div className="flex flex-col gap-2">
                  <h3 className="type-heading-h5 text-[var(--color-text-inverse)]">Security should be learned, not configured.</h3>
                  <p className="type-body text-[var(--Semantic-Text-Inverse)]">
                    Protection is introduced progressively instead of all at once. Each recommendation includes clear context so users understand its purpose before making a decision - shifting security from a setup task to a growing sense of confidence.
                  </p>
                </div>
                <div className="w-full h-[360px] sm:h-[520px] lg:h-[620px] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[var(--card-bg)] flex items-center justify-center p-2">
                  <ScrollPlayLottie src="/images/security.json" />
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col gap-[40px] w-full">
                <div className="flex flex-col gap-2">
                  <h3 className="type-heading-h5 text-[var(--color-text-inverse)]">Advanced doesn't mean complicated.</h3>
                  <p className="type-body text-[var(--Semantic-Text-Inverse)]">
                    Powerful features like multisig remain accessible without overwhelming new users. Users first learn why additional security might be valuable before configuring advanced settings - preserving flexibility without front-loading complexity.
                  </p>
                </div>
                <div className="w-full h-[360px] sm:h-[520px] lg:h-[620px] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[var(--card-bg)] flex items-center justify-center p-2">
                  <ScrollPlayLottie src="/images/multisig.json" />
                </div>
              </div>
            </div>
          </section>

          <hr className="border-[var(--footer-border)] w-full" />

          {/* Takeaways Section */}
          <section id="final-outcome" className="flex flex-col gap-[48px] w-full scroll-mt-28" data-reveal>
            <div className="case-study-outcome flex flex-col gap-[8px] rounded-[24px] p-6 sm:p-8">
              <span className="case-study-label type-label-lg mb-[8px] uppercase">FINAL OUTCOME</span>
              <h2 className="type-heading-h4">Confidence before complexity.</h2>
              <p className="type-body">
                Rather than asking users to learn blockchain before using a wallet, TrustCore introduces blockchain concepts only when they become meaningful. The experience shifts from technology-first to ownership-first, helping users build confidence before complexity.
              </p>
            </div>

            <div className="flex flex-col gap-[20px] w-full">
              <div className="flex flex-col gap-[8px]">
                <span className="case-study-label type-label-lg mb-[8px] uppercase">REFLECTION</span>
                <h3 className="type-heading-h4 text-[var(--color-text-inverse)]">
                  This project changed how I think about product design.
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full mt-2">
                {/* Card 1 */}
                <div className="bg-[var(--bg-color)] border border-[var(--footer-border)] shadow-[0px_1px_1px_rgba(0,0,0,0.06)] rounded-[24px] p-[24px] flex flex-col gap-[20px] hover:shadow-md transition-shadow duration-300">
                  <div className="w-full rounded-[16px] overflow-hidden bg-[var(--card-bg)] flex items-center justify-center">
                    <img
                      src="/images/cognitive.avif"
                      alt="Cognitive effort is"
                      className="w-full h-auto"
                      width="500"
                      height="296"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="type-heading-h6 text-[var(--color-text-inverse)]">
                      Cognitive effort is.
                    </h4>
                    <p className="type-body-sm text-[var(--color-text-secondary)]">
                      Users struggle when they have to build a new mental model before they can act.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[var(--bg-color)] border border-[var(--footer-border)] shadow-[0px_1px_1px_rgba(0,0,0,0.06)] rounded-[24px] p-[24px] flex flex-col gap-[20px] hover:shadow-md transition-shadow duration-300">
                  <div className="w-full rounded-[16px] overflow-hidden bg-[var(--card-bg)] flex items-center justify-center">
                    <img
                      src="/images/tech.avif"
                      alt="Technology isn't what overwhelms users"
                      className="w-full h-auto"
                      width="500"
                      height="296"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="type-heading-h6 text-[var(--color-text-inverse)]">
                      Technology isn't what overwhelms users.
                    </h4>
                    <p className="type-body-sm text-[var(--color-text-secondary)]">
                      It's rarely the complexity of the product itself.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[var(--bg-color)] border border-[var(--footer-border)] shadow-[0px_1px_1px_rgba(0,0,0,0.06)] rounded-[24px] p-[24px] flex flex-col gap-[20px] hover:shadow-md transition-shadow duration-300">
                  <div className="w-full rounded-[16px] overflow-hidden bg-[var(--card-bg)] flex items-center justify-center">
                    <img
                      src="/images/goodux.avif"
                      alt="Good UX teaches before it asks"
                      className="w-full h-auto"
                      width="500"
                      height="296"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="type-heading-h6 text-[var(--color-text-inverse)]">
                      Good UX teaches before it asks.
                    </h4>
                    <p className="type-body-sm text-[var(--color-text-secondary)]">
                      Designing the right mental model creates confidence, not just a cleaner interface.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-[var(--footer-border)] w-full" />

          {/* Learn More / Other Screens */}
          <section id="learn-more" className="flex flex-col gap-[24px] w-full mb-12 scroll-mt-28" data-reveal>
            <div className="flex flex-col gap-[8px]">
              <span className="case-study-label type-label-lg mb-[8px] uppercase">LEARN MORE</span>
              <h3 className="type-heading-h5 text-[var(--color-text-inverse)]">
                There's so much more behind the scene!
              </h3>
            </div>
            <div className="w-full bg-[var(--card-bg)] rounded-[32px] p-4 md:p-8 flex flex-col items-center justify-center gap-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {/* Row 1 */}
                <img src="/images/Home.avif" alt="Account Home" className="w-full h-auto rounded-[16px] shadow-sm hover:scale-[1.04] transition-transform duration-300" width="348" height="754" loading="lazy" decoding="async" />
                <img src="/images/buy.avif" alt="Select Token" className="w-full h-auto rounded-[16px] shadow-sm hover:scale-[1.04] transition-transform duration-300" width="348" height="754" loading="lazy" decoding="async" />
                <img src="/images/chart.avif" alt="Ethereum Graph" className="w-full h-auto rounded-[16px] shadow-sm hover:scale-[1.04] transition-transform duration-300" width="348" height="754" loading="lazy" decoding="async" />
                <img src="/images/setting.avif" alt="Settings" className="w-full h-auto rounded-[16px] shadow-sm hover:scale-[1.04] transition-transform duration-300" width="348" height="754" loading="lazy" decoding="async" />
                {/* Row 2 */}
                <img src="/images/MiniApps.avif" alt="Mini Apps" className="w-full h-auto rounded-[16px] shadow-sm hover:scale-[1.04] transition-transform duration-300" width="348" height="754" loading="lazy" decoding="async" />
                <img src="/images/DApps.avif" alt="DApps Search" className="w-full h-auto rounded-[16px] shadow-sm hover:scale-[1.04] transition-transform duration-300" width="348" height="754" loading="lazy" decoding="async" />
                <img src="/images/Invest.avif" alt="Events" className="w-full h-auto rounded-[16px] shadow-sm hover:scale-[1.04] transition-transform duration-300" width="348" height="754" loading="lazy" decoding="async" />
                <img src="/images/Multisig wallet.avif" alt="Event Details" className="w-full h-auto rounded-[16px] shadow-sm hover:scale-[1.04] transition-transform duration-300" width="348" height="754" loading="lazy" decoding="async" />
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
