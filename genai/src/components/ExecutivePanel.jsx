import React from 'react';
import './ExecutivePanel.css';

import paulImg from '../assets/pannel_members/Paul M. Nakasone.png';
import amyImg from '../assets/pannel_members/Amy Webb.png';
import vinhImg from '../assets/pannel_members/Vinh Nguyen.png';
import jonImg from '../assets/pannel_members/Jon McNeill.png';

const panelMembers = [
  {
    name: 'Paul M. Nakasone',
    affiliation: 'Vanderbilt University',
    country: 'USA',
    image: paulImg
  },
  {
    name: 'Amy Webb',
    affiliation: 'New York University (NYU)',
    country: 'USA',
    image: amyImg
  },
  {
    name: 'Vinh Nguyen',
    affiliation: 'University of Pennsylvania',
    country: 'USA',
    image: vinhImg
  },
  {
    name: 'Jon McNeill',
    affiliation: 'Northwestern University',
    country: 'USA',
    image: jonImg
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
