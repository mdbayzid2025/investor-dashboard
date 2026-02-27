import React, { useState } from 'react';
import { 
  Search, 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone,
  FileText,
  Shield,
  DollarSign,
  Users,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/app/components/Button';

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { name: 'All Topics', value: 'all', icon: HelpCircle },
    { name: 'Getting Started', value: 'getting-started', icon: Users },
    { name: 'Investments', value: 'investments', icon: DollarSign },
    { name: 'Security & Privacy', value: 'security', icon: Shield },
    { name: 'Payments', value: 'payments', icon: FileText },
  ];

  const faqs: FAQ[] = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I get started on Investors Hub?',
      answer: 'Getting started is simple: 1) Create an account with your email, 2) Complete the KYC verification process by uploading your ID and proof of address, 3) Subscribe to our premium membership for R99/month, 4) Start browsing investment opportunities or create your own post.'
    },
    {
      id: 2,
      category: 'getting-started',
      question: 'What is KYC and why is it required?',
      answer: 'KYC (Know Your Customer) is a verification process required by law to prevent fraud and ensure platform security. You\'ll need to provide a valid ID document and proof of address. This information is kept strictly confidential and only used for verification purposes.'
    },
    {
      id: 3,
      category: 'security',
      question: 'How does anonymity work on the platform?',
      answer: 'Your personal information and identity are never displayed publicly. You communicate through anonymous identifiers (like Investor #A8B2). You choose when to reveal your identity to specific investors through our secure messaging system. Your investment history and profile are only visible if you explicitly enable these settings.'
    },
    {
      id: 4,
      category: 'security',
      question: 'Is my financial information secure?',
      answer: 'Yes, we use bank-grade encryption (AES-256) to protect all your data. We never store credit card information directly - all payments are processed through secure payment gateways. We are compliant with POPIA (Protection of Personal Information Act) and follow international security standards.'
    },
    {
      id: 5,
      category: 'investments',
      question: 'How do I evaluate investment opportunities?',
      answer: 'Each investment listing includes detailed information: expected returns, investment amount, duration, risk factors, and project timeline. Verified opportunities show a green badge. We recommend reviewing all documents, asking questions through messaging, and doing your own due diligence before investing.'
    },
    {
      id: 6,
      category: 'investments',
      question: 'What types of investments can I find?',
      answer: 'Our platform features various investment categories including Real Estate developments, Technology startups, Agricultural ventures, Energy projects, and more. All opportunities are for accredited investors and typically require minimum investments starting from R500,000.'
    },
    {
      id: 7,
      category: 'investments',
      question: 'How do returns work?',
      answer: 'Returns vary by investment type and are specified in each listing. Some investments provide regular dividend payments, others offer lump-sum returns at project completion. Expected return rates and payment schedules are detailed in the investment documentation.'
    },
    {
      id: 8,
      category: 'payments',
      question: 'What payment methods are accepted?',
      answer: 'We accept major credit cards (Visa, Mastercard), direct bank transfers (EFT), and wire transfers for large investments. Your subscription is charged monthly to your chosen payment method.'
    },
    {
      id: 9,
      category: 'payments',
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time from the Subscription page. Your access will continue until the end of your current billing period. Active investments are not affected by subscription cancellation.'
    },
    {
      id: 10,
      category: 'security',
      question: 'What is two-factor authentication?',
      answer: 'Two-factor authentication (2FA) adds an extra security layer to your account. After enabling 2FA, you\'ll need both your password and a code sent to your phone to log in. We highly recommend enabling this feature for enhanced security.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-serif text-white mb-1">Help & Support</h1>
        <p className="text-sm text-gray-400">Find answers to your questions or get in touch</p>
      </div>

      {/* Search */}
      <div className="mb-8 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for help..."
            className="w-full bg-[#111111] border border-[#D4AF37]/20 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <div className="col-span-1">
          <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-4 sticky top-8">
            <h3 className="text-lg font-serif text-white mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
                      selectedCategory === category.value
                        ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30'
                        : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-3 space-y-6">
          {/* Contact Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/50 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg font-serif text-white mb-2">Live Chat</h3>
              <p className="text-sm text-gray-400 mb-4">Chat with our support team</p>
              <button className="text-sm text-[#D4AF37] hover:text-[#E4C77D] transition-colors">
                Start chat →
              </button>
            </div>

            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/50 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg font-serif text-white mb-2">Email Support</h3>
              <p className="text-sm text-gray-400 mb-4">support@investorshub.co.za</p>
              <button className="text-sm text-[#D4AF37] hover:text-[#E4C77D] transition-colors">
                Send email →
              </button>
            </div>

            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/50 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg font-serif text-white mb-2">Phone Support</h3>
              <p className="text-sm text-gray-400 mb-4">+27 11 XXX XXXX</p>
              <button className="text-sm text-[#D4AF37] hover:text-[#E4C77D] transition-colors">
                Call now →
              </button>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
            <h2 className="text-2xl font-serif text-white mb-6">
              Frequently Asked Questions
              {searchQuery && ` (${filteredFaqs.length} results)`}
            </h2>
            
            {filteredFaqs.length > 0 ? (
              <div className="space-y-3">
                {filteredFaqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#D4AF37]/10"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#2A2A2A] transition-colors"
                    >
                      <span className="text-white font-medium pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                          expandedFaq === faq.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-4 pb-4 text-gray-300 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">No results found for "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-[#D4AF37] hover:text-[#E4C77D] transition-colors"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>

          {/* Resources */}
          <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
            <h2 className="text-2xl font-serif text-white mb-6">Helpful Resources</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center gap-3 p-4 bg-[#1A1A1A] rounded-lg hover:bg-[#2A2A2A] transition-colors text-left">
                <FileText className="w-5 h-5 text-[#D4AF37]" />
                <div className="flex-1">
                  <div className="text-white font-medium text-sm">User Guide</div>
                  <div className="text-xs text-gray-400">Complete platform documentation</div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500" />
              </button>

              <button className="flex items-center gap-3 p-4 bg-[#1A1A1A] rounded-lg hover:bg-[#2A2A2A] transition-colors text-left">
                <Shield className="w-5 h-5 text-[#D4AF37]" />
                <div className="flex-1">
                  <div className="text-white font-medium text-sm">Security Best Practices</div>
                  <div className="text-xs text-gray-400">Keep your account secure</div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500" />
              </button>

              <button className="flex items-center gap-3 p-4 bg-[#1A1A1A] rounded-lg hover:bg-[#2A2A2A] transition-colors text-left">
                <DollarSign className="w-5 h-5 text-[#D4AF37]" />
                <div className="flex-1">
                  <div className="text-white font-medium text-sm">Investment Guide</div>
                  <div className="text-xs text-gray-400">How to evaluate opportunities</div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500" />
              </button>

              <button className="flex items-center gap-3 p-4 bg-[#1A1A1A] rounded-lg hover:bg-[#2A2A2A] transition-colors text-left">
                <FileText className="w-5 h-5 text-[#D4AF37]" />
                <div className="flex-1">
                  <div className="text-white font-medium text-sm">Terms & Conditions</div>
                  <div className="text-xs text-gray-400">Legal information</div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
            <h2 className="text-2xl font-serif text-white mb-2">Still need help?</h2>
            <p className="text-gray-400 mb-6">Send us a message and we'll get back to you within 24 hours</p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <select className="w-full bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors">
                    <option>General Inquiry</option>
                    <option>Technical Issue</option>
                    <option>Investment Question</option>
                    <option>Account & Billing</option>
                    <option>Security Concern</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Priority</label>
                  <select className="w-full bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors">
                    <option>Normal</option>
                    <option>High</option>
                    <option>Urgent</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  placeholder="Describe your issue or question..."
                />
              </div>

              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}