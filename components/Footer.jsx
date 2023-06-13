import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container footer my-2">
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
            <li>
              <a href="/instagram">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="/twitter">
                <BsTwitter />
              </a>
            </li>
            <li>
              <a href="/facebook">
                <BsFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
