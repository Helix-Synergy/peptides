import React from 'react';
import './ExecutivePanel.css';

import piotrImg from '../assets/pannel_members/Pior.webp';
import huangImg from '../assets/pannel_members/Huwang.webp';
import aharonImg from '../assets/pannel_members/Aharon.webp';
import zoyaImg from '../assets/pannel_members/Zoya.webp';

const panelMembers = [
  {
    name: 'Piotr Cebara',
    affiliation: 'Czestochowa University of Technology',
    country: 'Poland',
    image: piotrImg
  },
  {
    name: 'Huang W.M',
    affiliation: 'Nanyang Technology University',
    country: 'Singapore',
    image: huangImg
  },
  {
    name: 'Aharon Gedanken',
    affiliation: 'Bar-Ilan University',
    country: 'Israel',
    image: aharonImg
  },
  {
    name: 'Zoya Ghorbanishadeh',
    affiliation: 'Washington state University',
    country: 'USA',
    image: zoyaImg
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
