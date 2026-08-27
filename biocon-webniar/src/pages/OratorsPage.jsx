import React from 'react';
import Orators from '../components/Orators';
import PageBanner from '../components/PageBanner';
import bannerImage from '../assets/banners/orators_banner.webp';
import './OratorsPage.css';

const OratorsPage = () => {
  return (
    <>
      <PageBanner 
        title="BUZZWEBINAR - Orators" 
        imageUrl={bannerImage} 
      />
      
      <div className="orators-intro-section" style={{ textAlign: 'center', padding: '4rem 1rem 1rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#000', marginBottom: '1rem' }}>Meet Our Distinguished Orators</h2>
        <p style={{ color: '#4b5563', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
          International researchers and foreign trades experts driving breakthrough innovations at World Biotechnology Summit
        </p>
      </div>

      <Orators hideTitle={true} />
    </>
  );
};

export default OratorsPage;
