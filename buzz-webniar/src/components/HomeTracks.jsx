import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGlobe, FaChartLine, FaShip, FaMoneyBillWave, 
  FaHandHoldingUsd, FaBalanceScale, FaTruck, FaBullhorn,
  FaCity, FaLeaf, FaLightbulb, FaLaptopCode,
  FaLandmark, FaMapMarkedAlt, FaChartArea
} from 'react-icons/fa';
import './HomeTracks.css';

const tracksData = [
  { title: 'Global Business', icon: <FaGlobe /> },
  { title: 'International Economics', icon: <FaChartLine /> },
  { title: 'Foreign Trade', icon: <FaShip /> },
  { title: 'International Finance', icon: <FaMoneyBillWave /> },
  { title: 'Global Investment', icon: <FaHandHoldingUsd /> },
  { title: 'Trade Policy', icon: <FaBalanceScale /> },
  { title: 'Global Supply Chain', icon: <FaTruck /> },
  { title: 'International Marketing', icon: <FaBullhorn /> },
  { title: 'Emerging Markets', icon: <FaCity /> },
  { title: 'Sustainable Economics', icon: <FaLeaf /> },
  { title: 'Entrepreneurship & Innovation', icon: <FaLightbulb /> },
  { title: 'Digital Trade & E-Commerce', icon: <FaLaptopCode /> },
  { title: 'Economic Policy & Governance', icon: <FaLandmark /> },
  { title: 'Geopolitics & Trade', icon: <FaMapMarkedAlt /> },
  { title: 'Global Trade Trends', icon: <FaChartArea /> }
];

const HomeTracks = () => {
  return (
    <section className="tracks-section">
      <div className="container">
        <h2 className="section-title text-center">BUZZWEBINAR - Tracks</h2>
        
        <div className="tracks-grid">
          {tracksData.map((track, index) => (
            <div className="track-grid-card" key={index}>
              <div className="track-icon-wrapper">
                {track.icon}
              </div>
              <span className="track-grid-title">{track.title}</span>
            </div>
          ))}
        </div>

        <div className="tracks-actions">
          <Link to="/tracks" className="btn btn-blue">Read More</Link>
          <Link to="/abstract_submission" className="btn btn-black">Submit Abstract</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeTracks;
