import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, AlertCircle, MessageSquare, Eye, DollarSign, Clock, User } from 'lucide-react';
import { Link } from 'react-router';
import { MOCK_REQUESTS } from '../data/mockData';
import { Pagination } from '../components/Pagination';

const TOPICS = ['All', 'Vacant Land', 'Farms', 'Hotels', 'Investment Portfolios'];
const INITIAL_ITEMS_PER_PAGE = 10;

export function Requests() {
  const [activeTopic, setActiveTopic] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(INITIAL_ITEMS_PER_PAGE);

  const filteredRequests = activeTopic === 'All' 
    ? MOCK_REQUESTS 
    : MOCK_REQUESTS.filter(r => r.topic === activeTopic);

  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRequests = filteredRequests.slice(startIndex, startIndex + itemsPerPage);

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-serif text-white mb-1">Request Board</h1>
        <p className="text-sm text-gray-400">Browse investment requests from other investors</p>
      </div>

      {/* Topic Tabs */}
      <div className="flex overflow-x-auto pb-4 mb-6 border-b border-[#D4AF37]/20 gap-2 no-scrollbar">
        {TOPICS.map((topic) => (
          <button
            key={topic}
            onClick={() => {
              setActiveTopic(topic);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
              activeTopic === topic
                ? 'bg-[#D4AF37] text-black'
                : 'bg-[#111111] text-gray-400 border border-[#D4AF37]/20 hover:border-[#D4AF37]'
            }`}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Requests Table */}
      <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#D4AF37]/20 bg-[#1A1A1A]">
                <th className="text-left p-4 text-sm font-medium text-gray-400">Request</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Topic</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Budget</th>
                <th className="text-center p-4 text-sm font-medium text-gray-400">Responses</th>
                <th className="text-right p-4 text-sm font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedRequests.map((req, index) => (
                <motion.tr
                  key={req.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="border-b border-[#D4AF37]/10 hover:bg-[#1A1A1A] transition-colors cursor-pointer"
                  onClick={() => window.location.href = `/dashboard/requests/${req.id}`}
                >
                  <td className="p-4">
                    <div>
                      <p className="text-white font-medium text-sm mb-1">{req.title}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <User className="w-3 h-3" />
                        {req.user}
                        <span className="text-gray-600">•</span>
                        <span>{req.date}</span>
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    <span className="px-2 py-1 bg-[#D4AF37]/10 text-[#D4AF37] rounded text-xs border border-[#D4AF37]/20">
                      {req.topic}
                    </span>
                  </td>

                  <td className="p-4">
                    <span className="text-white font-medium text-sm flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {req.budget}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center justify-center gap-1.5">
                      <MessageSquare className="w-4 h-4 text-blue-400" />
                      <span className="text-sm font-medium text-blue-400">
                        {req.responses}
                      </span>
                    </div>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center justify-end">
                      <Link
                        to={`/dashboard/requests/${req.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-1.5 border border-[#D4AF37] text-[#D4AF37] text-xs rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all font-medium inline-flex items-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        View Details
                      </Link>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredRequests.length === 0 && (
          <div className="p-12 text-center">
            <AlertCircle className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No requests found</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredRequests.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredRequests.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={handleItemsPerPageChange}
          itemName="requests"
        />
      )}
    </div>
  );
}