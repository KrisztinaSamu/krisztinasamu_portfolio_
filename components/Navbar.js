"use client";

import Link from "next/link";
import Image from "next/image";
import navbar from "../styles/Navbar.module.css";
import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  function handleNav() {
    setActive(!active);
  }

  return (
    <header className={navbar.headerContainer}>
      <nav className={navbar.navContainer}>
        <div className={navbar.logoBox}>
          <h1>
            <Link href="/" className={navbar.navLinkText}>
              <Image
                src="/images/logo.png"
                alt="my-logo"
                width={100}
                height={50}
              />
            </Link>
          </h1>
        </div>

        <div className={`${navbar.navLinks} ${active ? navbar.active : ""}`}>
          <ul className={navbar.navLinksUl} onClick={handleNav}>
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

        <button
          className={`${navbar.hamburgerMenuBtn} ${
            active ? navbar.active : ""
          }`}
          onClick={handleNav}
        >
          <div className={navbar.bar}></div>
          <div className={navbar.bar}></div>
          <div className={navbar.bar}></div>
        </button>
      </nav>
    </header>
  );
}
