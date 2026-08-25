// src/components/SmartChatbot.jsx
import { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, X, Send, FileText, Phone, 
  Sparkles, CheckCircle2, Calculator, ShieldCheck, ChevronRight,
  User, Mail, Car, RotateCcw
} from 'lucide-react';
import { queryKnowledgeEngine } from '../data/knowledgeBase';
import { allProjects } from '../data/projectsData';
import confetti from 'canvas-confetti';

export default function SmartChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "👋 Welcome to Nestoria Group! I am your AI Property Advisor for Dholera Smart City.\n\nHow can I help you today? You can ask any question, explore our prime projects, or book a complimentary VIP site visit.",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      showActions: true
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeForm, setActiveForm] = useState(null); // 'site-visit' | 'brochure' | 'emi' | 'callback'
  const [unreadCount, setUnreadCount] = useState(1);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    pickupLocation: 'Ahmedabad Corporate Office (Satellite Road)',
    project: 'Dholera Bhoomi',
    visitorsCount: '2',
    budget: '15-25 Lakhs'
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping, activeForm]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (textToSend) => {
    const text = typeof textToSend === 'string' ? textToSend : inputVal;
    if (!text.trim()) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (typeof textToSend !== 'string') {
      setInputVal('');
    }
    setIsTyping(true);

    // Process using offline Natural Language Knowledge Engine
    setTimeout(() => {
      const lower = text.toLowerCase();
      let botResponse = '';
      let triggerForm = null;

      if (lower.includes('site visit') || lower.includes('book visit') || lower.includes('tour') || lower.includes('pickup')) {
        triggerForm = 'site-visit';
        botResponse = "I'd be delighted to arrange a 100% FREE VIP site visit for you! Please choose your preferred date and pickup location below:";
      } else if (lower.includes('brochure') || lower.includes('download') || lower.includes('catalog')) {
        triggerForm = 'brochure';
        botResponse = "You can download our official master plan & brochure dossier right here. Please provide your contact details to receive the instant download link:";
      } else if (lower.includes('emi') || lower.includes('calculator') || lower.includes('loan')) {
        triggerForm = 'emi';
        botResponse = "Here is our Smart Real Estate EMI & Investment Growth Calculator. Try calculating your monthly outlay and projected returns below:";
      } else if (lower.includes('callback') || lower.includes('call me') || lower.includes('speak')) {
        triggerForm = 'callback';
        botResponse = "Our senior property advisor can connect with you within 15 minutes! Please share your contact details:";
      } else {
        botResponse = queryKnowledgeEngine(text);
      }

      setMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: botResponse,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          showActions: !triggerForm
        }
      ]);
      setIsTyping(false);
      if (triggerForm) {
        setActiveForm(triggerForm);
      }
    }, 650);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide at least your name and phone number.");
      return;
    }

    const refId = `NST-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refId);
    setBookingSuccess(true);

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore if unavailable
    }

    // Save lead to localStorage
    const existingLeads = JSON.parse(localStorage.getItem('nestoria_leads') || '[]');
    const newLead = {
      id: refId,
      timestamp: new Date().toISOString(),
      type: activeForm || 'general',
      ...formData
    };
    existingLeads.push(newLead);
    localStorage.setItem('nestoria_leads', JSON.stringify(existingLeads));

    // Add confirmation message to chat
    setTimeout(() => {
      let confirmationText = '';
      if (activeForm === 'site-visit') {
        confirmationText = `🎉 Success! Your Free Site Visit is confirmed under Booking ID #${refId}.\n\n📅 Date: ${formData.date || 'Upcoming Weekend'}\n🚗 Pickup: ${formData.pickupLocation}\n👥 Guests: ${formData.visitorsCount}\n📍 Project: ${formData.project}\n\nOur hospitality manager will contact you on ${formData.phone} with vehicle and driver details.`;
      } else if (activeForm === 'brochure') {
        confirmationText = `📄 Success! The high-definition master plan brochure for ${formData.project} has been prepared for ${formData.name}. We've sent a copy to WhatsApp (${formData.phone}) and email.`;
      } else {
        confirmationText = `✅ Thank you ${formData.name}! Your request (Ref #${refId}) has been assigned to our Senior Dholera Consultant. You will receive a priority call on ${formData.phone} shortly.`;
      }

      setMessages(prev => [
        ...prev,
        {
          id: `bot-conf-${Date.now()}`,
          sender: 'bot',
          text: confirmationText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          showActions: true,
          bookingRef: refId
        }
      ]);
      setActiveForm(null);
    }, 400);
  };

  const handleWhatsAppRedirect = (customText) => {
    const text = customText || `Hello Nestoria Group, I am interested in Dholera SIR properties. Please share project details and pricing.`;
    window.open(`https://wa.me/919213005611?text=${encodeURIComponent(text)}`, '_blank');
  };

  const quickPrompts = [
    { label: "📍 Book Free Site Visit", action: () => handleSendMessage("I want to book a free site visit to Dholera SIR") },
    { label: "🏡 Explore Projects & Rates", action: () => handleSendMessage("What are your available residential and villa projects and starting prices?") },
    { label: "🚀 Tata Semiconductor Hub", action: () => handleSendMessage("Tell me about the Tata Semiconductor plant in Dholera SIR") },
    { label: "📑 Download Brochure", action: () => handleSendMessage("How can I download the complete project brochure?") },
    { label: "⚖️ Legal & Clear Title Status", action: () => handleSendMessage("Are all Nestoria projects 100% NA Title Clear and AUDA approved?") },
    { label: "💰 Calculate EMI & ROI", action: () => handleSendMessage("I want to calculate EMI and expected returns on investment") },
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
        {!isOpen && (
          <div className="mb-3 hidden sm:flex items-center gap-2 bg-white text-slate-800 px-4 py-2.5 rounded-2xl shadow-xl border border-blue-100 animate-bounce">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            <span className="text-xs font-semibold text-slate-800">
              Instant AI Assistant & Free Site Visit Booking
            </span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open AI Property Chatbot"
          className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white shadow-2xl hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80"
        >
          {isOpen ? (
            <X className="w-7 h-7 text-white transition-transform group-hover:rotate-90" />
          ) : (
            <>
              <MessageSquare className="w-7 h-7 text-white" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                  {unreadCount}
                </span>
              )}
            </>
          )}
        </button>
      </div>

      {/* Main Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-[1050] w-[94vw] sm:w-[420px] max-h-[85vh] h-[640px] flex flex-col bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Sparkles className="w-5 h-5 text-blue-200" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-blue-900"></span>
              </div>
              <div>
                <h3 className="font-bold text-base text-white flex items-center gap-1.5">
                  Nestoria Smart AI
                  <span className="bg-blue-500/40 text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full border border-blue-300/30">
                    24/7 Live
                  </span>
                </h3>
                <p className="text-xs text-blue-100/80">Dholera SIR Property Advisor & Booking</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages([{
                  id: 'reset',
                  sender: 'bot',
                  text: "Chat cleared! How can I help you today with your Dholera SIR investment?",
                  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                  showActions: true
                }])}
                title="Restart conversation"
                className="p-1.5 text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Action Top Ribbon */}
          <div className="bg-blue-50/90 border-b border-blue-100 px-3 py-2 flex items-center justify-between text-xs text-blue-800">
            <span className="flex items-center gap-1 font-medium text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              100% Clear Title & AUDA Approved
            </span>
            <button
              onClick={() => handleWhatsAppRedirect()}
              className="text-blue-700 font-semibold hover:underline flex items-center gap-1"
            >
              WhatsApp Support
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.time}</span>

                {/* Inline Action Pills */}
                {msg.showActions && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                    {quickPrompts.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={p.action}
                        className="text-xs bg-white text-blue-700 font-medium px-2.5 py-1.5 rounded-full border border-blue-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-xs"
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* In-Chat Interactive Form */}
            {activeForm && (
              <div className="bg-white border border-blue-200 rounded-2xl p-4 shadow-md animate-fade-in">
                <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                  <h4 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                    {activeForm === 'site-visit' && <><Car className="w-4 h-4 text-blue-600" /> Book Free Site Visit</>}
                    {activeForm === 'brochure' && <><FileText className="w-4 h-4 text-blue-600" /> Download Brochure</>}
                    {activeForm === 'emi' && <><Calculator className="w-4 h-4 text-blue-600" /> EMI & ROI Estimator</>}
                    {activeForm === 'callback' && <><Phone className="w-4 h-4 text-blue-600" /> Instant Callback</>}
                  </h4>
                  <button
                    onClick={() => setActiveForm(null)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-8 pr-2 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="email"
                          placeholder="name@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-8 pr-2 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800"
                        />
                      </div>
                    </div>
                  </div>

                  {activeForm === 'site-visit' && (
                    <>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                          <input
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full px-2 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">No. of Visitors</label>
                          <select
                            value={formData.visitorsCount}
                            onChange={(e) => setFormData({ ...formData, visitorsCount: e.target.value })}
                            className="w-full px-2 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                          >
                            <option value="1">1 Person</option>
                            <option value="2">2 Persons</option>
                            <option value="3-4">3-4 Persons (Family)</option>
                            <option value="5+">5+ Persons (Group)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Pickup Location</label>
                        <select
                          value={formData.pickupLocation}
                          onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                          className="w-full px-2 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                        >
                          <option value="Ahmedabad Corporate Office (Satellite Road)">Ahmedabad Office (Satellite Rd)</option>
                          <option value="Ahmedabad Airport (SVP International)">Ahmedabad Airport</option>
                          <option value="Sabarmati / Kalupur Railway Station">Sabarmati / Kalupur Station</option>
                          <option value="Direct Dholera Site Office (Self Drive)">Direct Dholera Site Office</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Interested Project</label>
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full px-2 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                    >
                      {allProjects.map((proj) => (
                        <option key={proj.id} value={proj.title}>
                          {proj.title} ({proj.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    {activeForm === 'site-visit' && 'Confirm Free VIP Site Visit'}
                    {activeForm === 'brochure' && 'Instant Download Brochure PDF'}
                    {activeForm === 'emi' && 'Get Custom EMI Calculation Dossier'}
                    {activeForm === 'callback' && 'Request Priority Call Back'}
                  </button>
                </form>
              </div>
            )}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 bg-white border border-slate-200 rounded-2xl rounded-bl-none w-16 text-blue-600">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-white border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about projects, rates, site visits, or legal docs..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-900 placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!inputVal.trim()}
                className="p-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white rounded-xl transition-all shadow-md flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 px-1">
              <span>⚡ Offline AI Knowledge Engine</span>
              <button
                onClick={() => handleSendMessage("I want to speak with a property consultant")}
                className="text-blue-600 font-semibold hover:underline"
              >
                Call: +919213005611
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
