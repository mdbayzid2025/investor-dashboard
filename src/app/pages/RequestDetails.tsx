import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft, MapPin, DollarSign, Clock, MessageSquare, Shield,
  Send, CheckCheck, AlertCircle, Users, Calendar, TrendingUp,
  ChevronRight, Eye, Zap, Tag, X
} from 'lucide-react';
import { MOCK_REQUESTS } from '../data/mockData';

const urgencyConfig: Record<string, { label: string; color: string; dot: string }> = {
  High:   { label: 'High Urgency',   color: 'bg-red-400/10 text-red-400 border border-red-400/20',    dot: 'bg-red-400' },
  Medium: { label: 'Med Urgency',    color: 'bg-orange-400/10 text-orange-400 border border-orange-400/20', dot: 'bg-orange-400' },
  Low:    { label: 'Low Urgency',    color: 'bg-gray-400/10 text-gray-400 border border-gray-400/20',  dot: 'bg-gray-400' },
};

const avatarColors = [
  'bg-purple-500/20 text-purple-300',
  'bg-blue-500/20 text-blue-300',
  'bg-green-500/20 text-green-300',
  'bg-amber-500/20 text-amber-300',
];

export function RequestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [threadOpen, setThreadOpen] = useState(false);
  const [message, setMessage] = useState('');

  const requestItem = MOCK_REQUESTS.find(item => String(item.id) === String(id)) as any;

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Seller_001',
      role: 'seller',
      text: 'I have a property that matches your requirements. 3-bedroom penthouse in Sandton with excellent city views.',
      timestamp: '10:30',
      status: 'delivered',
    },
    {
      id: 2,
      sender: requestItem?.user || 'You',
      role: 'user',
      text: 'That sounds interesting. What is your asking price and what floor is it on?',
      timestamp: '11:15',
      status: 'delivered',
    },
    {
      id: 3,
      sender: 'Seller_001',
      role: 'seller',
      text: 'Price is R 10,500,000. It\'s on the 15th floor with panoramic views. Property has modern finishes installed last year.',
      timestamp: '11:42',
      status: 'delivered',
    },
    {
      id: 4,
      sender: 'Admin',
      role: 'admin',
      text: 'I\'ve reviewed both parties\' credentials. You may proceed. No personal contact info in chat.',
      timestamp: '14:20',
      status: 'delivered',
    },
    {
      id: 5,
      sender: requestItem?.user || 'You',
      role: 'user',
      text: 'Thank you admin. Seller_001, I would like to schedule a viewing. What documents can you provide?',
      timestamp: '14:35',
      status: 'delivered',
    },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      sender: requestItem?.user || 'You',
      role: 'user',
      text: message,
      timestamp: new Date().toLocaleTimeString('en-ZA', { hour: '2-digit', minute: '2-digit' }),
      status: 'sent',
    }]);
    setMessage('');
  };

  if (!requestItem) {
    return (
      <div className="p-8 text-center text-gray-400">
        <h2 className="text-2xl text-white mb-4">Request Not Found</h2>
        <Link to="/dashboard/my-listings" className="text-[#D4AF37] hover:underline">Return to My Listings</Link>
      </div>
    );
  }

  const urgency = urgencyConfig[requestItem.urgency] ?? urgencyConfig['Low'];
  const latestMsg = [...messages].reverse().find(m => m.role !== 'user');

  return (
    <>
      <div className="p-6 max-w-5xl mx-auto pb-16">
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
          <span className="text-sm text-[#D4AF37]">Owner View — Only you can see full request details & conversation.</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── LEFT: Main Details (2 cols) ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Title card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl font-serif text-white mb-2">{requestItem.title}</h1>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="flex items-center gap-1.5 text-sm text-gray-400">
                      <Tag className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {requestItem.topic}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <span className="flex items-center gap-1.5 text-sm text-gray-400">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      Posted {requestItem.date}
                    </span>
                  </div>
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium flex-shrink-0 ${urgency.color}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${urgency.dot}`} />
                  {urgency.label}
                </div>
              </div>

              {/* Budget */}
              <div className="flex items-center gap-2 bg-[#D4AF37]/5 border border-[#D4AF37]/15 rounded-lg px-4 py-3">
                <DollarSign className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs text-gray-500 uppercase tracking-wider mr-1">Budget</span>
                <span className="text-[#D4AF37] font-serif">{requestItem.budget}</span>
              </div>

              {/* Location (if available) */}
              {requestItem.location && (
                <div className="flex items-center gap-2 bg-[#0A0A0A] border border-[#D4AF37]/10 rounded-lg px-4 py-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-500 uppercase tracking-wider mr-1">Location</span>
                  <span className="text-gray-300">{requestItem.location}</span>
                </div>
              )}
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-6"
            >
              <h3 className="text-xs text-gray-500 uppercase tracking-widest mb-3">Request Details</h3>
              <p className="text-gray-300 leading-relaxed">{requestItem.content}</p>
            </motion.div>
          </div>

          {/* ── RIGHT: Sidebar (1 col) ── */}
          <div className="space-y-4">

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 }}
              className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-5 space-y-4"
            >
              <h3 className="text-xs text-gray-500 uppercase tracking-widest">Performance</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Eye className="w-4 h-4" />
                    Views
                  </div>
                  <span className="text-white font-medium">
                    {requestItem.id === 1 ? 24 : requestItem.id === 2 ? 18 : 45}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    Responses
                  </div>
                  <span className="text-[#D4AF37] font-medium">{requestItem.responses}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MessageSquare className="w-4 h-4" />
                    Messages
                  </div>
                  <span className="text-white font-medium">{messages.length}</span>
                </div>
              </div>
            </motion.div>

            {/* Request info */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-5 space-y-3"
            >
              <h3 className="text-xs text-gray-500 uppercase tracking-widest">Request Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Request ID</span>
                  <span className="text-white font-mono">REQ-00{requestItem.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Topic</span>
                  <span className="text-white">{requestItem.topic}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Urgency</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${urgency.color}`}>
                    {requestItem.urgency}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Posted by</span>
                  <span className="text-white">{requestItem.user}</span>
                </div>
              </div>
            </motion.div>

            {/* ── Open Thread Button ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex justify-center"
            >
              <button
                onClick={() => setThreadOpen(true)}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-semibold py-4 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#D4AF37]/20"
              >
                Open Thread
              </button>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Thread Drawer ── */}
      <AnimatePresence>
        {threadOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setThreadOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Full-Screen Thread */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-0 bg-[#0A0A0A] z-50 flex flex-col"
            >
              {/* Header */}
              <div className="bg-[#111111] border-b border-[#D4AF37]/20 p-6">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl text-white font-medium">Conversation Thread</h2>
                    <button
                      onClick={() => setThreadOpen(false)}
                      className="text-gray-400 hover:text-white transition-colors p-1"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    {requestItem.title}
                  </p>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="bg-[#D4AF37]/5 border-b border-[#D4AF37]/20 px-6 py-3">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-400">
                      <span className="text-[#D4AF37] font-medium">Privacy Protected:</span> All messages are monitored. Do not share personal contact information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-4xl mx-auto space-y-4">
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`flex ${
                        msg.role === 'admin' ? 'justify-center' : msg.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div className={`max-w-[75%] ${msg.role === 'admin' ? 'w-full max-w-xl' : ''}`}>
                        {/* Sender */}
                        <div
                          className={`flex items-center gap-2 mb-1 px-1 ${
                            msg.role === 'admin'
                              ? 'justify-center'
                              : msg.role === 'user'
                              ? 'justify-end'
                              : 'justify-start'
                          }`}
                        >
                          <span
                            className={`text-xs font-medium ${
                              msg.role === 'admin'
                                ? 'text-[#D4AF37]'
                                : msg.role === 'user'
                                ? 'text-blue-400'
                                : 'text-gray-400'
                            }`}
                          >
                            {msg.sender}
                            {msg.role === 'admin' && (
                              <span className="ml-2 text-[10px] bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-0.5 rounded">
                                ADMIN
                              </span>
                            )}
                          </span>
                          <span className="text-xs text-gray-600">{msg.timestamp}</span>
                        </div>

                        {/* Bubble */}
                        <div
                          className={`rounded-2xl px-4 py-3 ${
                            msg.role === 'admin'
                              ? 'bg-[#D4AF37]/10 border border-[#D4AF37]/30'
                              : msg.role === 'user'
                              ? 'bg-blue-600/20 border border-blue-500/30'
                              : 'bg-[#1A1A1A] border border-white/10'
                          }`}
                        >
                          <p className="text-sm text-white leading-relaxed">{msg.text}</p>

                          {msg.role === 'user' && (
                            <div className="flex items-center justify-end gap-1 mt-2">
                              <CheckCheck
                                className={`w-3.5 h-3.5 ${
                                  msg.status === 'delivered' ? 'text-blue-400' : 'text-gray-600'
                                }`}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="bg-[#111111] border-t border-[#D4AF37]/20 p-6">
                <div className="max-w-4xl mx-auto">
                  <form onSubmit={handleSend} className="relative">
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSend(e);
                        }
                      }}
                      placeholder="Type your message…"
                      className="w-full bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-xl pl-4 pr-14 py-3 text-white placeholder:text-gray-600 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none resize-none text-sm"
                    />
                    <button
                      type="submit"
                      disabled={!message.trim()}
                      className="absolute right-2 bottom-2 bg-[#D4AF37] text-black p-2.5 rounded-lg hover:bg-[#F4CF57] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                  <p className="text-xs text-gray-600 mt-2">
                    Press Enter to send • Shift+Enter for new line
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}