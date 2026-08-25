import React from "react";
import achievementBg from "../assets/img/icon/counter-bg-2.webp";
import { motion } from "framer-motion";
import {
  Sparkles, Trophy, Newspaper, ExternalLink, Mail, Award,
  TrendingUp,
} from "lucide-react";

const callouts = [
  { name: "Desk and Office", description: "Work from home accessories", imageSrc: "/src/assets/img/about1.webp", imageAlt: "Desk accessories", href: "#" },
  { name: "Self-Improvement", description: "Journals and note-taking", imageSrc: "/src/assets/img/growth.webp", imageAlt: "Growth tools", href: "#" },
  { name: "Travel", description: "Daily commute essentials", imageSrc: "/src/assets/img/connectivity.webp", imageAlt: "Travel items", href: "#" },
];

function Achievements() {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const awards = [
    { id: 1, title: "Atmanirbhar Face of Bharat Award", organization: "Gujarat Real Estate Awards", year: "2024", description: "Recognized for excellence in developing sustainable and innovative real estate projects in Dholera SIR.", image: "/src/assets/img/Residential-project.webp" },
    { id: 2, title: "Credai Award as a Real Estate Developer", organization: "Exhibition held in Bhavnagar", year: "2022", description: "Awarded for the master planning and execution of Nestoria Green Valley residential township.", image: "/src/assets/img/COMMERCIAL-project.webp" },
    { id: 3, title: "Gujarat Business Glory Award", organization: "Professional Excellence in Real Estate", year: "2022", description: "Recognized for incorporating sustainable practices and eco-friendly technologies.", image: "/src/assets/img/Industrial-project.webp" },
    { id: 4, title: "4th Edition India Business Award (MSME)", organization: "Best Enterprise Of The Year (Real Estate)", year: "2021", description: "Nestoria Business Hub recognized for innovative design and contribution to Dholera SIR.", image: "/src/assets/img/growth.webp" },
  ];

  const milestones = [
    { id: 1, year: "2010", title: "The Beginning of the Success Story", description: "Nestoria Buildcon Pvt. Ltd., one of the fastest-growing real estate companies, has been a symbol of trust and transparency since 2010. Starting in Gwalior, we expanded to Dholera SIR in 2018." },
    { id: 2, year: "2010", title: "Another Step in this Journey", description: "Recognizing the growing demand for genuine real estate solutions, we expanded pan-India to provide the best residential, commercial, and investment options." },
    { id: 3, year: "2018", title: "Go Global", description: "Growing up, we believed the sky was the limit. This inspired us to expand globally, now with a presence in 9 countries and a portfolio of successful projects." },
    { id: 4, year: "2019", title: "Future Goals", description: "Nestoria is paving the way for the future by embracing opportunities in Dholera SIR, one of the most promising smart cities in the world." },
    { id: 5, year: "2020", title: "100+ Acres Under Development", description: "Reached the milestone of having more than 100 acres of land under active development across various projects." },
    { id: 6, year: "2021", title: "Launch of Industrial Projects", description: "Expanded portfolio with the launch of Nestoria Industrial Park, catering to manufacturing and logistics sectors." },
    { id: 7, year: "2022", title: "5000+ Happy Customers", description: "Celebrated the milestone of serving over 5000 satisfied customers across our residential and commercial projects." },
    { id: 8, year: "2023", title: "Strategic Partnerships", description: "Formed strategic alliances with international investors and technology providers to enhance our project offerings." },
  ];

  const pressCoverage = [
    { id: 1, title: "Nestoria Group Leads Investment in Dholera SIR", publication: "The Economic Times", date: "June 15, 2023", excerpt: "Nestoria Group has emerged as one of the leading investors in Dholera SIR.", link: "#" },
    { id: 2, title: "Smart City Development: Nestoria's Sustainable Approach", publication: "Business Standard", date: "March 22, 2023", excerpt: "Nestoria's approach to sustainable development is setting new standards.", link: "#" },
    { id: 3, title: "Real Estate Boom in Dholera SIR", publication: "Gujarat Business Review", date: "November 10, 2022", excerpt: "Nestoria Group is positioned at the forefront of Dholera's real estate development.", link: "#" },
    { id: 4, title: "Nestoria Group CEO on Future of Smart Cities", publication: "CNBC India", date: "August 5, 2022", excerpt: "CEO shares insights on the future of smart cities and vision for Dholera SIR.", link: "#" },
  ];

  return (
    <motion.div initial="initial" animate="animate" variants={pageVariants} className="w-full overflow-hidden bg-slate-50 text-slate-900">
      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 md:py-32 text-white" style={{ backgroundImage: `url(${achievementBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className="absolute inset-0 bg-slate-950/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),_transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <Trophy className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>Excellence & Recognition</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 font-condor tracking-tight leading-[1.15]">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Achievements</span>
            </h1>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Celebrating excellence and milestones in our journey of creating exceptional real estate developments
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#press-coverage" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center flex items-center justify-center gap-2">
                <Newspaper className="w-5 h-5" />
                Press Coverage
              </a>
              <a href="#awards" className="bg-white/5 hover:bg-white/10 text-white font-bold py-3.5 px-8 border border-white/20 hover:border-blue-400/50 rounded-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center flex items-center justify-center gap-2">
                <Award className="w-5 h-5" />
                View Awards
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Awards */}
      <section id="awards" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              Recognition
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Awards & <span className="text-blue-600">Recognition</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {awards.map((award, index) => (
              <motion.div key={award.id} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} className="group">
                <div className="h-full bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative overflow-hidden">
                    <img src={award.image} className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={award.title} />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-3">
                      <h5 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{award.title}</h5>
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ml-2">{award.year}</span>
                    </div>
                    <p className="text-blue-600 font-semibold text-sm mb-2">{award.organization}</p>
                    <p className="text-slate-600 leading-relaxed text-sm">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Callout images */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {callouts.map((callout, index) => (
              <motion.div key={callout.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="group">
                <motion.img alt={callout.imageAlt} src={callout.imageSrc} className="w-full rounded-2xl object-contain group-hover:scale-105 transition-all duration-500 p-2" whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-4xl mx-auto mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <TrendingUp className="w-4 h-4" />
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Key <span className="text-blue-600">Milestones</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-blue-600 hidden md:block"></div>
            {milestones.map((milestone, index) => (
              <motion.div key={milestone.id} initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }} viewport={{ once: true }} className={`flex md:flex-row flex-col md:items-center md:gap-6 relative mb-12 z-10 ${index % 2 === 0 ? "md:justify-start md:pr-[55%]" : "md:justify-end md:pl-[55%]"} group`}>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }} viewport={{ once: true }} className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-sm shadow-xl absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0 transition-all duration-500 group-hover:scale-110 group-hover:shadow-blue-400/50 group-hover:shadow-2xl">
                  {milestone.year}
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 p-6 md:max-w-md w-full mt-16 md:mt-0 transition-all duration-300">
                  <h4 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">{milestone.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{milestone.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Coverage */}
      <section id="press-coverage" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Newspaper className="w-4 h-4" />
              Media Coverage
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Press <span className="text-blue-600">Coverage</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {pressCoverage.map((item, index) => (
              <motion.div key={item.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} className="group">
                <motion.div className="h-full bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 p-6" whileHover={{ y: -3 }}>
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                    <span className="text-blue-600 font-semibold text-sm">{item.publication}</span>
                    <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full">{item.date}</span>
                  </div>
                  <h5 className="text-lg font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">{item.title}</h5>
                  <p className="text-slate-600 mb-5 leading-relaxed text-sm">{item.excerpt}</p>
                  <motion.a href={item.link} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-600/20" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <ExternalLink className="w-4 h-4" />
                    Read Full Article
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Press Inquiries */}
          <div className="mt-12">
            <div className="text-center bg-slate-950 rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Press Inquiries</h3>
              <p className="text-white/60 mb-6">For press inquiries, please contact our media relations team.</p>
              <a href="mailto:info@nestoriagroup.com" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1">
                <Mail className="w-5 h-5" />
                Contact Media Relations
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Achievements;
