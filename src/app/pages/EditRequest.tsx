import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button } from '@/app/components/Button';
import { ArrowLeft, Save, AlertCircle } from 'lucide-react';
import { MOCK_REQUESTS } from '../data/mockData';

const TOPICS = ['Vacant Land', 'Farms', 'Hotels', 'Investment Portfolios', 'Commercial', 'Residential', 'Industrial'];

export function EditRequest() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Load existing request data
  const existingRequest = MOCK_REQUESTS.find(item => item.id === Number(id));
  
  const [formData, setFormData] = useState({
    title: existingRequest?.title || '',
    topic: existingRequest?.topic || 'Vacant Land',
    budget: existingRequest?.budget || '',
    urgency: existingRequest?.urgency || 'Medium',
    location: existingRequest?.location || '',
    content: existingRequest?.content || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Update request:', formData);
    navigate('/dashboard/my-listings');
  };

  if (!existingRequest) {
    return (
      <div className="p-8 text-center text-gray-400">
        <h2 className="text-2xl text-white mb-4">Request Not Found</h2>
        <button 
          onClick={() => navigate('/dashboard/my-listings')}
          className="text-[#D4AF37] hover:underline"
        >
          Back to My Listings
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back</span>
      </button>

      <div className="mb-8">
        <h1 className="text-4xl font-serif text-[#D4AF37] mb-2">Edit Request</h1>
        <p className="text-gray-400">Update your investment request details</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8">
          <h2 className="text-xl font-serif text-white mb-6">Request Details</h2>

          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Request Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="e.g., Coastal Development Land Needed"
                className="w-full bg-[#0A0A0A] border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
              />
              <p className="text-xs text-gray-500 mt-2">Be clear and specific about what you're looking for</p>
            </div>

            {/* Topic & Urgency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Topic/Category *</label>
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0A0A0A] border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
                >
                  {TOPICS.map(topic => (
                    <option key={topic} value={topic}>{topic}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Urgency *</label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0A0A0A] border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
                >
                  <option value="Low">Low - Just exploring</option>
                  <option value="Medium">Medium - Actively looking</option>
                  <option value="High">High - Urgent need</option>
                </select>
              </div>
            </div>

            {/* Budget & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Budget Range *</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  placeholder="e.g., $2M - $5M or R 5M - R 10M"
                  className="w-full bg-[#0A0A0A] border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Preferred Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Western Cape, Gauteng"
                  className="w-full bg-[#0A0A0A] border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
                />
                <p className="text-xs text-gray-500 mt-2">Optional - leave blank if location is flexible</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Detailed Requirements *</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={8}
                placeholder="Describe what you're looking for in detail..."
                className="w-full bg-[#0A0A0A] border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none resize-none"
              />
              <p className="text-xs text-gray-500 mt-2">Minimum 50 characters recommended for better responses</p>
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-[#D4AF37]/10 rounded-full flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-white font-medium mb-2">Anonymous Posting</h3>
              <p className="text-sm text-gray-400 mb-3">
                Your request remains published anonymously. Your identity and contact details stay hidden until you choose to share them.
              </p>
              <p className="text-xs text-amber-500/80">
                ⚠️ Contact details, links, email addresses, and phone numbers are automatically filtered to ensure privacy and security.
              </p>
            </div>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex items-center gap-4 pt-6 border-t border-[#D4AF37]/20">
          <Button type="submit" className="flex-1 sm:flex-none flex items-center justify-center gap-2">
            <Save className="w-4 h-4" />
            Save Changes
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
