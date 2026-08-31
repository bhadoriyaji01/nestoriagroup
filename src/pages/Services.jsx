import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { getServiceSchema, getBreadcrumbSchema } from "../utils/SchemaMarkup";
import {
  Home as HomeIcon, Building2, Factory, Search, FileText, TrendingUp,
  ShieldCheck, MapPin, ArrowRight, Car, Sparkles, Phone,
  CheckCircle2, Layers, Users
} from "lucide-react";
import { openSiteVisitModal } from "../components/SiteVisitModal";
import servicebanner from "../assets/img/services.webp";
import residentialimg from "../assets/img/Residential-project.webp";
import commercialimg from "../assets/img/COMMERCIAL-project.webp";
import industrialimg from "../assets/img/Industrial-project.webp";

function Services() {
  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <Seo
        title="Real Estate Services in Dholera SIR | Property Consulting & Land Advisory"
        description="Comprehensive real estate services in Dholera SIR: NA plot acquisition, 30-year legal title search, 3D printed villa construction, government registration & registry support."
        keywords="Dholera real estate services, land legal verification Dholera, buy land advisory Dholera, 3D construction Dholera, property registry Dholera SIR"
        canonicalUrl="/services"
        schemaMarkup={[
          getServiceSchema({
            name: "Dholera SIR Real Estate Advisory & Plot Development",
            description: "End-to-end land acquisition, legal verification, title clearance, and property registration services in Dholera Special Investment Region."
          }),
          getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }])
        ]}
      />
      {/* Hero Header */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img src={servicebanner} alt="Nestoria Group Services" className="w-full h-full object-cover object-center scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/50 to-blue-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            Comprehensive Real Estate Solutions in Dholera SIR
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 font-condor tracking-tight leading-[1.15]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Services</span>
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            End-to-end real estate services for residential, commercial, and industrial investments in India's first smart city.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <Link to="/projects" className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-base py-4 px-8 rounded-xl shadow-2xl shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2">
              <Layers className="w-5 h-5" />
              <span>Explore Projects</span>
            </Link>
            <button onClick={() => openSiteVisitModal("Services Hero")} className="group bg-slate-900/90 hover:bg-slate-800 text-white border-2 border-blue-500/70 hover:border-blue-300 font-bold text-base py-3.5 px-7 rounded-xl backdrop-blur-md shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer">
              <Car className="w-5 h-5 text-blue-400" />
              <span>Book Site Visit</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              What We Offer
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Our <span className="text-blue-600">Services</span> Portfolio
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Nestoria Group, we offer comprehensive real estate services focused on Dholera SIR — providing end-to-end solutions for investors and buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: HomeIcon, title: "Residential Plots", desc: "Premium residential plots in strategic locations within Dholera SIR, perfect for building your dream home or for investment purposes.", tag: "High Appreciation", tagColor: "bg-blue-600/20 text-blue-700 border-blue-500/30", badge: "Starting 100 Sq. Yds" },
              { icon: Building2, title: "Commercial Properties", desc: "Strategic commercial plots in high-growth areas of Dholera SIR, ideal for businesses looking to establish presence in this emerging hub.", tag: "High ROI", tagColor: "bg-emerald-600/20 text-emerald-700 border-emerald-500/30", badge: "Main TP Corridors" },
              { icon: Factory, title: "Industrial Plots", desc: "Large industrial plots in designated zones of Dholera SIR, suitable for manufacturing, warehousing, and industrial operations.", tag: "Infra Ready", tagColor: "bg-purple-600/20 text-purple-700 border-purple-500/30", badge: "Near Tata Fab" },
              { icon: Search, title: "Property Consultation", desc: "Expert consultation to help you identify the right property based on your requirements, budget, and investment goals.", tag: "Expert Advisory", tagColor: "bg-amber-600/20 text-amber-700 border-amber-500/30", badge: "Personalized" },
              { icon: FileText, title: "Legal Assistance", desc: "Comprehensive legal assistance for property documentation, registration, and compliance with local regulations and laws.", tag: "100% Clear Title", tagColor: "bg-rose-600/20 text-rose-700 border-rose-500/30", badge: "NA Sanctioned" },
              { icon: TrendingUp, title: "Investment Advisory", desc: "Strategic investment advisory to help you maximize returns on your real estate investments in Dholera SIR.", tag: "ROI Focused", tagColor: "bg-teal-600/20 text-teal-700 border-teal-500/30", badge: "400%+ Growth" },
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-400/80 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-500 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-600/50">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${item.tagColor}`}>{item.badge}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-all duration-300">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 group-hover:text-blue-700 font-bold text-xs uppercase tracking-wider transition-all duration-300 group-hover:gap-3">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                  <button onClick={() => openSiteVisitModal(`Service - ${item.title}`)} className="text-xs text-slate-400 hover:text-blue-600 font-semibold transition-all cursor-pointer hover:underline">Book Tour</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Plots Detail */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl group border border-slate-200 bg-slate-900">
                <img className="w-full h-72 sm:h-96 md:h-[480px] object-cover transform group-hover:scale-105 transition-transform duration-700" src={residentialimg} alt="Residential Plots in Dholera SIR" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="inline-flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                      <HomeIcon className="w-3.5 h-3.5" />
                      Premium Residential Plots
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <HomeIcon className="w-3.5 h-3.5 text-blue-600" />
                Our Specialty
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                Residential Plots in <span className="text-blue-600">Dholera SIR</span>
              </h2>
              <div className="h-1 w-20 bg-blue-600 mb-6 rounded-full"></div>
              <p className="text-slate-600 mb-6 text-base leading-relaxed">
                Our residential plots offer the perfect opportunity to build your dream home in India's first planned smart city. With various plot sizes, we cater to different needs and budgets.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Prime Locations", desc: "Strategic areas with connectivity", icon: MapPin, iconBg: "bg-blue-100 text-blue-600" },
                  { title: "Clear Titles", desc: "100% NA legal assurance", icon: ShieldCheck, iconBg: "bg-emerald-100 text-emerald-600" },
                  { title: "Flexible Payment", desc: "Easy installment options", icon: TrendingUp, iconBg: "bg-purple-100 text-purple-600" },
                  { title: "High Appreciation", desc: "Value growth guaranteed", icon: CheckCircle2, iconBg: "bg-amber-100 text-amber-600" },
                ].map((item, i) => (
                  <div key={i} className="group flex items-start p-4 bg-slate-50 rounded-2xl border border-slate-200/80 hover:shadow-md hover:border-blue-300 transition-all duration-300">
                    <div className={`flex-shrink-0 mr-3.5 p-2.5 rounded-xl ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-0.5">{item.title}</h4>
                      <p className="text-slate-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 px-7 rounded-2xl shadow-lg shadow-blue-500/25 transition-all text-sm group hover:scale-105 hover:-translate-y-0.5">
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Properties Detail */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-14">
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl group border border-slate-200 bg-slate-900">
                <img className="w-full h-72 sm:h-96 md:h-[480px] object-cover transform group-hover:scale-105 transition-transform duration-700" src={commercialimg} alt="Commercial Properties in Dholera SIR" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="inline-flex items-center gap-1.5 bg-emerald-600/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                      <Building2 className="w-3.5 h-3.5" />
                      Business & Commercial Spaces
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                Business Opportunities
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                Commercial Properties in <span className="text-emerald-600">Dholera SIR</span>
              </h2>
              <div className="h-1 w-20 bg-emerald-600 mb-6 rounded-full"></div>
              <p className="text-slate-600 mb-6 text-base leading-relaxed">
                Excellent opportunities for businesses in this emerging economic hub — from retail spaces to office complexes, we have options to suit various business needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Strategic Business Locations", desc: "Prime commercial areas", icon: MapPin, iconBg: "bg-blue-100 text-blue-600" },
                  { title: "High Footfall Areas", desc: "Maximum customer traffic", icon: Users, iconBg: "bg-emerald-100 text-emerald-600" },
                  { title: "Modern Infrastructure", desc: "Smart city facilities", icon: Layers, iconBg: "bg-purple-100 text-purple-600" },
                  { title: "Growth Potential", desc: "Future value appreciation", icon: TrendingUp, iconBg: "bg-amber-100 text-amber-600" },
                ].map((item, i) => (
                  <div key={i} className="group flex items-start p-4 bg-white rounded-2xl border border-slate-200/80 hover:shadow-md hover:border-emerald-300 transition-all duration-300">
                    <div className={`flex-shrink-0 mr-3.5 p-2.5 rounded-xl ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-0.5">{item.title}</h4>
                      <p className="text-slate-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold py-3.5 px-7 rounded-2xl shadow-lg shadow-emerald-500/25 transition-all text-sm group hover:scale-105 hover:-translate-y-0.5">
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Plots Detail */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl group border border-slate-200 bg-slate-900">
                <img className="w-full h-72 sm:h-96 md:h-[480px] object-cover transform group-hover:scale-105 transition-transform duration-700" src={industrialimg} alt="Industrial Plots in Dholera SIR" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="inline-flex items-center gap-1.5 bg-purple-600/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                      <Factory className="w-3.5 h-3.5" />
                      Industrial Zones & Manufacturing
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <Factory className="w-3.5 h-3.5 text-purple-600" />
                Industrial Growth
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                Industrial Plots in <span className="text-purple-600">Dholera SIR</span>
              </h2>
              <div className="h-1 w-20 bg-purple-600 mb-6 rounded-full"></div>
              <p className="text-slate-600 mb-6 text-base leading-relaxed">
                Designed for manufacturing, warehousing, and industrial operations. Located in designated zones with excellent infrastructure and connectivity within the Delhi-Mumbai Industrial Corridor.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Strategic Industrial Zones", desc: "Prime DMIC locations", icon: MapPin, iconBg: "bg-blue-100 text-blue-600" },
                  { title: "Excellent Connectivity", desc: "Freight corridor access", icon: ArrowRight, iconBg: "bg-emerald-100 text-emerald-600" },
                  { title: "Robust Infrastructure", desc: "Ready utilities & power", icon: ShieldCheck, iconBg: "bg-purple-100 text-purple-600" },
                  { title: "Government Incentives", desc: "Tax benefits & subsidies", icon: CheckCircle2, iconBg: "bg-amber-100 text-amber-600" },
                ].map((item, i) => (
                  <div key={i} className="group flex items-start p-4 bg-slate-50 rounded-2xl border border-slate-200/80 hover:shadow-md hover:border-purple-300 transition-all duration-300">
                    <div className={`flex-shrink-0 mr-3.5 p-2.5 rounded-xl ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-0.5">{item.title}</h4>
                      <p className="text-slate-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white font-bold py-3.5 px-7 rounded-2xl shadow-lg shadow-purple-500/25 transition-all text-sm group hover:scale-105 hover:-translate-y-0.5">
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white border-y border-blue-900/40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Investment Gateway</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white">
              Ready to Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">Dholera SIR</span>?
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg mb-10 max-w-2xl mx-auto text-slate-300 leading-relaxed">
              Our team of experts is ready to guide you through the investment process. Contact us today to schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button onClick={() => openSiteVisitModal("Services CTA")} type="button" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-blue-600/40 hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2.5 cursor-pointer duration-300">
                <Car className="w-5 h-5" />
                <span>Book Free VIP Site Tour</span>
              </button>
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-blue-300/60 font-bold text-sm sm:text-base rounded-2xl backdrop-blur-sm transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2.5 duration-300">
                <Phone className="w-5 h-5 text-blue-300" />
                <span>Contact Us</span>
              </Link>
              <Link to="/about" className="w-full sm:w-auto px-7 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-blue-500/60 font-semibold text-sm sm:text-base rounded-2xl transition-all flex items-center justify-center gap-2 hover:scale-105 hover:-translate-y-1 duration-300">
                <Building2 className="w-4 h-4 text-blue-400" />
                <span>Learn More</span>
              </Link>
            </div>
            <p className="text-xs text-slate-400 mt-8 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Govt Sanctioned | Legally Registered | Free Pick & Drop</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
