import React from 'react';
import CountdownTimer from './CountdownTimer';
import heroBg from '../assets/hero-img.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Image (using CSS or inline style) */}
      <div className="hero-background-image" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">

          <div className="hero-date-location">
            <div className="hero-month">Aug</div>
            <div className="hero-date-details">
              <span className="hero-date-line">26 | 2026</span>
              <span className="hero-location-line">Virtual</span>
            </div>
          </div>

          <h1 className="hero-title">
            Global Conclave on Advancements in Nanotechnology & Nano Materials
          </h1>

          <h2 className="hero-subtitle">
            SMART MATERIALS - 2026
          </h2>

          <CountdownTimer targetDate="2026-08-26T09:00:00" />

        </div>
      </div>
    </section>
  );
};

export default Hero;
