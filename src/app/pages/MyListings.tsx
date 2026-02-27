import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Edit2, Trash2, Eye, MoreVertical, Plus } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/app/components/Button';

// Mock data for user's requests
const mockRequests = [
  {
    id: 1,
    title: 'Luxury Penthouse in Sandton',
    description: 'Looking for a modern 3-bedroom penthouse with city views, preferably in Sandton CBD area.',
    budget: 'R 8,000,000 - R 12,000,000',
    location: 'Sandton, Johannesburg',
    type: 'Residential',
    status: 'Active',
    date: '2024-03-15',
    views: 24,
    responses: 3
  },
  {
    id: 2,
    title: 'Commercial Office Space',
    description: 'Seeking 500-800 sqm office space in Cape Town CBD for tech startup.',
    budget: 'R 3,000,000 - R 5,000,000',
    location: 'Cape Town CBD',
    type: 'Commercial',
    status: 'Active',
    date: '2024-03-10',
    views: 18,
    responses: 5
  },
  {
    id: 3,
    title: 'Coastal Investment Property',
    description: 'Looking for beachfront property in Ballito for rental income.',
    budget: 'R 4,000,000 - R 6,000,000',
    location: 'Ballito, KZN',
    type: 'Residential',
    status: 'Closed',
    date: '2024-02-28',
    views: 45,
    responses: 8
  }
];

// Mock data for user's stock listings
const mockStock = [
  {
    id: 1,
    title: 'Modern Villa in Constantia',
    description: '4-bedroom luxury villa with pool, wine cellar, and mountain views.',
    price: 'R 15,000,000',
    location: 'Constantia, Cape Town',
    type: 'Residential',
    status: 'Active',
    date: '2024-03-12',
    views: 67,
    interests: 12,
    image: 'https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Industrial Warehouse Complex',
    description: 'Prime logistics facility with easy highway access, 2000 sqm.',
    price: 'R 22,000,000',
    location: 'Midrand, Gauteng',
    type: 'Industrial',
    status: 'Active',
    date: '2024-03-08',
    views: 34,
    interests: 6,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Retail Space in Shopping Centre',
    description: '150 sqm retail unit in busy shopping center.',
    price: 'R 3,500,000',
    location: 'Umhlanga, KZN',
    type: 'Commercial',
    status: 'Under Offer',
    date: '2024-02-20',
    views: 89,
    interests: 15,
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&auto=format&fit=crop&q=80'
  }
];

export function MyListings() {
  const [activeTab, setActiveTab] = useState<'requests' | 'stock'>('requests');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<any>(null);

  const handleDelete = (item: any) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log('Delete item:', itemToDelete);
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const currentData = activeTab === 'requests' ? mockRequests : mockStock;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-serif text-[#D4AF37] mb-2">My Listings</h1>
          <p className="text-gray-400">Manage your requests and property listings.</p>
        </motion.div>

        <Link to={activeTab === 'requests' ? '/dashboard/create-request' : '/dashboard/add-stock'}>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create New {activeTab === 'requests' ? 'Request' : 'Stock Listing'}
          </Button>
        </Link>
      </div>

      {/* Tabs */}
      <div className="border-b border-[#D4AF37]/20 mb-8">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab('requests')}
            className={`pb-4 text-sm font-medium transition-colors relative ${
              activeTab === 'requests'
                ? 'text-[#D4AF37]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            My Requests
            {activeTab === 'requests' && (
              <motion.div
                layoutId="activeListingTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('stock')}
            className={`pb-4 text-sm font-medium transition-colors relative ${
              activeTab === 'stock'
                ? 'text-[#D4AF37]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            My Stock Listings
            {activeTab === 'stock' && (
              <motion.div
                layoutId="activeListingTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"
              />
            )}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Total</p>
          <p className="text-2xl text-white font-serif">{currentData.length}</p>
        </div>
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Active</p>
          <p className="text-2xl text-green-400 font-serif">
            {currentData.filter(item => item.status === 'Active').length}
          </p>
        </div>
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Total Views</p>
          <p className="text-2xl text-white font-serif">
            {currentData.reduce((sum, item) => sum + item.views, 0)}
          </p>
        </div>
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">
            {activeTab === 'requests' ? 'Responses' : 'Interests'}
          </p>
          <p className="text-2xl text-[#D4AF37] font-serif">
            {currentData.reduce((sum, item) => sum + (item.responses || item.interests || 0), 0)}
          </p>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="space-y-4">
        {currentData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/40 transition-colors"
          >
            <div className="flex items-start gap-5">
              {/* Thumbnail — only for stock listings */}
              {activeTab === 'stock' && item.image && (
                <div className="relative w-32 h-24 rounded-lg overflow-hidden flex-shrink-0 border border-[#D4AF37]/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1.5 left-1.5">
                    <span className="bg-[#D4AF37] text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {item.type}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex-1 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-serif text-white">{item.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Active' 
                        ? 'bg-green-400/10 text-green-400' 
                        : item.status === 'Closed'
                        ? 'bg-gray-400/10 text-gray-400'
                        : 'bg-orange-400/10 text-orange-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-4 line-clamp-2">{item.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        {activeTab === 'requests' ? 'Budget' : 'Price'}
                      </p>
                      <p className="text-white font-medium text-sm">
                        {item.budget || item.price}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Location</p>
                      <p className="text-white font-medium text-sm">{item.location}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Type</p>
                      <p className="text-white font-medium text-sm">{item.type}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Posted</p>
                      <p className="text-white font-medium text-sm">{item.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>{item.views} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                      <span>
                        {item.responses || item.interests}{' '}
                        {activeTab === 'requests' ? 'responses' : 'interests'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                      <span>ID: {item.id}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Link
                    to={activeTab === 'requests' ? `/dashboard/requests/${item.id}` : `/dashboard/my-listings/${item.id}`}
                    className="p-2 text-gray-400 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-colors"
                    title="View"
                  >
                    <Eye className="w-5 h-5" />
                  </Link>
                  <Link
                    to={activeTab === 'requests' ? `/dashboard/edit-request/${item.id}` : `/dashboard/edit-stock/${item.id}`}
                    className="p-2 text-gray-400 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <Edit2 className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => handleDelete(item)}
                    className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {currentData.length === 0 && (
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
            <Plus className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h3 className="text-xl font-serif text-white mb-2">
            No {activeTab === 'requests' ? 'Requests' : 'Listings'} Yet
          </h3>
          <p className="text-gray-400 mb-6">
            Create your first {activeTab === 'requests' ? 'request' : 'listing'} to get started.
          </p>
          <Link to={activeTab === 'requests' ? '/dashboard/requests' : '/dashboard/stock'}>
            <Button>
              Create {activeTab === 'requests' ? 'Request' : 'Listing'}
            </Button>
          </Link>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6 max-w-md w-full"
          >
            <h3 className="text-xl font-serif text-white mb-4">Confirm Deletion</h3>
            <p className="text-gray-400 mb-6">
              Are you sure you want to delete "{itemToDelete?.title}"? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
              >
                Delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-3 bg-[#1A1A1A] text-white border border-[#D4AF37]/30 rounded-lg hover:border-[#D4AF37] hover:bg-[#2A2A2A] transition-all"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}