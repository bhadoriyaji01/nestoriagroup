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
import { getOrganizationSchema, getWebSiteSchema, getBreadcrumbSchema } from './utils/SchemaMarkup'; // Import schema markup utility

import bg1 from './assets/img/parallax-bg-1.svg';
import bgGrid from './assets/img/parallax-div-grid.svg';
import bg2 from './assets/img/parallax-bg-2.svg';
import bg3 from './assets/img/parallax-bg-3.svg';

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
    bg1,
    bgGrid,
    bg2,
    bg3
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
          {loading && <Loader onLoadingComplete={handleLoadingComplete} />}
          <div className={`relative bg-slate-50 text-slate-900 min-h-screen ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100 transition-opacity duration-300'}`} role="main">
            {/* Google Analytics Page Tracking Component */}
            <PageTrackingComponent />
            {/* Global SEO with Organization and WebSite Schema */}
            <Seo 
              title="Nestoria Group - Top Real Estate Developer in Dholera SIR | Investment Plots"
              description="Nestoria Group is the premier real estate developer in Dholera SIR offering AUDA-approved NA residential, commercial, and industrial investment plots near the Tata Semiconductor Fab."
              keywords="Dholera SIR plots, Dholera Smart City investment, real estate developer in Dholera SIR, buy plots in Dholera, Dholera residential plots, NA title clear plots Dholera, Tata Semiconductor Dholera plots, Ahmedabad Dholera Expressway plots, Nestoria Group"
              schemaMarkup={[organizationSchema, getWebSiteSchema()]}
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
            <Route path="/" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading home page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Nestoria Group | Top Real Estate Developer in Dholera SIR | Investment Plots" description="Invest in Dholera SIR with Nestoria Group. AUDA-approved NA clear title residential plots, luxury villas & commercial land near Tata Semiconductor Fab & Expressway." keywords="Dholera SIR plots, Dholera Smart City investment, real estate developer in Dholera SIR, buy plots in Dholera, Dholera residential plots, NA title clear plots Dholera, Tata Semiconductor Dholera plots, Ahmedabad Dholera Expressway plots, Dholera airport plots, Nestoria Group" canonicalUrl="https://nestoriagroup.com/" schemaMarkup={[organizationSchema, getWebSiteSchema()]} /><Home /></></Suspense>} />
            <Route path="/about" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading about page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="About Nestoria Group | Trusted Real Estate Developer in Dholera SIR" description="Learn about Nestoria Group, leading real estate developer in Dholera Smart City. Dedicated to 100% legal title clearance, immediate registry, and investor wealth creation." keywords="about Nestoria Group, best builder in Dholera, Dholera SIR real estate company, clear title plots developer, trusted Dholera developers, Nestoria Buildcon" canonicalUrl="https://nestoriagroup.com/about" schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about' }])} /><About /></></Suspense>} />
            <Route path="/aboutDholera" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading about Dholera page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="About Dholera SIR Smart City | Master Plan, Tata Fab & Infrastructure" description="Explore Dholera Special Investment Region (SIR) - India's 1st platinum greenfield smart city. High-speed expressway, international airport, and Tata semiconductor fab." keywords="about Dholera SIR, Dholera smart city master plan, Dholera activation area, TP1 TP2 Dholera, Tata semiconductor fab Dholera, Dholera international airport, DMIC corridor Gujarat" canonicalUrl="https://nestoriagroup.com/aboutDholera" schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About Dholera SIR', url: '/aboutDholera' }])} /><AboutDholera /></></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading contact page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Contact Nestoria Group | Book Free Guided Site Visit to Dholera SIR" description="Contact Nestoria Group's corporate office in Ahmedabad. Speak with senior property consultants or schedule a free chauffeur-driven site visit to Dholera SIR." keywords="contact Nestoria Group, Nestoria Group Ahmedabad office, Dholera site visit booking, Dholera real estate agent phone number, Dholera SIR office address" canonicalUrl="https://nestoriagroup.com/contact" schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Contact Us', url: '/contact' }])} /><Contact /></></Suspense>} />
            <Route path="/team" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading team page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Leadership & Management Team | Nestoria Group Dholera SIR" description="Meet the visionary leadership and real estate advisory experts behind Nestoria Group, shaping modern urban living in Dholera Special Investment Region." keywords="Nestoria Group team, management leadership Dholera, real estate experts Ahmedabad, Nestoria Buildcon founders" canonicalUrl="https://nestoriagroup.com/team" schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Team', url: '/team' }])} /><TeamNestoria /></></Suspense>} />
            <Route path="/blog" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading blog page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Dholera Real Estate Blog | Smart City Investment Insights & Guides" description="Read expert insights on Dholera SIR real estate investments, 3D printed villas, Tata semiconductor plant impact, airport connectivity, and NRI land buying guides." keywords="Dholera real estate blog, Dholera SIR investment guide, 3D printed homes Dholera, Tata fab property impact, Dholera expressway updates, smart city land appreciation" canonicalUrl="https://nestoriagroup.com/blog" schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }])} /><Blog /></></Suspense>} />
            <Route path="/faq" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading FAQ page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Dholera SIR Property FAQs | Investment, Approvals & Legal Verification" description="Got questions about buying land in Dholera SIR? Find answers on legal title clearance, AUDA approvals, registry process, plot sizes, and NRI investment guidelines." keywords="Dholera SIR FAQ, is Dholera safe to invest, how to buy plot in Dholera, AUDA approval Dholera, Dholera registry process, NRI land investment FAQ India" canonicalUrl="https://nestoriagroup.com/faq" schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'FAQ', url: '/faq' }])} /><FAQ /></></Suspense>} />
            <Route path="/media" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading media page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Media & Video Gallery | Dholera SIR Site Walkthroughs & Documentaries" description="Watch drone site walkthroughs, development progress videos, and news coverage of Nestoria Group projects in Dholera SIR Smart City." keywords="Dholera SIR video tour, Dholera development video, Nestoria Group YouTube, smart city ground reality drone view" canonicalUrl="https://nestoriagroup.com/media" schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Media', url: '/media' }])} /><Media /></></Suspense>} />
            <Route path="/latest-news" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading latest news page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Latest News on Dholera SIR | Infrastructure & Smart City Updates 2026" description="Stay updated with real-time news on Dholera SIR development: Tata semiconductor fab progress, Ahmedabad-Dholera Expressway opening, and international airport milestones." keywords="Dholera SIR latest news, Dholera smart city updates, Tata semiconductor plant Dholera news, Dholera airport opening date, Ahmedabad Dholera expressway news" canonicalUrl="https://nestoriagroup.com/latest-news" schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Latest News', url: '/latest-news' }])} /><LatestNews /></></Suspense>} />
            <Route path="/projects" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading projects page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Plots in Dholera SIR | Residential & Commercial Land | Nestoria Group" description="Browse approved residential plots, luxury villa townships & commercial land parcels in Dholera SIR. 100% clear title, immediate registry near TP2 & Tata Fab." keywords="plots in Dholera SIR, residential plots Dholera, commercial land Dholera SIR, buy land Dholera smart city, NA plots Dholera, luxury villa plots Dholera, Nestoria Atulyam, Nestoria Green Vista, Semicon Residency" canonicalUrl="https://nestoriagroup.com/projects" schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Projects', url: '/projects' }])} /><Projects /></></Suspense>} />
            <Route path="/project/:slug" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading project detail page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><ProjectDetail /></Suspense>} />
            <Route path="/projects/:slug" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading project detail page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><ProjectDetail /></Suspense>} />
            <Route path="/services" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading services page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Real Estate Services in Dholera SIR | Land Advisory & Title Clearance" description="Comprehensive real estate services in Dholera SIR: NA plot acquisition, 100% legal title verification, AUDA/SIRDA zoning compliance, registry mutation & free site visits." keywords="Dholera SIR property services, real estate advisory Dholera, 7/12 mutation Gujarat, land legal verification Dholera, free site visit Dholera SIR, NRI property services Gujarat" canonicalUrl="https://nestoriagroup.com/services" schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }])} /><Services /></></Suspense>} />
            <Route path="/achievements" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading achievements page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Our Achievements & Milestones | Leading Developer in Dholera SIR" description="Explore Nestoria Group's track record: 1,500+ happy plot owners, 100% timely registry completion, pioneer in 3D construction, and recognized excellence awards." keywords="Nestoria Group achievements, top developer milestones Dholera, real estate awards Gujarat, trusted builder Dholera SIR" canonicalUrl="https://nestoriagroup.com/achievements" schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Achievements', url: '/achievements' }])} /><Achievements /></></Suspense>} />
            <Route path="/testimonial" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading testimonials page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Client Testimonials & Reviews | Verified Dholera SIR Investors" description="Read genuine reviews and watch video testimonials from satisfied investors and NRIs who purchased residential and commercial plots in Dholera with Nestoria Group." keywords="Nestoria Group reviews, Dholera SIR investor reviews, customer testimonials Dholera, NRI land buyer feedback Gujarat" canonicalUrl="https://nestoriagroup.com/testimonial" schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Testimonials', url: '/testimonial' }])} /><Testimonial /></></Suspense>} />
            <Route path="/privacy-policy" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading privacy policy page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Privacy Policy | Nestoria Group Real Estate Dholera SIR" description="Learn how Nestoria Group collects, safeguards, and respects your personal information during property inquiries, site visits, and transactions." keywords="Nestoria Group privacy policy, data protection, real estate policy" canonicalUrl="https://nestoriagroup.com/privacy-policy" schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy-policy' }])} /><PrivacyPolicy /></></Suspense>} />
            <Route path="/terms-and-conditions" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading terms and conditions page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="Terms & Conditions | Nestoria Group Dholera SIR" description="Review the official terms of service and website usage conditions for Nestoria Group real estate advisory and property bookings in Dholera SIR." keywords="Nestoria Group terms and conditions, terms of service, legal disclaimers" canonicalUrl="https://nestoriagroup.com/terms-and-conditions" schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Terms and Conditions', url: '/terms-and-conditions' }])} /><TermsAndConditions /></></Suspense>} />
            <Route path="*" element={<Suspense fallback={<div className="flex justify-center items-center h-64" role="status" aria-label="Loading page"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>}><><Seo title="404 - Page Not Found | Nestoria Group" description="The page you are looking for does not exist. Browse our approved residential and commercial plots in Dholera SIR." keywords="404, page not found, Dholera SIR plots" canonicalUrl="https://nestoriagroup.com/404" robots="noindex, follow" /><NotFound /></></Suspense>} />
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
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;