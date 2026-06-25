import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import {
  BookOpen, Laptop, BarChart, Feather, Users, Award, Lightbulb, GraduationCap, ArrowRight, TrendingUp, Clock, Check
} from "lucide-react";
import Banner from '../../assets/images/PageBanners/8.webp'

// === DATA FOR THIS PAGE ===
const fusData = {
  title: 'Faculty Upskilling Services',
  tagline: 'Your Partner in Academic Excellence',
  intro: 'We offer a range of specialized workshops and courses to help faculty members enhance their professional skills and stay ahead of the curve. Each program is led by expert facilitators and focuses on practical, real-world application.',
  services: [
    { icon: BookOpen, title: 'Instructional Design & Curriculum Development', description: 'Learn how to design engaging and effective courses, whether for in-person or online delivery. Master the principles of creating a curriculum that drives student success and meets modern educational standards.' },
    { icon: Laptop, title: 'Integrating Technology in the Classroom', description: 'Explore the latest educational technologies and digital tools. We\'ll show you how to use them to create interactive lessons, manage student progress, and foster a dynamic learning environment.' },
    { icon: BarChart, title: 'Assessment & Evaluation Strategies', description: 'Move beyond traditional testing. Discover new methods for assessing student learning, providing meaningful feedback, and using data to improve your teaching.' },
    { icon: Feather, title: 'Research & Publishing Skills', description: 'Develop the skills needed to conduct impactful research, write compelling academic papers, and navigate the publishing process. Our program helps you elevate your scholarly profile.' },
  ],
  whyChoose: [
    { icon: GraduationCap, text: 'Expert-Led: Learn from a team of experienced educators and academic leaders who are at the forefront of educational innovation.' },
    { icon: Clock, text: 'Flexible & Accessible: Our programs are designed to fit your busy schedule. Choose from a variety of formats, including online courses, in-person workshops, and hybrid models.' },
    { icon: Check, text: 'Practical & Actionable: We focus on skills you can implement immediately in your classroom, ensuring a direct and positive impact on your students.' },
  ],
  cta: 'Let’s discuss your requirements and craft a roadmap to success.'
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
const FacultyUpskillingServices = () => {
  return (
    <div className="bg-gray-50 text-[#1e1e1e] font-inter relative min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-end text-end bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <motion.div
            initial={{ scale: 1.2, rotate: 0 }}
            // animate={{ scale: 1, rotate: 360 }}
            // transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${Banner})` }}
          ></motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 max-w-4xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{fusData.title}</h1>
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
          <p className="text-lg md:text-xl text-gray-700 text-justify">{fusData.intro}</p>
        </motion.div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819]">
            Our Programs
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {fusData.services.map((item, i) => {
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
            Why Choose Our Program?
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-1 md:grid-cols-3 gap-8"
          >
            {fusData.whyChoose.map((item, i) => {
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
            Ready to Transform Your Teaching & Research?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-8 text-center text-[#1e1e1e]"
          >
            {fusData.cta}
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

export default FacultyUpskillingServices;
