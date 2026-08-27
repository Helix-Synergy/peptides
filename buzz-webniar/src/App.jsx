import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import TracksPage from './pages/TracksPage';
import SchedulePage from './pages/SchedulePage';
import RegisterPage from './pages/RegisterPage';
import ExecutivePanelPage from './pages/ExecutivePanelPage';
import ContactPage from './pages/ContactPage';
import OratorsPage from './pages/OratorsPage';
import EventPartnersPage from './pages/EventPartnersPage';
import AbstractSubmissionPage from './pages/AbstractSubmissionPage';
import QuickLinks from './components/QuickLinks';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/executive-panel" element={<ExecutivePanelPage />} />
            <Route path="/tracks" element={<TracksPage />} />
            <Route path="/orators" element={<OratorsPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/partners" element={<EventPartnersPage />} />
            <Route path="/abstract_submission" element={<AbstractSubmissionPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <QuickLinks />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
