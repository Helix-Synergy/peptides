import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


import {
  Factory, HeartPulse, Briefcase, Code, Check, Award, ArrowRight,
  BookOpen, Building2, FlaskConical, Atom, PencilRuler, Headphones
} from 'lucide-react';
import Banner from '../../assets/images/PageBanners/industryCollaborationsBanner.png'

// === DATA FOR THIS PAGE ===
const reachData = {
  title: 'Advanced Industrial Reach Program',
  tagline: 'Beyond the Classroom. Into the Industry.',
  intro: 'The best way to understand an industry is to experience it firsthand. Our program is designed to take you out of the lecture hall and into the real world. We provide unique opportunities to see cutting-edge technology in action, meet with top industry professionals, and gain a deeper understanding of the career paths available in your field. It\'s more than a tour—it\'s a direct line to your professional future.',
  whatWeOffer: [
    {
      title: 'Engineering & Technology',
      description: 'Witness the future of manufacturing by touring a robotics lab, a smart factory, or an advanced automotive plant.',
      icon: Factory,
    },
    {
      title: 'Life Sciences & Healthcare',
      description: 'Get a behind-the-scenes look at a biotech research lab, a pharmaceutical manufacturing facility, or a state-of-the-art hospital.',
      icon: HeartPulse,
    },
    {
      title: 'Business & Management',
      description: 'Explore the inner workings of a major corporate headquarters, a global logistics hub, or a financial trading floor.',
      icon: Briefcase,
    },
    {
      title: 'IT & Data',
      description: 'Step inside a modern data center, a software development firm, or a cybersecurity operations center.',
      icon: Code,
    },
  ],
  benefits: [
    { title: 'Real-World Insight', description: 'See how classroom concepts are applied in a professional setting and gain a deeper appreciation for your field.', icon: BookOpen },
    { title: 'Networking Opportunities', description: 'Connect directly with industry leaders, engineers, and researchers who can provide valuable career advice and mentorship.', icon: Building2 },
    { title: 'Career Clarity', description: 'Explore various roles and departments to discover which career path truly excites you.', icon: FlaskConical },
  ],
  industryDetails: [
    {
      name: 'Engineering & Technology',
      icon: Factory,
      subsections: [
        {
          title: 'Artificial Intelligence & Machine Learning',
          topics: ['Deep Learning', 'Natural Language Processing (NLP)', 'Reinforcement Learning', 'Computer Vision'],
        },
        {
          title: 'Data Science',
          topics: ['Big Data Analytics', 'Predictive Modeling', 'Data Warehousing', 'Data Mining'],
        },
        {
          title: 'Cybersecurity',
          topics: ['Ethical Hacking', 'Blockchain Technology', 'Threat Intelligence', 'Cryptography'],
        },
        {
          title: 'Software Development',
          topics: ['DevOps', 'Cloud Computing (AWS, Azure, GCP)', 'Microservices Architecture'],
        },
      ],
    },
    {
      name: 'Life Sciences & Healthcare',
      icon: HeartPulse,
      subsections: [
        {
          title: 'Biotechnology',
          topics: ['Genetic Engineering (CRISPR)', 'Genomics', 'Bioinformatics', 'Drug Discovery'],
        },
        {
          title: 'Pharmacology',
          topics: ['Clinical Trials', 'Pharmacokinetics', 'Pharmacodynamics', 'Toxicology'],
        },
        {
          title: 'Microbiology',
          topics: ['Virology', 'Mycology', 'Immunology', 'Genetic Sequencing'],
        },
        {
          title: 'Medical Science',
          topics: ['Regenerative Medicine', 'Personalized Medicine', 'Neurobiology'],
        },
      ],
    },
    {
      name: 'Business & Management',
      icon: Briefcase,
      subsections: [
        {
          title: 'Finance',
          topics: ['Financial Modeling', 'Quantitative Finance', 'Algorithmic Trading', 'Risk Management'],
        },
        {
          title: 'Marketing',
          topics: ['Digital Marketing Analytics', 'Search Engine Optimization (SEO)', 'Brand Management', 'Market Research'],
        },
        {
          title: 'Management',
          topics: ['Strategic Management', 'Business Process Re-engineering', 'Change Management', 'Supply Chain Optimization'],
        },
      ],
    },
    {
      name: 'Humanities & Social Sciences',
      icon: BookOpen,
      subsections: [
        {
          title: 'Psychology',
          topics: ['Cognitive Behavioral Therapy (CBT)', 'Neuropsychology', 'Abnormal Psychology', 'Social Cognition'],
        },
        {
          title: 'Economics',
          topics: ['Econometrics', 'Behavioral Economics', 'Game Theory', 'Macroeconomic Policy'],
        },
        {
          title: 'Political Science',
          topics: ['International Relations Theory', 'Public Policy Analysis', 'Comparative Politics'],
        },
      ],
    },
    {
      name: 'Physical Sciences',
      icon: Atom,
      subsections: [
        {
          title: 'Physics',
          topics: ['Quantum Mechanics', 'Astrophysics', 'Particle Physics', 'String Theory', 'Dark Matter and Dark Energy', 'Quantum Entanglement', 'Condensed Matter Physics'],
        },
        {
          title: 'Chemistry',
          topics: ['Nanochemistry', 'Organic Synthesis', 'Spectroscopy', 'Polymer Chemistry'],
        },
        {
          title: 'Environmental Science',
          topics: ['Climate Modeling', 'Sustainability', 'Environmental Impact Assessment', 'Hydrogeology', 'Carbon Capture and Storage (CCS)', 'Sustainable Energy Systems', 'Urban Ecology'],
        },
      ],
    },
    {
      name: 'Science & Research',
      icon: FlaskConical,
      subsections: [
        {
          title: 'Astrophysics',
          topics: ['The search for exoplanets', 'gravitational waves', 'black holes'],
        },
        {
          title: 'Genetics',
          topics: ['Epigenetics', 'gene therapy', 'genetic sequencing'],
        },
        {
          title: 'Geology',
          topics: ['Plate tectonics', 'seismology', 'volcanology'],
        },
        {
          title: 'Meteorology',
          topics: ['Weather forecasting', 'climate change', 'atmospheric science'],
        },
      ],
    },
    {
      name: 'Arts & Design',
      icon: PencilRuler,
      subsections: [
        {
          title: 'Graphic Design',
          topics: ['Branding', 'typography', 'color theory'],
        },
        {
          title: 'Photography',
          topics: ['Photojournalism', 'commercial photography', 'portraiture'],
        },
        {
          title: 'Film Studies',
          topics: ['Film theory', 'screenwriting', 'film production'],
        },
        {
          title: 'Music Theory',
          topics: ['Harmony', 'counterpoint', 'composition'],
        },
      ],
    },
  ],
  cta: {
    heading: 'Ready to Take the Next Step?',
    body: 'Your future starts with a single tour. Join us and gain the insights and connections you need to launch a successful career.',
  }
};

