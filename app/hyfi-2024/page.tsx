import type { Metadata } from "next";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/nav/Navbar";
import CaseStudySidebar from "../../components/case-study/CaseStudySidebar";

export const metadata: Metadata = {
  title: "HYFI 2024 | Emma — Visual Design Case Study",
  description:
    "A scalable visual identity for HYFI 2024 across digital, stage, social, and print touchpoints.",
};

const sections = [
  ["overview", "Overview"],
  ["challenge", "Challenge"],
  ["strategy", "Strategy"],
  ["execution", "Execution"],
  ["outcome", "Outcome"],
  ["reflection", "Reflection"],
] as const;

const constraints = [
  {
    number: "01",
    title: "Continuous updates",
    body: "Content evolved until the final days before launch.",
  },
  {
    number: "02",
    title: "Multiple formats",
    body: "Digital, print, presentation, stage, and social media all required different specifications.",
  },
  {
    number: "03",
    title: "Premium expectations",
    body: "The identity needed to balance innovation with professionalism for an executive audience.",
  },
];

const principles = [
  {
    title: "Create once. Reuse everywhere.",
    body: "Shared layouts and components reduced repetitive decisions.",
  },
  {
    title: "Build recognizable visual anchors.",
    body: "Gradients, geometric compositions, and illustration styles established immediate brand recognition.",
  },
  {
    title: "Design for change.",
    body: "Flexible layouts made last-minute content updates possible without compromising quality.",
  },
];

const visualLanguage = [
  {
    title: "Color",
    body: "Electric Blue, Deep Indigo, and Digital Purple create energy while reinforcing trust and sophistication.",
  },
  {
    title: "Typography",
    body: "Large headlines establish confidence, while restrained body text keeps information easy to scan.",
  },
  {
    title: "Layout",
    body: "A modular grid system allows every asset to adapt across different formats while maintaining visual consistency.",
  },
];

const learnings = [
  {
    title: "Systems scale creativity.",
    body: "Reusable design foundations reduce repetitive work and create space for better creative decisions.",
  },
  {
    title: "Constraints improve clarity.",
    body: "Tight timelines forced every design decision to become simpler, more intentional, and easier to maintain.",
  },
  {
    title: "Consistency builds trust.",
    body: "People rarely remember every individual visual. They remember whether the entire experience felt coherent.",
  },
];

const deliverables = [
  "Event Identity",
  "Landing Page",
  "Keynote Presentation",
  "Stage Screens",
  "Motion Graphics",
  "Social Media Campaign",
  "Speaker Assets",
  "Sponsor Materials",
  "Print Collateral",
  "Event Signage",
];

const learningCardStyles = [
  "-rotate-[5deg] sm:z-10 sm:group-hover/gallery:-translate-x-[102%]",
  "-rotate-[2deg] sm:z-20 sm:group-hover/gallery:-translate-x-[68%]",
  "rotate-[2deg] sm:z-30 sm:group-hover/gallery:-translate-x-[32%]",
  "rotate-[5deg] sm:z-40 sm:group-hover/gallery:translate-x-[2%]",
];

const learningImages = [
  "/images/hyfi/hyfi-learning-2.avif",
  "/images/hyfi/hyfi-learning-3.avif",
  "/images/hyfi/hyfi-learning-4.avif",
  "/images/hyfi/hyfi-learning-featured.avif",
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="case-study-label type-label-lg mb-2 uppercase">
    {children}
  </p>
);

const Divider = () => <hr className="w-full border-[var(--color-border-default)]" />;

