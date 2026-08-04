import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Image as ImageIcon, FormInput, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import posterImg from '../../assets/images/GLOW CRAFT Poster.jpg';
import WorkshopRegistrationModal from './WorkshopRegistrationModal';

const GlowCraftWorkshop = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen text-[#0f2920] font-inter pt-24 pb-12">
      <div className="container-custom max-w-6xl mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="mb-6 text-sm">
            <span 
                className="text-gray-500 hover:text-peptides-color-brown cursor-pointer transition-colors"
                onClick={() => navigate('/academic-assist/workshops')}
            >
                Workshops
            </span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="font-semibold">Glow Craft</span>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          {/* Left Side: Poster Image */}
          <div className="md:w-5/12 bg-[#0f2920] p-8 flex flex-col items-center justify-center relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
            
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={posterImg} 
              alt="Glow Craft Workshop Poster" 
              className="w-full max-w-md rounded-xl shadow-2xl z-10 border-4 border-white/10 mb-6"
            />
            
            <motion.a 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                href="/Peptides brochure 1.pdf 11.pdf"
                download="Peptides brochure 1.pdf 11.pdf"
                className="z-10 flex items-center justify-center gap-2 bg-[#e1b95b] text-[#0f2920] font-bold py-3 px-6 rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-xl shadow-[#e1b95b]/20 hover:-translate-y-1 w-full max-w-md"
            >
                <Download size={20} />
                Download Brochure
            </motion.a>
          </div>

          {/* Right Side: Details & Actions */}
          <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
              >
                  <span className="px-3 py-1 bg-peptides-color-brown/10 text-peptides-color-brown font-bold rounded-full text-xs uppercase tracking-wider mb-4 inline-block">
                      Upcoming Event
                  </span>
                  <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#0f2920]">
                    Glow Craft
                  </h1>
                  <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
                    Hands-on Workshop on Herbal Cosmetic Preparation
                  </h2>
              </motion.div>

              <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4 text-gray-700 mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-full shadow-sm">
                      <Calendar className="text-peptides-color-brown" size={24} />
                  </div>
                  <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase">Date</p>
                      <p className="font-bold text-lg">August 6th, 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-full shadow-sm">
                      <Clock className="text-peptides-color-brown" size={24} />
                  </div>
                  <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase">Time</p>
                      <p className="font-bold text-lg">10:30 AM - 5:30 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-full shadow-sm">
                      <MapPin className="text-peptides-color-brown" size={24} />
                  </div>
                  <div>
                      <p className="text-sm text-gray-500 font-semibold uppercase">Location</p>
                      <p className="font-bold text-lg">A.V. College of Arts, Science & Commerce, Hyderabad</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
              >
                  <h3 className="font-bold text-xl mb-3">About the Workshop</h3>
                  <p className="text-gray-600 leading-relaxed text-justify mb-8">
                    Transform Nature into Premium Personal Care Products. Learn to formulate Natural Herbal Shampoo & Herbal Body Moisturizer through practical hands-on training with industry expert guidance. Organized by Department of Chemistry, A.V. College of Arts, Science & Commerce (Autonomous), Hyderabad in collaboration with Peptides Knowledge Park.
                  </p>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex-1 flex items-center justify-center gap-2 bg-[#0f2920] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#1a4435] transition-all duration-300 shadow-xl shadow-[#0f2920]/20 hover:-translate-y-1"
              >
                <FormInput size={20} />
                Register Now
              </button>
              
              <button 
                onClick={() => navigate('/gallery')}
                className="flex-1 flex items-center justify-center gap-2 bg-white text-[#0f2920] border-2 border-[#0f2920] font-bold py-4 px-6 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1"
              >
                <ImageIcon size={20} />
                Gallery
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <WorkshopRegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        workshopTitle="Glow Craft - Herbal Cosmetic Preparation" 
      />
    </div>
  );
};

export default GlowCraftWorkshop;
