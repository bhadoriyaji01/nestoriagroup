import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles, MapPin, Phone, Mail, Search, ArrowRight, CheckCircle2,
  Train, Sun, Droplets, Wifi, Factory, Leaf, TrendingUp, Building2,
  Handshake, Globe, Send, Loader2, XCircle, ShieldCheck
} from 'lucide-react';
import TabsComponent from '../components/TabsComponent';
import ParallaxSection from '../components/ParallaxSection';
import aboutdholeraimg from '/src/assets/img/aboutdholera.webp';
import futuredholera from '/src/assets/img/futuredholera.webp';
import dholeraconnectivity from '/src/assets/img/dholeraconnectivity.webp';

function Aboutdholera() {
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', propertyType: '1', message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/[\s-]/g, ''))) newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const { AboutdholeraService } = await import('../services/AboutdholeraService');
        const result = await AboutdholeraService.sendAboutdholeraRequest(formData);
        if (result.success) {
          setFormSubmitted(true);
          setFormData({ name: '', email: '', mobile: '', propertyType: '1', message: '' });
        } else {
          alert(result.message || 'There was an error submitting your request. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your request. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img src={futuredholera} alt="Dholera SIR Smart City" className="w-full h-full object-cover object-center scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-blue-950/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 sm:py-24 md:py-32 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-lg shadow-blue-500/10">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span>India's First Planned Smart Industrial City</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 font-condor tracking-tight leading-[1.15] max-w-5xl drop-shadow-lg">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Dholera SIR</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-10 max-w-3xl leading-relaxed drop-shadow-md">
            India's First Planned Smart Industrial City with unlimited growth potential
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 w-full sm:w-auto">
            <Link to="/projects" className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-base py-4 px-8 rounded-xl shadow-2xl shadow-blue-600/40 hover:shadow-2xl hover:shadow-blue-500/60 transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              <span>Explore Opportunities</span>
            </Link>
            <Link to="/contact" className="group bg-slate-900/90 hover:bg-slate-800 text-white border-2 border-blue-500/70 hover:border-blue-300 font-bold text-base py-3.5 px-7 rounded-xl backdrop-blur-md shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-blue-400 group-hover:scale-125 group-hover:text-blue-300 transition-all" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 border-t border-slate-800/80 backdrop-blur-md py-4 hidden md:block">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-4 gap-6 text-center text-white">
            <div><div className="text-lg font-extrabold text-blue-400">920+ sq.km</div><div className="text-[11px] text-slate-400 uppercase tracking-wider">Planned Area</div></div>
            <div><div className="text-lg font-extrabold text-white">100 km</div><div className="text-[11px] text-slate-400 uppercase tracking-wider">From Ahmedabad</div></div>
            <div><div className="text-lg font-extrabold text-emerald-400">DMIC Zone</div><div className="text-[11px] text-slate-400 uppercase tracking-wider">Industrial Corridor</div></div>
            <div><div className="text-lg font-extrabold text-cyan-300">Govt. Backed</div><div className="text-[11px] text-slate-400 uppercase tracking-wider">Smart City Project</div></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl group border border-slate-200 bg-slate-900">
                <img className="w-full h-72 sm:h-96 md:h-[440px] object-cover transform group-hover:scale-105 transition-transform duration-700" src={futuredholera} alt="Overview of Dholera SIR" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="inline-flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                      <Sparkles className="w-3.5 h-3.5" /> Smart City
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold">Discover Dholera SIR</h4>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg border border-slate-100 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-900 font-extrabold text-xs sm:text-sm">Govt. Verified</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5 text-blue-600" /> India's First Smart City
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                Dholera Special Investment <span className="text-blue-600">Region (SIR)</span>
              </h2>
              <div className="h-1 w-20 bg-blue-600 mb-6 rounded-full"></div>
              <p className="text-slate-600 mb-6 text-base sm:text-lg leading-relaxed">
                Dholera SIR is a greenfield industrial planned city near Dholera in Gujarat's Ahmedabad district, around 100 kilometers to the south-west. Spread over more than 920 sq. km, it is a new industrial city being jointly developed by the Government of India and Gujarat.
              </p>
              <p className="text-slate-600 mb-8 text-base sm:text-lg leading-relaxed">
                Dholera is strategically located, well connected with trade gateways and falls in the influence zone of proposed Delhi – Mumbai Industrial Corridor project (DMIC), a joint initiative by the Government of India and Japan.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Strategic Location", icon: MapPin, iconBg: "bg-blue-100 text-blue-600" },
                  { title: "World-Class Infrastructure", icon: Building2, iconBg: "bg-emerald-100 text-emerald-600" },
                  { title: "Government Backed", icon: ShieldCheck, iconBg: "bg-purple-100 text-purple-600" },
                  { title: "Investment Potential", icon: TrendingUp, iconBg: "bg-amber-100 text-amber-600" }
                ].map((item, i) => (
                  <div key={i} className="group flex items-start p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300">
                    <div className={`flex-shrink-0 mr-3.5 p-2.5 rounded-xl ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">{item.title}</span>
                  </div>
                ))}
              </div>
              <Link to="/projects" className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <span>Explore Opportunities</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dholera SIR Tabs Section */}
      <section id='tab-section' className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Globe className="w-3.5 h-3.5 text-blue-600" /> Discover More
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              Explore <span className="text-blue-600">Dholera SIR</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">Discover the vision, infrastructure, connectivity, and investment opportunities in India's first planned smart city</p>
          </div>
          <div className="mb-10"><TabsComponent /></div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5 text-emerald-600" /> Infrastructure
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              Key Features of <span className="text-blue-600">Dholera SIR</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">Dholera SIR is being developed with world-class infrastructure and facilities to create a sustainable and smart urban environment</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Train, title: "Smart Transportation", desc: "Integrated transportation network with metro rail, high-speed rail, expressways, and international airport connectivity.", iconBg: "bg-blue-100 text-blue-600" },
              { icon: Sun, title: "Renewable Energy", desc: "Focus on renewable energy sources including solar parks and wind farms to ensure sustainable power supply.", iconBg: "bg-amber-100 text-amber-600" },
              { icon: Droplets, title: "Water Management", desc: "Advanced water management systems including water treatment plants, recycling facilities, and flood control measures.", iconBg: "bg-cyan-100 text-cyan-600" },
              { icon: Wifi, title: "Digital Connectivity", desc: "High-speed internet connectivity and smart city infrastructure for seamless digital integration.", iconBg: "bg-purple-100 text-purple-600" },
              { icon: Factory, title: "Industrial Zones", desc: "Dedicated industrial zones for various sectors including manufacturing, IT, electronics, and more.", iconBg: "bg-orange-100 text-orange-600" },
              { icon: Leaf, title: "Green Spaces", desc: "Abundant green spaces, parks, and recreational areas for a balanced urban environment.", iconBg: "bg-emerald-100 text-emerald-600" }
            ].map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 p-6 md:p-8 hover:-translate-y-1.5">
                <div className={`inline-flex items-center justify-center p-3 rounded-2xl ${feature.iconBg} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Location Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl group border border-slate-200 bg-slate-900">
                <img className="w-full h-72 sm:h-96 md:h-[440px] object-cover transform group-hover:scale-105 transition-transform duration-700" src={dholeraconnectivity} alt="Strategic Location of Dholera SIR" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="inline-flex items-center gap-1.5 bg-emerald-600/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                      <MapPin className="w-3.5 h-3.5" /> DMIC Zone
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold">Explore Location</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5 text-amber-600" /> Strategic Location
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                Perfectly Positioned for <span className="text-blue-600">Growth</span>
              </h2>
              <div className="h-1 w-20 bg-blue-600 mb-6 rounded-full"></div>
              <p className="text-slate-600 mb-6 text-base sm:text-lg leading-relaxed">
                Dholera SIR is strategically located in the Delhi-Mumbai Industrial Corridor (DMIC), one of the world's largest infrastructure projects. This prime location offers excellent connectivity and access to major markets.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "100 km from Ahmedabad", icon: MapPin, iconBg: "bg-blue-100 text-blue-600" },
                  { title: "30 km from Bhavnagar", icon: MapPin, iconBg: "bg-emerald-100 text-emerald-600" },
                  { title: "Dedicated Freight Corridor", icon: Train, iconBg: "bg-purple-100 text-purple-600" },
                  { title: "Planned International Airport", icon: Globe, iconBg: "bg-amber-100 text-amber-600" }
                ].map((item, i) => (
                  <div key={i} className="group flex items-start p-4 bg-slate-50 rounded-2xl border border-slate-200/80 hover:shadow-md hover:border-blue-300 transition-all duration-300">
                    <div className={`flex-shrink-0 mr-3.5 p-2.5 rounded-xl ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">{item.title}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                The strategic location of Dholera SIR makes it an ideal destination for businesses looking to establish a presence in India's rapidly growing economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Potential Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-amber-600" /> Investment Opportunity
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              Investment <span className="text-blue-600">Potential</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">Dholera SIR offers significant investment opportunities across various sectors, backed by government support and world-class infrastructure</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: TrendingUp, title: "High ROI", desc: "Significant appreciation potential with government backing and planned development.", iconBg: "bg-emerald-100 text-emerald-600" },
              { icon: Building2, title: "Multiple Sectors", desc: "Investment opportunities in residential, commercial, and industrial sectors.", iconBg: "bg-blue-100 text-blue-600" },
              { icon: Handshake, title: "Government Support", desc: "Strong government backing with special incentives for investors.", iconBg: "bg-purple-100 text-purple-600" },
              { icon: Globe, title: "Global Hub", desc: "Positioned to become a global manufacturing and trading hub.", iconBg: "bg-amber-100 text-amber-600" }
            ].map((item, index) => (
              <div key={index} className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 p-6 md:p-8 text-center hover:-translate-y-1.5">
                <div className={`inline-flex items-center justify-center p-3.5 rounded-2xl ${item.iconBg} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h5 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h5>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Form Section */}
      <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            <div className="w-full lg:w-7/12 text-white">
              <div className="inline-flex items-center gap-2 bg-blue-600/25 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
                <Sparkles className="w-4 h-4 text-blue-400" /> Start Your Investment Journey
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Ready to Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Dholera SIR</span>?
              </h2>
              <div className="h-1 w-20 bg-blue-500 mb-6 rounded-full"></div>
              <p className="text-base sm:text-lg mb-10 text-slate-300 leading-relaxed">
                Contact our expert team today to explore premium investment opportunities in Dholera SIR. We'll guide you through every step of your investment journey with personalized solutions and expert advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-2xl shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-1.5 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> Contact Us Now
                </Link>
                <Link to="/projects" className="group bg-slate-900/90 hover:bg-slate-800 text-white border-2 border-blue-500/70 hover:border-blue-300 font-bold py-3.5 px-7 rounded-xl backdrop-blur-md shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex items-center justify-center gap-2">
                  <Search className="w-5 h-5 text-blue-400" /> View Properties
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8 border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 rounded-2xl p-3 mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h5 className="text-xl font-bold text-slate-900">Request Information</h5>
                </div>
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">Thank You!</h3>
                    <p className="text-slate-600">Your request has been submitted. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                        <input type="text" className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm ${errors.name ? "border-red-500 bg-red-50" : "border-slate-200 focus:bg-blue-50"}`} id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
                        {errors.name && <p className="text-red-500 text-xs mt-1.5 flex items-center"><XCircle className="w-3.5 h-3.5 mr-1" />{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="mobile" className="block text-sm font-semibold text-slate-700 mb-2">Mobile *</label>
                        <input type="text" className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm ${errors.mobile ? "border-red-500 bg-red-50" : "border-slate-200 focus:bg-blue-50"}`} id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter mobile number" />
                        {errors.mobile && <p className="text-red-500 text-xs mt-1.5 flex items-center"><XCircle className="w-3.5 h-3.5 mr-1" />{errors.mobile}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                        <input type="email" className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm ${errors.email ? "border-red-500 bg-red-50" : "border-slate-200 focus:bg-blue-50"}`} id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                        {errors.email && <p className="text-red-500 text-xs mt-1.5 flex items-center"><XCircle className="w-3.5 h-3.5 mr-1" />{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="propertyType" className="block text-sm font-semibold text-slate-700 mb-2">Property Type</label>
                        <select className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white transition-all text-sm focus:bg-blue-50" id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleChange}>
                          <option value="1">Residential Plot</option>
                          <option value="2">Commercial Property</option>
                          <option value="3">Industrial Plot</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                        <textarea className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm ${errors.message ? "border-red-500 bg-red-50" : "border-slate-200 focus:bg-blue-50"}`} placeholder="Tell us about your requirements" id="message" name="message" value={formData.message} onChange={handleChange} rows="4"></textarea>
                        {errors.message && <p className="text-red-500 text-xs mt-1.5 flex items-center"><XCircle className="w-3.5 h-3.5 mr-1" />{errors.message}</p>}
                      </div>
                      <div className="sm:col-span-2">
                        <button className="group w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2" type="submit" disabled={isSubmitting}>
                          {isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>) : (<><Send className="w-5 h-5" /> Submit Request</>)}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutdholera;
