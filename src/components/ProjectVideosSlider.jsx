// src/components/ProjectVideosSlider.jsx
import { useState, useEffect } from "react";
import { 
  Play, Video, MapPin, Car, X, CheckCircle2, MessageCircle
} from "lucide-react";
import { openSiteVisitModal } from "./SiteVisitModal";

// High-resolution local Nestoria Group panoramic banner
import skylineBanner from '../assets/img/project/skyline-banner.webp';

// Single featured video walkthrough for Nestoria Group
export const featuredWalkthroughVideo = {
  id: "vid-nestoria-walkthrough",
  title: "Nestoria Group – Dholera SIR Smart City & Township Walkthrough",
  subtitle: "Experience Dholera Special Investment Region • Greenfield Infrastructure, High-Growth TP Corridors & Ground Reality",
  category: "Official Walkthrough",
  zone: "Dholera SIR • TP 1 & TP 2 Smart Corridors",
  duration: "5:25",
  videoUrl: "https://www.youtube.com/embed/PqInsYRqm3c?autoplay=1&rel=0",
  youtubeId: "PqInsYRqm3c",
  youtubeUrl: "https://www.youtube.com/watch?v=PqInsYRqm3c",
  bannerImage: skylineBanner,
  highlights: [
    "5 Mins to ABCD Command Center",
    "100% Clear Title NA Sanctioned Townships",
    "Direct Ahmedabad-Dholera Expressway Corridor"
  ]
};

