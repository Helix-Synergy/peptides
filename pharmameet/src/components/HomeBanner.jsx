import React, { useState, useEffect } from 'react';
import './HomeBanner.css';
import bannerImg from '../assets/peptides_conforences1.png';

const banners = [
  { id: 1, alt: 'Peptides Conferences Banner', src: bannerImg }
];

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="home-banner-section">
      <div className="container">
        <div className="home-banner-carousel">
          
          <div className="banner-nav banner-nav-prev" onClick={prevSlide}>
            <span>&lt;</span>
          </div>

          <div className="banner-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {banners.map((banner) => (
              <div className="banner-slide" key={banner.id}>
                <img 
                  src={banner.src} 
                  alt={banner.alt} 
                  className="banner-image" 
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <div className="banner-nav banner-nav-next" onClick={nextSlide}>
            <span>&gt;</span>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
