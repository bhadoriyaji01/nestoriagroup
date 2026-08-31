import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { getFAQSchema, getBreadcrumbSchema } from '../utils/SchemaMarkup';
import {
  Sparkles, HelpCircle, ChevronDown, List, Phone, Mail,
  Search, RefreshCw, Grid, Home, Building2, Factory, TrendingUp, Shield
} from 'lucide-react';
import faqbanner from '/src/assets/img/FAQ.webp';

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState('general');

  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const categories = [
    { id: 'general', name: 'General Questions', icon: Grid },
    { id: 'property', name: 'Property Related', icon: Home },
    { id: 'investment', name: 'Investment', icon: TrendingUp },
    { id: 'dholera', name: 'About Dholera SIR', icon: Building2 },
    { id: 'legal', name: 'Legal & Documentation', icon: Shield }
  ];

  const faqs = {
    general: [
      { question: "Who is Nestoria Group?", answer: "Nestoria Group is a leading real estate developer specializing in properties within Dholera Special Investment Region (SIR). With years of experience, we offer residential, commercial, and industrial land parcels with a focus on trust, transparency, and client satisfaction." },
      { question: "How long has Nestoria Group been in business?", answer: "Nestoria Group has been operating in the real estate sector since 2010, with a specific focus on the Dholera SIR region." },
      { question: "What services does Nestoria Group offer?", answer: "Nestoria Group offers a comprehensive range of real estate services including property sales, investment advisory, legal assistance, site visits, property management, and ongoing customer support." },
      { question: "How can I contact Nestoria Group?", answer: "You can contact us through multiple channels: visit our office, call +919213005611, email info@nestoriagroup.com, or fill out the contact form on our website." },
      { question: "Does Nestoria Group have any ongoing projects?", answer: "Yes, Nestoria Group has several ongoing projects in different zones of Dholera SIR including residential townships, commercial complexes, and industrial plots." }
    ],
    property: [
      { question: "What types of properties does Nestoria Group offer in Dholera SIR?", answer: "We offer a diverse range of properties including residential plots, commercial properties, and industrial land parcels, each strategically located to maximize investment potential." },
      { question: "What plot sizes and configurations are available in Dholera SIR?", answer: "Nestoria Group offers residential plots, luxury villas, and commercial land parcels ranging from 150 sq.yd to 1,200+ sq.yd across prime Town Planning zones. Please contact our advisory team for brochures and layout plans." },
      { question: "Are the properties ready to move in?", answer: "We offer both ready-to-develop plots and under-development properties. Our sales team can guide you through available options." },
      { question: "Can I customize my property?", answer: "Yes, when purchasing land parcels, you have the flexibility to develop according to your requirements, subject to Dholera SIR zoning regulations." },
      { question: "How can I schedule a site visit?", answer: "Contact our office via phone, email, or contact form. Our team will arrange a convenient time for your visit." }
    ],
    investment: [
      { question: "Is Dholera SIR a good investment opportunity?", answer: "Yes, Dholera SIR presents an exceptional investment opportunity due to its status as India's first planned smart city, strategic location within DMIC, and government backing." },
      { question: "What is the expected return on investment?", answer: "While specific returns cannot be guaranteed, investments in Dholera SIR have shown promising growth potential driven by smart city development." },
      { question: "What are the payment options?", answer: "We offer flexible payment options including lump sum, installment plans, and bank financing. Our advisors can help you choose the best plan." },
      { question: "Are there ongoing maintenance costs?", answer: "There may be maintenance charges for common infrastructure. Our team will provide detailed information about applicable costs." },
      { question: "Can NRIs invest in Dholera SIR properties?", answer: "Yes, NRIs can invest. We have a dedicated team to assist with the investment process, documentation, and property management." }
    ],
    dholera: [
      { question: "What is Dholera Special Investment Region (SIR)?", answer: "Dholera SIR is India's first planned smart city being developed as part of the Delhi-Mumbai Industrial Corridor (DMIC), designed as a global manufacturing and trading hub." },
      { question: "Where is Dholera SIR located?", answer: "Dholera SIR is in Gujarat, approximately 100 km southwest of Ahmedabad, with proximity to major ports, highways, and the proposed international airport." },
      { question: "What infrastructure is being developed?", answer: "World-class infrastructure including smart transportation, renewable energy, water management, digital connectivity, industrial zones, and green spaces." },
      { question: "What is the current development status?", answer: "Dholera SIR is being developed in phases with significant progress in trunk infrastructure. Full development is expected by 2040." },
      { question: "What industries are expected to establish?", answer: "Electronics, pharmaceuticals, heavy engineering, defense, aviation, renewable energy, and IT/ITeS sectors are expected." }
    ],
    legal: [
      { question: "What documents are required for property purchase?", answer: "Identity proof (Aadhar, PAN, Passport), address proof, photographs, and bank statements. Our legal team will guide you through documentation." },
      { question: "Is the title of properties clear?", answer: "Yes, all properties come with clear titles. We conduct thorough legal verification before offering them to clients." },
      { question: "What are the legal procedures?", answer: "Property verification, agreement preparation, payment processing, sale deed registration, and mutation of records. Our legal team handles these efficiently." },
      { question: "Are there restrictions on property development?", answer: "Yes, development must comply with the master plan and building regulations established by DSIRDA." },
      { question: "What taxes are applicable?", answer: "Stamp duty, registration fees, and GST (if applicable). Our team will provide a detailed breakdown before purchase." }
    ]
  };

  const categoryIcons = { general: Grid, property: Home, investment: TrendingUp, dholera: Building2, legal: Shield };
  const allFaqsList = Object.values(faqs).flat();

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <Seo
        title="Dholera SIR Property FAQs | Investment, Approvals & Legal Verification"
        description="Got questions about buying land in Dholera SIR? Find verified answers on legal title clearance, AUDA approvals, registry process, plot sizes, and NRI investment guidelines."
        keywords="Dholera SIR FAQ, is Dholera safe to invest, how to buy plot in Dholera, AUDA approval Dholera, Dholera registry process, NRI land investment FAQ India"
        canonicalUrl="/faq"
        schemaMarkup={[
          getFAQSchema(allFaqsList),
          getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'FAQ', url: '/faq' }])
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img src={faqbanner} alt="FAQ Nestoria Group" className="w-full h-full object-cover object-center scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-blue-950/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 sm:py-24 md:py-32 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
            <HelpCircle className="w-4 h-4 text-blue-400 animate-pulse" />
            <span>Help Center</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 font-condor tracking-tight leading-[1.15] max-w-5xl drop-shadow-lg">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Questions</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 max-w-3xl leading-relaxed drop-shadow-md">
            Find answers to common questions about Nestoria Group and Dholera SIR
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
            <a href="#faq-content" className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-2xl shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-1.5 w-full sm:w-auto flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5" /> Browse FAQs
            </a>
            <a href="mailto:info@nestoriagroup.com" className="group bg-slate-900/90 hover:bg-slate-800 text-white border-2 border-blue-500/70 hover:border-blue-300 font-bold py-3.5 px-7 rounded-xl backdrop-blur-md shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 w-full sm:w-auto flex items-center justify-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" /> Ask Question
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section id="faq-content" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" /> FAQ Categories
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              Browse by <span className="text-blue-600">Category</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 ${
                    activeCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
                  }`}>
                  <Icon className="w-4 h-4" /> {cat.name}
                </button>
              );
            })}
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs[activeCategory].map((faq, index) => (
              <div key={index} className="bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 group overflow-hidden">
                <details className="group/details">
                  <summary className="flex justify-between items-center p-6 cursor-pointer text-slate-800 group-hover:text-blue-600 transition-colors">
                    <span className="font-semibold text-sm md:text-base pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-blue-500 flex-shrink-0 transition-transform duration-300 group-open/details:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 border-t border-slate-100">
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/25 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
              <Phone className="w-4 h-4 text-blue-400" /> Need More Help?
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Didn't Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Answer</span>?
            </h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10">
              Our team is here to help you with any questions about our properties or services in Dholera SIR.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-2xl shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-1.5 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Contact Us
              </Link>
              <a href="mailto:info@nestoriagroup.com" className="group bg-slate-900/90 hover:bg-slate-800 text-white border-2 border-blue-500/70 hover:border-blue-300 font-bold py-3.5 px-7 rounded-xl backdrop-blur-md shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
