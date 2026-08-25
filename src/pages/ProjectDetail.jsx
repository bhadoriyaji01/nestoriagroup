// src/pages/ProjectDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, MapPin, CheckCircle2, Download, Phone, 
  ArrowRight, Trees, Zap, Droplets, Home, Car, Clock, 
  Sparkles, ChevronRight, Check, Compass, Award,
  FileText, ExternalLink, Play, Video, Eye, FolderOpen, Globe
} from 'lucide-react';
import { allProjects, getProjectBySlug } from '../data/projectsData';
import Seo from '../components/Seo';
import confetti from 'canvas-confetti';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

  // EMI Calculator State
  const [plotAreaSqYd, setPlotAreaSqYd] = useState(200);
  const [ratePerSqYd, setRatePerSqYd] = useState(4800);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTenureYears, setLoanTenureYears] = useState(10);
  const interestRate = 8.5;

  // Lead Form
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    pickup: 'Ahmedabad Corporate Office (Satellite Road)',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      setSelectedImage(project.image);
      const parsedRate = parseInt(project.pricePerSqYd.replace(/\D/g, '')) || 4800;
      setRatePerSqYd(parsedRate);
    }
  }, [slug, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md text-center border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Project Not Found</h2>
          <p className="text-slate-600 mb-6">The project you are looking for might have been moved or updated.</p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md"
          >
            Explore All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  // EMI Calculations
  const totalPrice = plotAreaSqYd * ratePerSqYd;
  const downPaymentAmount = (totalPrice * downPaymentPercent) / 100;
  const loanAmount = totalPrice - downPaymentAmount;
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = loanTenureYears * 12;
  const emi = loanAmount > 0 
    ? Math.round((loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1))
    : 0;
  const estimated5YrAppreciation = Math.round(totalPrice * 2.85); // conservative 2.85x projected growth

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone) {
      alert("Please enter your name and phone number");
      return;
    }

    const refId = `NST-${Math.floor(100000 + Math.random() * 900000)}`;
    const leads = JSON.parse(localStorage.getItem('nestoria_leads') || '[]');
    leads.push({
      id: refId,
      timestamp: new Date().toISOString(),
      project: project.title,
      ...leadForm
    });
    localStorage.setItem('nestoria_leads', JSON.stringify(leads));

    setFormSubmitted(true);
    try {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  };

  const handleWhatsAppInquiry = () => {
    const text = `Hello Nestoria Group, I am interested in ${project.title} (${project.location}). Please send the pricing sheet, layout plan, and book a free site visit for me.`;
    window.open(`https://wa.me/919213005611?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Structured Schema Markup for Project Page
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SingleFamilyResidence",
    "name": `${project.title} - Dholera SIR`,
    "description": project.description,
    "image": project.image,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dholera SIR",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.2530",
      "longitude": "72.1977"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": totalPrice,
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "RealEstateAgent",
        "name": "Nestoria Group",
        "telephone": "+919213005611",
        "url": "https://nestoriagroup.com"
      }
    }
  };

  const relatedProjects = allProjects
    .filter(p => p.id !== project.id && p.type === project.type)
    .slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Seo
        title={`${project.title} Dholera SIR | Price, Layout & Free Site Visit | Nestoria Group`}
        description={`${project.title} in ${project.location}. 100% Clear Title NA Plots starting from ${project.price}. Legally verified and approved with immediate registry.`}
        keywords={`${project.title}, ${project.title} Dholera, Dholera SIR plots, Dholera property, Nestoria Group projects, ${project.zone}`}
        canonicalUrl={`/project/${project.slug}`}
        imageUrl={project.image}
        schemaMarkup={projectSchema}
      />

      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-xs sm:text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <Link to="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <span className="text-blue-700 font-semibold truncate">{project.title}</span>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="bg-white border-b border-slate-200 py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Gallery & Master Visuals */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 group aspect-[16/10]">
                <img
                  src={selectedImage || project.image}
                  alt={`${project.title} master view`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-blue-600 text-white font-bold text-xs uppercase px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {project.status}
                  </span>
                  <span className="bg-emerald-600 text-white font-bold text-xs uppercase px-3 py-1.5 rounded-full shadow-lg">
                    100% NA Title Clear
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md text-white p-3 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                  <span className="text-xs font-semibold text-blue-300">
                    {project.zone}
                  </span>
                </div>
              </div>

              {/* Gallery Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      selectedImage === img ? 'border-blue-600 ring-2 ring-blue-400' : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${project.title} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Project Highlights & Quick Action Card */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200">
                  <Award className="w-3.5 h-3.5" />
                  {project.category}
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                  {project.title}
                </h1>
                <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
                  {project.tagline}
                </p>
              </div>

              {/* Quick Pricing & Plot Metrics */}
              <div className="bg-gradient-to-br from-blue-50/70 to-slate-50 border border-blue-100 rounded-3xl p-5 shadow-sm space-y-4">
                <div className="flex items-baseline justify-between border-b border-blue-100 pb-3">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase block">Starting Investment</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-blue-700">{project.price}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-slate-500 uppercase block">Benchmark Rate</span>
                    <span className="text-sm sm:text-base font-bold text-slate-800">{project.pricePerSqYd}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-2xs">
                    <span className="text-slate-400 block text-[11px]">Plot Sizes</span>
                    <strong className="text-slate-800 font-semibold">{project.plotSizes}</strong>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-2xs">
                    <span className="text-slate-400 block text-[11px]">Approval</span>
                    <strong className="text-slate-800 font-semibold">{project.reraNumber}</strong>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-2xs">
                    <span className="text-slate-400 block text-[11px]">Possession</span>
                    <strong className="text-emerald-700 font-semibold">{project.possession}</strong>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-2xs">
                    <span className="text-slate-400 block text-[11px]">Availability</span>
                    <strong className="text-blue-700 font-semibold">{project.totalUnits}</strong>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={() => setIsBookModalOpen(true)}
                    className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm sm:text-base rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <Car className="w-5 h-5" />
                    Book Free VIP Site Visit
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setIsBrochureModalOpen(true)}
                      className="py-3 px-4 bg-white hover:bg-slate-50 border-2 border-blue-600 text-blue-600 font-bold text-xs sm:text-sm rounded-2xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      Get Brochure
                    </button>
                    <button
                      onClick={handleWhatsAppInquiry}
                      className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-2xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20"
                    >
                      <Phone className="w-4 h-4" />
                      WhatsApp Info
                    </button>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-between text-xs text-slate-600 px-2">
                <span className="flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Immediate Registry
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  AUDA & SIRDA Approved
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  0% Commission
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Tabbed Details Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          
          {/* Tab Navigation Pill Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {[
              { id: 'overview', label: 'Overview & Highlights' },
              { id: 'legal', label: 'Legal & NA Title (Drive Docs)' },
              { id: 'videos', label: 'Videos & Virtual Tour' },
              { id: 'amenities', label: 'World-Class Amenities' },
              { id: 'connectivity', label: 'Strategic Connectivity' },
              { id: 'calculator', label: 'EMI & ROI Calculator' },
              { id: 'booking', label: 'Book Site Visit' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all flex-shrink-0 shadow-xs ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
              <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Project Description & Concept</h2>
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base mt-3">
                    {project.overview}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                    Key Project Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                        <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-slate-800">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Master Plan Section */}
                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Layout & Master Plan</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4">
                    The master layout features wide blacktop internal roads, designated green zones, boundary demarcation, and underground utility service corridors.
                  </p>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/9] bg-slate-100 relative group">
                    <img
                      src={project.image}
                      alt={`${project.title} Master Plan`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        onClick={() => setIsBrochureModalOpen(true)}
                        className="bg-white text-blue-700 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg flex items-center gap-2 hover:bg-slate-50 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download Brochure
                      </button>
                      {project.driveFolderUrl && (
                        <a
                          href={project.driveFolderUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
                        >
                          <FolderOpen className="w-4 h-4" />
                          View Drive Assets
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Quick Advisor Card */}
              <div className="lg:col-span-4 bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-blue-200">Personalized Assistance</span>
                  <h3 className="text-2xl font-extrabold mt-1">Speak with a Dholera Property Specialist</h3>
                  <p className="text-xs sm:text-sm text-blue-100/90 mt-2 leading-relaxed">
                    Get custom plot availability, corner plot selections, and detailed legal search reports.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/10">
                    <Phone className="w-5 h-5 text-blue-200" />
                    <div>
                      <span className="text-[11px] text-blue-200 block">Direct Hotline</span>
                      <a href="tel:+919213005611" className="font-bold text-sm hover:underline">+919213005611</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/10">
                    <Clock className="w-5 h-5 text-blue-200" />
                    <div>
                      <span className="text-[11px] text-blue-200 block">Free Pickups</span>
                      <strong className="font-bold text-sm">Every Day 9 AM & 2 PM</strong>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsBookModalOpen(true)}
                  className="w-full py-3.5 px-4 bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Schedule Site Tour Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB: LEGAL & DOCUMENTS */}
          {activeTab === 'legal' && (
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm animate-fade-in space-y-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs mb-3 border border-emerald-200">
                  <ShieldCheck className="w-4 h-4" /> 100% Clear Title & Verified Documentation
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                  Official Legal Approvals & Drive Records
                </h2>
                <p className="text-slate-600 text-sm sm:text-base">
                  Every parcel under {project.title} has undergone exhaustive 30-year title searches, NA (Non-Agricultural) clearance, and municipal sanctioning.
                </p>
              </div>

              {/* Quick Action Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.driveFolderUrl && (
                  <a
                    href={project.driveFolderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <FolderOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                        Google Drive Folder
                        <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Browse all original scanned PDFs, sanctioned plans, and site folders directly on Google Drive.
                      </p>
                    </div>
                  </a>
                )}

                {project.kmzFileUrl && (
                  <a
                    href={project.kmzFileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 hover:border-amber-400 hover:bg-amber-50 transition-all flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                        Google Earth 3D KMZ Map
                        <ExternalLink className="w-3.5 h-3.5 text-amber-600" />
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Download or open the precise geo-referenced KMZ file to inspect boundary coordinates in Google Earth.
                      </p>
                    </div>
                  </a>
                )}

                {project.brochureUrl && (
                  <a
                    href={project.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Download className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                        Project Layout Brochure
                        <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Download the comprehensive layout brochure with master numbering and plot dimensions.
                      </p>
                    </div>
                  </a>
                )}
              </div>

              {/* Legal Checklist Details */}
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 space-y-4">
                <h3 className="font-bold text-slate-900 text-base">Key Approvals & Title Certifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { label: 'Collector NA Order', status: 'Approved & On Record', note: 'Non-Agricultural residential/commercial order passed' },
                    { label: '30-Year Title Search', status: '100% Clear Title', note: 'Certified by senior High Court advocates' },
                    { label: 'Sanctioned Master Plan', status: 'Dholera Authority Passed', note: 'Roads, open green zones & sub-plots demarcated' },
                    { label: 'Legal Compliance', status: project.reraNumber || 'Government Approved', note: 'Legal verification and buyer protection guidelines' },
                    { label: 'Individual Sub-Plot FSL', status: 'Ready for Registry', note: 'Immediate Sale Deed registration in sub-registrar office' },
                    { label: 'Encumbrance Certificate', status: 'Nil / Clear', note: 'Zero bank liens or private mortgage disputes' },
                  ].map((doc, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span className="font-bold text-xs sm:text-sm text-slate-900">{doc.label}</span>
                      </div>
                      <span className="text-[11px] font-bold text-blue-600 block">{doc.status}</span>
                      <p className="text-[11px] text-slate-500 mt-0.5">{doc.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: VIDEOS & VIRTUAL TOURS */}
          {activeTab === 'videos' && (
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm animate-fade-in space-y-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs mb-3 border border-blue-200">
                  <Video className="w-4 h-4" /> Live Site Development & Walkthroughs
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                  Watch Ground Progress for {project.title}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base">
                  Real footage, boundary demarcation, road construction, and connectivity tours filmed on location at Dholera SIR.
                </p>
              </div>

              {/* Video Player / Embeds */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {(project.videoUrls || [project.videoUrl || 'https://drive.google.com/uc?export=download&id=1j613_5tYt5aNnZqT40eD6w7uU_v9E1aX']).map((vUrl, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md flex flex-col">
                    <div className="aspect-[16/9] w-full bg-slate-950 relative">
                      {vUrl.includes('drive.google.com') ? (
                        <iframe
                          src={vUrl.replace('export=download', 'preview').replace('view?usp=drivesdk', 'preview')}
                          title={`${project.title} Video ${idx + 1}`}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          src={vUrl}
                          controls
                          className="w-full h-full object-cover"
                          poster={project.image}
                        />
                      )}
                    </div>
                    <div className="p-4 bg-white flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Site Walkthrough & Drone View #{idx + 1}</h4>
                        <span className="text-xs text-slate-500">Filmed at Dholera SIR project zone</span>
                      </div>
                      <a
                        href={project.driveFolderUrl || vUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs flex items-center gap-1"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Full HD
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: AMENITIES */}
          {activeTab === 'amenities' && (
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm animate-fade-in">
              <div className="max-w-2xl mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">Designed for Modern Smart Living</h2>
                <p className="text-slate-600 text-sm sm:text-base">
                  Every Nestoria township is crafted with world-class civic infrastructure, robust security systems, and lush recreation spaces.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.amenities.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {item.icon === 'ShieldCheck' && <ShieldCheck className="w-6 h-6" />}
                      {item.icon === 'Trees' && <Trees className="w-6 h-6" />}
                      {item.icon === 'Zap' && <Zap className="w-6 h-6" />}
                      {item.icon === 'Droplets' && <Droplets className="w-6 h-6" />}
                      {item.icon === 'Home' && <Home className="w-6 h-6" />}
                      {item.icon === 'Footprints' && <Compass className="w-6 h-6" />}
                      {item.icon === 'Sun' && <Zap className="w-6 h-6" />}
                      {item.icon === 'Smile' && <Sparkles className="w-6 h-6" />}
                      {item.icon === 'Heart' && <Trees className="w-6 h-6" />}
                      {item.icon === 'Activity' && <Award className="w-6 h-6" />}
                    </div>
                    <h3 className="font-bold text-base text-slate-900 mb-1">{item.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CONNECTIVITY */}
          {activeTab === 'connectivity' && (
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm animate-fade-in space-y-8">
              <div className="max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">Unmatched Strategic Connectivity</h2>
                <p className="text-slate-600 text-sm sm:text-base">
                  Located in the high-priority growth corridor with rapid travel access to the upcoming international airport, Ahmedabad-Dholera expressway, and the $11B Tata Semiconductor Fab.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.connectivity.map((c, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-slate-900">{c.place}</h4>
                      <span className="text-xs text-slate-500 font-medium">Distance: {c.distance}</span>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-blue-600 text-white font-extrabold text-xs px-3 py-1.5 rounded-full shadow-xs">
                        {c.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dholera SIR Macro Connectivity Highlights */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4">
                <h3 className="text-lg font-bold text-blue-300">Why Location Matters in Dholera SIR</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
                  <div className="border-l-2 border-blue-500 pl-3">
                    <strong className="text-white block mb-1">Ahmedabad Express Corridor</strong>
                    Travel time to Ahmedabad reduced to under 45 minutes via 6-lane NH-751 expressway.
                  </div>
                  <div className="border-l-2 border-emerald-500 pl-3">
                    <strong className="text-white block mb-1">International Air Cargo Gateway</strong>
                    4,000m runway handling international cargo & passenger traffic by 2025-2026.
                  </div>
                  <div className="border-l-2 border-purple-500 pl-3">
                    <strong className="text-white block mb-1">Global Tech Manufacturing</strong>
                    Direct proximity to Tata Electronics fab and auxiliary component suppliers.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CALCULATOR */}
          {activeTab === 'calculator' && (
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm animate-fade-in">
              <div className="max-w-2xl mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">Smart EMI & Capital Growth Calculator</h2>
                <p className="text-slate-600 text-sm sm:text-base">
                  Customize your plot size, down payment, and loan tenure to view projected monthly outlays and 5-year capital appreciation.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Inputs */}
                <div className="lg:col-span-7 space-y-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <div>
                    <div className="flex justify-between text-sm font-bold text-slate-800 mb-2">
                      <span>Plot Size (Sq. Yards)</span>
                      <span className="text-blue-600">{plotAreaSqYd} Sq. Yd ({plotAreaSqYd * 9} Sq. Ft)</span>
                    </div>
                    <input
                      type="range"
                      min="150"
                      max="1200"
                      step="25"
                      value={plotAreaSqYd}
                      onChange={(e) => setPlotAreaSqYd(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-bold text-slate-800 mb-2">
                      <span>Down Payment ({downPaymentPercent}%)</span>
                      <span className="text-blue-600">₹ {downPaymentAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="50"
                      step="5"
                      value={downPaymentPercent}
                      onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-bold text-slate-800 mb-2">
                      <span>Loan Tenure</span>
                      <span className="text-blue-600">{loanTenureYears} Years ({totalMonths} Months)</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="20"
                      step="1"
                      value={loanTenureYears}
                      onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>
                </div>

                {/* Outputs */}
                <div className="lg:col-span-5 bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
                  <h3 className="text-lg font-bold text-blue-200 uppercase tracking-wider">Investment Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline border-b border-white/15 pb-2">
                      <span className="text-xs text-blue-100">Total Plot Value</span>
                      <span className="text-2xl font-extrabold">₹ {totalPrice.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-white/15 pb-2">
                      <span className="text-xs text-blue-100">Down Payment Required</span>
                      <span className="text-lg font-bold">₹ {downPaymentAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-white/15 pb-2">
                      <span className="text-xs text-blue-100">Estimated Monthly EMI</span>
                      <span className="text-2xl font-extrabold text-emerald-300">₹ {emi.toLocaleString('en-IN')}/mo</span>
                    </div>
                    <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                      <span className="text-xs text-blue-200 block">Projected 5-Year Asset Value (2.85x)</span>
                      <strong className="text-2xl font-extrabold text-amber-300">
                        ₹ {estimated5YrAppreciation.toLocaleString('en-IN')}
                      </strong>
                      <p className="text-[11px] text-blue-100/70 mt-1">
                        Based on historical Dholera smart city appreciation and completion of expressway + airport.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsBookModalOpen(true)}
                    className="w-full py-3.5 px-4 bg-white text-blue-700 font-bold text-sm rounded-2xl shadow-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
                  >
                    Lock This Plot & Rate
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: BOOK SITE VISIT */}
          {activeTab === 'booking' && (
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm animate-fade-in max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Car className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Schedule Your Free VIP Site Tour</h2>
                <p className="text-slate-600 text-sm mt-1">
                  Complimentary AC vehicle pickup from Ahmedabad Airport, Railway Station, or our Corporate HQ.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-3xl space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                  <h3 className="text-2xl font-bold text-slate-900">Site Visit Request Confirmed!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you {leadForm.name}! Our hospitality team has reserved your VIP seat for {project.title}. We will contact you at {leadForm.phone} with vehicle coordinates.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="py-2.5 px-6 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-md"
                  >
                    Book Another Tour
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sunil Mehta"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="sunil@example.com"
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                      <input
                        type="date"
                        value={leadForm.date}
                        onChange={(e) => setLeadForm({ ...leadForm, date: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Pickup Point</label>
                    <select
                      value={leadForm.pickup}
                      onChange={(e) => setLeadForm({ ...leadForm, pickup: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-800"
                    >
                      <option value="Ahmedabad Corporate Office (Satellite Road)">Ahmedabad Office (Satellite Rd)</option>
                      <option value="Ahmedabad Airport (SVP International)">Ahmedabad Airport</option>
                      <option value="Sabarmati / Kalupur Railway Station">Sabarmati / Kalupur Railway Station</option>
                      <option value="Direct Dholera Site Office (Self Drive)">Direct Dholera Site Office</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-2xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Confirm Free VIP Site Tour
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Related / Similar Projects */}
          <div className="mt-16 border-t border-slate-200 pt-12">
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-xs uppercase font-bold text-blue-600 tracking-wider">Explore More</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">Similar Projects in Dholera SIR</h3>
              </div>
              <Link
                to="/projects"
                className="text-xs sm:text-sm font-bold text-blue-600 hover:underline flex items-center gap-1"
              >
                View All Portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all group flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full shadow-md">
                      {p.status}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-blue-600" />
                        {p.location}
                      </p>
                      <span className="text-sm font-extrabold text-blue-700 block mt-3">
                        {p.price}
                      </span>
                    </div>

                    <Link
                      to={`/project/${p.slug}`}
                      className="w-full py-2.5 px-4 bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-800 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1 border border-slate-200 hover:border-blue-600 shadow-2xs"
                    >
                      View Full Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Booking Modal Popup */}
      {isBookModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 relative">
            <button
              onClick={() => { setIsBookModalOpen(false); setFormSubmitted(false); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Book Free VIP Site Tour</h3>
              <p className="text-xs text-slate-600 mt-1">Touring: <strong className="text-blue-600">{project.title}</strong></p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-lg text-slate-900">Booking Confirmed!</h4>
                <p className="text-xs text-slate-600">
                  Our hospitality representative will contact you with driver and timing details.
                </p>
                <button
                  onClick={() => { setIsBookModalOpen(false); setFormSubmitted(false); }}
                  className="py-2.5 px-6 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-md"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={leadForm.date}
                      onChange={(e) => setLeadForm({ ...leadForm, date: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Pickup Location</label>
                  <select
                    value={leadForm.pickup}
                    onChange={(e) => setLeadForm({ ...leadForm, pickup: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-slate-800"
                  >
                    <option value="Ahmedabad Corporate Office (Satellite Road)">Ahmedabad Corporate Office</option>
                    <option value="Ahmedabad Airport (SVP International)">Ahmedabad Airport</option>
                    <option value="Sabarmati / Kalupur Railway Station">Sabarmati / Kalupur Station</option>
                    <option value="Direct Dholera Site Office (Self Drive)">Direct Dholera Site Office</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Confirm Free VIP Site Tour
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Brochure Modal Popup */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-md w-full p-6 sm:p-8 relative">
            <button
              onClick={() => { setIsBrochureModalOpen(false); setFormSubmitted(false); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Download Brochure & Pricing</h3>
              <p className="text-xs text-slate-600 mt-1">Receive high-res layout map and price schedule for {project.title}.</p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-4 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base text-slate-900">Brochure Dossier Ready!</h4>
                <p className="text-xs text-slate-600">
                  We have forwarded the PDF and high-res layout plan to your WhatsApp and email.
                </p>
                <button
                  onClick={() => { setIsBrochureModalOpen(false); setFormSubmitted(false); }}
                  className="py-2.5 px-6 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-md"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  Instant Download Brochure PDF
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
