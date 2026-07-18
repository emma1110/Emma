"use client";

import { useEffect, useState } from "react";

type Section = {
  id: string;
  label: string;
};

type CaseStudySidebarProps = {
  sections: readonly Section[];
  nextHref: string;
};

export default function CaseStudySidebar({ sections, nextHref }: CaseStudySidebarProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const [indicatorOffset, setIndicatorOffset] = useState(0);
  const [indicatorHeight, setIndicatorHeight] = useState(0);

  useEffect(() => {
    let frame: number | null = null;

    const updateActiveSection = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 160;
        for (let index = sections.length - 1; index >= 0; index -= 1) {
          const element = document.getElementById(sections[index].id);
          if (element && scrollPosition >= element.offsetTop) {
            setActiveSection(sections[index].id);
            break;
          }
        }
        frame = null;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [sections]);

  useEffect(() => {
    const activeLink = document.getElementById(`case-nav-${activeSection}`);
    if (!activeLink) return;
    const markerHeight = 14;
    setIndicatorOffset(activeLink.offsetTop + activeLink.offsetHeight / 2 - markerHeight / 2);
    setIndicatorHeight(markerHeight);
  }, [activeSection]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    window.scrollTo({ top: element.offsetTop - 110, behavior: "smooth" });
  };

  return (
    <aside className="sticky top-28 hidden w-[180px] shrink-0 flex-col gap-8 pt-4 lg:flex">
      <div className="flex gap-4">
        <div className="relative w-[1.5px] rounded-full bg-[var(--footer-border)]">
          <div
            className="absolute left-0 w-[1.5px] rounded-full bg-[var(--color-text-inverse)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              height: `${indicatorHeight}px`,
              transform: `translateY(${indicatorOffset}px)`,
            }}
          />
        </div>

        <ul className="relative flex w-full flex-col gap-[6px]">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                id={`case-nav-${section.id}`}
                href={`#${section.id}`}
                onClick={(event) => handleClick(event, section.id)}
                className={`type-caption block py-[3px] transition-all duration-200 ${
                  activeSection === section.id
                    ? "font-bold text-[var(--color-text-inverse)]"
                    : "text-[var(--text-muted)] opacity-60 hover:opacity-100"
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}

          <li className="mt-[12px]">
            <a
              href={nextHref}
              className="type-caption flex items-center gap-[6px] py-[3px] text-[var(--text-muted)] opacity-60 transition-all duration-200 hover:opacity-100"
            >
              <span>Next Project</span>
              <svg className="size-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
