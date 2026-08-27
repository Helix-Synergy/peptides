import React from 'react';
import './ExecutivePanel.css';

import alexImg from '../assets/pannel_members/Alex Capri.png';
import yanisImg from '../assets/pannel_members/Yanis Varoufakis.png';
import danImg from '../assets/pannel_members/Dan Wang.png';
import luisImg from '../assets/pannel_members/Luis de la Calle.png';

const panelMembers = [
  {
    name: 'Alex Capri',
    affiliation: 'National University of Singapore (NUS)',
    country: 'Singapore',
    image: alexImg
  },
  {
    name: 'Yanis Varoufakis',
    affiliation: 'University of Essex',
    country: 'Greece',
    image: yanisImg
  },
  {
    name: 'Dan Wang',
    affiliation: 'University of Washington',
    country: 'China',
    image: danImg
  },
  {
    name: 'Luis de la Calle',
    affiliation: 'University of Virginia, USA',
    country: 'Mexico',
    image: luisImg
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
