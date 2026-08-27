import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/genai_logo.jpg';
import './HomeIntro.css';

const HomeIntro = () => {
  return (
    <section className="home-intro">
      <div className="container home-intro-container">
        
        <div className="home-intro-logo">
          <img src={logo} alt="Global Conclave on AI & ML Logo" />
        </div>
        
        <div className="home-intro-content">
          <h2>
            <span className="text-primary" style={{ color: 'var(--primary)' }}>Advancing Global Leadership</span> in Artificial Intelligence & Machine Learning
          </h2>
          
          <p>
            Welcome to the premier global platform for the <span className="text-highlight">Global Conclave on Artificial Intelligence & Machine Learning</span>, where leading AI researchers, ML engineers, tech entrepreneurs, and decision-makers converge to advance intelligent systems and autonomous technologies. The conclave unites global pioneers to address critical challenges in algorithmic design, ethical AI, and large-scale data processing to shape the future of a smarter, automated world.
          </p>
          
          <p className="home-intro-quote">
            "Empowering Innovation and Technological Excellence through Next-Generation Artificial Intelligence & Machine Learning"
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
