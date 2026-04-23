

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

import {
  UtensilsCrossed, Droplet, Pill, Sprout, Wind, Recycle,
  Check, Award, Users, Leaf, ArrowRight, Clock, Package, FlaskConical, Cloud, Wrench, Microscope, Locate, Trash2, Sparkles, Handshake, TrendingUp, Lightbulb
} from "lucide-react";
import Banner from '../../assets/images/PageBanners/8.jpg'

// === DATA ===
const servicesData = [
  {
    id: 'food',
    title: 'Food Testing Services',
    icon: UtensilsCrossed,
    summary: 'Accurate analysis for FSSAI compliance, nutritional labeling, and food safety.',
    content: {
      intro: 'We offer a full suite of food testing services tailored to your specific needs. Our state-of-the-art laboratory and team of certified food analysts provide accurate and reliable results, helping you comply with regulations from the Food Safety and Standards Authority of India (FSSAI) and other global standards.',
      services: [
        { icon: FlaskConical, text: 'Microbiological Analysis: We test for harmful bacteria, yeasts, and molds to prevent foodborne illnesses.' },
        { icon: FlaskConical, text: 'Chemical Analysis: Our tests detect and quantify contaminants such as pesticides, heavy metals, and food additives.' },
        { icon: Package, text: 'Nutritional Labeling: We provide precise analysis of nutritional content to ensure accurate labeling and consumer transparency.' },
        { icon: Locate, text: 'Adulteration & Authenticity Testing: We use advanced molecular techniques to verify the purity and origin of your products, protecting against food fraud.' },
        { icon: Clock, text: 'Shelf-Life Studies: We help you determine the optimal expiration date for your products, ensuring quality and freshness over time.' },
      ],
      whyChoose: [
        { icon: Check, text: 'Accurate & Reliable Results: Our laboratory adheres to stringent quality control standards, providing data you can trust.' },
        { icon: Award, text: 'Fast Turnaround Time: We understand the demands of the food industry and are committed to delivering results efficiently so you can make timely decisions.' },
        { icon: Users, text: 'Expert Guidance: Our team provides more than just data; we offer expert interpretation and actionable insights to help you navigate complex regulatory landscapes.' },
      ],
      cta: 'Ready to ensure the safety and quality of your food products? Contact us today to discuss your testing needs and discover how our services can benefit your business.'
    }
  },
  {
    id: 'water',
    title: 'Water Testing Services',
    icon: Droplet,
    summary: 'Comprehensive analysis of drinking, industrial, and agricultural water for safety.',
    content: {
      intro: 'We offer a full spectrum of analytical services to meet various needs, all performed with the highest standards of accuracy and reliability.',
      services: [
        { icon: FlaskConical, text: 'Drinking Water Analysis: We test for a complete range of parameters, including bacteria (e.g., E. coli), heavy metals (e.g., lead, arsenic), nitrates, and other chemical contaminants to ensure your water is safe to drink.' },
        { icon: Wrench, text: 'Industrial & Wastewater Testing: We help businesses comply with environmental regulations by analyzing wastewater for pollutants before discharge.' },
        { icon: Leaf, text: 'Agricultural Water Testing: We test water used for irrigation to ensure it won\'t harm crops or soil, or contaminate produce.' },
        { icon: Locate, text: 'Groundwater & Environmental Testing: We provide testing for environmental consultants and regulatory bodies to monitor the health of natural water sources.' },
      ],
      whyChoose: [
        { icon: Check, text: 'Certified and Accurate: Our lab adheres to strict national and international standards, providing you with data you can trust for regulatory reporting or personal assurance.' },
        { icon: Award, text: 'Fast & Efficient: We understand the urgency of water quality concerns and are committed to providing prompt service and quick turnaround times for your results.' },
        { icon: Users, text: 'Expert Support: Our team of experienced chemists and environmental scientists is available to help you understand your test results and the implications for your business or home.' },
      ],
      cta: 'Take the first step toward clear, safe water. Contact us to schedule a test or to learn more about our services.'
    }
  },
  {
    id: 'drug',
    title: 'Drug Testing Services',
    icon: Pill,
    summary: 'Confidential and legally defensible testing for workplace and court-ordered needs.',
    content: {
      intro: 'We offer a full range of drug testing solutions, each tailored to meet specific needs with the highest standards of accuracy and privacy.',
      services: [
        { icon: Users, text: 'Workplace Drug Testing: We help businesses maintain a safe and productive environment. Our services include pre-employment screening, random testing, post-accident testing, and reasonable suspicion testing to ensure compliance with company policy and legal regulations.' },
        { icon: Award, text: 'Legal and Court-Ordered Testing: Our chain-of-custody procedures ensure legally defensible results for court-ordered tests, probation requirements, and family law cases.' },
        { icon: Microscope, text: 'Personal & Family Testing: We provide confidential and non-judgmental testing services for individuals and families who need to confirm a person\'s drug use.' },
        { icon: FlaskConical, text: 'Different Sample Types: We can test a variety of samples, including urine, hair, and saliva, to meet the specific requirements of your situation.' },
      ],
      whyChoose: [
        { icon: Check, text: 'Certified and Compliant: Our laboratory is fully certified, and our procedures adhere to stringent industry standards to ensure the accuracy and reliability of every test.' },
        { icon: Award, text: 'Confidentiality: We handle all samples and results with the utmost discretion and privacy.' },
        { icon: Users, text: 'Expert Support: Our team is available to guide you through the testing process, help you choose the right test, and answer any questions you may have.' },
      ],
      cta: 'Take the first step toward getting the accurate results you need. Contact us to schedule a test or to learn more about our services.'
    }
  },
  {
    id: 'soil',
    title: 'Soil Testing Services',
    icon: Sprout,
    summary: 'Evaluation of soil nutrients, pH levels, and physical properties for agriculture.',
    content: {
      intro: 'We offer a full range of tests, from basic nutrient analysis to advanced chemical and physical evaluations. Our state-of-the-art laboratory and team of experts are committed to providing you with accurate and actionable results.',
      services: [
        { icon: FlaskConical, text: 'Nutrient Analysis: We measure key nutrients like Nitrogen (N), Phosphorus (P), and Potassium (K), as well as essential micronutrients. This data helps you create a precise fertilization plan, preventing both nutrient deficiencies and wasteful over-application.' },
        { icon: Wrench, text: 'pH Level & Acidity: We determine your soil\'s pH, which is crucial for nutrient availability. A balanced pH ensures your plants can absorb the nutrients they need to thrive.' },
        { icon: Locate, text: 'Physical Properties: We analyze your soil\'s texture, structure, and organic matter content, which affect water retention and aeration.' },
        { icon: Trash2, text: 'Contaminant Screening: We test for the presence of heavy metals or other harmful contaminants that could affect crop safety and human health.' },
      ],
      whyChoose: [
        { icon: Check, text: 'Actionable Insights: We don\'t just provide data. We offer clear, easy-to-understand reports with specific recommendations for improving your soil\'s health.' },
        { icon: Award, text: 'Certified and Reliable: Our lab follows rigorous standards to ensure the accuracy and consistency of every test result.' },
        { icon: Users, text: 'Expert Support: Our team of agronomists and soil scientists is available to help you interpret your results and answer your questions.' },
      ],
      cta: 'Ready to take control of your growing environment? Contact us to order a soil testing kit or to learn more about our services.'
    }
  },
  {
    id: 'air',
    title: 'Air Sampling Services',
    icon: Wind,
    summary: 'Testing for microbial contaminants, VOCs, and particulate matter for air quality.',
    content: {
      intro: 'We offer a comprehensive suite of air quality testing services, using advanced equipment and a certified laboratory to deliver accurate, reliable results. Our expert team is trained to conduct sampling for a wide range of contaminants.',
      services: [
        { icon: FlaskConical, text: 'Microbial Contaminants: We test for the presence of airborne mold, bacteria, and fungi that can cause respiratory issues and other health problems.' },
        { icon: Cloud, text: 'Volatile Organic Compounds (VOCs): We measure levels of harmful chemicals emitted from building materials, paints, and cleaners that can impact indoor air quality.' },
        { icon: Wrench, text: 'Particulate Matter (PM): We analyze airborne particles, including dust, pollen, and allergens, to assess their concentration and potential health risks.' },
        { icon: Locate, text: 'Industrial Pollutants: For industrial and commercial sites, we provide specialized testing for a variety of industrial gases and fumes to ensure regulatory compliance and worker safety.' },
      ],
      whyChoose: [
        { icon: Check, text: 'Accuracy & Expertise: Our technicians use state-of-the-art sampling equipment and our lab follows strict protocols to ensure precise results you can trust.' },
        { icon: Award, text: 'Actionable Reports: We provide clear, easy-to-understand reports that not only show you the data but also offer practical recommendations for improving your air quality.' },
        { icon: Users, text: 'Peace of Mind: Knowing the quality of your air allows you to make informed decisions about ventilation, purification, and safety protocols, giving you and your occupants peace of mind.' },
      ],
      cta: 'Ready to take control of your air quality? Contact us to schedule a consultation or to learn more about our air sampling services.'
    }
  },
  {
    id: 'environmental',
    title: 'Environmental Cleanup',
    icon: Recycle,
    summary: 'Expert remediation services for contaminated soil and water sources.',
    content: {
      intro: 'We offer a full suite of services designed to handle a wide range of environmental challenges. Our experienced team works with a variety of industries, providing tailored solutions that meet regulatory requirements and exceed expectations.',
      services: [
        { icon: FlaskConical, text: 'Soil and Groundwater Remediation: We specialize in cleaning up contaminated land and water sources using advanced techniques like bioremediation, chemical oxidation, and excavation to remove pollutants and restore the site to a safe state.' },
        { icon: Wrench, text: 'Emergency Spill Response: Our 24/7 rapid response team is equipped to handle unexpected hazardous material spills, from oil and chemicals to industrial waste. We contain the spill, manage the cleanup, and prevent further environmental damage.' },
        { icon: Trash2, text: 'Hazardous Waste Management: We provide end-to-end solutions for the safe handling, transport, and disposal of hazardous and non-hazardous waste, ensuring full regulatory compliance from start to finish.' },
        { icon: Locate, text: 'Site Assessment & Investigation: We conduct thorough environmental site assessments (Phase I and II) to identify potential contamination and liabilities, providing you with the data you need for informed decision-making.' },
        { icon: Trash2, text: 'Demolition and Decontamination: We offer specialized services for the safe demolition of contaminated structures and the meticulous decontamination of industrial sites, preparing them for future use.' },
      ],
      whyChoose: [
        { icon: Check, text: 'Expertise and Experience: Our team of environmental scientists, engineers, and technicians has decades of experience in the field, tackling complex projects with proven methodologies.' },
        { icon: Award, text: 'Regulatory Compliance: We have an in-depth understanding of local, national, and international environmental regulations, ensuring your project is handled with complete legal compliance.' },
        { icon: Users, text: 'Innovative Solutions: We leverage the latest in environmental technology to provide cost-effective and efficient solutions that minimize disruption and environmental impact.' },
        { icon: Users, text: 'Commitment to Safety: The safety of our team, our clients, and the public is our top priority. We adhere to the highest safety standards in every operation we perform.' },
      ],
      cta: 'If you are facing an environmental challenge, don\'t wait. Contact us today for a consultation and discover how we can help you restore your environment and protect your assets.'
    }
  },
];

