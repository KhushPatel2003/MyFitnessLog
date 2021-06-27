import React from 'react';
import '../../styles/navbar.css'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar(){
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return(
        <nav className="nav" id="navbar">
        <div className="nav-content">
          <h1
            className="nav-logo"
            alt="Logo."
            onClick={scrollToTop}
          >
              Byte Size
          </h1>
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="info"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Info
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="video"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Video Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}