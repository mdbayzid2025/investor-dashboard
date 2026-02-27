import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { CheckCircle, AlertTriangle, TrendingUp, ArrowUpRight, Briefcase, MessageSquare, Bell } from 'lucide-react';

export function DashboardHome() {
  // Mock data
  const isVerified = true;
  const hasSubscription = true;
  const stats = {
    activeRequests: 3,
    watchedProperties: 12,
    unreadMessages: 5
  };

  const recentActivity = [
    { id: 1, type: 'property', title: 'New property matches your criteria', time: '2 hours ago', link: '/dashboard/stock/3' },
    { id: 2, type: 'message', title: 'New message in "Luxury Penthouse" conversation', time: '5 hours ago', link: '/dashboard/requests/1' },
    { id: 3, type: 'listing', title: 'Your listing "Office Space" received interest', time: '1 day ago', link: '/dashboard/my-listings' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-serif text-[#D4AF37] mb-1">Welcome Back</h1>
        <p className="text-sm text-gray-400">Here's what's happening with your properties</p>
      </motion.div>

      {/* Alert Banners */}
      <div className="space-y-4 mb-8">
        {!isVerified && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-orange-400 font-medium mb-1">Verification Required</h3>
                <p className="text-gray-400 text-sm mb-3">Complete identity verification to access all features</p>
                <Link to="/kyc">
                  <button className="text-sm text-orange-400 hover:text-orange-300 font-medium">
                    Start Verification →
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {!hasSubscription && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-4"
          >
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-[#D4AF37] font-medium mb-1">Upgrade to Pro</h3>
                <p className="text-gray-400 text-sm mb-3">Get unlimited messaging and exclusive deal flow access</p>
                <Link to="/dashboard/subscription">
                  <button className="text-sm text-[#D4AF37] hover:text-[#F4CF57] font-medium">
                    View Plans →
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-blue-400" />
            </div>
            <Link to="/dashboard/requests">
              <ArrowUpRight className="w-5 h-5 text-gray-500 hover:text-[#D4AF37] transition-colors" />
            </Link>
          </div>
          <h3 className="text-3xl font-bold text-white mb-1">{stats.activeRequests}</h3>
          <p className="text-gray-400 text-sm">Active Requests</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <Link to="/dashboard/stock">
              <ArrowUpRight className="w-5 h-5 text-gray-500 hover:text-[#D4AF37] transition-colors" />
            </Link>
          </div>
          <h3 className="text-3xl font-bold text-white mb-1">{stats.watchedProperties}</h3>
          <p className="text-gray-400 text-sm">Watched Properties</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <Bell className="w-6 h-6 text-orange-400" />
            </div>
            <Link to="/dashboard/notifications">
              <ArrowUpRight className="w-5 h-5 text-gray-500 hover:text-[#D4AF37] transition-colors" />
            </Link>
          </div>
          <h3 className="text-3xl font-bold text-white mb-1">{stats.unreadMessages}</h3>
          <p className="text-gray-400 text-sm">Unread Messages</p>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl overflow-hidden"
      >
        <div className="p-6 border-b border-[#D4AF37]/20">
          <h2 className="text-xl font-serif text-white">Recent Activity</h2>
        </div>
        <div className="divide-y divide-[#D4AF37]/10">
          {recentActivity.map((activity, idx) => (
            <Link
              key={activity.id}
              to={activity.link}
              className="block p-6 hover:bg-[#1A1A1A] transition-colors group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white font-medium mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{activity.time}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-[#D4AF37] transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Link to="/dashboard/requests">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-blue-500/10 to-[#111111] border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/50 transition-all group"
          >
            <MessageSquare className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-serif text-white mb-2 group-hover:text-blue-400 transition-colors">
              Browse Requests
            </h3>
            <p className="text-gray-400 text-sm">
              View active property requests from buyers and investors
            </p>
          </motion.div>
        </Link>

        <Link to="/dashboard/stock">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-[#D4AF37]/10 to-[#111111] border border-[#D4AF37]/30 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all group"
          >
            <Briefcase className="w-8 h-8 text-[#D4AF37] mb-4" />
            <h3 className="text-xl font-serif text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
              Explore Properties
            </h3>
            <p className="text-gray-400 text-sm">
              Discover curated premium properties and investment opportunities
            </p>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}