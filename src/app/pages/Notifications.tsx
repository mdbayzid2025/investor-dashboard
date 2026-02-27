import React, { useState } from 'react';
import { Bell, Check, Trash2, MessageSquare, DollarSign, Shield, TrendingUp, Package } from 'lucide-react';

type NotificationType = 'message' | 'transaction' | 'system' | 'property' | 'subscription';

interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: 'message',
    title: 'New Message from Admin',
    message: 'Your request for Sandton Penthouse has been reviewed. Please check the conversation thread for updates.',
    timestamp: '2 hours ago',
    isRead: false,
  },
  {
    id: 2,
    type: 'property',
    title: 'New Property Match',
    message: 'A new property matching your criteria has been added: Modern Villa in Constantia - R 15,000,000',
    timestamp: '5 hours ago',
    isRead: false,
  },
  {
    id: 3,
    type: 'transaction',
    title: 'Payment Successful',
    message: 'Your deposit of R 500,000 has been successfully processed. Transaction ID: TXN-2024-001234',
    timestamp: '1 day ago',
    isRead: true,
  },
  {
    id: 4,
    type: 'message',
    title: 'Response to Your Request',
    message: 'Seller_001 has responded to your inquiry about the luxury penthouse.',
    timestamp: '1 day ago',
    isRead: true,
  },
  {
    id: 5,
    type: 'subscription',
    title: 'Subscription Renewal Reminder',
    message: 'Your Pro subscription will renew on Jan 15, 2027. Amount: R 15,000',
    timestamp: '2 days ago',
    isRead: true,
  },
  {
    id: 6,
    type: 'system',
    title: 'Security Alert',
    message: "New login detected from Chrome on Windows. If this wasn't you, please secure your account immediately.",
    timestamp: '3 days ago',
    isRead: true,
  },
  {
    id: 7,
    type: 'property',
    title: 'Property Status Update',
    message: 'The property "Waterfront Apartment" status has changed to "Under Offer"',
    timestamp: '4 days ago',
    isRead: true,
  },
  {
    id: 8,
    type: 'transaction',
    title: 'Transaction Pending',
    message: 'Your property reservation deposit of R 250,000 is pending approval.',
    timestamp: '5 days ago',
    isRead: true,
  },
];

const typeIcon: Record<NotificationType, React.ElementType> = {
  message: MessageSquare,
  transaction: DollarSign,
  system: Shield,
  property: TrendingUp,
  subscription: Package,
};

const typeColor: Record<NotificationType, string> = {
  message: 'text-blue-400',
  transaction: 'text-green-400',
  system: 'text-red-400',
  property: 'text-[#D4AF37]',
  subscription: 'text-purple-400',
};

export function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [tab, setTab] = useState<'all' | 'unread'>('all');

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const visible = tab === 'unread'
    ? notifications.filter(n => !n.isRead)
    : notifications;

  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const remove = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <Bell className="w-5 h-5 text-[#D4AF37]" />
          <h1 className="text-xl text-white font-medium">Notifications</h1>
          {unreadCount > 0 && (
            <span className="px-2 py-0.5 bg-[#D4AF37] text-black text-xs rounded-full">
              {unreadCount}
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="flex items-center gap-1.5 text-sm text-[#D4AF37] hover:underline"
          >
            <Check className="w-3.5 h-3.5" />
            Mark all as read
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-4 border-b border-[#2a2a2a]">
        {(['all', 'unread'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm capitalize transition-colors border-b-2 -mb-px ${
              tab === t
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            {t === 'unread' ? `Unread (${unreadCount})` : 'All'}
          </button>
        ))}
      </div>

      {/* List */}
      {visible.length === 0 ? (
        <div className="text-center py-16 text-gray-600">
          <Bell className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p className="text-sm">{tab === 'unread' ? "You're all caught up!" : 'No notifications.'}</p>
        </div>
      ) : (
        <ul className="divide-y divide-[#1e1e1e]">
          {visible.map(n => {
            const Icon = typeIcon[n.type];
            return (
              <li
                key={n.id}
                onClick={() => !n.isRead && markAsRead(n.id)}
                className={`flex items-start gap-3 py-4 px-3 rounded-lg cursor-pointer transition-colors ${
                  !n.isRead ? 'bg-[#D4AF37]/5 hover:bg-[#D4AF37]/10' : 'hover:bg-[#1a1a1a]'
                }`}
              >
                {/* Dot */}
                <div className="mt-1 flex-shrink-0">
                  {!n.isRead
                    ? <span className="block w-2 h-2 rounded-full bg-[#D4AF37] mt-1" />
                    : <span className="block w-2 h-2" />
                  }
                </div>

                {/* Icon */}
                <Icon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${typeColor[n.type]}`} />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm ${n.isRead ? 'text-gray-400' : 'text-white'}`}>
                    {n.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{n.message}</p>
                  <p className="text-xs text-gray-600 mt-1">{n.timestamp}</p>
                </div>

                {/* Delete */}
                <button
                  onClick={e => { e.stopPropagation(); remove(n.id); }}
                  className="flex-shrink-0 p-1.5 text-gray-600 hover:text-red-400 transition-colors rounded"
                  title="Remove"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
