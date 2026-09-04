import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { getBreadcrumbSchema } from "../utils/SchemaMarkup";
import { openSiteVisitModal } from "../components/SiteVisitModal";
import {
  Sparkles,
  MapPin,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  ArrowRight,
  Grid,
  Car,
  Maximize2,
  ExternalLink,
  AlertCircle,
} from "lucide-react";

import eventNews1 from "../assets/img/news1.jpeg";
import eventNews2 from "../assets/img/news2.jpeg";
import eventNews3 from "../assets/img/news3.jpeg";
import eventNews4 from "../assets/img/news4.jpeg";
import eventNews5 from "../assets/img/news5.jpeg";
import eventNews6 from "../assets/img/news6.jpeg";
import mediaEvent1 from "../assets/img/media-1.webp";
import mediaEvent2 from "../assets/img/media.webp";
import teamDis from "../assets/img/team/team-dis.webp";

const EVENTS_API_URL = import.meta.env.DEV
  ? "/api/events"
  : "https://events.nestoriagroup.com/api/events.php";

// Default fallback images mapping
const fallbackImages = {
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

const getEventImage = (item) => {
  const imageValue = item?.image || item?.imageUrl || item?.img || item?.mediaUrl || item?.photo || item?.url;

  if (typeof imageValue === "string" && imageValue.trim()) {
    const normalized = imageValue.trim();

    if (fallbackImages[normalized]) {
      return fallbackImages[normalized];
    }

    const isUrl = /^(https?:\/\/|\/|\.\/|\.\.\/|data:image\/)/i.test(normalized);
    const isLocalAssetImport = !normalized.startsWith("http") && !normalized.startsWith("blob:");

    if (isUrl || isLocalAssetImport) {
      return normalized;
    }
  }

  return null;
};

const normalizeEventItem = (item, index) => ({
  id: item?.id ?? `${item?.title ?? "event"}-${index}`,
  title: item?.title || item?.name || `Event ${index + 1}`,
  category: item?.category || item?.eventType || "conclaves",
  categoryLabel: item?.categoryLabel || item?.category || item?.eventType || "Event",
  location: item?.location || item?.city || "Dholera SIR",
  image: getEventImage(item),
  badge: item?.badge || item?.status || "Featured",
  tagColor: item?.tagColor || "bg-blue-600",
  desc: item?.desc || item?.description || "Event details coming soon.",
  registrationUrl: item?.registrationUrl || item?.url || item?.link || "",
  type: item?.type || item?.status || "existing",
});

const getEventsPayload = (data) => {
  if (Array.isArray(data)) {
    return data[0] || {};
  }

  return data || {};
};

function EventsGallery() {
  const [existingEvents, setExistingEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [galleryType, setGalleryType] = useState("existing");
  const [galleryCategory, setGalleryCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch(EVENTS_API_URL, {
            headers: { Accept: "application/json" },
          });

        if (!response.ok) {
          throw new Error(`Failed to fetch events (${response.status})`);
        }

        const contentType = response.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
          throw new Error("Events API returned a non-JSON response.");
        }

        const data = await response.json();
        const events = getEventsPayload(data);

        if (!events || !Array.isArray(events.existingEvents) || !Array.isArray(events.upcomingEvents)) {
          throw new Error("Events API returned an invalid response.");
        }

        const existingData = events.existingEvents;
        const upcomingData = events.upcomingEvents;

        const existing = existingData.map((event, index) => normalizeEventItem(event, index));
        const upcoming = upcomingData.map((event, index) => normalizeEventItem(event, index));

        if (isMounted) {
          setExistingEvents(existing);
          setUpcomingEvents(upcoming);
          setError(null);
        }
      } catch (err) {
        console.error("Error fetching events:", err);

        if (isMounted) {
          setError(err.message || "Unable to load events from the API.");
          setExistingEvents([]);
          setUpcomingEvents([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);


  const galleryItems = galleryType === "upcoming" ? upcomingEvents : existingEvents;
  const filteredItems =
    galleryType === "upcoming" || galleryCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === galleryCategory);

  return (
    <div className="bg-white text-slate-900">
      <Seo
        title="Events & Functions Gallery | Nestoria Group Dholera SIR"
        description="Explore Nestoria Group's event and function gallery featuring investor conclaves, bhoomi pujan ceremonies, festive celebrations, and VIP delegation meets."
        keywords="Dholera SIR events gallery, Nestoria Group investor conclave, Dholera bhoomi pujan, corporate functions gallery, VIP meetings Dholera"
        canonicalUrl="/events-gallery"
        schemaMarkup={getBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Events & Functions Gallery", url: "/events-gallery" },
        ])}
      />

      <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src={eventNews1}
            alt="Events & Functions Gallery"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-blue-950/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            Corporate Celebrations & Landmark Events
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 font-condor tracking-tight leading-[1.15]">
            Events & Functions <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Gallery</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            A visual journey through investor conclaves, project launches, festive celebrations, cultural gatherings, and the milestones that shape Nestoria Group in Dholera SIR.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Events Snapshot
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Our <span className="text-blue-600">Moments</span> in Motion
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-3 mb-4 rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Glimpses of our landmark investor conclaves, auspicious Bhoomi Pujan foundation ceremonies, leadership awards, festive celebrations, and VIP delegation meets.
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-slate-600 font-semibold">Loading events...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="flex flex-col items-center justify-center py-16 bg-red-50 rounded-2xl border border-red-200 mb-8">
              <AlertCircle className="w-12 h-12 text-red-600 mb-4" />
              <p className="text-red-800 font-semibold mb-2">Unable to Load Events</p>
              <p className="text-red-600 text-sm">{error}</p>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-4 px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg text-sm transition-all"
              >
                Retry
              </button>
            </div>
          )}

          {/* Events Display */}
          {!loading && !error && (
            <>
          <div className="flex items-center justify-center gap-2 mb-5">
            {[
              { id: "existing", label: "Existing Events", count: existingEvents.length },
              { id: "upcoming", label: "Upcoming Events", count: upcomingEvents.length },
            ].map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => {
                  setGalleryType(type.id);
                  setGalleryCategory("all");
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  galleryType === type.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 shadow-xs"
                }`}
              >
                <span>{type.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    galleryType === type.id ? "bg-blue-800 text-blue-100" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {type.count}
                </span>
              </button>
            ))}
          </div>

          {galleryType === "existing" && (
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
              {[
                { id: "all", label: "All Events & Functions", count: existingEvents.length },
                { id: "conclaves", label: "Investor Conclaves", count: existingEvents.filter((item) => item.category === "conclaves").length },
                { id: "ceremonies", label: "Bhoomi Pujan & Launches", count: existingEvents.filter((item) => item.category === "ceremonies").length },
                { id: "awards", label: "Awards & Felicitations", count: existingEvents.filter((item) => item.category === "awards").length },
                { id: "celebrations", label: "Festive & Galas", count: existingEvents.filter((item) => item.category === "celebrations").length },
                { id: "delegations", label: "VIP Delegations & Meets", count: existingEvents.filter((item) => item.category === "delegations").length },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setGalleryCategory(cat.id);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    galleryCategory === cat.id
                      ? "bg-slate-800 text-white shadow-lg shadow-slate-800/30 scale-105"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 shadow-xs"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      galleryCategory === cat.id ? "bg-slate-600 text-slate-100" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-slate-200/80 bg-slate-900"
                role="button"
                tabIndex={0}
                aria-label={`Open ${item.title}`}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setLightboxIndex(index);
                  }
                }}
              >
                <img
                  src={getEventImage(item)}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span className={`${item.tagColor} text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md backdrop-blur-xs flex items-center gap-1`}>
                    <Sparkles className="w-3 h-3" />
                    {item.badge}
                  </span>

                  <span className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 flex flex-col justify-end">
                  <div className="flex items-center gap-1.5 text-blue-300 text-xs font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>

                  <h3 className="text-white font-bold text-sm sm:text-base md:text-lg leading-snug group-hover:text-blue-200 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {galleryType === "upcoming" && (
                    <a
                      href={item.registrationUrl || undefined}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className={`mt-3 inline-flex w-fit items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                        item.registrationUrl
                          ? "bg-white text-blue-700 hover:bg-blue-50"
                          : "bg-slate-500/70 text-slate-300 cursor-not-allowed"
                      }`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {item.registrationUrl ? "Register Now" : "Form Link Pending"}
                    </a>
                  )}

                  <p className="text-slate-300 text-xs mt-1.5 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-slate-700 font-semibold">No events found in this category.</p>
              <p className="text-slate-500 text-sm mt-1">Try selecting a different category or event type.</p>
            </div>
          )}

          {lightboxIndex !== null &&
            createPortal(
            <div
              className="fixed inset-0 z-[10000] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-fade-in"
              onClick={() => setLightboxIndex(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Event image viewer"
            >
              <div
                className="relative w-full max-w-6xl h-[calc(100dvh-1rem)] sm:h-[calc(100dvh-2rem)] bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-slate-800 text-white shrink-0">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400">
                      Event Photo {lightboxIndex + 1} of {filteredItems.length}
                    </span>
                    <span className="text-[11px] bg-blue-600/30 text-blue-300 border border-blue-500/40 px-2.5 py-0.5 rounded-full font-semibold">
                      {filteredItems[lightboxIndex].categoryLabel}
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

                <div className="relative flex-1 min-h-0 bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={getEventImage(filteredItems[lightboxIndex])}
                    alt={filteredItems[lightboxIndex].title}
                    className="max-w-full max-h-full object-contain mx-auto"
                  />

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-blue-600 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg cursor-pointer hover:scale-125 hover:shadow-xl hover:shadow-blue-600/50 duration-300"
                    aria-label="Previous Image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-blue-600 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-lg cursor-pointer hover:scale-125 hover:shadow-xl hover:shadow-blue-600/50 duration-300"
                    aria-label="Next Image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shrink-0">
                  <div>
                    <div className="flex items-center gap-1.5 text-blue-400 text-xs font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{filteredItems[lightboxIndex].location}</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {filteredItems[lightboxIndex].title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                      {filteredItems[lightboxIndex].desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
                    <a
                      href={filteredItems[lightboxIndex].registrationUrl || undefined}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => {
                        if (!filteredItems[lightboxIndex].registrationUrl) {
                          event.preventDefault();
                        }
                      }}
                      className={`flex-1 sm:flex-none py-2.5 px-5 font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 duration-300 ${
                        filteredItems[lightboxIndex].registrationUrl
                          ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white hover:shadow-xl hover:scale-105 cursor-pointer"
                          : "bg-slate-700 text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      {filteredItems[lightboxIndex].registrationUrl ? "Register Now" : "Registration Link Pending"}
                    </a>
                    <a
                      href={filteredItems[lightboxIndex].image}
                      download={`nestoria-event-${filteredItems[lightboxIndex].id}.jpeg`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center justify-center"
                      title="Open Full Image in New Tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            , document.body
            )}
            </>
          )}

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Link
              to="/media"
              className="inline-flex items-center gap-2 py-3.5 px-7 bg-white hover:bg-blue-50 text-blue-700 font-bold text-sm rounded-2xl border border-slate-300 hover:border-blue-300 shadow-sm hover:shadow-md transition-all group hover:scale-105 hover:-translate-y-0.5 duration-300"
            >
              <Grid className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <span>View Full Media & News Coverage</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            <button
              type="button"
              onClick={() => openSiteVisitModal("Gallery Grid Section")}
              className="inline-flex items-center gap-2 py-3.5 px-7 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-600/40 transition-all cursor-pointer hover:scale-110 hover:-translate-y-1 duration-300"
            >
              <Car className="w-4 h-4" />
              <span>Schedule Free Site Tour with Driver</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventsGallery;
