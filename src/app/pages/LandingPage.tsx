import React from 'react';
import { Button } from '@/app/components/Button';
import { useNavigate } from 'react-router';
import { Shield, Lock, MessageSquare, FileText, TrendingUp, CheckCircle, Eye, Users, ArrowRight } from 'lucide-react';

export function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen relative">
      {/* Quick Access Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button 
          onClick={() => navigate('/dashboard')}
          className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-white transition-colors border-2 border-black flex items-center gap-2"
        >
          <span>📊 Dashboard</span>
        </button>
        <button 
          onClick={() => navigate('/admin')}
          className="bg-black text-[#D4AF37] px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#1A1A1A] transition-colors border-2 border-[#D4AF37] flex items-center gap-2"
        >
          <span>🔐 Admin Panel</span>
        </button>
        <button 
          onClick={() => navigate('/modern-home')}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-purple-700 hover:to-blue-700 transition-colors border-2 border-white/20 flex items-center gap-2"
        >
          <span>✨ Modern Version</span>
        </button>
      </div>
      {/* Hero Section - Above the Fold */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center pt-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-sm font-medium mb-8">
              South Africa's Premier Off-Market Network
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif mb-8 text-white leading-[1.1] tracking-tight">
            South Africa's<br />
            <span className="text-[#D4AF37]">Off-Market Property</span><br />
            & Investment Network
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Access off-market listings, anonymous investor chat,<br />
            and exclusive opportunities for <span className="text-[#D4AF37] font-medium">R99/month</span>
          </p>
          
          <p className="text-lg text-gray-400 mb-12 font-light">
            Discreet. Verified. Investor-focused.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="text-lg px-10 py-4"
              onClick={() => navigate('/signup')}
            >
              Get Full Access for R99/month
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-10 py-4"
              onClick={() => navigate('/dashboard')}
            >
              Go to Dashboard
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#D4AF37]" />
              <span>Verified Network</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#D4AF37]" />
              <span>100% Anonymous</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#D4AF37]" />
              <span>Off-Market Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Investors Hub */}
      <section className="py-24 bg-[#0A0A0A] border-t border-[#D4AF37]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            What Is Investors Hub?
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Investors Hub is a <strong className="text-white">paid, private investor platform</strong> that connects 
              serious property investors and developers with <strong className="text-white">off-market opportunities</strong> that 
              never reach public listing portals.
            </p>
            <p>
              This is <strong className="text-[#D4AF37]">not a traditional property portal</strong>. We focus exclusively on 
              discretion, verified members, and high-value deals that require confidentiality.
            </p>
            <p className="text-gray-400 text-base italic">
              For serious investors who value privacy, early access, and direct connections.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get for R99/Month */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              What You Get for R99/Month
            </h2>
            <p className="text-xl text-gray-400">
              Full access to South Africa's most discreet investor network
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Off-Market Property Opportunities',
                description: 'Access exclusive listings before they hit the public market. Development land, portfolios, and confidential sales.'
              },
              {
                icon: MessageSquare,
                title: 'Anonymous Investor Chat',
                description: 'Connect with verified investors using anonymous IDs. No phone numbers or emails shared until you choose.'
              },
              {
                icon: FileText,
                title: 'Monthly Investor Brief',
                description: 'Curated newsletter with new listings, developments, and market insights. High-value, low-noise.'
              },
              {
                icon: Eye,
                title: 'Priority Access',
                description: 'See opportunities before they reach public listings. Get early-mover advantage on premium deals.'
              },
              {
                icon: Users,
                title: 'Verified Network Only',
                description: 'Every member is verified. No time wasters, no spam. Professional investors and sellers only.'
              },
              {
                icon: Shield,
                title: 'Secure Platform Communication',
                description: 'All communication handled through our secure platform. Complete confidentiality guaranteed.'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anonymous Investor Chat - Key USP */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-sm font-medium mb-6">
                Key Feature
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Anonymous Investor Chat
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Connect with verified investors and sellers while maintaining complete anonymity 
                until you're ready to reveal your identity.
              </p>
              
              <div className="space-y-4">
                {[
                  'Auto-generated investor names (Investor001, Investor002, etc.)',
                  'No phone numbers or email addresses required',
                  'Platform-mediated introductions when both parties agree',
                  'Moderated and professional environment',
                  'Share contact details only when you choose'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">Example Chat Preview</div>
                <div className="space-y-4">
                  <div className="bg-[#1A1A1A] rounded-lg p-4">
                    <div className="text-[#D4AF37] text-sm font-medium mb-1">Investor047</div>
                    <p className="text-gray-300 text-sm">Interested in your Sandton development. Can you share more details about the IRR projections?</p>
                  </div>
                  <div className="bg-[#D4AF37]/10 rounded-lg p-4 ml-8">
                    <div className="text-[#D4AF37] text-sm font-medium mb-1">You (Investor152)</div>
                    <p className="text-gray-300 text-sm">Happy to discuss. Projected IRR is 18-22% over 3 years. I can share the full breakdown via our secure platform.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#D4AF37]/10 text-sm text-gray-500">
                <Lock className="w-4 h-4 inline mr-2" />
                All conversations are private and encrypted
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Off-Market Opportunities */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              What "Off-Market" Actually Means
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Properties and opportunities that are not publicly advertised. Early access before traditional marketing begins.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Development Land',
                description: 'Zoned land parcels available before public tender or listing. Direct from landowners and developers.',
                examples: ['Residential developments', 'Commercial sites', 'Mixed-use opportunities']
              },
              {
                title: 'Property Portfolios',
                description: 'Multi-property packages sold as a single transaction. Often from estate settlements or corporate divestments.',
                examples: ['Residential portfolios', 'Commercial buildings', 'Retail centers']
              },
              {
                title: 'Confidential Sales',
                description: 'High-value properties requiring discretion. Private sales without public marketing campaigns.',
                examples: ['Luxury estates', 'Corporate assets', 'Distressed opportunities']
              }
            ].map((category, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8"
              >
                <h3 className="text-2xl font-serif text-white mb-4">{category.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{category.description}</p>
                <div className="space-y-2">
                  {category.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-6 max-w-2xl">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-[#D4AF37]">Early access advantage:</strong> See these opportunities 
                weeks or months before they reach public listing portals, giving you time to evaluate, 
                negotiate, and secure deals before competition increases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Investor Brief */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#111111] to-[#0A0A0A] border border-[#D4AF37]/30 rounded-2xl p-12">
            <div className="text-center mb-8">
              <FileText className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
              <h2 className="text-4xl font-serif text-white mb-4">
                Monthly Investor Brief
              </h2>
              <p className="text-xl text-gray-400">
                High-value insights delivered to your inbox
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#D4AF37] font-medium">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-serif text-white mb-2">New Off-Market Listings</h4>
                  <p className="text-gray-400">Curated selection of the month's most promising opportunities, with full details and context.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#D4AF37] font-medium">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-serif text-white mb-2">Development Pipeline Updates</h4>
                  <p className="text-gray-400">Upcoming projects and developments from verified sources. Get ahead of the market.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#D4AF37] font-medium">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-serif text-white mb-2">Market Insights & Trends</h4>
                  <p className="text-gray-400">Data-driven analysis of investment patterns, pricing trends, and emerging opportunities.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-[#D4AF37]/20 text-center text-sm text-gray-500">
              No spam, no fluff. Just actionable intelligence for serious investors.
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Confidentiality */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Trust & Confidentiality
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your privacy and security are our highest priorities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8">
              <Lock className="w-12 h-12 text-[#D4AF37] mb-6" />
              <h3 className="text-2xl font-serif text-white mb-4">Secure Platform Communication</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                All messages, documents, and data are encrypted and secured. Your conversations 
                remain private and are never shared or monitored except for platform safety.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>End-to-end encrypted messaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>Secure document sharing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>No data sold to third parties</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-8">
              <Shield className="w-12 h-12 text-[#D4AF37] mb-6" />
              <h3 className="text-2xl font-serif text-white mb-4">Confidential Seller Information</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Sellers can list opportunities without revealing their identity. We facilitate 
                professional introductions only when both parties are ready to proceed.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>Anonymous listing options</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>Controlled information release</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>Professional facilitation</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-8 max-w-3xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-white">Built for discretion:</strong> Whether you're a high-net-worth 
                investor, corporate seller, or private developer, Investors Hub ensures your 
                information and negotiations remain confidential throughout the entire process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-32 bg-[#0A0A0A] border-t border-[#D4AF37]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Unlock Off-Market<br />
            <span className="text-[#D4AF37]">Opportunities</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Join South Africa's most exclusive investor network
          </p>
          <p className="text-lg text-gray-400 mb-12">
            Full access to off-market listings, anonymous chat, and monthly insights for just <span className="text-[#D4AF37] font-medium">R99/month</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="text-lg px-12 py-4">
              Get Full Access for R99/month
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-sm text-gray-500">
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
              <span>Instant access</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
              <span>No hidden fees</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}