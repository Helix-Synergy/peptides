import React from "react";
import AutoScrollingCarousel from "./AutoScrollingCarousel";
import featuredConferenceData from "../../../data/conferenceData"; 
import hybridEventsData from "../../../data/hybridsData1";
import { pepconData } from "../../../data/pepconData";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Conferences = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-2 md:mb-4"
      >
        <h1 className="text-3xl md:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819]">
          The convergence of Scientific Innovation and Strategic Management is a
          powerful catalyst for progress.
        </h1>
        <p className="text-lg md:text-lg text-[#1f3b30] max-w-4xl mx-auto">
          In this spirit, Peptides Knowledge Park collaborated with Helix
          Conferences to create a unique platform for interdisciplinary
          dialogue, bringing together experts from the fields of science,
          technology, and management. This partnership would foster the exchange
          of groundbreaking Research and Practical Strategies for translating
          Academic knowledge into real-world applications.{" "}
        </p>
      </motion.div>

      {/* PEPCON Conferences Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#1f3b30]">PEPCON - 2026 Conferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pepconData.map((conf, index) => (
            <a href={conf.link} target={conf.link.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" key={index} className="block group">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full overflow-hidden">
                {/* Image Section */}
                <div className="relative h-48 w-full">
                  <img src={conf.image} alt={conf.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm flex items-center">
                    {conf.dateStr}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 mb-6 line-clamp-2">{conf.title}</h3>
                  
                  <div className="mt-auto bg-gray-50 rounded-xl p-4 border-l-4 border-blue-400">
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <FaCalendarAlt className="text-purple-500 mr-3 text-base" />
                      <span className="font-medium">{conf.dateStr}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaMapMarkerAlt className="text-pink-500 mr-3 text-base" />
                      <span className="font-medium">{conf.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Featured Conferences */}
      {featuredConferenceData.length > 0 && (
        <AutoScrollingCarousel
          data={featuredConferenceData}
          speed={50}
          direction="left"
          title="2025 Conferences"
        />
      )}

      {/* Hybrids */}
      <div
        className="text-white relative overflow-hidden"
        style={{
          background: "linear-gradient(to right, #ffffffff, #ffffffff)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          //   boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(15px)",
          overflow: "hidden",
          color: "brown",
        }}
      >
        <AutoScrollingCarousel
          data={hybridEventsData}
          speed={50}
          direction="left"
          title="Upcoming Conferences"
        />
        <div className="flex justify-center pb-8">
          <a
            href="https://helixconferences.com/Conferences"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#1f3b30] text-white rounded-lg font-bold hover:bg-[#152a22] transition-colors shadow-md"
          >
            Show More Conferences
          </a>
        </div>
      </div>


    </div>
  );
};

export default Conferences;
