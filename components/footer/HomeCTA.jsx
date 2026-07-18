export default function HomeCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="home-cta-title"
      className="w-full bg-[var(--bg-color)] transition-colors duration-300"
    >
      <div
        className="mx-auto flex w-full max-w-[1440px] flex-col items-start justify-between gap-10 px-4 py-10 sm:px-8 sm:py-16 lg:min-h-[527px] lg:flex-row lg:items-center lg:gap-16 lg:px-[80px] lg:py-[80px]"
        data-reveal
      >
        <div className="flex max-w-[607px] flex-col items-start gap-6">
          <div className="flex flex-col gap-3">
            <h2
              id="home-cta-title"
              className="text-[clamp(27px,8vw,60px)] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--color-text-inverse)]"
            >
              <span className="block">Let&apos;s build</span>
              <span className="block whitespace-nowrap">something people love.</span>
            </h2>
            <p className="type-body-lg-medium max-w-[607px] text-[var(--color-text-secondary)]">
              I&apos;m always interested in thoughtful products, ambitious teams,
              and meaningful conversations.
            </p>
          </div>

          <a
            href="mailto:lananhnguyen.arena@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-text-inverse)] px-6 py-3 type-heading-h6 text-[var(--color-text-primary)] transition-[transform,opacity] duration-200 hover:opacity-80 active:scale-95"
            data-magnetic
          >
            Connect with me
          </a>
        </div>

        <img
          src="/images/footer-emma.svg"
          alt="Emma working on a laptop"
          width="374"
          height="367"
          loading="lazy"
          decoding="async"
          className="mx-auto h-auto w-full max-w-[280px] shrink-0 transition-[filter] duration-300 sm:max-w-[340px] lg:mx-0 lg:max-w-[374px]"
          style={{ filter: "var(--footer-art-filter)" }}
        />
      </div>
    </section>
  );
}