// === ANIMATION VARIANTS ===
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const tabContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ctaAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// === COMPONENT ===
const AdvancedIndustrialReach = () => {
  const [activeTab, setActiveTab] = useState(0);

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
            Advanced Industrial Reach 
          </h1>
        </motion.div>
      </section>

      {/* Intro Text Section */}
      <section className="bg-white py-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-700 text-justify">{reachData.intro}</p>
        </motion.div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819]">
            What We Offer
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
          >
            {reachData.whatWeOffer.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
      
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-[#f2fcf5]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819]">
            The Benefits of Our Program
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-1 md:grid-cols-3 gap-8"
          >
            {reachData.benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
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

      {/* Detailed Industry Section with Tabs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819]">
            Industry Breakdown
          </h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {reachData.industryDetails.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 py-3 px-6 rounded-full font-semibold transition-all duration-300 ease-in-out ${
                    activeTab === index
                      ? 'bg-[#714819] text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <Icon size={20} />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="p-8 bg-gray-100 rounded-2xl shadow-inner mt-8"
          >
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reachData.industryDetails[activeTab].subsections.map((section, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="text-2xl font-bold mb-3 text-[#0f2920]">{section.title}</h3>
                  <ul className="list-none space-y-2">
                    {section.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-gray-700">
                        <Check size={18} className="text-[#714819] mr-2 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
            {reachData.cta.heading}
          </motion.h2>
          <motion.p
            {...ctaAnimation}
            transition={{ ...ctaAnimation.transition, delay: 0.2 }}
            className="text-lg mb-8 text-[#1e1e1e]"
          >
            {reachData.cta.body}
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

export default AdvancedIndustrialReach;
