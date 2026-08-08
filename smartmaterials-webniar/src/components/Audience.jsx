import React from 'react';
import './Audience.css';

const Audience = () => {
  const attendees = [
    "Scientists", "Researchers", "Faculty Members", "Professors", 
    "PhD Scholars", "Graduate Students", "Material Scientists", 
    "Nanotechnology Engineers", "Biomedical Researchers", 
    "Chemical Engineers", "Electronics Engineers", "Pharmaceutical Scientists", 
    "Biotechnology Researchers", "Industry Professionals", 
    "R&D Organizations", "Government Agencies", "Startups & Entrepreneurs"
  ];

  const reasons = [
    "Learn from internationally recognized experts.",
    "Present your research to a global audience.",
    "Explore the latest innovations in nanotechnology.",
    "Build international collaborations.",
    "Network with academia and industry.",
    "Discover commercialization opportunities.",
    "Receive an official participation certificate.",
    "Gain visibility for your research."
  ];

  return (
    <section className="section audience-section section-bg">
      <div className="container">
        <div className="audience-grid">
          
          <div className="audience-card attendees-card">
            <h2 className="card-title">Who Should Attend?</h2>
            <div className="attendees-tags">
              {attendees.map((item, index) => (
                <span key={index} className="tag">{item}</span>
              ))}
            </div>
          </div>
          
          <div className="audience-card reasons-card">
            <h2 className="card-title">Why Attend?</h2>
            <ul className="reasons-list">
              {reasons.map((reason, index) => (
                <li key={index} className="reason-item">
                  <span className="check-icon">✓</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Audience;
