import React, { useState, useEffect, useRef } from 'react';


const Card = ({ event }) => {
  const [transformStyle, setTransformStyle] = useState({});
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const maxRotation = 15; // tilt angle
    const rotationX = (y / rect.height) * maxRotation;
    const rotationY = (x / rect.width) * -maxRotation;

    setTransformStyle({
      transform: `perspective(1200px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(1.05)`,
      boxShadow: `${-rotationY * 2}px ${rotationX * 2}px 40px rgba(0,0,0,0.25), inset 0 0 20px rgba(255,255,255,0.15)`,
      transition: "transform 0.1s ease-out, box-shadow 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      transition: "transform 0.6s ease, box-shadow 0.6s ease",
    });
  };

  return (
    <div
      ref={cardRef}
      className="card w-[280px] h-auto flex-shrink-0 p-4  mx-2 group transform-gpu bg-[#1f3b30] text-white rounded-xl"
      style={transformStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* keep all your existing code below unchanged */}
      <div className="rounded-xl overflow-hidden mb-4">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/400x300/1f3b30/FFFFFF?text=Image+Not+Found";
          }}
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold overflow-hidden mb-2">{event.title}</h3>
        <p className="font-medium mb-1 text-gray-300">{event.date}</p>
        {event.location && (
          <p className="text-sm text-gray-400">{event.location}</p>
        )}
      </div>
      <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        <a
          href="https://helixconferences.com/buy-a-ticket"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center block px-4 py-2 rounded-lg bg-white text-[#1f3b30] font-semibold transition-all duration-300 hover:bg-gray-200"
        >
          Register
        </a>
        {event.link ? (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center block px-4 py-2 rounded-lg border-2 border-white text-white font-semibold transition-all duration-300 hover:bg-white hover:text-[#1f3b30]"
          >
            Visit
          </a>
        ) : (
          <span className="w-full text-center block px-4 py-2 rounded-lg border-2 border-white text-white font-semibold opacity-50 cursor-not-allowed">
            Visit
          </span>
        )}
      </div>
    </div>
  );
};


const AutoScrollingCarousel = ({ data, title, direction = 'right', speed = 50 }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrameId;
    const scrollSpeed = speed / 100;

    const animate = () => {
      if (direction === 'left') {
        if (carousel.scrollLeft <= 0) {
          carousel.scrollLeft = carousel.scrollWidth / 2;
        }
        carousel.scrollLeft -= scrollSpeed;
      } else {
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
        carousel.scrollLeft += scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    if (direction === 'left') {
      carousel.scrollLeft = carousel.scrollWidth / 2;
    }

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [direction, speed]);

  return (
    <div
      className="py-4 relative overflow-hidden text-white"
      style={{
        background: "linear-gradient(to right, #ffffffff, #ffffffff)",
        borderRadius: "0px",
        // border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        overflow: "hidden",
        color:'black'
      }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      <div
        ref={carouselRef}
        className="carousel-container py-8 overflow-hidden whitespace-nowrap flex flex-nowrap"
      >
        {data.map((event, index) => (
          <Card key={index} event={event} />
        ))}
        {data.map((event, index) => (
          <Card className='py-8' key={`clone-${index}`} event={event} />
        ))}
      </div>
    </div>
  );
};
export default AutoScrollingCarousel

