import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Cloud, Shield, CheckCircle, ArrowRight, Zap, BarChart3, Settings } from 'lucide-react';

const StackUp = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const techServices = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description: "Custom software solutions tailored to biotechnology industry needs",
      features: ["Web applications", "Mobile apps", "API development", "System integration"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Advanced analytics and business intelligence solutions",
      features: ["Data visualization", "Predictive analytics", "Reporting dashboards", "Performance metrics"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for your business",
      features: ["Cloud migration", "Infrastructure as code", "Security compliance", "Cost optimization"]
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: ["React", "Vue.js", "Angular", "TypeScript"],
      icon: <Code className="w-6 h-6" />
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Java", "C#"],
      icon: <Database className="w-6 h-6" />
    },
    {
      category: "Cloud",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      category: "Data",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const benefits = [
    "Scalable and maintainable code architecture",
    "Modern development practices and tools",
    "Security-first approach to development",
    "Performance optimization and monitoring",
    "Continuous integration and deployment",
    "24/7 technical support and maintenance"
  ];

  const caseStudies = [
    {
      company: "BioTech Analytics",
      project: "Laboratory Management System",
      outcome: "Reduced data entry time by 60% and improved accuracy by 95%",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      company: "Molecular Research Corp",
      project: "Data Visualization Platform",
      outcome: "Enabled researchers to analyze complex datasets 10x faster",
      tech: ["Vue.js", "Python", "MongoDB", "Docker"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-violet-700 to-purple-600">
        <motion.div
          ref={sectionRef}
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">StackUp</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto px-4 text-justify">
            Technology Stack Optimization
          </p>
          <p className="text-base text-gray-200 mt-2 max-w-3xl mx-auto px-4 text-justify">
            Modernize your technology infrastructure with cutting-edge solutions and best practices
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
              Elevate Your Technology Infrastructure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-justify">
              StackUp specializes in modernizing and optimizing technology stacks for biotechnology 
              companies. We help you build scalable, secure, and efficient systems that drive 
              innovation and business growth through cutting-edge technology solutions.
            </p>
          </motion.div>

          {/* Tech Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Technology Services</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {techServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h4>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Technology Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((stack, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {stack.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">{stack.category}</h4>
                  <div className="space-y-2">
                    {stack.technologies.map((tech, idx) => (
                      <div key={idx} className="text-sm text-gray-600 text-center">{tech}</div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose StackUp?</h3>
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
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Case Studies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-6"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">{study.company}</h4>
                  <p className="text-sm text-gray-600 mb-2 text-justify"><strong>Project:</strong> {study.project}</p>
                  <p className="text-sm text-gray-700 mb-3 text-justify"><strong>Outcome:</strong> {study.outcome}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech, idx) => (
                      <span key={idx} className="bg-violet-100 text-violet-800 px-2 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Modernize Your Tech Stack?</h3>
              <p className="text-lg mb-6 opacity-90 text-justify">
                Let's discuss how our technology solutions can transform your business
              </p>
              <button className="bg-white text-violet-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-200 flex items-center mx-auto">
                Start Technology Discussion <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StackUp; 