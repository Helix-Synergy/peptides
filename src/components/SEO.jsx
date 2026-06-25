import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, name, type }) => {
  const siteName = "Peptides Knowledge Park";
  const defaultTitle = `${siteName} | Academic & Corporate Services`;
  const defaultDescription = "Peptides Knowledge Park offers expert academic workshops, corporate research support, specialized training, and career guidance for students and professionals.";
  const defaultKeywords = "Academic Assist, Tutoring, Projects, Conferences, Workshops, Internships, Publications, Skill Development, Corporate Astute, Analytic Assessment Services, Contract Research Services, Career Coach, JobMate, Collaborations";

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | ${siteName}` : defaultTitle}</title>
      <meta name='description' content={description || defaultDescription} />
      <meta name='keywords' content={keywords || defaultKeywords} />
      
      {/* Open Graph tags for social media sharing */}
      <meta property="og:type" content={type || "website"} />
      <meta property="og:title" content={title ? `${title} | ${siteName}` : defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || siteName} />
      <meta name="twitter:card" content={type || "summary_large_image"} />
      <meta name="twitter:title" content={title ? `${title} | ${siteName}` : defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default SEO;
