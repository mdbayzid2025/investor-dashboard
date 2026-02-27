import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Lock, Eye, CheckCircle, DollarSign } from 'lucide-react';
import { STOCK_WITH_STATS } from '../data/mockData';
import { Pagination } from '../components/Pagination';

const INITIAL_ITEMS_PER_PAGE = 10;

export function Stock() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(INITIAL_ITEMS_PER_PAGE);
  
  const totalPages = Math.ceil(STOCK_WITH_STATS.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedStock = STOCK_WITH_STATS.slice(startIndex, startIndex + itemsPerPage);

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const statusColor: Record<string, string> = {
    Active: 'bg-green-400/10 text-green-400',
    'Under Offer': 'bg-orange-400/10 text-orange-400',
    Closed: 'bg-gray-400/10 text-gray-400',
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-serif text-white mb-1">Exclusive Stock</h1>
        <p className="text-sm text-gray-400">Curated off-market opportunities from other investors</p>
      </div>

      {/* Stock Table */}
      <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#D4AF37]/20 bg-[#1A1A1A]">
                <th className="text-left p-4 text-sm font-medium text-gray-400">Property</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Category</th>
                <th className="text-left p-4 text-sm font-medium text-gray-400">Status</th>
                <th className="text-center p-4 text-sm font-medium text-gray-400">Interest</th>
                <th className="text-right p-4 text-sm font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedStock.map((item, index) => (
                <StockTableRow
                  key={item.id}
                  item={item}
                  index={index}
                  statusColor={statusColor}
                />
              ))}
            </tbody>
          </table>
        </div>

        {STOCK_WITH_STATS.length === 0 && (
          <div className="p-12 text-center">
            <Lock className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No stock available</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {STOCK_WITH_STATS.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={STOCK_WITH_STATS.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={handleItemsPerPageChange}
          itemName="listings"
        />
      )}
    </div>
  );
}

function StockTableRow({
  item,
  index,
  statusColor,
}: {
  item: any;
  index: number;
  statusColor: Record<string, string>;
}) {
  const [interested, setInterested] = useState(false);

  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      className="border-b border-[#D4AF37]/10 hover:bg-[#1A1A1A] transition-colors cursor-pointer"
      onClick={() => window.location.href = `/dashboard/stock/${item.id}`}
    >
      <td className="p-4">
        <div className="flex items-center gap-3">
          {/* Blurred Thumbnail */}
          <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-[#D4AF37]/10">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover blur-sm scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Lock className="w-4 h-4 text-[#D4AF37]" />
            </div>
          </div>
          <div>
            <p className="text-white font-medium text-sm mb-1">{item.title}</p>
            <p className="text-xs text-gray-500">ID: {item.id}</p>
          </div>
        </div>
      </td>

      <td className="p-4">
        <span className="px-2 py-1 bg-blue-400/10 text-blue-400 rounded text-xs border border-blue-400/20">
          {item.category}
        </span>
      </td>

      <td className="p-4">
        <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor[item.status]}`}>
          {item.status}
        </span>
      </td>

      <td className="p-4">
        <div className="flex items-center justify-center gap-1.5">
          {item.interests > 0 ? (
            <>
              <DollarSign className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm font-medium text-[#D4AF37]">
                {item.interests}
              </span>
            </>
          ) : (
            <span className="text-gray-500 text-sm">—</span>
          )}
        </div>
      </td>

      <td className="p-4">
        <div className="flex items-center justify-end gap-2">
          {!interested ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setInterested(true);
              }}
              className="px-4 py-1.5 border border-[#D4AF37] text-[#D4AF37] text-xs rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all font-medium inline-flex items-center gap-1.5"
            >
              I'm Interested
            </button>
          ) : (
            <div className="flex items-center gap-1.5 text-green-400 text-xs px-4 py-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              Interest Sent
            </div>
          )}
          <Link
            to={`/dashboard/stock/${item.id}`}
            onClick={(e) => e.stopPropagation()}
            className="p-2 text-gray-400 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-colors"
            title="View details"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </td>
    </motion.tr>
  );
}