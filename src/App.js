import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";

// Non-lazy components (layout, loading, quicklinks)
import Layout from "./layout/Layout";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import QuickLinks from "./components/Quicklinks";
import NotFoundLab from "./components/NotFoundLab";
import SEO from "./components/SEO";

// Lazy-loaded components
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Hero = lazy(() => import("./sections/Hero"));
const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const ServiceSlider = lazy(() => import("./sections/ServiceSlider"));
const AboutSection = lazy(() => import("./sections/AboutSection"));
const WhyChooseUsSection = lazy(() => import("./sections/WhyChooseUsSection"));
const ContactSection = lazy(() => import("./components/ContactSection/ContactSection"));
const CollaborationSection = lazy(() => import("./sections/CollaborationSection"));
const HomeContactSection = lazy(() => import("./sections/HomeContactSection"));
const ActivitiesBenefitsPage = lazy(() => import("./components/AdvisoryCouncil/ActivitiesBenefitsPage"));

// Components for Panel of Experts (POE)
const AboutAdvisoryBoard = lazy(() => import("./components/AdvisoryCouncil/AboutAdvisoryBoard"));
const OurAdvisoryCouncil = lazy(() => import("./components/AdvisoryCouncil/OurAdvisoryCouncil"));
const BecomeAMemberComp = lazy(() => import("./components/AdvisoryCouncil/BecomeAMember"));
const MemberDetailPage = lazy(() => import("./components/AdvisoryCouncil/MemberDetailPage"));

// Components for Academic Assist
const AcademicAssistDropdown = lazy(() => import("./components/AcademicAssist/AcademicAssistDropdown"));
const AcademicProjects = lazy(() => import("./components/AcademicAssist/AcademicProjects"));
const ConferencesSeminars = lazy(() => import("./components/AcademicAssist/ConferencesAndSeminars/ConferencesSeminars"));
const Workshops = lazy(() => import("./components/AcademicAssist/Workshops"));
const TechTalks = lazy(() => import("./components/AcademicAssist/TechTalks"));
const ELearnDigitalLearning = lazy(() => import("./components/AcademicAssist/ELearnDigitalLearning"));
const Publications = lazy(() => import("./components/AcademicAssist/Publications"));
const Internships = lazy(() => import("./components/AcademicAssist/Internships"));
const SkillDevelopment = lazy(() => import("./components/AcademicAssist/SkillDevelopment"));
const IndustrialTours = lazy(() => import("./components/AcademicAssist/IndustrialTours"));
const CERT = lazy(() => import("./components/AcademicAssist/cert"));

// Components for Corporate Astute
const CorporateAstuteDropdown = lazy(() => import("./components/CorporateAstute/CorporateAstuteDropdown"));
const CorporateCollaborations = lazy(() => import("./components/CorporateAstute/CorporateCollaborations"));
const ContractResearchServices = lazy(() => import("./components/CorporateAstute/ContractResearchServices"));
const AnalyticAssessmentServices = lazy(() => import("./components/CorporateAstute/AnalyticAssessmentServices"));
const StackUp = lazy(() => import("./components/CorporateAstute/StackUp"));
const ResearchAssistanceThesisSupport = lazy(() => import("./components/CorporateAstute/ResearchAssistanceThesisSupport"));
const FacultyUpskillingService = lazy(() => import("./components/CorporateAstute/FacultyUpskillingService"));

// Components for Collaborations
const AcademicCollaborations = lazy(() => import("./components/Collaborations/AcademicCollaborations"));
const IndustrialCollaborations = lazy(() => import("./components/Collaborations/IndustrialCollaborations"));
const CollaborationForm = lazy(() => import("./components/Collaborations/CollaborationForm"));
const AcademicDetail = lazy(() => import("./components/Collaborations/AcademicCollaborationDetail"));
const IndustrialDetail = lazy(() => import("./components/Collaborations/IndustrialCollaborationDetail"));

// Components for Career Saga
const CareerSagaDropdown = lazy(() => import("./components/CareerSaga/CareerSagaDropdown"));
const CareerCoach = lazy(() => import("./components/CareerSaga/CareerCoach"));
const JobMate = lazy(() => import("./components/CareerSaga/JobMate"));
const PeptidesAssistanceMembership = lazy(() => import("./components/CareerSaga/PeptidesAssistanceMembership"));
const AdvancedIndustrialReach = lazy(() => import("./components/CareerSaga/AdvancedIndustrialReach"));
const ComingSoon = lazy(() => import("./components/ComingSoon"));

function App() {
  useEffect(() => {
    const backendUrl = process.env.REACT_APP_API_URL;
    const pingBackend = async () => {
      try {
        if (!backendUrl) return;
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
    return () => clearInterval(intervalId);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route element={<Layout />}>
            {/* Main Pages */}
            <Route
              path="/"
              element={
                <>
                  <SEO 
                    title="Home" 
                    description="Peptides Knowledge Park offers expert academic workshops, corporate research support, specialized training, and career guidance for students and professionals."
                    keywords="Academic Assist, Corporate Astute, Career Saga, Collaborations, Peptides Knowledge Park, Research, Workshops, Internships" 
                  />
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

            {/* Panel of Experts (POE) Routes */}
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

            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="*" element={<NotFoundLab />} />
          </Route>
        </Routes>
      </Suspense>
      <QuickLinks />
    </Router>
    </HelmetProvider>
  );
}

export default App;
