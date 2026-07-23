const explorerFeatures = [
  {
    icon: "/bitcore-assets/icon-block-browser.svg",
    title: "Block browser",
    description:
      "View block height, timestamp, miner count, rewards, and transaction totals in real time.",
  },
  {
    icon: "/bitcore-assets/icon-transaction-lookup.svg",
    title: "Transaction lookup",
    description:
      "Search any transaction hash for full details: sender, receiver, amount, block confirmation, and fee.",
  },
  {
    icon: "/bitcore-assets/icon-address-lookup.svg",
    title: "Address lookup",
    description:
      "View any wallet's complete history, including balance, staking status, and mining eligibility.",
  },
  {
    icon: "/bitcore-assets/icon-network-stats.svg",
    title: "Network stats",
    description:
      "Live metrics covering total active miners, BCR distributed today, current block height, and circulating supply.",
  },
];

const transactions = [
  ["bddd6-966cc", "10:45:12", "0.00132547 BRC", "$90.20"],
  ["bddd7-966cc", "10:45:30", "0.00145678 BRC", "$92.75"],
  ["bddd8-966cc", "10:45:45", "0.00120234 BRC", "$85.00"],
  ["bddd9-966cc", "10:46:00", "0.00156789 BRC", "$95.50"],
  ["bddea-966cc", "10:46:15", "0.00167890 BRC", "$97.10"],
  ["bddeb-966cc", "10:46:30", "0.00178901 BRC", "$99.99"],
  ["bddec-966cc", "10:46:45", "0.00189012 BRC", "$102.20"],
  ["bdded-966cc", "10:47:00", "0.00191234 BRC", "$104.35"],
  ["bddee-966cc", "10:47:15", "0.00200123 BRC", "$106.40"],
  ["bddef-966cc", "10:47:30", "0.00212345 BRC", "$108.50"],
  ["bddeg-966cc", "10:47:45", "0.00220567 BRC", "$110.75"],
  ["bddeh-966cc", "10:48:00", "0.00234578 BRC", "$112.00"],
];

function ExplorerFeature({
  feature,
}: {
  feature: (typeof explorerFeatures)[number];
}) {
  return (
    <article className="explorerFeature">
      <img src={feature.icon} alt="" width="24" height="24" />
      <div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </article>
  );
}

export function OnChainTransparency() {
  return (
    <section className="onChainTransparency">
      <div className="onChainHeading">
        <h2>
          Full on-chain
          <br />
          transparency
        </h2>
        <p>
          Every block, every transaction, every reward: publicly verifiable by
          anyone, at any time.
        </p>
      </div>

      <div className="explorerPanel">
        <div className="explorerFeatureColumn">
          <ExplorerFeature feature={explorerFeatures[0]} />
          <ExplorerFeature feature={explorerFeatures[1]} />
        </div>

        <div className="transactionsPreview">
          <div className="transactionsHeader">
            <div className="transactionsBrand">
              <span>
                <img
                  src="/bitcore-assets/transparency-logo.svg"
                  alt=""
                  width="24"
                  height="30"
                />
              </span>
              <div>
                <h3>Latest Transactions</h3>
                <p>Bitcore</p>
              </div>
            </div>
            <img
              className="transactionsArrow"
              src="/bitcore-assets/icon-arrow-right.svg"
              alt=""
              width="22"
              height="22"
            />
          </div>

          <div className="transactionsList">
            {transactions.map((transaction) => (
              <div className="transactionRow" key={transaction[0]}>
                <span>{transaction[0]}</span>
                <time>{transaction[1]}</time>
                <span>{transaction[2]}</span>
                <span>{transaction[3]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="explorerFeatureColumn">
          <ExplorerFeature feature={explorerFeatures[2]} />
          <ExplorerFeature feature={explorerFeatures[3]} />
        </div>
      </div>
    </section>
  );
}
