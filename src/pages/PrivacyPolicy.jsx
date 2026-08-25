import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getLocalBusinessSchema } from "../utils/SchemaMarkup";
import {
  Sparkles, Shield, Info, Database, Settings, Share2,
  Cookie, ShieldCheck, ExternalLink, Mail, MapPin, Phone,
  ArrowUp, Home,
} from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const businessSchema = getLocalBusinessSchema({
    name: "Nestoria Group",
    description: "Leading real estate developer in Dholera SIR, Gujarat.",
    url: "https://nestoriagroup.com",
    telephone: "+91-9213005611",
    email: "info@nestoriagroup.com",
    address: { streetAddress: "3rd Floor, Sarthik Annexe, Satellite Road", addressLocality: "Iskon Cross Road, Ahmedabad", addressRegion: "Gujarat", postalCode: "380015", addressCountry: "IN" },
    geo: { latitude: "23.0358", longitude: "72.5456" },
    openingHours: "Mo,Tu,We,Th,Fr,Sa 09:00-18:00"
  });

  const sections = [
    { icon: Info, title: "1. Introduction", content: (
      <p className="text-slate-600 leading-relaxed">Welcome to www.nestoriagroup.com, operated by Nestoria Group ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website or use our real estate services, including inquiries regarding properties in Dholera SIR and other regions.</p>
    )},
    { icon: Database, title: "2. Information We Collect", content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">We may collect the following types of information:</p>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-slate-800 mb-1 text-sm">Personal Information:</h4>
            <p className="text-slate-600 text-sm leading-relaxed pl-4 border-l-2 border-blue-200">Name, email address, phone number, physical address, and any other details you provide when filling out our contact forms, subscribing to our newsletter, or requesting property consultations.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-1 text-sm">Non-Personal Information:</h4>
            <p className="text-slate-600 text-sm leading-relaxed pl-4 border-l-2 border-blue-200">Browser type, IP address, device information, operating system, and pages visited on our site. We collect this data through cookies and similar tracking technologies to improve user experience.</p>
          </div>
        </div>
      </>
    )},
    { icon: Settings, title: "3. How We Use Your Information", content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-3">We use the information we collect to:</p>
        <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-sm leading-relaxed pl-2">
          <li>Provide, operate, and maintain our website.</li>
          <li>Respond to your real estate inquiries, schedule site visits, or process investment advisory requests.</li>
          <li>Send periodic emails, including newsletters and promotional materials (you may opt out at any time).</li>
          <li>Improve our website, services, and customer support.</li>
          <li>Comply with legal obligations and property documentation requirements.</li>
        </ul>
      </>
    )},
    { icon: Share2, title: "4. Sharing Your Information", content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">We do not sell or rent your personal information. We may share your information only in the following circumstances:</p>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-slate-800 mb-1 text-sm">Service Providers:</h4>
            <p className="text-slate-600 text-sm leading-relaxed pl-4 border-l-2 border-blue-200">With trusted third-party vendors who assist us in website hosting, email delivery, or real estate marketing, under strict confidentiality agreements.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-1 text-sm">Legal Requirements:</h4>
            <p className="text-slate-600 text-sm leading-relaxed pl-4 border-l-2 border-blue-200">When required by law, regulation, or a government request.</p>
          </div>
        </div>
      </>
    )},
    { icon: Cookie, title: "5. Cookies and Tracking", content: (
      <p className="text-slate-600 leading-relaxed">Our website uses cookies to enhance user experience. You can choose to disable cookies through your browser settings, though some features of the site may not function properly as a result.</p>
    )},
    { icon: ShieldCheck, title: "6. Data Security", content: (
      <p className="text-slate-600 leading-relaxed">We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet is completely secure.</p>
    )},
    { icon: ExternalLink, title: "7. Third-Party Links", content: (
      <p className="text-slate-600 leading-relaxed">Our website may contain links to third-party sites (e.g., government portals for Dholera SIR news or social media platforms). We are not responsible for the privacy practices of these external sites.</p>
    )},
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="hidden"><script type="application/ld+json">{JSON.stringify(businessSchema)}</script></div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 md:py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15),_transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <Shield className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>Information Protection</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 font-condor tracking-tight leading-[1.15]">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Policy</span>
            </h1>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                <Shield className="w-5 h-5" />Contact Us
              </Link>
              <Link to="/" className="bg-white/5 hover:bg-white/10 text-white font-bold py-3 px-8 border border-white/20 hover:border-blue-400/50 rounded-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                <Home className="w-5 h-5" />Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {sections.map((sec, i) => {
                const Icon = sec.icon;
                return (
                  <article key={i} className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      {sec.title}
                    </h3>
                    {sec.content}
                  </article>
                );
              })}

              {/* Contact article */}
              <article className="bg-blue-600/5 rounded-3xl border border-blue-200/50 p-6 sm:p-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  8. Contact Us
                </h3>
                <p className="text-blue-700 leading-relaxed mb-4">If you have any questions or concerns about this Privacy Policy, please contact us:</p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2 text-blue-700"><MapPin className="w-4 h-4" />3rd Floor, Sarthik Annexe, Satellite Road, Ahmedabad - 380015</p>
                  <p className="flex items-center gap-2 text-blue-700"><Phone className="w-4 h-4" />+91-9213005611</p>
                  <p className="flex items-center gap-2 text-blue-700"><Mail className="w-4 h-4" /><a href="mailto:info@nestoriagroup.com" className="hover:underline">info@nestoriagroup.com</a></p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110" aria-label="Back to top">
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
