import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLeaf, FaDna, FaMicrochip, FaHeartbeat, 
  FaAtom, FaLayerGroup, FaLightbulb, FaBolt,
  FaCubes, FaWifi, FaReact, FaFlask,
  FaSquare, FaFireAlt, FaMagic, FaSyringe
} from 'react-icons/fa';
import './HomeTracks.css';

const tracksData = [
  { title: 'Nano Technology in Agriculture', icon: <FaLeaf /> },
  { title: 'Advanced Nanomaterials', icon: <FaDna /> },
  { title: 'Intelligent & Responsive Materials', icon: <FaMicrochip /> }, 
  { title: 'Healthcare & Biomedicine', icon: <FaHeartbeat /> },
  { title: 'Nano-Sensors', icon: <FaAtom /> },
  { title: 'Advanced Composites', icon: <FaLayerGroup /> },
  { title: 'Nano-Photonics', icon: <FaLightbulb /> },
  { title: 'Nanoelectronics', icon: <FaBolt /> },
  { title: 'Graphene Tech', icon: <FaCubes /> },
  { title: 'Smart Sensors', icon: <FaWifi /> },
  { title: 'Quantum Materials', icon: <FaReact /> },
  { title: 'Nano Chemistry', icon: <FaFlask /> },
  { title: 'Bio-Nanotechnology', icon: <FaSyringe /> },
  { title: '2D Materials', icon: <FaSquare /> },
  { title: 'Thermoelectrics', icon: <FaFireAlt /> },
  { title: 'Laser & Plasma- Processing', icon: <FaMagic /> }
];

const HomeTracks = () => {
  return (
    <section className="tracks-section">
      <div className="container">
        <h2 className="section-title text-center">SMARTMATERIALS - Tracks</h2>
        
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
