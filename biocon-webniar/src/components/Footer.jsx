import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
  FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp
} from 'react-icons/fa';
import logo from '../assets/biocon-logo.png';
import './Footer.css';

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState("...");

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const hasVisited = sessionStorage.getItem('visitedBiocon');
        const queryParams = hasVisited ? '' : '?increment=true';
        
        if (!hasVisited) {
          sessionStorage.setItem('visitedBiocon', 'true');
        }
        
        const API_URL = import.meta.env.VITE_API_BASE_URL;
        const response = await fetch(`${API_URL}/biocon-visitors${queryParams}`);
        const data = await response.json();
        
        if (data.count !== undefined) {
          setVisitorCount(data.count.toLocaleString());
        }
      } catch (error) {
        console.error("Failed to fetch visitor count", error);
      }
    };
    fetchVisitorCount();
  }, []);

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          
          {/* Column 1: Logo & Info */}
          <div className="footer-col footer-col-logo">
            <div className="footer-logo-box">
              <img src={logo} alt="Annual Global Summit 2026 Logo" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">
              "Securing the Future with Biotechnology"
            </p>
            <p style={{ marginTop: '15px', fontSize: '13px', opacity: 0.9, color: '#f0f0f0' }}>
              A unit of Octacrest Corporate Pvt Ltd
            </p>
          </div>

          {/* Column 2: Quick Links & Social Media */}
          <div className="footer-col footer-col-links">
            <div className="links-group">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-list">
                <li><Link to="/about">› About</Link></li>
                <li><Link to="/executive-panel">› Executive Panel</Link></li>
                <li><Link to="/tracks">› Tracks</Link></li>
                <li><Link to="/orators">› Orators</Link></li>
                <li><Link to="/schedule">› Schedule</Link></li>
                <li><Link to="/contact">› Contact</Link></li>
                <li><a href="/Pepcon2026.pdf" download="Pepcon2026.pdf">› Download Brochure</a></li>
              </ul>
            </div>
            <div className="social-group">
              <h3 className="footer-title">Social Media</h3>
              <ul className="footer-list social-list">
                <li><a href="https://www.facebook.com/profile.php?id=61574949076299" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FaFacebookF size={18} /> Facebook</a></li>
                <li><a href="https://x.com/Peptides11008/status/2005912778075431037" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FaTwitter size={18} /> X (Twitter)</a></li>
                <li><a href="https://www.instagram.com/peptidesknowledgepark?igsh=MWtnNWNyYWt6c3RhZA==" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FaInstagram size={18} /> Instagram</a></li>
                <li><a href="https://www.youtube.com/@peptidesknowledgepark" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FaYoutube size={18} /> YouTube</a></li>
                <li><a href="https://www.linkedin.com/company/peptides-knowledge-park/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FaLinkedinIn size={18} /> LinkedIn</a></li>
                <li><a href="https://wa.me/917997040959" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><FaWhatsapp size={18} /> WhatsApp</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-col footer-col-contact">
            <h3 className="footer-title">Get In Touch</h3>
            <ul className="contact-list">
              <li>
                <span className="contact-icon"><FaMapMarkerAlt /></span>
                <span className="contact-text">Mahaveer Radiance, Near Madhapur metro station, CBI Colony, Hyderabad, Telangana 500081</span>
              </li>
              <li>
                <span className="contact-icon"><FaPhoneAlt /></span>
                <span className="contact-text">+91 7997 040 959</span>
              </li>
              <li>
                <span className="contact-icon"><FaEnvelope /></span>
                <span className="contact-text">hello@peptides.co.in</span>
              </li>
            </ul>
            <Link to="/register" className="btn btn-footer-register">
              Register
            </Link>
          </div>

        </div>

        <div className="footer-bottom-bar">
          <div className="copyright-text">
            &copy; {new Date().getFullYear()} Biotechnology. All Rights Reserved.
          </div>
          
          <div className="visitor-counter-container">
            <div className="visitor-label">
              <span>Total Visitors</span>
            </div>
            <div className="visitor-divider"></div>
            <div className="visitor-count">
              {visitorCount}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
