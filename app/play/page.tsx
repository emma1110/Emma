import type { Metadata } from "next";
import Navbar from "../../components/nav/Navbar";
import PlayHero from "../../components/play/PlayHero";

export const metadata: Metadata = {
  title: "Play | Emma | Product Designer",
  description: "Enter Emma's playful world of products, drawings, observations, and stories.",
};

export default function PlayPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#F7F2EA] text-[#111111]">
      <Navbar />
      <PlayHero />
    </main>
  );
}
