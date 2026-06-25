import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Users, TrendingUp, Award, ArrowRight, CheckCircle, Star, Clock } from 'lucide-react';
import SEO from '../SEO';

const CareerSagaDropdown = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Coaching",
      description: "Personalized guidance to advance your professional journey",
      features: ["1-on-1 sessions", "Career planning", "Skill assessment", "Goal setting"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Job Mate",
      description: "Your AI-powered job search and application assistant",
      features: ["Resume optimization", "Job matching", "Interview prep", "Application tracking"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Peptides Assistance Membership",
      description: "Exclusive access to career development resources",
      features: ["Networking events", "Mentorship programs", "Industry insights", "Career workshops"]
    }
  ];

  const stats = [
    { number: "500+", label: "Career Success Stories" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "50+", label: "Industry Partners" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <SEO 
        title="Career Saga"
        description="Career Saga offers comprehensive career development services designed to help professionals in the biotechnology and life sciences sectors achieve their career goals."
        keywords="Career Saga, Career Coaching, Job Mate, Resume optimization, Job matching, Interview prep, Networking events, Mentorship programs"
      />
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-blue-700 to-indigo-600">
        <motion.div
          ref={sectionRef}
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Career Saga</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto px-4 text-justify">
            Your Complete Career Development Ecosystem
          </p>
          <p className="text-base text-gray-200 mt-2 max-w-3xl mx-auto px-4 text-justify">
            From career coaching to job placement, we're here to guide your professional success
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transform Your Career with Professional Guidance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
              Career Saga offers comprehensive career development services designed to help professionals 
              in the biotechnology and life sciences sectors achieve their career goals. Our integrated 
              approach combines personalized coaching, AI-powered tools, and exclusive networking opportunities.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
              <p className="text-lg mb-6 opacity-90 text-justify">
                Join thousands of professionals who have already taken their careers to the next level
              </p>
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center mx-auto">
                Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareerSagaDropdown; 