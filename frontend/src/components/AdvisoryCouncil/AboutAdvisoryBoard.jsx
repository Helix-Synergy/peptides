// src/components/AdvisoryCouncil/AboutAdvisoryBoard.jsx
import React from 'react';
import AdvisoryContentDisplay from './AdvisoryContentDisplay';

const AboutAdvisoryBoard = () => {
  return (
    // This component simply renders the generic display component,
    // passing the specific pageType to fetch the correct data.
    <AdvisoryContentDisplay pageType="about-advisory-board" />
  );
};

export default AboutAdvisoryBoard;
