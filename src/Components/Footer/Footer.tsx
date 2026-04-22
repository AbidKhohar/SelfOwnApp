import React from 'react';
import './Footer.css';
import { FaGithub, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row mb-5">
          {/* Column 1 - Logo & Description */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="footer-logo">≡ SELFOWN</h5>
            <p className="footer-description">
              In an ideal world this text wouldn't exist, a client would acknowledge the importance of having web copy before the design starts.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" title="Facebook">
                <i className="fab fa-facebook"><FaFacebook/></i>
              </a>
              <a href="#" className="footer-social-link" title="Twitter">
                <i className="fab fa-twitter"><FaTwitter/></i>
              </a>
              <a href="#" className="footer-social-link" title="GitHub">
                <i className="fab fa-github"><FaGithub/></i>
              </a>
              <a href="#" className="footer-social-link" title="Instagram">
                <i className="fab fa-instagram"><FaInstagram/></i>
              </a>
            </div>
          </div>

          {/* Column 2 - Company Links */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h6 className="footer-title">Company</h6>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
            </ul>
          </div>

          {/* Column 3 - Information Links */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h6 className="footer-title">Information</h6>
            <ul className="footer-links">
              <li><a href="/resume">Resume</a></li>
              <li><a href="#testimonials">Client Say</a></li>
              <li><a href="/projects">Projects</a></li>
            </ul>
          </div>

          {/* Column 4 - More Info */}
          <div className="col-md-3">
            <h6 className="footer-title">More info</h6>
            <ul className="footer-links">
              <li><a href="/blogs">Blogs</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="#">Terms & condition</a></li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Footer Bottom */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="footer-copyright">
              © 2026 Selfown. Created with <i className="fas fa-heart" style={{ color: '#ff1654' }}></i> by Mannatthemes
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="footer-terms">- Terms & condition *</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
