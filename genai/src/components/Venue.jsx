import React from 'react';
import './Venue.css';

const venueLocations = [
  "Hozen -ji Temple",
  "Nakanoshima park",
  "Osaka Castle",
  "Sumiyoshi Taisha",
  "Umeda sky Buiding",
  "Universal-Studios-Japan-"
];

const Venue = () => {
  return (
    <section className="venue-section">
      <div className="container">
        <h2 className="section-title">GENAIWEBINAR-Venue</h2>
        
        <div className="venue-content">
          
          {/* Left Column: Text List */}
          <div className="venue-list-area">
            <h4 className="venue-subtitle">Proposed Conference Venue</h4>
            <h3 className="venue-location">Osaka | Japan</h3>
            
            <ul className="venue-list">
              {venueLocations.map((loc, index) => (
                <li key={index}>
                  <span className="list-icon">➔</span> {loc}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Column: Image Grid */}
          <div className="venue-image-grid">
            {/* Using CSS placeholders for the masonry layout seen in screenshot */}
            <div className="venue-img v-img-1 placeholder-img"></div>
            <div className="venue-img v-img-2 placeholder-img"></div>
            <div className="venue-img v-img-3 placeholder-img"></div>
            <div className="venue-img v-img-4 placeholder-img"></div>
            <div className="venue-img v-img-5 placeholder-img"></div>
            <div className="venue-img v-img-6 placeholder-img"></div>
          </div>

        </div>

        <div className="view-all-container" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn btn-primary" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.6rem 3rem', borderRadius: '25px', border: 'none', fontWeight: '500', cursor: 'pointer' }}>
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Venue;
