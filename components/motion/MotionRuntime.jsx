"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function MotionRuntime() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetScroll = () => {
      window.scrollTo(0, 0);
    };

    resetScroll();
    window.addEventListener("pageshow", resetScroll);

    return () => {
      window.removeEventListener("pageshow", resetScroll);
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    document.documentElement.classList.toggle("motion-reduce", reduced);
    document.documentElement.classList.add("motion-ready");

    if (reduced) {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        el.classList.add("is-visible");
      });
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
