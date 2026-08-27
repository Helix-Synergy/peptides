import React from 'react';
import './ExecutivePanel.css';

import riamImg from '../assets/pannel_members/Dr. Riam Shammaa.png';
import joseImg from '../assets/pannel_members/José Cordeiro.png';
import timoImg from '../assets/pannel_members/Dr. Timo Schmidt.png';
import sonyaImg from '../assets/pannel_members/Dr Sonya Miller.png';

const panelMembers = [
  {
    name: 'Dr. Riam Shammaa',
    affiliation: 'McGill University',
    country: 'Canada 🇨🇦',
    image: riamImg
  },
  {
    name: 'José Cordeiro',
    affiliation: 'Massachusetts Institute of Technology (MIT), USA',
    country: 'Spain 🇪🇸',
    image: joseImg
  },
  {
    name: 'Dr. Timo Schmidt',
    affiliation: 'University of Basel, Switzerland 🇨🇭 — PhD in Pharmaceutical Technology',
    country: 'Switzerland 🇨🇭',
    image: timoImg
  },
  {
    name: 'Dr Sonya Miller',
    affiliation: 'The university of Sydney, Australia',
    country: 'Australia',
    image: sonyaImg
  }
];

const ExecutivePanel = ({ hideTitle, hideViewAll }) => {
  return (
    <section className="executive-panel">
      <div className="container">
        {!hideTitle && <h2 className="section-title text-center">Executive Panel Members</h2>}
        
        <div className="panel-grid">
          {panelMembers.map((member, index) => (
            <div className="panel-card" key={index}>
              <div className="panel-img-wrapper">
                <img src={member.image} alt={member.name} className="panel-img" onError={(e) => e.target.src = `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=f1f5f9&color=3b82f6`} />
              </div>
              <h3 className="panel-name">{member.name}</h3>
              <p className="panel-affiliation">{member.affiliation}</p>
              <p className="panel-country">{member.country}</p>
            </div>
          ))}
        </div>
        
        {!hideViewAll && (
          <div className="view-all-container">
            {/* <button className="btn btn-view-all">View All</button> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExecutivePanel;
