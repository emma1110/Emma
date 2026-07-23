const networkStats = [
  {
    value: "944,815",
    label: "Blocks",
    detail: "Last 9m2s",
  },
  {
    value: "1029.30 EH/s",
    label: "Network Hashrate",
  },
  {
    value: "0.000018",
    label: "Average Feee",
  },
  {
    value: "41",
    label: "Pending Transactions",
  },
];

export function NativeCoin() {
  return (
    <section className="nativeCoin">
      <div className="nativeCoinHeading">
        <h2>
          BCR - The Bitcore
          <br />
          native coin
        </h2>
        <p>
          BCR powers mining rewards, staking yields, and future governance across
          Bitcore.
        </p>
      </div>

      <div className="nativeCoinPanel">
        <div className="nativeCoinMarket">
          <div className="nativeCoinMarketHeader">
            <div className="nativeCoinIdentity">
              <span className="nativeCoinLogo">
                <img src="/bitcore-assets/bcr-logo.svg" alt="" width="24" height="30" />
              </span>
              <div>
                <div className="nativeCoinName">
                  <strong>Bitcore</strong>
                  <span>BRC</span>
                </div>
                <div className="nativeCoinPrice">
                  <strong>$71,116.16</strong>
                  <span>-0.95%</span>
                  <span>-679.66</span>
                </div>
              </div>
            </div>
            <img
              className="nativeCoinArrow"
              src="/bitcore-assets/bcr-arrow.svg"
              alt=""
              width="22"
              height="22"
            />
          </div>

          <img
            className="nativeCoinPriceChart"
            src="/bitcore-assets/bcr-price-chart.svg"
            alt="BCR price chart"
            width="530"
            height="216"
          />

          <div className="nativeCoinStats">
            {networkStats.map((stat) => (
              <div className="nativeCoinStat" key={stat.label}>
                <strong>{stat.value}</strong>
                <div>
                  <span>{stat.label}</span>
                  {stat.detail && (
                    <>
                      <img
                        src="/bitcore-assets/bcr-stat-dot.svg"
                        alt=""
                        width="4"
                        height="4"
                      />
                      <span>{stat.detail}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="nativeCoinDistribution">
          <img
            className="nativeCoinPie"
            src="/bitcore-assets/bcr-distribution-chart.svg"
            alt="BCR allocation between mining rewards and genesis"
            width="306"
            height="306"
          />
          <div className="nativeCoinLegend">
            <span>
              <img
                src="/bitcore-assets/bcr-mining-dot.svg"
                alt=""
                width="8"
                height="8"
              />
              Mining Rewards
            </span>
            <span>
              <img
                src="/bitcore-assets/bcr-genesis-dot.svg"
                alt=""
                width="8"
                height="8"
              />
              Genesis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
