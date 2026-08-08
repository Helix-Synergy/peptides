import React from 'react';

const PageBanner = ({ title, imageUrl }) => {
  return (
    <section className="page-banner-section" style={{
      paddingTop: '0',
      paddingBottom: '0',
      backgroundColor: '#ffffff'
    }}>
      <div style={{
        width: '100%',
        height: '400px',
        backgroundColor: '#e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${imageUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <h1 style={{
          color: '#ffffff',
          fontSize: '4.5rem',
          fontWeight: '800',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          zIndex: 2,
          textAlign: 'center',
          width: '100%',
          padding: '0 20px',
          textTransform: 'uppercase'
        }}>
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageBanner;
