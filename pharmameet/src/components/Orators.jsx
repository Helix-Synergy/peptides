import React, { useState } from 'react';
import { FaUserCircle, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Orators.css';

import romanImg from '../assets/orators/Dr. Roman Lysiuk.png';
import elenaImg from '../assets/orators/Dr. Elena.png';
import consolateImg from '../assets/orators/Consolate M. Sergi.png';
import teresaImg from '../assets/orators/Teresa Carvajal.png';

const Orators = ({ hideTitle, limit, isScrolling }) => {
  const [selectedOrator, setSelectedOrator] = useState(null);

  const orators = [
    {
      id: 1,
      name: 'Dr. Roman Lysiuk',
      university: 'Danylo Halytsky Lviv National Medical University',
      country: 'Ukraine',
      image: romanImg,
    },
    {
      id: 2,
      name: 'Dr. Elena',
      university: 'Nicolae Testemitanu State University of Medicine and Pharmacy (SUMPh), Chisinau',
      country: 'Republic of Moldova',
      image: elenaImg,
    },
    {
      id: 3,
      name: 'Consolate M. Sergi',
      university: 'University of Alberta',
      country: 'Canada',
      image: consolateImg,
    },
    {
      id: 4,
      name: 'Teresa Carvajal',
      university: 'Purdue University',
      country: 'United States',
      image: teresaImg,
    },
  ];

  const closeModal = () => setSelectedOrator(null);

  const displayOrators = limit ? orators.slice(0, limit) : orators;

  const renderCard = (orator, keyPrefix) => (
    <div className="orator-card" key={`${keyPrefix}-${orator.id}`} onClick={() => setSelectedOrator(orator)}>
      <div className="orator-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f4f6', minHeight: '200px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem' }}>
        {orator.image ? (
          <img src={orator.image} alt={orator.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <FaUserCircle size={120} color="#d1d5db" />
        )}
      </div>
      <div className="orator-info">
        <h3 className="orator-name">{orator.name}</h3>
        <p className="orator-uni">{orator.university}</p>
        <p className="orator-country">{orator.country}</p>
        {orator.about && <button className="read-more-btn">Read More</button>}
      </div>
    </div>
  );

  return (
    <section className="orators-section">
      <div className="container">
        {!hideTitle && <h2 className="section-title">Our Orators</h2>}
        
        {isScrolling ? (
          <div className="orators-marquee-wrapper">
            <div className="orators-marquee-content">
              {displayOrators.map((orator) => renderCard(orator, 'first'))}
            </div>
            <div className="orators-marquee-content" aria-hidden="true">
              {displayOrators.map((orator) => renderCard(orator, 'second'))}
            </div>
          </div>
        ) : (
          <div className="orators-grid">
            {displayOrators.map((orator) => renderCard(orator, 'grid'))}
          </div>
        )}

        {(limit && limit < orators.length) || isScrolling ? (
          <div className="view-more-container" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/orators" className="read-more-btn" style={{ textDecoration: 'none', display: 'inline-block', fontSize: '1.1rem', padding: '0.75rem 2rem' }}>
              View All Orators
            </Link>
          </div>
        ) : null}
      </div>

      {selectedOrator && (
        <div className="orator-modal-overlay" onClick={closeModal}>
          <div className="orator-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}><FaTimes /></button>
            <div className="modal-header">
              <div className="modal-image-container">
                {selectedOrator.image ? (
                  <img src={selectedOrator.image} alt={selectedOrator.name} className="modal-image" />
                ) : (
                  <FaUserCircle size={100} color="#d1d5db" />
                )}
              </div>
              <div className="modal-header-info">
                <h2>{selectedOrator.name}</h2>
                <p className="modal-uni">{selectedOrator.university}</p>
                <p className="modal-country">{selectedOrator.country}</p>
              </div>
            </div>
            
            <div className="modal-body">
              {selectedOrator.about && (
                <div className="modal-section">
                  <h3>About</h3>
                  <p>{selectedOrator.about}</p>
                </div>
              )}
              
              {selectedOrator.contributions && (
                <div className="modal-section">
                  <h3>Key Contributions</h3>
                  <ul>
                    {selectedOrator.contributions.map((item, index) => <li key={index}>{item}</li>)}
                  </ul>
                </div>
              )}
              
              {selectedOrator.achievements && (
                <div className="modal-section">
                  <h3>Achievements</h3>
                  <ul>
                    {selectedOrator.achievements.map((item, index) => <li key={index}>{item}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Orators;
