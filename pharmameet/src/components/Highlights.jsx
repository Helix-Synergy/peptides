import React from 'react';
import './Highlights.css';

const Highlights = () => {
  const highlights = [
    { title: 'International Keynote Speakers', icon: '🎤' },
    { title: 'Live Virtual Scientific Sessions', icon: '💻' },
    { title: 'Oral Presentations', icon: '🗣' },
    { title: 'Digital Poster Presentations', icon: '🖼' },
    { title: 'Young Research Forum', icon: '🎓' },
    { title: 'Industry Expert Talks', icon: '🏭' },
    { title: 'Interactive Q&A Sessions', icon: '❓' },
    { title: 'Global Networking', icon: '🌍' },
    { title: 'Best Presentation Awards', icon: '🏆' },
    { title: 'E-Certificates', icon: '📜' },
    { title: 'Publication Opportunities', icon: '📚' }
  ];

  return (
    <section id="highlights" className="section highlights-section section-bg">
      <div className="container">
        <h2 className="section-title text-center">Conference Highlights</h2>
        
        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div className="highlight-card" key={index}>
              <div className="highlight-icon">{item.icon}</div>
              <h3 className="highlight-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
