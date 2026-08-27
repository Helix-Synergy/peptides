import React from 'react';
import CountdownTimer from './CountdownTimer';
import heroBg from '../assets/pharma_hero_bg.png';
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
            <div className="hero-month">Nov</div>
            <div className="hero-date-details">
              <span className="hero-date-line">13 | 2026</span>
              <span className="hero-location-line">Virtual</span>
            </div>
          </div>

          <h1 className="hero-title">
            International conference on Pharmaceutical Sciences
          </h1>

          <h2 className="hero-subtitle">
            International conference on Pharmaceutical Sciences
          </h2>

          <CountdownTimer targetDate="2026-11-13T09:00:00" />

        </div>
      </div>
    </section>
  );
};

export default Hero;
