import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Search, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import { INVESTOR_BRIEFS } from '../data/investorBriefs';

export function InvestorBrief() {
  const [searchQuery, setSearchQuery] = useState('');

  // Show only first 3 briefs
  const displayBriefs = INVESTOR_BRIEFS.slice(0, 3);

  const filteredBriefs = displayBriefs.filter(brief => {
    const matchesSearch = brief.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          brief.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
          <span className="text-sm text-[#D4AF37] uppercase tracking-wider font-medium">Market Intelligence</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Investor Briefs</h1>
        <p className="text-gray-400 text-lg max-w-3xl">
          Expert analysis, market insights, and investment opportunities curated by our research team. 
          Stay ahead with data-driven intelligence.
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12"
      >
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search briefs by title or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#111111] border border-[#D4AF37]/20 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-600 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/30 outline-none transition-all"
          />
        </div>
      </motion.div>

      {/* Featured Brief - Latest */}
      {filteredBriefs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            Latest Brief
          </h2>
          <Link
            to={`/dashboard/investor-brief/${filteredBriefs[0].slug}`}
            className="group block bg-[#111111] border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37] transition-all"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden bg-black">
                <img
                  src={filteredBriefs[0].image}
                  alt={filteredBriefs[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider rounded">
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="px-2 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded border border-[#D4AF37]/30">
                    {filteredBriefs[0].category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {filteredBriefs[0].date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {filteredBriefs[0].readTime}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {filteredBriefs[0].title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {filteredBriefs[0].excerpt}
                </p>

                <div className="flex items-center gap-2 text-[#D4AF37] font-medium text-sm group-hover:gap-3 transition-all">
                  Read Full Brief
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      {/* Other Briefs */}
      {filteredBriefs.length > 1 && (
        <div>
          <h2 className="text-xs text-gray-500 uppercase tracking-widest mb-6">
            More Briefs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredBriefs.slice(1).map((brief, index) => (
              <motion.div
                key={brief.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 2) }}
              >
                <Link
                  to={`/dashboard/investor-brief/${brief.slug}`}
                  className="group block bg-[#111111] border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37] hover:-translate-y-1 transition-all"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-black">
                    <img
                      src={brief.image}
                      alt={brief.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 px-2 py-1 bg-[#D4AF37]/90 text-black text-xs font-bold uppercase tracking-wider rounded">
                      {brief.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {brief.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {brief.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                      {brief.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-4">
                      {brief.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-[#D4AF37] font-medium text-sm group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredBriefs.length === 0 && (
        <div className="text-center py-16 bg-[#111111] border border-[#D4AF37]/20 rounded-xl">
          <p className="text-gray-500 mb-2">No briefs found matching your search</p>
          <button
            onClick={() => setSearchQuery('')}
            className="text-[#D4AF37] hover:underline text-sm"
          >
            Clear search
          </button>
        </div>
      )}

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-16 bg-gradient-to-br from-[#D4AF37]/10 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-xl p-8 text-center"
      >
        <h3 className="text-2xl font-serif text-white mb-3">
          Want Exclusive Market Insights?
        </h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Premium members receive weekly deep-dive reports, early access to off-market opportunities, 
          and direct analyst consultations.
        </p>
        <Link
          to="/dashboard/profile?tab=subscription"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-black rounded-lg hover:bg-[#F4CF57] transition-all font-medium"
        >
          Upgrade to Premium
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
}
