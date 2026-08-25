// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  ChevronDown, Phone, Car, Menu, X, Building2, MapPin, 
  Sparkles, CheckCircle2, ShieldCheck, BookOpen, Newspaper,
  Users, Award, Image, Briefcase, MessageSquare
} from "lucide-react";
import { allProjects } from "../data/projectsData";
import { openSiteVisitModal } from "./SiteVisitModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  
  // Mobile accordion states
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const projectsTimeoutRef = useRef(null);
  const aboutTimeoutRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  // Handle Projects Hover with Grace Buffer
  const handleProjectsMouseEnter = () => {
    if (projectsTimeoutRef.current) clearTimeout(projectsTimeoutRef.current);
    setIsProjectsDropdownOpen(true);
    setIsAboutDropdownOpen(false);
  };

  const handleProjectsMouseLeave = () => {
    projectsTimeoutRef.current = setTimeout(() => {
      setIsProjectsDropdownOpen(false);
    }, 180);
  };

  // Handle About Hover with Grace Buffer
  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setIsAboutDropdownOpen(true);
    setIsProjectsDropdownOpen(false);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 180);
  };

  // Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click Outside Menu Close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsAboutDropdownOpen(false);
        setIsProjectsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsAboutDropdownOpen(false);
    setIsProjectsDropdownOpen(false);
    setMobileProjectsOpen(false);
    setMobileAboutOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-[1000] w-full">
      {/* Top Notification Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 text-white text-[11px] sm:text-xs py-2 px-4 border-b border-blue-700/30">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 truncate">
            <span className="bg-blue-500 text-white font-extrabold uppercase px-2 py-0.5 rounded text-[10px] tracking-wider">
              NEW
            </span>
            <span className="truncate">
              Tata Electronics ₹91,000 Cr Semiconductor Fab in Dholera TP2 – High Appreciation Investment Zone
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-blue-200 flex-shrink-0">
            <a href="tel:+919213005611" className="hover:text-white flex items-center gap-1 font-semibold">
              <Phone className="w-3.5 h-3.5 text-blue-300" /> +919213005611
            </a>
            <span className="text-blue-400">|</span>
            <a href="https://nestoriagroup.com/NestoriaGroupProfile.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 font-semibold text-amber-300 hover:text-amber-200">
              <BookOpen className="w-3.5 h-3.5" /> Company Profile
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        ref={navRef}
        className={`bg-white transition-all duration-300 border-b border-slate-200 ${
          isScrolled ? "shadow-md py-2.5 bg-white/95 backdrop-blur-md" : "py-3 bg-white"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center relative">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <img
              className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-105"
              src="/logonew.png"
              alt="Nestoria Group Logo"
            />
            <div className="hidden sm:block">
              <span className="font-extrabold text-lg text-slate-900 leading-none tracking-tight block">
                NESTORIA <span className="text-blue-600">GROUP</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mt-0.5">
                Dholera SIR Smart City
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 text-sm font-semibold text-slate-700">
            <Link
              to="/"
              className={`px-3 py-2 rounded-xl transition-colors hover:text-blue-600 hover:bg-blue-50/60 ${
                location.pathname === "/" ? "text-blue-600 bg-blue-50/80 font-bold" : ""
              }`}
            >
              Home
            </Link>

            {/* PROJECTS DROPDOWN WITH HOVER BRIDGE */}
            <div
              className="relative"
              onMouseEnter={handleProjectsMouseEnter}
              onMouseLeave={handleProjectsMouseLeave}
            >
              <button
                type="button"
                onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                className={`px-3 py-2 rounded-xl transition-colors hover:text-blue-600 hover:bg-blue-50/60 flex items-center gap-1 cursor-pointer ${
                  location.pathname.startsWith("/project") ? "text-blue-600 bg-blue-50/80 font-bold" : ""
                }`}
              >
                <span>Projects</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProjectsDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Hover bridge wrapper */}
              <div
                className={`absolute top-full left-0 pt-2 w-84 z-50 transition-all duration-200 ${
                  isProjectsDropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto visible"
                    : "opacity-0 translate-y-2 pointer-events-none invisible"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-3">
                  <div className="flex items-center justify-between px-2 py-1 mb-1 border-b border-slate-100 pb-1.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Featured Dholera Townships
                    </span>
                    <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded-full">
                      11+ Projects
                    </span>
                  </div>
                  
                  <div className="space-y-1 max-h-72 overflow-y-auto">
                    {allProjects.slice(0, 5).map((proj) => (
                      <Link
                        key={proj.id}
                        to={`/project/${proj.slug}`}
                        className="flex items-center justify-between p-2 rounded-xl hover:bg-blue-50 text-slate-800 hover:text-blue-700 transition-colors group"
                      >
                        <div className="pr-2">
                          <div className="font-bold text-xs group-hover:text-blue-600 truncate">{proj.title}</div>
                          <div className="text-[11px] text-slate-500 truncate">{proj.location} • {proj.zone}</div>
                        </div>
                        <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md flex-shrink-0">
                          {proj.price}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 mt-2 pt-2 px-1">
                    <Link
                      to="/projects"
                      className="block text-center text-xs font-bold text-blue-600 hover:text-blue-800 py-2 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all"
                    >
                      View All 11+ Projects & Master Plans →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ABOUT DROPDOWN WITH HOVER BRIDGE */}
            <div
              className="relative"
              onMouseEnter={handleAboutMouseEnter}
              onMouseLeave={handleAboutMouseLeave}
            >
              <button
                type="button"
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className={`px-3 py-2 rounded-xl transition-colors hover:text-blue-600 hover:bg-blue-50/60 flex items-center gap-1 cursor-pointer ${
                  ['/about', '/team', '/achievements', '/media', '/services', '/testimonial'].includes(location.pathname)
                    ? "text-blue-600 bg-blue-50/80 font-bold"
                    : ""
                }`}
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isAboutDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Hover bridge wrapper */}
              <div
                className={`absolute top-full left-0 pt-2 w-60 z-50 transition-all duration-200 ${
                  isAboutDropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto visible"
                    : "opacity-0 translate-y-2 pointer-events-none invisible"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 py-2">
                  {[
                    { label: "Company Overview", link: "/about", icon: Building2 },
                    { label: "Leadership & Team", link: "/team", icon: Users },
                    { label: "Key Milestones & Awards", link: "/achievements", icon: Award },
                    { label: "Media & Ground Gallery", link: "/media", icon: Image },
                    { label: "Investor Services", link: "/services", icon: Briefcase },
                    { label: "Client Testimonials", link: "/testimonial", icon: MessageSquare },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        to={item.link}
                        className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Dholera SIR */}
            <Link
              to="/aboutDholera"
              className={`px-3 py-2 rounded-xl transition-colors hover:text-blue-600 hover:bg-blue-50/60 ${
                location.pathname === "/aboutDholera" ? "text-blue-600 bg-blue-50/80 font-bold" : ""
              }`}
            >
              Dholera SIR
            </Link>

            {/* Land Deals */}
            <Link
              to="/land-deals"
              className={`px-3 py-2 rounded-xl transition-colors hover:text-blue-600 hover:bg-blue-50/60 ${
                location.pathname === "/land-deals" ? "text-blue-600 bg-blue-50/80 font-bold" : ""
              }`}
            >
              Land Deals
            </Link>

            {/* BLOG LINK (DIRECT ACCESSIBILITY) */}
            <Link
              to="/blog"
              className={`px-3 py-2 rounded-xl transition-colors hover:text-blue-600 hover:bg-blue-50/60 ${
                location.pathname === "/blog" ? "text-blue-600 bg-blue-50/80 font-bold" : ""
              }`}
            >
              Blog
            </Link>

            {/* Updates / News */}
            <Link
              to="/latest-news"
              className={`px-3 py-2 rounded-xl transition-colors hover:text-blue-600 hover:bg-blue-50/60 ${
                location.pathname === "/latest-news" ? "text-blue-600 bg-blue-50/80 font-bold" : ""
              }`}
            >
              News
            </Link>

            {/* FAQ */}
            <Link
              to="/faq"
              className={`px-3 py-2 rounded-xl transition-colors hover:text-blue-600 hover:bg-blue-50/60 ${
                location.pathname === "/faq" ? "text-blue-600 bg-blue-50/80 font-bold" : ""
              }`}
            >
              FAQ
            </Link>
          </div>

          {/* Desktop Right CTA Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => openSiteVisitModal()}
              type="button"
              className="py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md shadow-blue-500/25 hover:shadow-lg transition-all flex items-center gap-1.5 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Car className="w-4 h-4 text-white" />
              <span>Book Site Visit</span>
            </button>
            <Link
              to="/contact"
              className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all border border-slate-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Action Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openSiteVisitModal()}
              type="button"
              className="py-2 px-3 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-1 cursor-pointer"
            >
              <Car className="w-3.5 h-3.5 text-white" />
              <span>Site Visit</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fade-in max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-xl font-semibold text-slate-800 hover:bg-blue-50"
              >
                Home
              </Link>

              {/* Mobile Projects Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl font-semibold text-slate-800 hover:bg-blue-50"
                >
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    Projects ({allProjects.length})
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileProjectsOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>
                {mobileProjectsOpen && (
                  <div className="pl-6 pr-2 py-1 space-y-1 border-l-2 border-blue-100 ml-4 mt-1">
                    <Link
                      to="/projects"
                      className="block py-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
                    >
                      • View All Projects Directory
                    </Link>
                    {allProjects.slice(0, 5).map((p) => (
                      <Link
                        key={p.id}
                        to={`/project/${p.slug}`}
                        className="block py-1 text-xs text-slate-600 hover:text-blue-600 truncate"
                      >
                        • {p.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile About Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl font-semibold text-slate-800 hover:bg-blue-50"
                >
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    About Us
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180 text-blue-600' : ''}`} />
                </button>
                {mobileAboutOpen && (
                  <div className="pl-6 pr-2 py-1 space-y-1 border-l-2 border-blue-100 ml-4 mt-1">
                    <Link to="/about" className="block py-1 text-xs text-slate-600 hover:text-blue-600">• Company Overview</Link>
                    <Link to="/team" className="block py-1 text-xs text-slate-600 hover:text-blue-600">• Leadership & Team</Link>
                    <Link to="/achievements" className="block py-1 text-xs text-slate-600 hover:text-blue-600">• Milestones & Awards</Link>
                    <Link to="/media" className="block py-1 text-xs text-slate-600 hover:text-blue-600">• Media & Gallery</Link>
                    <Link to="/services" className="block py-1 text-xs text-slate-600 hover:text-blue-600">• Investor Services</Link>
                    <Link to="/testimonial" className="block py-1 text-xs text-slate-600 hover:text-blue-600">• Testimonials</Link>
                  </div>
                )}
              </div>

              <Link
                to="/aboutDholera"
                className="block px-3 py-2 rounded-xl font-semibold text-slate-800 hover:bg-blue-50"
              >
                About Dholera Smart City
              </Link>
              
              <Link
                to="/land-deals"
                className="block px-3 py-2 rounded-xl font-semibold text-slate-800 hover:bg-blue-50"
              >
                Exclusive Land Deals
              </Link>

              {/* BLOG IN MOBILE */}
              <Link
                to="/blog"
                className="block px-3 py-2 rounded-xl font-semibold text-slate-800 hover:bg-blue-50 flex items-center justify-between"
              >
                <span>Insights & Blog</span>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">New</span>
              </Link>

              <Link
                to="/latest-news"
                className="block px-3 py-2 rounded-xl font-semibold text-slate-800 hover:bg-blue-50"
              >
                News & Developments
              </Link>

              <Link
                to="/faq"
                className="block px-3 py-2 rounded-xl font-semibold text-slate-800 hover:bg-blue-50"
              >
                FAQ
              </Link>

              <Link
                to="/contact"
                className="block px-3 py-2 rounded-xl font-semibold text-slate-800 hover:bg-blue-50"
              >
                Contact & Office Locations
              </Link>
            </div>

            {/* Mobile Bottom Action CTAs */}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => { setIsOpen(false); openSiteVisitModal(); }}
                type="button"
                className="w-full py-3 bg-blue-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Car className="w-4 h-4 text-white" />
                Book Free Site Visit (AC Pickup)
              </button>
              
              <a
                href="tel:+919213005611"
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center justify-center gap-2 border border-slate-200"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                Call +919213005611
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
