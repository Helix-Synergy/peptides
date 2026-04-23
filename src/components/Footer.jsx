import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import {
  PhoneCall,
  MapPin,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  ChevronDown,
  Home,
  Info,
  Image,
  Youtube,
  Instagram,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about-us", icon: Info },
  { name: "Contact", href: "/contact", icon: Mail },
];

const secondRowLinks = [
  {
    name: "Panel of Experts (POE)",
    href: "/panel-of-experts",
    dropdown: [
      {
        name: "About Panel of Experts",
        href: "/panel-of-experts/about-advisory-board",
      },
      {
        name: "Subject Matter Experts",
        href: "/panel-of-experts/subject-matter-experts",
      },
      {
        name: "Become a Panel Member",
        href: "/panel-of-experts/become-a-member",
      },
      {
        name: "Activities/Benefits",
        href: "/panel-of-experts/activities-benefits",
      },
    ],
  },
  {
    name: "Academic Assist",
    href: "/academic-assist",
    dropdown: [
      { name: "Academic Projects", href: "/academic-assist/projects" },
      { name: "Conferences/Seminars", href: "/academic-assist/conferences" },
      { name: "Workshops", href: "/academic-assist/workshops" },
      { name: "Internships", href: "/academic-assist/internships" },
      { name: "Publications", href: "/academic-assist/publications" },
      {
        name: "Skill Development (SKID)",
        href: "/academic-assist/skill-development",
      },
      {
        name: "Industrial Tours (INTO)",
        href: "/academic-assist/industrial-tours",
      },
      { name: "e-Learn", href: "/academic-assist/e-learn" },
      {
        name: "Competitive Exams Related Training (CERT)",
        href: "/academic-assist/cert",
      },
    ],
  },
  {
    name: "Corporate Astute",
    href: "/corporate-astute",
    dropdown: [
      {
        name: "Analyte Assessment Services (AAS)",
        href: "/corporate-astute/aas",
      },
      {
        name: "Contract Research Services (CRS)",
        href: "/corporate-astute/crs",
      },
      {
        name: "Faculty Upskilling Services (FUSS)",
        href: "/corporate-astute/fuss",
      },
      {
        name: "Research Assistance & Writing Services (RAWS)",
        href: "/corporate-astute/raws",
      },
    ],
  },
  {
    name: "Career Saga",
    href: "/career-saga",
    dropdown: [
      { name: "Job Oriented Trainings (JOT)", href: "/career-saga/jot" },
      { name: "Placement Assistance (PLAST)", href: "/career-saga/plast" },
      { name: "Advanced Industrial Reach (AIR)", href: "/career-saga/air" },
      {
        name: "Peptides Assistance Membership (PAM)",
        href: "/career-saga/pam",
      },
    ],
  },
  {
    name: "Collaborations",
    href: "/collaborations",
    dropdown: [
      { name: "Academic Collaborations", href: "/collaborations/academic" },
      { name: "Industry Collaborations", href: "/collaborations/industry" },
      { name: "Collaborate with Peptides", href: "/collaborations/collab-peptides" },
    ],
  },
  {
    name: "Gallery",
    href: "/gallery",
    icon: Image,
    dropdown: [],
  },
  {
    name: "Careers",
    href: "/careers",
    dropdown: [
      { name: "Jobs @ Peptides", href: "/careers/jobs" },
      { name: "Post a Job with Peptides", href: "/careers/post-job" },
    ],
  },
];

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [visitorCount, setVisitorCount] = useState("...");

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
        const response = await fetch(`${apiUrl}/visitors`);
        const data = await response.json();
        if (data.count) {
          setVisitorCount(data.count.toLocaleString());
        }
      } catch (error) {
        console.error("Failed to fetch visitor count", error);
      }
    };
    fetchVisitorCount();
  }, []);

  const handleDropdownToggle = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Find the 'Gallery' link to move it
  const galleryLink = secondRowLinks.find((link) => link.name === "Gallery");
  const quickLinks = [...navLinks, galleryLink];

  return (
    <footer className="bg-[#0f2920] text-white py-12 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Box 1: Logo, Text & Socials */}
          <div className="space-y-4">
            <Link to="/" aria-label="Home">
              <div
                className="h-[90px] w-[90px] rounded-lg bg-white p-3 shadow-lg bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${Logo})` }}
              />
            </Link>
            <p className="text-sm text-gray-300 text-justify max-w-sm">
              Peptides Knowledge Park offers a range of Academic Support
              Services including Workshops to enhance student success and
              engagement.{" "}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/peptides-knowledge-park/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffc107] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/Peptides11008/status/2005912778075431037" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffc107] transition-colors" aria-label="X">
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61574949076299" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffc107] transition-colors" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/peptidesknowledgepark?igsh=MWtnNWNyYWt6c3RhZA==" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffc107] transition-colors" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@peptidesknowledgepark" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffc107] transition-colors" aria-label="Youtube">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="https://wa.me/917997040959" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffc107] transition-colors" aria-label="WhatsApp">
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Box 2: Quick Links (Now with Gallery) */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#ffc107]">
              Quick Links
            </h3>
            <ul className="space-y-[29px]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="flex items-center space-x-2 hover:text-[#ffc107] transition-colors"
                  >
                    {link.icon && <link.icon className="w-5 h-5" />}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 3: Services (Removed Gallery and Careers) */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#ffc107]">
              Our Services
            </h3>
            <ul className="space-y-2">
              {secondRowLinks
                .filter(
                  (link) => link.name !== "Gallery" && link.name !== "Careers"
                )
                .map((link) => (
                  <li key={link.name}>
                    {link.dropdown?.length > 0 ? (
                      <>
                        <button
                          onClick={() => handleDropdownToggle(link.name)}
                          className="w-full flex items-center hover:text-[#ffc107] transition-colors"
                        >
                          {link.name}
                          <ChevronDown
                            className={`w-5 h-5 ml-4 transition-transform duration-300 ${openDropdown === link.name ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                        <ul
                          className={`pl-4 mt-2 space-y-2 border-l border-[#333] transition-all duration-300 ease-in-out overflow-hidden ${openDropdown === link.name ? "max-h-96" : "max-h-0"
                            }`}
                        >
                          {link.dropdown.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                className="block text-sm hover:text-[#ffc107] transition-colors"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        className="block hover:text-[#ffc107] transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
            </ul>
          </div>

          {/* Box 4: Get in Touch (Contact Info) */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#ffc107] border-b-2 border-green-500 pb-1 w-fit mb-4">
              Contact Us
            </h3>
            <address className="not-italic space-y-3 text-gray-300">
              <p className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[#ffc107] mt-1 shrink-0" />
                <span>
                  Mahaveer Radiance,<br />
                  Near Madhapur<br />
                  metro station, CBI<br />
                  Colony, Hyderabad,<br />
                  Telangana 500081
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <PhoneCall className="w-5 h-5 text-[#ffc107]" />
                <a
                  href="tel:+917997040959"
                  className="hover:text-[#ffc107] transition-colors"
                >
                  +91 7997 040 959
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-[#ffc107]" />
                <a
                  href="mailto:hello@peptides.co.in"
                  className="hover:text-[#ffc107] transition-colors"
                >
                  hello@peptides.co.in
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#333] flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 pb-4">
          <div className="text-center md:text-left text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Peptides Knowledge Park. All Rights Reserved.
          </div>

          {/* Beautiful Visitor Counter */}
          <div className="flex items-center space-x-4 bg-[#143226] px-5 py-2.5 rounded-full border border-[#ffc107]/20 shadow-[0_0_15px_rgba(255,193,7,0.05)] hover:shadow-[0_0_20px_rgba(255,193,7,0.15)] transition-shadow duration-300">
            <div className="flex items-center space-x-2">
              <span className="text-[#ffc107] text-xs font-semibold tracking-widest uppercase">Live Visitors</span>
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </div>
            </div>
            <div className="h-6 w-px bg-white/10"></div>
            <div className="flex items-center justify-center text-white font-bold text-[17px] tracking-wider min-w-[50px] transition-all hover:scale-105 duration-300">
              {visitorCount}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

