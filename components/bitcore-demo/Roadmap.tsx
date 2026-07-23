const phases = [
  {
    phase: "PHASE 1",
    title: "Foundation",
    items: [
      "Core protocol architecture",
      "BCR coin deployment",
      "Mining engine launch",
      "Wallet integration",
    ],
    className: "roadmapPhaseOne",
  },
  {
    phase: "PHASE 2",
    title: "Growth",
    items: [
      "Staking protocol live",
      "Social feed & chats",
      "Explorer & analytics",
      "Notifications layer",
      "In-app exchange",
    ],
    className: "roadmapPhaseTwo",
  },
  {
    phase: "PHASE 3",
    title: "Expansion",
    items: [
      "CEX & DEX listing",
      "Smart contract deployment",
      "Full SDK & API release",
      "Cross-chain bridging",
      "Advanced staking tiers",
    ],
    className: "roadmapPhaseThree",
  },
  {
    phase: "PHASE 4",
    title: "Decentralization",
    items: [
      "On-chain governance",
      "Validator node program",
      "Protocol DAO transition",
      "Full open-source release",
    ],
    className: "roadmapPhaseFour",
  },
];

export function Roadmap() {
  return (
    <section className="roadmap" id="build">
      <div className="roadmapHeading">
        <h2>
          Built in phases,
          <br />
          designed to scale
        </h2>
        <p>
          Bitcore is built to grow. Each phase expands what participants can do
          and own.
        </p>
      </div>

      <div className="roadmapPhases">
        {phases.map((phase) => (
          <article
            className={`roadmapPhase ${phase.className}`}
            key={phase.phase}
          >
            <div className="roadmapPhaseCopy">
              <span>{phase.phase}</span>
              <div>
                <h3>{phase.title}</h3>
                <ul>
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="roadmapBar" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}
