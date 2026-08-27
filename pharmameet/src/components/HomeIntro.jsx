import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pharmameet_logo.jpg';
import './HomeIntro.css';

const HomeIntro = () => {
  return (
    <section className="home-intro">
      <div className="container home-intro-container">
        
        <div className="home-intro-logo">
          <img src={logo} alt="PharmaMeet 2026 Logo" />
        </div>
        
        <div className="home-intro-content">
          <h2>
            <span className="text-primary" style={{ color: 'var(--primary)' }}>Advancing Global Leadership</span> in Pharmaceutical Sciences & Advanced Manufacturing
          </h2>
          
          <p>
            Welcome to the premier global platform for the <span className="text-highlight">International conference on Pharmaceutical Sciences</span>, where leading experts and decision-makers converge to advance Pharmaceutical Sciences applications, and next-generation manufacturing processes. The congress unites researchers, engineers, industry leaders, and policymakers to address critical challenges and shape the future of sustainable, efficient, and intelligent industrial technologies.
          </p>
          
          <p className="home-intro-quote">
            "Empowering Innovation and Industrial Excellence through Pharmaceutical Sciences, and Advanced Manufacturing"
          </p>
          
          <Link to="/about" className="btn btn-primary" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.8rem 2rem', border: 'none', borderRadius: '30px', fontWeight: '500', textDecoration: 'none', display: 'inline-block', marginTop: '1rem' }}>
            Know More
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default HomeIntro;
