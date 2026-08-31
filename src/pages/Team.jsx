import React, { useState } from "react";
import Seo from "../components/Seo";
import { getBreadcrumbSchema } from "../utils/SchemaMarkup";
import {
  Sparkles, Users, Lightbulb, Award, Handshake, ArrowRight,
  X, Maximize2, Mail, Briefcase
} from "lucide-react";
import kuldeepSoniImg from "../assets/img/team/sales/Kuldeepsoni.webp";
import ankitjiiImg from "../assets/img/team/sales/ankitji.webp";
import arvindjiiImg from "../assets/img/team/sales/arvindji.webp";
import devendrajiiImg from "../assets/img/team/sales/devendraji.webp";
import ramendrajiiImg from "../assets/img/team/sales/ramendraji.webp";
import jagdishjiiImg from "../assets/img/team/sales/jagdishji.webp";
import garimajiiImg from "../assets/img/team/management/garimaji0.webp";
import bhavnajiImg from "../assets/img/team/management/bhavnaji.webp";
import nitinjiImg from "../assets/img/team/management/nitinji.webp";
import mohanjiImg from "../assets/img/team/management/mohanji.webp";
import shivjiImg from "../assets/img/team/management/shivji.webp";
import teamBg from "../assets/img/icon/counter-bg-2.webp";
import teamHandImg from "../assets/img/team/Team-Hand.webp";
import teamDiscusImg from "../assets/img/team/team-discus.webp";
import teamCircleImg from "../assets/img/team/team-circle.webp";
import workingHardImg from "../assets/img/team/Working-hard.webp";

