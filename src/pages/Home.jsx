import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ShieldCheck, MapPin, ArrowRight, Car, Sparkles, 
  ChevronRight, ChevronLeft, Building2, CheckCircle2, Video, Play,
  Phone, Award, Check, Eye, Maximize2, X, Download, Tag, Layers,
  ExternalLink, Compass, Grid, Filter, Image as ImageIcon,
  Gem, FileText, TrendingUp, Users, Heart, Calendar, Map, Globe, AlertCircle,
  Leaf, Cpu, Home as HomeIcon, Factory, FileCheck2, UserCheck, BadgeCheck
} from "lucide-react";
import Carousel from "../components/Carousel";
import ParallaxSection from "../components/ParallaxSection";
import ParallaxScroll from "../components/ParallaxScroll";
import ProjectVideosSlider from "../components/ProjectVideosSlider";
import { openSiteVisitModal } from "../components/SiteVisitModal";
import { allProjects } from "../data/projectsData";
import { blogPostsData } from "../data/blogData";

import aboutimage from "../assets/img/about.webp";
import heroImage from "../assets/img/hero-bg.webp";
import homeBanner from "../assets/img/home-banner-new.webp";

// Import Slider / Gallery images
import slider1 from "../assets/img/Slider/image 1.webp";
import slider2 from "../assets/img/Slider/image 7.webp";
import slider3 from "../assets/img/Slider/image 8.webp";
import slider4 from "../assets/img/Slider/image 9.webp";
import slider5 from "../assets/img/Slider/image 10+.webp";
import slider6 from "../assets/img/Slider/image 11.webp";
import slider7 from "../assets/img/Slider/image 12.webp";
import slider8 from "../assets/img/Slider/image 13.webp";
import slider9 from "../assets/img/Slider/image 14.webp";
import slider10 from "../assets/img/Slider/image 15.webp";
import leadershipImage from "../assets/img/team/team-dis.webp"; // Leadership image

// Import Event & Function images
import eventNews1 from "../assets/img/news1.jpeg";
import eventNews2 from "../assets/img/news2.jpeg";
import eventNews3 from "../assets/img/news3.jpeg";
import eventNews4 from "../assets/img/news4.jpeg";
import eventNews5 from "../assets/img/news5.jpeg";
import eventNews6 from "../assets/img/news6.jpeg";
import mediaEvent1 from "../assets/img/media-1.webp";
import mediaEvent2 from "../assets/img/media.webp";
import teamHands from "../assets/img/team/Team-Hand.webp";
import teamWork from "../assets/img/team/Working-hard.webp";
import teamDis from "../assets/img/team/team-dis.webp";

// Import team images
import teamBg from "../assets/img/team/team-circle.webp";
import shivji from "../assets/img/team/management/shivji.webp";
import mohanji from "../assets/img/team/management/mohanji.webp";
import nitinji from "../assets/img/team/management/nitinji.webp";

// Import project logos
import skyRiseLogo from "../assets/img/Sky rise Logo.jpg.jpeg";
import orchidRiverViewLogo from "../assets/img/ORCHID RIVER VIEW Logo.jpg.jpeg";
import orchidVillaGoldLogo from "../assets/img/ORCHILD VILLA GOLD 2023-BROSHER.webp";
import emeraldLogo from "../assets/img/Emerald Commercial Hub Logo.png";
import greenVistaLogo from "../assets/img/Green Vista Logo.png";
import monitoResidencyLogo from "../assets/img/Monito Residency.png";
import nestoriaHomesLogo from "../assets/img/Nestoria Homes Logo.png";
import semiconResidencyLogo from "../assets/img/Semicon Residency Logo.png";
import skylineLogo from "../assets/img/Skyline Imperia Logo.png";
import dholeraInteractiveMap from "../assets/img/dholera_interactive_project_map.svg?raw";
import atulyamLogo from "../assets/img/nestoria-atulyam-logo.png";

const projectMapLogoUrls = {
  __PROJECT_LOGO_ATULYAM__: atulyamLogo,
  __PROJECT_LOGO_GREEN_VISTA__: greenVistaLogo,
  __PROJECT_LOGO_SKYLINE_IMPERIA__: skylineLogo,
  __PROJECT_LOGO_SEMICON_CITY__: semiconResidencyLogo,
  __PROJECT_LOGO_EMERALD_COMMERCIAL__: emeraldLogo,
  __PROJECT_LOGO_NESTORIA_HOMES__: nestoriaHomesLogo,
};

const interactiveMapMarkup = Object.entries(projectMapLogoUrls).reduce(
  (markup, [placeholder, logoUrl]) => markup.replaceAll(placeholder, logoUrl),
  dholeraInteractiveMap
);

const projectMapRoutes = {
  'project-atulyam': '/project/nestoria-atulyam-dhanala',
  'project-green-vista': '/project/nestoria-green-vista-aakru',
  'project-skyline-imperia': '/project/nestoria-skyline-imperia-sodhi',
  'project-semicon-city': '/project/nestoria-semicon-residency-kanatalav',
  'project-emerald-commercial': '/project/nestoria-emerald-commercial-hub-bhangadh',
  'project-nestoria-homes': '/project/nestoria-homes-adhelai',
};

