import React, { useEffect, useState } from 'react'; // Import useEffect, useState
import { Outlet, useLocation } from 'react-router-dom'; // Import useLocation
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import ScrollToTopButton from '../components/ScrollToTopButton';
import Chatbot from '../components/ui/Chatbot';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';

const Layout = () => {
  const location = useLocation(); // Get the current location object
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // This effect runs whenever the location changes
    window.scrollTo(0, 0);

    // Trigger loading animation on route change
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 0.8 seconds loading for snappy feel

    return () => clearTimeout(timer);
  }, [location.pathname]); // The dependency array ensures it only runs on path changes

  return (
    <div className="min-h-screen " style={{ backgroundColor: '#f2efe9', color: '#714819' }}>
      {isLoading && <LoadingScreen />}
      <Navbar />
      <div>
        <Outlet />
      </div>
      {/* <ScrollToTopButton /> */}
      <Footer />
      {/* <Chatbot position="left" /> */}
    </div>
  );
};

export default Layout;