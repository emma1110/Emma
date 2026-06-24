"use client";

import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/nav/Navbar';
import Lottie from 'lottie-react';
import guidedData from '../../public/images/guided.json';
import multisigData from '../../public/images/multisig.json';

export default function TrustCorePage() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const [activeSection, setActiveSection] = useState('overview');
  const [indicatorOffset, setIndicatorOffset] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(0);

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem-discovery', label: 'The Problem & Discovery' },
    { id: 'solution', label: 'The Solution' },
    { id: 'design-execution', label: 'Design Execution' },
    { id: 'design-principles', label: 'Design Principles' },
    { id: 'key-takeaways', label: 'Key Takeaways' }
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
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
    setIsMounted(true);
  }, []);

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
      
      <div className="w-full max-w-[1440px] px-4 sm:px-8 md:px-[80px] py-24 flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        
        {/* Sticky Sidebar */}
        <aside className="w-full md:w-[180px] shrink-0 sticky top-28 hidden md:flex flex-col gap-8 pt-4">
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
                    className={`text-[12px] block py-[3px] leading-tight transition-all duration-200 ${
                      activeSection === sec.id
                        ? 'text-[var(--color-text-inverse)] font-semibold'
                        : 'text-[var(--text-muted)] opacity-60 hover:opacity-100'
                    }`}
                  >
                    {sec.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 w-full flex flex-col gap-16 md:gap-24">
          
          {/* Hero: Label + Heading + Video + Metadata */}
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[14px] font-semibold tracking-wide text-[var(--text-muted)] uppercase">TrustCore Case Study</span>
              <h1 style={{ fontFamily: 'var(--font-libre-caslon)' }} className="text-[36px] md:text-[48px] leading-[42px] md:leading-[56px] font-bold text-[var(--color-text-inverse)] tracking-[-1px] w-full">
                Helping people understand, protect, and pass on their digital assets.
              </h1>
            </div>

            <div className="relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-black h-[300px] md:h-[500px] flex items-center justify-center group">
              <video 
                ref={videoRef}
                src="/images/video1.webm" 
                autoPlay 
                loop 
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover" 
              />
              {/* Play/Pause Center Button */}
              <button 
                onClick={togglePlay}
                className={`absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 transition-colors">
                  {isPlaying ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  )}
                </div>
              </button>

              {/* Mute Toggle Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 z-10"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                  </svg>
                )}
              </button>
            </div>

            {/* Metadata Row */}
            <div className="grid grid-cols-3 gap-8 border-b border-[var(--footer-border)] pb-10 pt-2">
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-semibold tracking-wide text-[var(--text-muted)] uppercase">Role</span>
                <span className="text-[16px] font-medium text-[var(--color-text-inverse)]">Product Designer</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-semibold tracking-wide text-[var(--text-muted)] uppercase">Timeline</span>
                <span className="text-[16px] font-medium text-[var(--color-text-inverse)]">6 months</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-semibold tracking-wide text-[var(--text-muted)] uppercase">Tools</span>
                <span className="text-[16px] font-medium text-[var(--color-text-inverse)]">Figma, AE, Illustrator, Photoshop</span>
              </div>
            </div>
          </section>

          {/* 01. OVERVIEW */}
          <section id="overview" className="flex flex-col gap-6 w-full scroll-mt-28">
            <h4 className="text-[14px] font-semibold tracking-wide text-[var(--text-muted)] uppercase">01. Overview</h4>
            <h2 className="text-2xl md:text-[32px] md:leading-[44px] font-bold text-[var(--color-text-inverse)] tracking-[-0.5px]">
              Nearly 90% of crypto holders worry about what happens to their assets when they die. Only 24% have a will that accounts for it.
            </h2>
            <p className="text-[16px] leading-[26px] text-[var(--Semantic-Text-Inverse)]">
              Most wallets are built purely around transactions. Security, recovery, and inheritance often live in separate, disconnected tools, forcing users to manage ownership across fragmented experiences.
            </p>
            <p className="text-[16px] leading-[26px] text-[var(--Semantic-Text-Inverse)]">
              TrustCore explores a different idea: What if ownership became the very foundation of the wallet experience?
            </p>
          </section>

          {/* 02. THE PROBLEM & DISCOVERY */}
          <section id="problem-discovery" className="flex flex-col gap-6 w-full scroll-mt-28">
            <h4 className="text-[14px] font-semibold tracking-wide text-[var(--text-muted)] uppercase">02. The Problem &amp; Discovery</h4>
            <h2 className="text-[24px] font-bold text-[var(--color-text-inverse)] tracking-[-0.5px]">
              Early Findings: A Clash of Mental Models
            </h2>
            <p className="text-[16px] leading-[26px] text-[var(--Semantic-Text-Inverse)]">
              Through our discovery phase, we realized users weren&apos;t struggling because information was missing. They were struggling because the product spoke a language they didn&apos;t understand:
            </p>
            <ul className="flex flex-col gap-4 pl-5 list-disc text-[16px] leading-[26px] text-[var(--Semantic-Text-Inverse)] mt-2">
              <li><span className="font-semibold text-[var(--color-text-inverse)]">Users talked about:</span> Assets, security, and protecting what they owned in plain language.</li>
              <li><span className="font-semibold text-[var(--color-text-inverse)]">Wallets talked about:</span> Accounts, addresses, permissions, and cryptographic signatures.</li>
            </ul>

            <h3 className="text-[20px] font-bold text-[var(--color-text-inverse)] tracking-tight mt-8">Core Pain Points</h3>
            <ul className="flex flex-col gap-4 pl-5 list-disc text-[16px] leading-[26px] text-[var(--Semantic-Text-Inverse)]">
              <li><span className="font-semibold text-[var(--color-text-inverse)]">Fragmented Experience:</span> Users must rely on multiple disconnected products to manage security, recovery, and ownership.</li>
              <li><span className="font-semibold text-[var(--color-text-inverse)]">The Identity Crisis:</span> Wallet and Account are often confused, making true asset ownership difficult to grasp.</li>
              <li><span className="font-semibold text-[var(--color-text-inverse)]">Premature Decisions:</span> Advanced features force critical configuration choices before users even understand what those decisions mean.</li>
            </ul>
          </section>

          {/* 03. THE SOLUTION: A NEW MENTAL MODEL */}
          <section id="solution" className="flex flex-col gap-6 w-full scroll-mt-28">
            <h4 className="text-[14px] font-semibold tracking-wide text-[var(--text-muted)] uppercase">03. The Solution: A New Mental Model</h4>
            <h2 className="text-[24px] font-bold text-[var(--color-text-inverse)] tracking-[-0.5px]">
              How do you redesign a wallet without just adding another settings screen?
            </h2>
            <p className="text-[16px] leading-[26px] text-[var(--Semantic-Text-Inverse)]">
              Instead of organizing the experience around wallet technologies, TrustCore organizes it around ownership hierarchy:
            </p>
            
            {/* Flow Diagram */}
            <div className="w-full bg-[var(--card-bg)] rounded-[24px] p-8 md:p-12 mt-4 overflow-x-auto">
              <div className="flex items-center justify-start lg:justify-center gap-2 md:gap-4 min-w-max w-full">
                {/* Pill 1 */}
                <div className="bg-[var(--color-text-inverse)] text-[var(--bg-color)] px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center justify-center">
                  <h5 className="text-[14px] md:text-[16px] leading-[24px] font-semibold m-0">Assets (First)</h5>
                </div>
                
                {/* Arrow Connector 1 */}
                <div className="flex items-center w-8 md:w-16 relative">
                  <div className="w-full h-[1.5px] bg-[var(--color-text-inverse)]"></div>
                  <div className="absolute right-[-1px] w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[5px] border-l-[var(--color-text-inverse)]"></div>
                </div>

                {/* Pill 2 */}
                <div className="bg-[var(--color-text-inverse)] text-[var(--bg-color)] px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center justify-center">
                  <h5 className="text-[14px] md:text-[16px] leading-[24px] font-semibold m-0">Protection (Second)</h5>
                </div>

                {/* Arrow Connector 2 */}
                <div className="flex items-center w-8 md:w-16 relative">
                  <div className="w-full h-[1.5px] bg-[var(--color-text-inverse)]"></div>
                  <div className="absolute right-[-1px] w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[5px] border-l-[var(--color-text-inverse)]"></div>
                </div>

                {/* Pill 3 */}
                <div className="bg-[var(--color-text-inverse)] text-[var(--bg-color)] px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center justify-center">
                  <h5 className="text-[14px] md:text-[16px] leading-[24px] font-semibold m-0">Advanced Configuration</h5>
                </div>
              </div>
            </div>
          </section>

          {/* 04. DESIGN EXECUTION */}
          <section id="design-execution" className="flex flex-col gap-16 md:gap-24 w-full scroll-mt-28">
            <h4 className="text-[14px] font-semibold tracking-wide text-[var(--text-muted)] uppercase mb-[-32px]">04. Design Execution</h4>
            
            {/* Feature 1 - Guided Account Creation */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div className="w-full md:w-[480px] h-[360px] md:h-[480px] shrink-0 bg-[var(--card-bg)] rounded-[32px] overflow-hidden flex items-center justify-center p-8">
                {isMounted && <Lottie animationData={guidedData} loop={true} style={{ width: "100%", height: "100%" }} />}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[22px] font-bold text-[var(--color-text-inverse)] tracking-tight">Guided Account Creation</h3>
                <div className="flex flex-col gap-3 text-[16px] leading-[26px] text-[var(--Semantic-Text-Inverse)]">
                  <p><span className="font-semibold text-[var(--color-text-inverse)]">The Approach:</span> Users learn the purpose of Standard, Smart, and Multisig accounts before choosing one.</p>
                  <p><span className="font-semibold text-[var(--color-text-inverse)]">UX Impact:</span> Decisions are framed around user goals and structural benefits rather than technical jargon.</p>
                </div>
              </div>
            </div>

            {/* Feature 2 - Multisig Made Understandable */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              <div className="w-full md:w-[480px] h-[360px] md:h-[480px] shrink-0 bg-[var(--card-bg)] rounded-[32px] overflow-hidden flex items-center justify-center p-8">
                {isMounted && <Lottie animationData={multisigData} loop={true} style={{ width: "100%", height: "100%" }} />}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[22px] font-bold text-[var(--color-text-inverse)] tracking-tight">Multisig Made Understandable</h3>
                <div className="flex flex-col gap-3 text-[16px] leading-[26px] text-[var(--Semantic-Text-Inverse)]">
                  <p><span className="font-semibold text-[var(--color-text-inverse)]">The Approach:</span> Instead of throwing signer thresholds and technical permissions at the user, TrustCore starts with context.</p>
                  <p><span className="font-semibold text-[var(--color-text-inverse)]">UX Impact:</span> Users learn why multisig exists for their specific use case before being asked to configure it.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 05. DESIGN PRINCIPLES */}
          <section id="design-principles" className="flex flex-col gap-8 w-full scroll-mt-28">
            <h4 className="text-[14px] font-semibold tracking-wide text-[var(--text-muted)] uppercase">05. Design Principles</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <div className="bg-[var(--card-bg)] rounded-[24px] p-8 flex flex-col gap-3">
                <h3 className="text-[18px] font-bold text-[var(--color-text-inverse)]">Familiar Patterns</h3>
                <p className="text-[15px] leading-[24px] text-[var(--Semantic-Text-Inverse)]">Leverage conventions users already understand from traditional banking.</p>
              </div>
              <div className="bg-[var(--card-bg)] rounded-[24px] p-8 flex flex-col gap-3">
                <h3 className="text-[18px] font-bold text-[var(--color-text-inverse)]">Progressive Disclosure</h3>
                <p className="text-[15px] leading-[24px] text-[var(--Semantic-Text-Inverse)]">Show architectural complexity only when it becomes relevant to the task.</p>
              </div>
              <div className="bg-[var(--card-bg)] rounded-[24px] p-8 flex flex-col gap-3">
                <h3 className="text-[18px] font-bold text-[var(--color-text-inverse)]">Clarity &amp; Trust</h3>
                <p className="text-[15px] leading-[24px] text-[var(--Semantic-Text-Inverse)]">Use plain language and strict visual hierarchy to support high-stakes, confident decisions.</p>
              </div>
            </div>
          </section>

          {/* 06. KEY TAKEAWAYS */}
          <section id="key-takeaways" className="flex flex-col gap-6 w-full scroll-mt-28">
            <h4 className="text-[14px] font-semibold tracking-wide text-[var(--text-muted)] uppercase">Key Takeaways</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full items-start mt-2">
              <h2 className="text-[24px] md:text-[32px] md:leading-[44px] font-bold text-[var(--color-text-inverse)] tracking-[-0.5px]">
                &quot;Mental models matter more than interface polish.&quot;
              </h2>
              <p className="text-[16px] leading-[26px] text-[var(--Semantic-Text-Inverse)]">
                Users gain true confidence when products match how they naturally think. For crypto wallets, ownership is a far more intuitive mental model than accounts, permissions, and technical architecture. Trust doesn&apos;t come from hiding complexity, it comes from making complexity understandable.
              </p>
            </div>
          </section>

          {/* Other Screens */}
          <section className="flex flex-col gap-6 w-full mb-12">
            <h4 className="text-[14px] font-semibold tracking-wide text-[var(--text-muted)] uppercase">Other Screens</h4>
            <div className="w-full bg-[var(--card-bg)] rounded-[32px] p-8 md:p-16 flex flex-col items-center justify-center gap-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                <img src="/images/MiniApps.avif" alt="Screen 1" className="w-full h-auto rounded-[16px] shadow-sm" />
                <img src="/images/DApps.avif" alt="Screen 2" className="w-full h-auto rounded-[16px] shadow-sm" />
                <img src="/images/Invest.avif" alt="Screen 3" className="w-full h-auto rounded-[16px] shadow-sm" />
                <img src="/images/Multisig wallet.avif" alt="Screen 4" className="w-full h-auto rounded-[16px] shadow-sm" />
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
