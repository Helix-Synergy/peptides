import React from 'react';
import { Link } from 'react-router-dom';
import './EventPartners.css';

const EventPartners = () => {
  const sponsorships = [
    {
      title: 'Silver Sponsor',
      benefits: [
        'Sponsor 3 Poster Presentation Awards',
        '2 complimentary registrations',
        '1 workshop slot (AV & catering included)',
        '1 exhibit booth (3x3 sqm)',
        'Logo on sponsorship page',
        'A4 color ad (excluding cover pages)',
        '1 insert in delegate bags',
        'Priority for extra sponsorships',
        'Online promotion on all social platforms',
        '10% waiver for next year\'s sponsorship'
      ]
    },
    {
      title: 'Gold Sponsor',
      benefits: [
        'Sponsor 5 Poster Presentation Awards',
        '2 corporate workshop slots (AV included)',
        '1 exhibit booth (3x3 sqm)',
        '4 complimentary registrations',
        'Logo on homepage and sponsorship page',
        'A4 color ad (excluding cover pages)',
        '2 inserts in delegate bags',
        'Online promotion on all social platforms'
      ]
    },
    {
      title: 'Elite Sponsor',
      benefits: [
        'Sponsor 10 Poster Presentation Awards',
        '3 corporate workshop slots (AV included)',
        '2 exhibit booths (3x3 sqm each)',
        '6 complimentary registrations',
        'Logo on homepage and sponsorship page',
        'A4 color ad (excluding cover pages)',
        '3 inserts in delegate bags',
        'Post-conference email to registrants',
        'Online promotion on all social platforms'
      ]
    }
  ];

  const exhibitorBenefits = [
    'Sponsor 1 Poster Presentation Award',
    '1 complimentary registration',
    'Custom exhibit booth (3x3 sqm)',
    'Leaflet in delegate bags',
    'Online promotion on all social platforms',
    '5% waiver for next year',
    'Branding at ceremonies',
    'Press release for your company',
    'Brand in 50,000 brochures globally'
  ];

  return (
    <section className="partners-section">
      <div className="container">
        
        {/* Sponsorship Cards Grid */}
        <div className="sponsorship-grid">
          {sponsorships.map((tier, index) => (
            <div className="sponsorship-card" key={index}>
              <div className="sponsorship-header">
                <div className="medal-icon">🏅</div>
                <h3 className="sponsorship-title">{tier.title}</h3>
              </div>
              <ul className="benefits-list">
                {tier.benefits.map((benefit, bIndex) => (
                  <li key={bIndex}>
                    <span className="benefit-icon">✦</span>
                    <span className="benefit-text">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="sponsorship-footer">
                <Link to="/register" className="btn-become-partner">Become a Partner</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Exhibitor Section */}
        <div className="exhibitor-section">
          <div className="exhibitor-header">
            <div className="exhibitor-icon">👤</div>
            <h3 className="exhibitor-title">Exhibitor</h3>
          </div>
          <div className="exhibitor-benefits-grid">
            {exhibitorBenefits.map((benefit, index) => (
              <div className="exhibitor-benefit-item" key={index}>
                <span className="benefit-icon">✦</span>
                <span className="benefit-text">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EventPartners;
