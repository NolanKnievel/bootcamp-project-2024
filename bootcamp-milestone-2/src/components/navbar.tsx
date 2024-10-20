import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to 
    // change all the "class" to "className"
    <header className={style.navbar} >
        <nav className="navbar">
        <h1 className="logo"><a href="index.html">&ltNolanKnievel&gt</a></h1>
        <ul className="nav-list">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="resume.html">Resume</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="blog.html">Blog</a></li>
        </ul>
        </nav>
    </header>
  );
}