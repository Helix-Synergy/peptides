import React, { useState } from 'react';
import { GraduationCap, Briefcase, Users, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AcademicAssist from '../assets/images/HomeServicesSlider/AcademicAssist.webp';
import CorporateAstute from '../assets/images/HomeServicesSlider/CorporateAstute.webp';
import CareerSaga from '../assets/images/HomeServicesSlider/CareerSaga.webp';
import Collaborations from '../assets/images/HomeServicesSlider/Collaborations.webp';

const services = [
  {
    title: 'Academic Assist',
    description: 'Empowering students with comprehensive academic support for a brighter future.',
    image: AcademicAssist,
    icon: <GraduationCap className="w-10 h-10 mb-2 text-white drop-shadow-md" />,
  },
  {
    title: 'Corporate Astute',
    description: 'Providing expert IT consultancy to optimize and streamline corporate operations.',
    image: CorporateAstute,
    icon: <Briefcase className="w-10 h-10 mb-2 text-white drop-shadow-md" />,
  },
  {
    title: 'Career Saga',
    description: 'Guiding professionals on their career journey with personalized, strategic advice.',
    image: CareerSaga,
    icon: <Rocket className="w-10 h-10 mb-2 text-white drop-shadow-md" />,
  },
  {
    title: 'Collaborations',
    description: 'Fostering partnerships to drive innovation and achieve shared goals in research.',
    image: Collaborations,
    icon: <Users className="w-10 h-10 mb-2 text-white drop-shadow-md" />,
  },
];

const ServiceSlider = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-8 bg-blue-300/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-peptides-color-brown text-base font-semibold tracking-widest mb-2 uppercase block">Our Services</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#0F2920] mb-4">We Offer a Wide Range of <br className="hidden sm:block" /> Academic Support Services</h2>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 py-4 px-2">
            {[...services, ...services].map((service, idx) => {
              const isHovered = hovered === idx;
              return (
                <div key={idx} className="w-[350px] shrink-0">
                  <div
                    className="relative group rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col transition-transform duration-500 h-96 w-full"
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center" />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 to-black/40 ${isHovered ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}></div>
                    <div className={`absolute inset-0 flex flex-col justify-end items-start p-6 ${isHovered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} transition-all duration-300`}>
                      <div className="z-10">
                        <div>{service.icon}</div>
                        <h3 className="text-xl font-semibold text-white mt-2 drop-shadow-md">{service.title}</h3>
                      </div>
                    </div>
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 50 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 flex items-center justify-center p-4"
                        >
                          <motion.div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center w-full mx-auto">
                            <div className="mb-2 text-blue-600">
                              {React.cloneElement(service.icon, { className: 'w-10 h-10 mb-2 text-blue-600' })}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight text-center">{service.title}</h3>
                            <p className="text-sm text-gray-600 text-center leading-relaxed">
                              {service.description}
                            </p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;