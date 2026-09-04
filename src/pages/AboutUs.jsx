import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { getBreadcrumbSchema } from '../utils/SchemaMarkup';
import {
  ShieldCheck, MapPin, ArrowRight, Car, Sparkles,
  Building2, CheckCircle2, Award, Users, Eye, Target,
  Handshake, Scale, Gem, UserCheck, Phone, Video, Play
} from 'lucide-react';
import { openSiteVisitModal } from '../components/SiteVisitModal';
import aboutbanner from '../assets/img/about1.webp';
import headoffice from '../assets/img/headoffice.jpeg';
import shivsirimg from '../assets/img/team/management/shivji.webp';
import mohansirimg from '../assets/img/team/management/mohanji.webp';
import nitinsirimg from '../assets/img/team/management/nitinji.webp';
import dholeradpmap from '../assets/img/icon/dholera-dp-map.webp';

function AboutUs() {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <Seo
        title="About Nestoria Group | Trusted Real Estate Developer in Dholera SIR"
        description="Nestoria Group is Dholera's award-winning real estate developer. Specializing in 100% clear title residential & commercial plots with 100% legal verification."
        keywords="about Nestoria Group, best builder in Dholera, Dholera SIR real estate company, clear title plots developer, trusted Dholera developers, Nestoria Buildcon"
        canonicalUrl="/about"
        schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about' }])}
      />

      {/* Page Hero Header */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img src={aboutbanner} alt="About Nestoria Group" className="w-full h-full object-cover object-center scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/50 to-blue-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            Since 2018 • 6+ Years of Trust in Dholera
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 font-condor tracking-tight leading-[1.15]">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Nestoria Group</span>
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Pioneering ethical, high-growth real estate development in Dholera SIR — India's first platinum greenfield smart city.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <Link to="/contact" className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-base py-4 px-8 rounded-xl shadow-2xl shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
            <Link to="/projects" className="group bg-slate-900/90 hover:bg-slate-800 text-white border-2 border-blue-500/70 hover:border-blue-300 font-bold text-base py-3.5 px-7 rounded-xl backdrop-blur-md shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2">
              <Building2 className="w-5 h-5 text-blue-400" />
              <span>View Properties</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl group border border-slate-200 bg-slate-900">
                <img className="w-full h-72 sm:h-96 md:h-[440px] object-cover transform group-hover:scale-105 transition-transform duration-700" src={aboutbanner} alt="Nestoria Group - Premier Real Estate Developer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="inline-flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      Since 2010 • 15+ Years Legacy
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold">Pioneering Dholera SIR Urban Development</h4>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg border border-slate-100 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-900 font-extrabold text-xs sm:text-sm">Legally Verified</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:pl-2">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  Our Story
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                  Your Trusted <span className="text-blue-600">Partner</span> in Dholera SIR
                </h2>
                <div className="h-1 w-20 bg-blue-600 mb-6 rounded-full"></div>
                <p className="text-slate-600 mb-4 text-base sm:text-lg leading-relaxed">
                  Nestoria Buildcon Pvt. Ltd. is one of the fastest-growing real estate companies with the prime focus on Dholera Special Investment Region. We have been an emblem of trust, transparency, and customer-oriented solutions for 6+ years in Dholera.
                </p>
                <p className="text-slate-600 mb-4 text-base sm:text-lg leading-relaxed">
                  In 2010, we started our journey from Gwalior, Madhya Pradesh. Our passion to help others choose the perfect property and our hard work led us to the path of success.
                </p>
                <p className="text-slate-600 mb-8 text-base sm:text-lg leading-relaxed">
                  In 2018, we began our engagement in Dholera SIR — a roadmap to one of the best smart cities in the world with state-of-the-art facilities and international connectivity.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: "Premium Land Parcels", desc: "Prime NA residential & commercial plots", icon: Gem, iconBg: "bg-blue-100 text-blue-600" },
                    { title: "Strategic Locations", desc: "Direct TP 2, Expressway & Metro access", icon: MapPin, iconBg: "bg-emerald-100 text-emerald-600" },
                    { title: "100% Clear Title", desc: "Instant sub-registrar registry & FSL survey", icon: CheckCircle2, iconBg: "bg-purple-100 text-purple-600" },
                    { title: "Investment Advisory", desc: "Dedicated plot advisory & transparent paperwork", icon: Award, iconBg: "bg-amber-100 text-amber-600" },
                  ].map((item, i) => (
                    <div key={i} className="group flex items-start p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300">
                      <div className={`flex-shrink-0 mr-3.5 p-2.5 rounded-xl ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-800 mb-0.5 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                        <p className="text-slate-500 text-xs leading-normal">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all border border-blue-200/50">
                    <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-1">8,000+</div>
                    <h6 className="text-slate-600 font-semibold text-sm">Happy Clients</h6>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all border border-emerald-200/50">
                    <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 mb-1">50+</div>
                    <h6 className="text-slate-600 font-semibold text-sm">Projects Completed</h6>
                  </div>
                </div>
                <div className="mt-4 bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all border border-amber-200/50">
                  <div className="text-3xl sm:text-4xl font-extrabold text-amber-600 mb-1">1,00,000+</div>
                  <h6 className="text-slate-600 font-semibold text-sm">Visitors & Site Tour Leads</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Video & Drive Gallery */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
        <div className="absolute -top-24 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/30 text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Video className="w-3.5 h-3.5 text-blue-400" />
              Company Media
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
              Watch Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Videos</span>
            </h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Take a virtual tour of the Nestoria Group office and meet the environment behind our property advisory team.
            </p>
          </div>

          <div className="max-w-5xl mx-auto rounded-[28px] overflow-hidden border border-slate-700/80 shadow-2xl shadow-blue-950/40 bg-slate-950">
            <div className="relative aspect-video w-full bg-slate-950">
              <video
                ref={videoRef}
                className="w-full h-full object-cover cursor-pointer"
                playsInline
                preload="auto"
                poster={headoffice}
                title="Nestoria Group Office Tour"
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
              >
                <source src="https://nestoriagroup.com/All_office_Tour.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
              {!isVideoPlaying && (
                <button
                  type="button"
                  onClick={() => videoRef.current?.play()}
                  aria-label="Play Nestoria Group office tour video"
                  className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-600/95 hover:bg-blue-500 text-white shadow-2xl shadow-blue-900/50 flex items-center justify-center transition-transform duration-300 hover:scale-110 animate-pulse"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-current" />
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/30 text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Eye className="w-3.5 h-3.5" />
              Our Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Vision & Mission</span>
            </h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">Guiding principles that drive our business forward and shape our commitment to excellence.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 border border-slate-700/80 hover:border-blue-400/80 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-blue-900/40">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">Our Vision</h3>
              </div>
              <div className="h-1 w-16 bg-blue-500 mb-6 rounded-full"></div>
              <p className="text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">To be the most trusted and preferred real estate developer in Dholera SIR, known for our commitment to quality, transparency, and customer satisfaction.</p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">We envision Dholera SIR as a global manufacturing and trading hub, and we aim to play a pivotal role in its development by providing premium real estate solutions.</p>
            </div>

            <div className="group bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 border border-slate-700/80 hover:border-emerald-400/80 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-emerald-900/40">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-emerald-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-200 transition-colors">Our Mission</h3>
              </div>
              <div className="h-1 w-16 bg-emerald-500 mb-6 rounded-full"></div>
              <p className="text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">To provide premium land parcels and real estate solutions in Dholera SIR, helping investors capitalize on the immense growth potential of India's first planned smart city.</p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">We are committed to maintaining the highest standards of transparency, legal compliance, and customer service, ensuring our clients' investments are secure and profitable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              What We Stand For
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Our <span className="text-blue-600">Core Values</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">The principles that guide our business and relationships, ensuring we deliver exceptional value to our clients.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Handshake, title: "Trust", desc: "We build lasting relationships with our clients based on trust and mutual respect.", badge: "Foundation", badgeColor: "bg-blue-100 text-blue-700" },
              { icon: Scale, title: "Integrity", desc: "We conduct our business with the highest standards of integrity and ethical practices.", badge: "Ethics", badgeColor: "bg-emerald-100 text-emerald-700" },
              { icon: Gem, title: "Excellence", desc: "We strive for excellence in everything we do, from property selection to client service.", badge: "Quality", badgeColor: "bg-purple-100 text-purple-700" },
              { icon: UserCheck, title: "Client Focus", desc: "Our clients' needs and satisfaction are at the center of all our decisions and actions.", badge: "Priority", badgeColor: "bg-amber-100 text-amber-700" },
            ].map((item, i) => (
              <div key={i} className="group bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-2xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 text-center">
                <div>
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-500 group-hover:text-white transition-all duration-300 shadow-xs group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/40">
                      <item.icon className="w-7 h-7" />
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${item.badgeColor} mb-3 inline-block`}>{item.badge}</span>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-blue-700 transition-all duration-300">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              Executive Stewardship
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Our <span className="text-blue-600">Leadership</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-3 mb-4 rounded-full"></div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">Meet the visionary leaders dedicated to your success in Dholera SIR.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "ShivKumar Singh Tomar", role: "Chairman & Founder", tag: "Strategic Vision", image: shivsirimg, badgeColor: "bg-blue-600 text-white", desc: "Dholera is India's first platinum-rated industrial smart city. Shivkumar Singh Tomar leads the company's vision and strategic direction with over 15 years of real estate expertise." },
              { name: "Mohan Singh Tomar", role: "Chief Executive Officer", tag: "Operations & Expansion", image: mohansirimg, badgeColor: "bg-emerald-600 text-white", desc: "Mohan Singh Tomar brings 15 years of sales expertise. His strategic financial planning and risk management skills have been crucial in securing investments for major projects." },
              { name: "Nitin Singh Tomar", role: "Managing Director", tag: "Project Delivery", image: nitinsirimg, badgeColor: "bg-purple-600 text-white", desc: "With over 15 years of experience, Nitin Singh Tomar has led Nestoria Group to become one of the leading developers in Dholera SIR with vision and strategic leadership." },
            ].map((member, i) => (
              <div key={i} className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1.5">
                <div className="relative overflow-hidden bg-slate-100 aspect-[4/5]">
                  <img src={member.image} alt={`${member.name} - ${member.role}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md mb-1.5 ${member.badgeColor}`}>{member.tag}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-100 transition-all duration-300">{member.name}</h3>
                  </div>
                </div>
                <div className="p-5 text-center bg-white border-t border-slate-100">
                  <p className="text-blue-700 font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-2">{member.role}</p>
                  <p className="text-slate-500 text-xs leading-normal">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/team" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 px-8 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-600/40 transition-all duration-300 text-sm group hover:scale-110 hover:-translate-y-1">
              <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Meet Our Full Management Team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Disclaimer</h3>
            </div>
            <div className="h-1 w-20 bg-amber-500 mb-6 rounded-full"></div>
            <div className="text-slate-600 text-sm space-y-4 leading-relaxed">
              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-200/80 text-blue-900 font-medium">
                Nestoria Buildcon Pvt. Ltd. is a rapidly growing real estate company specializing in Dholera Smart City. We have earned a reputation for trust, transparency, and customer-centric solutions over our 15-year presence in the industry.
              </div>
              <p>The content displayed on our website, including images, renderings, copy, and other materials, are purely indicative and artistic in nature. They do not represent actual buildings, landscapes, or facilities.</p>
              <p>Until the final documents are executed, content on this website does not constitute a formal financial commitment or binding legal contract.</p>
              <p>We advise investors to independently verify all details with the Nestoria Buildcon Pvt. Ltd. Sales Team only. We strongly recommend avoiding unauthorized or unverified websites/brokers for information.</p>
              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-amber-900 font-medium flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>This disclaimer is intended to provide general information and should not be considered legal advice. Please consult legal professionals for specific clarification.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white border-y border-blue-900/40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Dholera SIR Investment Gateway</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white">
              Ready to Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">Dholera SIR</span>?
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg mb-10 max-w-2xl mx-auto text-slate-300 leading-relaxed">
              Contact our expert team today to explore premium investment opportunities. We'll guide you through every step of your investment journey with personalized solutions and expert advice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button onClick={() => openSiteVisitModal("About CTA")} type="button" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-500 hover:via-blue-400 hover:to-blue-600 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-blue-600/40 hover:shadow-2xl hover:shadow-blue-500/60 transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2.5 cursor-pointer duration-300">
                <Car className="w-5 h-5" />
                <span>Book Your Property</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-blue-300/60 font-bold text-sm sm:text-base rounded-2xl backdrop-blur-sm transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2.5 duration-300">
                <Phone className="w-5 h-5 text-blue-300" />
                <span>Contact Us Now</span>
              </Link>
              <Link to="/projects" className="w-full sm:w-auto px-7 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:border-blue-500/60 font-semibold text-sm sm:text-base rounded-2xl transition-all flex items-center justify-center gap-2 hover:scale-105 hover:-translate-y-1 duration-300">
                <Building2 className="w-4 h-4 text-blue-400" />
                <span>Explore Projects</span>
              </Link>
            </div>
            <p className="text-xs text-slate-400 mt-8 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Govt Sanctioned Town Planning | Legally Registered Projects | Free Pick & Drop</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
