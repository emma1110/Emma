const footerLinks = [
  "Whitepaper",
  "About us",
  "Blog",
  "Brand Kit",
  "Terms",
  "Privacy",
];

const socialLinks = [
  { label: "X", icon: "/bitcore-assets/footer-x.svg" },
  { label: "Telegram", icon: "/bitcore-assets/footer-telegram.svg" },
  { label: "Facebook", icon: "/bitcore-assets/footer-facebook.svg" },
  { label: "YouTube", icon: "/bitcore-assets/footer-youtube.svg" },
];

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footerInner">
        <div className="footerBrand">
          <a className="footerLogo" href="#" aria-label="BitCore home">
            <span>
              <img src="/bitcore-assets/footer-logo.svg" alt="" width="15" height="19" />
            </span>
            <strong>BitCore</strong>
          </a>
          <p>© 2026 Bitcore. All rights reserved.</p>
        </div>

        <div className="footerNavigation">
          <nav className="footerLinks" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a href="#footer" key={link}>
                {link}
              </a>
            ))}
          </nav>

          <div className="footerSocials">
            {socialLinks.map((social) => (
              <a
                href="#footer"
                key={social.label}
                aria-label={social.label}
              >
                <img src={social.icon} alt="" width="22" height="22" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
