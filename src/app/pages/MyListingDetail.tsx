import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { ArrowLeft, MapPin, DollarSign, TrendingUp, Check, Edit2, Trash2, Eye, Users, Calendar, AlertCircle } from 'lucide-react';
import { MOCK_STOCK } from '../data/mockData';

// Supplementary owner-only stats per listing (keyed by MOCK_STOCK id)
const OWNER_STATS: Record<number, { status: string; date: string; views: number; interests: number }> = {
  1: { status: 'Active',      date: '2024-03-12', views: 67, interests: 12 },
  2: { status: 'Active',      date: '2024-03-08', views: 34, interests: 6  },
  3: { status: 'Under Offer', date: '2024-02-20', views: 89, interests: 15 },
};

const statusColor: Record<string, string> = {
  Active:        'bg-green-400/10 text-green-400 border border-green-400/20',
  'Under Offer': 'bg-orange-400/10 text-orange-400 border border-orange-400/20',
  Closed:        'bg-gray-400/10 text-gray-400 border border-gray-400/20',
};

export function MyListingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

  // Match by string comparison so both "/my-listings/1" and "/my-listings/STK-001" work
  const base = MOCK_STOCK.find(s => String(s.id) === String(id));
  const stats = base ? OWNER_STATS[base.id] : null;

  if (!base || !stats) {
    return (
      <div className="p-8 text-center text-gray-400">
        <h2 className="text-2xl text-white mb-4">Listing Not Found</h2>
        <Link to="/dashboard/my-listings" className="text-[#D4AF37] hover:underline">
          Back to My Listings
        </Link>
      </div>
    );
  }

  const listing = { ...base, ...stats };
  const allImages = [listing.image, ...(listing.gallery ?? [])];

  return (
    <div className="p-6 max-w-6xl mx-auto pb-16">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors mb-6 group text-sm"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to My Listings
      </button>

      {/* Owner badge */}
      <div className="flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg px-4 py-2.5 mb-6 w-fit">
        <AlertCircle className="w-4 h-4 text-[#D4AF37]" />
        <span className="text-sm text-[#D4AF37]">Owner View — Full details visible. Buyers see blurred images & hidden price.</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left: Images */}
        <div className="lg:col-span-3 space-y-3">
          {/* Main image — unblurred for owner */}
          <div className="relative h-80 rounded-xl overflow-hidden border border-[#D4AF37]/20">
            <img
              src={allImages[activeImage]}
              alt={listing.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3">
              <span className="bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {listing.category}
              </span>
            </div>
            <div className="absolute top-3 right-3">
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColor[listing.status]}`}>
                {listing.status}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 flex-wrap">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative h-20 w-28 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                  activeImage === i ? 'border-[#D4AF37]' : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-4 text-center">
              <Eye className="w-4 h-4 text-gray-400 mx-auto mb-1" />
              <p className="text-xl text-white">{listing.views}</p>
              <p className="text-xs text-gray-500">Total Views</p>
            </div>
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-4 text-center">
              <Users className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
              <p className="text-xl text-[#D4AF37]">{listing.interests}</p>
              <p className="text-xs text-gray-500">Interests</p>
            </div>
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-4 text-center">
              <Calendar className="w-4 h-4 text-gray-400 mx-auto mb-1" />
              <p className="text-sm text-white">{listing.date}</p>
              <p className="text-xs text-gray-500">Listed On</p>
            </div>
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:col-span-2 space-y-5">
          {/* Title + Price */}
          <div>
            <h1 className="text-2xl font-serif text-white mb-1">{listing.title}</h1>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>{listing.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xl text-[#D4AF37] font-serif">{listing.priceRange}</span>
              </div>
              <span className="text-gray-600">·</span>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400">{listing.yield} yield</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-5">
            <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-3">Description</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{listing.description}</p>
          </div>

          {/* Features */}
          {listing.features && listing.features.length > 0 && (
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-5">
              <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-y-2 gap-x-3">
                {listing.features.map((f: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Listing Info */}
          <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-5">
            <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-3">Listing Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Listing ID</span>
                <span className="text-white font-mono">STK-00{listing.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Category</span>
                <span className="text-white">{listing.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Status</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${statusColor[listing.status]}`}>
                  {listing.status}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <Link
              to={`/dashboard/edit-stock/${listing.id}`}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#D4AF37] text-black rounded-lg hover:bg-[#F4CF57] transition-colors text-sm font-medium"
            >
              <Edit2 className="w-4 h-4" />
              Edit Listing
            </Link>
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-[#1A1A1A] border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/10 transition-colors text-sm">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
