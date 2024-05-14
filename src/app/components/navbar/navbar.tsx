"use client";
import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/app/components/heropage";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null); // Specify the type explicitly

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      toggleMenu(); // Close menu after scrolling
    }
  };

  const handleClick = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Prevent default Link behavior
    scrollToSection(sectionId);
  };


  return (
    <div className="header-section" id="header">
      <div className="container mx-auto px-2" ref={navbarRef}>
        <div className="navbar">
          <nav>
            <Link
              href="/"
              className=" flex text-[#16f2b3] text-3xl font-bold gap-2"
              style={{ fontSize: "1.9rem", cursor: "pointer" }}
            >
              <Image
                src="/images/myimages/arman_logo.png"
                width={200}
                height={200}
                alt="not shown"
                className={"p-2"}
              />
            </Link>

            <ul className={menuOpen ? "active" : ""}>

            

              <li>
                <Link href="#about"   onClick={handleClick("about")}>About</Link>
              </li>
              <li>
                <Link href="#skills" onClick={handleClick("skills")}>Skills</Link>
              </li>
              <li>
                <Link href="#experience"onClick={handleClick("experience")}>Experience</Link>
              </li>
              <li>
                <Link href="#projects" onClick={handleClick("projects")}>Projects</Link>
              </li>
              <li>
                <Link href="#education" onClick={handleClick("education")}>Education</Link>
              </li>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="text-white"
                onClick={toggleMenu}
              />
            </ul>
            <FontAwesomeIcon
              icon={faBars}
              onClick={toggleMenu}
              className="text-white"
            />
          </nav>
        </div>
        <HeroSection />
      </div>{" "}
    </div>
  );
}

export default Navbar;
