// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from "react";
// // These are your existing page components
// import AboutUs from "./pages/AboutUs";
// import Gallery from "./pages/Gallery";
// import Layout from "./layout/Layout";
// import Hero from "./sections/Hero";
// import ServiceSlider from "./sections/ServiceSlider";
// import AboutSection from "./sections/AboutSection";
// import WhyChooseUsSection from "./sections/WhyChooseUsSection";
// import ContactSection from "./components/ContactSection/ContactSection";
// import CollaborationSection from "./sections/CollaborationSection";
// import HomeContactSection from "./sections/HomeContactSection";
// import ActivitiesBenefitsPage from "./components/AdvisoryCouncil/ActivitiesBenefitsPage";

// // Components for Panel of Experts (POE)
// import AboutAdvisoryBoard from "./components/AdvisoryCouncil/AboutAdvisoryBoard";
// import OurAdvisoryCouncil from "./components/AdvisoryCouncil/OurAdvisoryCouncil";
// import BecomeAMemberComp from "./components/AdvisoryCouncil/BecomeAMember";

// // Components for Academic Assist
// import AcademicAssistDropdown from "./components/AcademicAssist/AcademicAssistDropdown";
// import AcademicProjects from "./components/AcademicAssist/AcademicProjects";
// import ConferencesSeminars from "./components/AcademicAssist/ConferencesAndSeminars/ConferencesSeminars";
// import Workshops from "./components/AcademicAssist/Workshops";
// import TechTalks from "./components/AcademicAssist/TechTalks";
// import ResearchAssistanceThesisSupport from "./components/CorporateAstute/ResearchAssistanceThesisSupport";
// import FacultyUpskillingService from "./components/CorporateAstute/FacultyUpskillingService";
// import ELearnDigitalLearning from "./components/AcademicAssist/ELearnDigitalLearning";
// import Publications from "./components/AcademicAssist/Publications";
// import Internships from "./components/AcademicAssist/Internships";
// import SkillDevelopment from "./components/AcademicAssist/SkillDevelopment";
// import IndustrialTours from "./components/AcademicAssist/IndustrialTours";
// import CERT from "./components/AcademicAssist/cert";

// // Components for Corporate Astute
// import CorporateAstuteDropdown from "./components/CorporateAstute/CorporateAstuteDropdown";
// import CorporateCollaborations from "./components/CorporateAstute/CorporateCollaborations";
// import ContractResearchServices from "./components/CorporateAstute/ContractResearchServices";
// import AnalyticAssessmentServices from "./components/CorporateAstute/AnalyticAssessmentServices";
// import StackUp from "./components/CorporateAstute/StackUp";
// import MemberDetailPage from "./components/AdvisoryCouncil/MemberDetailPage";

// import AcademicCollaborations from "./components/Collaborations/AcademicCollaborations";
// import IndustrialCollaborations from "./components/Collaborations/IndustrialCollaborations";
// import CollaborationForm from "./components/Collaborations/CollaborationForm";
// import AcademicDetail from "./components/Collaborations/AcademicCollaborationDetail";
// import IndustrialDetail from "./components/Collaborations/IndustrialCollaborationDetail";

// // Components for Career Saga
// import CareerSagaDropdown from "./components/CareerSaga/CareerSagaDropdown";
// import CareerCoach from "./components/CareerSaga/CareerCoach";
// import JobMate from "./components/CareerSaga/JobMate";
// import PeptidesAssistanceMembership from "./components/CareerSaga/PeptidesAssistanceMembership";
// import AdvancedIndustrialReach from "./components/CareerSaga/AdvancedIndustrialReach";
// import ComingSoon from "./components/ComingSoon";
// import NotFoundLab from "./components/NotFoundLab";




// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route element={<Layout />}>
//           {/* Main Pages */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero />
//                 <AboutSection />
//                 <WhyChooseUsSection />
//           />
//           <Route
//             path="/contact/register-faculty"
//             element={<ContactSection />}
//           />

