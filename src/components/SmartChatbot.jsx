// src/components/SmartChatbot.jsx
import { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, X, Send, Phone,
  Sparkles, CheckCircle2, ShieldCheck, ChevronRight,
  User, Mail, RotateCcw
} from 'lucide-react';
import { isWebsiteQuestion, queryKnowledgeEngine } from '../data/knowledgeBase';
import { allProjects } from '../data/projectsData';
import ContactService from '../services/ContactService';
import confetti from 'canvas-confetti';

const residentialProjects = ['Semicon Residency', 'Nestoria Atulyam', 'Skyline Imperia', 'Nestoria Homes', 'Nestoria Green Vista'];
const unsupportedTopics = /\b(price|prices|cost|rate|payment|emi|loan|installment|document|documents|approval|approvals|legal|booking|book|guaranteed roi|guaranteed return|how much)\b/i;

const flowActions = {
  welcome: ['Residential Plots', 'Commercial Property', 'Bulk Land Parcels', 'Investment Guidance', 'Ask a Question', 'Connect with an Expert'],
  residential: [...residentialProjects, 'Help Me Choose'],
  project: ['Project Details', 'Location', 'Property Options', 'Amenities', 'Investment Potential', 'Download Brochure', 'Connect with an Expert'],
  investment: ['Why Invest in Dholera?', 'Potential ROI', 'Dholera Infrastructure', 'Connectivity', 'Residential vs Commercial', 'Investment Budget', 'Talk to an Expert'],
};

const getProjectByQuery = (query) => allProjects.find((project) => {
  const projectName = project.title.toLowerCase();
  return query.includes(projectName) || projectName.split(' ').filter((token) => token.length > 3).every((token) => query.includes(token));
});

const projectResponse = (project) => `${project.title} is a ${project.category.toLowerCase()} project in ${project.location}.\n\n${project.description}\n\nPlot options: ${project.plotSizes}\nStatus: ${project.status}\n\nWhich part would you like to explore next?`;

