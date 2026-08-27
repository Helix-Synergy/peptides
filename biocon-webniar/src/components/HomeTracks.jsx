import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaDna, FaAtom, FaVial, FaPills, 
  FaLeaf, FaHeartbeat, FaIndustry, FaTree,
  FaLaptopCode, FaCubes, FaChild, FaSyringe,
  FaSearchPlus, FaAppleAlt, FaLightbulb
} from 'react-icons/fa';
import './HomeTracks.css';

const tracksData = [
  { title: 'Molecular Biotechnology', icon: <FaDna /> },
  { title: 'Genetic Engineering', icon: <FaAtom /> },
  { title: 'Genomics & Gene Editing', icon: <FaVial /> },
  { title: 'Pharmaceutical Biotechnology', icon: <FaPills /> },
  { title: 'Agricultural Biotechnology', icon: <FaLeaf /> },
  { title: 'Medical Biotechnology', icon: <FaHeartbeat /> },
  { title: 'Industrial Biotechnology', icon: <FaIndustry /> },
  { title: 'Environmental Biotechnology', icon: <FaTree /> },
  { title: 'Bioinformatics & AI', icon: <FaLaptopCode /> },
  { title: 'Synthetic Biology', icon: <FaCubes /> },
  { title: 'Stem Cell & Regenerative Medicine', icon: <FaChild /> },
  { title: 'Vaccine & Immunotechnology', icon: <FaSyringe /> },
  { title: 'Nanobiotechnology', icon: <FaSearchPlus /> },
  { title: 'Food Biotechnology', icon: <FaAppleAlt /> },
  { title: 'Biotechnology Innovation', icon: <FaLightbulb /> }
];

const HomeTracks = () => {
  return (
    <section className="tracks-section">
      <div className="container">
        <h2 className="section-title text-center">BIOCONWEBINAR - Tracks</h2>
        
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
