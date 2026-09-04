// src/components/ProjectVideosSlider.jsx
import { useRef, useState, useEffect } from "react";
import { 
  Play, Video, MapPin, Car, X, CheckCircle2, MessageCircle
} from "lucide-react";
import { openSiteVisitModal } from "./SiteVisitModal";

// Local project layout used as the walkthrough poster
import atulyamLayout from '../assets/img/project/atulyam-layout.webp';

// Single featured video walkthrough for Nestoria Group
export const featuredWalkthroughVideo = {
  id: "vid-nestoria-walkthrough",
  title: "Nestoria Group – Dholera SIR Smart City & Township Walkthrough",
  subtitle: "Experience Dholera Special Investment Region • Greenfield Infrastructure, High-Growth TP Corridors & Ground Reality",
  category: "Official Walkthrough",
  zone: "Dholera SIR • TP 1 & TP 2 Smart Corridors",
  duration: "5:25",
  videoUrl: "https://nestoriagroup.com/atulyam-intro.mp4",
  bannerImage: atulyamLayout,
  highlights: [
    "5 Mins to ABCD Command Center",
    "100% Clear Title NA Sanctioned Townships",
    "Direct Ahmedabad-Dholera Expressway Corridor"
  ]
};

export default function ProjectVideosSlider({ video = featuredWalkthroughVideo, className = "" }) {
  const [activeModalVideo, setActiveModalVideo] = useState(null);
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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
                          <video
                            ref={videoRef}
                            src={currentVideo.videoUrl}
                          alt={currentVideo.title}
                            className="w-full h-full object-contain cursor-pointer"
                            playsInline
                            preload="auto"
                            poster={currentVideo.bannerImage}
                            onClick={() => {
                              if (videoRef.current?.paused) {
                                videoRef.current.play();
                              } else {
                                videoRef.current?.pause();
                              }
                            }}
                            onPlay={() => setIsVideoPlaying(true)}
                            onPause={() => setIsVideoPlaying(false)}
                            onEnded={() => setIsVideoPlaying(false)}
                          />
                      </div>
                    </div>

                    {/* Dark Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20 pointer-events-none" />

                    {/* Centered Elementor Popup Video Play Button with Animated Concentric Ripples */}
                    {!isVideoPlaying && (
                    <button
                      type="button"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-600/95 hover:bg-blue-500 text-white shadow-2xl shadow-blue-900/50 flex items-center justify-center transition-transform duration-300 hover:scale-110 animate-pulse cursor-pointer"
                      onClick={() => videoRef.current?.play()}
                      aria-label={`Play video walkthrough for ${currentVideo.title}`}
                    >
                      <Play className="w-9 h-9 sm:w-10 sm:h-10 ml-1 fill-current" />

                    </button>
                    )}

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

            {/* Video Player Container */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <video
                src={activeModalVideo.videoUrl}
                title={activeModalVideo.title}
                className="w-full h-full border-0"
                controls
                autoPlay
                playsInline
                preload="auto"
                poster={activeModalVideo.bannerImage}
              />
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
                  Book Your Property
                </button>
                <a
                  href={`https://wa.me/919274411712?text=Hello%20Nestoria%20Group,%20I%20watched%20the%20video%20walkthrough%20for%20${encodeURIComponent(activeModalVideo.title)}%20and%20want%20project%20brochure%20and%20layout%20details.`}
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
