import type { Metadata } from "next";
import { AppFeatures } from "@/components/bitcore-demo/AppFeatures";
import { EarningCta } from "@/components/bitcore-demo/EarningCta";
import { Footer } from "@/components/bitcore-demo/Footer";
import { Header } from "@/components/bitcore-demo/Header";
import { Hero } from "@/components/bitcore-demo/Hero";
import { MiningSteps } from "@/components/bitcore-demo/MiningSteps";
import { NativeCoin } from "@/components/bitcore-demo/NativeCoin";
import { OnChainTransparency } from "@/components/bitcore-demo/OnChainTransparency";
import { Roadmap } from "@/components/bitcore-demo/Roadmap";
import { SocialNetwork } from "@/components/bitcore-demo/SocialNetwork";
import { StakingRewards } from "@/components/bitcore-demo/StakingRewards";
import { TradePrecision } from "@/components/bitcore-demo/TradePrecision";

export const metadata: Metadata = {
  title: "BitCore — Interactive Landing Page Demo",
  description:
    "Explore the interactive BitCore Layer 1 landing page designed by Emma.",
};

export default function BitcoreDemoPage() {
  return (
    <main>
      <Header />
      <Hero />
      <MiningSteps />
      <AppFeatures />
      <TradePrecision />
      <SocialNetwork />
      <StakingRewards />
      <OnChainTransparency />
      <NativeCoin />
      <Roadmap />
      <EarningCta />
      <Footer />
    </main>
  );
}
