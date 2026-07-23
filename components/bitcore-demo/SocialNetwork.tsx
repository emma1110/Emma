const socialFeatures = [
  {
    icon: "/bitcore-assets/social-feed.svg",
    title: "Feed & Trending",
    description:
      "Your personalized feed and trending crypto discussions, all in one place.",
  },
  {
    icon: "/bitcore-assets/social-post.svg",
    title: "Post, react, and follow",
    description:
      "Share insights, react to posts, and follow the voices you trust.",
  },
  {
    icon: "/bitcore-assets/social-chat.svg",
    title: "Integrated chat",
    description:
      "Message anyone on the network directly, anytime, from inside the app instantly.",
  },
  {
    icon: "/bitcore-assets/social-notifications.svg",
    title: "Real-time notifications",
    description:
      "Stay updated on replies, mentions, follows, and community activity.",
  },
];

export function SocialNetwork() {
  return (
    <section className="socialNetwork" id="community">
      <div className="socialNetworkHeading">
        <h2>
          Built-in Crypto
          <br />
          Social Network
        </h2>
        <p>
          Follow users, share insights, and stay updated without leaving the app.
        </p>
      </div>

      <div className="socialNetworkGrid">
        {socialFeatures.map((feature) => (
          <article className="socialNetworkFeature" key={feature.title}>
            <img src={feature.icon} alt="" width="109" height="109" />
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
