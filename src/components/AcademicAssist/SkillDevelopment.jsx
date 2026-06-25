import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    GraduationCap, FlaskConical, HeartHandshake, UserCog, Laptop, Award, Microscope, Brain, Users, BookOpen, Sparkles,
    Briefcase, GitFork, Shield, Cloud, MonitorSmartphone, Bitcoin, Settings, PenLine, Video, UserCheck, Megaphone,
    Rocket, Factory, Code, Network, Lightbulb, Scale, Handshake, Sprout, AtSign, CircleUser, ShoppingBag, PieChart,
    Wallet, LightbulbOff, Atom, Calendar, Headset, TrendingUp, CircleDollarSign, Pill, Utensils, Globe2, Stethoscope, Building2,
    Calculator, Droplet, Clock, Target, Activity, Workflow, TrendingUp as TrendingUpIcon,
    Leaf, FileText, Type, Image, ShieldCheck, LampDesk, Film, BookMarked, Palette, Utensils as UtensilsIcon, Globe2 as Globe2Icon,
    Stethoscope as StethoscopeIcon, UserCircle, Pill as PillIcon, Brain as BrainIcon, ArrowRight
} from 'lucide-react';
import skillsBanner from '../../assets/images/PageBanners/3.webp';

const tracksData = [
    { id: 1, title: "Critical Thinking and Problem-Solving", icon: BrainIcon },
    { id: 2, title: "Communication and Public Speaking", icon: Megaphone },
    { id: 3, title: "Adaptability and Resilience", icon: GitFork },
    { id: 4, title: "Financial Literacy", icon: Wallet },
    { id: 5, title: "Time Management and Organization", icon: Calendar },
    { id: 6, title: "Emotional Intelligence", icon: HeartHandshake },
    { id: 7, title: "Data Science and Analysis", icon: Microscope },
    { id: 8, title: "Artificial Intelligence (AI) & Machine Learning (ML)", icon: Brain },
    { id: 9, title: "Cybersecurity", icon: Shield },
    { id: 10, title: "Cloud Computing", icon: Cloud },
    { id: 11, title: "Web and Mobile Development", icon: MonitorSmartphone },
    { id: 12, title: "Business Intelligence (BI)", icon: PieChart },
    { id: 13, title: "Blockchain Technology", icon: Bitcoin },
    { id: 14, title: "Digital Marketing and SEO", icon: Sparkles },
    { id: 15, title: "Project Management", icon: Settings },
    { id: 16, title: "UI/UX Design", icon: PenLine },
    { id: 17, title: "Content Creation and Storytelling", icon: BookOpen },
    { id: 18, title: "Video Production and Editing", icon: Video },
    { id: 19, title: "Sales and Negotiation", icon: UserCheck },
    { id: 20, title: "Robotics and Automation", icon: Rocket },
    { id: 21, title: "Sustainable Business Practices", icon: Sprout },
    { id: 22, title: "Bioinformatics", icon: FlaskConical },
    { id: 23, title: "Virtual and Augmented Reality (VR/AR)", icon: Laptop },
    { id: 24, title: "User Experience (UX) Research", icon: CircleUser },
    { id: 25, title: "Supply Chain Management", icon: ShoppingBag },
    { id: 26, title: "Entrepreneurship and Innovation", icon: Lightbulb },
    { id: 27, title: "Conflict Resolution", icon: Scale },
    { id: 28, title: "Negotiation", icon: Handshake },
    { id: 29, title: "Active Listening", icon: Users },
    { id: 30, title: "Intercultural Competence", icon: Users },
    { id: 31, title: "Design Thinking", icon: Brain },
    { id: 32, title: "Creative Writing & Storytelling", icon: BookOpen },
    { id: 33, title: "Visual Communication", icon: Laptop },
    { id: 34, title: "Podcasting & Audio Production", icon: Headset },
    { id: 35, title: "Business Acumen", icon: Briefcase },
    { id: 36, title: "Financial Modeling", icon: Wallet },
    { id: 37, title: "Sales & Pitching", icon: UserCheck },
    { id: 38, title: "Ethical Hacking", icon: Shield },
    { id: 39, title: "Quantum Computing", icon: Atom },
    { id: 40, title: "Robotics", icon: Rocket },
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
        title: "Advanced Laboratory Skills",
        description: "Master real-world lab techniques in biotechnology, clinical medical, and pharmaceutical sciences.",
    },
    {
        id: 2,
        title: "Data Science & IT",
        description: "Learn cutting-edge skills in data analysis, bioinformatics, and computer applications.",
    },
    {
        id: 3,
        title: "Management & Business",
        description: "Develop expertise in marketing, finance, and supply chain management for career success.",
    },
    {
        id: 4,
        title: "Academic & Communication",
        description: "Enhance your abilities in scientific writing, journalism, and effective communication.",
    },
    {
        id: 5,
        title: "Hands-On Workshops",
        description: "Engage in interactive, skill-building sessions.",
    },
    {
        id: 6,
        title: "Networking Sessions",
        description: "Opportunities to connect with peers, mentors, and collaborators.",
    },
    {
        id: 7,
        title: "Collaboration Opportunities",
        description: "Initiate academic–industry partnerships and joint projects.",
    },
    {
        id: 8,
        title: "Certification & Recognition",
        description: "Gain professional certificates and recognition for participation.",
    },
];

const SkillDevelopment = () => {
    return (
        <div className="bg-white text-[#0f2920] min-h-screen font-inter overflow-hidden relative">
            {/* Hero Section */}
            <section
                className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${skillsBanner})` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 px-4"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
                        Skill Development
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
                    <h2 className="text-xl md:text-lg text-black font-bold mb-4">
                        The future of work is here, and it's powered by Continuous Learning. We provide a dynamic learning experience that transforms your potential into Real-World Professional Expertise. Our curriculum goes beyond theory, focusing on Practical Skills that employers are actively seeking. Whether you're a Student preparing for your first job or a Professional looking to pivot, our comprehensive programs will give you the Knowledge, Confidence, and tools to Succeed.                    </h2>
                </motion.div>
            </section>
            {/* Tracks Section */}
            <section className="container-custom w-full">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center py-4 mb-8">
                    Skill Development Subjects
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
            <section className="container-custom w-full py-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 gradient-text">
                    Skill Development Highlights
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

            {/* CTA Section */}
            <section className="w-full py-16 px-4 lg:px-12 bg-[#d7f2da] text-black text-center mt-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text">
                        Ready to Start Your Skill Development Program?
                    </h2>
                    <p className="text-lg mb-8 text-primary-text text-center">
                        Contact us today to arrange a specialized training for your team.
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

export default SkillDevelopment;