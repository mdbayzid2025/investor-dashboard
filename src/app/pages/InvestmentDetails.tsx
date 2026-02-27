import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  ArrowLeft, 
  MapPin, 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  FileText, 
  Shield, 
  Users,
  Star,
  CheckCircle,
  MessageSquare,
  Bookmark
} from 'lucide-react';
import { Button } from '@/app/components/Button';

export function InvestmentDetails() {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  const investment = {
    id: 1,
    title: 'Premium Real Estate Development',
    category: 'Real Estate',
    location: 'Sandton, Johannesburg',
    amount: 'R5M - R10M',
    minInvestment: 'R500,000',
    returns: '18-22% p.a.',
    duration: '3-5 years',
    description: 'Luxury residential development in prime location. Secure ROI with established developer. This project represents a unique opportunity to invest in high-end residential property in one of Johannesburg\'s most prestigious areas.',
    verified: true,
    postedDate: 'January 10, 2026',
    expiryDate: 'February 28, 2026',
    investorCount: 12,
    highlights: [
      'Prime location in Sandton CBD',
      'Established developer with 15+ years experience',
      'Pre-sales already secured for 40% of units',
      'Expected completion Q4 2027',
      'Property appreciation potential of 15-20%',
      'Rental yield potential of 8-10% p.a.'
    ],
    risks: [
      'Construction delays due to weather or supply chain',
      'Market fluctuations affecting property values',
      'Regulatory changes in real estate sector',
      'Interest rate volatility'
    ],
    stages: [
      { name: 'Due Diligence', status: 'completed' },
      { name: 'Site Preparation', status: 'completed' },
      { name: 'Foundation', status: 'in-progress' },
      { name: 'Structure', status: 'pending' },
      { name: 'Completion', status: 'pending' }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Investor Board
        </button>

        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm">
                {investment.category}
              </span>
              {investment.verified && (
                <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  Verified
                </span>
              )}
            </div>
            <h1 className="text-5xl font-serif text-white mb-4">{investment.title}</h1>
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {investment.location}
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                {investment.investorCount} interested investors
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="p-3 bg-[#111111] border border-[#D4AF37]/20 rounded-lg hover:border-[#D4AF37] transition-colors"
          >
            <Bookmark className={`w-6 h-6 ${isSaved ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-gray-400'}`} />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="col-span-2 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm">Expected Returns</span>
              </div>
              <div className="text-3xl font-serif text-[#D4AF37]">{investment.returns}</div>
            </div>
            
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <DollarSign className="w-5 h-5" />
                <span className="text-sm">Investment Range</span>
              </div>
              <div className="text-3xl font-serif text-white">{investment.amount}</div>
            </div>
            
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="text-sm">Duration</span>
              </div>
              <div className="text-3xl font-serif text-white">{investment.duration}</div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
            <h2 className="text-2xl font-serif text-white mb-4">Investment Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-6">{investment.description}</p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-gray-400 mb-1">Minimum Investment</div>
                <div className="text-xl text-white font-serif">{investment.minInvestment}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Posted Date</div>
                <div className="text-xl text-white font-serif">{investment.postedDate}</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
            <h2 className="text-2xl font-serif text-white mb-4">Key Highlights</h2>
            <div className="grid grid-cols-2 gap-3">
              {investment.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Timeline */}
          <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
            <h2 className="text-2xl font-serif text-white mb-6">Project Timeline</h2>
            <div className="space-y-4">
              {investment.stages.map((stage, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    stage.status === 'completed' 
                      ? 'bg-green-500/20 border-green-500 text-green-400' 
                      : stage.status === 'in-progress'
                      ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]'
                      : 'bg-[#1A1A1A] border-gray-600 text-gray-600'
                  }`}>
                    {stage.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium">{stage.name}</div>
                    <div className="text-sm text-gray-400 capitalize">{stage.status.replace('-', ' ')}</div>
                  </div>
                  {index < investment.stages.length - 1 && (
                    <div className={`h-12 w-0.5 ml-5 -mb-8 ${
                      stage.status === 'completed' ? 'bg-green-500' : 'bg-gray-700'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Risk Disclosure */}
          <div className="bg-gradient-to-br from-amber-500/10 to-[#111111] border border-amber-500/30 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="w-6 h-6 text-amber-400 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-serif text-white mb-2">Risk Disclosure</h2>
                <p className="text-sm text-gray-300 mb-4">
                  All investments carry risk. Please review the following potential risks before proceeding.
                </p>
              </div>
            </div>
            <ul className="space-y-2">
              {investment.risks.map((risk, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Action Card */}
          <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#111111] border border-[#D4AF37]/30 rounded-lg p-6 sticky top-8">
            <div className="text-center mb-6">
              <div className="text-5xl font-serif text-[#D4AF37] mb-2">{investment.returns}</div>
              <div className="text-gray-300">Expected Annual Returns</div>
            </div>

            <div className="space-y-3 mb-6">
              <Button className="w-full py-4 text-lg">
                Express Interest
              </Button>
              <button className="w-full py-4 px-6 bg-[#111111] text-white border border-[#D4AF37]/30 rounded-lg hover:border-[#D4AF37] hover:bg-[#1A1A1A] transition-all flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Message Poster
              </button>
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/20 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Opportunity closes:</span>
                <span className="text-white">{investment.expiryDate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Posted anonymously:</span>
                <span className="text-white">{investment.postedDate}</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
            <h3 className="text-xl font-serif text-white mb-4">Documents Available</h3>
            <div className="space-y-3">
              {[
                'Investment Memorandum',
                'Financial Projections',
                'Legal Structure',
                'Due Diligence Report'
              ].map((doc, index) => (
                <button 
                  key={index}
                  className="w-full flex items-center justify-between p-3 bg-[#1A1A1A] rounded-lg hover:bg-[#2A2A2A] transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-white text-sm">{doc}</span>
                  </div>
                  <span className="text-xs text-gray-400">PDF</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Documents available after expressing interest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