const EVENTS_API_URL = import.meta.env.DEV
  ? '/api/events'
  : 'https://events.nestoriagroup.com/api/events.php';

const eventImages = {
  eventNews1,
  eventNews2,
  eventNews3,
  eventNews4,
  eventNews5,
  eventNews6,
  mediaEvent1,
  mediaEvent2,
  teamDis,
};

const getHomeEventImage = (item) => {
  const imageValue = item?.image || item?.imageUrl || item?.img || item?.mediaUrl || item?.photo || item?.url;

  if (typeof imageValue === 'string' && imageValue.trim()) {
    const normalized = imageValue.trim();
    return eventImages[normalized] || normalized;
  }

  return null;
};

const normalizeHomeEventData = (item, index) => ({
  id: item?.id ?? `${item?.title ?? 'event'}-${index}`,
  title: item?.title || item?.name || `Event ${index + 1}`,
  category: item?.category || item?.eventType || 'conclaves',
  categoryLabel: item?.categoryLabel || item?.category || item?.eventType || 'Event',
  location: item?.location || item?.city || 'Dholera SIR',
  image: getHomeEventImage(item),
  badge: item?.badge || item?.status || 'Featured',
  tagColor: item?.tagColor || 'bg-blue-600',
  desc: item?.desc || item?.description || 'Event details coming soon.',
  registrationUrl: item?.registrationUrl || item?.url || item?.link || '',
  type: item?.type || item?.status || 'existing',
});

