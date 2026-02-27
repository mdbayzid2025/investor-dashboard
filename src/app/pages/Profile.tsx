import React, { useState } from 'react';
import { Button } from '@/app/components/Button';
import { User, Mail, Phone, Edit2, CheckCircle, AlertTriangle, Package, Calendar, Lock, Shield, CreditCard, TrendingUp, Briefcase, Building } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const ROLES = ['Investor', 'Seller', 'Agent', 'Developer'];

export function Profile() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  
  // Demo Controls
  const [currentRole, setCurrentRole] = useState('Investor');
  const [isVerified, setIsVerified] = useState(true); 
  const [hasSubscription, setHasSubscription] = useState(true);
  
  const [formData, setFormData] = useState({
    displayName: 'Investor001',
    fullName: 'John Anderson',
    email: 'investor@example.com',
    phone: '+27 82 123 4567',
    // Investor fields
    budget: 'R 5M - R 20M',
    investmentType: 'Commercial & Residential',
    location: 'Johannesburg, Cape Town',
    // Seller fields
    propertyCount: '3 Properties',
    totalValue: 'R 15M',
    // Agent fields
    agencyName: 'Luxury Estates Global',
    licenseNumber: 'RE-2023-456',
    // Developer fields
    companyName: 'Horizon Developments',
    companyRegNumber: '2015/123456/07'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log('Save profile:', formData);
    setIsEditing(false);
  };

  const handlePasswordSave = () => {
    console.log('Change password');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'personal', label: 'Personal Info', icon: Mail },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'subscription', label: 'Subscription', icon: CreditCard }
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-[#D4AF37] mb-2">Profile</h1>
        <p className="text-gray-400">Manage your account settings</p>
      </div>

      {/* Demo Controls */}
      <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 mb-8">
        <p className="text-orange-400 text-sm font-medium mb-3">🎮 Demo Controls (for testing)</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs text-gray-400 mb-2">Account Type</label>
            <select 
              value={currentRole}
              onChange={(e) => setCurrentRole(e.target.value)}
              className="w-full bg-[#1A1A1A] border border-orange-500/30 rounded px-3 py-2 text-white text-sm"
            >
              {ROLES.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-2">Verification Status</label>
            <label className="flex items-center gap-2 text-white bg-[#1A1A1A] border border-orange-500/30 rounded px-3 py-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={isVerified} 
                onChange={(e) => setIsVerified(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm">{isVerified ? '✅ Verified' : '❌ Not Verified'}</span>
            </label>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-2">Subscription</label>
            <label className="flex items-center gap-2 text-white bg-[#1A1A1A] border border-orange-500/30 rounded px-3 py-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={hasSubscription} 
                onChange={(e) => setHasSubscription(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm">{hasSubscription ? '💎 Pro' : '🆓 Free'}</span>
            </label>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-[#D4AF37]/20 mb-8">
        <div className="flex gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsEditing(false);
                }}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all relative ${
                  activeTab === tab.id
                    ? 'text-[#D4AF37] bg-[#D4AF37]/5'
                    : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]'
                } rounded-t-lg`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBar"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[500px]">
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Alerts */}
            {!isVerified && (
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-orange-400 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-orange-400 font-medium text-lg mb-2">Identity Verification Required</h3>
                    <p className="text-gray-400 mb-4">Complete KYC verification to access all platform features and exclusive deal flow.</p>
                    <Link to="/kyc">
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        Start Verification
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {!hasSubscription && (
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-[#D4AF37] font-medium text-lg mb-2">Upgrade to Pro</h3>
                    <p className="text-gray-400 mb-4">Get unlimited messaging, advanced filters, and priority access to premium properties.</p>
                    <Link to="/dashboard/subscription">
                      <Button>View Plans</Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <User className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm text-gray-400">Account Type</span>
                </div>
                <p className="text-2xl font-bold text-white">{currentRole}</p>
              </div>

              <div className={`border rounded-xl p-6 ${
                isVerified 
                  ? 'bg-green-500/5 border-green-500/30' 
                  : 'bg-orange-500/5 border-orange-500/30'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  {isVerified ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-orange-400" />
                  )}
                  <span className="text-sm text-gray-400">Verification</span>
                </div>
                <p className={`text-2xl font-bold ${isVerified ? 'text-green-400' : 'text-orange-400'}`}>
                  {isVerified ? 'Verified' : 'Pending'}
                </p>
              </div>

              <div className={`border rounded-xl p-6 ${
                hasSubscription 
                  ? 'bg-[#D4AF37]/5 border-[#D4AF37]/30' 
                  : 'bg-gray-500/5 border-gray-500/30'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <Package className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm text-gray-400">Plan</span>
                </div>
                <p className={`text-2xl font-bold ${hasSubscription ? 'text-[#D4AF37]' : 'text-gray-400'}`}>
                  {hasSubscription ? 'Pro' : 'Free'}
                </p>
              </div>
            </div>

            {/* Account Summary */}
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-6">
              <h3 className="text-xl font-serif text-white mb-6">Account Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-between py-3 border-b border-[#D4AF37]/10">
                  <span className="text-gray-400">Display Name</span>
                  <span className="text-[#D4AF37] font-medium">
                    {formData.fullName
                      ? formData.fullName
                      : formData.email.split('@')[0]}
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#D4AF37]/10">
                  <span className="text-gray-400">Email</span>
                  <span className="text-white">{formData.email}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#D4AF37]/10">
                  <span className="text-gray-400">Phone</span>
                  <span className="text-white">{formData.phone}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#D4AF37]/10">
                  <span className="text-gray-400">Member Since</span>
                  <span className="text-white">January 2024</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* PERSONAL INFO TAB */}
        {activeTab === 'personal' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-serif text-white">Personal Information</h2>
                <p className="text-sm text-gray-400 mt-1">Update your account details</p>
              </div>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-black rounded-lg hover:bg-[#F4CF57] transition-all font-medium"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              )}
            </div>

            {/* Basic Information */}
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8">
              <h3 className="text-lg font-serif text-white mb-6">Basic Details</h3>
              <div className="space-y-6">
                <div>
                  
                  <div className="relative">
                    
                    
                  </div>
                  
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Full Name (Private)</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full border rounded-lg pl-12 pr-4 py-3 text-white focus:border-[#D4AF37] outline-none transition-all ${
                        isEditing 
                          ? 'bg-[#0A0A0A] border-[#D4AF37]/40' 
                          : 'bg-[#1A1A1A] border-[#D4AF37]/10 cursor-not-allowed text-gray-400'
                      }`}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5">Your legal name (never shown publicly)</p>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      value={formData.email}
                      disabled
                      className="w-full bg-[#1A1A1A] border border-[#D4AF37]/10 rounded-lg pl-12 pr-4 py-3 text-gray-400 cursor-not-allowed"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5">Cannot be changed • Contact support if needed</p>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className={`w-full border rounded-lg pl-12 pr-4 py-3 text-white focus:border-[#D4AF37] outline-none transition-all ${
                        isEditing 
                          ? 'bg-[#0A0A0A] border-[#D4AF37]/40' 
                          : 'bg-[#1A1A1A] border-[#D4AF37]/10 cursor-not-allowed text-gray-400'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Role-Specific Information */}
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                {currentRole === 'Investor' && <Briefcase className="w-5 h-5 text-[#D4AF37]" />}
                {currentRole === 'Seller' && <Building className="w-5 h-5 text-[#D4AF37]" />}
                {currentRole === 'Agent' && <Building className="w-5 h-5 text-[#D4AF37]" />}
                {currentRole === 'Developer' && <Building className="w-5 h-5 text-[#D4AF37]" />}
                <h3 className="text-lg font-serif text-white">{currentRole} Details</h3>
              </div>
              
              <div className="space-y-6">
                {currentRole === 'Investor' && (
                  <>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Investment Budget</label>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="e.g., R 5M - R 20M"
                        className={`w-full border rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none transition-all ${
                          isEditing 
                            ? 'bg-[#0A0A0A] border-[#D4AF37]/40' 
                            : 'bg-[#1A1A1A] border-[#D4AF37]/10 cursor-not-allowed text-gray-400'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Property Types</label>
                      <input
                        type="text"
                        name="investmentType"
                        value={formData.investmentType}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="e.g., Commercial, Residential"
                        className={`w-full border rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none transition-all ${
                          isEditing 
                            ? 'bg-[#0A0A0A] border-[#D4AF37]/40' 
                            : 'bg-[#1A1A1A] border-[#D4AF37]/10 cursor-not-allowed text-gray-400'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Preferred Locations</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        disabled={!isEditing}
                        placeholder="e.g., Johannesburg, Cape Town"
                        className={`w-full border rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none transition-all ${
                          isEditing 
                            ? 'bg-[#0A0A0A] border-[#D4AF37]/40' 
                            : 'bg-[#1A1A1A] border-[#D4AF37]/10 cursor-not-allowed text-gray-400'
                        }`}
                      />
                    </div>
                  </>
                )}

                {currentRole === 'Seller' && (
                  <>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Properties Listed</label>
                      <input
                        type="text"
                        name="propertyCount"
                        value={formData.propertyCount}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full border rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none transition-all ${
                          isEditing 
                            ? 'bg-[#0A0A0A] border-[#D4AF37]/40' 
                            : 'bg-[#1A1A1A] border-[#D4AF37]/10 cursor-not-allowed text-gray-400'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Total Portfolio Value</label>
                      <input
                        type="text"
                        name="totalValue"
                        value={formData.totalValue}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full border rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none transition-all ${
                          isEditing 
                            ? 'bg-[#0A0A0A] border-[#D4AF37]/40' 
                            : 'bg-[#1A1A1A] border-[#D4AF37]/10 cursor-not-allowed text-gray-400'
                        }`}
                      />
                    </div>
                  </>
                )}

                {currentRole === 'Agent' && (
                  <>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Agency Name</label>
                      <input
                        type="text"
                        name="agencyName"
                        value={formData.agencyName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full border rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none transition-all ${
                          isEditing 
                            ? 'bg-[#0A0A0A] border-[#D4AF37]/40' 
                            : 'bg-[#1A1A1A] border-[#D4AF37]/10 cursor-not-allowed text-gray-400'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">License Number</label>
                      <input
                        type="text"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full border rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none transition-all ${
                          isEditing 
                            ? 'bg-[#0A0A0A] border-[#D4AF37]/40' 
                            : 'bg-[#1A1A1A] border-[#D4AF37]/10 cursor-not-allowed text-gray-400'
                        }`}
                      />
                    </div>
                  </>
                )}

                {currentRole === 'Developer' && (
                  <>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full border rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none transition-all ${
                          isEditing 
                            ? 'bg-[#0A0A0A] border-[#D4AF37]/40' 
                            : 'bg-[#1A1A1A] border-[#D4AF37]/10 cursor-not-allowed text-gray-400'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Company Registration</label>
                      <input
                        type="text"
                        name="companyRegNumber"
                        value={formData.companyRegNumber}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full border rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none transition-all ${
                          isEditing 
                            ? 'bg-[#0A0A0A] border-[#D4AF37]/40' 
                            : 'bg-[#1A1A1A] border-[#D4AF37]/10 cursor-not-allowed text-gray-400'
                        }`}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Save/Cancel Buttons */}
            {isEditing && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3"
              >
                <Button onClick={handleSave} className="flex-1 sm:flex-none">
                  Save Changes
                </Button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 sm:flex-none px-6 py-3 bg-[#1A1A1A] text-white border border-[#D4AF37]/20 rounded-lg hover:border-[#D4AF37] hover:bg-[#2A2A2A] transition-all"
                >
                  Cancel
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* SECURITY TAB */}
        {activeTab === 'security' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-serif text-white mb-2">Password & Security</h2>
              <p className="text-sm text-gray-400">Manage your account security settings</p>
            </div>

            {/* Change Password */}
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-lg font-serif text-white">Change Password</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    className="w-full bg-[#0A0A0A] border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                    className="w-full bg-[#0A0A0A] border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    className="w-full bg-[#0A0A0A] border border-[#D4AF37]/40 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div className="pt-4">
                  <Button onClick={handlePasswordSave}>
                    Update Password
                  </Button>
                </div>
              </div>
            </div>

            {/* Verification Status */}
            {isVerified ? (
              <div className="bg-gradient-to-br from-green-500/10 to-[#111111] border border-green-500/30 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2">Identity Verified</h3>
                    <p className="text-gray-400 mb-4">Your account is fully verified. You have access to all platform features.</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#0A0A0A] border border-green-500/20 rounded-lg p-4">
                        <p className="text-xs text-gray-500 mb-1">Verified On</p>
                        <p className="text-white font-medium">Jan 15, 2024</p>
                      </div>
                      <div className="bg-[#0A0A0A] border border-green-500/20 rounded-lg p-4">
                        <p className="text-xs text-gray-500 mb-1">Status</p>
                        <p className="text-green-400 font-medium">Full Access</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-orange-500/10 to-[#111111] border border-orange-500/30 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2">Verify Your Identity</h3>
                    <p className="text-gray-400 mb-4">Complete KYC verification to unlock all features and access exclusive properties.</p>
                    <Link to="/kyc">
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        Start Verification
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* SUBSCRIPTION TAB */}
        {activeTab === 'subscription' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-serif text-white mb-2">Subscription</h2>
              <p className="text-sm text-gray-400">Manage your subscription plan</p>
            </div>

            {/* Current Plan */}
            <div className={`border rounded-xl p-8 ${
              hasSubscription 
                ? 'bg-gradient-to-br from-[#D4AF37]/10 to-[#111111] border-[#D4AF37]/30'
                : 'bg-[#111111] border-[#D4AF37]/20'
            }`}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Package className="w-6 h-6 text-[#D4AF37]" />
                  <div>
                    <h3 className="text-xl font-serif text-white">
                      {hasSubscription ? 'Pro Plan' : 'Free Plan'}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {hasSubscription ? 'Active subscription' : 'Limited features'}
                    </p>
                  </div>
                </div>
                {hasSubscription && (
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[#D4AF37]">R 15,000</p>
                    <p className="text-sm text-gray-400">per month</p>
                  </div>
                )}
              </div>

              {hasSubscription ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-lg p-4">
                      <p className="text-xs text-gray-500 mb-1">Next Billing</p>
                      <p className="text-white font-medium">April 1, 2024</p>
                    </div>
                    <div className="bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-lg p-4">
                      <p className="text-xs text-gray-500 mb-1">Status</p>
                      <p className="text-green-400 font-medium">Active</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[#D4AF37]/20">
                    <Link to="/dashboard/subscription">
                      <Button variant="outline">Manage Billing</Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="pt-4 border-t border-[#D4AF37]/20">
                  <Link to="/dashboard/subscription">
                    <Button>Upgrade to Pro</Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Features Comparison */}
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8">
              <h3 className="text-lg font-serif text-white mb-6">Plan Features</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-3 border-b border-[#D4AF37]/10">
                  <span className="text-gray-400">Unlimited Messaging</span>
                  <span className={hasSubscription ? 'text-green-400' : 'text-gray-600'}>
                    {hasSubscription ? '✓' : '✗'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[#D4AF37]/10">
                  <span className="text-gray-400">Advanced Search Filters</span>
                  <span className={hasSubscription ? 'text-green-400' : 'text-gray-600'}>
                    {hasSubscription ? '✓' : '✗'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[#D4AF37]/10">
                  <span className="text-gray-400">Exclusive Deal Flow</span>
                  <span className={hasSubscription ? 'text-green-400' : 'text-gray-600'}>
                    {hasSubscription ? '✓' : '✗'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[#D4AF37]/10">
                  <span className="text-gray-400">Priority Support</span>
                  <span className={hasSubscription ? 'text-green-400' : 'text-gray-600'}>
                    {hasSubscription ? '✓' : '✗'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-400">Market Analytics</span>
                  <span className={hasSubscription ? 'text-green-400' : 'text-gray-600'}>
                    {hasSubscription ? '✓' : '✗'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}