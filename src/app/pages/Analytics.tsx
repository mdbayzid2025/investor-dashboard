import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function Analytics() {
  // Portfolio growth data
  const portfolioData = [
    { month: 'Jul', value: 2500000 },
    { month: 'Aug', value: 2650000 },
    { month: 'Sep', value: 3150000 },
    { month: 'Oct', value: 3400000 },
    { month: 'Nov', value: 3680000 },
    { month: 'Dec', value: 3900000 },
    { month: 'Jan', value: 4125000 },
  ];

  // Monthly returns data
  const returnsData = [
    { month: 'Jul', returns: 45000 },
    { month: 'Aug', returns: 52000 },
    { month: 'Sep', returns: 68000 },
    { month: 'Oct', returns: 71000 },
    { month: 'Nov', returns: 75000 },
    { month: 'Dec', returns: 82000 },
    { month: 'Jan', returns: 89000 },
  ];

  // Asset allocation data
  const allocationData = [
    { name: 'Real Estate', value: 45, amount: 1856250 },
    { name: 'Technology', value: 30, amount: 1237500 },
    { name: 'Agriculture', value: 15, amount: 618750 },
    { name: 'Energy', value: 10, amount: 412500 },
  ];

  const COLORS = ['#D4AF37', '#E4C77D', '#B8941F', '#8B7355'];

  // Performance metrics
  const metrics = [
    {
      label: 'Total Portfolio Value',
      value: 'R4,125,000',
      change: '+12.5%',
      changeType: 'positive',
      icon: DollarSign,
      trend: portfolioData
    },
    {
      label: 'Total Returns (YTD)',
      value: 'R482,000',
      change: '+15.2%',
      changeType: 'positive',
      icon: TrendingUp,
      trend: returnsData
    },
    {
      label: 'Active Investments',
      value: '4',
      change: '+1 this month',
      changeType: 'positive',
      icon: Activity,
      trend: null
    },
    {
      label: 'Avg. Return Rate',
      value: '18.4%',
      change: '+2.1%',
      changeType: 'positive',
      icon: PieChart,
      trend: null
    }
  ];

  // Top performing investments
  const topPerformers = [
    { name: 'Tech Startup Series A', returns: 28, amount: 'R280,000' },
    { name: 'Green Energy Project', returns: 22, amount: 'R195,000' },
    { name: 'Premium Real Estate', returns: 15, amount: 'R375,000' },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#111111] border border-[#D4AF37]/30 rounded-lg p-3">
          <p className="text-white font-serif">R{payload[0].value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-serif text-white mb-1">Portfolio Analytics</h1>
        <p className="text-sm text-gray-400">Track your investment performance and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                index === 0 ? 'bg-[#D4AF37]/20' : 'bg-[#1A1A1A]'
              }`}>
                <metric.icon className={`w-6 h-6 ${index === 0 ? 'text-[#D4AF37]' : 'text-gray-400'}`} />
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                metric.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
              }`}>
                {metric.changeType === 'positive' ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {metric.change}
              </div>
            </div>
            <div className="text-3xl font-serif text-white mb-1">{metric.value}</div>
            <div className="text-sm text-gray-400">{metric.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Portfolio Growth Chart */}
        <div className="col-span-2 bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
          <h2 className="text-2xl font-serif text-white mb-6">Portfolio Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1A" />
              <XAxis 
                dataKey="month" 
                stroke="#666" 
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#666" 
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `R${(value / 1000000).toFixed(1)}M`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#D4AF37" 
                strokeWidth={3}
                dot={{ fill: '#D4AF37', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Asset Allocation */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
          <h2 className="text-2xl font-serif text-white mb-6">Asset Allocation</h2>
          <ResponsiveContainer width="100%" height={200}>
            <RechartsPieChart>
              <Pie
                data={allocationData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {allocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </RechartsPieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {allocationData.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span className="text-gray-300">{item.name}</span>
                </div>
                <span className="text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Monthly Returns */}
        <div className="col-span-2 bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
          <h2 className="text-2xl font-serif text-white mb-6">Monthly Returns</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={returnsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1A" />
              <XAxis 
                dataKey="month" 
                stroke="#666" 
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#666" 
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `R${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="returns" 
                fill="#D4AF37" 
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Performers */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
          <h2 className="text-2xl font-serif text-white mb-6">Top Performers</h2>
          <div className="space-y-4">
            {topPerformers.map((investment, index) => (
              <div key={index} className="p-4 bg-[#1A1A1A] rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm mb-1">{investment.name}</div>
                    <div className="text-xs text-gray-400">{investment.amount}</div>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs ${
                    index === 0 
                      ? 'bg-[#D4AF37]/20 text-[#D4AF37]'
                      : 'bg-green-500/10 text-green-400'
                  }`}>
                    #{index + 1}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-serif">+{investment.returns}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Distribution */}
      <div className="mt-6 bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
        <h2 className="text-2xl font-serif text-white mb-6">Investment Distribution</h2>
        <div className="grid grid-cols-4 gap-4">
          {allocationData.map((category, index) => (
            <div key={index} className="p-4 bg-[#1A1A1A] rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="w-4 h-4 rounded" 
                  style={{ backgroundColor: COLORS[index] }}
                />
                <span className="text-white font-medium">{category.name}</span>
              </div>
              <div className="text-2xl font-serif text-white mb-1">
                R{(category.amount / 1000000).toFixed(2)}M
              </div>
              <div className="text-sm text-gray-400">{category.value}% of portfolio</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}