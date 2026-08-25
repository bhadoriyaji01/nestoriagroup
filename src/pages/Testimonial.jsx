import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { getReviewSchema } from "../utils/SchemaMarkup";
import { TestimonialService } from "../services/TestimonialService";
import testomonial1 from "/src/assets/img/testomonials/D-P-Kaushik.webp";
import testomonial2 from "/src/assets/img/testomonials/Khargeswar-Brahma.webp";
import testomonial3 from "/src/assets/img/testomonials/Miss.-Arti-Nagpal.webp";
import testomonial4 from "/src/assets/img/testomonials/Mr-CHARANJIT-SINGH.webp";
import testomonial5 from "/src/assets/img/testomonials/Mr-K-C-Anand.webp";
import testomonial6 from "/src/assets/img/testomonials/Mr.-Dayananda-Reddy.webp";
import testomonial7 from "/src/assets/img/testomonials/Shahnawaz-Choudhary.webp";
import testomonial8 from "/src/assets/img/testomonials/Jasbir-Singh-Arora.webp";
import teamDisImg from "/src/assets/img/team/team-dis.webp";
import {
  Sparkles, MessageCircle, Pen, Star, Grid, Home, Building2, Factory,
  TrendingUp, Video, Play, ExternalLink, ArrowRight, CheckCircle2,
  Search, RefreshCw, Send, X, ChevronDown, Quote,
} from "lucide-react";

