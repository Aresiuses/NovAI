import React from 'react';
import { Mail, Phone, MapPin, Code } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <Code className="logo-icon" />
              <span className="footer-logo-text">NovAI</span>
            </div>
            <p className="footer-text">
              Innovative AI solutions for modern businesses. Transforming 
              computer science research into reality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-list static-list">
              <li>NLP Development</li>
              <li>Computer Vision</li>
              <li>Machine Learning</li>
              <li>AI Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-contact-list">
              <li>
                <Mail className="contact-icon" />
                <span>info@novai.tech</span>
              </li>
              <li>
                <Phone className="contact-icon" />
                <span>+60 (4) 123-4567</span>
              </li>
              <li>
                <MapPin className="contact-icon" />
                <span>Gelugor, Penang, Malaysia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; 2026 NovAI Research & Dev. All rights reserved. | CAT201 Assignment 2</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;