export default function Hyfi2024Page() {
  return (
    <main className="case-study-theme case-hyfi min-h-screen w-full bg-[var(--bg-color)] text-[var(--color-text-inverse)] transition-colors duration-450">
      <Navbar />

      <div className="mx-auto flex w-full max-w-[1440px] items-start gap-12 px-4 py-16 sm:px-8 sm:py-20 lg:gap-16 lg:px-[80px] lg:py-[128px] xl:gap-24">
        <CaseStudySidebar
          sections={sections.map(([id, label]) => ({ id, label }))}
          nextHref="/trustcore"
        />

        <article className="mx-auto flex min-w-0 w-full max-w-[968px] flex-col gap-12 sm:gap-14 lg:mx-0">
          <header id="overview" className="scroll-mt-28 flex flex-col gap-6" data-entrance style={{ "--entrance-delay": "80ms" } as React.CSSProperties}>
            <div className="flex items-center gap-2">
              <span className="case-study-label type-label-lg">HYFI2024</span>
              <span className="size-1 rounded-full bg-[var(--case-accent)]" />
              <span className="case-study-label type-label-lg">2024</span>
            </div>

            <h1 className="type-heading-h1">
              Designing one visual language for an event experienced across hundreds of touchpoints.
            </h1>

            <div className="type-body flex flex-col gap-2">
              <p>
                HYFI 2024 brought together leaders across AI, Web3, fintech, and emerging technologies for a premium conference in Singapore.
              </p>
              <p>
                Rather than designing standalone marketing assets, the project focused on building a visual identity that could scale consistently across every interaction from landing pages and keynote presentations to stage screens, motion graphics, social campaigns, and printed materials.
              </p>
            </div>

            <figure className="mt-2 aspect-[968/516] overflow-hidden rounded-[16px] sm:rounded-[24px]" data-entrance style={{ "--entrance-delay": "220ms" } as React.CSSProperties}>
              <img
                src="/images/hyfi/hyfi-hero.avif"
                alt="HYFI 2024 Beyond Boundaries conference campaign"
                className="h-full w-full object-cover"
                width="1936"
                height="1129"
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
            </figure>

            <dl className="case-study-summary grid grid-cols-1 gap-5 rounded-[16px] p-5 sm:grid-cols-2 sm:gap-8 sm:p-6 lg:grid-cols-4" data-reveal>
              {[
                ["Role", "Visual Designer"],
                ["Timeline", "2 months"],
                ["Tools", "Figma, Illustrator, Photoshop"],
                ["Scope", "Identity system, event campaign"],
              ].map(([term, value]) => (
                <div key={term} className="flex flex-col gap-1">
                  <dt className="type-label-lg uppercase">{term}</dt>
                  <dd className="type-body-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <Divider />

          <section className="scroll-mt-28 flex flex-col gap-2" data-reveal>
            <SectionLabel>Overview</SectionLabel>
            <h2 className="type-heading-h5">Great events aren&apos;t remembered by individual visuals.</h2>
            <div className="type-body flex flex-col gap-2">
              <p>They&apos;re remembered as one cohesive experience.</p>
              <p>Behind every keynote, social post, and stage animation is a visual system that quietly connects everything together.</p>
              <p>The goal wasn&apos;t simply to make the conference look modern. It was to create a design language that could communicate innovation while remaining clear, premium, and recognizable across every touchpoint.</p>
            </div>
            <div className="case-study-callout mt-4 flex flex-col gap-2 rounded-[20px] p-6 sm:p-8">
              <span className="type-label-lg uppercase opacity-70">Core idea</span>
              <p className="type-heading-h4">One visual system. Hundreds of connected touchpoints.</p>
            </div>
          </section>

          <Divider />

          <section id="challenge" className="scroll-mt-28 flex flex-col gap-8" data-reveal>
            <div className="flex flex-col gap-2">
              <SectionLabel>The Challenge</SectionLabel>
              <h2 className="type-heading-h5">Every deliverable looked different.</h2>
              <ul className="type-body list-disc space-y-1 pl-6">
                <li>Every experience needed to feel the same.</li>
                <li>Unlike digital products, conferences launch only once.</li>
                <li>There are no iterations after attendees arrive.</li>
                <li>Throughout the project, speakers changed, sponsors evolved, schedules shifted, and new marketing assets were continuously requested. The challenge wasn&apos;t producing graphics quickly, it was maintaining a consistent identity while everything else continued to change.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <SectionLabel>Constraints</SectionLabel>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {constraints.map((item) => (
                  <article key={item.number} className="case-study-accent-border flex min-h-[176px] flex-col gap-3 rounded-[16px] border bg-[var(--case-study-card-bg)] p-6 text-[var(--color-text-inverse)] shadow-sm transition-colors duration-300">
                    <span className="case-study-label type-body-sm-medium">{item.number}</span>
                    <h3 className="type-heading-h6">{item.title}</h3>
                    <p className="type-body-sm">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <Divider />

          <section id="strategy" className="scroll-mt-28 flex flex-col gap-8" data-reveal>
            <div className="flex flex-col gap-2">
              <SectionLabel>Design Strategy</SectionLabel>
              <h2 className="type-heading-h5">Design the system before designing the assets.</h2>
              <div className="type-body flex flex-col gap-2">
                <p>Instead of treating every deliverable as a separate project, the focus shifted toward creating reusable design foundations.</p>
                <p>By defining visual rules early, each new asset inherited the same structure, rhythm, and personality — making production faster while keeping the experience visually consistent.</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <SectionLabel>Design Principles</SectionLabel>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {principles.map((item) => (
                  <article key={item.title} className="case-study-summary flex min-h-[176px] flex-col gap-3 rounded-[16px] p-6 shadow-sm transition-colors duration-300">
                    <h3 className="type-heading-h6">{item.title}</h3>
                    <p className="type-body-sm">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <Divider />

          <section className="flex flex-col gap-8" data-reveal>
            <div className="flex flex-col gap-2">
              <SectionLabel>Visual Language</SectionLabel>
              <h2 className="type-heading-h5">Modern technology doesn&apos;t have to feel complicated.</h2>
              <div className="type-body flex flex-col gap-2">
                <p>Many technology events rely on dense interfaces and futuristic effects to communicate innovation. HYFI took a different direction.</p>
                <p>Bold gradients were balanced with generous whitespace, strong typography, and structured layouts to create a visual identity that felt contemporary without overwhelming the audience.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {visualLanguage.map((item) => (
                <article key={item.title} className="flex min-h-[212px] flex-col gap-3 rounded-[16px] bg-[#141414] px-6 py-6 text-white sm:px-8">
                  <h3 className="type-heading-h5">{item.title}</h3>
                  <p className="type-body">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <Divider />

          <section id="execution" className="scroll-mt-28 flex flex-col gap-8" data-reveal>
            <div className="flex flex-col gap-2">
              <SectionLabel>Design Execution</SectionLabel>
              <h2 className="type-heading-h5">One system expanded across every touchpoint.</h2>
              <p className="type-body">The visual language scaled naturally throughout the entire conference experience, supporting both digital and physical environments without losing consistency.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="type-heading-h5">Deliverables</h3>
              <ul className="type-body grid grid-cols-1 gap-x-12 gap-y-1 pl-6 sm:grid-cols-2">
                {deliverables.map((item) => <li key={item} className="list-disc">{item}</li>)}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1.7fr_1fr]">
              <figure className="aspect-[594/350] overflow-hidden rounded-[16px] sm:rounded-[24px]">
                <img src="/images/hyfi/hyfi-deliverables-wide.avif" alt="HYFI 2024 event campaign graphics" className="h-full w-full object-cover" width="1200" height="700" loading="lazy" decoding="async" />
              </figure>
              <figure className="aspect-square overflow-hidden rounded-[16px] sm:rounded-[24px]">
                <img src="/images/hyfi/hyfi-speaker.avif" alt="HYFI 2024 speaker announcement" className="h-full w-full object-cover" width="1000" height="1000" loading="lazy" decoding="async" />
              </figure>
            </div>
          </section>

          <Divider />

          <section id="outcome" className="scroll-mt-28 flex flex-col gap-10" data-reveal>
            <div className="case-study-outcome flex flex-col gap-2 rounded-[24px] p-6 sm:p-8">
              <SectionLabel>Final Outcome</SectionLabel>
              <h2 className="type-heading-h4">One conference. One recognizable brand.</h2>
              <div className="type-body flex flex-col gap-2">
                <p>The final identity unified every stage of HYFI from early marketing campaigns to the live event experience.</p>
                <p>Because the system emphasized reusable design foundations rather than individual graphics, new deliverables could be produced quickly while maintaining a consistent visual language across every audience touchpoint.</p>
                <p>The project demonstrated how design systems can extend beyond digital products to shape large-scale brand experiences.</p>
              </div>
            </div>

            <figure className="aspect-[968/656] overflow-hidden rounded-[16px] sm:rounded-[24px]">
              <img src="/images/hyfi/hyfi-outcome-1.avif" alt="HYFI 2024 digital campaign system" className="h-full w-full object-cover object-top" width="1936" height="1377" loading="lazy" decoding="async" />
            </figure>
            <figure className="aspect-[968/774] overflow-hidden rounded-[16px] sm:rounded-[24px]">
              <img src="/images/hyfi/hyfi-outcome-2.avif" alt="HYFI 2024 speaker visual system" className="h-full w-full object-cover object-top" width="1936" height="1585" loading="lazy" decoding="async" />
            </figure>
          </section>

          <Divider />

          <section id="reflection" className="scroll-mt-28 flex flex-col gap-2" data-reveal>
            <SectionLabel>Reflection</SectionLabel>
            <h2 className="type-heading-h5">Consistency begins long before the final design.</h2>
            <div className="type-body flex flex-col gap-2">
              <p>Before HYFI, branding often felt like creating individual visuals. This project shifted that perspective.</p>
              <p>The strongest brands aren&apos;t built by making every asset unique. They&apos;re built by defining a system that allows every asset to feel connected.</p>
              <p>When the foundation is strong, consistency becomes a natural outcome rather than a final review process.</p>
            </div>
          </section>

          <Divider />

          <section className="flex flex-col gap-10" data-reveal>
            <div className="flex flex-col gap-2">
              <SectionLabel>Key Learnings</SectionLabel>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {learnings.map((item) => (
                  <article key={item.title} className="flex flex-col gap-3">
                    <h2 className="type-heading-h5">{item.title}</h2>
                    <p className="type-body">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="group/gallery hyfi-learning-gallery grid grid-cols-2 gap-4 px-1 py-6 sm:relative sm:block sm:h-[430px] sm:px-0 sm:py-0 lg:h-[500px]">
              {learningImages.map((src, index) => {
                const number = index + 1;
                return (
                  <figure
                    key={src}
                    className={`hyfi-learning-card group relative rounded-[16px] border border-[var(--color-border-default)] bg-[var(--case-study-card-bg)] p-2 shadow-[0_2px_4px_rgba(0,0,0,0.06),0_10px_12px_-2px_rgba(0,0,0,0.10),0_20px_36px_-12px_rgba(0,0,0,0.16)] transition-[transform,box-shadow,opacity,background-color,border-color] duration-[640ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:z-50 hover:shadow-[0_4px_8px_rgba(0,0,0,0.08),0_18px_24px_-4px_rgba(0,0,0,0.16),0_30px_48px_-14px_rgba(0,0,0,0.22)] sm:absolute sm:left-1/2 sm:top-1/2 sm:w-[48%] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:group-hover/gallery:rotate-0 ${learningCardStyles[number - 1]}`}
                  >
                    <div className="aspect-[640/529] overflow-hidden rounded-[12px]">
                      <img
                        src={src}
                        alt={`HYFI 2024 event experience ${number}`}
                        className="h-full w-full rounded-[12px] object-cover transition-transform duration-[640ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.03]"
                        width="640"
                        height="529"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </figure>
                );
              })}
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}
