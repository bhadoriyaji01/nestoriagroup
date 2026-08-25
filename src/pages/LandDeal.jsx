import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LandDealService from '../services/LandDealService';
import Industrialimg from '/src/assets/img/Industrial-project.webp';
import COMMERCIALimg from '/src/assets/img/COMMERCIAL-landdeal.webp';
import Residentialimg from '/src/assets/img/Residential-land.webp';
import {
  Sparkles, ShieldCheck, FileCheck, Stamp, MapPin, Maximize2,
  CheckCircle2, Search, ArrowLeft, Send, Loader2, AlertCircle,
  TrendingUp, MapPinned, Shield, Home, Building2, Factory, Grid,
} from 'lucide-react';

function LandDeal() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", propertyType: "", budget: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9+\-\s()]{10,15}$/.test(formData.phone)) newErrors.phone = "Please enter a valid phone number";
    if (!formData.propertyType) newErrors.propertyType = "Please select a property type";
    if (!formData.budget) newErrors.budget = "Please select a budget range";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true); setError("");
    try {
      const res = await LandDealService.sendLandDealInquiry(formData);
      if (res.success) { setSubmitted(true); setFormData({ name: "", email: "", phone: "", propertyType: "", budget: "", message: "" }); setErrors({}); }
      else { setError(res.message || "Failed to send inquiry."); }
    } catch { setError("Failed to send inquiry."); }
    setLoading(false);
  };

  const landDeals = [
    { id: 1, title: "Premium Residential Land Parcel", location: "Town Planning Scheme 1, Dholera SIR", area: "200 sq. yards", type: "residential", features: ["Corner Plot", "Near Park", "Road Facing", "DMIC Proximity"], description: "Prime residential plot in the heart of Dholera SIR with excellent connectivity.", image: Residentialimg },
    { id: 2, title: "Commercial Land Parcel", location: "Central Business District, Dholera SIR", area: "500 sq. yards", type: "commercial", features: ["Main Road Access", "High Visibility", "Corner Property", "Near Metro Station"], description: "Strategic commercial land ideal for retail, office space, or mixed-use development.", image: COMMERCIALimg },
    { id: 3, title: "Industrial Land Parcel", location: "Industrial Zone, Dholera SIR", area: "1500 sq. yards", type: "industrial", features: ["Near Port Connectivity", "Power Substation", "Water Supply", "Waste Management"], description: "Large industrial land with excellent infrastructure support for manufacturing.", image: Industrialimg },
    { id: 4, title: "Residential Land Package", location: "Residential Zone 2, Dholera SIR", area: "150 sq. yards", type: "residential", features: ["Gated Community", "Park View", "Near School", "24/7 Security"], description: "Affordable residential land in a planned community with modern amenities.", image: Residentialimg },
    { id: 5, title: "Premium Commercial Corner", location: "Town Center, Dholera SIR", area: "300 sq. yards", type: "commercial", features: ["Prime Location", "High Footfall", "Wide Frontage", "Multiple Access"], description: "Prime commercial property at a strategic location for retail or hospitality.", image: COMMERCIALimg },
    { id: 6, title: "Industrial Land with Shed", location: "Manufacturing Hub, Dholera SIR", area: "2000 sq. yards", type: "industrial", features: ["Pre-built Shed", "Heavy Power", "Effluent Treatment", "Logistics Support"], description: "Ready-to-use industrial property with pre-built shed for immediate setup.", image: Industrialimg },
  ];

  const filteredDeals = activeFilter === 'all' ? landDeals : landDeals.filter(deal => deal.type === activeFilter);

  const filterBtns = [
    { id: 'all', label: 'All Properties', icon: Grid },
    { id: 'residential', label: 'Residential', icon: Home },
    { id: 'commercial', label: 'Commercial', icon: Building2 },
    { id: 'industrial', label: 'Industrial', icon: Factory },
  ];

  const inputCls = (field) => `w-full px-4 py-3 bg-white/10 border ${errors[field] ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`;

  return (
    <div className="overflow-hidden bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15),_transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.1),_transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>Premium Land Investment</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 font-condor tracking-tight leading-[1.15]">
              Land <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Deals</span>
            </h1>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover exclusive residential, commercial & industrial land parcels in India's first smart city
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#contact-section" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Inquire Now
              </a>
              <a href="#land-deals" className="bg-white/5 hover:bg-white/10 text-white font-bold py-3.5 px-8 border border-white/20 hover:border-blue-400/50 rounded-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                View Land Deals
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: ShieldCheck, title: "100% Legal Verification", desc: "Every land parcel comes with complete legal verification" },
              { icon: FileCheck, title: "Clear Title", desc: "All properties have clear, marketable title" },
              { icon: Stamp, title: "Government Approved TP Schemes", desc: "Part of government-approved Town Planning Schemes" },
            ].map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{t.title}</h3>
                    <p className="text-slate-500 text-sm">{t.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter + Deals */}
      <section id="land-deals" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Grid className="w-4 h-4" />
              Property Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Available <span className="text-blue-600">Land Deals</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filterBtns.map((fb) => {
              const Icon = fb.icon;
              return (
                <button key={fb.id} onClick={() => setActiveFilter(fb.id)} className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === fb.id ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"}`}>
                  <Icon className="w-4 h-4" />
                  {fb.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredDeals.length > 0 ? filteredDeals.map(deal => (
              <div key={deal.id} className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden flex flex-col">
                <div className="relative overflow-hidden">
                  <img src={deal.image} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" alt={deal.title} />
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">{deal.type.charAt(0).toUpperCase() + deal.type.slice(1)}</span>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">{deal.title}</h3>
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-3">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    {deal.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-3">
                    <Maximize2 className="w-4 h-4 text-blue-500" />
                    {deal.area}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{deal.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {deal.features.map((f, i) => (
                      <span key={i} className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />{f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a href="#contact-section" className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl py-3 transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-0.5">
                    Request Details
                  </a>
                </div>
              </div>
            )) : (
              <div className="col-span-full text-center py-16">
                <div className="bg-white rounded-3xl border border-slate-200 p-12 max-w-md mx-auto">
                  <Search className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-800 mb-3">No properties found</h3>
                  <p className="text-slate-500 mb-6">No properties matching your criteria.</p>
                  <button onClick={() => setActiveFilter('all')} className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all">
                    <ArrowLeft className="w-4 h-4" />View All
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-section" className="py-16 md:py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
                <Send className="w-4 h-4" />
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Interested in Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Land Deals?</span>
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">Fill out the form below and our property experts will get in touch.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-white/70">Your inquiry has been submitted. Our experts will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-400/30 rounded-xl text-red-300">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-white/80 mb-2">Full Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputCls('name')} placeholder="Your full name" />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-white/80 mb-2">Phone *</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputCls('phone')} placeholder="Phone number" />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-white/80 mb-2">Email *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputCls('email')} placeholder="Email address" />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-semibold text-white/80 mb-2">Property Type *</label>
                      <select id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleChange} className={inputCls('propertyType')}>
                        <option value="" disabled className="text-slate-900">Select Property Type</option>
                        <option value="residential" className="text-slate-900">Residential</option>
                        <option value="commercial" className="text-slate-900">Commercial</option>
                        <option value="industrial" className="text-slate-900">Industrial</option>
                      </select>
                      {errors.propertyType && <p className="text-red-400 text-xs mt-1">{errors.propertyType}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-white/80 mb-2">Budget Range *</label>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className={inputCls('budget')}>
                      <option value="" disabled className="text-slate-900">Select Budget Range</option>
                      <option value="below-25" className="text-slate-900">Below ₹25 Lakhs</option>
                      <option value="25-50" className="text-slate-900">₹25 Lakhs - ₹50 Lakhs</option>
                      <option value="50-1cr" className="text-slate-900">₹50 Lakhs - ₹1 Crore</option>
                      <option value="above-1cr" className="text-slate-900">Above ₹1 Crore</option>
                    </select>
                    {errors.budget && <p className="text-red-400 text-xs mt-1">{errors.budget}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white/80 mb-2">Your Requirements</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className={`${inputCls('message')} min-h-[100px]`} placeholder="Tell us about your requirements"></textarea>
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-60">
                    {loading ? (<><Loader2 className="w-5 h-5 animate-spin" />Processing...</>) : (<><Send className="w-5 h-5" />Submit Inquiry</>)}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <TrendingUp className="w-4 h-4" />
              Investment Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Invest in <span className="text-blue-600">Dholera SIR?</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: TrendingUp, color: "blue", title: "High ROI Potential", desc: "Government-backed infrastructure with projected significant land value appreciation." },
              { icon: MapPinned, color: "emerald", title: "Strategic Location", desc: "Located in the Delhi-Mumbai Industrial Corridor with excellent connectivity." },
              { icon: Shield, color: "purple", title: "Secure Investment", desc: "Government-approved with clear titles and transparent processes." },
            ].map((w, i) => {
              const Icon = w.icon;
              return (
                <div key={i} className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 p-8 text-center">
                  <div className={`w-14 h-14 bg-${w.color}-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                    <Icon className={`w-7 h-7 text-${w.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{w.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandDeal;
