import React from 'react';
import './Sessions.css';

const Sessions = () => {
  const sessions = [
    "Pharmaceutics",
    "Pharmacology",
    "Pharmaceutical Chemistry",
    "Medicinal Chemistry",
    "Pharmacognosy",
    "Drug Discovery & Development",
    "Drug Delivery",
    "Pharmaceutical Biotechnology",
    "Clinical Pharmacy",
    "Pharmaceutical Analysis",
    "Pharmacovigilance",
    "Nanopharmaceutics",
    "Pharmacokinetics",
    "Toxicology",
    "Regulatory Affairs"
  ];

  return (
    <section id="sessions" className="section sessions-section">
      <div className="container">
        <h2 className="section-title text-center">Scientific Sessions</h2>
        
        <div className="sessions-container">
          <ul className="sessions-list">
            {sessions.map((session, index) => (
              <li key={index} className="session-item">
                <span className="session-number">{(index + 1).toString().padStart(2, '0')}</span>
                <span className="session-name">{session}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sessions;
