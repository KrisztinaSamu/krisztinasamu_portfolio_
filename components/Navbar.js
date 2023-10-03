"use client";

import Link from "next/link";
import navbar from "./Navbar.module.css";
import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <header className={navbar.headerContainer}>
      <nav className={navbar.navContainer}>
        <div className={navbar.logo}>
          <h1 className={navbar.navLinkItem}>
            <Link href="/" className={navbar.navLinkText}>
              Samu Krisztina
            </Link>
          </h1>
        </div>
        <div className={navbar.navLinks}>
          <ul className={active ?"active" : ""}>
            <li className={navbar.navLinkItem}>
              <Link href="/about" className={navbar.navLinkText}>
                Rólam
              </Link>
            </li>
            <li className={navbar.navLinkItem}>
              <Link href="/portfolio" className={navbar.navLinkText}>
                Portfólió
              </Link>
            </li>
            <li className={navbar.navLinkItem}>
              <Link href="/skills_and_tools" className={navbar.navLinkText}>
                Készségek és eszközök
              </Link>
            </li>
            <li className={navbar.navLinkItem}>
              <Link href="/feedback" className={navbar.navLinkText}>
                Visszacsatolás
              </Link>
            </li>
            <li className={navbar.navLinkItem}>
              <Link href="/contact" className={navbar.navLinkText}>
                Kapcsolat
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={() => setActive(!active)}>
          <div className={navbar.bar}></div>
          <div className={navbar.bar}></div>
          <div className={navbar.bar}></div>
        </button>
      </nav>
    </header>
  );
}
