import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a className="nav-link" href="/">
          <span className="symbol">&lt;</span> Harish M K <span className="symbol">/&gt;</span>
        </a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#landing" onClick={(e) => handleScroll(e, 'landing')}>About</a></li>
        <li><a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a></li>
        <li><a href="#education" onClick={(e) => handleScroll(e, 'education')}>Education</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a></li>
      </ul>

      <div className="nav-connect">
        <a href="https://github.com/harish0104-tech" className="github-btn" target="_blank" rel="noopener noreferrer">
          Github Profile
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