export default function SmartChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "Hi! Welcome to Nestoria.\n\nI’m Nia, your Nestoria Property Advisor. I can help you explore our properties, understand the Dholera opportunity, and connect you with our property experts.\n\nWhat are you looking for?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actions: flowActions.welcome
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeForm, setActiveForm] = useState(null); // 'expert' | 'brochure'
  const [unreadCount, setUnreadCount] = useState(1);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState('');

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: '',
    company: '',
    requirement: '',
    question: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

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

    setTimeout(() => {
      const lower = text.toLowerCase().trim();
      const project = getProjectByQuery(lower);
      let botResponse = '';
      let actions = [];
      let triggerForm = null;

      if (unsupportedTopics.test(lower) || /\b(call|expert|person|team|connect)\b/i.test(lower)) {
        botResponse = "That’s something our Nestoria property expert can assist with. Please share your details and our team will contact you.";
        triggerForm = 'expert';
      } else if (/brochure|download/.test(lower)) {
        botResponse = "I can help you receive the relevant project brochure. Please share your details and select the project so our team can provide the correct brochure.";
        triggerForm = 'expert';
      } else if (/roi|return|potential/.test(lower)) {
        botResponse = "Real-estate returns cannot be guaranteed. Potential returns depend on purchase price, location, infrastructure development, demand, market conditions, and holding period. For a project-specific discussion, I can connect you with a Nestoria property expert.";
        actions = ['Explore Residential', 'Explore Commercial', 'Connect with an Expert'];
      } else if (/^(hi|hello|hey|namaste)\b/i.test(lower)) {
        botResponse = "Hi! I’m Nia, your Nestoria Property Advisor. What are you looking for?";
        actions = flowActions.welcome;
      } else if (/residential|residential plots|villa/.test(lower)) {
        botResponse = "Great! Which type of residential property would you like to explore?";
        actions = flowActions.residential;
      } else if (/commercial|emerald/.test(lower)) {
        botResponse = "We currently have Emerald Commercial Hub as our commercial property option. What would you like to explore?";
        actions = ['Project Details', 'Location', 'Property Details', 'Commercial Potential', 'Download Brochure', 'Connect with an Expert'];
      } else if (/bulk|parcel|land area|square feet|square yards/.test(lower)) {
        botResponse = "Certainly. For bulk land requirements, I’ll collect a few basic details so our property specialist can understand your requirement.";
        triggerForm = 'expert';
      } else if (/investment guidance|investment|investing|why invest|why dholera/.test(lower)) {
        botResponse = "Dholera is being developed as a large-scale greenfield industrial city and a major node of the Delhi–Mumbai Industrial Corridor. Its opportunity is linked to planned infrastructure, industrial development, connectivity, and economic activity. Returns are not guaranteed and depend on the specific property and holding period.";
        actions = flowActions.investment;
      } else if (/help me choose/.test(lower)) {
        botResponse = "I can help you narrow down the right residential option. What is your primary objective?";
        actions = ['Investment', 'Future Home', 'Lifestyle', 'Villa', 'Long-Term Investment', 'Just Exploring'];
      } else if (/just exploring/.test(lower)) {
        botResponse = "Of course! Take your time. You can explore our properties or learn more about the Dholera opportunity.";
        actions = ['Residential Properties', 'Commercial Property', 'Bulk Land Parcels', 'Why Dholera?', 'Download Brochure', 'Ask a Question'];
      } else if (/future home|lifestyle|long-term investment/.test(lower)) {
        botResponse = "Thanks. What is your approximate budget or investment range?";
        actions = ['₹15–25 Lakh', '₹25–50 Lakh', '₹50 Lakh–₹1 Crore', '₹1–1.5 Crore', 'Not Decided Yet'];
      } else if (/ask a question/.test(lower)) {
        botResponse = "Sure! Please type your question and I’ll help you with it using Nestoria’s website information.";
      } else if (project) {
        setSelectedProjectTitle(project.title);
        botResponse = projectResponse(project);
        actions = flowActions.project;
      } else if (/project details|location|property options|amenities|commercial potential|dholera infrastructure|connectivity/.test(lower)) {
        const selectedProject = allProjects.find((item) => item.title === selectedProjectTitle);
        botResponse = selectedProject ? projectResponse(selectedProject) : queryKnowledgeEngine(text, allProjects);
        actions = flowActions.project;
      } else if (isWebsiteQuestion(text)) {
        botResponse = queryKnowledgeEngine(text, allProjects);
        actions = ['Explore Residential', 'Explore Commercial', 'Why Dholera?', 'Connect with an Expert'];
      } else {
        botResponse = "I can answer questions about Nestoria properties and the Dholera opportunity using our website information. This question needs a property expert’s response. Would you like to connect with our team?";
        triggerForm = 'expert';
      }

      setMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: botResponse,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          actions: triggerForm ? [] : actions
        }
      ]);
      setIsTyping(false);
      if (triggerForm) {
        setFormStatus('idle');
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

    setFormStatus('submitting');
    ContactService.sendContactForm({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      subject: `Nia chatbot lead - ${formData.project || 'Property enquiry'}`,
      message: [
        `Interest: ${formData.project || formData.requirement || 'Not specified'}`,
        `Company: ${formData.company || 'Not specified'}`,
        `Additional requirement: ${formData.requirement || formData.question || 'Not specified'}`
      ].join('\n')
    }).then(() => {
      setFormStatus('success');
      setMessages(prev => [...prev, {
        id: `bot-conf-${Date.now()}`,
        sender: 'bot',
        text: `Thank you, ${formData.name}. Your details have been shared with our Nestoria property team. A property expert will contact you regarding your requirement.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: flowActions.welcome
      }]);
      setActiveForm(null);
      setFormData((prev) => ({ ...prev, name: '', phone: '', email: '', company: '', requirement: '', question: '' }));
      try { confetti({ particleCount: 50, spread: 55, origin: { y: 0.7 } }); } catch { /* optional enhancement */ }
    }).catch(() => {
      setFormStatus('error');
    });
  };

  const handleWhatsAppRedirect = (customText) => {
    const text = customText || `Hello Nestoria Group, I am interested in Dholera SIR properties. Please share project details and brochure.`;
    window.open(`https://wa.me/919274411712?text=${encodeURIComponent(text)}`, '_blank');
  };

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
              NIA
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
                  text: "Hi! I’m Nia, your Nestoria Property Advisor. What are you looking for?",
                  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                  actions: flowActions.welcome
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
              100% Clear Title
            </span>
            <button
              onClick={() => handleWhatsAppRedirect()}
              className="text-blue-700 font-semibold hover:underline flex items-center gap-1"
            >
              WhatsApp Support
              <ChevronRight className="w-3 h-3" />
            </button>
            <button
              onClick={() => handleSendMessage('Connect with an Expert')}
              className="text-blue-700 font-semibold hover:underline flex items-center gap-1"
            >
              Lead Form
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
                {msg.actions?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                    {msg.actions.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(action)}
                        className="text-xs bg-white text-blue-700 font-medium px-2.5 py-1.5 rounded-full border border-blue-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-xs"
                      >
                        {action}
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
                    <Phone className="w-4 h-4 text-blue-600" /> Connect with a Property Expert
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

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Interested Project</label>
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full px-2 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                    >
                      <option value="">Select a project or requirement</option>
                      {allProjects.map((proj) => <option key={proj.id} value={proj.title}>{proj.title}</option>)}
                      <option value="Bulk Land Parcels">Bulk Land Parcels</option>
                      <option value="Investment Guidance">Investment Guidance</option>
                    </select>
                  </div>

                  <input
                    type="text"
                    placeholder="Company name (optional)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                  />

                  <textarea
                    placeholder="Additional requirement or question"
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    rows="2"
                    className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                  />

                  {formStatus === 'error' && <p className="text-xs text-red-600">We could not send your details. Please try again.</p>}

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    {formStatus === 'submitting' ? 'Sending...' : 'Connect Me With an Expert'}
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
