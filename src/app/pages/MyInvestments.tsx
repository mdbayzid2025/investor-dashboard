import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Calendar, 
  FileText,
  Download,
  Eye,
  MoreVertical,
  Filter
} from 'lucide-react';

type InvestmentStatus = 'active' | 'pending' | 'completed' | 'withdrawn';

interface Investment {
  id: number;
  title: string;
  category: string;
  status: InvestmentStatus;
  investmentAmount: string;
  currentValue: string;
  returns: string;
  returnPercentage: number;
  startDate: string;
  nextPayout?: string;
  documents: number;
}

export function MyInvestments() {
  const [filter, setFilter] = useState<'all' | InvestmentStatus>('all');

  const investments: Investment[] = [
    {
      id: 1,
      title: 'Premium Real Estate Development',
      category: 'Real Estate',
      status: 'active',
      investmentAmount: 'R2,500,000',
      currentValue: 'R2,875,000',
      returns: '+R375,000',
      returnPercentage: 15,
      startDate: 'June 15, 2025',
      nextPayout: 'Feb 28, 2026',
      documents: 8
    },
    {
      id: 2,
      title: 'Tech Startup Series A',
      category: 'Technology',
      status: 'active',
      investmentAmount: 'R1,000,000',
      currentValue: 'R1,280,000',
      returns: '+R280,000',
      returnPercentage: 28,
      startDate: 'September 10, 2025',
      nextPayout: 'March 15, 2026',
      documents: 12
    },
    {
      id: 3,
      title: 'Agricultural Export Venture',
      category: 'Agriculture',
      status: 'pending',
      investmentAmount: 'R500,000',
      currentValue: 'R500,000',
      returns: 'R0',
      returnPercentage: 0,
      startDate: 'January 5, 2026',
      documents: 4
    },
    {
      id: 4,
      title: 'Green Energy Project',
      category: 'Energy',
      status: 'completed',
      investmentAmount: 'R1,500,000',
      currentValue: 'R1,950,000',
      returns: '+R450,000',
      returnPercentage: 30,
      startDate: 'March 20, 2024',
      documents: 15
    }
  ];

  const filteredInvestments = filter === 'all' 
    ? investments 
    : investments.filter(inv => inv.status === filter);

  const totalInvested = investments.reduce((sum, inv) => {
    return sum + parseFloat(inv.investmentAmount.replace(/[R,]/g, ''));
  }, 0);

  const totalCurrentValue = investments.reduce((sum, inv) => {
    return sum + parseFloat(inv.currentValue.replace(/[R,]/g, ''));
  }, 0);

  const totalReturns = totalCurrentValue - totalInvested;
  const totalReturnPercentage = ((totalReturns / totalInvested) * 100).toFixed(1);

  const getStatusColor = (status: InvestmentStatus) => {
    switch (status) {
      case 'active': return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'pending': return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'completed': return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'withdrawn': return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-white mb-2">My Investments</h1>
        <p className="text-gray-400">Track and manage your investment portfolio</p>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
          <div className="flex items-center gap-3 text-gray-400 mb-2">
            <DollarSign className="w-5 h-5" />
            <span className="text-sm">Total Invested</span>
          </div>
          <div className="text-3xl font-serif text-white">R{totalInvested.toLocaleString()}</div>
        </div>

        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
          <div className="flex items-center gap-3 text-gray-400 mb-2">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm">Current Value</span>
          </div>
          <div className="text-3xl font-serif text-white">R{totalCurrentValue.toLocaleString()}</div>
        </div>

        <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#111111] border border-[#D4AF37]/30 rounded-lg p-6">
          <div className="flex items-center gap-3 text-gray-400 mb-2">
            <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm">Total Returns</span>
          </div>
          <div className="flex items-baseline gap-2">
            <div className="text-3xl font-serif text-[#D4AF37]">+{totalReturnPercentage}%</div>
            <div className="text-lg text-gray-300">R{totalReturns.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-2">
          {(['all', 'active', 'pending', 'completed'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors capitalize ${
                filter === status
                  ? 'bg-[#D4AF37] text-black'
                  : 'bg-[#111111] text-gray-400 hover:text-white border border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-[#111111] border border-[#D4AF37]/20 rounded-lg text-white hover:border-[#D4AF37] transition-colors">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* Investments List */}
      <div className="space-y-4">
        {filteredInvestments.map((investment) => (
          <div
            key={investment.id}
            className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/50 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-serif text-white">{investment.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(investment.status)}`}>
                    {investment.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full">
                    {investment.category}
                  </span>
                  <span>Started: {investment.startDate}</span>
                  {investment.nextPayout && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Next payout: {investment.nextPayout}
                    </span>
                  )}
                </div>
              </div>

              <button className="p-2 hover:bg-[#1A1A1A] rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-6">
              <div>
                <div className="text-sm text-gray-400 mb-1">Investment Amount</div>
                <div className="text-xl font-serif text-white">{investment.investmentAmount}</div>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-1">Current Value</div>
                <div className="text-xl font-serif text-white">{investment.currentValue}</div>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-1">Returns</div>
                <div className={`text-xl font-serif flex items-center gap-2 ${
                  investment.returnPercentage > 0 ? 'text-green-400' : 'text-gray-400'
                }`}>
                  {investment.returnPercentage > 0 && <TrendingUp className="w-5 h-5" />}
                  {investment.returns}
                  {investment.returnPercentage > 0 && (
                    <span className="text-sm">({investment.returnPercentage}%)</span>
                  )}
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-1">Documents</div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-xl font-serif text-white">{investment.documents}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#D4AF37]/10 flex gap-3">
              <button className="px-4 py-2 bg-[#D4AF37] text-black rounded-lg hover:bg-[#E4C77D] transition-colors text-sm flex items-center gap-2">
                <Eye className="w-4 h-4" />
                View Details
              </button>
              <button className="px-4 py-2 bg-[#1A1A1A] text-white border border-[#D4AF37]/30 rounded-lg hover:border-[#D4AF37] hover:bg-[#2A2A2A] transition-all text-sm flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Documents
              </button>
              <button className="px-4 py-2 bg-[#1A1A1A] text-white border border-[#D4AF37]/30 rounded-lg hover:border-[#D4AF37] hover:bg-[#2A2A2A] transition-all text-sm flex items-center gap-2">
                <Download className="w-4 h-4" />
                Statement
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredInvestments.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-[#111111] rounded-full flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-8 h-8 text-gray-500" />
          </div>
          <h3 className="text-xl font-serif text-white mb-2">No investments found</h3>
          <p className="text-gray-400">Start investing to see your portfolio here</p>
        </div>
      )}
    </div>
  );
}
