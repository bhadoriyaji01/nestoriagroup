// src/components/footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, Phone, Mail, ChevronRight, ShieldCheck, 
  Send, ExternalLink, Award 
} from "lucide-react";
import { allProjects } from "../data/projectsData";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        
        {/* Top Trust & Highlight Banner */}
        <div className="bg-gradient-to-r from-blue-900/60 via-slate-900 to-indigo-950/80 rounded-3xl p-6 sm:p-8 border border-blue-800/40 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-8 h-8 text-blue-300" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Guaranteed 100% NA Title Clear Land Plots
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Sanctioned Layouts • Immediate Sub-Registrar Registry
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all"
            >
              Explore All Projects
            </Link>
            <a
              href="https://wa.me/919274411712?text=Hello%20Nestoria%20Group,%20please%20send%20brochure%20and%20project%20details"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-extrabold text-2xl text-white tracking-tight">
                NESTORIA <span className="text-blue-400">GROUP</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Dholera SIR's most trusted real estate developer. Offering premium residential plots, luxury villas, and high-yield commercial land parcels in India's first greenfield smart city.
            </p>
          </div>

          {/* Column 2: Projects Portfolio Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-4">
              Featured Projects
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {allProjects.slice(0, 6).map((proj) => (
                <li key={proj.id}>
                  <Link
                    to={`/project/${proj.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                    <span>{proj.title}</span>
                    <span className="text-[10px] text-blue-400 font-semibold ml-auto">{proj.zone}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/projects"
                  className="text-blue-400 hover:text-blue-300 font-bold text-xs flex items-center gap-1"
                >
                  View All 11+ Projects →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Smart City */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-4">
              Dholera Smart City
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 font-semibold text-blue-300">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link to="/aboutDholera" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  About Dholera SIR
                </Link>
              </li>
              <li>
                <Link to="/latest-news" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Tata Fab & Airport News
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Company Milestones
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Investor FAQs
                </Link>
              </li>
              <li>
                <Link to="/testimonial" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  Client Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Coordinates */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-4">
              Get In Touch
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <span>
                3rd Floor, Sarthik Annexe, Satellite Road, Iscon Cross Road, Ahmedabad - 380015, Gujarat, India
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <a href="tel:+919213005611" className="hover:text-white font-semibold">
                +919213005611
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <a href="mailto:info@nestoriagroup.com" className="hover:text-white">
                info@nestoriagroup.com
              </a>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-slate-400 block mb-2">Follow Nestoria Group</span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/nestoria.group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nestoria Group on Instagram"
                  className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <i className="fab fa-instagram text-base" />
                </a>
                <a
                  href="http://www.youtube.com/@nestoriagroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nestoria Group on YouTube"
                  className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <i className="fab fa-youtube text-base" />
                </a>
                <a
                  href="https://www.facebook.com/nestoriagroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nestoria Group on Facebook"
                  className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <i className="fab fa-facebook-f text-base" />
                </a>
                <a
                  href="https://www.linkedin.com/company/nestoriagroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nestoria Group on LinkedIn"
                  className="w-9 h-9 rounded-xl bg-sky-700 flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <i className="fab fa-linkedin-in text-base" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Nestoria Group. All rights reserved. Registered under Gujarat Real Estate norms.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
