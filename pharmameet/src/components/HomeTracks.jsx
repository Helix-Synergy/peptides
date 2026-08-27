import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFlask, FaPills, FaMicroscope, 
  FaVial, FaBookMedical, FaNotesMedical, FaPrescriptionBottle,
  FaSyringe, FaStethoscope, FaHeartbeat, FaDna,
  FaHospital, FaFileMedicalAlt, FaClinicMedical, FaLeaf
} from 'react-icons/fa';
import './HomeTracks.css';

const tracksData = [
  { title: 'Pharmaceutics', icon: <FaPills /> },
  { title: 'Pharmacology', icon: <FaHeartbeat /> },
  { title: 'Pharmaceutical Chemistry', icon: <FaFlask /> },
  { title: 'Medicinal Chemistry', icon: <FaVial /> },
  { title: 'Pharmacognosy', icon: <FaLeaf /> }, // Wait, I need to add FaLeaf to imports
  { title: 'Drug Discovery', icon: <FaMicroscope /> },
  { title: 'Drug Delivery', icon: <FaSyringe /> },
  { title: 'Biotechnology', icon: <FaDna /> },
  { title: 'Clinical Pharmacy', icon: <FaClinicMedical /> },
  { title: 'Pharmaceutical Analysis', icon: <FaVial /> },
  { title: 'Pharmacovigilance', icon: <FaNotesMedical /> },
  { title: 'Nanopharmaceutics', icon: <FaMicroscope /> },
  { title: 'Pharmacokinetics', icon: <FaHeartbeat /> },
  { title: 'Toxicology', icon: <FaFileMedicalAlt /> },
  { title: 'Regulatory Affairs', icon: <FaBookMedical /> }
];

const HomeTracks = () => {
  return (
    <section className="tracks-section">
      <div className="container">
        <h2 className="section-title text-center">PHARMAMEET - Tracks</h2>
        
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
