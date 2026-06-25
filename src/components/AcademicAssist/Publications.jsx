import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import {
  BookOpen,
  Users,
  Feather,
  Award,
  Globe,
  Handshake,
  ChevronDown,
  Rocket,
  Check,
  Lightbulb,
  TrendingUp,
  HeartHandshake,
  GraduationCap,
  Hospital,
  UserCog,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import journalsBanner from "../../assets/images/PageBanners/JournalsBanner.webp";
import BiomedicalSciences from "../../assets/images/Publications/BiomedicalSciences.webp";
import ChemistryChemicalEngineering from "../../assets/images/Publications/ChemistryChemicalEngineering.webp";
import ClinicalMedical from "../../assets/images/Publications/ClinicalMedical.webp";
import ComputerScienceBioinformatics from "../../assets/images/Publications/ComputerScienceBioinformatics.webp";
import Dentistry from "../../assets/images/Publications/Dentistry.webp";
import EnvironmentalScience from "../../assets/images/Publications/EnvironmentalScience.webp";
import HealthEducation from "../../assets/images/Publications/HealthEducation.webp";
import LifeSciences from "../../assets/images/Publications/LifeSciences.webp";
import MedicinePublicHealth from "../../assets/images/Publications/MedicinePublicHealth.webp";
import NeurosciencePsychology from "../../assets/images/Publications/NeurosciencePsychology.webp";
import PharmaceuticalSciences from "../../assets/images/Publications/PharmaceuticalSciences.webp";
import VeterinarySciences from "../../assets/images/Publications/VeterinarySciences.webp";

// === DATA ===
const journalTopics = [
  {
    image: BiomedicalSciences,
    title: "Biomedical Sciences",
    description:
      "Our journals in Biomedical Sciences feature prestigious, Open Access publications with a focus on cutting-edge research.",
  },
  {
    image: ClinicalMedical,
    title: "Clinical & Medical",
    description:
      "Discover our most prestigious Open Access journals in clinical and medical fields, including noteworthy publishing from top experts.",
  },
  {
    image: MedicinePublicHealth,
    title: "Medicine & Public Health",
    description:
      "Our journals cover a wide range of topics in medicine and public health, offering top Open Access content in the field.",
  },
  {
    image: LifeSciences,
    title: "Life Sciences",
    description:
      "Explore our top Open Access journals in Life Sciences, covering diverse subjects like Agriculture, Agronomy, and Animal Science.",
  },
  {
    image: Dentistry,
    title: "Dentistry",
    description:
      "Our peer-reviewed Open Access dentistry journals cover the study, diagnosis, prevention, and treatment of a wide range of topics.",
  },
  {
    image: HealthEducation,
    title: "Health Education",
    description:
      "Find highly accessed journals in Health Education, providing valuable resources for professionals and students alike.",
  },
  {
    image: ChemistryChemicalEngineering,
    title: "Chemistry & Chemical Engineering",
    description:
      "Our journals in this field cover topics such as organic, inorganic, and industrial chemistry, as well as chemical engineering.",
  },
  {
    image: ComputerScienceBioinformatics,
    title: "Computer Science & Bioinformatics",
    description:
      "This subject covers a wide range of topics including sequence analysis, genome annotation, and computational biology.",
  },
  {
    image: EnvironmentalScience,
    title: "Environmental Science",
    description:
      "Our top Open Access journals in Environmental Science cover pollution, biodiversity, climate change, and more.",
  },
  {
    image: PharmaceuticalSciences,
    title: "Pharmaceutical Sciences",
    description:
      "Our journals cover a broad range of topics including clinical and industrial drug development, medicinal, and pharmaceutical sciences.",
  },
  {
    image: NeurosciencePsychology,
    title: "Neuroscience & Psychology",
    description:
      "Fortune Journals' Neuroscience & Psychology subject includes top Open Access journals with topics such as cognitive science and behavioral research.",
  },
  {
    image: VeterinarySciences,
    title: "Veterinary Sciences",
    description:
      "Find our top peer-reviewed Open Access journals in the veterinary science field, covering a wide range of animal health topics.",
  },
];

const timelineStages = [
  {
    icon: BookOpen,
    title: "Submission",
    description:
      "Researchers submit their manuscript to a journal. The manuscript is checked for basic formatting and suitability before moving to the next stage.",
  },
  {
    icon: Users,
    title: "Peer Review",
    description:
      "Experts in the field evaluate the manuscript's quality, methodology, and significance. This is the core of the process, ensuring scientific rigor and integrity.",
  },
  {
    icon: Feather,
    title: "Revisions",
    description:
      "Based on feedback, authors revise their work, addressing reviewer comments and improving the manuscript. This iterative step enhances the final publication's quality.",
  },
  {
    icon: Award,
    title: "Acceptance",
    description:
      "After successful revisions, the manuscript is accepted for publication. This marks a major milestone, validating the research findings and their contribution to the field.",
  },
  {
    icon: Globe,
    title: "Publication",
    description:
      "The research is published in a journal and becomes available to the global scientific community. This is when the new knowledge is shared and begins its journey.",
  },
  {
    icon: Handshake,
    title: "Impact & Collaboration",
    description:
      "The published work influences future research, informs policy, and fosters new collaborations. The peer review process ensures this impact is built on a foundation of trust.",
  },
];

const highlights = [
  {
    icon: Check,
    title: "Ensures Quality",
    description:
      "Expert evaluation guarantees the research is sound, accurate, and trustworthy.",
  },
  {
    icon: Lightbulb,
    title: "Fosters Innovation",
    description:
      "Constructive feedback and discussion lead to stronger, more impactful discoveries.",
  },
  {
    icon: TrendingUp,
    title: "Builds Trust",
    description:
      "A transparent process provides confidence in the integrity of scientific findings.",
  },
  {
    icon: HeartHandshake,
    title: "Promotes Collaboration",
    description:
      "Engaging with peers creates opportunities for new partnerships and shared insights.",
  },
];

const whoCanBenefit = [
  { icon: GraduationCap, label: "Researchers" },
  { icon: UserCog, label: "Students" },
  { icon: Hospital, label: "Healthcare Professionals" },
  { icon: BookOpen, label: "Policy Makers" },
  { icon: Globe, label: "The Public" },
  { icon: Feather, label: "Journal Editors" },
];

const glowAnimation = {
  whileHover: {
    scale: 1.05,
    boxShadow: "0 0 8px #714819, 0 0 25px #b2874b",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const iconVariants = {
  initial: { y: -50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.5 },
  },
};

// === COMPONENT ===
const PeerReviewProcess = () => {
  const [expandedCards, setExpandedCards] = useState(
    Array(timelineStages.length).fill(false)
  );
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.1 });

  const handleToggleExpand = (index) => {
    setExpandedCards((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div className="bg-white text-[#0f2920] min-h-screen font-inter overflow-hidden relative">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${journalsBanner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            Publications
          </h1>
        </motion.div>
      </section>

      {/* Main Content Container */}
      <div className="relative z-10 px-4 py-8 md:py-16 max-w-7xl mx-auto">
        {/* Journal Topics Section - MODIFIED */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-32"
        >
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {journalTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={glowAnimation}
                whileHover="whileHover"
                className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col items-center text-center shadow-lg transition-all duration-300 ease-in-out"
              >
                <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden shadow-xl">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-lg font-bold text-white text-center px-2">
                      {topic.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[#1f3b30] text-sm mt-2 text-justify">
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-2 md:mb-4"
        >
          <motion.div
            variants={iconVariants}
            initial="initial"
            animate="animate"
            className="mb-6 flex justify-center"
          >
            <Rocket size={100} className="text-[#714819]" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819]">
            The Journey of a Scientific Paper
          </h2>
          <p className="text-lg md:text-xl text-[#1f3b30] max-w-2xl mx-auto text-justify">
            Explore the essential stages of the peer review process, a trusted
            system that ensures the quality and reliability of scientific
            research.
          </p>
          <motion.a
            href="#timeline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 inline-block px-8 py-4 text-lg font-semibold rounded-full bg-[#0f2920] text-white shadow-xl transition-all duration-300 ease-in-out hover:bg-[#1f3b30] hover:scale-105"
          >
            Scroll to Explore the Journey ↓
          </motion.a>
        </motion.div>

        {/* Scroll-Driven Timeline */}
        <div id="timeline" ref={timelineRef}>
          <div className="flex flex-col items-center">
            {timelineStages.map((stage, index) => {
              const isExpanded = expandedCards[index];
              const zIndex = timelineStages.length - index;
              const rotation =
                (index - timelineStages.length / 2) * (isExpanded ? 0 : 0.5);
              const translateY = isExpanded ? 0 : index * 4;

              return (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 50, rotate: 2 }}
                  animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  layout
                  className="relative group w-full max-w-xl md:max-w-3xl mb-8"
                  style={{
                    zIndex,
                    transform: `translateY(${translateY}px) rotate(${rotation}deg)`,
                  }}
                >
                  <motion.div
                    className={`relative p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-200 shadow-2xl transition-all duration-300 ease-in-out transform ${!isExpanded ? "hover:scale-[1.02]" : ""
                      }`}
                    style={{
                      transformOrigin: "bottom center",
                      rotate: index % 2 === 0 ? "1deg" : "-1deg",
                    }}
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <stage.icon size={36} className="text-[#714819]" />
                      <h3 className="text-2xl font-bold">{stage.title}</h3>
                    </div>
                    <p className="text-[#1f3b30] text-sm md:text-base text-justify">
                      {stage.description}
                    </p>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4"
                        >
                          <p className="text-[#1f3b30] text-sm md:text-base text-justify">
                            {stage.description} (Extended content for
                            demonstration purposes. This would be a more
                            detailed paragraph in a real app.)
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <button
                      onClick={() => handleToggleExpand(index)}
                      className="absolute bottom-4 right-4 text-[#714819] hover:text-[#b2874b] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#714819] rounded-full"
                    >
                      <ChevronDown
                        className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-20 md:mt-32">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819] flex justify-center items-center">
            <Sparkles size={32} className="inline-block mr-2" /> Highlights of
            the Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={glowAnimation}
                whileHover="whileHover"
                className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col items-center text-center group transition-all duration-300 ease-in-out"
              >
                <item.icon
                  size={48}
                  className="text-[#714819] mb-4 transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-[#1f3b30] text-justify">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Who Can Benefit Section */}
        <div className="mt-8 md:mt-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0f2920] to-[#714819] flex justify-center items-center">
            <Users size={32} className="inline-block mr-2" /> Who Can Benefit?
          </h2>
          <div className="flex overflow-x-auto gap-4 items-center justify-center scrollbar-hide">
            {whoCanBenefit.map((chip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="flex items-center justify-center bg-[#e0ede6] border border-[#a2b5aa] rounded-full py-2 px-4 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#a2b5aa] flex-shrink-0"
              >
                <chip.icon size={30} className="text-[#714819] mr-2" />
                <span className="text-base font-semibold text-[#0f2920]">
                  {chip.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-8 md:mt-10 text-center pb-16">
          <p className="text-lg md:text-2xl font-semibold mb-8 text-[#1f3b30] max-w-4xl mx-auto text-justify">
            Peer-reviewed science ensures{" "}
            <span className="text-[#714819]">Trust</span>,{" "}
            <span className="text-[#714819]">Impact</span>, and{" "}
            <span className="text-[#714819]">Global Recognition</span>.
          </p>
          <motion.div >
            <Link to="/contact">
              <motion.button variants={glowAnimation} whileHover="whileHover" className="relative overflow-hidden px-12 py-5 text-xl font-bold rounded-full bg-[#0f2920] text-white shadow-xl focus:outline-none focus:ring-4 focus:ring-[#714819] focus:ring-opacity-50">
                Start Your Journey →
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute inset-0 bg-white opacity-10 blur-md"
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        body {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default PeerReviewProcess;
