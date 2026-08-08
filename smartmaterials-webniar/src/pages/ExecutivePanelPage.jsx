import React from 'react';
import ExecutivePanel from '../components/ExecutivePanel';
import PageBanner from '../components/PageBanner';
import bannerImage from '../assets/banners/executive_panel_banner.webp';

const ExecutivePanelPage = () => {
  return (
    <>
      <PageBanner 
        title="SMARTMATERIALS - Panel Members" 
        imageUrl={bannerImage} 
      />

      <section className="panel-intro" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <h2 style={{ color: '#3b82f6', fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
          Meet Our Distinguished Panel Members
        </h2>
        <p style={{ color: '#4b5563', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Leading global scientists, researchers, and innovators shaping the future of smart materials, nanotechnology, and advanced manufacturing at SMARTMATERIALS-2026
        </p>
      </section>

      <ExecutivePanel hideTitle={true} hideViewAll={true} />
    </>
  );
};

export default ExecutivePanelPage;
