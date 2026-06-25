import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Building, Handshake, TrendingUp, Award, CheckCircle, ArrowRight, Users, Globe, Target } from 'lucide-react';
import SEO from '../SEO';

const CorporateAstuteDropdown = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Corporate Collaborations",
      description: "Strategic partnerships and joint ventures with industry leaders",
      features: ["Partnership development", "Joint research initiatives", "Resource sharing", "Market expansion"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Analyte Assessment Services",
      description: "Comprehensive business solutions for biotechnology companies",
      features: ["Business consulting", "Regulatory compliance", "Quality management", "Operational efficiency"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "StackUp",
      description: "Technology stack optimization and digital transformation",
      features: ["IT infrastructure", "Digital solutions", "Process automation", "Data analytics"]
    }
  ];

  const stats = [
    { number: "100+", label: "Corporate Partners" },
    { number: "50+", label: "Successful Collaborations" },
    { number: "25+", label: "Industry Sectors" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <SEO 
        title="Corporate Astute"
        description="Strategic Business Solutions for Biotechnology. Corporate Astute delivers comprehensive business solutions designed specifically for the biotechnology and life sciences sectors."
        keywords="Corporate Astute, Corporate Collaborations, Analyte Assessment Services, StackUp, Partnership development, Business consulting, IT infrastructure"
      />
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-indigo-700 to-blue-600">
        <motion.div
          ref={sectionRef}
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Corporate Astute</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto px-4 text-justify">
            Strategic Business Solutions for Biotechnology
          </p>
          <p className="text-base text-gray-200 mt-2 max-w-3xl mx-auto px-4 text-justify">
            Empowering companies with innovative solutions, strategic partnerships, and operational excellence
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
              Driving Corporate Success in Biotechnology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
              Corporate Astute delivers comprehensive business solutions designed specifically for the 
              biotechnology and life sciences sectors. We help companies navigate complex challenges, 
              optimize operations, and achieve sustainable growth through strategic partnerships and 
              innovative solutions.
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
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
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
                  
                  <button className="w-full mt-6 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
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
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
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
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg mb-6 opacity-90 text-justify">
                Partner with us to unlock new opportunities and drive sustainable growth
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CorporateAstuteDropdown; 