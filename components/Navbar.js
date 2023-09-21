import Link from "next/link";
import {
  headerContainer,
  navContainer,
  navLinks,
  navLinkItem,
  navLinkText,
  logo,
  bar,
  hamburgerMenu
  
} from "./Navbar.module.css";
import React, { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  return (
    <header className={headerContainer}>
      <nav className={navContainer}>
        <div className={`myElement ${isActive ? "active" : ""}`}>
          <div className={logo}>
            <h1 className={navLinkItem}>
              <Link href="/" className={navLinkText}>
                Samu Krisztina
              </Link>
            </h1>
          </div>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link href="/about" className={navLinkText}>
                Rólam
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link href="/portfolio" className={navLinkText}>
                Portfólió
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link href="/skills_and_tools" className={navLinkText}>
                Készségek és eszközök
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link href="/feedback" className={navLinkText}>
                Visszacsatolás
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link href="/contact" className={navLinkText}>
                Kapcsolat
              </Link>
            </li>
          </ul>
        </div>
        <div className={`hamburgerMenu ${isActive ? "active" : ""}`}>
          <button onClick={toggleClass}>
            <div className={bar}></div>
            <div className={bar}></div>
            <div className={bar}></div>
          </button>
        </div>
      </nav>
    </header>
  );
}
