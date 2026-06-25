import React from "react";
import AutoScrollingCarousel from "./AutoScrollingCarousel";
import featuredConferenceData from "../../../data/conferenceData"; // move your array to a data file
import hybridEventsData from "../../../data/hybridsData1";
import { motion } from "framer-motion";

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
            href="https://helixconferences.com/Conferences-2026"
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
