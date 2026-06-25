import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Conferences from "./Conferences";   // new extracted component
import Seminars from "./Seminars";         // already ready
import conferencesBanner from '../../../assets/images/PageBanners/conferences.webp'

const Events = () => {
  const [activeTab, setActiveTab] = useState("Conferences");
  const banner = "https://placehold.co/1200x600/0f2920/ffffff?text=CONFERENCES+%26+SEMINARS";

  return (
    <main className="min-h-screen font-inter bg-white text-[#0f2920]">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${conferencesBanner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            Conferences & Seminars
          </h1>
        </motion.div>
      </section>

      {/* Toggle */}
      <section className="flex justify-center mt-8 px-4">
        <div className="flex border-2 border-[#0f2920] rounded-full w-full max-w-sm overflow-hidden">
          <motion.button
            layout
            onClick={() => setActiveTab("Conferences")}
            className={`flex-1 py-2 text-center font-semibold relative z-10 rounded-full ${activeTab === "Conferences" ? "text-white" : "text-[#0f2920]"
              }`}
          >
            {activeTab === "Conferences" && (
              <motion.span
                layoutId="pill-bg"
                className="absolute inset-0 bg-[#0f2920] rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">Conferences</span>
          </motion.button>

          <motion.button
            layout
            onClick={() => setActiveTab("Seminars")}
            className={`flex-1 py-2 text-center font-semibold relative z-10 rounded-full ${activeTab === "Seminars" ? "text-white" : "text-[#0f2920]"
              }`}
          >
            {activeTab === "Seminars" && (
              <motion.span
                layoutId="pill-bg"
                className="absolute inset-0 bg-[#0f2920] rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">Seminars</span>
          </motion.button>
        </div>
      </section>

      {/* Dynamic Content */}
      <section className="mt-8 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "Conferences" ? <Conferences /> : <Seminars />}
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Events;
