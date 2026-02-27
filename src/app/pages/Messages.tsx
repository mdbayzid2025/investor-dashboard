import React, { useState } from 'react';
import { Send, Search } from 'lucide-react';

export function Messages() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');
  
  const conversations = [
    { id: 1, name: 'Investor #A8B2', lastMessage: 'Interested in your real estate opportunity...', time: '2h ago', unread: 2 },
    { id: 2, name: 'Investor #C4D9', lastMessage: 'Can we schedule a call?', time: '5h ago', unread: 0 },
    { id: 3, name: 'Investor #E1F3', lastMessage: 'Thank you for the information.', time: '1d ago', unread: 0 },
  ];
  
  const messages = [
    { id: 1, sender: 'them', text: 'Hi, I\'m interested in your real estate development opportunity. Can you provide more details about the location and timeline?', time: '2:30 PM' },
    { id: 2, sender: 'me', text: 'Hello! Thank you for your interest. The project is located in Sandton with an estimated completion time of 18 months.', time: '2:45 PM' },
    { id: 3, sender: 'them', text: 'Great! What about the minimum investment amount and expected returns?', time: '3:00 PM' },
  ];
  
  return (
    <div className="h-screen flex">
      {/* Conversations List */}
      <div className="w-80 bg-[#111111] border-r border-[#D4AF37]/10 flex flex-col">
        <div className="p-4 border-b border-[#D4AF37]/10">
          <h2 className="text-2xl font-serif text-white mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors text-sm"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedChat(conv.id)}
              className={`p-4 border-b border-[#D4AF37]/10 cursor-pointer transition-colors ${
                selectedChat === conv.id ? 'bg-[#D4AF37]/10' : 'hover:bg-[#1A1A1A]'
              }`}
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-white font-medium">{conv.name}</h3>
                <span className="text-xs text-gray-500">{conv.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400 truncate flex-1">{conv.lastMessage}</p>
                {conv.unread > 0 && (
                  <span className="ml-2 px-2 py-0.5 bg-[#D4AF37] text-black text-xs rounded-full">
                    {conv.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-6 border-b border-[#D4AF37]/10 bg-[#111111]">
          <h3 className="text-xl font-serif text-white">Investor #A8B2</h3>
          <p className="text-sm text-gray-400">Anonymous • Active now</p>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-md ${msg.sender === 'me' ? 'bg-[#D4AF37] text-black' : 'bg-[#111111] text-white'} rounded-lg p-4`}>
                <p className="text-sm">{msg.text}</p>
                <span className={`text-xs mt-2 block ${msg.sender === 'me' ? 'text-black/60' : 'text-gray-500'}`}>
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Message Input */}
        <div className="p-6 border-t border-[#D4AF37]/10 bg-[#111111]">
          <div className="flex gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            <button className="px-6 py-3 bg-[#D4AF37] text-black rounded-lg hover:bg-[#E4C77D] transition-colors flex items-center gap-2">
              <Send className="w-5 h-5" />
              Send
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Your identity remains anonymous. Share contact details only when ready.
          </p>
        </div>
      </div>
    </div>
  );
}
