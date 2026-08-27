import React from 'react';
import AbstractSubmission from '../components/AbstractSubmission';
import PageBanner from '../components/PageBanner';
import bannerImage from '../assets/banners/abstract_banner.webp';

const AbstractSubmissionPage = () => {
  return (
    <div style={{ backgroundColor: '#f8fafc', paddingBottom: '4rem' }}>
      <PageBanner 
        title="BUZZWEBINAR - Abstract Submission" 
        imageUrl={bannerImage} 
      />
      <div style={{ marginBottom: '4rem' }}></div>

      <AbstractSubmission />
    </div>
  );
};

export default AbstractSubmissionPage;
