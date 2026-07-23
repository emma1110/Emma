const tradingFeatures = [
  {
    title: "Limit-only order book",
    description:
      "Set your exact price for BCR/USDT. Your order fills at that price or not at all.",
  },
  {
    title: "BCR/USDT pair",
    description:
      "One focused trading pair keeps liquidity concentrated and spreads tight.",
  },
  {
    title: "USDT bridge",
    description:
      "Move USDT in from any supported external network in minutes.",
  },
  {
    title: "Non-custodial settlement",
    description:
      "Every filled order settles directly to your wallet. Bitcore never touches your funds.",
  },
];

export function TradePrecision() {
  return (
    <section className="tradePrecision" id="exchange">
      <div className="tradeBackdrop" aria-hidden="true">
        <img
          className="tradeMesh"
          src="/bitcore-assets/trade-mesh.png"
          alt=""
          width="2147"
          height="2147"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="tradeContent">
        <div className="tradeIntro">
          <h2>Trade BCR with Precision</h2>
          <p>A native on-chain exchange built for clarity and control</p>
        </div>

        <div className="tradeFeatures">
          {tradingFeatures.map((feature) => (
            <article key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
