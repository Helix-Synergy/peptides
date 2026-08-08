import React from 'react';
import './AboutContent.css';

const AboutContent = () => {
  return (
    <section className="about-content-section">
      <div className="container">
        <div className="about-text-container">
          <h2 className="about-main-heading">
            Global Conclave on Advancements in Nanotechnology & Nano Materials
          </h2>
          <h3 className="about-dates">26th Aug 2026</h3>
          
          <div className="about-paragraphs">
            <p>
              The Global Conclave on Advancements in Nanotechnology & Nano Materials, organized by Peptides Knowledge Park (A unit of Octacrest Corporate Pvt Ltd), is a distinguished international forum dedicated to advancing smart materials research, nanotechnology innovations, and next-generation manufacturing techniques that enhance productivity, sustainability, and industrial competitiveness.
            </p>
            <p>
              The conference is designed to facilitate high-level knowledge exchange, interdisciplinary collaboration, and evidence-based discussions that accelerate the adoption of innovative materials and advanced manufacturing solutions. Emphasis is placed on nanomaterials, additive manufacturing, precision engineering, materials characterization, smart composites, and sustainable industrial processes. Through plenary sessions, keynote addresses, expert-led panels, technical workshops, and research presentations, participants will gain strategic insights into emerging technologies, scalable industrial applications, and evolving global manufacturing policies.
            </p>
          </div>

          <h3 className="about-cta-text">
            Join the Global Community at SMARTMATERIALS-2026
          </h3>
          
          <p className="about-cta-subtext">
            Join global leaders and innovators in shaping the future of manufacturing through smart materials, nanotechnology, and advanced production excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
