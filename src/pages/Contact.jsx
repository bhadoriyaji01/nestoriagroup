import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  MapPin, Phone, Mail, Clock, Headphones, Share2, Send, Loader2,
  CheckCircle2, XCircle, Sparkles, ChevronDown, ArrowRight, MessageCircle
} from "lucide-react";
import ContactService from "../services/ContactService";
import ParallaxSection from "../components/ParallaxSection";
import { getLocalBusinessSchema } from "../utils/SchemaMarkup";
import contactbannerimg from "/src/assets/img/contact.webp";

const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const businessSchema = getLocalBusinessSchema({
    name: "Nestoria Group",
    description: "Premier real estate developer in Dholera SIR, Gujarat.",
    url: "https://nestoriagroup.com",
    telephone: "+919213005611",
    email: "info@nestoriagroup.com",
    address: { streetAddress: "Dholera SIR", addressLocality: "3rd Floor, Sarthik Annex, Satellite Road", addressRegion: "Gujarat", postalCode: "380015", addressCountry: "IN" },
    geo: { latitude: "23.0269442", longitude: "72.5094251" },
    openingHours: "Mo,Tu,We,Th,Fr,Sa 09:00-18:00"
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    else if (formData.subject.trim().length < 5) newErrors.subject = "Subject must be at least 5 characters";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
    if (formData.phone && !/^[0-9+\-\s()]{10,15}$/.test(formData.phone)) newErrors.phone = "Please enter a valid phone number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true); setError(""); setSubmitted(false);
    try {
      const res = await ContactService.sendContactForm(formData);
      if (res.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setErrors({});
        setTimeout(() => setSubmitted(false), 5000);
      } else { setError(res.message || "Failed to send message."); }
    } catch (err) { setError("Failed to send message. Please try again later."); }
    setLoading(false);
  };

  const faqs = [
    { question: "What types of properties does Nestoria Group offer in Dholera SIR?", answer: "Nestoria Group offers a diverse range of properties in Dholera SIR, including residential plots, commercial properties, and industrial land parcels." },
    { question: "How can I schedule a site visit to Dholera SIR?", answer: "You can schedule a site visit by contacting our office directly via phone, email, or by filling out the contact form on our website." },
    { question: "What are the payment options available for property purchases?", answer: "We offer flexible payment options including lump sum payments, installment plans, and bank financing options." },
    { question: "Is Dholera SIR a good investment opportunity?", answer: "Yes, Dholera SIR presents an exceptional investment opportunity due to its status as India's first planned smart city and government backing." },
    { question: "What documents are required for property purchase in Dholera SIR?", answer: "Required documents include identity proof, address proof, passport-sized photographs, and bank statements. Our legal team will guide you through the process." },
  ];

  return (
    <div className="overflow-hidden bg-white text-slate-900">
      <Helmet>
        <title>Contact Nestoria Group | Real Estate Developer in Dholera SIR</title>
        <meta name="description" content="Contact Nestoria Group for premium real estate investment opportunities in Dholera SIR." />
        <link rel="canonical" href="https://nestoriagroup.com/contact" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img src={contactbannerimg} alt="Contact Nestoria Group" className="w-full h-full object-cover object-center scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-blue-950/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 sm:py-24 md:py-32 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
            <MessageCircle className="w-4 h-4 text-blue-400 animate-pulse" />
            <span>Get In Touch With Our Experts</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 font-condor tracking-tight leading-[1.15] max-w-5xl drop-shadow-lg">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Us</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-10 max-w-3xl leading-relaxed drop-shadow-md">
            Get in touch with our team of real estate experts in Dholera SIR
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 w-full sm:w-auto">
            <a href="#contact-form" className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-base py-4 px-8 rounded-xl shadow-2xl shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2">
              <Send className="w-5 h-5" /><span>Send Message</span>
            </a>
            <a href="tel:+919213005611" className="group bg-slate-900/90 hover:bg-slate-800 text-white border-2 border-blue-500/70 hover:border-blue-300 font-bold text-base py-3.5 px-7 rounded-xl backdrop-blur-md shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-blue-400 group-hover:scale-125 transition-all" /><span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Phone className="w-3.5 h-3.5 text-blue-600" /> Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
              Contact <span className="text-blue-600">Information</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">Reach out to us through any of these channels for immediate assistance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: MapPin, title: "Our Office", lines: ["3rd Floor, Sarthik Annex, Satellite Road,", "Iscon Cross Road, Ahmedabad - 380015"], iconBg: "bg-blue-100 text-blue-600", border: "hover:border-blue-300" },
              { icon: Phone, title: "Phone & Email", lines: ["+919213005611", "info@nestoriagroup.com"], iconBg: "bg-emerald-100 text-emerald-600", border: "hover:border-emerald-300", links: ["tel:+919213005611", "mailto:info@nestoriagroup.com"] },
              { icon: Clock, title: "Office Hours", lines: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 4:00 PM"], iconBg: "bg-purple-100 text-purple-600", border: "hover:border-purple-300" }
            ].map((card, i) => (
              <div key={i} className={`group bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg ${card.border} transition-all duration-300 text-center hover:-translate-y-1.5`}>
                <div className={`inline-flex items-center justify-center p-3.5 rounded-2xl ${card.iconBg} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">{card.title}</h3>
                {card.lines.map((line, j) => (
                  <p key={j} className="text-slate-500 text-sm mb-1">
                    {card.links ? <a href={card.links[j]} className="hover:text-blue-600 transition-colors font-medium">{line}</a> : line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Support & Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
            <div className="group bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-1.5">
              <div className="flex items-center mb-5">
                <div className="bg-blue-100 rounded-2xl p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Customer Support</h3>
              </div>
              <p className="text-slate-500 mb-4 text-sm leading-relaxed">Our dedicated support team is available to assist you with any inquiries about our properties or services.</p>
              <div className="space-y-2">
                <p className="text-slate-600 text-sm"><strong className="text-slate-800">Support Email:</strong> <a href="mailto:support@nestoriagroup.com" className="text-blue-600 hover:text-blue-500 font-semibold">support@nestoriagroup.com</a></p>
                <p className="text-slate-600 text-sm"><strong className="text-slate-800">Support Phone:</strong> <a href="tel:+919213005611" className="text-blue-600 hover:text-blue-500 font-semibold">+919213005611</a></p>
              </div>
            </div>
            <div className="group bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-purple-300 transition-all duration-300 hover:-translate-y-1.5">
              <div className="flex items-center mb-5">
                <div className="bg-purple-100 rounded-2xl p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Share2 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors">Connect With Us</h3>
              </div>
              <p className="text-slate-500 mb-5 text-sm leading-relaxed">Follow us on social media to stay updated with the latest news and property listings.</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: "http://www.youtube.com/@nestoriagroup", bg: "bg-[#FF0000]", label: "YouTube", path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.9 31.9 0 0 0 0 12a31.9 31.9 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.9 31.9 0 0 0 24 12a31.9 31.9 0 0 0-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" },
                  { href: "https://www.instagram.com/nestoria.group", bg: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045]", label: "Instagram", path: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 5.8.1 5 .3 4.2.6c-.8.3-1.5.7-2.2 1.4C1.3 2.7.9 3.4.6 4.2.3 5 .1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.2 2.1.5 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.6.5 2.9.5 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.1-.2 2.9-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.6.5-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.2-2.1-.5-2.9-.3-.8-.7-1.5-1.4-2.2C21.3 1.3 20.6.9 19.8.6 19 .3 18.2.1 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z" },
                  { href: "https://www.facebook.com/nestoriagroup", bg: "bg-[#1877F2]", label: "Facebook", path: "M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 11 10.1 11.9V16H7.1v-4h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 4h-2.8v7.9C19.6 23 24 18 24 12z" },
                  { href: "https://www.linkedin.com/company/nestoriagroup", bg: "bg-[#0A66C2]", label: "LinkedIn", path: "M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.2V8.8h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.4zM5.3 7.2a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V8.8h3.6v11.6zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.5c0 1 .8 1.8 1.8 1.8h20.4c1 0 1.8-.8 1.8-1.8V1.7c0-1-.8-1.7-1.8-1.7z" }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-11 h-11 rounded-2xl ${social.bg} flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg`} aria-label={social.label}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d={social.path} /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <Mail className="w-3.5 h-3.5 text-emerald-600" /> Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                Send Us a <span className="text-blue-600">Message</span>
              </h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            {submitted && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-6 py-4 rounded-2xl mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" /><span>Thank you for your message! We will get back to you shortly.</span>
              </div>
            )}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl mb-6 flex items-center gap-3">
                <XCircle className="w-5 h-5 flex-shrink-0" /><span>{error}</span>
              </div>
            )}

            <div className="bg-slate-50 p-6 sm:p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-xs">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { id: "name", label: "Your Name *", type: "text", placeholder: "Enter your full name", required: true },
                    { id: "email", label: "Email Address *", type: "email", placeholder: "Enter your email address", required: true },
                    { id: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number", required: false },
                    { id: "subject", label: "Subject *", type: "text", placeholder: "Enter the subject", required: true }
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-slate-800 font-semibold mb-2 text-sm">{field.label}</label>
                      <input type={field.type} id={field.id} name={field.id} value={formData[field.id]} onChange={handleChange} placeholder={field.placeholder} required={field.required}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm ${errors[field.id] ? "border-red-500 bg-red-50" : "border-slate-200 focus:bg-blue-50"}`}
                      />
                      {errors[field.id] && <p className="text-red-500 text-xs mt-1.5 flex items-center"><XCircle className="w-3.5 h-3.5 mr-1" />{errors[field.id]}</p>}
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="message" className="block text-slate-800 font-semibold mb-2 text-sm">Your Message *</label>
                  <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Enter your message here..." required
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm min-h-[140px] ${errors.message ? "border-red-500 bg-red-50" : "border-slate-200 focus:bg-blue-50"}`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1.5 flex items-center"><XCircle className="w-3.5 h-3.5 mr-1" />{errors.message}</p>}
                </div>
                <div className="text-center">
                  <button type="submit" disabled={loading}
                    className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center mx-auto gap-2 text-sm sm:text-base"
                  >
                    {loading ? (<><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>) : (<><Send className="w-5 h-5" /> Send Message</>)}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-amber-600" /> Our Location
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">Find <span className="text-blue-600">Us</span></h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">Visit our office in Ahmedabad for personalized assistance and property consultations</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14688.181259658562!2d72.508794!3d23.0265226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b0011439e3d%3A0x5d04ddda8181c13e!2sNestoria%20Group!5e0!3m2!1sen!2sin!4v1706572800000!5m2!1sen!2sin"
              width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Nestoria Group Office Location" className="w-full group-hover:scale-[1.02] transition-transform duration-700"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-600/25 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-4">
              <Sparkles className="w-4 h-4 text-blue-400" /> Help Center
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Questions</span>
            </h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">Find answers to common questions about our properties and services</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group">
                <details className="group/details">
                  <summary className="flex justify-between items-center p-6 cursor-pointer text-white group-hover:text-blue-300 transition-colors">
                    <span className="font-semibold text-sm md:text-base pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 group-open/details:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 border-t border-white/10">
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Still have questions?</h3>
              <p className="text-slate-300 mb-6 text-lg">Our team is here to help you with any additional questions</p>
              <a href="mailto:info@nestoriagroup.com" className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-1 gap-2">
                <Mail className="w-5 h-5" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
