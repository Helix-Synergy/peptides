import React from 'react';
import logo from '../assets/pharmameet_logo.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">About the Summit</h2>
            <p className="about-text">
              The field of pharmaceutical sciences is evolving rapidly. Novel drug discoveries, advanced delivery mechanisms, and cutting-edge therapeutics are creating exciting opportunities and solving critical healthcare challenges.
            </p>
            <p className="about-text">
              The <strong>International conference on Pharmaceutical Sciences</strong> brings together people who are curious about these changes and want to be part of the conversation—pharmacists, researchers, clinical scientists, academicians, and healthcare professionals from around the world.
            </p>
            <p className="about-text">
              More than just a conference, the summit is a space to share ideas, learn from different perspectives, meet inspiring people, and discover possibilities for collaboration.
            </p>
            
            <div className="theme-box">
              <span className="theme-label">Conference Theme</span>
              <h3 className="theme-title">“Advancing Global Healthcare through Innovations in Pharmaceutical Sciences”</h3>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-wrapper">
              <div className="abstract-shape shape-1"></div>
              <div className="abstract-shape shape-2"></div>
              <div className="image-container">
                <img src={logo} alt="PharmaMeet Logo" className="nanotech-illustration" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
