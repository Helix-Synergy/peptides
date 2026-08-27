import React from 'react';
import EventPartners from '../components/EventPartners';
import PageBanner from '../components/PageBanner';
import bannerImage from '../assets/banners/event_partners_banner.webp';

const EventPartnersPage = () => {
  return (
    <>
      <PageBanner 
        title="GENAIWEBINAR - Sponsorship Packages" 
        imageUrl={bannerImage} 
      />

      <EventPartners />
    </>
  );
};

export default EventPartnersPage;
