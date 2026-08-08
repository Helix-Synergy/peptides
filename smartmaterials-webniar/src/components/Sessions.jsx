import React from 'react';
import './Sessions.css';

const Sessions = () => {
  const sessions = [
    "Nanotechnology Fundamentals",
    "Nano Materials Synthesis",
    "Advanced Functional Materials",
    "Smart Materials",
    "Graphene & 2D Materials",
    "Carbon Nanotubes",
    "Nanocomposites",
    "Quantum Nanomaterials",
    "Nanoelectronics",
    "Semiconductor Nanotechnology",
    "Nanophotonics",
    "Biomedical Nanotechnology",
    "Nanomedicine",
    "Drug Delivery Systems",
    "Tissue Engineering",
    "Biomaterials",
    "Nano Biosensors",
    "Energy Storage Materials",
    "Battery Technologies",
    "Solar Energy Materials",
    "Hydrogen Energy Materials",
    "Environmental Nanotechnology",
    "Water Purification Technologies",
    "Green Nanotechnology",
    "Agricultural Nanotechnology",
    "Food Nanotechnology",
    "Polymer Nanocomposites",
    "Thin Films & Surface Engineering",
    "AI for Materials Discovery",
    "Industrial Applications of Nanotechnology",
    "Commercialization of Nanotechnology"
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
