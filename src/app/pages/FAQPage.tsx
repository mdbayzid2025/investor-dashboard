import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';
import { Button } from '@/app/components/Button';
import { Link } from 'react-router';

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'account', name: 'Account & Security' },
    { id: 'platform', name: 'Platform Features' },
    { id: 'investments', name: 'Investments' },
    { id: 'privacy', name: 'Privacy & Safety' },
    { id: 'billing', name: 'Billing & Pricing' }
  ];

  const faqs: FAQ[] = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I create an account on Investors Hub?',
      answer: 'Click the "Sign Up" button in the top right corner of the homepage. Fill in your details, select your role (Investor, Agent, Developer, or Seller), and complete any role-specific information. Your account will be reviewed and approved within 24-48 hours.'
    },
    {
      id: 2,
      category: 'getting-started',
      question: 'What is the KYC verification process?',
      answer: 'KYC (Know Your Customer) verification is a security measure to protect all platform members. After registration, you\'ll need to upload a government-issued ID, proof of address, and complete a verification form. The process typically takes 24-48 hours to complete.'
    },
    {
      id: 3,
      category: 'account',
      question: 'Why is my account pending approval?',
      answer: 'To maintain an exclusive and secure environment, all new accounts undergo a verification process. Our team reviews applications to ensure they meet our membership criteria. You\'ll receive an email notification once your account is approved, typically within 24-48 hours.'
    },
    {
      id: 4,
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Click "Forgot password?" on the login page. Enter your registered email address, and you\'ll receive a password reset link. Follow the instructions in the email to create a new password. The reset link expires after 1 hour for security purposes.'
    },
    {
      id: 5,
      category: 'account',
      question: 'Can I change my account role after registration?',
      answer: 'Account roles are set during registration to ensure proper platform access and features. If you need to change your role, please contact our support team through the Contact Us page, and they\'ll assist you with the process.'
    },
    {
      id: 6,
      category: 'platform',
      question: 'What are "teaser-style" listings?',
      answer: 'Teaser listings provide key property details like location (blurred for privacy), price range, ROI potential, and property type without revealing exact addresses or owner contact information. This protects seller privacy and ensures deals are facilitated through our secure platform.'
    },
    {
      id: 7,
      category: 'platform',
      question: 'How do I express interest in a property?',
      answer: 'Browse available properties in the Stock section. When you find a property of interest, click "Express Interest" or "Request Details." Your inquiry will be submitted to our team, who will facilitate the connection while maintaining privacy protocols.'
    },
    {
      id: 8,
      category: 'platform',
      question: 'Can I communicate directly with sellers or other users?',
      answer: 'Direct communication is not available through the platform to protect user privacy and maintain professional standards. All inquiries and negotiations are facilitated by Investors Hub admins offline to ensure secure and serious transactions.'
    },
    {
      id: 9,
      category: 'platform',
      question: 'What is the Investor Brief feature?',
      answer: 'The Investor Brief is our premium market intelligence service. It provides quarterly insights, market trends, investment strategies, and exclusive opportunities. This feature helps you make informed decisions based on current market conditions.'
    },
    {
      id: 10,
      category: 'investments',
      question: 'What types of properties are listed on Investors Hub?',
      answer: 'We feature high-value commercial and residential properties, development opportunities, off-market listings, and distressed assets. All listings are vetted to ensure quality and legitimate investment potential.'
    },
    {
      id: 11,
      category: 'investments',
      question: 'What is the minimum investment amount?',
      answer: 'There is no platform-imposed minimum investment. However, most properties listed on Investors Hub are premium opportunities starting from R500,000. Your investment capacity is collected during registration to help match you with suitable opportunities.'
    },
    {
      id: 12,
      category: 'investments',
      question: 'How are property locations protected?',
      answer: 'We use blurred imagery and general location descriptions (e.g., "Sandton Area") instead of exact addresses. Full property details, including precise location, are only shared after verification and through our admin-facilitated process.'
    },
    {
      id: 13,
      category: 'investments',
      question: 'Can I list my property for sale on Investors Hub?',
      answer: 'Yes! If you registered as a Seller, Developer, or Agent, you can create listings through the Dashboard. All listings are reviewed before publishing to ensure they meet our quality standards and platform guidelines.'
    },
    {
      id: 14,
      category: 'privacy',
      question: 'How is my personal information protected?',
      answer: 'We implement industry-standard security measures including encrypted data transmission, secure storage, and strict access controls. We never share your contact details without your explicit permission. Review our Privacy Policy for complete details.'
    },
    {
      id: 15,
      category: 'privacy',
      question: 'Who can see my profile information?',
      answer: 'Your profile information is only visible to Investors Hub administrators. Other platform users cannot view your personal details, contact information, or investment history. We maintain strict privacy to protect all members.'
    },
    {
      id: 16,
      category: 'privacy',
      question: 'What data is collected during KYC verification?',
      answer: 'We collect government-issued ID, proof of address, contact details, and basic investment information. This data is used solely for verification purposes and stored securely. We comply with all data protection regulations.'
    },
    {
      id: 17,
      category: 'billing',
      question: 'Is there a membership fee?',
      answer: 'Investors Hub operates on a freemium model. Basic access is free, but we offer premium tiers with advanced features like the Investor Brief, priority access to listings, and enhanced analytics. Check our Pricing page for current tier details.'
    },
    {
      id: 18,
      category: 'billing',
      question: 'How do I upgrade my subscription?',
      answer: 'Navigate to Dashboard > Subscription to view available plans. Select your preferred tier and complete payment through our secure payment gateway. Upgrades take effect immediately upon successful payment.'
    },
    {
      id: 19,
      category: 'billing',
      question: 'What payment methods are accepted?',
      answer: 'We accept major credit cards, debit cards, and EFT transfers for South African users. International users can pay via Visa, Mastercard, or bank transfers. All payments are processed through secure, encrypted channels.'
    },
    {
      id: 20,
      category: 'billing',
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time from the Subscription page in your Dashboard. Your access will remain active until the end of your current billing period. No refunds are provided for partial months.'
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
    <div className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4AF37]/20 mb-6">
            <HelpCircle className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h1 className="text-5xl font-serif text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400 text-lg">
            Find answers to common questions about Investors Hub
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for answers..."
              className="w-full bg-[#111111] border border-[#D4AF37]/20 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[#D4AF37] text-black'
                    : 'bg-[#111111] text-gray-400 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-serif text-white mb-6">
            {selectedCategory !== 'all' 
              ? `${categories.find(c => c.id === selectedCategory)?.name || ''} Questions` 
              : 'All Questions'}
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
              <p className="text-gray-400 mb-4">No FAQs found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-[#D4AF37] hover:text-[#E4C77D] text-sm"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Still Need Help Section */}
        <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif text-white mb-3">Still need help?</h3>
          <p className="text-gray-400 mb-6">
            Can't find the answer you're looking for? Our support team is here to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button>
                Contact Support
              </Button>
            </Link>
            <Link to="/dashboard/help">
              <Button variant="outline">
                Visit Help Center
              </Button>
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link to="/" className="text-sm text-gray-400 hover:text-[#D4AF37] transition-colors">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
