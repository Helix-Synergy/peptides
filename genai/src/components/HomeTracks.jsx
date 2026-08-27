import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBrain, FaRobot, FaProjectDiagram, FaMagic, 
  FaComments, FaEye, FaCogs, FaChartBar,
  FaHeartbeat, FaBriefcase, FaShieldAlt, FaCar,
  FaSearch, FaBalanceScale, FaLightbulb
} from 'react-icons/fa';
import './HomeTracks.css';

const tracksData = [
  { title: 'Artificial Intelligence', icon: <FaBrain /> },
  { title: 'Machine Learning', icon: <FaRobot /> },
  { title: 'Deep Learning', icon: <FaProjectDiagram /> },
  { title: 'Generative AI', icon: <FaMagic /> },
  { title: 'NLP', icon: <FaComments /> },
  { title: 'Computer Vision', icon: <FaEye /> },
  { title: 'Robotics & Automation', icon: <FaCogs /> },
  { title: 'Data Science & Analytics', icon: <FaChartBar /> },
  { title: 'AI in Healthcare', icon: <FaHeartbeat /> },
  { title: 'AI in Business', icon: <FaBriefcase /> },
  { title: 'AI & Cybersecurity', icon: <FaShieldAlt /> },
  { title: 'Autonomous Systems', icon: <FaCar /> },
  { title: 'Explainable AI', icon: <FaSearch /> },
  { title: 'AI Ethics & Governance', icon: <FaBalanceScale /> },
  { title: 'AI Applications & Innovation', icon: <FaLightbulb /> }
];

const HomeTracks = () => {
  return (
    <section className="tracks-section">
      <div className="container">
        <h2 className="section-title text-center">GENAI CONCLAVE - Tracks</h2>
        
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
