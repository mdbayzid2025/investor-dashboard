import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, Filter, Search, ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react';
import { Button } from '@/app/components/Button';

// Mock Transaction Data
const transactions = [
  {
    id: 'TXN-001',
    date: '2024-03-15',
    description: 'Deposit Funds',
    amount: 500000,
    type: 'deposit',
    status: 'completed',
    reference: 'Bank Transfer #8821'
  },
  {
    id: 'TXN-002',
    date: '2024-03-12',
    description: 'Premium Membership Fee',
    amount: -15000,
    type: 'fee',
    status: 'completed',
    reference: 'Annual Subscription'
  },
  {
    id: 'TXN-003',
    date: '2024-03-10',
    description: 'Property Reservation Deposit',
    amount: -250000,
    type: 'purchase',
    status: 'pending',
    reference: 'Stellenbosch Vineyard'
  },
  {
    id: 'TXN-004',
    date: '2024-02-28',
    description: 'Deposit Funds',
    amount: 1000000,
    type: 'deposit',
    status: 'completed',
    reference: 'Bank Transfer #7734'
  },
  {
    id: 'TXN-005',
    date: '2024-02-15',
    description: 'Consultation Fee',
    amount: -2500,
    type: 'fee',
    status: 'completed',
    reference: 'Legal Advisory'
  }
];

export function Transactions() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-serif text-[#D4AF37] mb-2">Transactions</h1>
          <p className="text-gray-400">View your financial history and payments.</p>
        </motion.div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Statement
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SummaryCard 
          label="Total Balance" 
          value="R 1,232,500" 
          change="+12.5%" 
          positive={true} 
        />
        <SummaryCard 
          label="Total Spent" 
          value="R 267,500" 
          change="+5.2%" 
          positive={false} 
        />
        <SummaryCard 
          label="Pending Transactions" 
          value="R 250,000" 
          change="1 Active" 
          positive={null} 
        />
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 bg-[#111111] border border-[#D4AF37]/20 p-4 rounded-lg">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search transactions..." 
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
            <option value="all">All Transactions</option>
            <option value="deposit">Deposits</option>
            <option value="purchase">Purchases</option>
            <option value="fee">Fees</option>
          </select>
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-[#333] text-sm text-gray-500 font-medium uppercase tracking-wider">
          <div className="col-span-2">Date</div>
          <div className="col-span-5 md:col-span-4">Description</div>
          <div className="col-span-3 md:col-span-2 text-right">Amount</div>
          <div className="hidden md:block col-span-2">Status</div>
          <div className="hidden md:block col-span-2 text-right">Reference</div>
        </div>

        <div className="divide-y divide-[#222]">
          {transactions.map((txn, index) => (
            <motion.div 
              key={txn.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-12 gap-4 p-4 hover:bg-[#1A1A1A] transition-colors items-center"
            >
              <div className="col-span-2 text-gray-400 text-sm">{txn.date}</div>
              
              <div className="col-span-5 md:col-span-4">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    txn.type === 'deposit' ? 'bg-green-400/10 text-green-400' :
                    txn.type === 'purchase' ? 'bg-blue-400/10 text-blue-400' :
                    'bg-orange-400/10 text-orange-400'
                  }`}>
                    {txn.type === 'deposit' ? <ArrowDownLeft className="w-4 h-4" /> :
                     txn.type === 'purchase' ? <ArrowUpRight className="w-4 h-4" /> :
                     <Clock className="w-4 h-4" />}
                  </div>
                  <div>
                    <p className="text-white font-medium">{txn.description}</p>
                    <p className="md:hidden text-xs text-gray-500">{txn.id}</p>
                  </div>
                </div>
              </div>

              <div className={`col-span-3 md:col-span-2 text-right font-medium ${
                txn.amount > 0 ? 'text-green-400' : 'text-white'
              }`}>
                {txn.amount > 0 ? '+' : ''} R {Math.abs(txn.amount).toLocaleString()}
              </div>

              <div className="hidden md:block col-span-2">
                <StatusBadge status={txn.status} />
              </div>

              <div className="hidden md:block col-span-2 text-right text-sm text-gray-500 font-mono">
                {txn.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ label, value, change, positive }: { label: string, value: string, change: string, positive: boolean | null }) {
  return (
    <div className="bg-[#111111] border border-[#D4AF37]/20 p-6 rounded-lg">
      <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">{label}</p>
      <div className="flex items-end justify-between">
        <span className="text-2xl text-white font-serif">{value}</span>
        {positive !== null && (
          <span className={`text-sm font-medium ${positive ? 'text-green-400' : 'text-red-400'}`}>
            {change}
          </span>
        )}
        {positive === null && (
          <span className="text-sm font-medium text-[#D4AF37]">
            {change}
          </span>
        )}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    completed: 'bg-green-400/10 text-green-400',
    pending: 'bg-orange-400/10 text-orange-400',
    failed: 'bg-red-400/10 text-red-400'
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium capitalize ${styles[status as keyof typeof styles]}`}>
      {status}
    </span>
  );
}
