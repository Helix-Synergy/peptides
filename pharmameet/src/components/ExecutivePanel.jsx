import React from 'react';
import './ExecutivePanel.css';

import saadImg from '../assets/pannel_members/Saad Tayyab.png';
import madhavImg from '../assets/pannel_members/Madhav Bhatia.png';
import rukiyeImg from '../assets/pannel_members/Rukiye Oztekin.png';
import axelImg from '../assets/pannel_members/Axel H Schonthal.png';

const panelMembers = [
  {
    name: 'Saad Tayyab',
    affiliation: 'UCSI University',
    country: 'Malaysia',
    image: saadImg
  },
  {
    name: 'Madhav Bhatia',
    affiliation: 'University of Otago',
    country: 'New Zealand',
    image: madhavImg
  },
  {
    name: 'Rukiye Oztekin',
    affiliation: 'Dokuz Eylul University',
    country: 'Turkey',
    image: rukiyeImg
  },
  {
    name: 'Axel H Schonthal',
    affiliation: 'University of Southern California',
    country: 'United States',
    image: axelImg
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
