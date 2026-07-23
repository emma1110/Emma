"use client";

import Image from "next/image";
import { useState } from "react";

const links = ["Home", "Exchange", "Explore", "Build", "Community"];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <a className="brand" href="#" aria-label="BitCore home">
        <span className="brandMark">
          <Image src="/bitcore-assets/bitcore-mark.svg" alt="" width={15} height={19} />
        </span>
        <span>BitCore</span>
      </a>

      <button
        className="menuButton"
        type="button"
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav className={open ? "nav navOpen" : "nav"} aria-label="Main navigation">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
      </nav>

      <a className="button buttonSmall launchButton" href="#launch">
        Launch App
      </a>
    </header>
  );
}
