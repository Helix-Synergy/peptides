import React from "react";

import {
  Brain, Clock, Target, HeartPulse,
  Workflow, Building2, TrendingUp, Rocket, FlaskConical,
  Microscope, Briefcase, Sprout, Leaf, Droplet,
  Calculator, Megaphone, ClipboardList, Cloud, UserCircle,
  GraduationCap, FileText, Type, Image, ShieldCheck,
  ShoppingBag, Users, MonitorSmartphone, Pill, LampDesk,
  Film, BookMarked, Palette, Utensils, Globe2,
  Stethoscope, Activity, Sparkles, UserCog, BookOpen,
  PackageSearch
} from "lucide-react";
import { motion } from "framer-motion";


const tracksData = [
  { id: 1, title: "Developing Soft Skills for Future Employability", icon: Brain },
  { id: 2, title: "Life Skills for Holistic Development", icon: HeartPulse },
  { id: 3, title: "Time Management Techniques for Students and Professionals", icon: Clock },
  { id: 4, title: "Strategies for Competitive Exam Preparation", icon: Target },
  { id: 5, title: "Stress Management for Academic Excellence", icon: Activity },
  { id: 6, title: "The Role of Critical Thinking in Decision Making", icon: Workflow },
  { id: 7, title: "Understanding Corporate Psychology in the Workplace", icon: Building2 },
  { id: 8, title: "Digital Marketing Trends in the Modern Business World", icon: TrendingUp },
  { id: 9, title: "Entrepreneurial Skills for Young Innovators", icon: Rocket },
  { id: 10, title: "Advancements in Drug Designing and Discovery", icon: FlaskConical },
  { id: 11, title: "Forensic Sciences: Tools for Criminal Investigation", icon: Microscope },
  { id: 12, title: "Career Structuring and Professional Planning", icon: Briefcase },
  { id: 13, title: "Organic Farming: A Sustainable Agricultural Practice", icon: Sprout },
  { id: 14, title: "Bio-Dynamic Farming: Integrating Nature and Science", icon: Leaf },
  { id: 15, title: "Hydroponics & Aeroponics: Future of Urban Agriculture", icon: Droplet },
  { id: 16, title: "Logical Thinking and Analytical Problem Solving", icon: Calculator },
  { id: 17, title: "Mass Communication and Its Role in Social Awareness", icon: Megaphone },
  { id: 18, title: "Project Management Fundamentals for Students", icon: ClipboardList },
  { id: 19, title: "SaaS (Software as a Service): A Business Transformation Tool", icon: Cloud },
  { id: 20, title: "Personality Development for Career Growth", icon: UserCircle },
  { id: 21, title: "Women Empowerment Through Education and Innovation", icon: GraduationCap },
  { id: 22, title: "Publications and Patent Filing: A Researcher’s Guide", icon: FileText },
  { id: 23, title: "Content Writing as a Digital Career Opportunity", icon: Type },
  { id: 24, title: "Infographics: Visual Communication in the Digital Age", icon: Image },
  { id: 25, title: "GMP & GLB Standards in Pharmaceutical Manufacturing", icon: ShieldCheck },
  { id: 26, title: "Marketing Strategies for the Digital Generation", icon: ShoppingBag },
  { id: 27, title: "Emerging HR Practices in the Global Market", icon: Users },
  { id: 28, title: "Digital Transformation in Education and Business", icon: MonitorSmartphone },
  { id: 29, title: "Pharmacovigilance: Ensuring Drug Safety and Efficacy", icon: Pill },
  { id: 30, title: "Interior Designing: Blending Creativity with Functionality", icon: LampDesk },
  { id: 31, title: "Cinematography: Art and Technology in Film Making", icon: Film },
  { id: 32, title: "Research Methodology for Academic Success", icon: BookMarked },
  { id: 33, title: "Fine Arts & Culinary Arts: Creativity as a Career", icon: Palette },
  { id: 34, title: "Hotel Management and Hospitality in the 21st Century", icon: Utensils },
  { id: 35, title: "Tourism as a Tool for Cultural and Economic Development", icon: Globe2 },
  { id: 36, title: "Telemedicine: Revolutionizing Healthcare Delivery", icon: Stethoscope },
  { id: 37, title: "Physiotherapy: Healing Through Movement and Exercise", icon: Activity },
  { id: 38, title: "Cosmetics and Perfumery: The Science Behind Beauty Products", icon: Sparkles },
];

// Shorts Tracks Data

