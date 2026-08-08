import React from 'react';
import PageBanner from '../components/PageBanner';
import AboutContent from '../components/AboutContent';
import WhoCanAttend from '../components/WhoCanAttend';
import EventHighlights from '../components/EventHighlights';
import bannerImage from '../assets/banners/about_banner.webp';

const AboutPage = () => {
  return (
    <>
      <PageBanner 
        title="SMARTMATERIALS - About Us" 
        imageUrl={bannerImage} 
      />
      <AboutContent />
      <WhoCanAttend />
      <EventHighlights />
    </>
  );
};

export default AboutPage;
