import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import {
  FileText, Database, Edit, ClipboardCheck, Users, TrendingUp, Award, ArrowRight, BookMarked, Brain, Lightbulb
} from "lucide-react";
import Banner from '../../assets/images/PageBanners/8.jpg';

// === DATA FOR THIS PAGE ===
const ratsData = {
  title: 'Research Assistance & Writing Services',
  tagline: 'Your Partner for Research Assistance & Writing Services',
  intro: 'We provide structured thesis support to help students navigate every stage of their academic journey. Our expert guidance ensures your research is robust, your data is sound, and your thesis is written with clarity and academic rigor.',
  services: [
    { icon: FileText, title: 'Literature Review & Research Methodology', description: 'We provide expert guidance on structuring your research and conducting comprehensive literature reviews. Our support helps you build a solid theoretical foundation and design a methodology that is both robust and ethically sound.' },
    { icon: Database, title: 'Data Analysis & Interpretation', description: 'Our team assists with both statistical tools and advanced bioinformatics techniques. We help you transform raw data into meaningful insights and provide clear interpretations that strengthen your conclusions.' },
    { icon: Edit, title: 'Thesis Writing & Editing', description: 'Our services go beyond simple proofreading. We focus on enhancing clarity, ensuring coherence, and elevating the academic rigor of your writing. We help you present your findings in a compelling and professional manner.' },
    { icon: ClipboardCheck, title: 'Ethical Research Practices', description: 'Adhering to the highest research standards is non-negotiable. We guide you through the process of ethical approvals, data privacy, and proper citation to ensure your work is credible and stands up to scrutiny.' },
  ],
  whyChoose: [
    { icon: Brain, text: 'Subject Matter Experts: Our team consists of PhD-level researchers and seasoned academics who specialize in a wide range of fields, offering you personalized, in-depth expertise.' },
    { icon: TrendingUp, text: 'Accelerated Progress: We help you overcome common roadblocks and streamline your workflow, allowing you to complete your research and thesis with greater efficiency without compromising on quality.' },
    { icon: Lightbulb, text: 'Customized Support: Every research project is unique. Our services are tailored to your specific needs, providing you with targeted assistance exactly where you need it most.' },
  ],
  cta: 'Let us help you turn your research into a publication-ready thesis. Contact us today to start your project.'
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

const ctaGlowAnimation = {
  whileHover: {
    scale: 1.05,
    boxShadow: "0 0 15px #b2874b, 0 0 45px #b2874b",
    transition: { duration: 0.3 }
  },
};

const cardHover = {
  scale: 1.05,
  y: -5,
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  transition: { duration: 0.3 }
};

// === COMPONENT ===
const ResearchAssistanceServices = () => {
  return (
    <div className="bg-gray-50 text-[#1e1e1e] font-inter relative min-h-screen">

            {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-end text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
           {ratsData.title}
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
          <p className="text-lg md:text-xl text-gray-700 text-justify">{ratsData.intro}</p>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819]">
            Our Support Areas
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {ratsData.services.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={cardHover}
                  className="group relative overflow-hidden bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-start"
                >
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-16 h-16 mr-4 rounded-full bg-gray-100 transition-colors duration-300 group-hover:bg-[#714819]">
                        <Icon size={32} className="text-[#714819] transition-colors duration-300 group-hover:text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-[#0f2920]">{item.title}</h4>
                    </div>
                    <p className="font-medium text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-justify">{item.description}</p>
                  </div>
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ backgroundPosition: "100% 0" }}
                    animate={{ backgroundPosition: "0% 0" }}
                    transition={{ duration: 0.5 }}
                    style={{
                      background: `linear-gradient(225deg, rgba(113,72,25,0.05) 0%, rgba(178,135,75,0.2) 50%, rgba(113,72,25,0.05) 100%)`,
                      backgroundSize: "200% 100%"
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#0f2920] mb-12">
            Why Partner with Us?
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-1 md:grid-cols-3 gap-8"
          >
            {ratsData.whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={cardHover}
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

      {/* CTA Section */}
      <section className="w-full py-16 px-4 lg:px-12 bg-[#d7f2da] text-black text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold mb-6"
            style={{
              background: 'linear-gradient(90deg, #215e14ff, #11501cff, #4a7b3dff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ready to Elevate Your Research?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-8 text-center text-[#1e1e1e]"
          >
            {ratsData.cta}
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

export default ResearchAssistanceServices;
