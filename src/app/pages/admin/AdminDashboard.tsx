import React, { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { 
  Users, 
  Building2, 
  Heart, 
  Bell,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Calendar,
  DollarSign,
  Eye,
  Filter,
  Download,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Button } from '@/app/components/Button';

export function AdminDashboard() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedMetric, setSelectedMetric] = useState<'all' | 'paid' | 'free'>('all');

  // Mock data - 12 months of user growth
  const monthlyData = {
    '2025': [
      { month: 'Jan', total: 598, paid: 418, free: 180, newSignups: 55 },
      { month: 'Feb', total: 658, paid: 465, free: 193, newSignups: 60 },
      { month: 'Mar', total: 0, paid: 0, free: 0, newSignups: 0 },
      { month: 'Apr', total: 0, paid: 0, free: 0, newSignups: 0 },
      { month: 'May', total: 0, paid: 0, free: 0, newSignups: 0 },
      { month: 'Jun', total: 0, paid: 0, free: 0, newSignups: 0 },
      { month: 'Jul', total: 0, paid: 0, free: 0, newSignups: 0 },
      { month: 'Aug', total: 0, paid: 0, free: 0, newSignups: 0 },
      { month: 'Sep', total: 0, paid: 0, free: 0, newSignups: 0 },
      { month: 'Oct', total: 0, paid: 0, free: 0, newSignups: 0 },
      { month: 'Nov', total: 0, paid: 0, free: 0, newSignups: 0 },
      { month: 'Dec', total: 0, paid: 0, free: 0, newSignups: 0 }
    ],
    '2024': [
      { month: 'Jan', total: 145, paid: 89, free: 56, newSignups: 23 },
      { month: 'Feb', total: 168, paid: 102, free: 66, newSignups: 23 },
      { month: 'Mar', total: 195, paid: 118, free: 77, newSignups: 27 },
      { month: 'Apr', total: 224, paid: 138, free: 86, newSignups: 29 },
      { month: 'May', total: 258, paid: 162, free: 96, newSignups: 34 },
      { month: 'Jun', total: 289, paid: 183, free: 106, newSignups: 31 },
      { month: 'Jul', total: 324, paid: 208, free: 116, newSignups: 35 },
      { month: 'Aug', total: 362, paid: 236, free: 126, newSignups: 38 },
      { month: 'Sep', total: 401, paid: 265, free: 136, newSignups: 39 },
      { month: 'Oct', total: 445, paid: 298, free: 147, newSignups: 44 },
      { month: 'Nov', total: 492, paid: 334, free: 158, newSignups: 47 },
      { month: 'Dec', total: 543, paid: 375, free: 168, newSignups: 51 }
    ],
    '2023': [
      { month: 'Jan', total: 45, paid: 28, free: 17, newSignups: 12 },
      { month: 'Feb', total: 52, paid: 32, free: 20, newSignups: 7 },
      { month: 'Mar', total: 61, paid: 38, free: 23, newSignups: 9 },
      { month: 'Apr', total: 73, paid: 46, free: 27, newSignups: 12 },
      { month: 'May', total: 85, paid: 54, free: 31, newSignups: 12 },
      { month: 'Jun', total: 98, paid: 63, free: 35, newSignups: 13 },
      { month: 'Jul', total: 112, paid: 72, free: 40, newSignups: 14 },
      { month: 'Aug', total: 127, paid: 82, free: 45, newSignups: 15 },
      { month: 'Sep', total: 143, paid: 93, free: 50, newSignups: 16 },
      { month: 'Oct', total: 160, paid: 105, free: 55, newSignups: 17 },
      { month: 'Nov', total: 178, paid: 118, free: 60, newSignups: 18 },
      { month: 'Dec', total: 197, paid: 132, free: 65, newSignups: 19 }
    ],
    '2022': [
      { month: 'Jan', total: 12, paid: 8, free: 4, newSignups: 3 },
      { month: 'Feb', total: 15, paid: 10, free: 5, newSignups: 3 },
      { month: 'Mar', total: 19, paid: 13, free: 6, newSignups: 4 },
      { month: 'Apr', total: 23, paid: 16, free: 7, newSignups: 4 },
      { month: 'May', total: 27, paid: 19, free: 8, newSignups: 4 },
      { month: 'Jun', total: 31, paid: 22, free: 9, newSignups: 4 },
      { month: 'Jul', total: 35, paid: 25, free: 10, newSignups: 4 },
      { month: 'Aug', total: 40, paid: 28, free: 12, newSignups: 5 },
      { month: 'Sep', total: 45, paid: 32, free: 13, newSignups: 5 },
      { month: 'Oct', total: 51, paid: 36, free: 15, newSignups: 6 },
      { month: 'Nov', total: 57, paid: 41, free: 16, newSignups: 6 },
      { month: 'Dec', total: 64, paid: 46, free: 18, newSignups: 7 }
    ]
  };

  // Role distribution data
  const roleData = [
    { name: 'Investor', value: 312, color: '#10B981', percentage: 57.5 }, // green
    { name: 'Property Owner', value: 124, color: '#3B82F6', percentage: 22.8 }, // blue
    { name: 'Agent', value: 78, color: '#F59E0B', percentage: 14.4 }, // yellow
    { name: 'Developer', value: 29, color: '#8B5CF6', percentage: 5.3 } // purple
  ];

  // Subscription tier breakdown
  const subscriptionTiers = [
    { name: 'Premium', count: 245, color: '#D4AF37', percentage: 65.3 },
    { name: 'Standard', count: 90, color: '#10B981', percentage: 24.0 },
    { name: 'Basic', count: 40, color: '#3B82F6', percentage: 10.7 }
  ];

  // Current year data
  const currentYearData = monthlyData[selectedYear as keyof typeof monthlyData];
  const currentMonth = currentYearData[currentYearData.length - 1];
  const previousMonth = currentYearData[currentYearData.length - 2];

  // Calculate growth percentages
  const totalGrowth = ((currentMonth.total - previousMonth.total) / previousMonth.total * 100).toFixed(1);
  const paidGrowth = ((currentMonth.paid - previousMonth.paid) / previousMonth.paid * 100).toFixed(1);
  const freeGrowth = ((currentMonth.free - previousMonth.free) / previousMonth.free * 100).toFixed(1);

  // Calculate totals
  const totalUsers = currentMonth.total;
  const totalPaid = currentMonth.paid;
  const totalFree = currentMonth.free;
  const conversionRate = ((totalPaid / totalUsers) * 100).toFixed(1);

  // Recent activity
  const recentSignups = [
    { id: 1, name: 'Michael Chen', email: 'michael.c@email.com', role: 'Investor', date: '2 hours ago', status: 'pending' },
    { id: 2, name: 'ABC Developers Ltd', email: 'contact@abcdev.com', role: 'Seller', date: '5 hours ago', status: 'approved' },
    { id: 3, name: 'Sarah Williams', email: 'sarah.w@realty.com', role: 'Agent', date: '1 day ago', status: 'approved' },
    { id: 4, name: 'David Martinez', email: 'david.m@email.com', role: 'Investor', date: '1 day ago', status: 'approved' }
  ];

  const recentInterests = [
    { id: 1, stock: 'Farmland - Stellenbosch Area', user: 'Michael Chen', role: 'Investor', date: '3 hours ago', stockId: 101 },
    { id: 2, stock: 'Boutique Hotel - Cape Town', user: 'Tech Corp Investments', role: 'Investor', date: '6 hours ago', stockId: 102 },
    { id: 3, stock: 'Investment Portfolio - Mixed Use', user: 'David Martinez', role: 'Investor', date: '1 day ago', stockId: 103 }
  ];

  // Chart data based on selected metric
  const chartData = useMemo(() => {
    return currentYearData.map(item => ({
      month: item.month,
      paid: item.paid,
      free: item.free,
      total: item.total
    }));
  }, [currentYearData]);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-serif text-white mb-1">Analytics Dashboard</h1>
            <p className="text-sm text-gray-400">Platform insights and key metrics</p>
          </div>
          
          {/* Year Selector & Export */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#111111] border border-[#D4AF37]/20 rounded-lg px-4 py-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-transparent text-white text-sm focus:outline-none cursor-pointer"
              >
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Users */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div className={`flex items-center gap-1 text-sm ${parseFloat(totalGrowth) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {parseFloat(totalGrowth) >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {Math.abs(parseFloat(totalGrowth))}%
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-1">{totalUsers.toLocaleString()}</h3>
          <p className="text-gray-400 text-sm">Total Users</p>
        </div>

        {/* Free Users */}
        <div className="bg-[#111111] border border-blue-400/20 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-400/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <div className={`flex items-center gap-1 text-sm ${parseFloat(freeGrowth) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {parseFloat(freeGrowth) >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {Math.abs(parseFloat(freeGrowth))}%
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-1">{totalFree.toLocaleString()}</h3>
          <p className="text-gray-400 text-sm">Free Users</p>
        </div>

        {/* Paid Users */}
        <div className="bg-[#111111] border border-green-400/20 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-green-400/10 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-400" />
            </div>
            <div className={`flex items-center gap-1 text-sm ${parseFloat(paidGrowth) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {parseFloat(paidGrowth) >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {Math.abs(parseFloat(paidGrowth))}%
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-1">{totalPaid.toLocaleString()}</h3>
          <p className="text-gray-400 text-sm">Paid Users</p>
        </div>

        {/* Stock Listings */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-[#D4AF37]" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-1">89</h3>
          <p className="text-gray-400 text-sm">Stock Listings</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Monthly User Growth Chart */}
        <div className="lg:col-span-2 bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-serif text-white mb-1">User Growth Trend</h2>
              <p className="text-gray-400 text-sm">Monthly subscriber growth</p>
            </div>
            
            {/* Year Filter & Metric Toggle */}
            <div className="flex items-center gap-3">
              {/* Year Dropdown */}
              <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-lg px-3 py-1.5">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-transparent text-white text-sm focus:outline-none cursor-pointer font-medium"
                >
                  <option value="2025" className="bg-[#1A1A1A]">2025</option>
                  <option value="2024" className="bg-[#1A1A1A]">2024</option>
                  <option value="2023" className="bg-[#1A1A1A]">2023</option>
                  <option value="2022" className="bg-[#1A1A1A]">2022</option>
                </select>
              </div>

              {/* Metric Toggle */}
              <div className="flex items-center gap-2 bg-[#1A1A1A] rounded-lg p-1">
                <button
                  onClick={() => setSelectedMetric('all')}
                  className={`px-3 py-1 rounded text-xs transition-all ${
                    selectedMetric === 'all' 
                      ? 'bg-[#D4AF37] text-black font-medium' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedMetric('paid')}
                  className={`px-3 py-1 rounded text-xs transition-all ${
                    selectedMetric === 'paid' 
                      ? 'bg-green-400 text-black font-medium' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Paid
                </button>
                <button
                  onClick={() => setSelectedMetric('free')}
                  className={`px-3 py-1 rounded text-xs transition-all ${
                    selectedMetric === 'free' 
                      ? 'bg-blue-400 text-black font-medium' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Free
                </button>
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis 
                dataKey="month" 
                stroke="#888" 
                tick={{ fill: '#888', fontSize: 12 }}
              />
              <YAxis 
                stroke="#888" 
                tick={{ fill: '#888', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1A1A', 
                  border: '1px solid #D4AF37',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              {selectedMetric === 'all' ? (
                <>
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="paid" 
                    stroke="#10B981"
                    strokeWidth={3}
                    dot={{ fill: '#10B981', r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Paid Subscribers"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="free" 
                    stroke="#3B82F6"
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Free Users"
                  />
                </>
              ) : (
                <Line 
                  type="monotone" 
                  dataKey={selectedMetric === 'paid' ? 'paid' : 'free'}
                  stroke={selectedMetric === 'paid' ? '#10B981' : '#3B82F6'}
                  strokeWidth={3}
                  dot={{ fill: selectedMetric === 'paid' ? '#10B981' : '#3B82F6', r: 4 }}
                  activeDot={{ r: 6 }}
                  name={selectedMetric === 'paid' ? 'Paid Subscribers' : 'Free Users'}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Role Distribution */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
          <h2 className="text-xl font-serif text-white mb-1">User Roles</h2>
          <p className="text-gray-400 text-sm mb-6">Distribution by role type</p>

          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={roleData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {roleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1A1A', 
                  border: '1px solid #D4AF37',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="space-y-2 mt-4">
            {roleData.map((role, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: role.color }}></div>
                  <span className="text-gray-300 text-sm">{role.name}</span>
                </div>
                <span className="text-white font-medium text-sm">{role.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Paid vs Free Comparison */}
      <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-serif text-white mb-1">Subscription Breakdown</h2>
        <p className="text-gray-400 text-sm mb-6">Monthly comparison of paid vs free users</p>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={currentYearData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis 
              dataKey="month" 
              stroke="#888" 
              tick={{ fill: '#888', fontSize: 12 }}
            />
            <YAxis 
              stroke="#888" 
              tick={{ fill: '#888', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1A1A1A', 
                border: '1px solid #D4AF37',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Legend 
              wrapperStyle={{ color: '#888' }}
              iconType="circle"
            />
            <Bar dataKey="paid" name="Paid Subscribers" fill="#10B981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="free" name="Free Users" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Subscription Tier & Role Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Subscription Tier Distribution */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
          <h2 className="text-xl font-serif text-white mb-1">Paid Tier Breakdown</h2>
          <p className="text-gray-400 text-sm mb-6">Distribution across subscription levels</p>

          <div className="space-y-4">
            {subscriptionTiers.map((tier, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tier.color }}></div>
                    <span className="text-gray-300 text-sm font-medium">{tier.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-bold text-sm">{tier.count}</span>
                    <span className="text-gray-400 text-xs">({tier.percentage}%)</span>
                  </div>
                </div>
                <div className="w-full bg-[#1A1A1A] rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${tier.percentage}%`,
                      backgroundColor: tier.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-[#1A1A1A] rounded-lg border border-[#D4AF37]/10">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Total Paid Revenue (Est.)</span>
              <span className="text-[#D4AF37] font-bold text-lg">R 2.4M/month</span>
            </div>
          </div>
        </div>

        {/* Top Role Insights */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
          <h2 className="text-xl font-serif text-white mb-1">Role Insights</h2>
          <p className="text-gray-400 text-sm mb-6">Detailed breakdown by user type</p>

          <div className="space-y-4">
            {roleData.map((role, index) => (
              <div key={index} className="p-4 bg-[#1A1A1A] rounded-lg border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${role.color}20` }}
                    >
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: role.color }}></div>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{role.name}</p>
                      <p className="text-gray-400 text-xs">{role.percentage}% of total</p>
                    </div>
                  </div>
                  <span className="text-white font-bold text-xl">{role.value}</span>
                </div>
                <div className="w-full bg-black/40 rounded-full h-1.5">
                  <div 
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${role.percentage}%`,
                      backgroundColor: role.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              <span className="text-green-400 font-medium">Investors</span> represent the dominant user segment
            </p>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Signups */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-serif text-white">Recent Signups</h2>
            <Link 
              to="/admin/users"
              className="text-[#D4AF37] text-sm hover:underline flex items-center gap-1"
            >
              View All
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {recentSignups.map((signup) => (
              <div key={signup.id} className="flex items-center justify-between p-3 bg-[#1A1A1A] rounded-lg hover:bg-[#2A2A2A] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                    <span className="text-[#D4AF37] font-medium text-xs">
                      {signup.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{signup.name}</p>
                    <p className="text-gray-400 text-xs">{signup.role} • {signup.date}</p>
                  </div>
                </div>
                {signup.status === 'pending' ? (
                  <span className="px-2 py-1 bg-orange-400/10 text-orange-400 rounded text-xs">
                    Pending
                  </span>
                ) : (
                  <span className="px-2 py-1 bg-green-400/10 text-green-400 rounded text-xs">
                    Approved
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Interests */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-serif text-white">Recent Interests</h2>
            <Link 
              to="/admin/stock"
              className="text-[#D4AF37] text-sm hover:underline flex items-center gap-1"
            >
              View Stock
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {recentInterests.map((interest) => (
              <Link
                key={interest.id}
                to={`/admin/stock/${interest.stockId}`}
                className="flex items-start gap-3 p-3 bg-[#1A1A1A] rounded-lg hover:bg-[#2A2A2A] transition-colors cursor-pointer"
              >
                <Heart className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm mb-1">{interest.stock}</p>
                  <p className="text-gray-400 text-xs">
                    {interest.user} ({interest.role}) • {interest.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}