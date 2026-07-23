"use client";

import { useEffect, useRef, useState } from "react";
import { CubeAnimation } from "@/components/bitcore-demo/CubeAnimation";

const stakingFeatures = [
  {
    title: "Browse & Compare Validators",
    description:
      "Review validator profiles, commission rates, and performance history before you delegate.",
  },
  {
    title: "Manage Staking",
    description:
      "Track your staked balance, monitor accrued rewards, and adjust delegations at any time.",
  },
  {
    title: "Claim & Stake with One Click",
    description:
      "Reinvest your staking rewards instantly. One tap is all it takes to keep compounding.",
  },
];

const cycleDuration = 4800;

export function StakingRewards() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const timer = window.setTimeout(() => {
      setActiveFeature((current) => (current + 1) % stakingFeatures.length);
    }, cycleDuration);

    return () => window.clearTimeout(timer);
  }, [activeFeature, isInView]);

  return (
    <section
      className={`stakingRewards${isInView ? " isRunning" : ""}`}
      id="staking"
      ref={sectionRef}
    >
      <div className="stakingRewardsInner">
        <div className="stakingRewardsContent">
          <div className="stakingRewardsHeading">
            <h2>Stake &amp; Earn Rewards</h2>
            <p>
              Put your BCR to work and help secure the network at the same time.
            </p>
          </div>

          <div className="stakingFeatureTabs">
            {stakingFeatures.map((feature, index) => {
              const isActive = index === activeFeature;

              return (
                <button
                  className={`stakingFeatureTab${isActive ? " isActive" : ""}`}
                  key={feature.title}
                  type="button"
                  onClick={() => setActiveFeature(index)}
                  aria-pressed={isActive}
                >
                  {isActive && <span className="stakingTabProgress" />}
                  <span className="stakingFeatureTitle">{feature.title}</span>
                  {isActive && (
                    <span className="stakingFeatureDescription">
                      {feature.description}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="stakingCube">
          <CubeAnimation />
        </div>
      </div>
    </section>
  );
}
