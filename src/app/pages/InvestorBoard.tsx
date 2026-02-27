import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Search, Filter, TrendingUp, MapPin, DollarSign, Eye, CheckCircle } from 'lucide-react';
import { Pagination } from '../components/Pagination';

const INITIAL_ITEMS_PER_PAGE = 10;

export function InvestorBoard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(INITIAL_ITEMS_PER_PAGE);
  
  const investments = [
    {
      id: 1,
      title: 'Premium Real Estate Development',
      category: 'Real Estate',
      location: 'Sandton, Johannesburg',
      amount: 'R5M - R10M',
      returns: '18-22% p.a.',
      description: 'Luxury residential development in prime location. Secure ROI with established developer.',
      verified: true
    },
    {
      id: 2,
      title: 'Tech Startup Series A',
      category: 'Technology',
      location: 'Cape Town',
      amount: 'R2M - R5M',
      returns: '25-35% IRR',
      description: 'Fast-growing fintech company seeking Series A funding. Strong traction and revenue growth.',
      verified: true
    },
    {
      id: 3,
      title: 'Agricultural Export Venture',
      category: 'Agriculture',
      location: 'Western Cape',
      amount: 'R3M - R8M',
      returns: '15-20% p.a.',
      description: 'Established export business expanding operations. Proven track record and stable income.',
      verified: false
    }
  ];

  const totalPages = Math.ceil(investments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedInvestments = investments.slice(startIndex, startIndex + itemsPerPage);

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };
  
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-serif text-white mb-1">Investor Board</h1>
        <p className="text-sm text-gray-400">Discover premium investment opportunities</p>
      </div>
      
      {/* Search and Filter */}
      <div className="mb-8 flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search investments..."
            className="w-full bg-[#111111] border border-[#D4AF37]/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
          />
        </div>
        <button className="px-6 py-3 bg-[#111111] border border-[#D4AF37]/20 rounded-lg text-white hover:border-[#D4AF37] transition-colors flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </div>
      
      {/* Investment Table */}
      <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#D4AF37]/20 bg-[#1A1A1A]">
                <th className="text-left p-4 text-sm font-medium text-gray-400">Investment</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Category</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Returns</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Amount</th>
                <th className="text-right p-4 text-sm font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedInvestments.map((investment, index) => (
                <motion.tr
                  key={investment.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="border-b border-[#D4AF37]/10 hover:bg-[#1A1A1A] transition-colors cursor-pointer"
                  onClick={() => navigate(`/dashboard/investment/${investment.id}`)}
                >
                  <td className="p-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-white font-medium text-sm">{investment.title}</p>
                        {investment.verified && (
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {investment.location}
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    <span className="px-2 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded text-xs border border-[#D4AF37]/20">
                      {investment.category}
                    </span>
                  </td>

                  <td className="p-4">
                    <span className="text-[#D4AF37] font-medium text-sm flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {investment.returns}
                    </span>
                  </td>

                  <td className="p-4">
                    <span className="text-white font-medium text-sm flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-gray-400" />
                      {investment.amount}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center justify-end">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/dashboard/investment/${investment.id}`);
                        }}
                        className="px-4 py-1.5 bg-[#D4AF37] text-black text-xs rounded-lg hover:bg-[#E4C77D] transition-all font-medium inline-flex items-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        View Details
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {investments.length === 0 && (
          <div className="p-12 text-center">
            <TrendingUp className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No investments found</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {investments.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={investments.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={handleItemsPerPageChange}
          itemName="opportunities"
        />
      )}
    </div>
  );
}