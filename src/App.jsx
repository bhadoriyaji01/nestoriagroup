import React, { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load page components for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/AboutUs'));
const AboutDholera = lazy(() => import('./pages/Aboutdholera'));
const TeamNestoria = lazy(() => import('./pages/Team'));
const Blog = lazy(() => import('./pages/Blog'));
const FAQ = lazy(() => import('./pages/Faq'));
const Contact = lazy(() => import('./pages/Contact'));
const Media = lazy(() => import('./pages/Media'));
const LatestNews = lazy(() => import('./pages/LatestNews'));
const Achievements = lazy(() => import('./pages/Achievements'));
const LandDeals = lazy(() => import('./pages/LandDeal'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Services = lazy(() => import('./pages/Services'));
const Testimonial = lazy(() => import('./pages/Testimonial'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const NotFound = lazy(() => import('./pages/NotFound'));

import Seo from './components/Seo'; // Import Seo component
import { ThemeProvider } from './contexts/ThemeContext';
import ParallaxBackground from './components/ParallaxBackground';
import Loader from './components/Loader';
import SmartChatbot from './components/SmartChatbot';
import SiteVisitModal from './components/SiteVisitModal';
import { getOrganizationSchema } from './utils/SchemaMarkup'; // Import schema markup utility

// Google Analytics tracking function
function PageTrackingComponent() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-3YP6RMRR24', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        // Disable cookies to avoid third-party cookie issues
        cookie_flags: 'SameSite=None;Secure',
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        // Optimize for performance
        send_page_view: false
      });
      window.gtag('config', 'GT-K48FW6C', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        // Disable cookies to avoid third-party cookie issues
        cookie_flags: 'SameSite=None;Secure',
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        // Optimize for performance
        send_page_view: false
      });
    }
  }, [location]);
  
  return null; // This component doesn't render anything
}

