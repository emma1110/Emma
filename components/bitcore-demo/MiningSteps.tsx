import Image from "next/image";

const steps = [
  {
    title: "Activate your wallet",
    body: "Complete one transaction on Bitcore to activate your wallet.",
  },
  {
    title: "Hold 100 BCR",
    body: "Purchase or receive BCR and keep at least 100 in your\u00A0wallet.",
  },
  {
    title: "Refer 2 friends",
    body: "Invite two people who each hold 100 BCR and transact\u00A0on-chain.",
  },
  {
    title: "Start earning",
    body: "Once all 3 steps are complete, your wallet earns block rewards automatically afterward.",
  },
];

export function MiningSteps() {
  return (
    <section className="mining" id="mining">
      <div className="coinWrap">
        <Image
          className="coin"
          src="/bitcore-assets/bitcore-coin.png"
          alt="A silver BitCore coin resting on translucent orange layers"
          width={2213}
          height={1733}
          priority
        />
      </div>

      <div className="stepsCard">
        <div className="stepsIntro">
          <h2>Four steps to<br />your first BCR</h2>
          <p>
            No hardware. No technical experience.<br />
            Just meet three simple on-chain requirements and start earning.
          </p>
        </div>

        <ol className="stepsList">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="stepNumber">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
