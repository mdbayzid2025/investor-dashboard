import React, { useState } from 'react';
import { Button } from '@/app/components/Button';
import { Package, CreditCard, Check, ArrowUpCircle, Calendar, Download, Receipt } from 'lucide-react';
import { motion } from 'motion/react';

export function Subscription() {
  const [currentPlan, setCurrentPlan] = useState<'free' | 'pro'>('pro');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  // Transaction history
  const transactions = [
    { id: 'TXN001', date: '2024-03-01', description: 'Pro Subscription - Monthly', amount: 'R 15,000', status: 'Completed' },
    { id: 'TXN002', date: '2024-02-01', description: 'Pro Subscription - Monthly', amount: 'R 15,000', status: 'Completed' },
    { id: 'TXN003', date: '2024-01-15', description: 'Upgrade to Pro', amount: 'R 15,000', status: 'Completed' },
  ];

  const plans = {
    free: {
      name: 'Free',
      price: 'R 0',
      period: 'forever',
      features: [
        'Browse properties',
        'Limited messages (5/month)',
        'Basic search filters',
        'Public listings only'
      ]
    },
    pro: {
      name: 'Pro',
      price: billingCycle === 'monthly' ? 'R 15,000' : 'R 150,000',
      period: billingCycle === 'monthly' ? 'per month' : 'per year',
      savings: billingCycle === 'annual' ? 'Save R 30,000/year' : null,
      features: [
        'Unlimited messaging',
        'Advanced search & filters',
        'Exclusive deal flow access',
        'Priority support',
        'Market insights & analytics',
        'Early access to new listings'
      ]
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-serif text-[#D4AF37] mb-2">Billing & Subscription</h1>
        <p className="text-gray-400">Manage your plan and payment history</p>
      </div>

      {/* Current Plan Status */}
      <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#111111] border border-[#D4AF37]/30 rounded-xl p-8 mb-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Package className="w-6 h-6 text-[#D4AF37]" />
              <h2 className="text-2xl font-serif text-white">Current Plan: {plans[currentPlan].name}</h2>
            </div>
            <p className="text-gray-400">
              {currentPlan === 'pro' 
                ? `Billed ${billingCycle === 'monthly' ? 'monthly' : 'annually'} • Next billing: April 1, 2024`
                : 'No billing • Upgrade anytime'}
            </p>
          </div>
          {currentPlan === 'pro' && (
            <div className="text-right">
              <p className="text-3xl font-bold text-[#D4AF37]">{plans.pro.price}</p>
              <p className="text-sm text-gray-400">{plans.pro.period}</p>
            </div>
          )}
        </div>

        {currentPlan === 'pro' && (
          <div className="flex items-center gap-4 pt-4 border-t border-[#D4AF37]/20">
            <button className="text-sm text-gray-400 hover:text-[#D4AF37] transition-colors">
              Update Payment Method
            </button>
            <span className="text-gray-600">•</span>
            <button className="text-sm text-gray-400 hover:text-red-400 transition-colors">
              Cancel Subscription
            </button>
          </div>
        )}
      </div>

      {/* Plans - Only show if on Free plan */}
      {currentPlan === 'free' && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-serif text-white">Upgrade Your Plan</h3>
            
            {/* Billing Toggle */}
            <div className="flex items-center gap-3 bg-[#1A1A1A] rounded-lg p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-[#D4AF37] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  billingCycle === 'annual'
                    ? 'bg-[#D4AF37] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Annual
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Free Plan */}
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-serif text-white mb-2">{plans.free.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">{plans.free.price}</span>
                  <span className="text-gray-400">{plans.free.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plans.free.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-400">
                    <Check className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-[#1A1A1A] text-gray-400 border border-[#D4AF37]/20 rounded-lg cursor-not-allowed" disabled>
                Current Plan
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-[#D4AF37]/5 to-[#111111] border-2 border-[#D4AF37] rounded-xl p-8 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-[#D4AF37] text-black text-xs font-bold rounded-full">
                POPULAR
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-serif text-white mb-2">{plans.pro.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#D4AF37]">{plans.pro.price}</span>
                  <span className="text-gray-400">{plans.pro.period}</span>
                </div>
                {plans.pro.savings && (
                  <p className="text-sm text-green-400 mt-1">{plans.pro.savings}</p>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plans.pro.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full flex items-center justify-center gap-2">
                <ArrowUpCircle className="w-5 h-5" />
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Payment History */}
      <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-[#D4AF37]/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-serif text-white mb-1">Payment History</h3>
              <p className="text-sm text-gray-400">Your recent transactions and invoices</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-colors text-sm">
              <Download className="w-4 h-4" />
              Download All
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#0A0A0A]">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Description</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Transaction ID</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="text-right px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D4AF37]/10">
              {transactions.map((txn) => (
                <motion.tr
                  key={txn.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-[#1A1A1A] transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-600" />
                      {txn.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-white">{txn.description}</td>
                  <td className="px-6 py-4 text-sm text-gray-400 font-mono">{txn.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-[#D4AF37]">{txn.amount}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[#D4AF37] hover:text-[#F4CF57] transition-colors">
                      <Receipt className="w-4 h-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {transactions.length === 0 && (
          <div className="p-12 text-center">
            <CreditCard className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl text-white mb-2">No transactions yet</h3>
            <p className="text-gray-500">Your payment history will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
}
