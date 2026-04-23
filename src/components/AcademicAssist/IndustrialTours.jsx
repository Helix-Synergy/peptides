import React from "react";
import {
  Factory,
  Building,
  Wrench,
  Truck,
  Video,
  FlaskConical,
  Utensils,
  Leaf,
  Users,
  Stethoscope,
  Microscope,
  Rocket,
  Shield,
  Palette,
  Droplets,
  Sprout,
  Package,
  Dna,
  User,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";
import industrialTourBanner from "../../assets/images/PageBanners/6.jpg";
import { Link } from "react-router-dom";

const tracksData = [
  { id: 1, title: "Manufacturing", icon: Wrench },
  { id: 2, title: "Energy", icon: Lightbulb },
  { id: 3, title: "Automotive", icon: Truck },
  { id: 4, title: "Logistics", icon: Package },
  { id: 5, title: "Media & Communication", icon: Video },
  { id: 6, title: "Pharmaceutical", icon: FlaskConical },
  { id: 7, title: "Food Processing", icon: Utensils },
  { id: 8, title: "Agricultural Research", icon: Leaf },
  { id: 9, title: "NGOs", icon: Users },
  { id: 10, title: "Hospitals", icon: Stethoscope },
  { id: 11, title: "Research Laboratories", icon: Microscope },
  { id: 12, title: "Startups & Incubators", icon: Rocket },
  { id: 13, title: "Robotics", icon: Shield },
  { id: 14, title: "Supply Chain", icon: Package },
  { id: 15, title: "Construction sites", icon: Building },
  { id: 16, title: "Urban development projects", icon: Building },
  { id: 17, title: "Architectural firms", icon: Building },
  { id: 18, title: "Botanical gardens", icon: Sprout },
  { id: 19, title: "National parks", icon: Leaf },
  { id: 20, title: "Agricultural farms", icon: Leaf },
  { id: 21, title: "Garment factories", icon: Palette },
  { id: 22, title: "Fashion houses", icon: Palette },
  { id: 23, title: "Design studios", icon: Palette },
  { id: 24, title: "Planetariums", icon: Lightbulb },
  { id: 25, title: "Recycling plants", icon: Droplets },
  { id: 26, title: "Sewage treatment facilities", icon: Droplets },
  { id: 27, title: "Waste-to-energy", icon: Lightbulb },
  { id: 28, title: "Forensic science labs", icon: Dna },
  { id: 29, title: "Police departments", icon: User },
  { id: 30, title: "Pharmaceuticals Manufacturing plants", icon: FlaskConical },
  { id: 31, title: "Hydroponics & Vertical Farming", icon: Sprout },
  { id: 32, title: "Cold Storage & Warehousing", icon: Package },
  { id: 33, title: "Dairy farms", icon: Utensils },
  { id: 34, title: "Poultry farms", icon: Utensils },
  { id: 35, title: "Veterinary facilities", icon: Stethoscope },
  { id: 36, title: "Cosmetics & Personal Care", icon: Palette },
];

const highlightsData = [
  {
    id: 1,
    title: "Practical Application",
    description:
      "Students see how theories and concepts they learn in class are applied in a professional setting. This makes their education more tangible and meaningful.",
  },
  {
    id: 2,
    title: "Career Exposure",
    description:
      "Tours expose students to various roles and departments within an industry, helping them discover potential career paths they may not have considered.",
  },
  {
    id: 3,
    title: "Networking Opportunities",
    description:
      "These tours provide a chance for students to connect with industry professionals, which can lead to mentorships, internships, or future job opportunities.",
  },
  {
    id: 4,
    title: "Technological Insight",
    description:
      "Students can see advanced machinery, automated processes, and modern technologies in action, giving them a firsthand look at the cutting edge of their chosen field.",
  },
];

const IndustrialTours = () => {
  return (
    <div className="bg-white text-[#0f2920] min-h-screen font-inter overflow-hidden relative">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${industrialTourBanner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            Industrial Tours
          </h1>
        </motion.div>
      </section>
      <section className="container-custom w-[90%]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-2 md:mb-4 mt-8 px-4"
        >
          <h1 className="text-xl md:text-lg text-black font-bold mb-4">
            Go beyond the textbook and into the heart of innovation. Our
            industrial tours are designed to be an immersive learning
            experience, giving students a behind-the-scenes look at how
            companies operate. Witness state-of-the-art technology, observe
            production processes, and meet the professionals who make it all
            happen. Each tour is an opportunity to expand your network, discover
            new career paths, and gain the practical insight you can't get in a
            lecture hall.
          </h1>
        </motion.div>
      </section>
      {/* Tracks Section */}
      <section className="container-custom w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center py-4 mb-8">
          Industrial Tour Subjects
        </h2>
        <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-4">
          {tracksData.map((track) => (
            <div
              key={track.id}
              className="flex items-center px-4 py-2 rounded-full bg-[#ECECEC] border border-peptides-light-gray shadow-sm hover:shadow-md transition-all duration-300"
            >
              <track.icon className="h-8 w-8 text-peptides-dark mr-2" />
              <span className="text-sm font-bold text-[#2a0c0c]">
                {track.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-12 border-t border-peptides-light-gray w-full" />

      {/* Highlights Section */}
      <section className="container-custom w-full py-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 gradient-text">
          Key Benefits
        </h2>
        <div className="grid md:grid-cols-2 gap-4 ">
          {highlightsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-peptides-light-gray"
            >
              <h3 className="text-lg font-bold flex items-center mb-2">
                <Lightbulb className="h-8 w-8 text-peptides-color-brown mr-2" />
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4 lg:px-12 bg-[#d7f2da] text-black text-center mt-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
            Ready to Start Your Industrial Tour?
          </h2>
          <p className="text-lg mb-8 text-primary-text text-center">
            Contact us today to arrange a customized tour for your institution.
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

export default IndustrialTours;