//           {/* Panel of Experts (POE) Routes - Mapped from old Advisory Council */}
//           <Route
//             path="/panel-of-experts/about-advisory-board"
//             element={<AboutAdvisoryBoard />}
//           />
//           <Route
//             path="/panel-of-experts/subject-matter-experts"
//             element={<OurAdvisoryCouncil />}
//           />
//           <Route
//             path="/panel-of-experts/become-a-member"
//             element={<BecomeAMemberComp />}
//           />
//           <Route
//             path="/panel-of-experts/activities-benefits"
//             element={<ActivitiesBenefitsPage pageType="activities" />}
//           />

//           {/* Academic Assist Routes */}
//           <Route path="/academic-assist" element={<AcademicAssistDropdown />} />
//           <Route
//             path="/academic-assist/projects"
//             element={<AcademicProjects />}
//           />
//           <Route
//             path="/academic-assist/conferences"
//             element={<ConferencesSeminars />}
//           />
//           <Route path="/academic-assist/workshops" element={<Workshops />} />
//           <Route
//             path="/academic-assist/internships"
//             element={<Internships />}
//           />
//           <Route
//             path="/academic-assist/publications"
//             element={<Publications />}
//           />
//           <Route
//             path="/academic-assist/skill-development"
//             element={<SkillDevelopment />}
//           />
//           <Route
//             path="/academic-assist/industrial-tours"
//             element={<IndustrialTours />}
//           />
//           <Route
//             path="/academic-assist/e-learn"
//             element={<ELearnDigitalLearning />}
//           />
//           <Route path="/academic-assist/cert" element={<CERT />} />

//           {/* Corporate Astute Routes */}
//           <Route
//             path="/corporate-astute"
//             element={<CorporateAstuteDropdown />}
//           />
//           <Route
//             path="/corporate-astute/aas"
//             element={<AnalyticAssessmentServices />}
//           />
//           <Route
//             path="/corporate-astute/crs"
//             element={<ContractResearchServices />}
//           />
//           <Route
//             path="/corporate-astute/fuss"
//             element={<FacultyUpskillingService />}
//           />
//           <Route
//             path="/corporate-astute/raws"
//             element={<ResearchAssistanceThesisSupport />}
//           />

//           {/* Career Saga Routes */}
//           <Route path="/career-saga" element={<CareerSagaDropdown />} />
//           <Route path="/career-saga/jot" element={<CareerCoach />} />
//           <Route path="/career-saga/plast" element={<JobMate />} />
//           <Route
//             path="/career-saga/air"
//             element={<AdvancedIndustrialReach />}
//           />
//           <Route
//             path="/career-saga/pam"
//             element={<PeptidesAssistanceMembership />}
//           />

//           <Route
//             path="/collaborations/academic"
//             element={<AcademicCollaborations />}
//           />
//           <Route
//             path="/collaborations/industry"
//             element={<IndustrialCollaborations />}
//           />
//           <Route
//             path="/collaborations/collab-peptides"
//             element={<CollaborationForm />}
//           />
//           <Route path="/academic/:id" element={<AcademicDetail />} />
//           <Route path="/industry/:id" element={<IndustrialDetail />} />

//           {/* Careers Routes */}
// <Route path="/careers/jobs" element={<ComingSoon pageName="Jobs @ Peptides" />} />
// <Route path="/careers/post-job" element={<ComingSoon pageName="Post a Job with Peptides" />} />

//           <Route
//             path="/panel-of-experts/member/:id"
//             element={<MemberDetailPage />}
//           />

//           {/* Wildcard route for any undefined paths */}
// <Route path="*" element={<NotFoundLab />} />

//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
// These are your existing page components
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Layout from "./layout/Layout";
// ... imports ...
import Hero from "./sections/Hero";
import PaymentSuccess from "./pages/PaymentSuccess";
import ServiceSlider from "./sections/ServiceSlider";
import AboutSection from "./sections/AboutSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import CollaborationSection from "./sections/CollaborationSection";
import HomeContactSection from "./sections/HomeContactSection";
import ActivitiesBenefitsPage from "./components/AdvisoryCouncil/ActivitiesBenefitsPage";

