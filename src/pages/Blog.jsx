// src/pages/Blog.jsx
import React, { useState, useEffect, useMemo } from 'react';
import Seo from '../components/Seo';
import { getArticleSchema, getBreadcrumbSchema } from '../utils/SchemaMarkup';
import { 
  Calendar, Clock, User, ExternalLink, Search, Sparkles, 
  ArrowRight, BookOpen, Share2, X, CheckCircle2, ShieldCheck,
  Building2, Cpu, TrendingUp, Compass, MessageSquare
} from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import blogbanner from '../assets/img/blog.webp';
import { blogPostsData } from '../data/blogData';
import { openSiteVisitModal } from '../components/SiteVisitModal';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingPost, setReadingPost] = useState(null);
  const [copiedSlug, setCopiedSlug] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'All Insights', icon: BookOpen },
    { id: '3d-construction', name: '3D Construction & Homes', icon: Building2 },
    { id: 'investment', name: 'Investment & ROI', icon: TrendingUp },
    { id: 'infrastructure', name: 'Smart Infrastructure', icon: Cpu },
    { id: 'guides', name: 'NRI & Buyer Guides', icon: Compass }
  ];

  const filteredPosts = useMemo(() => {
    return blogPostsData.filter((post) => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const matchesSearch = !searchQuery.trim() ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleShare = (e, post) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/blog#${post.slug}`);
      setCopiedSlug(post.slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    }
  };

  return (
    <div className="blog-page bg-white min-h-screen">
      <Seo
        title={readingPost ? `${readingPost.title} | Nestoria Group Blog` : "Dholera Real Estate Blog | Smart City Investment Insights & Guides"}
        description={readingPost ? readingPost.excerpt : "Read expert insights on Dholera SIR real estate investments, 3D printed villas, Tata semiconductor plant impact, airport connectivity, and NRI land buying guides."}
        keywords={readingPost ? `${readingPost.title}, Dholera SIR, Nestoria Group blog` : "Dholera real estate blog, Dholera SIR investment guide, 3D printed homes Dholera, Tata fab property impact, Dholera expressway updates"}
        canonicalUrl={readingPost ? `/blog#${readingPost.slug}` : "/blog"}
        imageUrl={readingPost ? readingPost.image : blogbanner}
        schemaMarkup={readingPost ? [
          getArticleSchema({
            title: readingPost.title,
            image: readingPost.image,
            excerpt: readingPost.excerpt,
            author: readingPost.author,
            datePublished: readingPost.date,
            url: `/blog#${readingPost.slug}`
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: readingPost.title, url: `/blog#${readingPost.slug}` }
          ])
        ] : [
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' }
          ])
        ]}
      />

      {/* Hero Header */}
      <ParallaxSection
        backgroundImage={blogbanner}
        height="auto"
        overlayGradient="linear-gradient(to bottom, rgba(3, 22, 65, 0.75), rgba(3, 22, 65, 0.9))"
        speed={0.3}
        className="py-16 md:py-24 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4 relative z-10 w-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              Thought Leadership & Smart City Intel
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              Nestoria <span className="text-blue-400">Insights & Blog</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              In-depth research, 3D construction breakthroughs, NRI investment checklists, and macro trends shaping Dholera Smart City.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Main Content Area */}
      <section className="py-12 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Filter & Search Bar */}
          <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length === 0 ? (
            <div className="max-w-md mx-auto text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800 mb-1">No Articles Found</h3>
              <p className="text-xs text-slate-500 mb-4">
                No matching articles found for "{searchQuery}". Try a different search term or category.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="px-4 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl shadow hover:bg-blue-700 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setReadingPost(post)}
                  className="bg-white rounded-3xl border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group cursor-pointer"
                >
                  {/* Article Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600/95 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        {post.categoryName}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-0.5 rounded-md flex items-center gap-1">
                      <Clock className="w-3 h-3 text-blue-300" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-blue-600" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-semibold text-slate-700">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          {post.author}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={(e) => handleShare(e, post)}
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                        title="Share article"
                      >
                        {copiedSlug === post.slug ? (
                          <span className="text-[10px] font-bold text-emerald-600">Copied!</span>
                        ) : (
                          <Share2 className="w-4 h-4" />
                        )}
                      </button>

                      <div className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                        <span>Read Full Story</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Banner Call-to-Action */}
          <div className="mt-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-blue-800/40">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <span className="bg-blue-500/30 text-blue-200 text-[11px] font-bold uppercase px-3 py-1 rounded-full border border-blue-400/30">
                Experience Dholera In Person
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Want to Inspect TP 2 & 3D Printed Homes?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Join our daily complimentary VIP chauffeur site visit from Ahmedabad with a senior property advisor.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <button
                onClick={() => openSiteVisitModal()}
                className="py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all cursor-pointer"
              >
                Book Free Site Visit
              </button>
              <a
                href="https://wa.me/919213005611?text=Hello%20Nestoria%20Group,%20I%20read%20your%20blog%20and%20want%20to%20know%20more%20about%20plots."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      {readingPost && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in overflow-y-auto"
          onClick={() => setReadingPost(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative aspect-[16/8] bg-slate-900">
              <img 
                src={readingPost.image} 
                alt={readingPost.title} 
                className="w-full h-full object-cover opacity-80"
              />
              <button
                onClick={() => setReadingPost(null)}
                className="absolute top-4 right-4 p-2 bg-slate-900/70 hover:bg-slate-900 text-white rounded-full transition-colors focus:outline-none"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="bg-blue-600 text-white text-[11px] font-bold uppercase px-3 py-1 rounded-full shadow-md">
                  {readingPost.categoryName}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>{readingPost.date}</span>
                <span>•</span>
                <span>By {readingPost.author}</span>
                <span>•</span>
                <span>{readingPost.readTime}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                {readingPost.title}
              </h2>

              <p className="text-sm font-semibold text-slate-700 leading-relaxed bg-blue-50/70 p-4 rounded-2xl border border-blue-100">
                {readingPost.excerpt}
              </p>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line space-y-3">
                {readingPost.content}
              </div>

              {/* Source & Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                {readingPost.link && (
                  <a
                    href={readingPost.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
                  >
                    <span>View Original Publication ({readingPost.author})</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={() => { setReadingPost(null); openSiteVisitModal(); }}
                  className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition-all ml-auto cursor-pointer"
                >
                  Book Free Site Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Blog;
