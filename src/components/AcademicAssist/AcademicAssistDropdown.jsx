import React, { useEffect, useState, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import academicData from '../../pages/academicAssistData.json';

const AcademicAssistDropdown = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeId, setActiveId] = useState('');
  const sectionRefs = useRef({});

  // Determine initial active section based on URL hash or default to first service
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && academicData.services.some(service => service.id === hash)) {
      setActiveId(hash);
      // Scroll to the section if it exists, using native scrollIntoView
      setTimeout(() => {
        const section = sectionRefs.current[hash];
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    } else {
      // Default to the first section if no valid hash
      setActiveId(academicData.services[0]?.id || '');
    }
  }, [location.hash]);

  // Handle intersection observer for scroll-based active state
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-100px 0px -50% 0px',
        threshold: 0.5,
      }
    );

    // Observe each section
    academicData.services.forEach(service => {
      const ref = sectionRefs.current[service.id];
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      // Unobserve all sections on component unmount
      academicData.services.forEach(service => {
        const ref = sectionRefs.current[service.id];
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [academicData.services]);

  const handleSidebarClick = (id) => {
    setActiveId(id);
    // Use hash navigation for smooth scrolling and URL update
    navigate(`#${id}`);
    // Explicitly scroll into view as hash change might not trigger smooth scroll alone
    setTimeout(() => {
        const section = sectionRefs.current[id];
        if (section) {
          // Adjust scroll position to account for fixed header
          const yOffset = -64;
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, 100);
  };

  const GLOBAL_HEADER_HEIGHT = 80;

  return (
    <div className="bg-gradient-to-br from-blue-100 via-green-50 to-pink-50 min-h-screen font-inter">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-purple-700 to-pink-600">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{academicData.meta.h1}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto px-4 text-justify">
            {academicData.intro.title}
          </p>
          <p className="text-base text-gray-200 mt-2 max-w-3xl mx-auto px-4 whitespace-pre-line text-justify">{academicData.intro.description}</p>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <section className="w-full py-12 px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[26vw_1fr] gap-8">
          {/* Sidebar Navigation */}
          <motion.aside
            className="p-6 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl lg:sticky lg:top-24 lg:self-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ maxHeight: `calc(100vh - ${GLOBAL_HEADER_HEIGHT + 48}px)` }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Services</h3>
            <nav className="custom-scrollbar-hide overflow-y-auto" style={{ maxHeight: `calc(100vh - ${GLOBAL_HEADER_HEIGHT + 24 + 50}px)` }}>
              <ul className="space-y-2">
                {academicData.services.map((service, idx) => (
                  <motion.li key={service.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                    <button
                      onClick={() => handleSidebarClick(service.id)}
                      className={`w-full text-left px-4 py-2 rounded transition font-semibold hover:bg-purple-200 hover:text-purple-800 ${
                        activeId === service.id ? 'bg-purple-600 text-white shadow-md' : 'bg-purple-100 text-purple-800'
                      }`}
                      aria-current={activeId === service.id ? 'page' : undefined}
                    >
                      {service.title}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Help Section */}
            {academicData.helpSection && (
              <motion.div
                className="mt-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-103 transition-transform duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <img
                  src={academicData.helpSection.image}
                  alt="How Can We Help?"
                  className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-white shadow-md"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/112x112/CCCCCC/000000?text=User'; }}
                />
                <h4 className="text-xl font-bold mb-1">{academicData.helpSection.title}</h4>
                <p className="text-sm mb-3 text-justify">{academicData.helpSection.description}</p>
                <div className="text-base font-semibold mb-4">
                  <p className="text-justify">{academicData.helpSection.phone}</p>
                  <p className="text-justify">Mail: {academicData.helpSection.email}</p>
                </div>
                {/* Social icons */}
                <div className="flex gap-3 mt-2">
                  <Link to="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.812c-3.233 0-4.188 1.501-4.188 4.004v2.996z"/></svg>
                  </Link>
                  <Link to="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.594 0-6.495 2.902-6.495 6.495 0 .509.058 1.006.173 1.485-5.392-.27-10.197-2.857-13.407-6.793-.559.957-.883 2.077-.883 3.261 0 2.253 1.149 4.246 2.895 5.424-.849-.026-1.646-.26-2.34-.647-.005.021-.005.042-.005.063 0 3.166 2.262 5.8 5.26 6.39-.547.148-1.12.227-1.703.227-.417 0-.82-.041-1.215-.116.834 2.606 3.251 4.504 6.101 4.554-2.245 1.76-5.087 2.812-8.15 2.812-.53 0-1.053-.031-1.566-.092 2.905 1.86 6.356 2.946 10.063 2.946 12.071 0 18.67-10.003 18.67-18.67 0-.6-.013-1.196-.039-1.79z"/></svg>
                  </Link>
                  <Link to="#" className="w-9 h-9 flex items-center justify-center bg-white text-blue-700 rounded-full hover:bg-gray-100 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5 1.11-2.5 2.48-2.5 2.48 1.119 2.48 2.5zm.02 6.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.59-11.011-3.6z"/></svg>
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.aside>

          {/* Main Content Area */}
          <div>
            {academicData.services.map((service, idx) => (
              <motion.div
                key={service.id}
                id={service.id}
                ref={el => {
                  if (el) sectionRefs.current[service.id] = el;
                }}
                className="mb-12 p-6 bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl scroll-mt-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{service.title}</h2>
                <p className="text-gray-700 mb-4 text-lg leading-relaxed whitespace-pre-line text-justify">{service.description}</p>

                {/* CTA Button */}
                {service.cta && (
                  <motion.button
                    className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl text-base shadow transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {service.cta.text}
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicAssistDropdown;