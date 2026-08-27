import React from 'react';
import Tracks from '../components/Tracks';
import PageBanner from '../components/PageBanner';
import bannerImage from '../assets/banners/tracks_banner.webp';

const TracksPage = () => {
  return (
    <>
      <PageBanner 
        title="PHARMAMEET - Scientific Tracks" 
        imageUrl={bannerImage} 
      />
      <Tracks />
    </>
  );
};

export default TracksPage;
