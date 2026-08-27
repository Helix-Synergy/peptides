import React from 'react';
import { Link } from 'react-router-dom';
import './Tracks.css';

import track1 from '../assets/tracks/track1.jpg';
import track2 from '../assets/tracks/track2.jpg';
import track3 from '../assets/tracks/track3.jpg';
import track4 from '../assets/tracks/track4.jpg';
import track5 from '../assets/tracks/track5.jpg';
import track6 from '../assets/tracks/track6.jpg';
import track7 from '../assets/tracks/track7.jpg';
import track8 from '../assets/tracks/track8.jpg';
import track9 from '../assets/tracks/track9.jpg';
import track10 from '../assets/tracks/track10.jpg';
import track11 from '../assets/tracks/track11.jpg';
import track12 from '../assets/tracks/track12.jpg';
import track13 from '../assets/tracks/track13.jpg';
import track14 from '../assets/tracks/track14.jpg';
import track15 from '../assets/tracks/track15.jpg';

const Tracks = () => {
  const tracksData = [
    { title: 'Artificial Intelligence', desc: 'Explore the latest advancements and practical applications in Artificial Intelligence.', imgSrc: track1 },
    { title: 'Machine Learning', desc: 'Explore the latest advancements and practical applications in Machine Learning.', imgSrc: track2 },
    { title: 'Deep Learning', desc: 'Explore the latest advancements and practical applications in Deep Learning.', imgSrc: track3 },
    { title: 'Generative AI', desc: 'Explore the latest advancements and practical applications in Generative AI.', imgSrc: track4 },
    { title: 'NLP', desc: 'Explore the latest advancements and practical applications in NLP.', imgSrc: track5 },
    { title: 'Computer Vision', desc: 'Explore the latest advancements and practical applications in Computer Vision.', imgSrc: track6 },
    { title: 'Robotics & Automation', desc: 'Explore the latest advancements and practical applications in Robotics & Automation.', imgSrc: track7 },
    { title: 'Data Science & Analytics', desc: 'Explore the latest advancements and practical applications in Data Science & Analytics.', imgSrc: track8 },
    { title: 'AI in Healthcare', desc: 'Explore the latest advancements and practical applications in AI in Healthcare.', imgSrc: track9 },
    { title: 'AI in Business', desc: 'Explore the latest advancements and practical applications in AI in Business.', imgSrc: track10 },
    { title: 'AI & Cybersecurity', desc: 'Explore the latest advancements and practical applications in AI & Cybersecurity.', imgSrc: track11 },
    { title: 'Autonomous Systems', desc: 'Explore the latest advancements and practical applications in Autonomous Systems.', imgSrc: track12 },
    { title: 'Explainable AI', desc: 'Explore the latest advancements and practical applications in Explainable AI.', imgSrc: track13 },
    { title: 'AI Ethics & Governance', desc: 'Explore the latest advancements and practical applications in AI Ethics & Governance.', imgSrc: track14 },
    { title: 'AI Applications & Innovation', desc: 'Explore the latest advancements and practical applications in AI Applications & Innovation.', imgSrc: track15 }
  ];

  return (
    <section className="tracks-page-section">
      <div className="container tracks-container">
        
        <div className="tracks-list">
          {tracksData.map((track, index) => (
            <div className="track-card" key={index}>
              <div className="track-img-col">
                <div className="track-img" style={{ backgroundImage: `url(${track.imgSrc})` }}></div>
              </div>
              <div className="track-content-col">
                <h3 className="track-title">
                  <span className="track-icon">✦</span> {track.title}
                </h3>
                <p className="track-desc">{track.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Submit Abstract Button */}
        <Link to="/abstract_submission" className="floating-submit-btn">
          Submit Abstract
        </Link>
      </div>
    </section>
  );
};

export default Tracks;
