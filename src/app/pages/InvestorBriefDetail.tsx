import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowLeft, Download, Share2, Bookmark } from 'lucide-react';
import { useParams, useNavigate, Link } from 'react-router';
import { INVESTOR_BRIEFS } from '../data/investorBriefs';

export function InvestorBriefDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const brief = INVESTOR_BRIEFS.find(b => b.slug === slug);

  if (!brief) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl text-white mb-4">Brief Not Found</h2>
        <Link to="/dashboard/investor-brief" className="text-[#D4AF37] hover:underline">
          Back to All Briefs
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto">
      {/* Navigation */}
      <button
        onClick={() => navigate('/dashboard/investor-brief')}
        className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm uppercase tracking-wider font-medium">Back to All Briefs</span>
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-xs mb-4">
            <span className="px-3 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded border border-[#D4AF37]/30 uppercase tracking-wider font-bold">
              {brief.category}
            </span>
            <span className="flex items-center gap-2 text-gray-500">
              <Calendar className="w-3 h-3" />
              {brief.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
            <span className="flex items-center gap-2 text-gray-500">
              <Clock className="w-3 h-3" />
              {brief.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            {brief.title}
          </h1>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mb-8">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all text-sm font-medium">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#111111] border border-[#D4AF37]/20 text-gray-400 rounded-lg hover:border-[#D4AF37] hover:text-white transition-all text-sm">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#111111] border border-[#D4AF37]/20 text-gray-400 rounded-lg hover:border-[#D4AF37] hover:text-white transition-all text-sm">
              <Bookmark className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-[21/9] rounded-xl overflow-hidden mb-12 bg-[#111] border border-[#D4AF37]/10">
          <img
            src={brief.image}
            alt={brief.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Intro */}
          <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light border-l-2 border-[#D4AF37] pl-6">
            {brief.content.intro}
          </p>

          {/* Sections */}
          <div className="space-y-8 text-gray-400 leading-relaxed">
            {brief.content.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-2xl font-serif text-white mt-12 mb-4">
                  {section.heading}
                </h3>
                <p>{section.text}</p>
              </div>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="bg-[#111111] border border-[#D4AF37]/20 p-8 rounded-xl my-12">
            <h4 className="font-serif text-white text-xl mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-[#D4AF37] rounded-full"></span>
              Key Takeaways
            </h4>
            <ul className="space-y-4">
              {brief.content.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="text-[#D4AF37] text-xl mt-1">•</span>
                  <span className="text-gray-300">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conclusion */}
          <p className="text-gray-400 leading-relaxed">
            {brief.content.conclusion}
          </p>
        </div>

        {/* Author / Footer */}
        <div className="mt-16 pt-8 border-t border-[#D4AF37]/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-bold font-serif text-xl">
                IH
              </div>
              <div>
                <div className="text-white font-medium text-lg">{brief.author}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Official Market Report</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all font-medium text-sm">
                <Download className="w-4 h-4 inline mr-2" />
                Download Full Report
              </button>
              <button className="px-5 py-2.5 bg-[#111111] border border-[#D4AF37]/20 text-gray-400 rounded-lg hover:border-[#D4AF37] hover:text-white transition-all font-medium text-sm">
                <Share2 className="w-4 h-4 inline mr-2" />
                Share Brief
              </button>
            </div>
          </div>
        </div>

        {/* Related Briefs */}
        <div className="mt-16">
          <h3 className="text-xs text-gray-500 uppercase tracking-widest mb-6">Related Briefs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INVESTOR_BRIEFS.filter(b => b.id !== brief.id && b.category === brief.category)
              .slice(0, 2)
              .map(relatedBrief => (
                <Link
                  key={relatedBrief.id}
                  to={`/dashboard/investor-brief/${relatedBrief.slug}`}
                  className="group block bg-[#111111] border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37] transition-all"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-black">
                    <img
                      src={relatedBrief.image}
                      alt={relatedBrief.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span>{relatedBrief.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                      <span>{relatedBrief.readTime}</span>
                    </div>
                    <h4 className="text-lg font-serif text-white group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                      {relatedBrief.title}
                    </h4>
                  </div>
                </Link>
              ))}
          </div>

          {INVESTOR_BRIEFS.filter(b => b.id !== brief.id && b.category === brief.category).length === 0 && (
            <p className="text-center text-gray-500 py-8 bg-[#111111] border border-[#D4AF37]/20 rounded-xl">
              No related briefs available
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
