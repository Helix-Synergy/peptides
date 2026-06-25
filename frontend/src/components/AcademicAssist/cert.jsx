import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Trophy,
  Users,
  BookText,
  Clock,
  UserCheck,
  BookOpen,
  Cpu,
  ArrowRight,
  Shield,
  Briefcase,
  MonitorCheck,
  Award,
  FlaskConical,
  GraduationCap,
  Scale,
  Building,
  Plane,
  Handshake,
  Lightbulb,
  Microscope,
  Palette,
  Atom,
  Gavel,
  Book,
  Monitor,
} from "lucide-react";
import BannerImage from '../../assets/images/PageBanners/1.webp'


// Replaced the TrainFront icon with a custom SVG for "RRB NTPC & Group D"
const TrainFront = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-7 h-7 text-neutral-800"
  >
    <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
    <path d="M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
    <path d="M12 20v2" />
    <path d="M8 20v2" />
    <path d="M16 20v2" />
  </svg>
);
// Placeholder image URLs for competitive exams
const placeholderImages = {
  hero: "https://placehold.co/1200x500/0f2920/d9d9d9?text=Competitive+Exams+Training",
};

const keyServices = [
  {
    icon: <Users className="w-8 h-8 text-neutral-800" />,
    title: "Expert Faculty",
    description: "Our educators are more than just teachers; they're subject matter experts with years of experience and a track record of success. They provide in-depth knowledge, shortcut techniques, and personalized mentorship to help you master every subject.",
  },
  {
    icon: <BookText className="w-8 h-8 text-neutral-800" />,
    title: "Comprehensive Study Material",
    description: "Forget searching for notes. We provide meticulously curated study materials that are regularly updated to match the latest exam patterns. Our materials are a one-stop solution for all your preparation needs.",
  },
  {
    icon: <Clock className="w-8 h-8 text-neutral-800" />,
    title: "Regular Mock Tests",
    description: "Practice makes perfect. We conduct frequent mock tests that simulate the actual exam environment, helping you improve your speed, accuracy, and time management. Detailed performance analysis helps you identify and overcome your weak areas.",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-neutral-800" />,
    title: "Personalized Attention",
    description: "We believe that every student is unique. Our small batch sizes and dedicated doubt-clearing sessions ensure that you receive the one-on-one attention you need to clarify concepts and stay motivated.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-neutral-800" />,
    title: "Structured Curriculum",
    description: "Our well-structured curriculum breaks down the vast syllabus into manageable modules, providing a clear and systematic roadmap to success.",
  },
  {
    icon: <Monitor className="w-8 h-8 text-neutral-800" />,
    title: "Online Live Classes",
    description: "Access our expert faculty and interactive sessions from anywhere. Our live classes are designed to provide a dynamic learning experience with real-time doubt solving and engagement.",
  },
];

const whoCanAttend = [
  { id: 1, title: "University Students & Scholars", icon: GraduationCap },
  { id: 2, title: "Academic Faculty & Educators", icon: Users },
  { id: 3, title: "Industry Professionals & Experts", icon: Briefcase },
  { id: 4, title: "Researchers & Innovators", icon: Microscope },
  { id: 5, title: "Healthcare & Life Science Specialists", icon: FlaskConical },
  { id: 6, title: "Entrepreneurs & Startups", icon: Lightbulb },
  { id: 7, title: "Policy Makers & Administrators", icon: Gavel },
  { id: 8, title: "Corporate Trainers & HR Leaders", icon: Handshake },
];

const highlights = [
  { id: 1, title: "Expert-Led Keynotes", icon: BookText },
  { id: 2, title: "Hands-On Workshops", icon: Award },
  { id: 3, title: "Panel Discussions", icon: Users },
  { id: 4, title: "Networking Sessions", icon: Handshake },
  { id: 5, title: "Research Presentations", icon: Atom },
  { id: 6, title: "Industry Exhibitions", icon: Building },
  { id: 7, title: "Collaboration Opportunities", icon: Handshake },
  { id: 8, title: "Certification & Recognition", icon: Trophy },
];

