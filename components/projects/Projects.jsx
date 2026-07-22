import TrustCoreCard from "./TrustCoreCard";
import TrustCoreWebCard from "./TrustCoreWebCard";
import HyfiCard from "./HyfiCard";
import BitCoreCard from "./BitCoreCard";

export default function Projects() {
  return (
    <section
      id="project"
      className="relative flex w-full max-w-[1440px] mx-auto flex-col items-start gap-4 sm:gap-[20px] px-4 sm:px-8 lg:px-[80px] py-16 lg:py-[128px] bg-[var(--bg-color)] transition-colors duration-450"
    >
      {/* ══════════════════════════════════════════════════
          Card 1: TrustCore Mobile
      ══════════════════════════════════════════════════ */}
      <TrustCoreCard />

      {/* ══════════════════════════════════════════════════
          Row: Cards 2 & 3
      ══════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] w-full">
        <TrustCoreWebCard />
        <HyfiCard />
      </div>

      {/* ══════════════════════════════════════════════════
          Card 4: BitCore Web
      ══════════════════════════════════════════════════ */}
      <BitCoreCard />
    </section>
  );
}