// const tracksData = [
//   { id: 1, title: "Soft Skills", icon: Brain },
//   { id: 2, title: "Life Skills", icon: HeartPulse },
//   { id: 3, title: "Time Mgmt", icon: Clock },
//   { id: 4, title: "Exam Prep", icon: Target },
//   { id: 5, title: "Stress Mgmt", icon: Activity },
//   { id: 6, title: "Critical Thinking", icon: Workflow },
//   { id: 7, title: "Corp Psych", icon: Building2 },
//   { id: 8, title: "Digital Mktg", icon: TrendingUp },
//   { id: 9, title: "Entrepreneurship", icon: Rocket },
//   { id: 10, title: "Drug Discovery", icon: FlaskConical },
//   { id: 11, title: "Forensics", icon: Microscope },
//   { id: 12, title: "Career Plan", icon: Briefcase },
//   { id: 13, title: "Organic Farming", icon: Sprout },
//   { id: 14, title: "Bio-Dynamic Farm", icon: Leaf },
//   { id: 15, title: "Hydro/Aero Farm", icon: Droplet },
//   { id: 16, title: "Logical Thinking", icon: Calculator },
//   { id: 17, title: "Mass Comm", icon: Megaphone },
//   { id: 18, title: "Project Mgmt", icon: ClipboardList },
//   { id: 19, title: "SaaS Tools", icon: Cloud },
//   { id: 20, title: "Personality Dev", icon: UserCircle },
//   { id: 21, title: "Women Empower", icon: GraduationCap },
//   { id: 22, title: "Research & Patents", icon: FileText },
//   { id: 23, title: "Content Writing", icon: Type },
//   { id: 24, title: "Infographics", icon: Image },
//   { id: 25, title: "GMP & GLB", icon: ShieldCheck },
//   { id: 26, title: "Digital Strategy", icon: ShoppingBag },
//   { id: 27, title: "HR Trends", icon: Users },
//   { id: 28, title: "Digital Xform", icon: MonitorSmartphone },
//   { id: 29, title: "Pharmacovigilance", icon: Pill },
//   { id: 30, title: "Interior Design", icon: LampDesk },
//   { id: 31, title: "Cinematography", icon: Film },
//   { id: 32, title: "Research Methods", icon: BookMarked },
//   { id: 33, title: "Fine & Culinary Arts", icon: Palette },
//   { id: 34, title: "Hospitality", icon: Utensils },
//   { id: 35, title: "Tourism", icon: Globe2 },
//   { id: 36, title: "Telemedicine", icon: Stethoscope },
//   { id: 37, title: "Physiotherapy", icon: Activity },
//   { id: 38, title: "Cosmetics", icon: Sparkles },
// ];

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
  { id: 1, title: "Expert-Led Keynotes", description: "Learn from thought leaders across academia, healthcare, and industry." },
  { id: 2, title: "Hands-On Workshops", description: "Engage in interactive, skill-building sessions." },
  { id: 3, title: "Panel Discussions", description: "Debates and dialogues on the latest trends and challenges." },
  { id: 4, title: "Networking Sessions", description: "Opportunities to connect with peers, mentors, and collaborators." },
  { id: 5, title: "Research Presentations", description: "Showcasing student and faculty innovations in diverse fields." },
  { id: 6, title: "Industry Exhibitions", description: "Demonstrations of cutting-edge tools, technology, and services." },
  { id: 7, title: "Collaboration Opportunities", description: "Initiate academic–industry partnerships and joint projects." },
  { id: 8, title: "Certification & Recognition", description: "Gain professional certificates and recognition for participation." },
];


const Seminars = () => {
  return (
    <div className="flex flex-col items-center p-4">

            <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-2 md:mb-4"
      >
        <h1 className="text-xl md:text-lg text-peptides-color-brown font-bold mb-4">
                    Our Seminars are meticulously designed to Empower you with the Skills and Knowledge you need to thrive in a rapidly evolving professional landscape. From cutting-edge technology and data science to leadership and management, we bring together industry pioneers and thought leaders to deliver actionable insights you can apply immediately.{" "}
        </h1>

      </motion.div>

      {/* Tracks Section */}
      <section className="container-custom w-full">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
    Seminar Topics
  </h2>
  <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
    {tracksData.map((track) => (
      <div
        key={track.id}
        className="flex items-center px-4 py-2 rounded-full bg-[#ECECEC] border border-peptides-light-gray shadow-sm hover:shadow-md transition-all duration-300"
      >
        <track.icon className="h-8 w-8 text-peptides-color-brown mr-2" />
        <span className="text-sm font-medium text-peptides-dark-green">
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
      <section className="container-custom w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 gradient-text">
          Seminar Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-4 ">
          {highlightsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#ECECEC] p-6 rounded-xl text-peptides-color-brown shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-peptides-light-gray"
            >
              <h3 className="text-lg font-bold flex items-center mb-2">
                <Sparkles className="h-8 w-8 text-peptides-dark mr-2" />
                {item.title}
              </h3>
              <p className="text-sm text-black text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Seminars;
