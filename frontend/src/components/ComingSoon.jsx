// src/components/ComingSoon.jsx
import React from "react";
import { motion } from "framer-motion";

const ComingSoon = ({ pageName = "Coming Soon" }) => {
  // Variants for staggered entry animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child's animation
      },
    },
  };

  // Variants for each child element
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800 overflow-hidden relative">
      {/* Background Bubbles Animation */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-300 via-white to-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center p-8 md:p-12 text-center bg-white/50 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200/50"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Main Title with a dynamic gradient */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 mb-6 drop-shadow-lg"
          variants={itemVariants}
        >
          {pageName}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl font-light"
          variants={itemVariants}
        >
          We're working hard to bring this page to life. Stay tuned, exciting things are on the way!
        </motion.p>

        {/* Breathing Loader Animation */}
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.span
              key={i}
              className="w-4 h-4 rounded-full bg-pink-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;