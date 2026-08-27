import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/pepcon_logo.png';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Executive Panel', path: '/executive-panel' },
    { name: 'Tracks', path: '/tracks' },
    { name: 'Orators', path: '/orators' },
    { name: 'Schedule', path: '/schedule' },
    // { name: 'Event Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        
        {/* Protruding Logo */}
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <div className={`logo-circle ${isScrolled ? 'scrolled' : ''}`}>
              <img src={logo} alt="Peptides Knowledge Park" className="logo-img" />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={`desktop-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <nav className="nav-links">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="header-actions">
            <Link to="/register" className="btn btn-primary nav-btn" onClick={() => setIsMobileMenuOpen(false)}>
              Register
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="hamburger"></span>
        </button>

      </div>
    </header>
  );
};

export default Header;
