import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import { FiAlignCenter } from "react-icons/fi";


function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <span className="logo-text"><FiAlignCenter /> SELFOWN</span>
          <a href="logo-dark.svg" ></a>
        </Link>

        {/* Toggle Button for Mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} 
                to="/services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`} 
                to="/resume"
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} 
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`} 
                to="/blogs"
              >
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Hire Me Button */}
          <div className="ms-lg-3">
            <Link to="/contact" className="btn btn-hire">
              Hire Me! {'>>'}
            </Link>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar