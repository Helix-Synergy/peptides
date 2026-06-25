// src/components/AdvisoryCouncil/AboutAdvisoryBoard.jsx
import React from 'react';
import AdvisoryContentDisplay from './AdvisoryContentDisplay';

const OurAdvisoryCouncil = () => {
  return (
    // This component simply renders the generic display component,
    // passing the specific pageType to fetch the correct data.
    <AdvisoryContentDisplay pageType="panel-of-experts" />
  );
};

export default OurAdvisoryCouncil;