// ... imports ...

// Components for Panel of Experts (POE)
import AboutAdvisoryBoard from "./components/AdvisoryCouncil/AboutAdvisoryBoard";
import OurAdvisoryCouncil from "./components/AdvisoryCouncil/OurAdvisoryCouncil";
import BecomeAMemberComp from "./components/AdvisoryCouncil/BecomeAMember";

// ... (Rest of imports remain same)

// Components for Academic Assist
import AcademicAssistDropdown from "./components/AcademicAssist/AcademicAssistDropdown";
import AcademicProjects from "./components/AcademicAssist/AcademicProjects";
import ConferencesSeminars from "./components/AcademicAssist/ConferencesAndSeminars/ConferencesSeminars";
import Workshops from "./components/AcademicAssist/Workshops";
import TechTalks from "./components/AcademicAssist/TechTalks";
import ResearchAssistanceThesisSupport from "./components/CorporateAstute/ResearchAssistanceThesisSupport";
import FacultyUpskillingService from "./components/CorporateAstute/FacultyUpskillingService";
import ELearnDigitalLearning from "./components/AcademicAssist/ELearnDigitalLearning";
import Publications from "./components/AcademicAssist/Publications";
import Internships from "./components/AcademicAssist/Internships";
import SkillDevelopment from "./components/AcademicAssist/SkillDevelopment";
import IndustrialTours from "./components/AcademicAssist/IndustrialTours";
import CERT from "./components/AcademicAssist/cert";

// Components for Corporate Astute
import CorporateAstuteDropdown from "./components/CorporateAstute/CorporateAstuteDropdown";
import CorporateCollaborations from "./components/CorporateAstute/CorporateCollaborations";
import ContractResearchServices from "./components/CorporateAstute/ContractResearchServices";
import AnalyticAssessmentServices from "./components/CorporateAstute/AnalyticAssessmentServices";
import StackUp from "./components/CorporateAstute/StackUp";
import MemberDetailPage from "./components/AdvisoryCouncil/MemberDetailPage";

import AcademicCollaborations from "./components/Collaborations/AcademicCollaborations";
import IndustrialCollaborations from "./components/Collaborations/IndustrialCollaborations";
import CollaborationForm from "./components/Collaborations/CollaborationForm";
import AcademicDetail from "./components/Collaborations/AcademicCollaborationDetail";
import IndustrialDetail from "./components/Collaborations/IndustrialCollaborationDetail";

// Components for Career Saga
import CareerSagaDropdown from "./components/CareerSaga/CareerSagaDropdown";
import CareerCoach from "./components/CareerSaga/CareerCoach";
import JobMate from "./components/CareerSaga/JobMate";
import PeptidesAssistanceMembership from "./components/CareerSaga/PeptidesAssistanceMembership";
import AdvancedIndustrialReach from "./components/CareerSaga/AdvancedIndustrialReach";
import ComingSoon from "./components/ComingSoon";
import NotFoundLab from "./components/NotFoundLab";
import QuickLinks from "./components/Quicklinks";


