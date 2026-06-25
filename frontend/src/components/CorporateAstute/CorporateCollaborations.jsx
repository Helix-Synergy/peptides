import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Handshake, Users, Globe, Target, CheckCircle, ArrowRight, Star, Building, TrendingUp } from 'lucide-react';

const CorporateCollaborations = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const collaborationTypes = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Strategic Partnerships",
      description: "Long-term collaborative relationships with shared goals and mutual benefits",
      benefits: ["Resource sharing", "Joint R&D initiatives", "Market expansion", "Risk mitigation"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Joint Ventures",
      description: "Co-created business entities for specific projects or market opportunities",
      benefits: ["Shared investment", "Combined expertise", "Faster market entry", "Innovation acceleration"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Alliances",
      description: "Cross-border partnerships for global market access and local expertise",
      benefits: ["Global reach", "Local knowledge", "Regulatory compliance", "Cultural insights"]
    }
  ];

  const successStories = [
    {
      company: "BioTech Innovations",
      industry: "Pharmaceutical Research",
      collaboration: "Joint drug development program",
      outcome: "Successfully launched 3 new drug candidates in 2 years",
      rating: 5
    },
    {
      company: "Molecular Dynamics",
      industry: "Laboratory Equipment",
      collaboration: "Technology licensing agreement",
      outcome: "Increased market share by 40% in target regions",
      rating: 5
    },
    {
      company: "Genetics Research Institute",
      industry: "Academic Research",
      collaboration: "Research consortium",
      outcome: "Published 15+ peer-reviewed papers and secured $2M in funding",
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "Evaluate potential partners and collaboration opportunities"
    },
    {
      step: "2",
      title: "Strategic Planning",
      description: "Develop collaboration framework and objectives"
    },
    {
      step: "3",
      title: "Partnership Formation",
      description: "Establish legal agreements and operational structures"
    },
    {
      step: "4",
      title: "Implementation",
      description: "Execute collaboration plan and monitor progress"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-teal-700 to-cyan-600">
        <motion.div
          ref={sectionRef}
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Corporate Collaborations</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto px-4 text-justify">
            Strategic Partnerships for Business Growth
          </p>
          <p className="text-base text-gray-200 mt-2 max-w-3xl mx-auto px-4 text-justify">
            Forge powerful alliances and unlock new opportunities through strategic corporate collaborations
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
              Building Strategic Alliances for Success
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
              Our corporate collaboration services help biotechnology companies establish meaningful 
              partnerships that drive innovation, expand market reach, and create sustainable competitive 
              advantages. We facilitate strategic alliances that benefit all parties involved.
            </p>
          </motion.div>

          {/* Collaboration Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Types of Collaborations</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {collaborationTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    {type.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{type.title}</h4>
                  <p className="text-gray-600 mb-6 text-center">{type.description}</p>
                  
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Collaboration Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600 text-justify">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-6"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{story.company}</h4>
                  <p className="text-sm text-gray-600 mb-2 text-justify">{story.industry}</p>
                  <p className="text-sm text-gray-700 mb-3 text-justify"><strong>Collaboration:</strong> {story.collaboration}</p>
                  <p className="text-sm text-gray-700 text-justify"><strong>Outcome:</strong> {story.outcome}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Explore Collaboration Opportunities?</h3>
              <p className="text-lg mb-6 opacity-90 text-justify">
                Let's discuss how strategic partnerships can accelerate your business growth
              </p>
              <button className="bg-white text-teal-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center mx-auto">
                Start Collaboration Discussion <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CorporateCollaborations; 