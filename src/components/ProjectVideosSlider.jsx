// src/components/ProjectVideosSlider.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Play, Pause, ChevronLeft, ChevronRight, Video, 
  MapPin, ShieldCheck, Sparkles, ExternalLink, Car, 
  X, CheckCircle2, ArrowRight, Eye
} from "lucide-react";
import { openSiteVisitModal } from "./SiteVisitModal";
import { allProjects } from "../data/projectsData";

export const projectVideosList = [
  {
    id: "vid-dholera-bhoomi",
    title: "Dholera Bhoomi – Flagship Residential Township & Ground Tour",
    subtitle: "100% Clear Title NA Plots in TP 2 Activation Area",
    category: "Residential Plots",
    zone: "TP 2 Activation Area",
    duration: "4:15",
    videoUrl: "https://www.youtube.com/embed/WRjG9ETnCz0?autoplay=1&rel=0",
    youtubeId: "WRjG9ETnCz0",
    thumbnail: "https://img.youtube.com/vi/WRjG9ETnCz0/hqdefault.jpg",
    projectSlug: "dholera-bhoomi",
    highlights: ["Ready for Immediate Registry", "12m & 18m Concrete Roads", "5 Mins to ABCD Command Center"],
    price: "₹ 14.5 Lakhs onwards"
  },
  {
    id: "vid-tata-fab",
    title: "TATA Semiconductor Fab (₹91,000 Cr) & Dholera SIR Mega Project",
    subtitle: "High-Appreciation Tech & Industrial Corridor in TP 2",
    category: "Infrastructure & Industrial",
    zone: "TP 2 High-Tech Hub",
    duration: "6:20",
    videoUrl: "https://www.youtube.com/embed/884m9TUxxAo?autoplay=1&rel=0",
    youtubeId: "884m9TUxxAo",
    thumbnail: "https://img.youtube.com/vi/884m9TUxxAo/hqdefault.jpg",
    projectSlug: "industrial-logistics-park",
    highlights: ["Direct Expressway Junction", "Underground SCADA Corridors", "Massive Capital Appreciation"],
    price: "Industrial Plots Available"
  },
  {
    id: "vid-orchid-gold-3d",
    title: "Orchid Villa Gold & 3D Printed Homes Tour",
    subtitle: "Next-Gen Robotic 3D Villa Construction & Modern Architecture",
    category: "3D Homes & Villas",
    zone: "TP 2 Residential Enclave",
    duration: "5:10",
    videoUrl: "https://www.youtube.com/embed/FmrBK8TmAvQ?autoplay=1&rel=0",
    youtubeId: "FmrBK8TmAvQ",
    thumbnail: "https://img.youtube.com/vi/FmrBK8TmAvQ/hqdefault.jpg",
    projectSlug: "orchid-villa-gold",
    highlights: ["Robotic 3D Construction", "Thermally Insulated Villas", "Private Green Gardens"],
    price: "₹ 24 Lakhs onwards"
  },
  {
    id: "vid-orchid-river-view",
    title: "Orchid River View – Premium Waterfront Plotted Living",
    subtitle: "Serene Living Along Dholera's Natural Green Waterway",
    category: "Residential Plots",
    zone: "TP 2 Waterfront Zone",
    duration: "3:45",
    videoUrl: "https://www.youtube.com/embed/PqInsYRqm3c?autoplay=1&rel=0",
    youtubeId: "PqInsYRqm3c",
    thumbnail: "https://img.youtube.com/vi/PqInsYRqm3c/hqdefault.jpg",
    projectSlug: "orchid-river-view",
    highlights: ["Scenic Riverfront Promenade", "Gated Security & CCTV", "High Rental Yield Potential"],
    price: "₹ 18.5 Lakhs onwards"
  },
  {
    id: "vid-dholera-bhoomi-2",
    title: "Dholera Bhoomi Phase II & Knowledge City Walkthrough",
    subtitle: "High-Growth Residential Plotted Township with Full Amenities",
    category: "Residential Plots",
    zone: "TP 2 Knowledge Corridor",
    duration: "4:50",
    videoUrl: "https://www.youtube.com/embed/WRjG9ETnCz0?autoplay=1&rel=0",
    youtubeId: "WRjG9ETnCz0",
    thumbnail: "https://img.youtube.com/vi/WRjG9ETnCz0/hqdefault.jpg",
    projectSlug: "dholera-bhoomi-phase-2",
    highlights: ["Adjoining 30m DP Road", "Individual Demarcations", "Easy Installment Plans"],
    price: "₹ 16.2 Lakhs onwards"
  },
  {
    id: "vid-commercial-center",
    title: "Nestoria Commercial City Center – High Street Retail & Corporate",
    subtitle: "Prime Business Land on Ahmedabad-Dholera Expressway Corridor",
    category: "Commercial Land",
    zone: "TP 2 Expressway Junction",
    duration: "4:30",
    videoUrl: "https://www.youtube.com/embed/_ecESivkJoI?autoplay=1&rel=0",
    youtubeId: "_ecESivkJoI",
    thumbnail: "https://img.youtube.com/vi/_ecESivkJoI/hqdefault.jpg",
    projectSlug: "commercial-city-center",
    highlights: ["Wide Highway Frontage", "Commercial NA Approved", "Ideal for Hotels & Tech Hubs"],
    price: "₹ 35 Lakhs onwards"
  },
  {
    id: "vid-site-experience",
    title: "VIP Site Visit Experience & Ground Reality Verification",
    subtitle: "See How We Chauffeur Investors Daily from Ahmedabad to Dholera",
    category: "Site Visit Experience",
    zone: "Activation Area & All Projects",
    duration: "5:40",
    videoUrl: "https://www.youtube.com/embed/6GHYBLDWZHo?autoplay=1&rel=0",
    youtubeId: "6GHYBLDWZHo",
    thumbnail: "https://img.youtube.com/vi/6GHYBLDWZHo/hqdefault.jpg",
    projectSlug: "orchid-villa-greens",
    highlights: ["AC Chauffeur Pickup", "Senior Consultant Guided", "Live Project Inspections"],
    price: "100% Free Site Visit"
  }
];

