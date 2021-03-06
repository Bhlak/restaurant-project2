import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <span className="name-span">E N O R M I C O</span>
      <ul className="nav-links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/products">PRODUCTS</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
      <span className="reservation-span">
        <Link to="/contact">Reservation</Link>
      </span>
      <div className="icons-container">
        <span className="social-icons">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </span>
        <span className="social-icons">
          <a href="https://www.twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
