import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "../utils/SchemaMarkup";
import {
  Sparkles, FileText, Handshake, Building2, Info, Copyright,
  UserCheck, Scale, ExternalLink, Gavel, RefreshCw, Mail,
  MapPin, Phone, ArrowUp, Home,
} from "lucide-react";

const TermsAndConditions = () => {
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
    { icon: Handshake, title: "1. Agreement to Terms", content: (
      <p className="text-slate-600 leading-relaxed">By accessing and using www.nestoriagroup.com (the "Website"), you agree to abide by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.</p>
    )},
    { icon: Building2, title: "2. Services Overview", content: (
      <p className="text-slate-600 leading-relaxed">Nestoria Group is a real estate developer offering advisory, sales, and investment services for residential, commercial, and industrial properties, particularly in Dholera Special Investment Region (SIR). The information provided on this website is for general informational purposes and does not constitute a binding legal offer or financial advice until formal agreements are signed.</p>
    )},
    { icon: Info, title: "3. Property Information and Accuracy", content: (
      <p className="text-slate-600 leading-relaxed">While we strive to ensure that all property details, layouts, and Dholera SIR infrastructure updates on the Website are accurate and up to date, we make no warranties or representations regarding the completeness or accuracy of the information. Property specifications and availability are subject to change without prior notice. Visual representations are indicative and may differ from actual developments.</p>
    )},
    { icon: Copyright, title: "4. Intellectual Property Rights", content: (
      <p className="text-slate-600 leading-relaxed">All content, logos, text, graphics, images, software, and overall design of this Website are the exclusive property of Nestoria Group and are protected by Indian and international copyright laws. You may not reproduce, distribute, or use any content for commercial purposes without our express written consent.</p>
    )},
    { icon: UserCheck, title: "5. User Conduct", content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-3">When using our Website, you agree not to:</p>
        <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-sm leading-relaxed pl-2">
          <li>Submit false or misleading information via our contact forms.</li>
          <li>Attempt to gain unauthorized access to our servers, databases, or website infrastructure.</li>
          <li>Use the Website for any unlawful activities or to upload malicious software.</li>
        </ul>
      </>
    )},
    { icon: Scale, title: "6. Limitation of Liability", content: (
      <p className="text-slate-600 leading-relaxed">To the maximum extent permitted by law, Nestoria Group, its directors, employees, or affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Website, your reliance on any information provided, or your real estate investment decisions.</p>
    )},
    { icon: ExternalLink, title: "7. Third-Party Services and External Links", content: (
      <p className="text-slate-600 leading-relaxed">Our website may reference external entities, government bodies, or link to third-party websites. These links are provided for convenience only. Nestoria Group does not endorse or take responsibility for the content, policies, or practices of external sites.</p>
    )},
    { icon: Gavel, title: "8. Governing Law and Jurisdiction", content: (
      <p className="text-slate-600 leading-relaxed">These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to the use of this Website shall be subject to the exclusive jurisdiction of the courts located in Ahmedabad, Gujarat, India.</p>
    )},
    { icon: RefreshCw, title: "9. Changes to Terms", content: (
      <p className="text-slate-600 leading-relaxed">We reserve the right to modify or replace these Terms and Conditions at any time. Any changes will be posted on this page with an updated "Effective Date." Continued use of the website implies acceptance of the updated terms.</p>
    )},
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Seo
        title="Terms & Conditions | Nestoria Group Dholera SIR"
        description="Review terms and conditions for navigating Nestoria Group's website, requesting property consultations, and scheduling site visits in Dholera SIR."
        keywords="terms and conditions Nestoria Group, Dholera property advisory terms"
        canonicalUrl="/terms-and-conditions"
        schemaMarkup={[
          businessSchema,
          getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Terms & Conditions', url: '/terms-and-conditions' }])
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 md:py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15),_transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <FileText className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>Legal Agreement</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 font-condor tracking-tight leading-[1.15]">
              Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Conditions</span>
            </h1>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before using our website and services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                <FileText className="w-5 h-5" />Contact Us
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
                  10. Contact Information
                </h3>
                <p className="text-blue-700 leading-relaxed mb-4">For any questions regarding these Terms and Conditions, please reach out:</p>
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

export default TermsAndConditions;
