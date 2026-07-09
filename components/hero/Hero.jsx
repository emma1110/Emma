"use client";

import { useState, useEffect } from "react";

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

  const polaroids = [
    { src: "/images/i1.avif", alt: "Photo 1", rotation: -6  },
    { src: "/images/i2.avif", alt: "Photo 2", rotation: 4,  overlap: true },
    { src: "/images/i3.avif", alt: "Photo 3", rotation: -3, overlap: true },
    { src: "/images/i4.avif", alt: "Photo 4", rotation: 6,  overlap: true },
  ];

  return (
    <>
      <style>{`
        .polaroid-card {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.35s ease,
                      z-index 0s;
          cursor: pointer;
          position: relative;
        }
        .polaroid-card:hover {
          transform: rotate(0deg) translateY(-20px) scale(1.08) !important;
          box-shadow: 0 28px 56px rgba(0,0,0,0.32);
          z-index: 20 !important;
        }
      `}</style>

      <div className="relative w-full overflow-hidden" style={{ marginTop: "-72px" }}>

        {/* ── Full-bleed background image ── */}
        <img
          src="/images/cover-hero2.avif"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />

        {/* ── Subtle overlay so text is readable ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(8,22,100,0.30) 0%, rgba(8,22,100,0.08) 40%, transparent 70%)",
          }}
        />

        {/* ── Main content, centered ── */}
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center"
          style={{ minHeight: "100vh", paddingTop: "72px" }}
        >
          {/* Headline + subtitle + CTA */}
          <div
            className="flex flex-col items-center gap-6 max-w-[760px] w-full px-4"
            data-entrance
            style={{ "--entrance-delay": "80ms" }}
          >
            <h1
              className="w-full text-white"
              style={{
                fontSize: "clamp(36px, 5.5vw, 60px)",
                fontWeight: 700,
                lineHeight: "1.2",
                letterSpacing: "-1.2px",
              }}
            >
              <span>I design </span>
              <span style={{ fontFamily: "var(--font-libre-caslon)", fontStyle: "italic", fontWeight: 600 }}>
                products
              </span>
              <span> that</span>
              <br />
              <span>turn complexity into </span>
              <span style={{ fontFamily: "var(--font-libre-caslon)", fontStyle: "italic", fontWeight: 600 }}>
                clarity
              </span>
              <span>.</span>
            </h1>

            <p
              className="text-white/85"
              style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 500, lineHeight: "1.6" }}
            >
              Senior Product Designer with 8+ years of experience
              <br className="hidden sm:block" />
              turning complex systems into intuitive products.
            </p>

            <button
              onClick={handleCopyEmail}
              data-magnetic
              className="flex items-center gap-2 rounded-full bg-black text-white font-semibold transition-all duration-200 hover:bg-neutral-800 hover:scale-105 active:scale-95"
              style={{ fontSize: "16px", padding: "10px 24px" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy My Email
            </button>
          </div>

          {/* ── Polaroid cards ── */}
          <div
            className="flex items-center justify-center mt-10 sm:mt-12 pb-16 px-4"
            data-entrance
            style={{ "--entrance-delay": "260ms" }}
          >
            {polaroids.map((p, i) => (
              <div
                key={i}
                className="polaroid-card relative shrink-0"
                style={{
                  transform: `rotate(${p.rotation}deg)`,
                  marginLeft: p.overlap ? "clamp(-40px, -4vw, -28px)" : "0",
                  zIndex: i,
                }}
              >
                <div
                  className="rounded-[20px] overflow-hidden border-[5px] border-white shadow-xl"
                  style={{
                    width: "clamp(160px, 20vw, 230px)",
                    height: "clamp(190px, 24vw, 280px)",
                  }}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="w-full h-full object-cover pointer-events-none"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Toast ── */}
        <div
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-neutral-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl transition-all duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            toast.visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95 pointer-events-none"
          }`}
        >
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 shrink-0">
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
