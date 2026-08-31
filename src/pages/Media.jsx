import React, { useState } from 'react';
import Seo from '../components/Seo';
import { getBreadcrumbSchema } from '../utils/SchemaMarkup';
import {
  Sparkles, Grid, Newspaper, Megaphone, Video, Camera, Play,
  ExternalLink, Maximize2, Search, RefreshCw, X, Mail, Phone,
  Download, Calendar, ArrowRight, Image as ImageIcon,
} from 'lucide-react';

function Media() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ type: '', url: '', title: '' });

  const mediaData = [
    { id: 1, title: "Gujarat CM reviews on-site progress of overall development works at Dholera SIR", excerpt: "on Friday visited Dholera to personally assess the progress of development works at Dholera Special Investment Region (SIR).", date: "May 02, 2025", type: "news", category: "News ANI", image: 'https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20250502125106.jpg', link: "https://www.aninews.in/news/national/general-news/gujarat-cm-reviews-on-site-progress-of-overall-development-works-at-dholera-sir20250502184936/" },
    { id: 2, title: "Gujarat CM reviews development works at Dholera Special Investment Region", excerpt: "Gujarat CM Bhupendra Patel assessed the progress of the Tata Electronics semiconductor plant and the Dholera International Airport...", date: "May 03, 2025", type: "news", category: "Interview", image: 'https://etimg.etb2bimg.com/photo/120839350.cms', link: "https://infra.economictimes.indiatimes.com/news/urban-infrastructure/gujarat-cm-reviews-development-works-at-dholera-special-investment-region/120839327" },
    { id: 3, title: "P.K. Mishra reviews Gujarat infra projects, inspects expressway & heritage complex", excerpt: "Dr. P.K. Mishra, Principal Secretary to the Prime Minister, conducted site inspections and chaired high-level review meetings in Dholera and Lothal.", date: "Jun 16, 2025", type: "news", category: "Report", image: 'https://ddnews.gov.in/wp-content/uploads/2025/06/GettyImages-633657840.jpg', link: "https://ddnews.gov.in/en/p-k-mishra-reviews-gujarat-infra-projects-inspects-expressway-heritage-complex/" },
    { id: 4, title: "Greenfield Expressway: हाईवे से अहमदाबाद-धोलेरा की यात्रा में बचेंगे 45 मिनट", excerpt: "डॉ. मिश्र ने वैश्विक स्तरीय अहमदाबाद-धोलेरा ग्रीनफील्ड एक्सप्रेसवे को समय पर पूरा करने को लेकर निर्देश दिए।", date: "Jun 2025", type: "news", category: "Feature", image: 'https://staticimg.amarujala.com/assets/images/2024/11/02/india-committed-to-sendai-framework-for-disaster-risk-reduction-principal-secretary-to-pm_910ff360ae04c23f026bcb89c8044da5.jpeg?w=674&dpr=1.0&q=80', link: "https://www.amarujala.com/india-news/pk-mishra-says-greenfield-expressway-construction-tol-save-45-minutes-in-travel-between-ahmedabad-and-dholera-2025-06-17" },
    { id: 5, title: "Japan fully committed to India's journey to manufacture semiconductors: Envoy", excerpt: "The visit marked a significant milestone in advancing industrial cooperation between India and Japan.", date: "Jul 12, 2025", type: "news", category: "Analysis", image: 'https://etimg.etb2bimg.com/photo/122400124.cms', link: "https://manufacturing.economictimes.indiatimes.com/news/hi-tech/japan-fully-committed-to-indias-journey-to-manufacture-semiconductors-envoy-ono-keiichi/122400107" },
    { id: 6, title: "Japanese Ambassador leads high-level delegation to Dholera", excerpt: "The Ambassador of Japan to India led a high-level delegation on an official visit to Dholera SIR.", date: "Jul 10, 2025", type: "news", category: "Update", image: 'https://images.moneycontrol.com/static-mcnews/2025/07/20250710174410_Dholera.png?impolicy=website&width=770&height=431', link: "https://www.moneycontrol.com/world/japanese-ambassador-leads-high-level-delegation-to-dholera-to-advance-japan-india-industrial-cooperation-article-13262814.html" },
    { id: 7, title: "ધોલેરા SIRની મુલાકાતે જાહેર હિસાબ સમિતિ", excerpt: "ગુજરાત વિધાનસભાની જાહેર હિસાબ સમિતિ (PAC)એ ધોલેરા SIRની મુલાકાત લીધી હતી.", date: "Aug 12, 2025", type: "news", category: "Community", image: 'https://images.bhaskarassets.com/webp/thumb/512x0/web2images/960/2025/07/17/17da5a72-507c-4304-bdd9-37f8f8c245a6_1752723650762.jpg', link: "https://www.divyabhaskar.co.in/local/gujarat/ahmedabad/dholera/news/gujarat-assembly-pac-dholera-sir-visit-tata-semiconductor-plant-water-treatment-135467086.html" },
    { id: 8, title: "Product nation: Dholera and India's quest to build factories for the world", excerpt: "A guided tour of the Dholera SIR typically starts with a short audio-visual presentation.", date: "Jan 30, 2026", type: "news", category: "Development", image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2025-05/28/full/1748453868-4954.jpg?im=FitAndFill=(826,465)', link: "https://www.business-standard.com/economy/news/product-nation-dholera-and-india-s-quest-to-build-factories-for-the-world-125052801923_1.html" },
    { id: 9, title: "Nestoria Group Announces New Residential Project Launch in Dholera SIR", excerpt: "Leading real estate developer unveils premium residential plots with modern amenities in India's first smart city.", date: "March 10, 2026", type: "press", category: "Press Release", image: 'https://nestoriagroup.com/news-images/news1.jpeg', link: "#" },
    { id: 10, title: "Nestoria Group Partners with Global Tech Giants for Dholera Development", excerpt: "Strategic collaboration aims to bring world-class infrastructure and technology to Dholera SIR.", date: "March 05, 2026", type: "press", category: "Press Release", image: 'https://nestoriagroup.com/news-images/news2.jpeg', link: "#" },
    { id: 11, title: "Nestoria Group Achieves Record Sales in Q1 2026", excerpt: "Company reports unprecedented growth in residential and commercial property investments in Dholera SIR.", date: "Feb 28, 2026", type: "press", category: "Press Release", image: 'https://nestoriagroup.com/news-images/news3.jpeg', link: "#" },
    { id: 12, title: "Nestoria Group Launches Affordable Housing Initiative", excerpt: "New initiative makes dream homes accessible to middle-income families in Dholera's emerging hub.", date: "Feb 20, 2026", type: "press", category: "Press Release", image: 'https://nestoriagroup.com/news-images/news4.jpeg', link: "#" },
    { id: 13, title: "Nestoria Group Receives Excellence Award for Sustainable Development", excerpt: "Recognition for outstanding contribution to eco-friendly construction practices and green building initiatives.", date: "Feb 15, 2026", type: "press", category: "Press Release", image: 'https://nestoriagroup.com/news-images/news5.jpeg', link: "#" },
    { id: 14, title: "Nestoria Group Expands Commercial Portfolio with New Business Hub", excerpt: "State-of-the-art commercial complex to boost business opportunities and economic growth in Dholera.", date: "Feb 10, 2026", type: "press", category: "Press Release", image: 'https://nestoriagroup.com/news-images/news6.jpeg', link: "#" },
    { id: 15, title: "Dholera Smart City | Nitin Sir Podcast", excerpt: "Discover how Nestoria Group is revolutionizing real estate development in India's first smart city.", date: "March 2026", type: "video", category: "Promotional", image: 'https://img.youtube.com/vi/FmrBK8TmAvQ/hqdefault.jpg', link: "https://www.youtube.com/embed/FmrBK8TmAvQ" },
    { id: 16, title: "TATA's ₹91000 Crore Investment Creates INDIA's Fastest Growing City!", excerpt: "Explore the vision and progress of Dholera Special Investment Region.", date: "March 2026", type: "video", category: "Documentary", image: 'https://img.youtube.com/vi/884m9TUxxAo/hqdefault.jpg', link: "https://www.youtube.com/embed/884m9TUxxAo" },
    { id: 17, title: "Tell Your Story | Episode 1 | Nitin Singh Tomar, MD, Nestoria Group", excerpt: "Witness the transformation and groundbreaking development of Dholera SIR.", date: "March 2026", type: "video", category: "Documentary", image: 'https://img.youtube.com/vi/WRjG9ETnCz0/hqdefault.jpg', link: "https://www.youtube.com/embed/WRjG9ETnCz0" },
  ];

  const filteredItems = activeFilter === 'all' ? mediaData : mediaData.filter(item => item.type === activeFilter);

  const openDialog = (type, url, title) => { setDialogContent({ type, url, title }); setDialogOpen(true); };
  const closeDialog = () => { setDialogOpen(false); setDialogContent({ type: '', url: '', title: '' }); };

  const filterButtons = [
    { id: 'all', label: 'All Media', icon: Grid },
    { id: 'news', label: 'News Articles', icon: Newspaper },
    { id: 'press', label: 'Press Releases', icon: Megaphone },
    { id: 'video', label: 'Videos', icon: Video },
    { id: 'photo', label: 'Photo Gallery', icon: Camera },
  ];

  const renderMediaItem = (item) => {
    switch (item.type) {
      case 'video':
        return (
          <div className="h-full bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden group">
            <div className="relative">
              <iframe src={`${item.link}?enablejsapi=1&rel=0`} title={item.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full rounded-t-3xl" style={{ height: '250px' }} referrerPolicy="strict-origin-when-cross-origin"></iframe>
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer" onClick={() => openDialog('video', item.link, item.title)}>
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg"><Play className="w-5 h-5 text-blue-600 ml-0.5" /></div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-red-500 rounded-lg flex items-center justify-center"><Video className="w-3.5 h-3.5 text-white" /></div>
                <span className="text-xs font-semibold text-red-600">Video</span>
              </div>
              <h5 className="text-lg font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">{item.title}</h5>
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <Calendar className="w-3.5 h-3.5" />{item.date}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{item.excerpt}</p>
            </div>
          </div>
        );
      case 'photo':
        return (
          <div className="h-full bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
              <img src={item.image} className="w-full group-hover:scale-105 transition-transform duration-500" alt={item.title} style={{ height: '200px', objectFit: 'cover' }} />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-emerald-500 rounded-lg flex items-center justify-center"><Camera className="w-3.5 h-3.5 text-white" /></div>
                <span className="text-xs font-semibold text-emerald-600">Photo Gallery</span>
              </div>
              <h5 className="text-lg font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">{item.title}</h5>
            </div>
          </div>
        );
      default:
        return (
          <div className="h-full bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
              <img src={item.image} className="w-full group-hover:scale-105 transition-transform duration-500" alt={item.title} style={{ height: '200px', objectFit: 'cover' }} />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-7 h-7 ${item.type === 'news' ? 'bg-blue-500' : 'bg-purple-500'} rounded-lg flex items-center justify-center`}>
                  {item.type === 'news' ? <Newspaper className="w-3.5 h-3.5 text-white" /> : <Megaphone className="w-3.5 h-3.5 text-white" />}
                </div>
                <span className={`text-xs font-semibold ${item.type === 'news' ? 'text-blue-600' : 'text-purple-600'}`}>
                  {item.type === 'news' ? 'News Article' : 'Press Release'}
                </span>
                <span className="ml-auto text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">{item.category}</span>
              </div>
              <h5 className="text-lg font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">{item.title}</h5>
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                <Calendar className="w-3.5 h-3.5" />{item.date}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">{item.excerpt}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="overflow-hidden bg-slate-50 text-slate-900">
      <Seo
        title="Media Coverage & Press Releases | Nestoria Group Dholera SIR"
        description="Explore national media coverage, TV interviews, press releases, and news reports on Nestoria Group's developments and investments in Dholera SIR."
        keywords="Nestoria Group media, Dholera SIR press release, Dholera news coverage, ANI news Dholera, Economic Times Dholera"
        canonicalUrl="/media"
        schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Media', url: '/media' }])}
      />
      {/* Dialog */}
      {dialogOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-white rounded-3xl shadow-2xl">
            <button onClick={closeDialog} className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10">
              <X className="w-5 h-5 text-gray-600" />
            </button>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4">{dialogContent.title}</h3>
              {dialogContent.type === 'video' ? (
                <div className="relative pb-[56.25%] h-0">
                  <iframe src={`${dialogContent.url}?autoplay=1&enablejsapi=1&rel=0`} className="absolute top-0 left-0 w-full h-full rounded-2xl" title={dialogContent.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
              ) : (
                <img src={dialogContent.url} alt={dialogContent.title} className="w-full rounded-2xl" />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15),_transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span>Media Center</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 font-condor tracking-tight leading-[1.15]">
              Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Center</span>
            </h1>
            <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Stay updated with the latest news, press releases, videos, and photos from Nestoria Group and Dholera SIR
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filterButtons.map((fb) => {
              const Icon = fb.icon;
              return (
                <button key={fb.id} onClick={() => setActiveFilter(fb.id)} className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === fb.id ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
                  <Icon className="w-4 h-4" />
                  {fb.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (<div key={item.id}>{renderMediaItem(item)}</div>))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="bg-white rounded-3xl border border-slate-200 p-12 max-w-md mx-auto">
                  <Search className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-800 mb-3">No media items found</h3>
                  <p className="text-slate-500 mb-6">We couldn't find any media matching your criteria.</p>
                  <button onClick={() => setActiveFilter('all')} className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all">
                    <RefreshCw className="w-4 h-4" />View All Media
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 md:py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200">Inquiries</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              For press inquiries, interview requests, or additional information about Nestoria Group and Dholera SIR.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Mail, title: "Email Us", desc: "Send your media inquiries directly to our press team.", btn: "marketing@nestoriagroup.com", href: "mailto:marketing@nestoriagroup.com" },
              { icon: Phone, title: "Call Us", desc: "Speak directly with our media relations team.", btn: "+919213005611", href: "tel:+919213005611" },
              { icon: Download, title: "Press Kit", desc: "Download our press kit with company information and logos.", btn: "Download Press Kit", href: "#" },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="w-14 h-14 bg-blue-600/30 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{c.title}</h4>
                  <p className="text-white/60 mb-5 text-sm">{c.desc}</p>
                  <a href={c.href} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-600/30">
                    {c.btn}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Media;
