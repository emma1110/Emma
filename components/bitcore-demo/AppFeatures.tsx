import { IngestingAnimation } from "@/components/bitcore-demo/IngestingAnimation";

const features = [
  {
    title: "Mining",
    description:
      "Earn an equal share of 75% of every block reward, distributed automatically to every eligible wallet, every 10 minutes.",
    icon: "/bitcore-assets/icon-mining.svg",
  },
  {
    title: "Staking",
    description:
      "Delegate your BCR to a validator and earn staking rewards on top of mining rewards. The more you stake, the more you earn.",
    icon: "/bitcore-assets/icon-staking.svg",
  },
  {
    title: "Exchange",
    description:
      "Buy and sell BCR/USDT at the exact price you set. No surprises, no slippage.",
    icon: "/bitcore-assets/icon-exchange.svg",
  },
  {
    title: "Wallet",
    description:
      "Your BCR, your keys. Store, send, and receive BCR with full visibility into every transaction and reward.",
    icon: "/bitcore-assets/icon-wallet.svg",
  },
];

function Feature({ feature }: { feature: (typeof features)[number] }) {
  return (
    <article className="appFeature">
      {/* Figma icons are already exported at their exact render size. */}
      <img src={feature.icon} alt="" width="24" height="24" />
      <div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </article>
  );
}

export function AppFeatures() {
  return (
    <section className="appFeatures" id="explore">
      <div className="appFeaturesHeading">
        <h2>
          Everything inside
          <br />
          the Bitcore app
        </h2>
        <p>
          One app for mining, staking, trading, and connecting with the community.
          <br />
          No third-party tools required.
        </p>
      </div>

      <div className="featuresGrid">
        <div className="featureColumn featureColumnLeft">
          <Feature feature={features[0]} />
          <Feature feature={features[1]} />
        </div>

        <div className="ingestingVisual">
          <IngestingAnimation />
        </div>

        <div className="featureColumn featureColumnRight">
          <Feature feature={features[2]} />
          <Feature feature={features[3]} />
        </div>

        <div className="socialFeature">
          <div className="socialCopy">
            <h3>Social</h3>
            <p>
              Connect with miners, traders, and builders, all inside the app. No
              need to go anywhere else.
            </p>
          </div>
          <img
            className="socialPhone"
            src="/bitcore-assets/bitcore-social-phone.svg"
            alt="Bitcore community feed inside the app"
            width="748"
            height="283"
          />
        </div>
      </div>
    </section>
  );
}
