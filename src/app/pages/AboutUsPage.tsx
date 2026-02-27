import React from 'react';
import { Shield, Target, Users, TrendingUp } from 'lucide-react';

export function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-[#0A0A0A] overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[150px] opacity-5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D4AF37] rounded-full blur-[100px] opacity-5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-6">
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Redefining Investment <br />
            <span className="text-[#D4AF37]">Privacy & Access</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            We built Investors Hub to solve a critical gap in the South African property market: 
            the need for a discreet, professional platform where high-value deals can happen 
            without public scrutiny.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#111111] border-y border-[#D4AF37]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                Our Mission
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Traditional property portals are noisy, crowded, and public. For sophisticated investors and 
                  sellers dealing with high-value assets, this transparency is often a liability, not an asset.
                </p>
                <p>
                  <strong className="text-white">Our mission is simple:</strong> To create the most trusted, secure, and efficient 
                  marketplace for off-market property opportunities in South Africa.
                </p>
                <p>
                  We believe that privacy fosters better deals. By verifying every member and strictly 
                  controlling information flow, we ensure that only serious parties connect.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#0A0A0A] p-8 rounded-xl border border-[#D4AF37]/20 text-center hover:border-[#D4AF37]/50 transition-colors">
                <div className="text-4xl font-serif text-[#D4AF37] mb-2">R5B+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Property Value</div>
              </div>
              <div className="bg-[#0A0A0A] p-8 rounded-xl border border-[#D4AF37]/20 text-center hover:border-[#D4AF37]/50 transition-colors">
                <div className="text-4xl font-serif text-[#D4AF37] mb-2">1.2k+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Verified Investors</div>
              </div>
              <div className="bg-[#0A0A0A] p-8 rounded-xl border border-[#D4AF37]/20 text-center hover:border-[#D4AF37]/50 transition-colors">
                <div className="text-4xl font-serif text-[#D4AF37] mb-2">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Private & Secure</div>
              </div>
              <div className="bg-[#0A0A0A] p-8 rounded-xl border border-[#D4AF37]/20 text-center hover:border-[#D4AF37]/50 transition-colors">
                <div className="text-4xl font-serif text-[#D4AF37] mb-2">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Deal Flow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Our Core Values</h2>
            <p className="text-gray-400">The principles that guide every feature we build.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Absolute Privacy',
                description: 'We prioritize user anonymity above all else. Your identity is your asset, and we help you protect it.'
              },
              {
                icon: Target,
                title: 'Precision & Quality',
                description: 'We focus on high-quality, verified opportunities. We prioritize relevance over volume.'
              },
              {
                icon: Users,
                title: 'Community Trust',
                description: 'We foster a community of professionals. Verification is mandatory to maintain our high standards.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-[#111111] p-8 rounded-xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-[#D4AF37] group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-gradient-to-r from-[#111111] to-[#0A0A0A] border-t border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Join the Network
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of South Africa's most exclusive investment community. 
            Access opportunities that others never see.
          </p>
          <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors">
            Apply for Membership
          </button>
        </div>
      </section>
    </div>
  );
}
