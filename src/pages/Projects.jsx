// src/pages/Projects.jsx
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, MapPin, ShieldCheck, ArrowRight, 
  Car, CheckCircle2, SlidersHorizontal, Sparkles
} from 'lucide-react';
import { allProjects } from '../data/projectsData';
import Seo from '../components/Seo';
import ProjectVideosSlider from '../components/ProjectVideosSlider';
import confetti from 'canvas-confetti';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  
  // Site Visit Modal
  const [selectedProjectForTour, setSelectedProjectForTour] = useState(null);
  const [tourForm, setTourForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    pickup: 'Ahmedabad Corporate Office (Satellite Road)'
  });
  const [tourConfirmed, setTourConfirmed] = useState(false);

  // Filter & Search Logic
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // Category filter
      const matchesCategory = 
        activeCategory === 'all' ||
        (activeCategory === 'residential' && project.type === 'residential' && !project.title.toLowerCase().includes('villa')) ||
        (activeCategory === 'villa' && (project.isVilla || project.title.toLowerCase().includes('villa'))) ||
        (activeCategory === 'commercial' && (project.type === 'commercial' || project.type === 'industrial'));

      // Zone filter
      const matchesZone = 
        selectedZone === 'all' || 
        project.zone.toLowerCase().includes(selectedZone.toLowerCase());

      // Search Query
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.zone.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query);

      return matchesCategory && matchesZone && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') {
        const pA = parseFloat(a.price.replace(/[^\d.]/g, '')) || 0;
        const pB = parseFloat(b.price.replace(/[^\d.]/g, '')) || 0;
        return pA - pB;
      }
      if (sortBy === 'price-high') {
        const pA = parseFloat(a.price.replace(/[^\d.]/g, '')) || 0;
        const pB = parseFloat(b.price.replace(/[^\d.]/g, '')) || 0;
        return pB - pA;
      }
      return 0; // featured / default
    });
  }, [activeCategory, selectedZone, searchQuery, sortBy]);

  const handleTourSubmit = (e) => {
    e.preventDefault();
    if (!tourForm.name || !tourForm.phone) {
      alert('Please enter your name and phone number');
      return;
    }

    const refId = `NST-${Math.floor(100000 + Math.random() * 900000)}`;
    const leads = JSON.parse(localStorage.getItem('nestoria_leads') || '[]');
    leads.push({
      id: refId,
      timestamp: new Date().toISOString(),
      project: selectedProjectForTour?.title || 'General Site Visit',
      ...tourForm
    });
    localStorage.setItem('nestoria_leads', JSON.stringify(leads));

    setTourConfirmed(true);
    try {
      confetti({ particleCount: 90, spread: 60, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Nestoria Group Projects in Dholera SIR",
    "description": "Comprehensive list of residential plots, luxury villas, and commercial land developments in Dholera Smart City.",
    "numberOfItems": allProjects.length,
    "itemListElement": allProjects.map((p, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": p.title,
      "url": `https://nestoriagroup.com/project/${p.slug}`
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Seo
        title="Projects in Dholera SIR | Residential Plots, Villas & Commercial Land | Nestoria Group"
        description="Explore 100% Clear Title AUDA & SIRDA approved residential and commercial plots in Dholera SIR. Immediate registry, starting from ₹ 11.5 Lakhs. Book free VIP site visit."
        keywords="Dholera SIR projects, Dholera Bhoomi, Orchid River View, Orchid Villa Gold, Dholera plots for sale, Nestoria Group projects"
        canonicalUrl="/projects"
        schemaMarkup={schemaData}
      />

      {/* Hero Header Section */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
            <Sparkles className="w-4 h-4" />
            100% NA Title Clear & AUDA / SIRDA Approved
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Our Master-Planned <span className="text-blue-600">Townships in Dholera SIR</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Discover government-sanctioned residential, luxury villa, and commercial plotting projects in India's fastest growing greenfield smart city.
          </p>

          {/* Search & Filter Controls Bar */}
          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-3xl p-4 sm:p-5 shadow-sm max-w-3xl mx-auto space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search by project name, zone, or keyword (e.g., 'Bhoomi', 'TP2', 'Villa')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 placeholder:text-slate-400 shadow-2xs"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'All Projects' },
                  { id: 'residential', label: 'Residential' },
                  { id: 'villa', label: 'Luxury Villas' },
                  { id: 'commercial', label: 'Commercial / Land' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                      activeCategory === cat.id
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-slate-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xs sm:text-sm font-semibold text-slate-500">
              Showing <strong className="text-slate-900">{filteredProjects.length}</strong> Verified Projects in Dholera SIR
            </span>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto border border-slate-200 shadow-sm">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No Projects Found</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">Try adjusting your search criteria or clear your filters.</p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); setSelectedZone('all'); }}
                className="px-5 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-md"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Project Image & Badges */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Top status badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="bg-blue-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        {project.status}
                      </span>
                      <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full shadow-md">
                        100% Clear Title
                      </span>
                    </div>

                    {/* Zone tag bottom right */}
                    <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                      {project.zone}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {project.logo && (
                        <div className="w-full h-12 mb-3 flex items-center">
                          <img src={project.logo} alt={`${project.title} logo`} className="max-w-[180px] max-h-12 object-contain object-left" />
                        </div>
                      )}
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {project.pricePerSqYd}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        <Link to={`/project/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Attributes Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-400 block">Plot Sizes</span>
                        <strong className="text-slate-800 font-semibold truncate block">{project.plotSizes}</strong>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-400 block">Starting From</span>
                        <strong className="text-blue-700 font-bold block">{project.price}</strong>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <Link
                        to={`/project/${project.slug}`}
                        className="py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 group/btn"
                      >
                        View Details
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                      <button
                        onClick={() => {
                          setSelectedProjectForTour(project);
                          setTourConfirmed(false);
                        }}
                        className="py-2.5 px-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1"
                      >
                        <Car className="w-3.5 h-3.5 text-blue-600" />
                        Site Visit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Video Slider Showcase */}
      <ProjectVideosSlider />

      {/* Free Site Visit Global Modal */}
      {selectedProjectForTour && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedProjectForTour(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Book Free VIP Site Tour</h3>
              <p className="text-xs text-slate-600 mt-1">
                Project: <strong className="text-blue-600">{selectedProjectForTour.title}</strong>
              </p>
            </div>

            {tourConfirmed ? (
              <div className="text-center py-6 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-lg text-slate-900">Your VIP Tour is Confirmed!</h4>
                <p className="text-xs text-slate-600">
                  Our hospitality manager will contact you at {tourForm.phone} with vehicle pickup details.
                </p>
                <button
                  onClick={() => setSelectedProjectForTour(null)}
                  className="py-2.5 px-6 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-md"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleTourSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={tourForm.name}
                    onChange={(e) => setTourForm({ ...tourForm, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={tourForm.phone}
                      onChange={(e) => setTourForm({ ...tourForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={tourForm.date}
                      onChange={(e) => setTourForm({ ...tourForm, date: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Pickup Location</label>
                  <select
                    value={tourForm.pickup}
                    onChange={(e) => setTourForm({ ...tourForm, pickup: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-slate-800"
                  >
                    <option value="Ahmedabad Corporate Office (Satellite Road)">Ahmedabad Corporate Office</option>
                    <option value="Ahmedabad Airport (SVP International)">Ahmedabad Airport</option>
                    <option value="Sabarmati / Kalupur Railway Station">Sabarmati / Kalupur Station</option>
                    <option value="Direct Dholera Site Office (Self Drive)">Direct Dholera Site Office</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Confirm Free VIP Site Tour
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
