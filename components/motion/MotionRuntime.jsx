"use client";

import { useEffect } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function MotionRuntime() {
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

    const observed = new WeakSet();
    const scan = () => {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        revealObserver.observe(el);
      });
    };

    scan();
    const timers = [120, 500, 1200].map((delay) => window.setTimeout(scan, delay));

    return () => {
      revealObserver.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return null;
}
