// import React, { useState } from "react";
// import { Share2, UserCog, Cloud, Laptop2, Play } from "lucide-react";

// const features = [
//   {
//     title: "Strategic Direction",
//     desc: "Our Advisory Board Team comprises seasoned professionals with vast expertise across diverse industries. They provide strategic direction and mentorship to strengthen our vision and objectives.",
//     icon: <Share2 className="w-10 h-10" />,
//   },
//   {
//     title: "Innovative Insight",
//     desc: "By guiding us in navigating complex challenges and seizing opportunities, they play an integral role in shaping our growth with insight that fosters innovation and excellence.",
//     icon: <UserCog className="w-10 h-10" />,
//   },
//   {
//     title: "Sustainable Progress",
//     desc: "Their commitment to excellence drives impactful solutions and sustainable progress. They help us build resilience and lead with responsibility toward future goals.",
//     icon: <Cloud className="w-10 h-10" />,
//   },
//   {
//     title: "Empowered Leadership",
//     desc: "With their leadership, we achieve new milestones and deliver exceptional outcomes. Together, we foster innovation and create a lasting impact for a better tomorrow.",
//     icon: <Laptop2 className="w-10 h-10" />,
//   },
// ];

// const WhyChooseUsSection = () => {
//   const [hovered, setHovered] = useState(null);
//   return (
//     <section className="w-full py-20 px-4 sm:px-8 lg:px-8 bg-gradient-to-br from-[#2a2e8a] via-[#6a3fa0] to-[#a84ca4] relative overflow-hidden">
//       {/* Dots pattern (optional) */}
//       <div
//         className="absolute right-0 top-0 w-1/2 h-full pointer-events-none select-none mt-12"
//         style={{
//           background:
//             "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 1px, transparent 1px)",
//           backgroundSize: "24px 24px",
//         }}
//       />
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center">
//           <span className="text-pink-400 text-base font-semibold tracking-widest mb-2 uppercase block">
//             People Assisting PEPTIDES
//           </span>
//           <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//             Our Team Of Excellence
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:my-24">
//           {features.map((f, i) => {
//             const isActive = hovered === i;
//             return (
//               <div
//                 key={i}
//                 className={`relative border rounded-2xl px-4 py-6 flex flex-col items-center text-center shadow-xl transition-all duration-300 group cursor-pointer
//                   ${
//                     isActive
//                       ? "bg-white border-white scale-105 z-10"
//                       : "bg-white/5 border-white/10"
//                   }
//                 `}
//                 onMouseEnter={() => setHovered(i)}
//                 onMouseLeave={() => setHovered(null)}
//               >
//                 <div className="absolute -top-14 left-1/2 -translate-x-1/2">
//                   <svg
//                     width="120"
//                     height="120"
//                     viewBox="0 0 16 16"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-28 h-28"
//                   >
//                     <path
//                       fill={isActive ? "#60a5fa" : "#ec4899"}
//                       d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
//                     />
//                   </svg>
//                   <span
//                     className={`absolute inset-0 flex items-center justify-center w-28 h-28 transition-all duration-300 ${
//                       isActive ? "text-white" : "text-white"
//                     }`}
//                     style={{ top: 0, left: 0 }}
//                   >
//                     {f.icon}
//                   </span>
//                 </div>

//                 <div className="mt-12">
//                   <h3
//                     className={`text-xl font-semibold mb-2 transition-all duration-300 ${
//                       isActive ? "text-gray-900" : "text-white"
//                     }`}
//                   >
//                     {f.title}
//                   </h3>
//                   <p
//                     className={`text-base transition-all duration-300 ${
//                       isActive ? "text-gray-600" : "text-white/60"
//                     }`}
//                   >
//                     {f.desc}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         {/* Video Section */}
//         {/* <div className="w-full flex flex-col md:flex-row items-center bg-white mt-8 rounded-2xl overflow-hidden">
//           Video thumbnail
//           <div className="relative w-full md:w-1/2 h-64 md:h-72 flex-shrink-0">
//             <img
//               src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
//               alt="Agency Video"
//               className="w-full h-full object-cover object-center"
//             />
//             <button className="absolute inset-0 flex items-center justify-center w-full h-full group">
//               <span className="bg-white/80 hover:bg-white text-blue-700 rounded-full p-5 shadow-lg transition-all duration-200">
//                 <Play className="w-10 h-10" />
//               </span>
//             </button>
//           </div>
//           Text and button
//           <div className="relative w-full md:w-1/2 h-64 md:h-72 flex items-center justify-center bg-transparent">
//             <div className="absolute inset-0 bg-gradient-to-tr from-[#2a2e8a]/80 via-[#6a3fa0]/60 to-[#a84ca4]/80 mix-blend-multiply" />
//             <div className="relative z-10 flex flex-col items-start justify-center h-full p-8">
//               <h3 className="text-3xl font-bold text-white mb-4">
//                 Learn More About
//                 <br />
//                 Our Leadership
//               </h3>
//               <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl text-base shadow transition-all duration-200 mt-4">
//                 READ MORE{" "}
//                 <svg
//                   className="ml-2 w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;







