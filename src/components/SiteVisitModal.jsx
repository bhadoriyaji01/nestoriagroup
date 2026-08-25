// src/components/SiteVisitModal.jsx
import React, { useState, useEffect } from "react";
import { 
  X, Car, Calendar, MapPin, Phone, User, Users, 
  CheckCircle2, Sparkles, ShieldCheck, Clock, ExternalLink 
} from "lucide-react";
import { allProjects } from "../data/projectsData";

export const openSiteVisitModal = (projectData = null) => {
  window.dispatchEvent(
    new CustomEvent("open-site-visit-modal", { detail: { project: projectData } })
  );
};

export default function SiteVisitModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    quickDate: "Tomorrow",
    pickupLocation: "Ahmedabad SG Highway Office",
    guests: "2 Persons",
    preferredTime: "10:00 AM (Morning Tour)",
  });

  useEffect(() => {
    const handleOpen = (e) => {
      if (e.detail?.project) {
        setSelectedProject(
          typeof e.detail.project === "string" 
            ? e.detail.project 
            : e.detail.project.title || ""
        );
      }
      setIsConfirmed(false);
      setIsOpen(true);
    };

    window.addEventListener("open-site-visit-modal", handleOpen);
    return () => window.removeEventListener("open-site-visit-modal", handleOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setIsConfirmed(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please provide your name and phone number for vehicle pickup coordination.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 400);
  };

  const getWhatsAppMessage = () => {
    const proj = selectedProject || "General Dholera SIR Tour & Projects";
    const dateText = formData.date || formData.quickDate;
    const msg = `Hello Nestoria Group! I would like to confirm my Free Guided VIP Site Visit.%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Date:* ${encodeURIComponent(dateText)}%0A*Pickup:* ${encodeURIComponent(formData.pickupLocation)}%0A*Project of Interest:* ${encodeURIComponent(proj)}%0A*Guests:* ${encodeURIComponent(formData.guests)}%0A%0APlease assign my tour manager and share vehicle details.`;
    return `https://wa.me/919213005611?text=${msg}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-blue-500/30 text-blue-200 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            100% Free VIP Chauffeur Service
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Book Your Guided Dholera Site Visit
          </h3>
          <p className="text-xs text-blue-200 mt-1">
            Complimentary AC vehicle pickup from Ahmedabad, guided tour of ABCD Command Hub & verified townships.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isConfirmed ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-slate-900">
                  Site Visit Request Received!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>! Our VIP Hospitality Coordinator is reviewing your slot for <strong>{formData.date || formData.quickDate}</strong> and will call you on <strong>{formData.phone}</strong>.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-left text-xs space-y-1.5 text-slate-700">
                <div className="font-bold text-blue-800 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  Your Booking Summary:
                </div>
                <div>📍 <strong>Pickup Point:</strong> {formData.pickupLocation}</div>
                <div>📅 <strong>Preferred Date:</strong> {formData.date || formData.quickDate} ({formData.preferredTime})</div>
                <div>👥 <strong>Group Size:</strong> {formData.guests}</div>
                <div>🏢 <strong>Project Focus:</strong> {selectedProject || "All Dholera TP 2 Townships"}</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Confirm on WhatsApp
                </a>
                <button
                  onClick={handleClose}
                  className="py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile / WhatsApp No. *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Quick Date Selector & Custom Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                  <span>Select Visit Date</span>
                  <span className="text-[10px] text-blue-600 font-semibold">Tours operate daily</span>
                </label>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {["Tomorrow", "This Saturday", "This Sunday"].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setFormData({ ...formData, quickDate: d, date: "" })}
                      className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all ${
                        formData.quickDate === d && !formData.date
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value, quickDate: "" })}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Pickup Location */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  >
                    <option value="Ahmedabad SG Highway Office">Ahmedabad - Satellite Corporate Office (Sarthik Annexe)</option>
                    <option value="Ahmedabad Airport (SVPIA)">Ahmedabad Airport (SVPIA Arrivals Terminal)</option>
                    <option value="Kalupur Railway Station">Ahmedabad Kalupur Railway Station</option>
                    <option value="Directly at Dholera ABCD Hub">Directly meeting at Dholera ABCD Hub</option>
                  </select>
                </div>
              </div>

              {/* Project of Interest & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project of Interest
                  </label>
                  <select
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  >
                    <option value="">All Projects & Smart City Tour</option>
                    {allProjects.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title} ({p.zone})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Number of Visitors
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                    >
                      <option value="1 Person (Solo)">1 Person</option>
                      <option value="2 Persons (Couple)">2 Persons</option>
                      <option value="3-4 Persons (Family)">3-4 Persons</option>
                      <option value="5+ Persons (Group)">5+ Persons (Group Tour)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Car className="w-4 h-4" />
                {isSubmitting ? "Reserving Slot..." : "Confirm Free Guided Site Visit"}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero charges • No investment commitment required</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
