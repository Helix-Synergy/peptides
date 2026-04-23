import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

import {
  Code, HeartPulse, Briefcase, Palette, Award, Users, Check, ArrowRight
} from "lucide-react";
import Banner from '../../assets/images/about-banner.jpg'

// === DATA FOR THIS PAGE ===
const jobTrainingData = {
  title: 'Job Oriented Trainings',
  tagline: 'Bridging the Gap Between Education and Employment',
  intro: 'In a rapidly changing job market, a traditional degree isn\'t always enough. Our job-oriented training programs are designed to bridge that gap. We focus on real-world skills, industry-relevant projects, and a direct path to employment, helping you bypass the learning curve and jumpstart your career.',
  industries: [
    {
      name: 'Technology & Data',
      icon: Code,
      programs: [
        { title: 'Data Science & Analytics', description: 'Learn to transform complex data into actionable insights and drive business decisions.' },
        { title: 'Cybersecurity', description: 'Master the strategies and tools to protect digital assets and secure networks.' },
        { title: 'Full-Stack Development', description: 'Become a versatile developer by mastering both front-end and back-end technologies.' },
        { title: 'Artificial Intelligence & Machine Learning', description: 'Dive into the future of technology by building intelligent systems and models.' },
      ]
    },
    {
      name: 'Life Sciences & Healthcare',
      icon: HeartPulse,
      programs: [
        { title: 'Clinical Research', description: 'Learn the principles of clinical trial management, data collection, and regulatory compliance to support medical research.' },
        { title: 'Medical Lab Technology', description: 'Gain practical skills in laboratory procedures, diagnostics, and quality control.' },
        { title: 'Bioinformatics', description: 'Master the use of computational tools to analyze complex biological data and support drug discovery and genetic research.' },
        { title: 'Public Health & Epidemiology', description: 'Study the patterns of disease and public health issues, and learn to develop strategies for prevention and community wellness.' },
      ]
    },
    {
      name: 'Business & Management',
      icon: Briefcase,
      programs: [
        { title: 'Digital Marketing', description: 'Master the art of online brand-building, from SEO and content strategy to social media advertising.' },
        { title: 'Project Management', description: 'Learn to plan, execute, and deliver projects on time and on budget, mastering key methodologies like Agile and Scrum.' },
        { title: 'Supply Chain Management', description: 'Gain expertise in logistics, procurement, and operations to optimize efficiency from start to finish.' },
        { title: 'Human Resources Management', description: 'Develop the skills to manage talent, lead organizational change, and create a positive and productive work environment.' },
      ]
    },
    {
      name: 'Creative & Design',
      icon: Palette,
      programs: [
        { title: 'UI/UX Design', description: 'Create intuitive and visually appealing digital experiences that users will love.' },
        { title: 'Graphic Design', description: 'Develop a professional portfolio of branding, marketing, and visual communication materials.' },
        { title: 'Video Production', description: 'Learn the full scope of video creation, from filming and editing to motion graphics and sound design.' },
        { title: '3D Modeling & Animation', description: 'Bring your ideas to life by mastering 3D software for character design, architectural visualization, and motion graphics.' },
      ]
    },
  ],
  whyChoose: [
    { icon: Check, text: 'Practical, Hands-On Projects: Build a portfolio of real-world projects that prove your skills to employers.' },
    { icon: Award, text: 'Industry-Expert Instructors: Learn directly from professionals who are currently working in their fields.' },
    { icon: Users, text: 'Dedicated Career Support: Get personalized help with resume writing, interview preparation, and job placement to ensure you succeed.' },
  ],
  ctaHeading: 'Start Your Journey Today',
  ctaBody: 'Ready to invest in your future? Explore our training programs and take the first step toward a rewarding and successful career.'
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
  visible: { y: 0, opacity: 1 }
};

const ctaAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// === COMPONENT ===
const JobOrientedTrainings = () => {
  const [activeTab, setActiveTab] = useState(jobTrainingData.industries[0].name);
  const activePrograms = jobTrainingData.industries.find(
    (industry) => industry.name === activeTab
  )?.programs;

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
            {jobTrainingData.title} 
          </h1>
        </motion.div>
      </section>

      {/* Intro Text Section */}
      <section className="bg-white py-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-700 text-justify">{jobTrainingData.intro}</p>
        </motion.div>
      </section>

      {/* Tabbed Training Programs Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819]">
            Training Across Key Industries
          </h2>
          <div className="flex flex-wrap justify-center mb-12 space-x-2 md:space-x-4">
            {jobTrainingData.industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <button
                  key={industry.name}
                  onClick={() => setActiveTab(industry.name)}
                  className={`flex items-center space-x-2 px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-colors duration-300 ${
                    activeTab === industry.name
                      ? 'bg-[#714819] text-white shadow-md'
                      : 'bg-gray-100 text-[#1e1e1e] hover:bg-gray-200'
                  }`}
                >
                  <Icon size={20} />
                  <span>{industry.name}</span>
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeTab} // Key changes to re-mount and animate on tab change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="wait">
              {activePrograms && activePrograms.map((program, i) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
                >
                  <h4 className="text-xl font-bold mb-2 text-[#714819]">{program.title}</h4>
                  <p className="text-gray-700 text-justify">{program.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Why Our Programs Get Results Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#0f2920] mb-12">
            Why Our Programs Get Results
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-1 md:grid-cols-3 gap-8"
          >
            {jobTrainingData.whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center"
                >
                  <Icon size={56} className="mb-4 text-[#714819]" />
                  <p className="text-lg text-gray-700 text-justify">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
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
            {jobTrainingData.ctaHeading}
          </motion.h2>
          <motion.p
            {...ctaAnimation}
            transition={{ ...ctaAnimation.transition, delay: 0.2 }}
            className="text-lg mb-8 text-[#1e1e1e]"
          >
            {jobTrainingData.ctaBody}
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

export default JobOrientedTrainings;