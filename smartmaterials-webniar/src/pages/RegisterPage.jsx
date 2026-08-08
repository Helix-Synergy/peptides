import React from 'react';
import Registration from '../components/Registration';
import PageBanner from '../components/PageBanner';
import bannerImage from '../assets/banners/register_banner.webp';

const RegisterPage = () => {
  return (
    <>
      <PageBanner 
        title="SMARTMATERIALS - Registration" 
        imageUrl={bannerImage} 
      />
      <Registration />
    </>
  );
};

export default RegisterPage;
