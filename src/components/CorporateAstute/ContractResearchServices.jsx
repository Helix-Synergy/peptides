import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import {
  Users, TrendingUp, Award, ArrowRight, Pill, Leaf, UtensilsCrossed, Wrench, Lightbulb, FlaskConical, Check, Microscope, Locate, Sprout, Cloud, Recycle, Trash2, Clock
} from "lucide-react";
import Banner from '../../assets/images/PageBanners/3.jpg'

// === DATA FOR THIS PAGE ===
const crsData = {
  title: 'Contract Research Services',
  tagline: 'Powering Innovation Across All Disciplines',
  intro: 'We offer Contract Research Services (CRS) specializing in a wide range of scientific and technical fields. Partner with us to accelerate your R&D, gain expert insights, and bring your ideas to life.',
  services: [
    { icon: Pill, title: 'Pharmaceutical & Biotechnology', description: 'From drug discovery and preclinical studies to clinical trial management and bioanalysis, we support every phase of pharmaceutical and biotech R&D. We help validate drug targets, assess safety, and manage complex clinical data to accelerate your product’s journey to market.' },
    { icon: Leaf, title: 'Environmental Sciences', description: 'We provide comprehensive environmental research, including soil and water quality analysis, ecological studies, and environmental impact assessments. Our work helps industries and governments monitor ecosystems, ensure regulatory compliance, and develop sustainable solutions.' },
    { icon: UtensilsCrossed, title: 'Food & Agriculture', description: 'Our services cover everything from nutritional analysis and food safety testing to crop science research and agricultural product development. We help optimize food quality, ensure product authenticity, and innovate for a more sustainable food supply.' },
    { icon: Wrench, title: 'Materials Science', description: 'We conduct research on new materials and analyze existing ones. Our services include material characterization, failure analysis, and the development of new composites and polymers for industries such as aerospace, automotive, and consumer goods.' },
    { icon: FlaskConical, title: 'Chemical Sciences', description: 'We offer a full range of chemical research services, including custom synthesis, chemical analysis, and process optimization. Our expertise helps clients in the chemical, energy, and specialty materials sectors solve complex problems and create new products.' },
  ],
  whyChoose: [
    { icon: Users, text: 'Our scientists and researchers come from diverse backgrounds, allowing us to tackle complex projects that span multiple fields.' },
    { icon: TrendingUp, text: 'We are equipped with state-of-the-art laboratories and cutting-edge analytical instruments to ensure the highest quality of research.' },
    { icon: Award, text: 'We operate under strict quality control protocols and adhere to global regulatory standards, giving you confidence in our results.' },
  ],
  cta: 'Ready to innovate and accelerate your research? Contact us today to discuss how our Contract Research Services can help you achieve your goals.'
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
const ContractResearchServices = () => {
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
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            {crsData.title}
          </h1>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819]">
            Our Disciplines of Expertise
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {crsData.services.map((item, i) => {
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
            Why Partner With Us?
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-1 md:grid-cols-3 gap-8"
          >
            {crsData.whyChoose.map((item, i) => {
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

      {/* CTA */}
      <section className="w-full py-16 px-4 lg:px-12 bg-[#d7f2da] text-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
            Ready to Start Your Academic Project?
          </h2>
          <p className="text-lg mb-8 text-center text-primary-text">
            Let’s discuss your requirements and craft a roadmap to success.
          </p>
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

export default ContractResearchServices;