function Team() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogImage, setDialogImage] = useState("");
  const [dialogAlt, setDialogAlt] = useState("");

  const leadershipTeam = [
    { id: 1, name: "Shivkumar Singh Tomar", position: "Chairman", bio: "Shivkumar Singh Tomar is the Chairman of Nestoria Group. He has over 15 years of experience in the real estate industry. He has been responsible for leading the company to its current position.", image: shivjiImg, socialLinks: { email: "shiv.tomar@nestoriagroup.com" } },
    { id: 2, name: "Mohan Singh Tomar", position: "Chief Executive Officer", bio: "Mohan Singh Tomar brings 15 years of Sales expertise to Nestoria Group. His strategic financial planning and risk management skills have been crucial in securing investments for our major development projects.", image: mohanjiImg, socialLinks: { email: "mohan.tomar@nestoriagroup.com" } },
    { id: 3, name: "Nitin Singh Tomar", position: "Managing Director", bio: "With over 15 years of experience in real estate development, Nitin Singh Tomar has led Nestoria Group to become one of the leading developers in Dholera SIR.", image: nitinjiImg, socialLinks: { email: "nitin.tomar@nestoriagroup.com" } },
  ];

  const openDialog = (image, alt) => {
    setDialogImage(image); setDialogAlt(alt); setIsDialogOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeDialog = () => { setIsDialogOpen(false); document.body.style.overflow = 'auto'; };

  React.useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape' && isDialogOpen) closeDialog(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isDialogOpen]);

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <Seo
        title="Leadership & Management Team | Nestoria Group Dholera SIR"
        description="Meet the visionary leadership and property investment specialists at Nestoria Group driving sustainable, legally approved township development in Dholera SIR."
        keywords="Nestoria Group leadership, Shivkumar Singh Tomar, Mohan Singh Tomar, real estate team Dholera, Nestoria management"
        canonicalUrl="/team"
        schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Our Team', url: '/team' }])}
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img src={teamBg} alt="Nestoria Team" className="w-full h-full object-cover object-center scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-blue-950/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 sm:py-24 md:py-32 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
            <Users className="w-4 h-4 text-blue-400 animate-pulse" />
            <span>The People Behind Nestoria</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 font-condor tracking-tight leading-[1.15] max-w-5xl drop-shadow-lg">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Team</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 max-w-3xl leading-relaxed drop-shadow-md">
            Meet the dedicated professionals behind Nestoria Group's success in Dholera SIR
          </p>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-blue-600" /> Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              Leadership <span className="text-blue-600">Team</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">The visionaries guiding Nestoria Group towards excellence and innovation in Dholera SIR</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {leadershipTeam.map((leader) => (
              <div key={leader.id} className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden hover:-translate-y-1.5">
                <div className="relative overflow-hidden">
                  <img src={leader.image} className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700" alt={leader.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a href={`mailto:${leader.socialLinks.email}`} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-all">
                      <Mail className="w-4 h-4" /> Contact
                    </a>
                  </div>
                </div>
                <div className="p-6 md:p-8 text-center">
                  <h5 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">{leader.name}</h5>
                  <p className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wider">{leader.position}</p>
                  <p className="text-slate-500 leading-relaxed text-sm">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-5/12">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Our Culture
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                Our <span className="text-blue-600">Company Culture</span>
              </h2>
              <div className="h-1 w-20 bg-blue-600 mb-6 rounded-full"></div>
              <p className="text-slate-600 mb-8 text-base sm:text-lg leading-relaxed">
                At Nestoria Group, we foster a culture of innovation, integrity, and excellence. We believe in creating an environment where our team members can thrive professionally and personally.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Users, title: "Collaborative", desc: "We work together across departments to achieve common goals.", iconBg: "bg-blue-100 text-blue-600" },
                  { icon: Lightbulb, title: "Innovation", desc: "We encourage creative thinking and new approaches.", iconBg: "bg-amber-100 text-amber-600" },
                  { icon: Award, title: "Excellence", desc: "We strive for the highest standards in all endeavors.", iconBg: "bg-purple-100 text-purple-600" },
                  { icon: Handshake, title: "Integrity", desc: "We conduct business with honesty and transparency.", iconBg: "bg-emerald-100 text-emerald-600" }
                ].map((item, i) => (
                  <div key={i} className="group flex items-start p-4 bg-slate-50 rounded-2xl border border-slate-200/80 hover:shadow-md hover:border-blue-300 transition-all duration-300">
                    <div className={`flex-shrink-0 mr-3.5 p-2.5 rounded-xl ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-800 mb-0.5 group-hover:text-blue-600 transition-colors">{item.title}</h5>
                      <p className="text-slate-500 text-xs leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="mailto:careers@nestoriagroup.com" className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-1 gap-2">
                <Briefcase className="w-5 h-5" /> Join Our Team <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            <div className="w-full lg:w-7/12">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { img: teamHandImg, title: "Team Collaboration", desc: "Working together towards common goals" },
                  { img: teamDiscusImg, title: "Team Meeting", desc: "Strategic discussions for project success" },
                  { img: teamCircleImg, title: "Office Space", desc: "Modern workspace for creative minds" },
                  { img: workingHardImg, title: "Team Building", desc: "Building strong relationships" }
                ].map((item, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => openDialog(item.img, item.title)}>
                    <img src={item.img} alt={item.title} className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                      <div className="p-5 text-white">
                        <h3 className="font-bold text-base">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.desc}</p>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xs z-[9999] flex items-center justify-center p-4 cursor-pointer" onClick={closeDialog} role="dialog" aria-modal="true">
          <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-all z-10 hover:scale-110" onClick={closeDialog} type="button">
              <X className="w-6 h-6" />
            </button>
            <img src={dialogImage} alt={dialogAlt} className="max-h-screen max-w-full object-contain rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
            <p className="text-white text-center mt-4 text-lg font-semibold">{dialogAlt}</p>
          </div>
        </div>
      )}

      {/* Join Our Team Section */}
      <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center">
            <div className="w-full lg:w-2/3 text-center">
              <div className="inline-flex items-center gap-2 bg-blue-600/25 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
                <Briefcase className="w-4 h-4 text-blue-400" /> Careers
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Team</span>
              </h2>
              <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-base sm:text-lg mb-10 text-slate-300 leading-relaxed">
                We're always looking for talented individuals to join our growing team. Check out our current openings or send us your resume.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="mailto:careers@nestoriagroup.com" className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-2xl shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-1.5 flex items-center justify-center gap-2">
                  <Briefcase className="w-5 h-5" /> View Current Openings
                </a>
                <a href="mailto:careers@nestoriagroup.com" className="group bg-slate-900/90 hover:bg-slate-800 text-white border-2 border-blue-500/70 hover:border-blue-300 font-bold py-3.5 px-7 rounded-xl backdrop-blur-md shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5 text-blue-400" /> Send Your Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
