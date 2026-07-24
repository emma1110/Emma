"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PlayScene from "./PlayScene";
import styles from "./PlayHero.module.css";

export default function PlayHero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    const context = gsap.context(() => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const stageObjects = gsap.utils.toArray<HTMLElement>("[data-stage]");
      const stageDots = gsap.utils.toArray<HTMLElement>("[data-stage-dot]");

      if (reducedMotion) {
        gsap.set(stageObjects, { autoAlpha: 0 });
        gsap.set("[data-stage='introduction']", { autoAlpha: 1, scale: 1 });
        gsap.set("[data-story-line]", { strokeDashoffset: 0 });
        gsap.set("[data-apple-pencil]", { autoAlpha: 0 });
        gsap.set("[data-scroll-instruction]", { autoAlpha: 0 });
        gsap.set("[data-final-transition]", { autoAlpha: 0 });
        return;
      }

      gsap.set(stageObjects, { autoAlpha: 0, scale: 0.86, transformOrigin: "50% 50%" });
      gsap.set("[data-story-line]", { strokeDasharray: 1, strokeDashoffset: 1 });
      gsap.set("[data-first-dot]", { scale: 0, transformOrigin: "50% 50%" });
      gsap.set("[data-camera-flash]", { autoAlpha: 0 });
      gsap.set("[data-final-transition]", { autoAlpha: 0, scale: 0.94 });
      gsap.set(stageDots, { opacity: 0.35 });
      gsap.set(stageDots[0], { opacity: 1 });

      const isMobile = window.matchMedia("(max-width: 639px)").matches;
      const scrollScreens = isMobile ? 6.5 : 8.2;

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: () => `+=${window.innerHeight * scrollScreens}`,
          pin: true,
          scrub: 0.55,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const activateDot = (index: number, position: number) => {
        timeline.to(stageDots, { opacity: 0.35, duration: 0.08 }, position)
          .to(stageDots[index], { opacity: 1, duration: 0.08 }, position);
      };

      timeline
        .to("[data-scroll-instruction]", { autoAlpha: 0, y: 12, duration: 0.35 }, 0.35)
        .to("[data-first-dot]", { scale: 1, duration: 0.28 }, 0.55)
        .to("[data-story-line]", { strokeDashoffset: 0.82, duration: 0.8 }, 0.55)
        .to("[data-apple-pencil]", {
          motionPath: { path: "#story-line", align: "#story-line", alignOrigin: [0.04, 0.5], autoRotate: true, start: 0, end: 0.17 },
          duration: 0.8,
        }, 0.55);
      activateDot(1, 0.55);

      timeline
        .to("[data-stage='fish']", { autoAlpha: 1, scale: 1, duration: 0.32 }, 1.32)
        .to("[data-stage='fish']", { xPercent: 7, duration: 0.7 }, 1.58)
        .to("[data-story-line]", { strokeDashoffset: 0.66, duration: 0.9 }, 1.32)
        .to("[data-apple-pencil]", {
          motionPath: { path: "#story-line", align: "#story-line", alignOrigin: [0.04, 0.5], autoRotate: true, start: 0.17, end: 0.34 },
          duration: 0.9,
        }, 1.32);
      activateDot(2, 1.32);

      timeline
        .to("[data-stage='fish']", { scaleX: 1.35, scaleY: 0.45, xPercent: 16, autoAlpha: 0, duration: 0.5 }, 2.25)
        .to("[data-stage='book']", { autoAlpha: 1, scale: 1, duration: 0.55 }, 2.33)
        .fromTo("#book-lifting-page", { rotate: 0, transformOrigin: "210px 76px" }, { rotate: -15, y: -12, duration: 0.55 }, 2.42)
        .to("[data-story-line]", { strokeDashoffset: 0.52, duration: 0.9 }, 2.25)
        .to("[data-apple-pencil]", {
          motionPath: { path: "#story-line", align: "#story-line", alignOrigin: [0.04, 0.5], autoRotate: true, start: 0.34, end: 0.48 },
          duration: 0.9,
        }, 2.25);
      activateDot(3, 2.25);

      timeline
        .to("[data-stage='book']", { xPercent: -24, yPercent: 25, scale: 0.65, opacity: 0.35, duration: 0.7 }, 3.18)
        .to("[data-stage='plane']", { autoAlpha: 1, scale: 1, xPercent: -36, yPercent: 26, duration: 0.22 }, 3.18)
        .to("[data-stage='plane']", { xPercent: 72, yPercent: -32, rotate: -8, duration: 0.85 }, 3.35)
        .to("[data-story-line]", { strokeDashoffset: 0.4, duration: 0.9 }, 3.18)
        .to("[data-apple-pencil]", {
          motionPath: { path: "#story-line", align: "#story-line", alignOrigin: [0.04, 0.5], autoRotate: true, start: 0.48, end: 0.61 },
          duration: 0.9,
        }, 3.18);
      activateDot(4, 3.18);

      timeline
        .to("[data-stage='book']", { autoAlpha: 0, duration: 0.24 }, 4.08)
        .to("[data-stage='plane']", { scale: 0.55, xPercent: 98, yPercent: 4, rotate: 18, duration: 0.45 }, 4.08)
        .to("[data-stage='camera']", { autoAlpha: 1, scale: 1, duration: 0.42 }, 4.15)
        .to("[data-camera-flash]", { autoAlpha: 1, duration: 0.08 }, 4.62)
        .to("[data-camera-flash]", { autoAlpha: 0, duration: 0.16 }, 4.72)
        .to("[data-stage='plane']", { autoAlpha: 0, duration: 0.1 }, 4.55)
        .to("[data-story-line]", { strokeDashoffset: 0.3, duration: 0.8 }, 4.08)
        .to("[data-apple-pencil]", {
          motionPath: { path: "#story-line", align: "#story-line", alignOrigin: [0.04, 0.5], autoRotate: true, start: 0.61, end: 0.72 },
          duration: 0.8,
        }, 4.08);
      activateDot(5, 4.08);

      timeline
        .to("[data-stage='camera']", { autoAlpha: 0, scale: 1.08, duration: 0.2 }, 4.94)
        .to("[data-story-line]", { opacity: 0.14, duration: 0.25 }, 4.94)
        .to("[data-stage='notes']", { autoAlpha: 1, scale: 1, duration: 0.3 }, 5.16)
        .fromTo(".idea-note", { y: -80, opacity: 0, rotate: -14 }, { y: 0, opacity: 1, rotate: 0, stagger: 0.06, duration: 0.4 }, 5.16)
        .to("[data-story-line]", { strokeDashoffset: 0.2, duration: 0.8 }, 4.94)
        .to("[data-apple-pencil]", {
          motionPath: { path: "#story-line", align: "#story-line", alignOrigin: [0.04, 0.5], autoRotate: true, start: 0.72, end: 0.82 },
          duration: 0.8,
        }, 4.94);
      activateDot(6, 5.16);

      timeline
        .to(".idea-note", { x: 0, y: 0, rotate: 0, scale: 0.35, opacity: 0, stagger: 0.04, duration: 0.4 }, 5.82)
        .to("[data-stage='notes']", { autoAlpha: 0, duration: 0.16 }, 6.18)
        .to("[data-stage='wireframe']", { autoAlpha: 1, scale: 1, duration: 0.48 }, 5.88)
        .fromTo(".wire-card", { y: 35 }, { y: 0, stagger: 0.05, duration: 0.35 }, 5.98)
        .to("[data-story-line]", { strokeDashoffset: 0.12, duration: 0.7 }, 5.82)
        .to("[data-apple-pencil]", {
          motionPath: { path: "#story-line", align: "#story-line", alignOrigin: [0.04, 0.5], autoRotate: true, start: 0.82, end: 0.9 },
          duration: 0.7,
        }, 5.82);
      activateDot(7, 5.82);

      timeline
        .to("[data-stage='wireframe']", { opacity: 0, scale: 1.03, duration: 0.45 }, 6.65)
        .to("[data-stage='product']", { autoAlpha: 1, scale: 1, duration: 0.5 }, 6.65)
        .fromTo(".polished-part", { scale: 0.75, transformOrigin: "50% 50%" }, { scale: 1, stagger: 0.05, duration: 0.4 }, 6.7)
        .to("[data-story-line]", { strokeDashoffset: 0.05, duration: 0.65 }, 6.65)
        .to("[data-apple-pencil]", {
          motionPath: { path: "#story-line", align: "#story-line", alignOrigin: [0.04, 0.5], autoRotate: true, start: 0.9, end: 0.96 },
          duration: 0.65,
        }, 6.65);
      activateDot(7, 6.65);

      timeline
        .to("[data-stage='product']", { autoAlpha: 0, scale: 1.12, duration: 0.42 }, 7.42)
        .to("[data-story-line]", { autoAlpha: 0, duration: 0.32 }, 7.42)
        .to("[data-stage='introduction']", { autoAlpha: 1, scale: 1, duration: 0.55 }, 7.48)
        .fromTo(".final-shape", { scale: 0, transformOrigin: "50% 50%" }, { scale: 1, stagger: 0.04, duration: 0.35 }, 7.5)
        .to("[data-story-line]", { strokeDashoffset: 0, duration: 0.55 }, 7.42)
        .to("[data-apple-pencil]", {
          motionPath: { path: "#story-line", align: "#story-line", alignOrigin: [0.04, 0.5], autoRotate: true, start: 0.96, end: 1 },
          autoAlpha: 0,
          duration: 0.55,
        }, 7.42);
      activateDot(8, 7.42);

      timeline
        .to("[data-play-device]", { scale: isMobile ? 1.18 : 1.42, duration: 0.72, ease: "power2.inOut" }, 8.18)
        .to("[data-emma-character]", { yPercent: -28, opacity: 0, duration: 0.45 }, 8.18)
        .to("[data-final-transition]", { autoAlpha: 1, scale: 1, duration: 0.62, ease: "power2.out" }, 8.5)
        .to({}, { duration: 0.5 });
    }, hero);

    return () => context.revert();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Emma's creative play story">
      <PlayScene />
    </section>
  );
}
