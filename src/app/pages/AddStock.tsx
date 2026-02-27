import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@/app/components/Button';
import { ArrowLeft, Upload, Plus, X, ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';

const CATEGORIES = ['Residential', 'Commercial', 'Agricultural', 'Industrial', 'Mixed-Use', 'Land'];

export function AddStock() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    category: 'Residential',
    title: '',
    description: '',
    priceRange: '',
    location: '',
    features: [''],
    galleryImages: [] as File[]
  });

  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const removeFeature = (index: number) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: newFeatures });
  };

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData({ ...formData, galleryImages: [...formData.galleryImages, ...files] });
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGalleryPreviews(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeGalleryImage = (index: number) => {
    setFormData({
      ...formData,
      galleryImages: formData.galleryImages.filter((_, i) => i !== index)
    });
    setGalleryPreviews(galleryPreviews.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submit stock listing:', formData);
    // In real app: upload images to server, create listing
    navigate('/dashboard/my-listings');
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back</span>
      </button>

      <div className="mb-8">
        <h1 className="text-4xl font-serif text-[#D4AF37] mb-2">Add New Stock Listing</h1>
        <p className="text-gray-400">Create a new property listing for the exclusive marketplace</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8">
          <h2 className="text-xl font-serif text-white mb-6">Basic Information</h2>
          
          <div className="space-y-6">
            {/* Category */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Property Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full bg-[#0A0A0A] border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Property Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="e.g., Modern Coastal Villa"
                className="w-full bg-[#0A0A0A] border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Property Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Provide detailed description of the property, including key features, condition, and unique selling points..."
                className="w-full bg-[#0A0A0A] border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none resize-none"
              />
              <p className="text-xs text-gray-500 mt-2">Minimum 100 characters recommended</p>
            </div>
          </div>
        </div>

        {/* Financial Details */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8">
          <h2 className="text-xl font-serif text-white mb-6">Financial Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price Range */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Price Range *</label>
              <input
                type="text"
                name="priceRange"
                value={formData.priceRange}
                onChange={handleChange}
                required
                placeholder="e.g., R 5M - R 7M or $5M - $7M"
                className="w-full bg-[#0A0A0A] border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8">
          <h2 className="text-xl font-serif text-white mb-6">Location</h2>
          
          <div>
            <label className="block text-sm text-gray-400 mb-2">Location (General Area) *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="e.g., Coastal Region, Western Cape (Exact location hidden)"
              className="w-full bg-[#0A0A0A] border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
            />
            <p className="text-xs text-gray-500 mt-2">
              💡 Tip: Keep location vague for privacy. Exact address will be shared after NDA.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-serif text-white">Key Features</h2>
            <button
              type="button"
              onClick={addFeature}
              className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 rounded-lg hover:bg-[#D4AF37]/20 transition-all text-sm"
            >
              <Plus className="w-4 h-4" />
              Add Feature
            </button>
          </div>

          <div className="space-y-3">
            {formData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  placeholder="e.g., 5 Bedrooms, Infinity Pool, Home Cinema"
                  className="flex-1 bg-[#0A0A0A] border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
                />
                {formData.features.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Add key features like bedrooms, bathrooms, special amenities, etc.
          </p>
        </div>

        {/* Gallery Images Upload */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8">
          <h2 className="text-xl font-serif text-white mb-6">Gallery Images (Optional)</h2>
          
          <div className="grid grid-cols-3 gap-4 mb-4">
            {galleryPreviews.map((preview, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative group"
              >
                <img 
                  src={preview} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-32 object-cover rounded-lg border border-[#D4AF37]/20"
                />
                <button
                  type="button"
                  onClick={() => removeGalleryImage(index)}
                  className="absolute top-2 right-2 p-1.5 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-3 h-3 text-white" />
                </button>
              </motion.div>
            ))}
            
            {/* Add More Button */}
            <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-[#D4AF37]/40 rounded-lg cursor-pointer hover:border-[#D4AF37] transition-all bg-[#0A0A0A]">
              <ImageIcon className="w-8 h-8 text-[#D4AF37] mb-2" />
              <span className="text-xs text-gray-400">Add Images</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleGalleryUpload}
                className="hidden"
              />
            </label>
          </div>
          <p className="text-xs text-gray-500">
            Recommended: 3-6 high-quality images showcasing different aspects of the property
          </p>
        </div>

        {/* Submit Buttons */}
        <div className="flex items-center gap-4 pt-6 border-t border-[#D4AF37]/20">
          <Button type="submit" className="flex-1 sm:flex-none">
            Publish Listing
          </Button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex-1 sm:flex-none px-6 py-3 bg-[#1A1A1A] text-white border border-[#D4AF37]/20 rounded-lg hover:border-[#D4AF37] hover:bg-[#2A2A2A] transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}