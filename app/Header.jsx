import Link from "next/link";
import React from "react";
import "./styles/Header.css";

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="header-inner">
          <Link href="/">
            <img
              src="https://www.motorpointarenanottingham.com/ArticleMedia/Images/motorpoint%20logos/WEBSITE%20VERSION%20TWO.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <nav className="navbar">
        <Link href="/whatson">What's on</Link>
      </nav>
    </header>
  );
}

export default Header;
