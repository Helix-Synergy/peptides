import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">About the Conference</h2>
            <p className="about-text">
              The <strong>Global Conclave on Advancements in Nanotechnology & Nano Materials (Smart Materials – 2026)</strong> is an international virtual scientific conference organized by Peptides Knowledge Park.
            </p>
            <p className="about-text">
              The conference is dedicated to bringing together researchers, scientists, academicians, engineers, industry experts, entrepreneurs, and students to exchange knowledge, present innovative research, and discuss the future of nanotechnology and advanced materials.
            </p>
            <p className="about-text">
              Through keynote lectures, invited talks, technical presentations, poster sessions, and networking opportunities, participants will gain valuable insights into cutting-edge developments and establish collaborations that drive scientific progress and industrial innovation.
            </p>
            
            <div className="theme-box">
              <span className="theme-label">Conference Theme</span>
              <h3 className="theme-title">Innovating at the Nanoscale for a Smarter and Sustainable Tomorrow</h3>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-wrapper">
              <div className="abstract-shape shape-1"></div>
              <div className="abstract-shape shape-2"></div>
              <div className="image-container">
                <svg className="nanotech-illustration" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#8B6A2B" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.1,-46.3C90.4,-33.5,96.1,-18,95.4,-2.9C94.7,12.2,87.6,26.9,78.2,39.7C68.8,52.5,57.1,63.4,43.4,70.9C29.7,78.4,14.8,82.5,0.2,82.1C-14.4,81.8,-28.8,77,-41.8,69.2C-54.8,61.4,-66.4,50.6,-74.6,37.6C-82.8,24.6,-87.6,9.4,-86.3,-5.1C-85,-19.6,-77.6,-33.4,-67.6,-44.6C-57.6,-55.8,-45,-64.4,-31.6,-71.2C-18.2,-78,-4,-83,10.6,-83.4C25.2,-83.8,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100) scale(1.1)" opacity="0.1"/>
                  <circle cx="100" cy="100" r="40" fill="none" stroke="#0E3B32" strokeWidth="2" strokeDasharray="5,5" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#D4AF37" strokeWidth="1" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#8B6A2B" strokeWidth="1" strokeDasharray="10,10" />
                  
                  <circle cx="100" cy="100" r="15" fill="#0E3B32" />
                  <circle cx="100" cy="60" r="8" fill="#D4AF37" />
                  <circle cx="140" cy="100" r="10" fill="#8B6A2B" />
                  <circle cx="100" cy="140" r="6" fill="#D4AF37" />
                  <circle cx="60" cy="100" r="12" fill="#8B6A2B" />
                  
                  <circle cx="150" cy="50" r="5" fill="#0E3B32" />
                  <circle cx="50" cy="150" r="5" fill="#0E3B32" />
                  
                  <path d="M100 100 L100 60 M100 100 L140 100 M100 100 L100 140 M100 100 L60 100 M100 60 L150 50 M60 100 L50 150" stroke="#0E3B32" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