export default function ProjectVideosSlider({ video = featuredWalkthroughVideo, className = "" }) {
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveModalVideo(null);
      }
    };
    if (activeModalVideo) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalVideo]);

  const currentVideo = video || featuredWalkthroughVideo;

  return (
    <section 
      id="walkthrough" 
      className={`elementor-section elementor-top-section elementor-element elementor-element-17431a1 elementor-section-stretched elementor-section-content-middle elementor-section-boxed py-14 sm:py-20 md:py-24 bg-slate-950 text-white relative overflow-hidden ${className}`}
      data-id="17431a1"
      data-element_type="section"
    >
      {/* Target IDs for smooth anchor navigation */}
      <span id="project-videos" className="absolute -top-24 left-0 pointer-events-none" />

      {/* Atmospheric Background Lighting & Overlay */}
      <div className="elementor-background-overlay absolute inset-0 bg-slate-950/75 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="elementor-container elementor-column-gap-extended container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/30 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-xs">
            <Video className="w-3.5 h-3.5 text-blue-400" />
            Live Project Tour & Drone Walkthrough
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            3D <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">Walk Through</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300/90 mt-3 font-normal">
            Watch real on-ground video tours, master-planned smart city infrastructure, and development updates across Nestoria Group townships in Dholera SIR.
          </p>
        </div>

        {/* Cinematic Walkthrough Popup Video Banner Widget */}
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0adbd36">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div 
              id="walkthrough-widget"
              className="elementor-element elementor-element-ca11dc8 elementor-widget elementor-widget-apus_element_popup_video animated scale" 
              data-id="ca11dc8" 
              data-element_type="widget" 
              data-widget_type="apus_element_popup_video.default"
            >
              <div className="elementor-widget-container">
                <div className="widget-video relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/50 border border-slate-800 bg-slate-900 group">
                  <div className="video-wrapper-inner has-img relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[1920/875] w-full overflow-hidden">
                    
                    {/* Banner Image with smooth hover scale */}
                    <div className="banner-image absolute inset-0">
                      <div className="image-wrapper w-full h-full">
                        <img 
                          loading="lazy" 
                          decoding="async" 
                          src={currentVideo.bannerImage} 
                          alt={currentVideo.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20 pointer-events-none" />

                    {/* Centered Elementor Popup Video Play Button with Animated Concentric Ripples */}
                    <button 
                      type="button"
                      className="popup-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center cursor-pointer group/btn focus:outline-none select-none"
                      onClick={() => setActiveModalVideo(currentVideo)}
                      aria-label={`Play video walkthrough for ${currentVideo.title}`}
                    >
                      <div className="relative flex items-center justify-center">
                        {/* Atmospheric Pulsing Halo Glow */}
                        <span className="absolute -inset-8 sm:-inset-10 md:-inset-12 rounded-full bg-gradient-to-tr from-blue-600/50 via-cyan-400/40 to-indigo-600/45 blur-2xl animate-catchy-halo pointer-events-none" />

                        {/* Concentric Animated Sonic Ripple Waves (Luminous Rings with Glow) */}
                        <span className="absolute inset-0 rounded-full border-2 border-white/95 bg-white/10 animate-catchy-ripple-1 pointer-events-none" />
                        <span className="absolute inset-0 rounded-full border-2 border-cyan-300/90 bg-cyan-400/10 animate-catchy-ripple-2 pointer-events-none" />
                        <span className="absolute inset-0 rounded-full border-2 border-blue-400/80 bg-blue-500/10 animate-catchy-ripple-3 pointer-events-none" />

                        {/* Main Core Play Circle with 3D Depth, Specular Shimmer & Breathing Pulse */}
                        <span className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-b from-white via-slate-50 to-blue-50 text-blue-600 flex items-center justify-center border-4 border-white/95 shadow-2xl transition-all duration-500 transform group-hover/btn:scale-115 group-hover/btn:bg-gradient-to-tr group-hover/btn:from-blue-600 group-hover/btn:via-blue-500 group-hover/btn:to-cyan-400 group-hover/btn:text-white group-hover/btn:border-white group-hover/btn:shadow-[0_0_60px_rgba(56,189,248,0.9)] animate-catchy-breath overflow-hidden">
                          {/* Specular Shimmer Sweep Bar */}
                          <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none animate-catchy-shimmer -skew-x-12" />

                          {/* Centered Play Triangle Icon */}
                          <Play className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 fill-current translate-x-0.5 sm:translate-x-1.5 drop-shadow-md transition-transform duration-300 group-hover/btn:scale-110" />
                        </span>
                      </div>

                      {/* Catchy Pill Label Below Button */}
                      <div className="mt-3.5 sm:mt-4 inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-slate-950/85 group-hover/btn:bg-blue-600 backdrop-blur-md border border-white/25 group-hover/btn:border-blue-400 text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xl transition-all duration-300 transform group-hover/btn:scale-105">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                        </span>
                        <span>Click to Watch 4K Tour</span>
                        <span className="text-blue-300 group-hover/btn:text-blue-100 text-[11px] font-normal hidden sm:inline">({currentVideo.duration})</span>
                      </div>
                    </button>

                    {/* Top Overlay Badge */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/15 text-xs font-semibold text-white shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        {currentVideo.category}
                      </span>
                    </div>

                    {/* Bottom Overlay Info Banner */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 md:p-8 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      <div className="max-w-2xl">
                        <div className="flex items-center gap-2 text-blue-300 text-xs sm:text-sm font-medium mb-1">
                          <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{currentVideo.zone}</span>
                          <span className="text-slate-500">•</span>
                          <span>Duration: {currentVideo.duration}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug drop-shadow-md">
                          {currentVideo.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-1 sm:line-clamp-2 drop-shadow-sm">
                          {currentVideo.subtitle}
                        </p>
                      </div>

                      <div className="flex items-center gap-2.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => setActiveModalVideo(currentVideo)}
                          className="px-4 py-2.5 sm:px-5 sm:py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-600/40 flex items-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5"
                        >
                          <Play className="w-4 h-4 fill-current" />
                          <span>Watch Tour</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => openSiteVisitModal(currentVideo.title)}
                          className="px-4 py-2.5 sm:px-5 sm:py-3 bg-slate-900/85 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-700/80 backdrop-blur-md flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          <Car className="w-4 h-4 text-blue-400" />
                          <span className="hidden sm:inline">Book Visit</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* FULL VIDEO POPUP MODAL (LIGHTBOX) */}
      {activeModalVideo && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveModalVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeModalVideo.title}
        >
          <div 
            className="relative w-full max-w-4xl bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase text-blue-400 tracking-wider block">
                  {activeModalVideo.category} • {activeModalVideo.zone}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-xl">
                  {activeModalVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalVideo(null)}
                className="p-2 text-slate-400 hover:text-white rounded-full bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer shrink-0"
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

            {/* Modal Highlights Bar */}
            {activeModalVideo.highlights && (
              <div className="px-4 sm:px-6 py-2.5 bg-slate-900 border-b border-slate-800/80 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-300">
                {activeModalVideo.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Modal Footer CTA */}
            <div className="p-4 sm:p-5 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
                Want to inspect Nestoria Group townships on the ground in Dholera SIR?
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    const title = activeModalVideo.title;
                    setActiveModalVideo(null);
                    openSiteVisitModal(title);
                  }}
                  className="py-2.5 px-4 sm:px-5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Car className="w-4 h-4" />
                  Book Free Chauffeur Site Visit
                </button>
                <a
                  href={`https://wa.me/919213005611?text=Hello%20Nestoria%20Group,%20I%20watched%20the%20video%20walkthrough%20for%20${encodeURIComponent(activeModalVideo.title)}%20and%20want%20project%20brochure%20and%20layout%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center gap-1.5 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
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
