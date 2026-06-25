



import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneCall, Menu, X, Home, Info, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/logo.webp';

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about-us', icon: Info },
  { name: 'Contact', href: '/contact', icon: Mail },
];

const secondRowLinks = [
  {
    name: 'Panel of Experts (POE)',
    href: '/panel-of-experts',
    dropdown: [
      { name: 'About Panel of Experts', href: '/panel-of-experts/about-advisory-board' },
      { name: 'Subject Matter Experts', href: '/panel-of-experts/subject-matter-experts' },
      { name: 'Become a Panel Member', href: '/panel-of-experts/become-a-member' },
      { name: 'Activities/Benefits', href: '/panel-of-experts/activities-benefits' },
    ],
  },
  {
    name: 'Academic Assist',
    href: '/academic-assist',
    dropdown: [
      { name: 'Academic Projects', href: '/academic-assist/projects' },
      { name: 'Conferences/Seminars', href: '/academic-assist/conferences' },
      { name: 'Workshops', href: '/academic-assist/workshops' },
      { name: 'Internships', href: '/academic-assist/internships' },
      { name: 'Publications', href: '/academic-assist/publications' },
      { name: 'Skill Development (SKID)', href: '/academic-assist/skill-development' },
      { name: 'Industrial Tours (INTO)', href: '/academic-assist/industrial-tours' },
      { name: 'e-Learn', href: '/academic-assist/e-learn' },
      { name: 'Competitive Exams Related Training (CERT)', href: '/academic-assist/cert' },
    ],
  },
  {
    name: 'Corporate Astute',
    href: '/corporate-astute',
    dropdown: [
      { name: 'Analyte Assessment Services (AAS)', href: '/corporate-astute/aas' },
      { name: 'Contract Research Services (CRS)', href: '/corporate-astute/crs' },
      { name: 'Faculty Upskilling Services (FUSS)', href: '/corporate-astute/fuss' },
      { name: 'Research Assistance & Writing Services (RAWS)', href: '/corporate-astute/raws' },
    ],
  },
  {
    name: 'Career Saga',
    href: '/career-saga',
    dropdown: [
      { name: 'Job Oriented Trainings (JOT)', href: '/career-saga/jot' },
      { name: 'Placement Assistance (PLAST)', href: '/career-saga/plast' },
      { name: 'Advanced Industrial Reach (AIR)', href: '/career-saga/air' },
      { name: 'Peptides Assistance Membership (PAM)', href: '/career-saga/pam' },
    ],
  },
  {
    name: 'Collaborations',
    href: '/collaborations',
    dropdown: [
      { name: 'Academic Collaborations', href: '/collaborations/academic' },
      { name: 'Industry Collaborations', href: '/collaborations/industry' },
      { name: 'Collaborate with Peptides', href: '/collaborations/collab-peptides' },
    ],
  },
  {
    name: 'Gallery',
    href: '/gallery',
    dropdown: [],
  },
  {
    name: 'Careers',
    href: '/careers',
    dropdown: [
      { name: 'Jobs @ Peptides', href: '/careers/jobs' },
      { name: 'Post a Job with Peptides', href: '/careers/post-job' },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSecondRowDropdown, setMobileSecondRowDropdown] = useState(null);
  const location = useLocation();

  const handleMobileDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleMobileSecondRowDropdown = (name) => {
    setMobileSecondRowDropdown(mobileSecondRowDropdown === name ? null : name);
  };

  const menuRef = useRef(null);
  const secondRowRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the main mobile menu if clicked outside
      if (mobileOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
      // Close the second row dropdown if clicked outside
      if (secondRowRef.current && !secondRowRef.current.contains(event.target)) {
        setMobileSecondRowDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileOpen, mobileSecondRowDropdown]);

  return (
    <header className="bg-[#0f2920] text-white sticky top-0 w-full z-50">
      {/* Fixed Logo */}
      <div className="fixed top-[6px] lg:top-[5px] left-4 z-[55]">
        <Link to="/">
          <div
            className="h-[60px] w-[60px] lg:h-[90px] lg:w-[90px] rounded-lg bg-white p-2 lg:p-3 shadow-lg bg-center bg-contain bg-no-repeat transition-all"
            style={{ backgroundImage: `url(${Logo})` }}
          />
        </Link>
      </div>

      {/* Top Row */}
      <div className="flex items-center justify-between pl-[80px] lg:pl-[140px] pr-4 h-[60px] lg:h-[70px]">
        {/* Primary nav links - desktop only */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`flex items-center space-x-2 font-medium transition-colors duration-200 ${location.pathname === link.href
                ? 'text-[#ffc107]'
                : 'hover:text-[#ffc107]'
                }`}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex items-center space-x-2">
          <PhoneCall className="w-5 h-5 text-[#ffc107]" />
          <a href="tel:+917997040959" className="text-sm font-semibold">
            +91 7997 040 959
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Bottom Row (Desktop) */}
      <div className="bg-[#734C20] pl-[120px] pr-4 h-[50px] hidden lg:flex items-center space-x-4">
        {secondRowLinks.map((link) => {
          const isActive =
            location.pathname === link.href ||
            link.dropdown?.some((d) => location.pathname === d.href);

          return (
            <div key={link.name} className="relative group">
              {link.dropdown?.length > 0 ? (
                // Use a button for links with a dropdown on desktop
                <button
                  className={`px-5 py-2 rounded-full border transition-all duration-300 ${isActive
                    ? 'border-[#ffc107] text-[#ffc107]'
                    : 'border-transparent hover:border-[#ffc107]'
                    }`}
                >
                  {link.name}
                </button>
              ) : (
                // Use a Link for links without a dropdown
                <Link
                  to={link.href}
                  className={`px-5 py-2 rounded-full border transition-all duration-300 ${isActive
                    ? 'border-[#ffc107] text-[#ffc107]'
                    : 'border-transparent hover:border-[#ffc107]'
                    }`}
                >
                  {link.name}
                </Link>
              )}
              {link.dropdown?.length > 0 && (
                <div className="absolute top-full right-0 bg-[#0f2920] rounded-lg shadow-xl py-2 hidden group-hover:block min-w-[220px]">
                  {link.dropdown.map((item) => {
                    const isDropdownActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block px-4 py-2 hover:bg-[#a87930] text-sm hover:text-[#0f2920] ${isDropdownActive ? "text-[#ffc107] font-semibold" : ""
                          }`}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Row Mobile/Tablet */}
      <div ref={secondRowRef} className="lg:hidden bg-[#734C20]">
        <div className="overflow-x-auto whitespace-nowrap py-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="pl-[80px] inline-flex items-center space-x-2 pr-4">
            {secondRowLinks.map((link) => {
              const isActive =
                location.pathname === link.href ||
                link.dropdown?.some((d) => location.pathname === d.href);

              if (link.dropdown?.length > 0) {
                return (
                  <div key={link.name}>
                    <button
                      onClick={() => handleMobileSecondRowDropdown(link.name)}
                      className={`inline-block px-4 py-2 rounded-full border text-sm ${isActive
                        ? 'border-[#ffc107] text-[#ffc107]'
                        : 'border-transparent hover:border-[#ffc107]'
                        }`}
                    >
                      {link.name}
                    </button>
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`inline-block px-4 py-2 rounded-full border text-sm ${isActive
                    ? 'border-[#ffc107] text-[#ffc107]'
                    : 'border-transparent hover:border-[#ffc107]'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* NEW: Mobile/Tablet Dropdown Overlay */}
      <AnimatePresence>
        {mobileSecondRowDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute left-0 right-0 z-40 bg-[#0f2920] shadow-xl"
            style={{ top: '100px' }} /* Positioned below both top and bottom navbars */
          >
            <div className="py-2">
              {secondRowLinks
                .find(link => link.name === mobileSecondRowDropdown)
                ?.dropdown.map(item => {
                  const isDropdownActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => {
                        setMobileSecondRowDropdown(null);
                        setMobileOpen(false); // Close main menu for clean navigation
                      }}
                      className={`block px-4 py-2 text-sm hover:bg-[#a87930] hover:text-[#0f2920] ${isDropdownActive ? "text-[#ffc107] font-semibold" : ""
                        }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Mobile Menu (the main, full-screen menu) */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              ref={menuRef}
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-[#0f2920] z-50 p-6 overflow-y-auto shadow-xl"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 text-white"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-20"
              >
                <ul className="space-y-4">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center space-x-2 py-3 px-2 text-lg hover:text-[#ffc107] transition-colors"
                      >
                        <link.icon className="w-5 h-5" />
                        <span>{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="border-t border-[#333] my-6"></div>

                <ul className="space-y-3">
                  {secondRowLinks.map((link, i) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + 0.05 * i }}
                    >
                      {link.dropdown?.length > 0 ? (
                        <>
                          <button
                            onClick={() => handleMobileDropdown(link.name)}
                            className={`w-full flex justify-between items-center py-2 transition-colors ${openDropdown === link.name ? 'text-[#ffc107]' : ''
                              }`}
                          >
                            {link.name}
                            <motion.div
                              animate={{ rotate: openDropdown === link.name ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-5 h-5" />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {openDropdown === link.name && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="pl-4 mt-2 space-y-2 border-l border-[#333] overflow-hidden"
                              >
                                {link.dropdown.map((item, j) => (
                                  <motion.li
                                    key={item.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * j }}
                                  >
                                    <Link
                                      to={item.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block py-2 text-sm hover:text-[#ffc107] transition-colors"
                                    >
                                      {item.name}
                                    </Link>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 hover:text-[#ffc107] transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;