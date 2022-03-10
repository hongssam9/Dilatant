import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../components/images/dilatant-logo.png";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="navbar" id="navbar">
      <div className="nav-content">

        <img src={logo} className="nav-logo" alt="Logo" onClick={scrollToTop} />

        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="overview"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              Overview
            </Link>
            </li>

            <li className="nav-item">
            <Link
              activeClass="active"
              to="report"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              Report
            </Link>
          </li>

          <li className="nav-item">
            <Link
              activeClass="active"
              to="info"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              Information
            </Link>
          </li> 
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
