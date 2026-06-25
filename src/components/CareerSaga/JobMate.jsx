import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import {
  FileText, Users, Network, Briefcase, Award, Check, ArrowRight
} from "lucide-react";
import Banner from '../../assets/images/PageBanners/7.webp'

// Assuming you have a relevant banner image for Placement Assistance
// import Banner from '../../assets/images/PageBanners/placement-banner.webp';

// === DATA FOR THIS PAGE ===
const placementData = {
  title: 'Placement Assistance',
  tagline: 'From Trainee to Professional. Your Career Starts Here.',
  intro: 'Our placement assistance services are designed to help you bridge the gap between education and employment, providing the support you need to land a great job and launch your career.',
  howWeHelp: [
    { icon: FileText, title: 'Resume & Portfolio Building', description: 'We work with you one-on-one to create a professional resume and a compelling portfolio that highlights your skills and project work, making a strong first impression on potential employers.' },
    { icon: Users, title: 'Interview Preparation', description: 'Our experts conduct mock interviews and provide personalized feedback to help you master interview techniques, build confidence, and prepare for tough questions.' },
    { icon: Network, title: 'Networking Opportunities', description: 'We connect you with our extensive network of hiring partners and alumni in various industries. These connections provide exclusive access to job openings and professional insights.' },
    { icon: Briefcase, title: 'Job Search Strategy', description: 'We guide you through the job search process, from identifying the right companies to crafting effective cover letters and negotiating your salary.' },
  ],
  results: {
    heading: 'Our Results Speak for Themselves',
    body: 'We take pride in the success of our graduates. Our strong relationships with top companies and our proven track record of successful placements are a testament to the effectiveness of our program. Join our community of successful professionals and take the next step toward achieving your career goals.'
  },
  ctaHeading: 'Start Your Career Today',
  ctaBody: 'Ready to take the next step? Explore our programs and get the support you need to secure your dream job.'
};

// === ANIMATION VARIANTS ===
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const ctaAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// === COMPONENT ===
const PlacementAssistance = () => {
  return (
    <div className="bg-gray-50 text-[#1e1e1e] font-inter relative min-h-screen">
      
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-end text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            {placementData.title}
          </h1>
        </motion.div>
      </section>

      {/* Intro Text Section */}
      <section className="bg-white py-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-700 text-justify">{placementData.intro}</p>
        </motion.div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819]">
            How We Help You Succeed
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
          >
            {placementData.howWeHelp.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center"
                >
                  <Icon size={56} className="mb-4 text-[#714819]" />
                  <h3 className="text-xl font-bold mb-2 text-[#0f2920]">{item.title}</h3>
                  <p className="text-gray-700 text-justify">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-[#0f2920] mb-6"
          >
            {placementData.results.heading}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700"
          >
            {placementData.results.body}
          </motion.p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-16 px-4 lg:px-12 bg-[#d7f2da] text-black text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            {...ctaAnimation}
            className="text-3xl lg:text-4xl font-bold mb-6"
            style={{
                            background: 'linear-gradient(90deg, #215e14ff, #11501cff, #4a7b3dff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {placementData.ctaHeading}
          </motion.h2>
          <motion.p
            {...ctaAnimation}
            transition={{ ...ctaAnimation.transition, delay: 0.2 }}
            className="text-lg mb-8 text-[#1e1e1e]"
          >
            {placementData.ctaBody}
          </motion.p>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  <Link
    to="/contact"
    className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl bg-[#1e1e1e] shadow-lg transition-all duration-300 hover:bg-[#333333] hover:scale-105"
  >
    Get Started <ArrowRight className="ml-2 w-5 h-5" />
  </Link>
</motion.div>
        </div>
      </section>
    </div>
  );
};

export default PlacementAssistance;