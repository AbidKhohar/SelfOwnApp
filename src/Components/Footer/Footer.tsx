import React from "react";
import "./Footer.css";
import { FaGithub, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      
      {/* TOP WAVE */}
      {/* <div className="footer-wave">
        <svg viewBox="0 0 1440 120">
          <path
            fill="#0f172a"
            d="M0,40 C300,100 1100,0 1440,60 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div> */}

      <div className="container py-5">
        <div className="row mb-5">
          
          {/* Column 1 */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-logo">
              <img
                src="https://mannatthemes.com/selfown/default/images/logo-sm.png"
                alt="logo"
              />
              SELFOWN
            </h5>

            <p className="footer-description">
              In an ideal world this text wouldn't exist, a client would acknowledge
              the importance of having web copy before the design starts.
            </p>

            <div className="footer-social">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaGithub /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">Company</h6>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 mb-4">
            <h6 className="footer-title">Information</h6>
            <ul className="footer-links">
              <li><a href="/resume">Resume</a></li>
              <li><a href="#">Client Say</a></li>
              <li><a href="/projects">Projects</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3">
            <h6 className="footer-title">More Info</h6>
            <ul className="footer-links">
              <li><a href="/blogs">Blogs</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="#">Terms & Condition</a></li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3">
            <p className="footer-copy">
              © 2026 Selfown. Created with ❤️ by Mannatthemes
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="footer-terms">
              - Terms & condition *
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;