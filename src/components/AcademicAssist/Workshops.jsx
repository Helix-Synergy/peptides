import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle,
  Calendar,
  Clock,
  ArrowRight,
  GraduationCap,
  Microscope,
  Presentation,
  BookOpen,
  FlaskConical,
  Code,
  Brain,
  HeartPulse,
  Target,
  Activity,
  Workflow,
  Building2,
  TrendingUp,
  Rocket,
  Briefcase,
  Sprout,
  Leaf,
  Droplet,
  Calculator,
  Megaphone,
  ClipboardList,
  Cloud,
  UserCircle,
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
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import workshopBanner from "../../assets/images/PageBanners/workshops.webp";

const Workshops = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const upcomingWorkshops = [
    {
      title: "ChemKraftz",
      date: "Sept 19-20, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Hyderabad",
      link: "https://heyzine.com/flip-book/7c8bcf309e.html",
    },
    {
      title: "SwaPrayojana",
      date: "Oct 15-16, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Hyderabad",
      link: "https://heyzine.com/flip-book/7c8bcf309e.html",
    },
    {
      title: "LabMate",
      date: "Oct 24-25, 2025",
      time: "11:00 AM - 5:00 PM",
      location: "Hyderabad",
      link: "https://heyzine.com/flip-book/7c8bcf309e.html",
    },
  ];

  const categories = [
    { id: 1, title: "Academic Writing", icon: BookOpen },
    { id: 2, title: "Accounting", icon: Calculator },
    { id: 3, title: "Applied Nutrition", icon: Droplet },
    { id: 4, title: "B. Com (Computers)", icon: MonitorSmartphone },
    { id: 5, title: "B. Com (General)", icon: Building2 },
    { id: 6, title: "BBA (Bachelor of Business Administration)", icon: Briefcase },
    { id: 7, title: "Banking", icon: Clock },
    { id: 8, title: "Biochemistry", icon: FlaskConical },
    { id: 9, title: "Biotechnology", icon: Microscope },
    { id: 10, title: "Botany", icon: Sprout },
    { id: 11, title: "Business Analytics", icon: TrendingUp },
    { id: 12, title: "Chemistry", icon: ShieldCheck },
    { id: 13, title: "Computer Science", icon: Cloud },
    { id: 14, title: "Data Analysis", icon: Microscope },
    { id: 15, title: "Data Science", icon: Workflow },
    { id: 16, title: "Economics", icon: ShoppingBag },
    { id: 17, title: "E-commerce", icon: ShoppingBag },
    { id: 18, title: "Electronics", icon: Film },
    { id: 19, title: "English Literature", icon: Type },
    { id: 20, title: "Entrepreneurship", icon: Rocket },
    { id: 21, title: "Environmental Science", icon: Leaf },
    { id: 22, title: "Finance", icon: Briefcase },
    { id: 23, title: "Foreign Trade Practices", icon: Globe2 },
    { id: 24, title: "Geography", icon: Globe2 },
    { id: 25, title: "Genetics", icon: FlaskConical },
    { id: 26, title: "Geology", icon: Droplet },
    { id: 27, title: "History", icon: BookMarked },
    { id: 28, title: "Information Technology (IT)", icon: MonitorSmartphone },
    { id: 29, title: "Marketing Management", icon: TrendingUp },
    { id: 30, title: "Mass Communication", icon: Megaphone },
    { id: 31, title: "Mathematics", icon: Calculator },
    { id: 32, title: "Microbiology", icon: Microscope },
    { id: 33, title: "Nursing (B.Sc Nursing)", icon: HeartPulse },
    { id: 34, title: "Nutrition", icon: Utensils },
    { id: 35, title: "Paramedical Sciences", icon: Stethoscope },
    { id: 36, title: "Pharmacy (B.Pharm)", icon: Pill },
    { id: 37, title: "Philosophy", icon: Brain },
    { id: 38, title: "Physics", icon: Target },
    { id: 39, title: "Political Science", icon: GraduationCap },
    { id: 40, title: "Psychology", icon: Users },
    { id: 41, title: "Public Administration", icon: ClipboardList },
    { id: 42, title: "Public Health", icon: Activity },
    { id: 43, title: "Sales Management", icon: ShoppingBag },
    { id: 44, title: "Sociology", icon: Users },
    { id: 45, title: "Statistics", icon: ClipboardList },
    { id: 46, title: "Zoology", icon: Sparkles },
    { id: 47, title: "Presentation Skills", icon: Presentation },
    { id: 48, title: "Research Methodology", icon: FlaskConical },
    { id: 49, title: "Coding Workshops", icon: Code },
    { id: 50, title: "Critical Thinking", icon: Brain },
  ];

  const benefits = [
    {
      id: 1,
      title: "Hands-on Experience",
      description: "Gain practical skills with modern lab techniques and tools.",
    },
    {
      id: 2,
      title: "Expert Instructors",
      description: "Learn from seasoned professionals with extensive industry experience.",
    },
    {
      id: 3,
      title: "Certificate of Participation",
      description: "Receive a professional certificate to enhance your resume.",
    },
    {
      id: 4,
      title: "Networking Opportunities",
      description: "Connect with peers, mentors, and professionals in your field.",
    },
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

  return (
    <div className="bg-white text-[#0f2920] min-h-screen font-inter overflow-hidden relative">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${workshopBanner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            Workshops
          </h1>
        </motion.div>
      </section>

      <section className="container-custom w-[90%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 mt-8 px-4"
        >
          <h2 className="text-xl md:text-lg text-black font-bold mb-4">
            Our workshops are designed to be a transformative learning experience, offering
            more than just theoretical knowledge. We are committed to providing participants
            with substantive, hands-on sessions that allow them to apply their academic
            knowledge to real-world challenges. As a member of our team, you will collaborate
            directly with seasoned professionals, receive dedicated mentorship, and contribute
            to achieving our company's strategic goals. This program is an opportunity to gain
            invaluable experience, build a robust professional network, and develop the skills
            essential for a successful career.
          </h2>
        </motion.div>
      </section>

      <hr className="my-12 border-t border-peptides-light-gray w-full" />

      {/* Upcoming Workshops */}
      <section className="w-full py-12 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/*
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-peptides-dark mb-6">
              Upcoming Workshops
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {upcomingWorkshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-peptides-color-brown mb-4 text-center">
                  {workshop.title}
                </h3>
                <div className="text-sm text-black space-y-2 mb-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" /> {workshop.date}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" /> {workshop.time}
                  </div>
                  <div className="text-gray-600">{workshop.location}</div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="flex-1 btn-primary text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    Register
                  </Link>
                  <a
                    href={workshop.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    Brochure
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
*/}

          <hr className="my-12 border-t border-peptides-light-gray w-full" />

          {/* Workshop Categories */}
          <section className="container-custom w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center py-4 mb-8">
              Workshop Categories
            </h2>
            <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-4">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="flex items-center px-4 py-2 rounded-full bg-[#ECECEC] border border-peptides-light-gray shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <cat.icon className="h-8 w-8 text-peptides-dark mr-2" />
                  <span className="text-sm font-bold text-[#2a0c0c]">
                    {cat.title}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <hr className="my-12 border-t border-peptides-light-gray w-full" />

          {/* Benefits */}
          <section className="container-custom">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 gradient-text">
              Key Benefits
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-peptides-light-gray"
                >
                  <CheckCircle className="h-10 w-10 text-peptides-color-brown mb-4" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="my-12 border-t border-peptides-light-gray w-full" />

          {/* Workshop Highlights Section */}
          <section className="container-custom w-full py-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 gradient-text">
              Workshop Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
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

          <hr className="my-12 border-t border-peptides-light-gray w-full" />

          {/* Who Can Attend Section */}
          <section className="container-custom">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 gradient-text">
              Who Can Attend
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

          {/* Custom Workshop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="gradient-bg rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Want a Custom Workshop?
              </h3>
              <p className="text-lg mb-6 opacity-90 text-center">
                Tell us your requirements and we will design a workshop for your team
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="btn-outline font-bold py-3 px-8 rounded-xl transition-colors duration-200 flex items-center mx-auto"
              >
                Request Custom Workshop
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;