import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from 'react-router-dom';
import anuradha from "../assets/images/advisory/anuradha.webp";
import kumar from "../assets/images/advisory/kumar.webp";
import pushpa from "../assets/images/advisory/pushpa.webp";
import sarika from "../assets/images/advisory/sarika.webp";
import sudhakar from "../assets/images/advisory/sudhakar.webp";
import valasia from "../assets/images/advisory/valasia.webp";
import cristiano from "../assets/images/advisory/cristiano.webp";
import ramakanth from "../assets/images/advisory/ramakanth.webp";
import saritha from "../assets/images/advisory/saritha.webp";
import sujani from "../assets/images/advisory/sujani.webp";
import vinyas from "../assets/images/advisory/vinyas.webp";
import kalyani from "../assets/images/advisory/kalyani.webp";
import murthy from "../assets/images/advisory/murthy.webp";
import roseMary from "../assets/images/advisory/rose-mary.webp";
import shivakrishna from "../assets/images/advisory/shivakrishna.webp";
import thomas from "../assets/images/advisory/thomas.webp";
import Sunitha from "../assets/images/advisory/sunithaGaru.webp";

const baseExperts = [
  { name: "Dr. Valasia Iakovoglou", designation: "PhD in Ecophysiology/Sylviculture", place: "USA", img: valasia },
  { name: "Dr. Thomas J. Webster", designation: "Biomedical Engineer & Chief Nano Scientific Officer", place: "USA", img: thomas },
  { name: "Cristiano José de Andrade", designation: "Adjunct Professor", place: "Brazil", img: cristiano },
  { name: "Sarika Kuchipudi", designation: "Senior Scientist", place: "Australia", img: sarika },
  { name: "Dr. Sri Samba Murthy", designation: "Educator & Researcher", place: "India", img: murthy },
  { name: "Dr. Shivakrishna Pabba", designation: "Managing Director & Lab Head", place: "India", img: shivakrishna },
  { name: "Dr. Vinyas Mayasa", designation: "Assistant Professor", place: "India", img: vinyas },
  { name: "Dr. Mallappa Kumara Swamy", designation: "HOD Biotechnology", place: "India", img: kumar },
  { name: "Dr. Ramakanth Sharma", designation: "R&D Specialist", place: "India", img: ramakanth },
  { name: "Dr. SUJANI GUDIPATI", designation: "R&D", place: "India", img: sujani },
  { name: "Prof. E.M. Sunitha", designation: "Professor & Head of Botany", place: "India", img: Sunitha },
  { name: "Peri Anuradha", designation: "Principal", place: "India", img: anuradha },
  { name: "Pushpa Lalitha", designation: "Senior Food Analyst", place: "India", img: pushpa },
  { name: "Dr. Kalyani Paidikondala", designation: "Women Scientist\nA (WOSA)-DST", place: "India", img: kalyani },
  { name: "Dr. Rose Mary Tadiparthi", designation: "HOD, Botany Department", place: "India", img: roseMary },
  { name: "Dr. Y. Sudhakar", designation: "Assistant Professor & HOD", place: "India", img: sudhakar },
  { name: "Dr. Saritha Sivampeta", designation: "HOD, Department of Chemistry", place: "India", img: saritha },
];

// Duplicating the data so the slider scrolls naturally
const people = [...baseExperts, ...baseExperts];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 70, damping: 12 },
  },
};

const ExpertsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 px-4 sm:px-8 lg:px-12 relative overflow-hidden"
      style={{ backgroundColor: "#fff8ecff" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-[#0f2920]"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Meet Our Panel of Experts
          </motion.h2>
        </div>

        {/* Cards Carousel (Native CSS Marquee) */}
        <motion.div
          className="w-full overflow-hidden relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Marquee Container */}
          <div
            className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 py-4 px-2"
            style={{ animationDuration: '85s' }}
          >
            {[...people, ...people].map((person, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="w-[280px] bg-white rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition p-6 m-2 shrink-0 h-[380px] flex-grow-0 mx-auto"
              >
                {/* Rounded Image Container */}
                <div className="w-40 h-40 mb-6 relative rounded-full overflow-hidden border-4 border-[#193127] shrink-0">
                  <img
                    src={person.img || "https://placehold.co/100x100/text=Peptides+Image"}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow justify-between w-full h-[120px]">
                  <h3 className="text-xl font-bold text-[#193127] line-clamp-2 leading-tight">
                    {person.name}
                  </h3>
                  <div className="mt-auto">
                    <p className="text-sm font-medium text-gray-700 whitespace-pre-line line-clamp-3 mb-1">
                      {person.designation}
                    </p>
                    <p className="text-xs text-gray-500 font-semibold uppercase">{person.place}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="text-center mt-12">
          <Link
            to="/panel-of-experts/subject-matter-experts"
            className="inline-block bg-[#193127] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#13241d] transition"
          >
            View All Experts
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default ExpertsSection;

