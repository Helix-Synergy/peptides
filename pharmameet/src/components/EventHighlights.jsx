import React from 'react';
import './EventHighlights.css';

const EventHighlights = () => {
  const highlights = [
    {
      title: 'Distinguished Keynote Speakers',
      desc: 'Engage with internationally recognized experts and thought leaders in Pharmaceutical Sciences, and advanced manufacturing innovations.'
    },
    {
      title: 'Technical Workshops & Expert Sessions',
      desc: 'Participate in in-depth sessions on nanomaterials, additive manufacturing, precision engineering, sustainable processes, and smart industrial applications.'
    },
    {
      title: 'Innovation & Technology Exhibition',
      desc: 'Discover cutting-edge manufacturing technologies, pharmaceutical breakthroughs, clinical innovations, and next-generation drug delivery systems.'
    },
    {
      title: 'Strategic Networking Opportunities',
      desc: 'Build meaningful connections with global stakeholders across academia, industry, government, and investment sectors.'
    },
    {
      title: 'Materials Science & Industrial Innovation Focus',
      desc: 'Gain insights into emerging frameworks, sustainable production methods, and advanced materials solutions driving industrial transformation.'
    },
    {
      title: 'Scientific & Market Intelligence',
      desc: 'Explore the latest research findings, market trends, and commercialization pathways in Pharmaceutical Sciences, and advanced manufacturing. View event schedule'
    },
    {
      title: 'Collaboration & Partnership Platforms',
      desc: 'Foster cross-sector partnerships to advance research, innovation, and scalable industrial solutions.'
    },
    {
      title: 'Professional Development & Accreditation',
      desc: 'Earn professional development recognition through certified learning sessions, technical discussions, and collaborative panels.'
    }
  ];

  return (
    <section className="event-highlights-section">
      <div className="container">
        <h2 className="section-title-blue">Event Highlights</h2>
        
        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div className="highlight-card" key={index}>
              <div className="highlight-icon">⭐</div>
              <div className="highlight-text">
                <strong>{item.title}</strong> — {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
