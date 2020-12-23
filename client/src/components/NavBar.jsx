import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="navitems">
        <li>
          <Link activeClass="active" to="about" spy={true} smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="workexp" spy={true} smooth={true}>
            Work Experience
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
