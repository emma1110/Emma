export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="heroTitle">
        <div className="networkBadge">
          <span>Live Network</span>
          <strong>125,847 Active Users</strong>
        </div>
        <h1>The Layer 1 Built<br />for Everyone to Mine</h1>
      </div>

      <div className="heroCopy">
        <p>
          Bitcore is a Layer 1 blockchain where every qualifying wallet earns an
          equal share of block rewards. Permissionless, transparent, and built
          on Cosmos SDK with full EVM compatibility.
        </p>
        <a className="button" href="#mining">
          Start Mining
        </a>
      </div>
    </section>
  );
}
