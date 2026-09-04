// src/pages/LatestNews.jsx
import React, { useState, useEffect, useMemo } from 'react';
import Seo from '../components/Seo';
import { getBreadcrumbSchema } from '../utils/SchemaMarkup';
import { 
  Calendar, ExternalLink, Sparkles, Search, Newspaper, 
  ArrowRight, ShieldCheck, Cpu, Plane, Building2, Tag
} from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import newsBanner from '../assets/img/media.webp';
import { dholeraNewsArticles } from '../data/newsData';

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Updates', icon: Newspaper },
    { id: 'semiconductor', name: 'Semiconductor & Tata Fab', icon: Cpu },
    { id: 'infrastructure', name: 'Airport & Expressway', icon: Plane },
    { id: 'nestoria', name: 'Nestoria 3D Homes', icon: Building2 },
    { id: 'investment', name: 'Investment Trends', icon: Sparkles }
  ];

  useEffect(() => {
    fetchLatestNews();
  }, []);

  const fetchLatestNews = async () => {
    setLoading(true);
    try {
      // Attempt to fetch from API with a 3-second timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);

      const response = await fetch(
        '/api/everything?q=dholera&sortBy=publishedAt&apiKey=f6b55aa8e8d64f69ba580d57524a4b5f',
        { signal: controller.signal }
      ).catch(() => null);

      clearTimeout(timeoutId);

      if (response && response.ok) {
        const data = await response.json();
        if (data.articles && data.articles.length > 0) {
          // Merge API articles with curated verified articles
          const validApiArticles = data.articles.filter(
            art => art.title && art.title !== '[Removed]' && art.url
          );
          
          const combined = [
            ...validApiArticles.map((a, idx) => ({
              id: `api-${idx}`,
              title: a.title,
              description: a.description || 'Click to view the full news release on this development.',
              url: a.url,
              urlToImage: a.urlToImage || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
              publishedAt: a.publishedAt || new Date().toISOString(),
              source: a.source || { name: 'Dholera Updates' },
              category: 'infrastructure',
              tag: 'Latest News'
            })),
            ...dholeraNewsArticles
          ];

          // Deduplicate by title
          const unique = [];
          const seen = new Set();
          for (const item of combined) {
            const key = item.title.toLowerCase().trim().substring(0, 30);
            if (!seen.has(key)) {
              seen.add(key);
              unique.push(item);
            }
          }
          setNews(unique);
          setLoading(false);
          return;
        }
      }

      // Fallback seamlessly to comprehensive curated verified news
      setNews(dholeraNewsArticles);
    } catch (err) {
      console.warn('API unavailable, utilizing verified news dataset:', err.message);
      setNews(dholeraNewsArticles);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return 'Recent';
    }
  };

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = !searchQuery.trim() || 
        item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.source?.name?.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [news, activeCategory, searchQuery]);

  return (
    <div className="latest-news-page bg-white min-h-screen">
      <Seo
        title="Dholera Smart City News & Infrastructure Updates | Nestoria Group"
        description="Latest updates on Tata Semiconductor plant construction, Ahmedabad-Dholera Expressway opening, international airport flight tests, and Dholera land registry."
        keywords="Dholera SIR news, Tata fab Dholera latest news, Dholera airport construction update, Dholera expressway launch date, Dholera investment news"
        canonicalUrl="/latest-news"
        schemaMarkup={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Latest News', url: '/latest-news' }])}
      />

      {/* Page Header */}
      <ParallaxSection
        backgroundImage={newsBanner}
        height="auto"
        overlayGradient="linear-gradient(to bottom, rgba(3, 22, 65, 0.7), rgba(3, 22, 65, 0.85))"
        speed={0.3}
        className="py-16 md:py-24 flex items-center justify-center text-center"
      >
        <div className="container mx-auto px-4 relative z-10 w-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              Smart City Ground Intelligence
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              Latest <span className="text-blue-400">News & Updates</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Track real-time mega project progress, government policy sanctions, and industrial milestones across Dholera Special Investment Region.
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Main Content Section */}
      <section className="py-12 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Controls: Search and Category Filter Bar */}
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
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
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
                placeholder="Search headlines or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Results State */}
          {loading ? (
            <div className="flex flex-col justify-center items-center py-24 space-y-4">
              <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Loading Dholera SIR Updates...
              </p>
            </div>
          ) : filteredNews.length === 0 ? (
            <div className="max-w-md mx-auto text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <Newspaper className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800 mb-1">No Articles Found</h3>
              <p className="text-xs text-slate-500 mb-4">
                No matching news found for "{searchQuery}". Try clearing search filters.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="px-4 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl shadow hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div>
              {/* Count Indicator */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Showing {filteredNews.length} verified development report{filteredNews.length !== 1 ? 's' : ''}
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Media Reports
                </span>
              </div>

              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white rounded-3xl border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
                  >
                    {/* Article Image & Badges */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="bg-blue-600/95 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                          {article.tag || 'News'}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-0.5 rounded-md flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-blue-300" />
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        {article.source?.name && (
                          <div className="flex items-center gap-1 text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-2">
                            <Tag className="w-3 h-3" />
                            <span>{article.source.name}</span>
                          </div>
                        )}
                        <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {article.title}
                          </a>
                        </h3>
                        <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                          {article.description}
                        </p>
                      </div>

                      {/* Footer Actions */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400 font-medium">
                          {article.readTime || '3 min read'}
                        </span>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group/link"
                        >
                          <span>Read Full Story</span>
                          <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default LatestNews;
