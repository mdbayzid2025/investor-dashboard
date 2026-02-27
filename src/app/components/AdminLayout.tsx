import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router';
import { 
  LayoutDashboard,
  Users,
  Building2,
  FileText,
  Settings,
  LogOut,
  Home,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
  User,
  Lock,
  Clock,
  MessageSquare,
  Heart,
  CreditCard,
  UserCog,
  Newspaper,
  CheckCircle
} from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';

export function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState(5); // Mock notification count

  const navItems = [
    { path: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
    { path: '/admin/users', icon: Users, label: 'User Management' },
    { path: '/admin/admins', icon: UserCog, label: 'Admin Management' },
    { path: '/admin/approvals', icon: CheckCircle, label: 'Approval', badge: 5 },
    { path: '/admin/requests', icon: MessageSquare, label: 'Requests Board' },
    { path: '/admin/stock', icon: Building2, label: 'Stock' },
    { path: '/admin/billing', icon: CreditCard, label: 'Billing & Revenue' },
    { path: '/admin/investor-brief', icon: Newspaper, label: 'Investor Brief' },
    { path: '/admin/cms', icon: FileText, label: 'CMS Editor' },
    { path: '/admin/settings', icon: Settings, label: 'Settings' }
  ];

  const isActive = (path: string, exact?: boolean) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout from admin panel?')) {
      localStorage.removeItem('adminToken');
      window.location.href = '/login';
    }
  };

  const handleChangePassword = () => {
    navigate('/admin/settings?tab=security');
    setShowProfileMenu(false);
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 h-screen w-72 bg-[#0A0A0A] border-r border-[#D4AF37]/20 
        flex flex-col z-50 transform transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Admin Header */}
        <div className="p-6 border-b border-[#D4AF37]/20">          
            <Logo />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>          
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path, item.exact);
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                    ${active 
                      ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]' 
                      : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="ml-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#D4AF37]/20 space-y-2">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-[#1A1A1A] transition-all"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">View Website</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-400/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Header Bar */}
        <header className="sticky top-0 z-30 bg-[#0A0A0A] border-b border-[#D4AF37]/20">
          <div className="px-6 py-4 flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <Button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </Button>

            {/* Mobile Logo */}
            <div className="lg:hidden">
              <Logo />
            </div>


            {/* Spacer for layout */}
            <div className="hidden lg:block flex-1"></div>

            {/* Right Section - Notifications & Profile */}
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  className="relative p-2 text-gray-400 hover:text-white transition-colors"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <Bell className="w-5 h-5" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                      {notifications}
                    </span>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowNotifications(false)}
                    />
                    <div className="absolute right-0 mt-2 w-96 bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg shadow-xl z-20 overflow-hidden max-h-[500px] flex flex-col">
                      {/* Header */}
                      <div className="p-4 border-b border-[#D4AF37]/20 flex items-center justify-between">
                        <h3 className="text-white font-medium">Notifications</h3>
                        <button className="text-xs text-[#D4AF37] hover:underline">
                          Mark all as read
                        </button>
                      </div>

                      {/* Notifications List */}
                      <div className="overflow-y-auto flex-1">
                        {/* New User Registration */}
                        <div className="p-4 border-b border-[#D4AF37]/10 hover:bg-[#D4AF37]/5 transition-colors cursor-pointer">
                          <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-400/10 flex items-center justify-center flex-shrink-0">
                              <Users className="w-5 h-5 text-green-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-sm font-medium">New User Registration</p>
                              <p className="text-gray-400 text-xs mt-1">John Smith just registered for a Premium account</p>
                              <p className="text-gray-500 text-xs mt-2 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                5 minutes ago
                              </p>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-2"></div>
                          </div>
                        </div>

                        {/* Property Listed */}
                        <div className="p-4 border-b border-[#D4AF37]/10 hover:bg-[#D4AF37]/5 transition-colors cursor-pointer">
                          <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                              <Building2 className="w-5 h-5 text-[#D4AF37]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-sm font-medium">New Property Listed</p>
                              <p className="text-gray-400 text-xs mt-1">Investor042 listed "Coastal Villa" worth $5M</p>
                              <p className="text-gray-500 text-xs mt-2 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                2 hours ago
                              </p>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-2"></div>
                          </div>
                        </div>

                        {/* Payment Received */}
                        <div className="p-4 border-b border-[#D4AF37]/10 hover:bg-[#D4AF37]/5 transition-colors cursor-pointer">
                          <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-400/10 flex items-center justify-center flex-shrink-0">
                              <CreditCard className="w-5 h-5 text-green-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-sm font-medium">Payment Received</p>
                              <p className="text-gray-400 text-xs mt-1">Premium subscription payment of $99 received</p>
                              <p className="text-gray-500 text-xs mt-2 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                3 hours ago
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* New Request */}
                        <div className="p-4 border-b border-[#D4AF37]/10 hover:bg-[#D4AF37]/5 transition-colors cursor-pointer">
                          <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-400/10 flex items-center justify-center flex-shrink-0">
                              <MessageSquare className="w-5 h-5 text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-sm font-medium">New Investment Request</p>
                              <p className="text-gray-400 text-xs mt-1">Developer009 posted request for hotel assets</p>
                              <p className="text-gray-500 text-xs mt-2 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                5 hours ago
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* System Update */}
                        <div className="p-4 hover:bg-[#D4AF37]/5 transition-colors cursor-pointer">
                          <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-full bg-purple-400/10 flex items-center justify-center flex-shrink-0">
                              <Settings className="w-5 h-5 text-purple-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-sm font-medium">System Update</p>
                              <p className="text-gray-400 text-xs mt-1">Dashboard analytics updated with new metrics</p>
                              <p className="text-gray-500 text-xs mt-2 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                1 day ago
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="p-3 border-t border-[#D4AF37]/20 text-center">
                        <Link
                          to="/admin"
                          onClick={() => setShowNotifications(false)}
                          className="text-xs text-[#D4AF37] hover:underline"
                        >
                          View all notifications
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#1A1A1A] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center">
                    <span className="text-black font-bold text-sm">AD</span>
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-white text-sm font-medium">Admin User</p>
                    <p className="text-gray-400 text-xs">Super Admin</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {/* Profile Dropdown Menu */}
                {showProfileMenu && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowProfileMenu(false)}
                    />
                    <div className="absolute right-0 mt-2 w-56 bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg shadow-xl z-20 overflow-hidden">
                      <div className="p-4 border-b border-[#D4AF37]/20">
                        <p className="text-white font-medium text-sm">Admin User</p>
                        <p className="text-gray-400 text-xs">admin@investorshub.com</p>
                      </div>

                      <Link
                        to="/admin/settings"
                        onClick={() => setShowProfileMenu(false)}
                        className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors"
                      >
                        <User className="w-4 h-4" />
                        <span className="text-sm">My Profile</span>
                      </Link>

                      <Link
                        to="/admin/settings"
                        onClick={() => setShowProfileMenu(false)}
                        className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                        <span className="text-sm">Settings</span>
                      </Link>

                      <button
                        onClick={handleChangePassword}
                        className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors"
                      >
                        <Lock className="w-4 h-4" />
                        <span className="text-sm">Change Password</span>
                      </button>

                      <div className="border-t border-[#D4AF37]/20" />

                      <button
                        onClick={() => {
                          setShowProfileMenu(false);
                          handleLogout();
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm">Logout</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 bg-black">
          <Outlet />
        </main>

        {/* Admin Footer */}
        <footer className="bg-[#0A0A0A] border-t border-[#D4AF37]/20 px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Investors Hub. Admin Dashboard v1.0
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Status: <span className="text-green-400">Online</span></span>
              <span>•</span>
              <span>Last Login: Today at 9:30 AM</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}