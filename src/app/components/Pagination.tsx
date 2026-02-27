import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange?: (items: number) => void;
  itemName?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  itemName = 'items',
}: PaginationProps) {
  const [pageInput, setPageInput] = useState('');
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePageInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(pageInput);
    if (pageNum >= 1 && pageNum <= totalPages) {
      onPageChange(pageNum);
      setPageInput('');
    }
  };

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setPageInput(value);
    }
  };

  return (
    <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
      {/* Left: Info + Items per page */}
      <div className="flex items-center gap-4">
        <p className="text-sm text-gray-400">
          Showing <span className="text-white font-medium">{startIndex}-{endIndex}</span> of{' '}
          <span className="text-white font-medium">{totalItems}</span> {itemName}
        </p>
        
        {onItemsPerPageChange && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Show:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => onItemsPerPageChange(parseInt(e.target.value))}
              className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        )}
      </div>

      {/* Right: Pagination Controls */}
      <div className="flex items-center gap-3">
        {/* First Page */}
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="p-2 bg-[#111111] border border-[#D4AF37]/20 rounded-lg text-white hover:border-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title="First page"
        >
          <ChevronsLeft className="w-4 h-4" />
        </button>

        {/* Previous Page */}
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#111111] border border-[#D4AF37]/20 rounded-lg text-white hover:border-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        {/* Page Number Display + Input */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Page</span>
          <form onSubmit={handlePageInputSubmit} className="relative">
            <input
              type="text"
              value={pageInput || currentPage}
              onChange={handlePageInputChange}
              onFocus={() => setPageInput('')}
              onBlur={() => setPageInput('')}
              className="w-16 bg-[#111111] border border-[#D4AF37]/20 rounded-lg px-3 py-2 text-white text-center text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              placeholder={currentPage.toString()}
            />
          </form>
          <span className="text-sm text-gray-400">of {totalPages}</span>
        </div>

        {/* Next Page */}
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-[#111111] border border-[#D4AF37]/20 rounded-lg text-white hover:border-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Last Page */}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="p-2 bg-[#111111] border border-[#D4AF37]/20 rounded-lg text-white hover:border-[#D4AF37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title="Last page"
        >
          <ChevronsRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