export default function ProjectVideosSlider() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activeModalVideo, setActiveModalVideo] = useState(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sliderRef = useRef(null);

  const categories = [
    { id: "all", label: "All Project Videos" },
    { id: "Residential Plots", label: "Residential Townships" },
    { id: "3D Homes & Villas", label: "3D Villas & Homes" },
    { id: "Infrastructure & Industrial", label: "Tata Fab & Infrastructure" },
    { id: "Commercial Land", label: "Commercial Hubs" },
    { id: "Site Visit Experience", label: "Site Visit Tours" }
  ];

  const filteredVideos = activeCategory === "all" 
    ? projectVideosList 
    : projectVideosList.filter(v => v.category === activeCategory);

  const currentVideo = filteredVideos[activeVideoIndex] || filteredVideos[0];

  // Auto slide effect
  useEffect(() => {
    if (!isAutoPlay || activeModalVideo) return;
    const interval = setInterval(() => {
      setActiveVideoIndex((prev) => (prev + 1) % filteredVideos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay, activeModalVideo, filteredVideos.length]);

  // Reset index when filter changes
  useEffect(() => {
    setActiveVideoIndex(0);
  }, [activeCategory]);

  const handlePrev = () => {
    setActiveVideoIndex((prev) => 
      prev === 0 ? filteredVideos.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveVideoIndex((prev) => 
      (prev + 1) % filteredVideos.length
    );
  };

  return (
    <section id="project-videos" className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Video className="w-3.5 h-3.5 text-blue-400" />
              Live Project Tours & Drone Walkthroughs
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Explore Our Projects in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Motion</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Watch on-ground video walkthroughs, drone fly-throughs, and development updates across all Nestoria Group townships in Dholera SIR.
            </p>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all text-xs font-semibold flex items-center gap-1.5"
              title={isAutoPlay ? "Pause Auto-Slide" : "Play Auto-Slide"}
            >
              {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isAutoPlay ? "Auto-sliding" : "Paused"}</span>
            </button>
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-md cursor-pointer"
              aria-label="Previous video slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-md cursor-pointer"
              aria-label="Next video slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-500"
                  : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:bg-slate-850 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Video Spotlight + Thumbnail Slider Grid */}
        {currentVideo && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
            
            {/* Main Interactive Spotlight Video Card (Left 7 Cols) */}
            <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group">
              <div 
                className="relative aspect-[16/9] w-full bg-slate-950 cursor-pointer overflow-hidden"
                onClick={() => setActiveModalVideo(currentVideo)}
              >
                <img
                  src={currentVideo.thumbnail}
                  alt={currentVideo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Big Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600/90 group-hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-all duration-300 border-2 border-white/40">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-blue-600/90 backdrop-blur-xs text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow">
                    {currentVideo.category}
                  </span>
                  <span className="bg-slate-900/80 backdrop-blur-xs text-slate-200 text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-blue-400" />
                    {currentVideo.zone}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-xs text-slate-300 text-xs px-2.5 py-1 rounded-md">
                  Duration: {currentVideo.duration}
                </div>
              </div>

              {/* Spotlight Info Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      {currentVideo.title}
                    </h3>
                    <span className="text-sm font-extrabold text-blue-400 bg-blue-950/80 px-3 py-1 rounded-xl border border-blue-800/60 flex-shrink-0">
                      {currentVideo.price}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mb-4">
                    {currentVideo.subtitle}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-3 border-y border-slate-800/80 my-4 text-xs text-slate-300">
                    {currentVideo.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => setActiveModalVideo(currentVideo)}
                    className="py-3 px-5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    Watch Video Tour
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openSiteVisitModal(currentVideo.title)}
                      className="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Car className="w-4 h-4 text-blue-400" />
                      Book Site Visit
                    </button>
                    {currentVideo.projectSlug && (
                      <Link
                        to={`/project/${currentVideo.projectSlug}`}
                        className="py-3 px-4 bg-slate-900 hover:bg-slate-800 text-blue-400 hover:text-blue-300 font-bold text-xs rounded-xl border border-slate-800 flex items-center gap-1.5 transition-all"
                      >
                        <span>Project Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Video Playlist Carousel List (Right 5 Cols) */}
            <div className="lg:col-span-5 flex flex-col space-y-3 max-h-[580px] overflow-y-auto pr-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1 pb-1">
                Playlist ({filteredVideos.length} Project Walkthroughs)
              </div>
              {filteredVideos.map((video, idx) => {
                const isSelected = activeVideoIndex === idx;
                return (
                  <div
                    key={video.id}
                    onClick={() => setActiveVideoIndex(idx)}
                    className={`flex items-center gap-3.5 p-3 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-slate-800/90 border-blue-500 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500"
                        : "bg-slate-900/60 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700 text-slate-300"
                    }`}
                  >
                    {/* Video Mini Thumbnail */}
                    <div className="relative w-28 sm:w-32 aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 flex-shrink-0">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          isSelected ? "bg-blue-600 text-white" : "bg-white/80 text-slate-900"
                        }`}>
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-1 right-1 bg-slate-950/80 text-[10px] text-white px-1.5 rounded">
                        {video.duration}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex-1 min-w-0">
                      <span className={`text-[10px] font-bold uppercase tracking-wider block mb-0.5 ${
                        isSelected ? "text-blue-400" : "text-slate-400"
                      }`}>
                        {video.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug">
                        {video.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 truncate mt-1">
                        📍 {video.zone}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* Project Video Slider Pagination Indicators */}
        <div className="flex justify-center items-center gap-2 pt-2">
          {filteredVideos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveVideoIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeVideoIndex === idx ? "w-8 bg-blue-500" : "w-2 bg-slate-800 hover:bg-slate-700"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* FULL VIDEO POPUP MODAL */}
      {activeModalVideo && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveModalVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase text-blue-400 tracking-wider">
                  {activeModalVideo.category} • {activeModalVideo.zone}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-xl">
                  {activeModalVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalVideo(null)}
                className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Iframe Container */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <iframe
                src={activeModalVideo.videoUrl}
                title={activeModalVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 sm:p-5 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Want to inspect this project on the ground in Dholera SIR?
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const title = activeModalVideo.title;
                    setActiveModalVideo(null);
                    openSiteVisitModal(title);
                  }}
                  className="py-2.5 px-5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <Car className="w-4 h-4" />
                  Book Free Chauffeur Site Visit
                </button>
                <a
                  href={`https://wa.me/919213005611?text=Hello%20Nestoria%20Group,%20I%20watched%20the%20video%20for%20${encodeURIComponent(activeModalVideo.title)}%20and%20want%20price%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
