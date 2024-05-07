import React, { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import armanLogo from "../../images/myimages/arman_logo.png";
import HeroSection from "../heropage";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-section" id="header">
      <div className="container mx-auto px-2">
        <div className="navbar">
          <nav>
            <a
              href="/"
              className=" flex text-[#16f2b3] text-3xl font-bold gap-2"
              style={{ fontSize: "1.9rem", cursor: "pointer" }}
            >
              <img src={armanLogo} width={200} className={"p-2"} />
            </a>

            <ul className={menuOpen ? "active" : ""}>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#education">Education</a>
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
