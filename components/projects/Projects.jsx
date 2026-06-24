"use client";

import React from "react";
import TrustCoreCard from "./TrustCoreCard";
import TrustCoreWebCard from "./TrustCoreWebCard";
import CryptoHeroCard from "./CryptoHeroCard";
import BitCoreCard from "./BitCoreCard";

export default function Projects() {
  return (
    <section
      id="project"
      className="relative flex w-full max-w-[1440px] mx-auto flex-col items-start gap-[20px] px-4 sm:px-8 md:px-[80px] py-16 md:py-[128px] bg-[var(--bg-color)] transition-colors duration-450"
    >
      {/* Section Header */}
      <h2
        className="w-full text-left"
        style={{
          color: "var(--color-text-inverse, black)",
          fontSize: "var(--font-display-xl-size)",
          fontWeight: "var(--font-display-xl-weight)",
          lineHeight: "var(--font-display-xl-line)",
          letterSpacing: "var(--font-display-xl-tracking)",
          marginBottom: "32px"
        }}
      >
        Recent Work
      </h2>

      {/* ══════════════════════════════════════════════════
          Card 1 — TrustCore Mobile
      ══════════════════════════════════════════════════ */}
      <TrustCoreCard />

      {/* ══════════════════════════════════════════════════
          Row — Cards 2 & 3
      ══════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] w-full">
        <TrustCoreWebCard />
        <CryptoHeroCard />
      </div>

      {/* ══════════════════════════════════════════════════
          Card 4 — BitCore Web
      ══════════════════════════════════════════════════ */}
      <BitCoreCard />
    </section>
  );
}
