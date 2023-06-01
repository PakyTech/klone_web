import React from "react";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  
  return (
    <div className="container-fluid">
      <div className="footer-info">
        <div className="logo-icon">
          <h3>logo</h3>
        </div>
        <div className="footer-link">
          <ul>
            <li>
              <a href="/reservation">Reservation Guarantees</a>
            </li>
            <li>
              <a href="/terms-and-condition">Terms and Conditions</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul>
            <li><a href="/instagram">{BsFacebook}</a></li>
            <li>B</li>
            <li>C</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
