// import { Info, BookOpen, Building2, Users, Handshake, Phone } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const links = [
//   {
//     id: "about",
//     icon: Info,
//     label: "About Us",
//     link: "/about-us",
//   },
//   {
//     id: "projects",
//     icon: BookOpen,
//     label: "Academic Projects",
//     link: "/academic-assist/projects",
//   },
//   {
//     id: "corporate",
//     icon: Building2,
//     label: "Workshops",
//     link: "/academic-assist/workshops",
//   },
//   {
//     id: "experts",
//     icon: Users,
//     label: "Subject Experts",
//     link: "/panel-of-experts/subject-matter-experts",
//   },
//   {
//     id: "collaborate",
//     icon: Handshake,
//     label: "Collaborate",
//     link: "/collaborations/academic",
//   },
//   {
//     id: "contact",
//     icon: Phone,
//     label: "Contact Us",
//     link: "tel:+917997040959",
//   },
// ];

// const QuickLinks = () => {
//   const [hoveredId, setHoveredId] = useState(null);

//   return (
//     <>
//       <style>{`
//         @keyframes pulseShadow {
//           0%, 100% {
//             box-shadow: 0 0 0 0 #f5af53d4;
//           }
//           50% {
//             box-shadow: 0 0 20px 6px #ab8f32ff;
//           }
//         }
//         .animate-pulseShadow {
//           animation: pulseShadow 2s ease-in-out infinite;
//         }
//       `}</style>

//       {/* WhatsApp Floating Button */}
//       <a
//         href="https://wa.me/917997040959" // <-- replace with your actual WhatsApp number
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-2 right-2 z-30 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transform transition-all"
//       >
//         <FaWhatsapp className="h-7 w-7" />
//       </a>

//       {/* Quick Links Drawer */}
//       <div className="fixed bottom-20 right-0 z-20 flex flex-col space-y-3">
//         {links.map(({ id, icon: Icon, label, link }) => {
//           const isActive = hoveredId === id;
//           return (
//             <Link
//               key={id}
//               to={link}
//               onMouseEnter={() => setHoveredId(id)}
//               onMouseLeave={() => setHoveredId(null)}
//               className={`flex items-center bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 ${
//                 isActive ? "translate-x-8" : "translate-x-40"
//               } ${id === "contact" ? "animate-pulseShadow" : ""}`}
//             >
//               <div className="bg-one text-peptides-dark p-3 flex items-center justify-center rounded-l-full">
//                 <Icon className="h-5 w-5" />
//               </div>
//               <span className="ml-4 pr-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                 {label}
//               </span>
//             </Link>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default QuickLinks;


import { Info, BookOpen, Building2, Users, Handshake, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { id: "about", icon: Info, label: "About Us", link: "/about-us" },
  { id: "projects", icon: BookOpen, label: "Academic Projects", link: "/academic-assist/projects" },
  { id: "corporate", icon: Building2, label: "Workshops", link: "/academic-assist/workshops" },
  { id: "experts", icon: Users, label: "Subject Experts", link: "/panel-of-experts/subject-matter-experts" },
  { id: "collaborate", icon: Handshake, label: "Collaborate", link: "/collaborations/academic" },
  { id: "contact", icon: Phone, label: "Contact Us", link: "tel:+917997040959" },
];

const QuickLinks = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0 0 #f5af53d4;
          }
          50% {
            box-shadow: 0 0 20px 6px #ab8f32ff;
          }
        }
        .animate-pulseShadow {
          animation: pulseShadow 2s ease-in-out infinite;
        }
      `}</style>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917997040959"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-2 right-2 z-30 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transform transition-all"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>

      {/* Quick Links Drawer - Hidden on mobile, visible on lg screens */}
      <div className="hidden lg:flex fixed bottom-20 right-0 z-20 flex-col space-y-3">
        {links.map(({ id, icon: Icon, label, link }) => {
          const isActive = hoveredId === id;
          return (
            <Link
              key={id}
              to={link}
              title={label}
              aria-label={label}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`
    flex items-center bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300
    ${id === "contact" ? "animate-pulseShadow" : ""}
    ${isActive ? "lg:translate-x-8" : "lg:translate-x-40"} 
    translate-x-0
  `}
            >
              <div className="bg-one text-peptides-dark p-3 flex items-center justify-center rounded-l-full">
                <Icon className="h-5 w-5" />
              </div>
              {/* Label only on desktop */}
              <span className="hidden lg:inline ml-4 pr-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {label}
              </span>
            </Link>

          );
        })}
      </div>
    </>
  );
};

export default QuickLinks;
