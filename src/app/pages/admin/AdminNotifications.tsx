import React, { useState } from 'react';
import { 
  Bell,
  Heart,
  MessageSquare,
  UserPlus,
  Check,
  Trash2,
  Eye,
  Filter
} from 'lucide-react';
import { Button } from '@/app/components/Button';

type NotificationType = 'new_interest' | 'new_request' | 'new_signup' | 'all';

interface Notification {
  id: number;
  type: 'new_interest' | 'new_request' | 'new_signup';
  message: string;
  relatedId: number;
  relatedName: string;
  read: boolean;
  timestamp: string;
}

export function AdminNotifications() {
  const [filter, setFilter] = useState<NotificationType>('all');
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'new_interest',
      message: 'Michael Chen expressed interest in Farmland - Stellenbosch Area',
      relatedId: 101,
      relatedName: 'Michael Chen',
      read: false,
      timestamp: '2024-01-22T14:30:00'
    },
    {
      id: 2,
      type: 'new_request',
      message: 'New request posted in Hotels category: "Looking for boutique hotel in Cape Town"',
      relatedId: 205,
      relatedName: 'Hotels',
      read: false,
      timestamp: '2024-01-22T12:15:00'
    },
    {
      id: 3,
      type: 'new_signup',
      message: 'New user signup: Sarah Williams (Investor)',
      relatedId: 8,
      relatedName: 'Sarah Williams',
      read: false,
      timestamp: '2024-01-22T09:45:00'
    },
    {
      id: 4,
      type: 'new_interest',
      message: 'David Martinez expressed interest in Boutique Hotel - Cape Town',
      relatedId: 102,
      relatedName: 'David Martinez',
      read: true,
      timestamp: '2024-01-21T16:20:00'
    },
    {
      id: 5,
      type: 'new_request',
      message: 'New request posted in Farms category: "Agricultural land needed in Western Cape"',
      relatedId: 206,
      relatedName: 'Farms',
      read: true,
      timestamp: '2024-01-21T11:30:00'
    },
    {
      id: 6,
      type: 'new_signup',
      message: 'New user signup: Tech Corp Investments (Investor)',
      relatedId: 9,
      relatedName: 'Tech Corp Investments',
      read: true,
      timestamp: '2024-01-20T14:00:00'
    }
  ]);

  const filteredNotifications = notifications.filter(n => 
    filter === 'all' || n.type === filter
  );

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const handleDelete = (id: number) => {
    if (confirm('Delete this notification?')) {
      setNotifications(notifications.filter(n => n.id !== id));
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'new_interest':
        return <Heart className="w-5 h-5 text-red-400" />;
      case 'new_request':
        return <MessageSquare className="w-5 h-5 text-blue-400" />;
      case 'new_signup':
        return <UserPlus className="w-5 h-5 text-green-400" />;
      default:
        return <Bell className="w-5 h-5 text-gray-400" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'new_interest':
        return 'New Interest';
      case 'new_request':
        return 'New Request';
      case 'new_signup':
        return 'New Signup';
      default:
        return 'Notification';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) {
      return `${diffMins} minutes ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hours ago`;
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-serif text-white mb-2">Notifications</h1>
            <p className="text-gray-400">Stay updated on platform activity</p>
          </div>
          {unreadCount > 0 && (
            <Button onClick={handleMarkAllAsRead} variant="outline" className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              Mark All as Read
            </Button>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`p-4 rounded-lg border transition-all ${
            filter === 'all' 
              ? 'bg-[#D4AF37]/10 border-[#D4AF37]' 
              : 'bg-[#111111] border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
          }`}
        >
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-[#D4AF37]" />
            <div className="text-left">
              <p className="text-2xl font-bold text-white">{notifications.length}</p>
              <p className="text-xs text-gray-400">All Notifications</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => setFilter('new_interest')}
          className={`p-4 rounded-lg border transition-all ${
            filter === 'new_interest' 
              ? 'bg-red-400/10 border-red-400' 
              : 'bg-[#111111] border-[#D4AF37]/20 hover:border-red-400/40'
          }`}
        >
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-red-400" />
            <div className="text-left">
              <p className="text-2xl font-bold text-white">
                {notifications.filter(n => n.type === 'new_interest').length}
              </p>
              <p className="text-xs text-gray-400">Interests</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => setFilter('new_request')}
          className={`p-4 rounded-lg border transition-all ${
            filter === 'new_request' 
              ? 'bg-blue-400/10 border-blue-400' 
              : 'bg-[#111111] border-[#D4AF37]/20 hover:border-blue-400/40'
          }`}
        >
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-blue-400" />
            <div className="text-left">
              <p className="text-2xl font-bold text-white">
                {notifications.filter(n => n.type === 'new_request').length}
              </p>
              <p className="text-xs text-gray-400">Requests</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => setFilter('new_signup')}
          className={`p-4 rounded-lg border transition-all ${
            filter === 'new_signup' 
              ? 'bg-green-400/10 border-green-400' 
              : 'bg-[#111111] border-[#D4AF37]/20 hover:border-green-400/40'
          }`}
        >
          <div className="flex items-center gap-3">
            <UserPlus className="w-5 h-5 text-green-400" />
            <div className="text-left">
              <p className="text-2xl font-bold text-white">
                {notifications.filter(n => n.type === 'new_signup').length}
              </p>
              <p className="text-xs text-gray-400">Signups</p>
            </div>
          </div>
        </button>
      </div>

      {/* Unread Banner */}
      {unreadCount > 0 && (
        <div className="bg-orange-400/10 border border-orange-400/20 rounded-lg p-4 mb-6">
          <p className="text-orange-400 text-sm">
            You have {unreadCount} unread notification{unreadCount > 1 ? 's' : ''}
          </p>
        </div>
      )}

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.map((notification) => (
          <div 
            key={notification.id}
            className={`bg-[#111111] border rounded-lg p-4 transition-all ${
              notification.read 
                ? 'border-[#D4AF37]/10' 
                : 'border-[#D4AF37]/30 bg-[#D4AF37]/5'
            }`}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                notification.read ? 'bg-gray-400/10' : 'bg-[#D4AF37]/20'
              }`}>
                {getNotificationIcon(notification.type)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      notification.type === 'new_interest' ? 'bg-red-400/10 text-red-400' :
                      notification.type === 'new_request' ? 'bg-blue-400/10 text-blue-400' :
                      'bg-green-400/10 text-green-400'
                    }`}>
                      {getTypeLabel(notification.type)}
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs whitespace-nowrap">
                    {formatTimestamp(notification.timestamp)}
                  </span>
                </div>
                
                <p className={`text-sm mb-2 ${notification.read ? 'text-gray-400' : 'text-white font-medium'}`}>
                  {notification.message}
                </p>

                {!notification.read && (
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                    <span className="text-[#D4AF37] text-xs">Unread</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {!notification.read && (
                  <button
                    onClick={() => handleMarkAsRead(notification.id)}
                    className="p-2 bg-green-400/10 text-green-400 rounded hover:bg-green-400/20 transition-colors"
                    title="Mark as Read"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => handleDelete(notification.id)}
                  className="p-2 bg-red-400/10 text-red-400 rounded hover:bg-red-400/20 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredNotifications.length === 0 && (
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-12 text-center">
          <Bell className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No notifications found</p>
        </div>
      )}
    </div>
  );
}