function App() {


  // Use a useEffect hook to send a ping to the backend service every 3 minutes.
  // This keeps the service awake on platforms like Render's free tier.
  useEffect(() => {
    // Artificial Loading Delay for smooth entry


    const backendUrl = process.env.REACT_APP_API_URL;

    const pingBackend = async () => {
      try {
        const res = await fetch(backendUrl);
        if (res.ok) {
          console.log("✅ Backend ping successful!");
        } else {
          console.warn(`⚠️ Backend ping returned status: ${res.status}`);
        }
      } catch (error) {
        console.error("❌ Backend ping failed:", error);
      }
    };

    pingBackend(); // ping immediately
    const intervalId = setInterval(pingBackend, 180000); // every 3 minutes

    return () => {
      clearInterval(intervalId);

    };
  }, []);






  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/* Main Pages */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutSection />
                <WhyChooseUsSection />
                <CollaborationSection />
                <ServiceSlider />
                <HomeContactSection />
              </>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/contact/register-student"
            element={<ContactSection />}
          />
          <Route
            path="/contact/register-faculty"
            element={<ContactSection />}
          />

          {/* Panel of Experts (POE) Routes - Mapped from old Advisory Council */}
          <Route
            path="/panel-of-experts/about-advisory-board"
            element={<AboutAdvisoryBoard />}
          />
          <Route
            path="/panel-of-experts/subject-matter-experts"
            element={<OurAdvisoryCouncil />}
          />
          <Route
            path="/panel-of-experts/become-a-member"
            element={<BecomeAMemberComp />}
          />
          <Route
            path="/panel-of-experts/activities-benefits"
            element={<ActivitiesBenefitsPage pageType="activities" />}
          />

          {/* Academic Assist Routes */}
          <Route path="/academic-assist" element={<AcademicAssistDropdown />} />
          <Route
            path="/academic-assist/projects"
            element={<AcademicProjects />}
          />
          <Route
            path="/academic-assist/conferences"
            element={<ConferencesSeminars />}
          />
          <Route path="/academic-assist/workshops" element={<Workshops />} />
          <Route
            path="/academic-assist/internships"
            element={<Internships />}
          />
          <Route
            path="/academic-assist/publications"
            element={<Publications />}
          />
          <Route
            path="/academic-assist/skill-development"
            element={<SkillDevelopment />}
          />
          <Route
            path="/academic-assist/industrial-tours"
            element={<IndustrialTours />}
          />
          <Route
            path="/academic-assist/e-learn"
            element={<ELearnDigitalLearning />}
          />
          <Route path="/academic-assist/cert" element={<CERT />} />

          {/* Corporate Astute Routes */}
          <Route
            path="/corporate-astute"
            element={<CorporateAstuteDropdown />}
          />
          <Route
            path="/corporate-astute/aas"
            element={<AnalyticAssessmentServices />}
          />
          <Route
            path="/corporate-astute/crs"
            element={<ContractResearchServices />}
          />
          <Route
            path="/corporate-astute/fuss"
            element={<FacultyUpskillingService />}
          />
          <Route
            path="/corporate-astute/raws"
            element={<ResearchAssistanceThesisSupport />}
          />

          {/* Career Saga Routes */}
          <Route path="/career-saga" element={<CareerSagaDropdown />} />
          <Route path="/career-saga/jot" element={<CareerCoach />} />
          <Route path="/career-saga/plast" element={<JobMate />} />
          <Route
            path="/career-saga/air"
            element={<AdvancedIndustrialReach />}
          />
          <Route
            path="/career-saga/pam"
            element={<PeptidesAssistanceMembership />}
          />

          <Route
            path="/collaborations/academic"
            element={<AcademicCollaborations />}
          />
          <Route
            path="/collaborations/industry"
            element={<IndustrialCollaborations />}
          />
          <Route
            path="/collaborations/collab-peptides"
            element={<CollaborationForm />}
          />
          <Route path="/academic/:id" element={<AcademicDetail />} />
          <Route path="/industry/:id" element={<IndustrialDetail />} />

          {/* Careers Routes */}
          <Route path="/careers/jobs" element={<ComingSoon pageName="Jobs @ Peptides" />} />
          <Route path="/careers/post-job" element={<ComingSoon pageName="Post a Job with Peptides" />} />

          <Route
            path="/panel-of-experts/member/:id"
            element={<MemberDetailPage />}
          />


          {/* Wildcard route for any undefined paths */}
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="*" element={<NotFoundLab />} />
        </Route>
      </Routes>
      <QuickLinks />
    </Router>
  );
}

export default App;