function Testimonial() {
  const categories = [
    { id: "all", name: "All Testimonials", icon: Grid },
    { id: "residential", name: "Residential Plots", icon: Home },
    { id: "commercial", name: "Commercial Properties", icon: Building2 },
    { id: "industrial", name: "Industrial Plots", icon: Factory },
    { id: "investment", name: "Investment Advisory", icon: TrendingUp },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [playingVideoId, setPlayingVideoId] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const testimonials = [
    { id: 1, name: "Mr. D P Kaushik", position: "Manager, Human Resource Deppt, Govt of India", category: "commercial", rating: 5, testimonial: "Hello guys. If you are planning to buy some property, don't waste your time, just dial Nestoria Group and let them do the rest. You just tell them what you need and sit relaxed. Trust me, you will get the perfect piece of property. I must say, one hundred percent satisfaction.", image: testomonial1 },
    { id: 2, name: "Mr. Khargeswar Brahma", position: "EX. ARMY EME (Junior commissioned officer) Indian ARMY", category: "residential", rating: 5, testimonial: "I would really like to thank the team of Nestoria group for helping me find the best option in Dholera SIR. They understood my requirements and presented me with the best investment option in the Dholera Smart City project. A big thanks to team Nestoria.", image: testomonial2 },
    { id: 3, name: "Miss. Arti Nagpal", position: "Bollywood Actor & Investor", category: "industrial", rating: 4, testimonial: "It's almost Five years since I got a perfect place to my dream home through Nestoria. And I have recommended it to everyone looking for any type of property. Whenever my friends, relatives, or known ones ask me about the property, my call goes to only Nestoria Group.", image: testomonial3 },
    { id: 4, name: "Mr. Charanjit Singh", position: "(RETD.) Manager, RBI", category: "investment", rating: 5, testimonial: "Now I am the owner of a fantastic property in Dholera Smart City. To be honest, I spent around seven months deciding that and I was confused about investing in Dholera SIR. But then the Nestoria group came to help and explained everything about the location in a transparent manner.", image: testomonial4 },
    { id: 5, name: "Mr. K. C. Anand", position: "General Manager, (Retd) RBI", category: "residential", rating: 5, testimonial: "I only explained my requirements and budget to them, and the rest was taken care of by an excellent team of Nestoria. Showcasing only the best possible options really helped me in saving huge time and effort. Really professional.", image: testomonial5 },
    { id: 6, name: "Mr. Dayananda Reddy", position: "MLC Bengaluru & Founder of Dayananda foundation", category: "commercial", rating: 4, testimonial: "It is tedious and demanding to look for the right property while in a job. It needs effort and involves a risk of wrong selection, but Nestoria made it simple for me. It made my experience as cozy as their property.", image: testomonial6 },
    { id: 7, name: "Mr. Shahnawaz Choudhary", position: "Director of Institute of Political Leadership & Political Trainer", category: "investment", rating: 5, testimonial: "As an NRI looking to invest in Indian real estate, I needed a trustworthy partner who could handle everything while I was abroad. Nestoria Group managed the entire process seamlessly - from property selection to legal documentation.", image: testomonial7 },
    { id: 8, name: "Dr. Jasbir Singh Arora", position: "International Trainer, business coach & Motivational speaker.", category: "industrial", rating: 5, testimonial: "Nestoria Group is more than a real estate company. It's a solution provider, working hard to provide you with the best options. It was a great experience with Nestoria to own the right property.", image: testomonial8 },
  ];

  const filteredTestimonials = activeCategory === "all" ? testimonials : testimonials.filter((item) => item.category === activeCategory);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<Star key={i} className={`w-4 h-4 ${i <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />);
    }
    return stars;
  };

  const testimonialSchemas = testimonials.map((t) => getReviewSchema({ author: t.name, rating: t.rating, content: t.testimonial, date: t.date || new Date().toISOString().split("T")[0], title: `${t.name}'s experience with Nestoria Group` }));

  return (
    <div className="overflow-hidden bg-slate-50 text-slate-900">
      <Helmet>
        <title>Client Testimonials - Nestoria Group | Real Estate Developer in Dholera SIR</title>
        <meta name="description" content="Read authentic testimonials from our satisfied clients who have invested in Dholera SIR through Nestoria Group." />
        <meta name="keywords" content="Nestoria Group testimonials, client reviews, Dholera SIR investment reviews" />
        <link rel="canonical" href="https://nestoriagroup.com/testimonial" />
        {testimonialSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15),_transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.1),_transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>Client Success Stories</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 font-condor tracking-tight leading-[1.15]">
              Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Testimonials</span>
            </h1>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Hear what our satisfied clients have to say about their experience with Nestoria Group
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#testimonial-content" className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Read Testimonials
              </a>
              <a href="#testimonial-form" className="group bg-white/5 hover:bg-white/10 text-white font-bold py-3.5 px-8 border border-white/20 hover:border-blue-400/50 rounded-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center backdrop-blur-md flex items-center justify-center gap-2">
                <Pen className="w-5 h-5" />
                Share Your Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Pills */}
      <section id="testimonial-content" className="py-10 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat.id ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredTestimonials.map((t) => (
              <div key={t.id} className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 p-6 lg:p-8">
                <div className="flex items-start mb-5">
                  <div className="relative mr-4">
                    <img src={t.image} alt={t.name} className="w-16 h-16 object-cover rounded-2xl border-2 border-blue-100 group-hover:border-blue-300 transition-colors duration-300" />
                    <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Quote className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors">{t.name}</h5>
                    <p className="text-slate-500 text-sm mb-2">{t.position}</p>
                    <div className="flex gap-0.5">{renderStars(t.rating)}</div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed italic">"{t.testimonial}"</p>
              </div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-white rounded-3xl border border-slate-200 p-12 max-w-md mx-auto">
                <Search className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">No testimonials found</h3>
                <p className="text-slate-500 mb-6">We don't have testimonials in this category yet.</p>
                <button onClick={() => setActiveCategory("all")} className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all">
                  <RefreshCw className="w-4 h-4" />View All
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Video className="w-4 h-4" />
              Video Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Watch Client <span className="text-blue-600">Stories</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { vid: "vid1", ytId: "6GHYBLDWZHo", title: "CEO of the company", desc: "Mohan Singh Tomar, CEO of the company, shares his insights on leadership and business growth.", color: "blue" },
              { vid: "vid2", ytId: "_ecESivkJoI", title: "Owner's Testimonial", desc: "Nitin Singh Tomar, Director of Nestoria Group, envisions transforming real estate.", color: "green" },
            ].map((v) => (
              <div key={v.vid} className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden">
                <div className="relative pb-[56.25%]">
                  {playingVideoId === v.vid ? (
                    <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${v.ytId}?autoplay=1&rel=0`} title={v.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  ) : (
                    <button type="button" aria-label="Play video" onClick={() => setPlayingVideoId(v.vid)} className="absolute inset-0 w-full h-full" style={{ backgroundImage: `url(https://img.youtube.com/vi/${v.ytId}/hqdefault.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                          <Play className="w-6 h-6 text-blue-600 ml-0.5" />
                        </div>
                      </div>
                    </button>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-8 h-8 bg-${v.color === "blue" ? "blue" : "green"}-500 rounded-lg flex items-center justify-center`}>
                      <Video className="w-4 h-4 text-white" />
                    </div>
                    <span className={`text-sm font-semibold text-${v.color === "blue" ? "blue" : "green"}-600`}>Video Testimonial</span>
                  </div>
                  <h5 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">{v.title}</h5>
                  <p className="text-slate-600 leading-relaxed text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <TrendingUp className="w-4 h-4" />
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Investment <span className="text-blue-600">Success</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { img: "/src/assets/img/COMMERCIAL-project.webp", icon: Building2, color: "blue", label: "Commercial", title: "From Empty Plot to Thriving Business Hub", desc: "How Mehta Enterprises transformed their Dholera SIR commercial plot into a profitable business center within 2 years." },
              { img: "/src/assets/img/Residential-project.webp", icon: Home, color: "emerald", label: "Residential", title: "Building a Dream Community", desc: "The journey of 50 families who collectively invested in adjacent plots to create a gated community." },
              { img: "/src/assets/img/Industrial-project.webp", icon: Factory, color: "amber", label: "Industrial", title: "Manufacturing Excellence in Dholera", desc: "How Gujarat Precision Tools established their state-of-the-art manufacturing facility." },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img src={s.img} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" alt={s.title} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-8 h-8 bg-${s.color}-500 rounded-lg flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className={`text-sm font-semibold text-${s.color}-600`}>{s.label}</span>
                    </div>
                    <h5 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">{s.title}</h5>
                    <p className="text-slate-600 leading-relaxed text-sm mb-4">{s.desc}</p>
                    <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700">
                      Read Case Study <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Share Your Story + Form */}
      <section id="testimonial-form" className="py-16 md:py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
                <Pen className="w-4 h-4" />
                Share Your Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Share Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Nestoria Story</span>
              </h2>
              <p className="text-white/70 mb-8 text-lg leading-relaxed">
                We'd love to hear about your experience. Your feedback helps us improve and inspires others.
              </p>
              <ul className="space-y-4 mb-8">
                {["Your testimonial may be featured on our website", "Opportunity to participate in our video testimonial program", "Help others make informed investment decisions"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="overflow-hidden rounded-3xl border border-white/10">
                <img src={teamDisImg} alt="Share Your Story" className="w-full h-auto" />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-white mb-6">Submit Your Testimonial</h3>
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  const fd = { name: e.target.elements.name.value, email: e.target.elements.email.value, phone: e.target.elements.phone.value, propertyType: e.target.elements["property-type"].value, subject: "Testimonial Submission", message: `Testimonial from ${e.target.elements.name.value}\n\nProperty Type: ${e.target.elements["property-type"].value}\n\nTestimonial: ${e.target.elements.testimonial.value}` };
                  try {
                    const result = await TestimonialService.sendTestimonial(fd);
                    if (result.success) { alert("Thank you for your testimonial!"); e.target.reset(); }
                    else { alert(result.message || "Failed to submit. Please try again."); }
                  } catch { alert("Failed to submit. Please try again."); }
                }}>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-white/80 mb-2">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" id="name" placeholder="Your name" required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-white/80 mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" id="email" placeholder="Your email" required />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-white/80 mb-2">Phone</label>
                        <input type="tel" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" id="phone" placeholder="Phone number" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="property-type" className="block text-sm font-semibold text-white/80 mb-2">Property Type</label>
                      <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" id="property-type" required defaultValue="">
                        <option value="" disabled className="text-slate-900">Select property type</option>
                        <option value="residential" className="text-slate-900">Residential Plot</option>
                        <option value="commercial" className="text-slate-900">Commercial Property</option>
                        <option value="industrial" className="text-slate-900">Industrial Plot</option>
                        <option value="investment" className="text-slate-900">Investment Advisory</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="testimonial" className="block text-sm font-semibold text-white/80 mb-2">Your Testimonial</label>
                      <textarea className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[120px]" id="testimonial" rows="4" placeholder="Share your experience" required></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white/80 mb-2">Rate Your Experience</label>
                      <div className="flex gap-1">{[1,2,3,4,5].map((s) => (<Star key={s} className="w-6 h-6 cursor-pointer text-white/30 hover:text-yellow-400 transition-colors" />))}</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="h-5 w-5 rounded border-white/30 bg-white/10 text-blue-600 focus:ring-blue-500 mt-0.5" id="permission" required />
                      <label className="text-sm text-white/70" htmlFor="permission">I give permission to Nestoria Group to use my testimonial on their website and marketing materials</label>
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Submit Testimonial
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
