// import React, { useEffect, useState } from 'react';
// import { ArrowUp } from 'lucide-react';

// const ScrollToTopButton = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const hero = document.querySelector('section');
//       const heroHeight = hero ? hero.offsetHeight : 0;
//       setShow(window.scrollY > heroHeight - 80);
//     };
//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   if (!show) return null;

//   return (
//     <button
//       onClick={scrollToTop}
//       className="fixed bottom-8 right-8 z-50 flex flex-col items-center justify-center w-16 h-16 text-white font-bold shadow-lg transition-all duration-200"
//       style={{ backgroundColor: '#B9935A', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
//       aria-label="Scroll to top"
//     >
//       <ArrowUp className="w-7 h-7 mb-1" />
//       <span className="text-xs font-bold" style={{ color: '#2F2415' }}>TOP</span>
//     </button>
//   );
// };

// export default ScrollToTopButton; 