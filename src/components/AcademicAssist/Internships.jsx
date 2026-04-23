import React from "react";
import { Link } from 'react-router-dom';
import {
  Brain,
  HeartPulse,
  Clock,
  Target,
  Activity,
  Workflow,
  Building2,
  TrendingUp,
  Rocket,
  FlaskConical,
  Microscope,
  Briefcase,
  Sprout,
  Leaf,
  Droplet,
  Calculator,
  Megaphone,
  ClipboardList,
  Cloud,
  UserCircle,
  GraduationCap,
  FileText,
  Type,
  Image,
  ShieldCheck,
  ShoppingBag,
  Users,
  MonitorSmartphone,
  Pill,
  LampDesk,
  Film,
  BookMarked,
  Palette,
  Utensils,
  Globe2,
  Stethoscope,
  Sparkles,
  BookOpen,
  ArrowRight
} from "lucide-react";

import { motion } from "framer-motion";
import internshipBanner from "../../assets/images/PageBanners/internships.jpg";

const tracksData = [
  { id: 1, title: "Accounting", icon: Calculator },
  { id: 2, title: "Applied Nutrition", icon: Droplet },
  { id: 3, title: "B. Com (Computers)", icon: MonitorSmartphone },
  { id: 4, title: "B. Com (General)", icon: Building2 },
  { id: 5, title: "BBA (Bachelor of Business Administration)", icon: Briefcase },
  { id: 6, title: "Banking", icon: Clock },
  { id: 7, title: "Biochemistry", icon: FlaskConical },
  { id: 8, title: "Biotechnology", icon: Microscope },
  { id: 9, title: "Botany", icon: Sprout },
  { id: 10, title: "Business Analytics", icon: TrendingUp },
  { id: 11, title: "Chemistry", icon: ShieldCheck },
  { id: 12, title: "Computer Science", icon: Cloud },
  { id: 13, title: "Data Science", icon: Workflow },
  { id: 14, title: "Economics", icon: ShoppingBag },
  { id: 15, title: "E-commerce", icon: ShoppingBag },
  { id: 16, title: "Electronics", icon: Film },
  { id: 17, title: "English Literature", icon: Type },
  { id: 18, title: "Entrepreneurship", icon: Rocket },
  { id: 19, title: "Environmental Science", icon: Leaf },
  { id: 20, title: "Finance", icon: Briefcase },
  { id: 21, title: "Foreign Trade Practices", icon: Globe2 },
  { id: 22, title: "Geography", icon: Globe2 },
  { id: 23, title: "Genetics", icon: FlaskConical },
  { id: 24, title: "Geology", icon: Droplet },
  { id: 25, title: "History", icon: BookMarked },
  { id: 26, title: "Information Technology (IT)", icon: MonitorSmartphone },
  { id: 27, title: "Marketing Management", icon: TrendingUp },
  { id: 28, title: "Mass Communication", icon: Megaphone },
  { id: 29, title: "Mathematics", icon: Calculator },
  { id: 30, title: "Microbiology", icon: Microscope },
  { id: 31, title: "Nursing (B.Sc Nursing)", icon: HeartPulse },
  { id: 32, title: "Nutrition", icon: Utensils },
  { id: 33, title: "Paramedical Sciences", icon: Stethoscope },
  { id: 34, title: "Pharmacy (B.Pharm)", icon: Pill },
  { id: 35, title: "Philosophy", icon: Brain },
  { id: 36, title: "Physics", icon: Target },
  { id: 37, title: "Political Science", icon: GraduationCap },
  { id: 38, title: "Psychology", icon: Users },
  { id: 39, title: "Public Administration", icon: ClipboardList },
  { id: 40, title: "Public Health", icon: Activity },
  { id: 41, title: "Sales Management", icon: ShoppingBag },
  { id: 42, title: "Sociology", icon: Users },
  { id: 43, title: "Statistics", icon: ClipboardList },
  { id: 44, title: "Zoology", icon: Sparkles },
];


const attendData = [
  { id: 1, title: "University Students & Scholars", icon: GraduationCap },
  { id: 2, title: "Academic Faculty & Educators", icon: BookOpen },
  { id: 3, title: "Industry Professionals & Experts", icon: Briefcase },
  { id: 4, title: "Researchers & Innovators", icon: Microscope },
  { id: 5, title: "Healthcare & Life Science Specialists", icon: Stethoscope },
  { id: 6, title: "Entrepreneurs & Startups", icon: Rocket },
  { id: 7, title: "Policy Makers & Administrators", icon: Building2 },
  { id: 8, title: "Corporate Trainers & HR Leaders", icon: Users },
];

const highlightsData = [
  {
    id: 1,
    title: "Expert-Led Keynotes",
    description:
      "Learn from thought leaders across academia, healthcare, and industry.",
  },
  {
    id: 2,
    title: "Hands-On Workshops",
    description: "Engage in interactive, skill-building sessions.",
  },
  {
    id: 3,
    title: "Panel Discussions",
    description: "Debates and dialogues on the latest trends and challenges.",
  },
  {
    id: 4,
    title: "Networking Sessions",
    description:
      "Opportunities to connect with peers, mentors, and collaborators.",
  },
  {
    id: 5,
    title: "Research Presentations",
    description:
      "Showcasing student and faculty innovations in diverse fields.",
  },
  {
    id: 6,
    title: "Industry Exhibitions",
    description:
      "Demonstrations of cutting-edge tools, technology, and services.",
  },
  {
    id: 7,
    title: "Collaboration Opportunities",
    description: "Initiate academic–industry partnerships and joint projects.",
  },
  {
    id: 8,
    title: "Certification & Recognition",
    description:
      "Gain professional certificates and recognition for participation.",
  },
];

const Internships = () => {
  return (
    <div className="bg-white text-[#0f2920] min-h-screen font-inter overflow-hidden relative">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${internshipBanner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            Internships
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
          <h1 className="text-xl md:text-lg  text-black font-bold mb-4">
            Our internship program is designed to be a transformative
            experience, offering more than just a stepping stone in your career.
            We are committed to providing students with substantive, hands-on
            projects that allow them to apply their academic knowledge to
            real-world business challenges. As a member of our team, you will
            collaborate directly with seasoned professionals, receive dedicated
            mentorship, and contribute to achieving our company's strategic
            goals. This program is an opportunity to gain invaluable experience,
            build a robust professional network, and develop the skills
            essential for a successful career.{" "}
          </h1>
        </motion.div>
      </section>
      {/* Tracks Section */}
      <section className="container-custom w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center py-4 mb-8">
          Internship Subjects
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

      {/* Who Can Attend Section */}
      <section className="container-custom">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 gradient-text">
          Who Can Attend...
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {attendData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-peptides-light-gray"
            >
              <item.icon className="h-10 w-10 text-peptides-color-brown mb-4" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-12 border-t border-peptides-light-gray w-full" />

      {/* Event Highlights Section */}
      <section className="container-custom w-full py-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 gradient-text">
          Internships' Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-4 ">
          {highlightsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-peptides-light-gray"
            >
              <h3 className="text-lg font-bold flex items-center mb-2">
                <Sparkles className="h-8 w-8 text-peptides-color-brown mr-2" />
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 px-4 lg:px-12 bg-[#d7f2da] text-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
            Ready to Start Your Internship?
          </h2>
          <p className="text-lg mb-8 text-primary-text text-center">
            Apply today and take the first step towards a rewarding career experience.
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

export default Internships;
