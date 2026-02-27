import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  Plus,
  Edit3,
  Trash2,
  Eye,
  EyeOff,
  DollarSign,
  MapPin,
  Calendar,
  TrendingUp,
  Filter
} from 'lucide-react';
import { Button } from '@/app/components/Button';

type PropertyStatus = 'active' | 'pending' | 'sold' | 'all';

export function AdminProperties() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<PropertyStatus>('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const properties = [
    {
      id: 1,
      title: 'Luxury Marina Apartment',
      location: 'Dubai Marina',
      price: 850000,
      type: 'Residential',
      bedrooms: 3,
      size: '2,100 sq ft',
      status: 'active',
      views: 142,
      requests: 8,
      dateAdded: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'Downtown Office Complex',
      location: 'Business Bay',
      price: 2400000,
      type: 'Commercial',
      bedrooms: null,
      size: '8,500 sq ft',
      status: 'active',
      views: 89,
      requests: 12,
      dateAdded: '2024-01-12',
      featured: false
    },
    {
      id: 3,
      title: 'Beachfront Villa Estate',
      location: 'Palm Jumeirah',
      price: 5200000,
      type: 'Luxury Villa',
      bedrooms: 6,
      size: '12,000 sq ft',
      status: 'pending',
      views: 234,
      requests: 24,
      dateAdded: '2024-01-10',
      featured: true
    },
    {
      id: 4,
      title: 'Modern City Penthouse',
      location: 'Downtown Dubai',
      price: 3800000,
      type: 'Penthouse',
      bedrooms: 4,
      size: '4,500 sq ft',
      status: 'active',
      views: 198,
      requests: 15,
      dateAdded: '2024-01-08',
      featured: true
    },
    {
      id: 5,
      title: 'Investment Apartment Block',
      location: 'Jumeirah Village',
      price: 1950000,
      type: 'Multi-Unit',
      bedrooms: null,
      size: '15,000 sq ft',
      status: 'sold',
      views: 67,
      requests: 5,
      dateAdded: '2024-01-05',
      featured: false
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || property.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusCounts = {
    all: properties.length,
    active: properties.filter(p => p.status === 'active').length,
    pending: properties.filter(p => p.status === 'pending').length,
    sold: properties.filter(p => p.status === 'sold').length
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this property listing? This action cannot be undone.')) {
      console.log('Deleting property:', id);
      alert('Property deleted successfully');
    }
  };

  const toggleFeatured = (id: number) => {
    console.log('Toggling featured status for property:', id);
    alert('Featured status updated');
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-serif text-white mb-2">Property Management</h1>
            <p className="text-gray-400">Manage investment property listings</p>
          </div>
          <Button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add New Property
          </Button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <button
          onClick={() => setStatusFilter('all')}
          className={`p-4 rounded-lg border transition-all ${
            statusFilter === 'all' 
              ? 'bg-[#D4AF37]/10 border-[#D4AF37]' 
              : 'bg-[#111111] border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
          }`}
        >
          <div className="flex items-center gap-3">
            <Building2 className="w-5 h-5 text-[#D4AF37]" />
            <div className="text-left">
              <p className="text-2xl font-bold text-white">{statusCounts.all}</p>
              <p className="text-xs text-gray-400">Total Properties</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => setStatusFilter('active')}
          className={`p-4 rounded-lg border transition-all ${
            statusFilter === 'active' 
              ? 'bg-green-400/10 border-green-400' 
              : 'bg-[#111111] border-[#D4AF37]/20 hover:border-green-400/40'
          }`}
        >
          <div className="flex items-center gap-3">
            <Eye className="w-5 h-5 text-green-400" />
            <div className="text-left">
              <p className="text-2xl font-bold text-white">{statusCounts.active}</p>
              <p className="text-xs text-gray-400">Active</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => setStatusFilter('pending')}
          className={`p-4 rounded-lg border transition-all ${
            statusFilter === 'pending' 
              ? 'bg-orange-400/10 border-orange-400' 
              : 'bg-[#111111] border-[#D4AF37]/20 hover:border-orange-400/40'
          }`}
        >
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-orange-400" />
            <div className="text-left">
              <p className="text-2xl font-bold text-white">{statusCounts.pending}</p>
              <p className="text-xs text-gray-400">Pending Review</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => setStatusFilter('sold')}
          className={`p-4 rounded-lg border transition-all ${
            statusFilter === 'sold' 
              ? 'bg-blue-400/10 border-blue-400' 
              : 'bg-[#111111] border-[#D4AF37]/20 hover:border-blue-400/40'
          }`}
        >
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <div className="text-left">
              <p className="text-2xl font-bold text-white">{statusCounts.sold}</p>
              <p className="text-xs text-gray-400">Sold</p>
            </div>
          </div>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search properties by title or location..."
              className="w-full bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            More Filters
          </Button>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProperties.map((property) => (
          <div 
            key={property.id}
            className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg overflow-hidden hover:border-[#D4AF37]/40 transition-all"
          >
            {/* Property Image Placeholder */}
            <div className="relative h-48 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center">
              <Building2 className="w-16 h-16 text-gray-700" />
              {property.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#D4AF37] text-black text-xs font-bold rounded">
                  FEATURED
                </div>
              )}
              <div className={`absolute top-4 left-4 px-3 py-1 rounded text-xs font-medium ${
                property.status === 'active' ? 'bg-green-400/20 text-green-400' :
                property.status === 'pending' ? 'bg-orange-400/20 text-orange-400' :
                'bg-blue-400/20 text-blue-400'
              }`}>
                {property.status.toUpperCase()}
              </div>
            </div>

            {/* Property Details */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-serif text-white mb-2">{property.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-[#D4AF37] font-medium">{property.type}</span>
                  {property.bedrooms && (
                    <>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-400">{property.bedrooms} Beds</span>
                    </>
                  )}
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{property.size}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#D4AF37]/10">
                <div>
                  <p className="text-2xl font-bold text-white">
                    ${property.price.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">Investment Value</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-300">{property.views} views</p>
                  <p className="text-xs text-[#D4AF37]">{property.requests} requests</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 flex items-center justify-center gap-2"
                  onClick={() => alert('Edit property: ' + property.id)}
                >
                  <Edit3 className="w-4 h-4" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => toggleFeatured(property.id)}
                  className={property.featured ? 'border-[#D4AF37] text-[#D4AF37]' : ''}
                >
                  {property.featured ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDelete(property.id)}
                  className="border-red-400/20 text-red-400 hover:bg-red-400/10"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="mt-3 text-xs text-gray-500 flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                Added {new Date(property.dateAdded).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-12 text-center">
          <Building2 className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No properties found matching your criteria</p>
        </div>
      )}

      {/* Add Property Modal Placeholder */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-[#D4AF37]/20">
              <h2 className="text-2xl font-serif text-white">Add New Property</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-400 mb-4">Property creation form would go here...</p>
              {/* TODO: Add full property creation form */}
            </div>
            <div className="p-6 border-t border-[#D4AF37]/20 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setShowAddModal(false)}>
                Cancel
              </Button>
              <Button onClick={() => {
                alert('Property created successfully!');
                setShowAddModal(false);
              }}>
                Create Property
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