// === ANIMATION VARIANTS ===
const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const glowAnimation = {
  whileHover: {
    scale: 1.05,
    boxShadow: "0 0 8px #714819, 0 0 25px #b2874b",
    transition: { duration: 0.3, ease: "easeInOut" }
  },
};

// === COMPONENT ===
const AAS = () => {
  const [selectedServiceId, setSelectedServiceId] = useState(servicesData[0].id);
  const selectedService = servicesData.find(s => s.id === selectedServiceId);
  const contentRef = useRef(null);

  const handleServiceClick = (id) => {
    setSelectedServiceId(id);
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white text-[#1e1e1e] min-h-screen font-inter overflow-hidden relative">

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
            Analytes Assessment Services
          </h1>
        </motion.div>
      </section>

      {/* Services Selector */}
      <section id="services" className="max-w-7xl mx-auto py-12 px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819]">
          Our Services
        </h2>
        <div className="flex overflow-x-auto gap-4 p-2 slider-container scrollbar-hide">
          {servicesData.map(service => (
            <motion.button
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className={`flex-shrink-0 w-40 md:w-52 p-5 rounded-3xl text-center shadow-lg transition-all duration-300
                ${selectedServiceId === service.id
                  ? "bg-gradient-to-br from-[#714819] to-[#b2874b] text-white scale-105"
                  : "bg-gray-50 border border-gray-200 text-[#1e1e1e] hover:scale-105"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <service.icon size={48} className="mx-auto mb-2" />
              <span className="font-semibold text-lg">{service.title}</span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <div ref={contentRef} className="scroll-mt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedServiceId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full mx-auto px-4"
          >
            {selectedService && (
              <>
                {/* Intro */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-[#f0f0f0] flex items-center justify-center">
                    <selectedService.icon size={36} className="text-[#714819]" />
                  </div>
                  <h2 className="text-4xl font-bold text-[#1e1e1e]">{selectedService.title}</h2>
                </div>
                <p className="text-gray-700 text-lg mb-12 text-justify">{selectedService.content.intro}</p>

                {/* Our Services Cards */}
                <motion.div variants={listVariants} initial="hidden" animate="visible" className="grid md:grid-cols-2 gap-6 mb-12">
                  {selectedService.content.services.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      className="group bg-white shadow-lg rounded-2xl p-6 min-h-32 hover:bg-gradient-to-r hover:from-[#714819] hover:to-[#b2874b] hover:text-white transition-all duration-300 cursor-pointer flex gap-4 items-start border border-gray-200"
                    >
                      <div>
                        <item.icon size={40} className="text-[#714819] group-hover:text-white transition-all duration-300" />
                      </div>
                      <p className="font-medium text-gray-700 group-hover:text-white transition-all duration-300 text-justify">{item.text}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Why Choose Us Horizontal Scroll - FIXED */}
                <div className="mb-12 ">
                  <h3 className="text-3xl font-bold text-[#0f2920] text-center mb-6">Why Choose Us?</h3>
                  <div className="flex overflow-x-auto gap-6 py-8  scrollbar-hide md:justify-center">
                    {selectedService.content.whyChoose.map((item, i) => (
                      <motion.div
                        key={i}
                        variants={glowAnimation}
                        whileHover="whileHover"
                        className="group flex-shrink-0 bg-gray-50 rounded-2xl shadow-lg p-6 w-64 border border-gray-200 hover:bg-gradient-to-r hover:from-[#714819] hover:to-[#b2874b] transition-all duration-300"
                      >
                        <item.icon size={64} className="mb-3 text-[#714819] group-hover:text-white transition-all duration-300" />
                        <p className="text-gray-700 group-hover:text-white transition-all duration-300 text-justify">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <section className="w-full py-12 px-4 lg:px-12 bg-[#d7f2da] text-black text-center">
                  <div className="max-w-4xl mx-auto">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-3xl lg:text-4xl font-bold"
                      style={{
                        background: 'linear-gradient(90deg, #215e14ff, #11501cff, #4a7b3dff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Get Started Today
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-lg mb-8 text-center text-[#1e1e1e]"
                    >
                      {selectedService.content.cta}
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
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default AAS;