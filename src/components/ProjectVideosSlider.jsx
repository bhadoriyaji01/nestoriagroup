// src/components/ProjectVideosSlider.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Play, Video, MapPin, Car, X, CheckCircle2, ArrowRight
} from "lucide-react";
import { openSiteVisitModal } from "./SiteVisitModal";

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
  const [activeModalVideo, setActiveModalVideo] = useState(null);
  const currentVideo = projectVideosList[0];

  return (
    <section id="project-videos" className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 border-b border-slate-800 pb-8">
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

        </div>

        {/* Single poster tile */}
        {currentVideo && (
          <div className="max-w-4xl mx-auto">
            <button
              type="button"
              className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 cursor-pointer group"
              onClick={() => setActiveModalVideo(currentVideo)}
              aria-label={`Play ${currentVideo.title}`}
            >
              <img
                src={currentVideo.thumbnail}
                alt={currentVideo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              {/* Center animated play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-600/90 backdrop-blur-sm text-white flex items-center justify-center shadow-2xl shadow-blue-500/40 border-2 border-white/30
                  hover:bg-blue-500 hover:scale-110 hover:shadow-blue-500/60
                  transition-all duration-300
                  animate-pulse-slow">
                  <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current ml-1" />
                </span>
              </div>

              {/* Minimal badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-slate-950/80 backdrop-blur-sm text-slate-200 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  {currentVideo.zone}
                </span>
                <span className="bg-slate-950/80 backdrop-blur-sm text-slate-300 text-xs px-3 py-1.5 rounded-full">
                  {currentVideo.duration}
                </span>
              </div>
            </button>
          </div>
        )}

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