// Scroll to top component - scrolls to top when route changes
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  // Background images for parallax effect
  const parallaxBackgrounds = [
    './src/assets/img/parallax-bg-1.svg',
    './src/assets/img/parallax-div-grid.svg', // Added div-grid pattern
    './src/assets/img/parallax-bg-2.svg',
    './src/assets/img/parallax-bg-3.svg'
  ];

  // Different speeds for each layer
  const parallaxSpeeds = [0.2, 0.15, 0.1, 0.05];

  // Opacity for each layer
  const parallaxOpacities = [0.1, 0.1, 0.05, 0.03];

  // Generate organization schema for global SEO
  const organizationSchema = getOrganizationSchema();

  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <div className={`relative bg-slate-50 text-slate-900 min-h-screen ${loading ? 'hidden' : ''}`} role="main">
            {/* Google Analytics Page Tracking Component */}
            <PageTrackingComponent />
            {loading && <Loader onLoadingComplete={handleLoadingComplete} />}
            <div className={`relative bg-slate-50 text-slate-900 min-h-screen ${loading ? 'hidden' : ''}`} role="main">
              {/* Global SEO with Organization Schema */}
              <Seo 
                title="Real Estate Developer In Dholera SIR | Nestoria Group | Investment Plots"
                description="Nestoria Group is the most trusted and award-winning real estate developer in Dholera SIR, offering premium residential, commercial & industrial land parcels in India's first greenfield smart city."
                keywords="Nestoria Group, Dholera SIR, Real Estate, Smart City, Investment, Land Deals, Property"
                schemaMarkup={organizationSchema}
                canonicalUrl="https://nestoriagroup.com"
              />
              
              {/* Global parallax background */}
              <ParallaxBackground 
                images={parallaxBackgrounds}
                speeds={parallaxSpeeds}
                opacities={parallaxOpacities}
                className="pointer-events-none"
                aria-hidden="true"
              />
              {/* <Header /> */}
              <Navbar />
              <main className="relative z-10" id="main-content">
            <Routes>
              <Route path="/" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading home page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Real Estate Developer In Dholera SIR | Nestoria Group | Investment Plots" description="Your trusted partner for real estate investments in Dholera SIR." keywords="real estate, Dholera SIR, investment" /><Home /></></Suspense>} />
              <Route path="/about" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading about page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="About Nestoria Group" description="Learn more about Nestoria Group and our mission." keywords="Nestoria Group, real estate developer, Dholera SIR" /><About /></></Suspense>} />
              <Route path="/aboutDholera" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading about Dholera page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="About Dholera SIR" description="Discover Dholera Special Investment Region (SIR), India's first smart city." keywords="Dholera SIR, smart city, investment region" /><AboutDholera /></></Suspense>} />
              <Route path="/contact" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading contact page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Contact Nestoria Group" description="Contact us for expert advice on real estate investments in Dholera SIR." keywords="contact, Nestoria Group, real estate investment" /><Contact /></></Suspense>} />
              <Route path="/team" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading team page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Our Team - Nestoria Group" description="Meet the team of experts at Nestoria Group." keywords="team, Nestoria Group, real estate experts" /><TeamNestoria /></></Suspense>} />
              <Route path="/blog" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading blog page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Blog - Nestoria Group" description="Read our latest articles on real estate and Dholera SIR." keywords="blog, real estate, Dholera SIR, articles" /><Blog /></></Suspense>} />
              <Route path="/faq" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading FAQ page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="FAQ - Nestoria Group" description="Frequently asked questions about investing in Dholera SIR." keywords="FAQ, real estate investment, Dholera SIR" /><FAQ /></></Suspense>} />
              <Route path="/land-deals" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading land deals page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Exclusive Land Deals In Dholera SIR | Residential & Commercial Plots" description="Explore premium land investment opportunities in Dholera SIR." keywords="land deals, real estate, Dholera SIR, investment" /><LandDeals /></></Suspense>} />
              <Route path="/media" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading media page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Media - Nestoria Group" description="See our latest media coverage and press releases." keywords="media, Nestoria Group, press releases" /><Media /></></Suspense>} />
              <Route path="/latest-news" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading latest news page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Latest News - Nestoria Group | Dholera SIR Updates" description="Stay updated with the latest news and developments about Dholera SIR and Nestoria Group." keywords="latest news, Dholera SIR updates, real estate news" /><LatestNews /></></Suspense>} />
              <Route path="/projects" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading projects page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Projects in Dholera SIR - Nestoria Group" description="Explore our premium residential, commercial & luxury villa projects in Dholera SIR." keywords="projects, real estate, Dholera SIR, Dholera Bhoomi, Orchid River View" /><Projects /></></Suspense>} />
              <Route path="/project/:slug" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading project detail page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><ProjectDetail /></Suspense>} />
              <Route path="/projects/:slug" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading project detail page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><ProjectDetail /></Suspense>} />
              <Route path="/services" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading services page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Services - Nestoria Group" description="Learn about our real estate services in Dholera SIR." keywords="services, real estate, Dholera SIR" /><Services /></></Suspense>} />
              <Route path="/achievements" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading achievements page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Achievements - Nestoria Group" description="Our achievements and milestones in real estate development." keywords="achievements, Nestoria Group, real estate" /><Achievements /></></Suspense>} />
              <Route path="/testimonial" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading testimonials page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Testimonials - Nestoria Group" description="Hear from our satisfied clients about their investment experience." keywords="testimonials, Nestoria Group, real estate investment" /><Testimonial /></></Suspense>} />
              <Route path="/privacy-policy" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading privacy policy page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Privacy Policy - Nestoria Group" description="Our privacy policy outlining how we collect, use, and protect your personal information." keywords="privacy policy, data protection, personal information" /><PrivacyPolicy /></></Suspense>} />
              <Route path="/terms-and-conditions" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading terms and conditions page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Terms & Conditions - Nestoria Group" description="Our terms and conditions governing the use of our website and services." keywords="terms and conditions, legal agreement, website terms" /><TermsAndConditions /></></Suspense>} />
              <Route path="*" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="404 - Page Not Found" description="The page you are looking for does not exist." keywords="404, page not found" /><NotFound /></></Suspense>} />
            </Routes>
              </main>
              <Footer className="relative z-10" />
              
              {/* Intelligent AI Smart Chatbot (Offline, No API required) */}
              <SmartChatbot />

              {/* VIP Site Visit Booking Modal */}
              <SiteVisitModal />

              {/* WhatsApp Floating Button */}
              <WhatsAppButton />
              
              {/* Skip to main content link for accessibility */}
              <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:p-2 focus:rounded focus:shadow-lg">
                Skip to main content
              </a>
            </div>
          </div>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;