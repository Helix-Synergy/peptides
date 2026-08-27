import React from 'react';
import Hero from '../components/Hero';
import HomeIntro from '../components/HomeIntro';
import HomeBanner from '../components/HomeBanner';
import ExecutivePanel from '../components/ExecutivePanel';
import HomeTracks from '../components/HomeTracks';
import Orators from '../components/Orators';
import HomeSchedule from '../components/HomeSchedule';
import HomeEventPartners from '../components/HomeEventPartners';

const Home = () => {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeBanner />
      <ExecutivePanel />
      <HomeTracks />
      <Orators isScrolling={true} />
      <HomeSchedule />
      <HomeEventPartners />
    </>
  );
};

export default Home;
