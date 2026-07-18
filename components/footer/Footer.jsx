export default function Footer() {
  const links = [
    { label: "Linkedin", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Resume", href: "#" },
  ];

  return (
    <footer
      className="w-full bg-[var(--bg-color)] transition-colors duration-450"
    >
      <div
        className="mx-auto flex w-full max-w-[1440px] flex-col items-start justify-between gap-6 px-4 py-10 sm:px-8 sm:py-16 md:flex-row md:items-center lg:px-[80px] lg:py-[80px]"
        data-reveal
      >
        <p className="type-heading-h6 text-[var(--color-text-inverse)]">
          Built with Codex
        </p>

        <nav
          aria-label="Footer links"
          className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8 lg:gap-x-12"
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="type-heading-h6 text-[var(--color-text-inverse)] transition-opacity hover:opacity-60"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
