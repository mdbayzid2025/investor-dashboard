import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, DollarSign, TrendingUp, Check, Lock, CheckCircle, ChevronRight } from 'lucide-react';
import { MOCK_STOCK } from '../data/mockData';

export function StockDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [interested, setInterested] = useState(false);
  
  const stockItem = MOCK_STOCK.find(item => item.id === Number(id));

  if (!stockItem) {
    return (
      <div className="p-8 text-center text-gray-400">
        <h2 className="text-2xl text-white mb-4">Property Not Found</h2>
        <Link to="/dashboard/stock" className="text-[#D4AF37] hover:underline">Return to Stock</Link>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto pb-20">
      {/* Header / Nav */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Listings</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Visuals */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-96 rounded-xl overflow-hidden border border-[#D4AF37]/20"
          >
            {/* Main Image with Privacy Blur */}
            <div className="absolute inset-0 bg-black/10 z-10" />
            <img 
              src={stockItem.image} 
              alt={stockItem.title} 
              className="w-full h-full object-cover blur-sm"
            />
            <div className="absolute top-4 left-4 z-20">
              <span className="bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                {stockItem.category}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded flex items-center gap-2 text-white/90 text-sm border border-white/10">
              <Lock className="w-3 h-3 text-[#D4AF37]" />
              <span>Visuals obfuscated for privacy</span>
            </div>
          </motion.div>

          {/* Gallery Preview */}
          <div className="grid grid-cols-3 gap-4">
            {stockItem.gallery?.map((img, idx) => (
              <div key={idx} className="relative h-24 rounded-lg overflow-hidden border border-white/10 group cursor-pointer">
                <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover blur-[2px] group-hover:blur-sm transition-all" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Details */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col h-full"
        >
          <h1 className="text-4xl font-serif text-white mb-2">{stockItem.title}</h1>
          <div className="flex items-center gap-2 text-gray-400 mb-6 text-sm">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>{stockItem.location}</span>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-8">
            <div className="bg-[#1A1A1A] border border-[#D4AF37]/10 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wider mb-1">
                <DollarSign className="w-3 h-3 text-[#D4AF37]" />
                Price Guide
              </div>
              <p className="text-xl text-white font-serif">{stockItem.priceRange}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-white font-medium mb-3">Property Overview</h3>
            <p className="text-gray-400 leading-relaxed">
              {stockItem.description}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-white font-medium mb-3">Key Features</h3>
            <div className="grid grid-cols-2 gap-y-2">
              {stockItem.features?.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-[#D4AF37]/20">
            <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 p-6 rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-[#D4AF37]/10 rounded-full">
                  <Lock className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Confidential Listing</h4>
                  <p className="text-sm text-gray-400">
                    Full address, owner details, and un-blurred imagery are only released after signing an NDA and verification by our administrators.
                  </p>
                </div>
              </div>
              
              {!interested ? (
                <button 
                  onClick={() => setInterested(true)}
                  className="w-full bg-[#D4AF37] text-black font-bold py-3 rounded hover:bg-[#F4CF57] transition-colors flex items-center justify-center gap-2"
                >
                  Request Full Details
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                 <div className="bg-green-900/20 border border-green-500/30 p-4 rounded text-center w-full">
                  <div className="flex flex-col items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <p className="text-green-500 font-medium text-sm">Interest Registered</p>
                    <p className="text-gray-400 text-xs">An admin will contact you shortly via the secure portal.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}