const examsList = [
  { id: 1, title: "UPSC Civil Services Exam (CSE)", icon: Briefcase },
  { id: 2, title: "SSC CGL", icon: Building },
  { id: 3, title: "IBPS PO & Clerk", icon: Building },
  { id: 4, title: "SBI PO & Clerk", icon: Building },
  { id: 5, title: "RRB NTPC & Group D", icon: TrainFront },
  { id: 6, title: "JEE Main & Advanced", icon: GraduationCap },
  { id: 7, title: "GATE", icon: Cpu },
  { id: 8, title: "NEET", icon: FlaskConical },
  { id: 9, title: "AIIMS PG", icon: FlaskConical },
  { id: 10, title: "JIPMER", icon: FlaskConical },
  { id: 11, title: "CAT", icon: BookText },
  { id: 12, title: "XAT", icon: BookText },
  { id: 13, title: "MAT", icon: BookText },
  { id: 14, title: "CMAT", icon: BookText },
  { id: 15, title: "CLAT", icon: Scale },
  { id: 16, title: "UGC NET", icon: MonitorCheck },
  { id: 17, title: "NDA Exam", icon: Plane },
  { id: 18, title: "NIFT Entrance Exam", icon: Palette },
  { id: 19, title: "NATA", icon: Building },
  { id: 20, title: "TSPSC Exams", icon: Briefcase },
  { id: 21, title: "EAMCET", icon: GraduationCap },
  { id: 22, title: "ECET", icon: GraduationCap },
  { id: 23, title: "ICET", icon: GraduationCap },
  { id: 24, title: "LAWCET", icon: Scale },
  { id: 25, title: "PGECET", icon: GraduationCap },
  { id: 26, title: "PSC Police Exams", icon: Shield },
  { id: 27, title: "TET", icon: MonitorCheck },
  { id: 28, title: "TRT", icon: MonitorCheck },
  { id: 29, title: "PGLCET", icon: Scale },
  { id: 30, title: "Ed.CET", icon: GraduationCap },
  { id: 31, title: "PH.D. CET", icon: GraduationCap },
];




const CompetitiveExamsTraining = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div className="bg-white text-gray-900 min-h-screen font-inter overflow-hidden relative">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[60vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          ref={sectionRef}
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative w-full  z-10 text-end"
        >
          <h1 className="text-4xl md:text-6xl mr-[5%] font-extrabold mb-4 drop-shadow-lg text-white">
            CERT
          </h1>
          <p className="text-lg md:text-xl mr-[5%] mx-auto px-4 text-gray-300 font-semibold text-justify">
            Competitive Exams Related Training
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 px-4 lg:px-12 bg-white text-gray-900">
        <div className="w-full mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center w-full mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-800 mb-6">
              Your Path to Success
            </h2>
            <p className="text-lg text-neutral-600 max-w-5xl mx-auto leading-relaxed mb-6 text-justify">
              We provide the expert guidance, comprehensive resources, and personalized strategy you need to ace your competitive exam. In the highly competitive world of government jobs and professional exams, preparation is key. We provide top-notch support as we are your dedicated partners in success. Our mission is to transform your aspirations into achievements through a proven methodology, a team of expert educators, and an unwavering commitment to your success.
            </p>
          </motion.div>

          {/* Key Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-neutral-800 text-center mb-8">
              Key Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 text-neutral-800"
                >
                  <div className="w-16 h-16 bg-white border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-bold text-neutral-800 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-neutral-600 text-justify">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Exams Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-neutral-800 text-center mb-8">
              Coaching For
            </h3>
            <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-10">
              We provide expert coaching for a wide range of competitive exams, helping you achieve your career goals.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {examsList.map((exam, index) => (
                <motion.div
                  key={exam.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 text-neutral-800"
                >
                  <exam.icon className="h-7 w-7 text-neutral-800 mr-3" />
                  <span className="text-sm font-bold">
                    {exam.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Who Can Attend Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-neutral-800 text-center mb-8">
              Who Can Attend...
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoCanAttend.map((attendee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 text-neutral-800"
                >
                  <div className="w-16 h-16 bg-white border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <attendee.icon className="w-8 h-8 text-neutral-800" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-800 mb-2">
                    {attendee.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-neutral-800 text-center mb-8">
              Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow text-neutral-800"
                >
                  <highlight.icon className="w-5 h-5 text-neutral-800 flex-shrink-0" />
                  <span className="text-neutral-600">{highlight.title}</span>
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
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-neutral-800">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-lg mb-6 opacity-90 text-neutral-600 text-center">
                Join our proven program and take the first step toward a successful career.
              </p>
              <button className="btn-outline text-neutral-800 border-neutral-800 font-bold py-3 px-8 rounded-xl hover:bg-neutral-800 hover:text-white transition-colors duration-200 flex items-center mx-auto">
                Enroll Today <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CompetitiveExamsTraining;
