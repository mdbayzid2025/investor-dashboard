import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { 
  LayoutDashboard, 
  MessageSquare, 
  CreditCard, 
  PlusCircle,
  TrendingUp,
  Briefcase,
  BarChart3,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
  ArrowRightLeft,
  ExternalLink,
  List
} from 'lucide-react';
import { Logo } from './Logo';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { name: 'Profile', path: '/dashboard', icon: LayoutDashboard },
    { name: 'My Listings', path: '/dashboard/my-listings', icon: List },
    { name: 'Requests', path: '/dashboard/requests', icon: MessageSquare },
    { name: 'Stock', path: '/dashboard/stock', icon: Briefcase },
    { name: 'Billing', path: '/dashboard/subscription', icon: CreditCard },
    { name: 'Investor Brief', path: '/dashboard/investor-brief', icon: TrendingUp },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  ];

  const handleLogout = () => {
    // Clear any authentication tokens/state here
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-[#111111] border-r border-[#D4AF37]/20 transition-all duration-300 z-40 ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="p-6 border-b border-[#D4AF37]/20 flex items-center justify-between">
          {isSidebarOpen && <Logo />}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-400 hover:text-[#D4AF37] transition-colors"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-180px)]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30'
                    : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]'
                }`}
                title={!isSidebarOpen ? item.name : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {isSidebarOpen && <span className="text-sm">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#D4AF37]/20">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-[#1A1A1A] transition-all w-full"
            title={!isSidebarOpen ? 'Logout' : undefined}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {isSidebarOpen && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        {/* Top Bar */}
        <header className="bg-[#111111] border-b border-[#D4AF37]/20 px-8 py-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-serif text-white">
                {navItems.find(item => item.path === location.pathname)?.name || 'Dashboard'}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Go to Website
              </Link>
              <Link
                to="/dashboard/notifications"
                className="relative p-2 text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#D4AF37] rounded-full"></span>
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="min-h-[calc(100vh-73px)]">
          {children}
        </div>
      </main>
    </div>
  );
}