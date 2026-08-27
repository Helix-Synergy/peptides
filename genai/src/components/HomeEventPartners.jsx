import React from 'react';
import { Link } from 'react-router-dom';
import './HomeEventPartners.css';

import partner1 from '../assets/partner_logos/av collage logo.jpg';
import partner2 from '../assets/partner_logos/bjr cpllage logo.png';
import partner3 from '../assets/partner_logos/loyala collage degree logo.png';
import partner4 from '../assets/partner_logos/loyala engineering.png';
import partner5 from '../assets/partner_logos/rvbrr logo.png';
const partners = [
  { name: 'AV College', img: partner1 },
  { name: 'BJR College', img: partner2 },
  { name: 'Loyola College Degree', img: partner3 },
  { name: 'Loyola Engineering', img: partner4 },
  { name: 'reddys womens collage', img: partner5 },
];

const HomeEventPartners = () => {
  return (
    <section className="home-event-partners">
      <div className="container">
        <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>GENAIWEBINAR - Event Partners</h2>

        <div className="marquee-wrapper">
          <div className="marquee-content">
            {partners.map((partner, index) => (
              <div className="partner-logo-box" key={`first-${index}`}>
                <img src={partner.img} alt={partner.name} className="partner-logo-img" />
              </div>
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {partners.map((partner, index) => (
              <div className="partner-logo-box" key={`second-${index}`}>
                <img src={partner.img} alt={partner.name} className="partner-logo-img" />
              </div>
            ))}
          </div>
        </div>

        <div className="partner-cta-container">
          <Link to="/register" className="btn btn-primary">Become a Partner</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeEventPartners;
