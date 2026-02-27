import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';
import { Button } from '@/app/components/Button';
import { motion } from 'motion/react';

export function Settings() {
  const [activeTab, setActiveTab] = useState('password');
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const tabs = [
    { id: 'password', label: 'Change Password' },
    { id: 'support', label: 'Email Support' }
  ];

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Change password:', passwordData);
  };

  const handleEmailSupport = () => {
    window.location.href = 'mailto:support@investorshub.com?subject=Support Request';
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account security and support options.</p>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-[#D4AF37]/20 mb-8">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? 'text-[#D4AF37]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeSettingsTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {/* Change Password Tab */}
        {activeTab === 'password' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h2 className="text-xl font-serif text-white">Change Password</h2>
                <p className="text-sm text-gray-400">Update your account password</p>
              </div>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  required
                  className="w-full bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none transition-colors"
                  placeholder="Enter your current password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  required
                  className="w-full bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none transition-colors"
                  placeholder="Enter your new password"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Must be at least 8 characters with a mix of letters, numbers and symbols
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  required
                  className="w-full bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] outline-none transition-colors"
                  placeholder="Confirm your new password"
                />
              </div>

              <div className="pt-4">
                <Button type="submit">
                  Update Password
                </Button>
              </div>
            </form>

            <div className="mt-6 p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-[#D4AF37]">Security Tip:</strong> Use a strong, unique password 
                that you don't use for other accounts. Consider using a password manager.
              </p>
            </div>
          </motion.div>
        )}

        {/* Email Support Tab */}
        {activeTab === 'support' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h2 className="text-xl font-serif text-white">Email Support</h2>
                <p className="text-sm text-gray-400">Contact our support team directly</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#1A1A1A] rounded-lg p-6">
                <h3 className="text-lg text-white mb-4">Need Help?</h3>
                <p className="text-gray-400 mb-6">
                  Our support team is here to assist you with any questions or concerns. 
                  Click the button below to open your email client and send us a message. 
                  We typically respond within 24 hours.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-xs font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Click "Contact Support" below</p>
                      <p className="text-sm text-gray-400">This will open your default email application</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-xs font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Describe your issue</p>
                      <p className="text-sm text-gray-400">Please be as detailed as possible</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-xs font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Send your message</p>
                      <p className="text-sm text-gray-400">We'll get back to you shortly</p>
                    </div>
                  </div>
                </div>

                <Button onClick={handleEmailSupport} className="w-full">
                  Contact Support
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#1A1A1A] rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Support Email</p>
                  <p className="text-white font-medium">support@investorshub.com</p>
                </div>
                <div className="bg-[#1A1A1A] rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">Response Time</p>
                  <p className="text-white font-medium">Within 24 hours</p>
                </div>
              </div>

              <div className="p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong className="text-[#D4AF37]">Note:</strong> For urgent matters, please include 
                  "URGENT" in your subject line. Our team prioritizes these requests.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
