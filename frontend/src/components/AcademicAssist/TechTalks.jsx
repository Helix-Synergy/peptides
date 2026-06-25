import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Video, Users, Clock, Calendar, Play, ArrowRight, Star } from 'lucide-react';

const TechTalks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const upcomingTalks = [
    {
      title: "AI Revolution in Drug Discovery",
      date: "March 18, 2024",
      time: "3:00 PM - 4:30 PM",
      speaker: "Dr. Alex Chen",
      company: "TechBio Innovations",
      description: "Explore how artificial intelligence is transforming the pharmaceutical industry and accelerating drug development.",
      category: "Artificial Intelligence",
      attendees: "250+",
      format: "Live + Recording"
    },
    {
      title: "CRISPR Technology: Current State & Future",
      date: "March 25, 2024",
      time: "2:00 PM - 3:30 PM",
      speaker: "Prof. Maria Rodriguez",
      company: "GeneTech University",
      description: "Latest developments in CRISPR gene editing technology and its applications in medicine and agriculture.",
      category: "Gene Editing",
      attendees: "180+",
      format: "Live + Recording"
    },
    {
      title: "Quantum Computing in Bioinformatics",
      date: "April 2, 2024",
      time: "4:00 PM - 5:30 PM",
      speaker: "Dr. Sarah Kim",
      company: "QuantumBio Labs",
      description: "How quantum computing is solving complex biological problems and advancing computational biology.",
      category: "Quantum Computing",
      attendees: "120+",
      format: "Live + Recording"
    }
  ];

  const talkCategories = [
    {
      name: "Artificial Intelligence",
      icon: "🤖",
      count: 15,
      description: "AI applications in life sciences"
    },
    {
      name: "Biotechnology",
      icon: "🧬",
      count: 12,
      description: "Latest biotech innovations"
    },
    {
      name: "Data Science",
      icon: "📊",
      count: 10,
      description: "Big data in research"
    },
    {
      name: "Emerging Tech",
      icon: "🚀",
      count: 8,
      description: "Cutting-edge technologies"
    }
  ];

  const benefits = [
    "Access to industry leaders and innovators",
    "Real-time Q&A sessions",
    "Recorded sessions for later viewing",
    "Networking with professionals",
    "Latest industry insights and trends",
    "Continuing education credits"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[60vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-purple-700 to-pink-600">
        <motion.div
          ref={sectionRef}
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Tech Talks</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto px-4 text-justify">
            Stay updated with the latest technological advancements
          </p>
          <p className="text-base text-gray-200 mt-2 max-w-3xl mx-auto px-4 text-justify">
            Our tech talks feature industry leaders and innovators sharing insights on emerging trends
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
              Discover the Future of Technology in Life Sciences
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
              Join our Tech Talks series to explore cutting-edge technologies, innovative solutions,
              and breakthrough discoveries that are shaping the future of biotechnology, healthcare, and research.
            </p>
          </motion.div>

          {/* Upcoming Tech Talks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Upcoming Tech Talks</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {upcomingTalks.map((talk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {talk.category}
                    </span>
                    <span className="text-sm text-gray-500">{talk.attendees}</span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3">{talk.title}</h4>
                  <p className="text-gray-600 mb-4 text-justify">{talk.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{talk.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{talk.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{talk.speaker} - {talk.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Video className="w-4 h-4" />
                      <span>{talk.format}</span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Register for Talk
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Talk Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Tech Talk Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {talkCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h4>
                  <p className="text-sm text-gray-600 mb-3 text-justify">{category.description}</p>
                  <span className="text-blue-600 font-semibold">{category.count} talks</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Benefits of Attending Tech Talks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Stay Ahead of the Technology Curve</h3>
              <p className="text-lg mb-6 opacity-90 text-center">
                Subscribe to our Tech Talks series and never miss an opportunity to learn from industry leaders
              </p>
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center mx-auto">
                Subscribe to Series <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechTalks; 