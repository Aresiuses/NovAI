import React, { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-main">
          {/* Logo Section */}
          <div className="navbar-logo">
            <Code className="logo-icon" />
            <span className="logo-text">NovAI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="navbar-desktop">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('team')} className="nav-link">Team</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={toggleMenu} 
            className="navbar-mobile-toggle"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <nav className="navbar-mobile-menu">
            <button onClick={() => scrollToSection('home')} className="mobile-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="mobile-link">About</button>
            <button onClick={() => scrollToSection('services')} className="mobile-link">Services</button>
            <button onClick={() => scrollToSection('team')} className="mobile-link">Team</button>
            <button onClick={() => scrollToSection('contact')} className="mobile-link">Contact</button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;