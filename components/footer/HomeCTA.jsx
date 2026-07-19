export default function HomeCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="home-cta-title"
      className="w-full bg-[var(--bg-color)] transition-colors duration-300"
    >
      <div
        className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-10 px-4 py-10 text-center sm:items-start sm:px-8 sm:py-16 sm:text-left lg:min-h-[527px] lg:flex-row lg:items-center lg:gap-16 lg:px-[80px] lg:py-[80px]"
        data-reveal
      >
        <div className="flex max-w-[720px] flex-col items-center gap-6 sm:items-start">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <h2
              id="home-cta-title"
              className="text-[clamp(27px,8vw,60px)] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--color-text-inverse)]"
            >
              <span className="block">Let&apos;s build</span>
              <span className="block whitespace-nowrap">something people love.</span>
            </h2>
            <p className="type-body-lg-medium max-w-[607px] text-center text-[var(--color-text-secondary)] sm:text-left">
              I&apos;m always interested in thoughtful products, ambitious teams,
              and meaningful conversations.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/lan-anh-nguyen-a07961213/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-text-inverse)] px-6 py-3 type-heading-h6 text-[var(--color-text-primary)] transition-[transform,opacity] duration-200 hover:opacity-80 active:scale-95"
            data-magnetic
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="shrink-0"
            >
              <rect x="2" y="2" width="20" height="20" rx="2.5" />
              <path
                fill="var(--color-text-inverse)"
                d="M7.38 9.45H4.72V18h2.66V9.45Zm.18-2.64c0-.85-.69-1.54-1.54-1.54s-1.54.69-1.54 1.54.69 1.54 1.54 1.54 1.54-.69 1.54-1.54ZM18.02 13.1c0-2.58-1.38-3.78-3.22-3.78-1.48 0-2.15.82-2.52 1.39V9.45H9.62V18h2.66v-4.24c0-1.12.21-2.21 1.6-2.21 1.37 0 1.39 1.28 1.39 2.28V18h2.66l.09-4.9Z"
              />
            </svg>
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
