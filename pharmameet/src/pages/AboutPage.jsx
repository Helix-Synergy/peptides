import React from 'react';
import PageBanner from '../components/PageBanner';
import AboutContent from '../components/AboutContent';
import bannerImage from '../assets/banners/about_banner.webp';

const AboutPage = () => {
  return (
    <>
      <PageBanner 
        title="PHARMAMEET - About Us" 
        imageUrl={bannerImage} 
      />
      <AboutContent />
    </>
  );
};

export default AboutPage;
