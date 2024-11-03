import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <nav className="navbar">
        <h1 className="logo">
          <a href="index.html">&ltNolanKnievel&gt</a>
        </h1>
        <ul className="nav-list">
          <li>
            <Link href="index.html">Home</Link>
          </li>
          <li>
            <Link href="about.html">About</Link>
          </li>
          <li>
            <Link href="resume.html">Resume</Link>
          </li>
          <li>
            <Link href="contact.html">Contact</Link>
          </li>
          <li>
            <Link href="blog.html">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
