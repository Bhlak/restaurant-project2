import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        Questions? <Link to="/contact">Contact Us</Link>
      </p>

      <div className="list-container">
        <span>
          <span className="address-span footer-details">
            <p>Address</p>
            <h4>No. 8, MKO Abiola Way, Ibadan</h4>
          </span>
          <span className="time-span footer-details">
            <p>Working Hours</p>
            <h4>Mon - Fri: 8am - 9pm</h4>
            <h4>Sat - Sunday: 1pm - 9pm</h4>
          </span>
        </span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.twitter.com" target={"_blank"}>
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target={"_blank"}>
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target={"_blank"}>
              Instagram
            </a>
          </li>
          <li>
            <a href="https://mail.google.com">Gmail</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
