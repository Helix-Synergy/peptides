import React from 'react';
import './EventHighlights.css';

const EventHighlights = () => {
  const highlights = [
    {
      title: 'Distinguished Keynote Speakers',
      desc: 'Engage with internationally recognized AI experts and thought leaders in Machine Learning, Neural Networks, and algorithmic innovations.'
    },
    {
      title: 'Technical Workshops & Expert Sessions',
      desc: 'Participate in in-depth sessions on deep learning architectures, generative AI, LLMs, computer vision, and scalable ML operations (MLOps).'
    },
    {
      title: 'Innovation & Technology Exhibition',
      desc: 'Discover cutting-edge AI software, data processing solutions, robotics innovations, and next-generation autonomous systems.'
    },
    {
      title: 'Strategic Networking Opportunities',
      desc: 'Build meaningful connections with global stakeholders across tech companies, research labs, academia, and AI venture capital.'
    },
    {
      title: 'Data Science & Algorithm Focus',
      desc: 'Gain insights into emerging data frameworks, ethical AI development methods, and algorithmic solutions driving technological transformation.'
    },
    {
      title: 'Research & Market Intelligence',
      desc: 'Explore the latest research findings, AI startup trends, and commercialization pathways in Artificial Intelligence and Machine Learning.'
    },
    {
      title: 'Collaboration & Partnership Platforms',
      desc: 'Foster cross-sector partnerships to advance open-source research, API integration, and scalable tech solutions.'
    },
    {
      title: 'Professional Development & Code Reviews',
      desc: 'Earn professional development recognition through certified AI workshops, technical code reviews, and collaborative engineering panels.'
    }
  ];

  return (
    <section className="event-highlights-section">
      <div className="container">
        <h2 className="section-title-blue">Event Highlights</h2>
        
        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div className="highlight-card" key={index}>
              <div className="highlight-icon">🤖</div>
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
