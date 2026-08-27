import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaFileAlt, FaDownload, FaCalendarAlt, FaQuestionCircle } from 'react-icons/fa';
import './QuickLinks.css';

const QuickLinks = () => {
  return (
    <div className="quick-links-container">
      <div className="quick-link-icons">
        <a href="tel:+917997040959" className="quick-icon-btn expandable-btn">
          <div className="icon-circle"><FaPhoneAlt /></div>
          <span className="expandable-text">Call Us</span>
        </a>
        
        <a href="https://wa.me/917997040959" target="_blank" rel="noopener noreferrer" className="quick-icon-btn expandable-btn">
          <div className="icon-circle"><FaWhatsapp /></div>
          <span className="expandable-text">WhatsApp</span>
        </a>
        
        <a href="/abstract_submission" className="quick-icon-btn expandable-btn">
          <div className="icon-circle"><FaFileAlt /></div>
          <span className="expandable-text">Submit Abstract</span>
        </a>
        
        <a href="/Pepcon2026.pdf" download="Pepcon2026.pdf" className="quick-icon-btn expandable-btn">
          <div className="icon-circle"><FaDownload /></div>
          <span className="expandable-text">Brochure</span>
        </a>
        
        <a href="/schedule" className="quick-icon-btn expandable-btn">
          <div className="icon-circle"><FaCalendarAlt /></div>
          <span className="expandable-text">Schedule</span>
        </a>
        
        <a href="#help" className="quick-icon-btn expandable-btn">
          <div className="icon-circle"><FaQuestionCircle /></div>
          <span className="expandable-text">Help</span>
        </a>
      </div>
    </div>
  );
};

export default QuickLinks;
