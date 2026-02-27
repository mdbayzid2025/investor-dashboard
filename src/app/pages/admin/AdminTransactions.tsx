import React, { useState } from 'react';
import { Download, Filter, Search, ArrowUpRight, ArrowDownLeft, Clock, MoreVertical, Eye } from 'lucide-react';
import { Button } from '@/app/components/Button';

// Mock Transaction Data
const transactions = [
  {
    id: 'TXN-001',
    user: 'Michael Chen',
    role: 'Investor',
    date: '2024-03-15',
    description: 'Deposit Funds',
    amount: 500000,
    type: 'deposit',
    status: 'completed',
    method: 'Wire Transfer'
  },
  {
    id: 'TXN-002',
    user: 'Sarah Williams',
    role: 'Agent',
    date: '2024-03-14',
    description: 'Listing Fee',
    amount: 15000,
    type: 'fee',
    status: 'completed',
    method: 'Credit Card'
  },
  {
    id: 'TXN-003',
    user: 'David Martinez',
    role: 'Investor',
    date: '2024-03-13',
    description: 'Property Reservation',
    amount: 250000,
    type: 'purchase',
    status: 'pending',
    method: 'Escrow'
  },
  {
    id: 'TXN-004',
    user: 'ABC Developers',
    role: 'Seller',
    date: '2024-03-12',
    description: 'Withdrawal',
    amount: -100000,
    type: 'withdrawal',
    status: 'processing',
    method: 'Bank Transfer'
  },
  {
    id: 'TXN-005',
    user: 'Michael Chen',
    role: 'Investor',
    date: '2024-03-10',
    description: 'Premium Membership',
    amount: 5000,
    type: 'subscription',
    status: 'completed',
    method: 'Credit Card'
  }
];

export function AdminTransactions() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-serif text-white mb-2">Transaction Management</h1>
          <p className="text-gray-400">Monitor and manage platform financial activities.</p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatsCard 
          label="Total Volume" 
          value="R 12.5M" 
          trend="+15%" 
          trendUp={true} 
        />
        <StatsCard 
          label="Net Revenue" 
          value="R 450K" 
          trend="+8%" 
          trendUp={true} 
        />
        <StatsCard 
          label="Pending Approvals" 
          value="12" 
          trend="Needs Action" 
          trendUp={null} 
        />
        <StatsCard 
          label="Avg. Transaction" 
          value="R 85K" 
          trend="-2%" 
          trendUp={false} 
        />
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 bg-[#111111] border border-[#D4AF37]/20 p-4 rounded-lg">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search by user, ID, or description..." 
            className="w-full bg-[#1A1A1A] border border-[#333] rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#D4AF37]" />
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-[#1A1A1A] border border-[#333] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#D4AF37] cursor-pointer"
          >
            <option value="all">All Types</option>
            <option value="deposit">Deposits</option>
            <option value="withdrawal">Withdrawals</option>
            <option value="fee">Fees</option>
            <option value="subscription">Subscriptions</option>
          </select>
          <select 
            className="bg-[#1A1A1A] border border-[#333] rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#D4AF37] cursor-pointer"
          >
            <option value="all">All Statuses</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#333] bg-[#1A1A1A]">
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222]">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-[#1A1A1A] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-500">
                    {txn.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-xs font-medium">
                        {txn.user.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">{txn.user}</div>
                        <div className="text-xs text-gray-500">{txn.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-300">
                      {txn.type === 'deposit' && <ArrowDownLeft className="w-4 h-4 mr-2 text-green-400" />}
                      {txn.type === 'withdrawal' && <ArrowUpRight className="w-4 h-4 mr-2 text-red-400" />}
                      <span className="capitalize">{txn.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${
                      txn.amount < 0 ? 'text-red-400' : 'text-green-400'
                    }`}>
                      {txn.amount > 0 ? '+' : ''} R {Math.abs(txn.amount).toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full capitalize ${
                      txn.status === 'completed' ? 'bg-green-100/10 text-green-400' : 
                      txn.status === 'pending' ? 'bg-yellow-100/10 text-yellow-400' : 
                      txn.status === 'processing' ? 'bg-blue-100/10 text-blue-400' : 
                      'bg-red-100/10 text-red-400'
                    }`}>
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {txn.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-[#D4AF37] transition-colors p-1">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatsCard({ label, value, trend, trendUp }: { label: string, value: string, trend: string, trendUp: boolean | null }) {
  return (
    <div className="bg-[#111111] border border-[#D4AF37]/20 p-6 rounded-lg">
      <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">{label}</p>
      <div className="flex items-end justify-between">
        <span className="text-2xl text-white font-serif">{value}</span>
        <span className={`text-sm font-medium ${
          trendUp === true ? 'text-green-400' : 
          trendUp === false ? 'text-red-400' : 
          'text-orange-400'
        }`}>
          {trend}
        </span>
      </div>
    </div>
  );
}
