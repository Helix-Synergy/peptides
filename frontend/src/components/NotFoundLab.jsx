// src/components/NotFoundLab.jsx
import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFoundLab = () => {
  // Variants for a thematic, staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for each child element to fly in
  const itemVariants = {
    hidden: { opacity: 0, y: -50, rotate: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] text-white overflow-hidden p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Mist/Glow that fits the forest theme */}
      <motion.div
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(44,186,18,0.05),_transparent),_radial-gradient(ellipse_at_bottom_left,_rgba(158,245,78,0.1),_transparent)]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      
      {/* Glitching 404 Text - The failed experiment result */}
      <motion.h1
        className="text-[8rem] md:text-[12rem] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-[#9ef54e] to-[#2cba12] z-10"
        variants={itemVariants}
        animate={{
          textShadow: [
            "2px 2px 5px rgba(158, 245, 78, 0.3), -2px -2px 5px rgba(44, 186, 18, 0.3)",
            "2px 2px 5px rgba(158, 245, 78, 0.3), -2px -2px 5px rgba(44, 186, 18, 0.3)",
            "none"
          ],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 0.5,
          delay: 1.5
        }}
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-xl md:text-2xl text-gray-300 mb-8 text-center max-w-xl z-10"
        variants={itemVariants}
      >
        Uh oh! The lab experiment exploded… this page couldn’t be found. 🤯
      </motion.p>

      {/* Bubbling Flasks with a glowing color */}
      <div className="flex space-x-6 z-10 mb-12">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              delay: 0.8 + i * 0.3,
            }}
          >
            <FlaskConical size={60} className="text-[#2cba12] drop-shadow-lg" />
          </motion.div>
        ))}
      </div>

      {/* Glowing Button with a fly-in effect */}
      <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="z-10">
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-lg shadow-lg shadow-amber-500/50 hover:shadow-amber-400/70 transition"
        >
          <Home size={20} />
          Back to Safety
        </Link>
      </motion.div>
      
      {/* Floating Particles from the "toxic" explosion */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#9ef54e]/80"
          initial={{
            x: 0,
            y: 0,
            scale: 0,
          }}
          animate={{
            x: Math.random() * (Math.random() > 0.5 ? 400 : -400),
            y: Math.random() * (Math.random() > 0.5 ? 400 : -400),
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default NotFoundLab;