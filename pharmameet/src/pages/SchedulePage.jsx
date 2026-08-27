import React from 'react';
import Schedule from '../components/Schedule';
import PageBanner from '../components/PageBanner';
import bannerImage from '../assets/banners/schedule_banner.webp';

const SchedulePage = () => {
  return (
    <>
      <PageBanner 
        title="PHARMAMEET - Schedule" 
        imageUrl={bannerImage} 
      />
      <Schedule />
    </>
  );
};

export default SchedulePage;