function Home() {
  const navigate = useNavigate();
  const interactiveMapRef = useRef(null);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [hasDisclaimerShown, setHasDisclaimerShown] = useState(false);
  
  // Gallery state
  const [galleryCategory, setGalleryCategory] = useState('all');
  const [galleryType, setGalleryType] = useState('existing');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // Check if the disclaimer has already been shown on page load
  useEffect(() => {
    const disclaimerShown = localStorage.getItem('homeDisclaimerShown');
    if (disclaimerShown === 'true') {
      setHasDisclaimerShown(true);
    } else {
      setIsDisclaimerOpen(true);
    }
  }, []);

  useEffect(() => {
    const mapContainer = interactiveMapRef.current;
    if (!mapContainer) return undefined;

    const openProject = (event) => {
      const projectMarker = event.target.closest('.nestoria-project');
      const route = projectMarker && projectMapRoutes[projectMarker.id];
      if (route) navigate(route);
    };

    const handleMarkerKeyDown = (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openProject(event);
    };

    mapContainer.addEventListener('click', openProject);
    mapContainer.addEventListener('keydown', handleMarkerKeyDown);
    return () => {
      mapContainer.removeEventListener('click', openProject);
      mapContainer.removeEventListener('keydown', handleMarkerKeyDown);
    };
  }, [navigate]);

  const closeDisclaimer = () => {
    setIsDisclaimerOpen(false);
    setHasDisclaimerShown(true);
    localStorage.setItem('homeDisclaimerShown', 'true');
  };

  const [apiExistingEvents, setApiExistingEvents] = useState([]);
  const [apiUpcomingEvents, setApiUpcomingEvents] = useState([]);
  const [apiEventsLoading, setApiEventsLoading] = useState(true);
  const [apiEventsError, setApiEventsError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchEvents = async () => {
      try {
        setApiEventsLoading(true);
        const response = await fetch(EVENTS_API_URL, {
            headers: { Accept: 'application/json' },
          });

        if (!response.ok) {
          throw new Error(`Failed to fetch gallery data (${response.status})`);
        }

        const contentType = response.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          throw new Error('Events API returned a non-JSON response.');
        }

        const data = await response.json();
        const events = data[0];

        if (!events || !Array.isArray(events.existingEvents) || !Array.isArray(events.upcomingEvents)) {
          throw new Error('Events API returned an invalid response.');
        }

        const existingData = events.existingEvents;
        const upcomingData = events.upcomingEvents;

        const existing = existingData.map((item, index) => normalizeHomeEventData(item, index));
        const upcoming = upcomingData.map((item, index) => normalizeHomeEventData(item, index));

        if (isMounted) {
          setApiExistingEvents(existing);
          setApiUpcomingEvents(upcoming);
          setApiEventsError(null);
        }
      } catch (error) {
        console.error('Home gallery API fetch failed:', error);
        if (isMounted) {
          setApiExistingEvents([]);
          setApiUpcomingEvents([]);
          setApiEventsError(error.message || 'Unable to load events from the API.');
        }
      } finally {
        if (isMounted) {
          setApiEventsLoading(false);
        }
      }
    };

    fetchEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      {/* First-Visit Disclaimer Dialog */}
      {isDisclaimerOpen && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-[9999] p-4 sm:p-6 overflow-y-auto animate-fade-in">
          {/* Modal Container */}
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden my-auto border border-slate-200">
            
            {/* Header */}
            <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <h2 id="disclaimer-title" className="text-lg sm:text-xl font-bold text-white">
                  Statutory Advisory & Disclaimer
                </h2>
              </div>
              <span className="text-[11px] bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2.5 py-0.5 rounded-full font-bold uppercase">
                Legal Notice
              </span>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-200/80 text-blue-900 font-medium">
                Nestoria Buildcon Pvt. Ltd. is an established real estate developer specializing in Dholera Smart City with 6+ years of dedicated service and over 8,000+ satisfied clients.
              </div>

              <p>
                The visual representations, architectural renders, plot measurements, and specifications displayed on this portal are indicative and artistic concepts intended for project overview.
              </p>

              <p>
                Until final registration documents are executed, content on this website does not constitute a formal financial commitment or binding legal contract.
              </p>

              <p>
                We advise all prospective investors to conduct direct due diligence with Nestoria Group authorized representatives and review official Collector & Town Planning sanction maps before purchase.
              </p>

              <div className="bg-amber-50/80 p-3.5 rounded-2xl border border-amber-200 text-amber-900 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>100% NA Clear Title Guarantee and immediate registry assistance provided.</span>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-slate-50 px-6 py-4 flex justify-end shrink-0 border-t border-slate-200">
              <button
                type="button"
                onClick={closeDisclaimer}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3 rounded-2xl shadow-md shadow-blue-500/20 hover:shadow-lg transition-all duration-200 text-sm cursor-pointer"
              >
                I Understand & Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Unified Hero Section with Image Background */}
      <section className="relative min-h-[90vh] lg:min-h-[95vh] flex flex-col justify-between overflow-hidden bg-slate-950">
        {/* Background Image with Layered High-Contrast Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src={homeBanner || heroImage}
            alt="Dholera Smart City Real Estate - Nestoria Group"
            className="w-full h-full object-cover object-center scale-105 transform animate-fade-in"
          />
          {/* Multi-stage Luxury Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/25 via-slate-950/15 to-blue-950/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-12 text-center flex flex-col items-center flex-1 justify-center my-auto">
          
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-lg shadow-blue-500/10 animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span>India's 1st Platinum Greenfield Smart City • Dholera SIR • Gujarat</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 font-condor tracking-tight leading-[1.15] max-w-5xl drop-shadow-lg">
            Leading Real Estate Developer in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">
              Dholera SIR
            </span>
          </h1>

          {/* Sub-headline Not Needed */}
          {/* <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-10 max-w-3xl leading-relaxed font-normal drop-shadow-md">
            Discover 100% legally verified NA clear-title residential plots, 3D luxury villas, and commercial hubs with immediate sub-registrar registry in the high-growth TP 2 Activation Area.
          </p> */}

          {/* Trust Highlights Pills not needed*/}
          {/* <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mb-10 text-xs sm:text-sm text-slate-200">
            <span className="inline-flex items-center gap-1.5 bg-slate-900/80 border border-slate-700/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              100% NA Clear Title Registry
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-900/80 border border-slate-700/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow">
              <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
              TP 2A Activation Zone (Near Tata Fab)
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-900/80 border border-slate-700/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow">
              <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
              15+ Years • 5,000+ Happy Investors
            </span>
          </div> */}

          {/* Call To Action Buttons number not shown */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 w-full sm:w-auto">
            <Link
              to="/projects"
              className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-base py-4 px-8 rounded-xl shadow-2xl shadow-blue-600/40 hover:shadow-2xl hover:shadow-blue-500/60 transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2 min-h-[48px]"
            >
              <span>Explore  Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            <button
              onClick={() => openSiteVisitModal("Home Hero")}
              className="group bg-slate-900/90 hover:bg-slate-800 text-white border-2 border-blue-500/70 hover:border-blue-300 font-bold text-base py-3.5 px-7 rounded-xl backdrop-blur-md shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2 min-h-[48px] cursor-pointer"
            >
              <Car className="w-5 h-5 text-blue-400 group-hover:scale-125 group-hover:text-blue-300 transition-all" />
              <span>Book Your Property</span>
            </button>

            <a
              href="#project-videos"
              className="group text-slate-300 hover:text-white font-semibold text-sm py-3 px-4 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-white/0 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white flex items-center justify-center group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-red-600/50 transition-all duration-300">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>Watch Project Videos</span>
            </a>
          </div>
        </div>

        {/* Bottom Hero Key Milestones Strip */}
        <div className="relative z-20 w-full bg-slate-950/85 border-t border-slate-800/80 backdrop-blur-md py-4 sm:py-5 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {[
                { number: "1,00,000+", label: "Visitors", icon: Users, color: "text-blue-400", bg: "bg-blue-500/15" },
                { number: "8,000+", label: "Happy Customers", icon: Heart, color: "text-rose-400", bg: "bg-rose-500/15" },
                { number: "50+", label: "Projects Delivered", icon: Building2, color: "text-emerald-400", bg: "bg-emerald-500/15" },
                { number: "6+", label: "Years in Dholera", icon: Calendar, color: "text-amber-400", bg: "bg-amber-500/15" },
                { number: "50+", label: "Cities In India", icon: Map, color: "text-cyan-400", bg: "bg-cyan-500/15" },
                { number: "9+", label: "Global Nations", icon: Globe, color: "text-indigo-400", bg: "bg-indigo-500/15" },
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 justify-center sm:justify-start lg:justify-center p-2 rounded-xl bg-white/[0.03] sm:bg-transparent border border-white/5 sm:border-0 hover:bg-white/[0.06] transition-all duration-300 group"
                >
                  <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight leading-none group-hover:text-blue-300 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-medium mt-1 leading-tight line-clamp-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            
            {/* Left Image Showcase with Floating Badge */}
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl group border border-slate-200 bg-slate-900">
                <img
                  className="w-full h-72 sm:h-96 md:h-[440px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src={aboutimage}
                  alt="Nestoria Group - Premier Real Estate Developer in Dholera SIR Gujarat"
                />
                
                {/* Gradient and Badge Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="inline-flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      Since 2018 • 6+ Years in Dholera
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold">Pioneering Dholera SIR Urban Development</h4>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg border border-slate-100 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-900 font-extrabold text-xs sm:text-sm">Legally Verified</span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2">
              <div className="lg:pl-2">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  About Nestoria Group
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                  Crafting Landmark Developments in <span className="text-blue-600">Dholera SIR</span>
                </h2>
                
                <div className="h-1 w-20 bg-blue-600 mb-6 rounded-full"></div>
                
                <p className="text-slate-600 mb-8 text-base sm:text-lg leading-relaxed">
                  Established in 2010, Nestoria Group has emerged as Dholera SIR&apos;s foremost township developer. Backed by institutional transparency, 100% legal NA clear-title verification, and on-ground infrastructure execution, we have empowered over <strong className="text-slate-900 font-semibold">8,000+ satisfied investors</strong> across India and 9+ overseas nations.
                </p>

                {/* 4 Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      title: "Premium Land Parcels",
                      desc: "Prime NA residential, commercial & villa plots",
                      icon: Gem,
                      iconBg: "bg-blue-100 text-blue-600"
                    },
                    {
                      title: "Strategic Locations",
                      desc: "Direct TP 2, Expressway & Metro connectivity",
                      icon: MapPin,
                      iconBg: "bg-emerald-100 text-emerald-600"
                    },
                    {
                      title: "100% Clear Title",
                      desc: "Instant sub-registrar registry & FSL survey",
                      icon: FileCheck2,
                      iconBg: "bg-purple-100 text-purple-600"
                    },
                    {
                      title: "Institutional Advisory",
                      desc: "Dedicated plot advisory & transparent paperwork",
                      icon: TrendingUp,
                      iconBg: "bg-amber-100 text-amber-600"
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group flex items-start p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300"
                    >
                      <div className={`flex-shrink-0 mr-3.5 p-2.5 rounded-xl ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-800 mb-0.5 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-slate-500 text-xs leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 px-7 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-400/40 transition-all duration-300 text-sm group hover:scale-105 hover:-translate-y-0.5"
                  >
                    <span>Discover More About Us</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>

                  <button
                    onClick={() => openSiteVisitModal("About Section")}
                    className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-slate-800 font-semibold py-3.5 px-6 rounded-2xl border border-slate-300 hover:border-blue-300 shadow-sm hover:shadow-md transition-all text-sm cursor-pointer hover:scale-105 hover:-translate-y-0.5 group"
                  >
                    <Car className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span>Book Your Property</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Services Section */}
      <section
        id="services"
        className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800"
      >
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/30 text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              Comprehensive Real Estate Portfolio
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
              Our Specialised <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Property Offerings</span>
            </h2>
            
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-4 rounded-full"></div>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide fully sanctioned, legally vetted property asset classes across Dholera Special Investment Region with guaranteed road access, underground power ducts, and storm drainage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: HomeIcon,
                title: "Residential Plotting & Villas",
                tag: "High Capital Appreciation",
                tagColor: "bg-blue-600/20 text-blue-300 border-blue-500/30",
                desc: "Gated luxury townships featuring asphalt road networks, dedicated clubhouses, landscaped gardens, and instant boundary demarcation.",
                badge: "100 sq. yard onwards"
              },
              {
                icon: Building2,
                title: "Commercial High-Street Zones",
                tag: "High ROI & Rental Yield",
                tagColor: "bg-emerald-600/20 text-emerald-300 border-emerald-500/30",
                desc: "Strategic commercial plots located along 55m and 70m town planning arterial corridors, retail plazas, and corporate office parks.",
                badge: "Main TP Corridors"
              },
              {
                icon: Factory,
                title: "Industrial & Logistical Corridors",
                tag: "Heavy Infrastructure Ready",
                tagColor: "bg-purple-600/20 text-purple-300 border-purple-500/30",
                desc: "High-power capacity industrial land parcels situated adjacent to the Dedicated Freight Corridor (DFC), expressways, and heavy manufacturing hubs.",
                badge: "Near Tata Fab & DMIC"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 border border-slate-700/80 hover:border-blue-400/80 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-blue-900/40 hover:bg-slate-800/95"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-600/50">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${item.tagColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-blue-200 transition-all duration-300">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-blue-300 group-hover:text-blue-100 font-bold text-xs uppercase tracking-wider transition-all duration-300 group-hover:gap-3"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>

                  <button
                    onClick={() => openSiteVisitModal(`Service - ${item.title}`)}
                    className="text-xs text-slate-400 hover:text-blue-200 font-semibold transition-all cursor-pointer hover:underline"
                  >
                    Book Your Property
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm shadow-md hover:shadow-lg transition-all group hover:scale-105 hover:-translate-y-0.5"
            >
              <span>Explore All Real Estate Services & Advisory</span>
              <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Dholera SIR Section */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-blue-600" />
              National Economic Growth Driver
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Why Invest in <span className="text-blue-600">Dholera SIR</span> Today?
            </h2>
            
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-3 mb-4 rounded-full"></div>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Dholera Special Investment Region (SIR) spans 920 sq. km engineered as India&apos;s first platinum greenfield smart city with unmatched government support and global mega-projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Strategic DMIC Node",
                desc: "Positioned at the heart of the Delhi-Mumbai Industrial Corridor with dedicated high-speed cargo access.",
                badge: "Prime Location",
                badgeColor: "bg-blue-100 text-blue-700"
              },
              {
                icon: Cpu,
                title: "₹91,000 Cr Tata Semiconductor",
                desc: "India's landmark semiconductor fabrication facility catalyzing 50,000+ high-tech jobs and housing demand.",
                badge: "Silicon Hub",
                badgeColor: "bg-emerald-100 text-emerald-700"
              },
              {
                icon: TrendingUp,
                title: "High Capital Appreciation",
                desc: "Early-stage entry pricing with projected exponential growth upon 2025 Expressway & Airport completion.",
                badge: "High ROI",
                badgeColor: "bg-purple-100 text-purple-700"
              },
              {
                icon: Leaf,
                title: "Sustainable Smart Utilities",
                desc: "Underground optical fiber, automated water sensors, 100% storm drainage, and 4,400MW solar park power.",
                badge: "Green City",
                badgeColor: "bg-teal-100 text-teal-700"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-2xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-500 group-hover:text-white transition-all duration-300 shadow-xs group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/40">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-blue-700 transition-all duration-300">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/70 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[11px] font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1">
                    <span>Verified Smart City Metric</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>




      {/* Featured Projects Showcase Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              100% NA Title Clear • Sub-Registrar Registry
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Featured <span className="text-blue-600">Townships & Plots</span> in Dholera SIR
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Prime residential plotting and luxury villa projects strategically located near TP 2, the ₹91,000 Cr Tata Semiconductor Fab, and the Ahmedabad-Dholera Expressway.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-400 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1.5"
              >
                {/* Project Image & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Top status badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="bg-blue-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      {project.status}
                    </span>
                    <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full shadow-md">
                      100% Clear Title
                    </span>
                  </div>

                  {/* Zone tag */}
                  <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                    {project.zone}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-3 min-w-0">
                      {project.logo && (
                        <img src={project.logo} alt={`${project.title} logo`} className="w-16 h-12 object-contain object-left shrink-0" />
                      )}
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block truncate">
                          {project.category}
                        </span>
                        <span className="text-[11px] text-emerald-600 font-semibold block">
                          100% Clear Title
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-all duration-300">
                      <Link to={`/project/${project.slug}`} className="hover:text-blue-600">
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Specs */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 block">Plot Size</span>
                      <strong className="text-slate-800 font-semibold truncate block">100 sq. yard onwards</strong>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 block">Title Status</span>
                      <strong className="text-emerald-700 font-bold block truncate">100% Clear Title</strong>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Link
                      to={`/project/${project.slug}`}
                      className="py-2.5 px-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 group/btn hover:scale-105"
                    >
                      View Details
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <a
                      href="https://wa.me/919274411712?text=Hello%20Nestoria%20Group,%20please%20send%20brochure%20and%20project%20details"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-emerald-700 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1"
                    >
                      Inquire Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 py-3.5 px-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-600/40 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            >
              <Building2 className="w-5 h-5" />
              View All 11+ Projects & Master Plans
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* All Projects Video Slider Section */}
      <ProjectVideosSlider />

      {/* Registered Township Brands Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h6 className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Trusted Brand Portfolio
            </h6>
            <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-slate-900">
              Registered Township Brands
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 content-center">
              {[
                atulyamLogo,
                greenVistaLogo,
                skylineLogo,
                semiconResidencyLogo,
                emeraldLogo,
                nestoriaHomesLogo,
                skyRiseLogo,
                orchidRiverViewLogo,
                monitoResidencyLogo
              ].map((logoSrc, index) => (
                <div
                  key={index}
                  className="min-h-32 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-5 border border-slate-200 hover:border-blue-300 group flex items-center justify-center"
                >
                  <img
                    src={logoSrc}
                    alt="Township logo"
                    className="w-full h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-xl h-[620px] sm:h-[740px] lg:h-auto lg:min-h-[760px]">
              <div
                ref={interactiveMapRef}
                role="img"
                aria-label="Interactive Dholera SIR project map"
                className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] [&>svg]:w-full [&>svg]:h-full [&>svg]:object-contain"
                dangerouslySetInnerHTML={{ __html: interactiveMapMarkup }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog & Insights Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white relative overflow-hidden border-t border-blue-900/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
              <FileText className="w-3.5 h-3.5" />
              Expert Investment Insights
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
              Latest from Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Blog</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Stay ahead with expert analysis on Dholera SIR real estate trends, infrastructure updates, smart city developments, and high-yield investment strategies from Nestoria Group.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {blogPostsData.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="group bg-slate-800/80 backdrop-blur-md rounded-3xl border border-slate-700/80 hover:border-blue-400/80 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-blue-900/40 hover:bg-slate-800/95"
              >
                {/* Blog Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-700">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md border border-blue-500/50">
                      {post.categoryName}
                    </span>
                  </div>

                  {/* Read Time Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-slate-900/70 backdrop-blur-xs text-slate-200 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-slate-600/50">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                      <span className="font-semibold text-blue-300">{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-200 transition-all duration-300 mb-3 line-clamp-2 leading-snug">
                      {post.link ? (
                        <a href={post.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                          {post.title}
                        </a>
                      ) : (
                        <Link to={`/blog#${post.slug}`}>
                          {post.title}
                        </Link>
                      )}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read More Action */}
                  <div className="pt-4 mt-4 border-t border-slate-700/60">
                    {post.link ? (
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-300 group-hover:text-blue-100 font-bold text-xs uppercase tracking-wider transition-all duration-300 group-hover:gap-3"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </a>
                    ) : (
                      <Link
                        to={`/blog#${post.slug}`}
                        className="inline-flex items-center gap-2 text-blue-300 group-hover:text-blue-100 font-bold text-xs uppercase tracking-wider transition-all duration-300 group-hover:gap-3"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Blog CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm shadow-md hover:shadow-lg transition-all group hover:scale-105 hover:-translate-y-0.5"
            >
              <span>Read All Blog Posts & Insights</span>
              <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

        </div>
      </section>

      {/* Events & Corporate Functions Visual Gallery Section */}
      <section id="gallery-section" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80 relative">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Corporate Celebrations & Meets
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Events & Functions <span className="text-blue-600">Gallery</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Glimpses of our landmark investor conclaves, auspicious Bhoomi Pujan foundation ceremonies, leadership awards, festive celebrations, and VIP delegation meets.
            </p>
          </div>

          {apiEventsLoading && (
            <div className="flex items-center justify-center py-4 mb-6">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}

          {apiEventsError && !apiEventsLoading && (
            <div className="flex items-center justify-center gap-2 py-4 mb-6 text-sm font-semibold text-red-700">
              <AlertCircle className="w-4 h-4" />
              {apiEventsError}
            </div>
          )}

          {/* Event Status Tabs */}
          <div className="flex items-center justify-center gap-2 mb-5">
            {[
              { id: 'existing', label: 'Existing Events', count: apiExistingEvents.length },
              { id: 'upcoming', label: 'Upcoming Events', count: apiUpcomingEvents.length }
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => { setGalleryType(type.id); setGalleryCategory('all'); setLightboxIndex(null); }}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  galleryType === type.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <span>{type.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  galleryType === type.id ? 'bg-blue-800 text-blue-100' : 'bg-slate-100 text-slate-500'
                }`}>
                  {type.count}
                </span>
              </button>
            ))}
          </div>

          {/* Existing event category filters */}
          {galleryType === 'existing' && (
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
              {[
                { id: 'all', label: 'All Events & Functions', count: apiExistingEvents.length },
                { id: 'conclaves', label: 'Investor Conclaves', count: apiExistingEvents.filter((item) => item.category === 'conclaves').length },
                { id: 'ceremonies', label: 'Bhoomi Pujan & Launches', count: apiExistingEvents.filter((item) => item.category === 'ceremonies').length },
                { id: 'awards', label: 'Awards & Felicitations', count: apiExistingEvents.filter((item) => item.category === 'awards').length },
                { id: 'celebrations', label: 'Festive & Galas', count: apiExistingEvents.filter((item) => item.category === 'celebrations').length },
                { id: 'delegations', label: 'VIP Delegations & Meets', count: apiExistingEvents.filter((item) => item.category === 'delegations').length }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setGalleryCategory(cat.id)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    galleryCategory === cat.id
                      ? 'bg-slate-800 text-white shadow-lg shadow-slate-800/30 scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    galleryCategory === cat.id ? 'bg-slate-600 text-slate-100' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Bento Style Responsive Grid */}
          {(() => {
            const galleryItems = galleryType === 'upcoming' ? apiUpcomingEvents : apiExistingEvents;

            const filteredItems = galleryType === 'upcoming' || galleryCategory === 'all'
              ? galleryItems
              : galleryItems.filter(item => item.category === galleryCategory);
            const itemsToShow = filteredItems.slice(0, 3);

            return (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                  {itemsToShow.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => setLightboxIndex(index)}
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-slate-200/80 bg-slate-900"
                      role="button"
                      tabIndex="0"
                      aria-label={`Open ${item.title}`}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setLightboxIndex(index);
                        }
                      }}
                    >
                      {/* Background Image with Zoom on Hover */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      {/* Multi-layered Contrast Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                      {/* Top Badges & Category */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                        <span className={`${item.tagColor} text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md backdrop-blur-xs flex items-center gap-1`}>
                          <Sparkles className="w-3 h-3" />
                          {item.badge}
                        </span>

                        <span className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                          <Maximize2 className="w-4 h-4" />
                        </span>
                      </div>

                      {/* Bottom Caption & Information */}
                      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 flex flex-col justify-end transform transition-transform duration-300">
                        <div className="flex items-center gap-1.5 text-blue-300 text-xs font-semibold mb-1">
                          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="truncate">{item.location}</span>
                        </div>
                        
                        <h3 className="text-white font-bold text-sm sm:text-base md:text-lg leading-snug group-hover:text-blue-200 transition-colors line-clamp-2">
                          {item.title}
                        </h3>

                        {galleryType === 'upcoming' && (
                          <a
                            href={item.registrationUrl || undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(event) => event.stopPropagation()}
                            className={`mt-3 inline-flex w-fit items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${item.registrationUrl ? 'bg-white text-blue-700 hover:bg-blue-50' : 'bg-slate-500/70 text-slate-300 cursor-not-allowed'}`}
                            aria-disabled={!item.registrationUrl}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            {item.registrationUrl ? 'Register Now' : 'Form Link Pending'}
                          </a>
                        )}

                        <p className="text-slate-300 text-xs mt-1.5 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Lightbox Modal with z-[9999] */}
                {lightboxIndex !== null && (
                  <div 
                    className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
                    onClick={() => setLightboxIndex(null)}
                  >
                    {/* Lightbox Container */}
                    <div 
                      className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Top Header Bar */}
                      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-slate-800 text-white shrink-0">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-slate-400">
                            Event Photo {lightboxIndex + 1} of {itemsToShow.length}
                          </span>
                          <span className="text-[11px] bg-blue-600/30 text-blue-300 border border-blue-500/40 px-2.5 py-0.5 rounded-full font-semibold">
                            {itemsToShow[lightboxIndex].categoryLabel}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => setLightboxIndex(null)}
                          className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                          aria-label="Close Lightbox"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Main Image Stage */}
                      <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px] max-h-[62vh]">
                        <img
                          src={itemsToShow[lightboxIndex].image}
                          alt={itemsToShow[lightboxIndex].title}
                          className="max-w-full max-h-[60vh] object-contain mx-auto"
                        />

                        {/* Navigation Arrows */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex((lightboxIndex - 1 + itemsToShow.length) % itemsToShow.length);
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-blue-600 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg cursor-pointer hover:scale-125 hover:shadow-xl hover:shadow-blue-600/50 duration-300"
                          aria-label="Previous Image"
                        >
                          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex((lightboxIndex + 1) % itemsToShow.length);
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-blue-600 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg cursor-pointer hover:scale-125 hover:shadow-xl hover:shadow-blue-600/50 duration-300"
                          aria-label="Next Image"
                        >
                          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>

                      {/* Bottom Info and Actions Bar */}
                      <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shrink-0">
                        <div>
                          <div className="flex items-center gap-1.5 text-blue-400 text-xs font-semibold mb-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{filteredItems[lightboxIndex].location}</span>
                          </div>
                          <h4 className="text-base sm:text-lg font-bold text-white">
                            {itemsToShow[lightboxIndex].title}
                          </h4>
                          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                            {itemsToShow[lightboxIndex].desc}
                          </p>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
                          <button
                            type="button"
                            onClick={() => {
                              setLightboxIndex(null);
                              openSiteVisitModal(`Event Inquiry - ${itemsToShow[lightboxIndex].title}`);
                            }}
                            className="flex-1 sm:flex-none py-2.5 px-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105 duration-300"
                          >
                            <Calendar className="w-4 h-4" />
                            Inquire for Next Conclave
                          </button>
                          <a
                            href={itemsToShow[lightboxIndex].image}
                            download={`nestoria-event-${itemsToShow[lightboxIndex].id}.jpeg`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center justify-center"
                            title="Open Full Image in New Tab"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          })()}

          {/* Action Row */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Link
              to="/events-gallery"
              className="inline-flex items-center gap-2 py-3.5 px-7 bg-white hover:bg-blue-50 text-blue-700 font-bold text-sm rounded-2xl border border-slate-300 hover:border-blue-300 shadow-sm hover:shadow-md transition-all group hover:scale-105 hover:-translate-y-0.5 duration-300"
            >
              <Grid className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <span>View Full Events & Functions Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            <button
              onClick={() => openSiteVisitModal("Gallery Grid Section")}
              className="inline-flex items-center gap-2 py-3.5 px-7 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-600/40 transition-all cursor-pointer hover:scale-110 hover:-translate-y-1 duration-300"
            >
              <Car className="w-4 h-4" />
              <span>Schedule Free Site Tour with Driver</span>
            </button>
          </div>
        </div>
      </section>

      {/* Premium Call to Action Section - Ready to Invest */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white border-y border-blue-900/40">
        {/* Background Ambient Glow & Grid Accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Dholera SIR Investment Gateway</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white">
              Ready to Invest in Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Future
              </span>
              ?
            </h2>

            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto mb-6 rounded-full"></div>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto text-slate-300 leading-relaxed font-normal">
              Join over <strong className="text-white font-semibold">8,000+ smart investors</strong> capitalizing on India&apos;s first platinum greenfield smart city. Get customized plot recommendations, clear title documentation, and immediate registry assistance.
            </p>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 text-left">
              {[
                { icon: ShieldCheck, title: "100% NA Clear Title", desc: "Collector sanctioned" },
                { icon: Car, title: "Free VIP Chauffeur", desc: "Pickup from Airport/HQ" },
                { icon: Building2, title: "Near $11B Tata Fab", desc: "High appreciation zone" },
                { icon: Award, title: "Immediate Registry", desc: "Zero broker hassle" },
              ].map((item, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <item.icon className="w-5 h-5 text-blue-400 mb-1.5" />
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">{item.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                type="button"
                onClick={() => openSiteVisitModal("CTA - Ready to Invest")}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-500 hover:via-blue-400 hover:to-blue-600 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-blue-600/40 hover:shadow-2xl hover:shadow-blue-500/60 transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2.5 cursor-pointer duration-300"
              >
                <Car className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Book Your Property</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </button>

              <a
                href="tel:+919213005611"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-blue-300/60 font-bold text-sm sm:text-base rounded-2xl backdrop-blur-sm transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2.5 duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Phone className="w-5 h-5 text-blue-300 group-hover:animate-pulse" />
                <span>Call Hotline: +919213005611</span>
              </a>

              <Link
                to="/projects"
                className="w-full sm:w-auto px-7 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-blue-500/60 font-semibold text-sm sm:text-base rounded-2xl transition-all flex items-center justify-center gap-2 hover:scale-105 hover:-translate-y-1 duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Building2 className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Explore Projects</span>
              </Link>
            </div>

            {/* Advisory Note */}
            <p className="text-xs text-slate-400 mt-8 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Govt Sanctioned Town Planning | Legally Registered Projects | Free Pick & Drop Included</span>
            </p>

          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              Investor Endorsements
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              What Our <span className="text-blue-600">Investors Say</span>
            </h2>
            
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-3 mb-4 rounded-full"></div>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Hear verified feedback from defense veterans, senior executives, business leaders, and NRIs who chose Nestoria Group for their Dholera SIR investments.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <Carousel />
          </div>
        </div>
      </section>



      {/* Newsletter Section */}
      {/* <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 md:p-12">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                Subscribe to Our{" "}
                <span className="text-blue-600">Newsletter</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Stay updated with the latest news, property listings, and
                investment opportunities in Dholera SIR.
              </p>
            </div>
            <form
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.elements.email.value;
                try {
                  const { ContactService } = await import("../services/ContactService");
                  const result = await ContactService.sendContactForm({
                    name: "Newsletter Subscriber",
                    email,
                    phone: "",
                    subject: "Newsletter Subscription",
                    message: `Please subscribe ${email} to the newsletter.`,
                  });
                  if (result.success) {
                    alert("Thank you for subscribing!");
                    e.target.reset();
                  } else {
                    alert(result.message || "Failed to subscribe.");
                  }
                } catch {
                  alert("Failed to subscribe. Please try again later.");
                }
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm md:text-base"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 text-sm md:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section> */}

      {/* Parallax Scroll Showcase */}

      {/* Sticky Bottom Stats Bar */}
      {/* <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-blue-900 text-white z-50 py-3 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-0">
            <div className="flex items-center justify-center px-2">
              
              <span className="font-bold text-white">15+</span>
              <span className="ml-2 text-sm text-gray-300 hidden md:inline">Years Experience</span>
            </div>
            <div className="flex items-center justify-center md:justify-start px-2">
              
              <span className="font-bold text-white">5+</span>
              <span className="ml-2 text-sm text-gray-300 hidden md:inline">Years of Dedicate To Dholera SIR</span>
            </div>
            <div className="flex items-center justify-center px-2">
              
              <span className="font-bold text-white">8,000+</span>
              <span className="ml-2 text-sm text-gray-300 hidden md:inline">Delighted Clients</span>
            </div>
             <div className="flex items-center justify-center md:justify-end px-2">
              
              <span className="font-bold text-white">9+</span>
              <span className="ml-2 text-sm text-gray-300 hidden md:inline">Countries </span>
            </div>
            <div className="flex items-center justify-center px-2">
             
              <span className="font-bold text-white">15+</span>
              <span className="ml-2 text-sm text-gray-300 hidden md:inline">States</span>
            </div>
            
            <div className="flex items-center justify-center px-2">
              
              <span className="font-bold text-white">50+</span>
              <span className="ml-2 text-sm text-gray-300 hidden md:inline">Cities </span>
            </div>
            <div className="flex items-center justify-center md:justify-end px-2">
              
              <span className="font-bold text-white">75+</span>
              <span className="ml-2 text-sm text-gray-300 hidden md:inline">Team Members</span>
            </div>
             <div className="flex items-center justify-center md:justify-end px-2">
              
              <span className="font-bold text-white">50+</span>
              <span className="ml-2 text-sm text-gray-300 hidden md:inline">Projects</span>
            </div>
             <div className="flex items-center justify-center md:justify-end px-2">
              
              <span className="font-bold text-white">51000+</span>
              <span className="ml-2 text-sm text-gray-300 hidden md:inline">Visiters</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
