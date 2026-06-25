import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

import {
  Sparkles, Star, Trophy, Diamond, Gem, Check, ArrowRight
} from "lucide-react";
import Banner from '../../assets/images/PageBanners/activities.webp'


// === DATA FOR THIS PAGE ===
const pamData = {
  title: 'Peptides Assistance Membership',
  tagline: 'Your Academic Success. Tailored for You.',
  intro: 'Our Peptides Assistance Membership (PAM) offers personalized support across a range of membership tiers. Choose the plan that fits your goals and get the guidance you need to excel.\n\nEvery student’s journey is unique. Whether you need a quick boost for a single course or comprehensive, long-term support, we have a plan designed just for you. Our membership categories are crafted to provide the right level of academic assistance, ensuring you have the tools and expertise to succeed.',
  tiers: [
    {
      name: 'Bronze Tier',
      subtitle: 'Foundational Support',
      description: 'Perfect for students who need on-demand help with specific assignments and topics.',
      icon: Sparkles,
      features: [
        { title: 'On-Demand Assistance', body: 'Get quick answers and clarifications on homework problems.' },
        { title: 'Q&A Sessions', body: 'Access to a library of recorded and live Q&A sessions.' },
        { title: 'Basic Resources', body: 'Access to our fundamental study guides and practice questions.' },
      ],
      colorClass: 'text-amber-500',
      borderColor: 'border-t-amber-500'
    },
    {
      name: 'Silver Tier',
      subtitle: 'Focused Guidance',
      description: 'Ideal for students who want consistent, weekly support to stay on track.',
      icon: Star,
      features: [
        { title: 'Bronze Tier benefits, plus:' },
        { title: 'Weekly Tutoring', body: 'One-on-one sessions with a dedicated tutor.' },
        { title: 'Study Plan Creation', body: 'Get a personalized study schedule tailored to your courses and goals.' },
        { title: 'Priority Support', body: 'Faster response times for all your academic queries.' },
      ],
      colorClass: 'text-gray-400',
      borderColor: 'border-t-gray-300'
    },
    {
      name: 'Gold Tier',
      subtitle: 'Comprehensive Coaching',
      description: 'Designed for students aiming for top grades and in-depth mastery of their subjects.',
      icon: Trophy,
      features: [
        { title: 'Silver Tier benefits, plus:' },
        { title: 'Extended Tutoring', body: 'More time with your tutor for detailed, in-depth sessions.' },
        { title: 'Exam Preparation', body: 'Specialized sessions focusing on strategies for upcoming exams.' },
        { title: 'Progress Reports', body: 'Regular reports to track your academic performance and identify areas for improvement.' },
      ],
      colorClass: 'text-yellow-500',
      borderColor: 'border-t-yellow-500'
    },
    {
      name: 'Diamond Tier',
      subtitle: 'Elite Mentorship',
      description: 'For ambitious students who want to accelerate their academic journey and get a competitive edge.',
      icon: Gem,
      features: [
        { title: 'Gold Tier benefits, plus:' },
        { title: 'Senior Mentors', body: 'Work with our most experienced and highly-rated academic mentors.' },
        { title: 'Research Assistance', body: 'Support with research projects, paper writing, and academic publishing.' },
        { title: 'Personalized Workshops', body: 'Access to exclusive workshops on advanced topics and study techniques.' },
      ],
      colorClass: 'text-sky-400',
      borderColor: 'border-t-sky-400'
    },
    {
      name: 'Platinum Tier',
      subtitle: 'Ultimate Academic Partnership',
      description: 'Our most exclusive and comprehensive tier, offering unlimited support and personalized attention for truly exceptional results.',
      icon: Diamond,
      features: [
        { title: 'Diamond Tier benefits, plus:' },
        { title: 'Unlimited Tutoring', body: 'Get unlimited, one-on-one sessions whenever you need them.' },
        { title: '24/7 Priority Access', body: 'Contact your mentor anytime for urgent support.' },
        { title: 'Holistic Academic Planning', body: 'A complete, customized plan covering all aspects of your academic and career goals.' },
      ],
      colorClass: 'text-gray-600',
      borderColor: 'border-t-gray-600'
    },
  ],
  cta: {
    heading: 'Ready to Get Started?',
    body: 'Choose the plan that\'s right for you and begin your journey to academic excellence. Our team is here to help you every step of the way.'
  }
};

// === ANIMATION VARIANTS ===
const cardVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};

const ctaAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// === COMPONENT ===
const PeptidesAssistanceMembership = () => {
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
            {pamData.title}
          </h1>
        </motion.div>
      </section>

      {/* Intro Text Section */}
      <section className="bg-white py-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto whitespace-pre-line"
        >
          <p className="text-lg md:text-xl text-gray-700 text-justify">{pamData.intro}</p>
        </motion.div>
      </section>

      {/* Membership Tiers Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819]">
            Our Membership Tiers
          </h2>
          <div className="flex flex-col gap-8">
            {pamData.tiers.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white p-8 rounded-2xl shadow-lg border-t-8 ${tier.borderColor} flex flex-col md:flex-row items-start md:items-center gap-8`}
                >
                  {/* Tier Title and Icon */}
                  <div className="flex flex-col items-center justify-center text-center w-full md:w-1/4 flex-shrink-0">
                    <Icon size={56} className={`mb-4 ${tier.colorClass}`} />
                    <h3 className="text-2xl font-bold mb-1 text-[#0f2920]">{tier.name}</h3>
                    <p className="text-gray-600 font-medium text-justify">{tier.subtitle}</p>
                  </div>

                  {/* Tier Features */}
                  <div className="flex-grow w-full">
                    <p className="text-lg text-gray-700 font-medium mb-4 text-justify">{tier.description}</p>
                    <ul className="text-left w-full space-y-3 text-gray-700">
                      {tier.features.map((feature, idx) => (
                        <li key={idx}>
                          <div className="flex items-start">
                            <Check size={20} className="text-[#714819] mr-2 flex-shrink-0" />
                            <div className="flex-grow">
                              <p className="font-semibold text-justify">{feature.title}</p>
                              {feature.body && <p className="text-sm text-gray-600 text-justify">{feature.body}</p>}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
            {pamData.cta.heading}
          </motion.h2>
          <motion.p
            {...ctaAnimation}
            transition={{ ...ctaAnimation.transition, delay: 0.2 }}
            className="text-lg mb-8 text-[#1e1e1e]"
          >
            {pamData.cta.body}
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

export default PeptidesAssistanceMembership;