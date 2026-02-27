import React from 'react';
import { Button } from '@/app/components/Button';
import { 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Users, 
  Briefcase, 
  Building2, 
  Globe, 
  CheckCircle2, 
  Plus, 
  MessageSquare,
  Lock,
  Search,
  Eye,
  FileText
} from 'lucide-react';
import { useNavigate } from 'react-router';

export function LandingPageModern() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37] selection:text-black relative">
      <button 
        onClick={() => navigate('/')}
        className="fixed bottom-6 right-6 z-50 bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#D4AF37] transition-colors border-2 border-black flex items-center gap-2"
      >
        <span>View Classic Version</span>
        <ArrowRight className="w-4 h-4" />
      </button>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                South Africa's Premier Off-Market Network
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif font-medium leading-[1.1]">
                South Africa's<br />
                <span className="text-[#D4AF37]">Off-Market Property</span><br />
                & Investment Network
              </h1>
              
              <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                Access off-market listings, anonymous investor chat, and exclusive opportunities for <span className="text-[#D4AF37] font-medium">R99/month</span>
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Button className="h-14 px-8 text-lg bg-[#D4AF37] hover:bg-[#b5952f] text-black font-semibold rounded-none">
                  Get Full Access for R99/month <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button variant="outline" className="h-14 px-8 text-lg border-white/20 hover:bg-white hover:text-black rounded-none">
                  Join the Investor Network
                </Button>
              </div>
            </div>
            
            {/* Right Image/Graphic */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden border border-[#D4AF37]/20">
                <img 
                  src="https://images.unsplash.com/photo-1757439402268-1da284675170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGV4dGVyaW9yJTIwbmlnaHR8ZW58MXx8fHwxNzY4NDk0OTAxfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Luxury Property" 
                  className="w-full h-[600px] object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-[#D4AF37] rounded-full flex flex-col items-center justify-center text-black animate-spin-slow p-2 text-center shadow-lg shadow-[#D4AF37]/20">
                  <span className="font-serif font-bold text-3xl">R99</span>
                  <span className="text-xs font-semibold uppercase tracking-wide">Per Month</span>
                </div>

                <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4 max-w-xs">
                   <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                   </div>
                   <div>
                      <p className="text-[#D4AF37] font-bold text-lg">18-22%</p>
                      <p className="text-xs text-gray-300">Avg. Project IRR</p>
                   </div>
                </div>
              </div>
              
              {/* Decorative elements behind */}
              <div className="absolute -z-10 top-20 -right-20 w-64 h-64 border border-[#D4AF37]/10 rounded-full" />
              <div className="absolute -z-10 bottom-20 -left-10 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-2xl" />
            </div>
            
          </div>
        </div>
      </section>

      {/* Services Cards (Floating) */}
      <section className="relative z-20 -mt-20 lg:-mt-24 px-6 mb-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Shield, 
                title: 'Verified Network', 
                desc: 'Every member is verified. No time wasters, no spam. Professional investors and sellers only.' 
              },
              { 
                icon: Lock, 
                title: '100% Anonymous', 
                desc: 'Connect with verified investors using anonymous IDs. No phone numbers or emails shared until you choose.' 
              },
              { 
                icon: Eye, 
                title: 'Off-Market Only', 
                desc: 'Properties and opportunities that are not publicly advertised. Early access before traditional marketing begins.' 
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-[#111] hover:bg-[#151515] p-8 rounded-2xl border border-white/5 hover:border-[#D4AF37] transition-all duration-300 shadow-xl">
                <div className="w-14 h-14 bg-[#1A1A1A] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-[#D4AF37] group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-serif mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                
                <div className="mt-6 flex items-center text-[#D4AF37] text-sm font-medium cursor-pointer">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2 space-y-6">
              <p className="text-[#D4AF37] font-medium tracking-widest uppercase text-sm">About Us</p>
              <h2 className="text-4xl lg:text-5xl font-serif leading-tight">
                What Is <br/> Investors Hub?
              </h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Investors Hub is a <strong className="text-white">paid, private investor platform</strong> that connects 
                  serious property investors and developers with <strong className="text-white">off-market opportunities</strong> that 
                  never reach public listing portals.
                </p>
                <p>
                  This is <strong className="text-[#D4AF37]">not a traditional property portal</strong>. We focus exclusively on 
                  discretion, verified members, and high-value deals that require confidentiality.
                </p>
                <p className="text-gray-500 text-base italic">
                  For serious investors who value privacy, early access, and direct connections.
                </p>
              </div>
              
              <Button variant="outline" className="mt-8 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-none h-12 px-8">
                Join the Investor Network
              </Button>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1520817027586-bc1673915525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwc2lsaG91ZXR0ZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg0OTQ5MDF8MA&ixlib=rb-4.1.0&q=80&w=400" 
                  className="rounded-2xl w-full h-64 object-cover mt-12"
                  alt="Meeting"
                />
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1697092433085-9084463eb500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMG5pZ2h0JTIwZ29sZCUyMGxpZ2h0aW5nfGVufDF8fHx8MTc2ODQ5NDkwMXww&ixlib=rb-4.1.0&q=80&w=400" 
                    className="rounded-2xl w-full h-64 object-cover"
                    alt="Office"
                  />
                  <div className="absolute -bottom-6 -left-20 bg-[#D4AF37] p-6 rounded-xl hidden md:block">
                     <p className="font-bold text-3xl text-black">100%</p>
                     <p className="text-black/80 text-sm font-medium">Confidential</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Strip - Adapted to Trust Indicators/Values since we removed fake stats */}
      <section className="bg-[#D4AF37] py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-black">
            <div className="flex items-center gap-6">
               <div className="text-4xl font-serif font-bold">Privacy</div>
               <div className="text-sm font-semibold uppercase tracking-wider max-w-[120px]">
                 Prioritized First
               </div>
            </div>
            <div className="w-px h-16 bg-black/20 hidden md:block" />
            <div className="flex items-center gap-6">
               <div className="text-4xl font-serif font-bold">R99/mo</div>
               <div className="text-sm font-semibold uppercase tracking-wider max-w-[120px]">
                 Full Platform Access
               </div>
            </div>
            <div className="w-px h-16 bg-black/20 hidden md:block" />
             <div className="w-16 h-16 bg-black text-[#D4AF37] rounded-full flex items-center justify-center transform -rotate-45 cursor-pointer hover:rotate-0 transition-transform">
                <ArrowRight className="w-8 h-8" />
             </div>
          </div>
        </div>
      </section>

      {/* Offerings Section (What You Get) */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center mb-16">
          <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-3">Membership Benefits</p>
          <h2 className="text-4xl lg:text-5xl font-serif">
            What You Get for R99/Month
          </h2>
          <p className="text-xl text-gray-400 mt-4">
            Full access to South Africa's most discreet investor network
          </p>
        </div>
        
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {[
             { 
               icon: TrendingUp, 
               title: 'Off-Market Property Opportunities', 
               desc: 'Access exclusive listings before they hit the public market. Development land, portfolios, and confidential sales.' 
             },
             { 
               icon: MessageSquare, 
               title: 'Anonymous Investor Chat', 
               desc: 'Connect with verified investors using anonymous IDs. No phone numbers or emails shared until you choose.' 
             },
             { 
               icon: FileText, 
               title: 'Monthly Investor Brief', 
               desc: 'Curated newsletter with new listings, developments, and market insights. High-value, low-noise.' 
             },
             { 
               icon: Eye, 
               title: 'Priority Access', 
               desc: 'See opportunities before they reach public listings. Get early-mover advantage on premium deals.' 
             },
             { 
               icon: Users, 
               title: 'Verified Network Only', 
               desc: 'Every member is verified. No time wasters, no spam. Professional investors and sellers only.' 
             },
             { 
               icon: Shield, 
               title: 'Secure Platform Communication', 
               desc: 'All communication handled through our secure platform. Complete confidentiality guaranteed.' 
             }
           ].map((item, i) => (
             <div key={i} className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-[#D4AF37] group transition-all text-center">
                <div className="w-16 h-16 mx-auto bg-[#1A1A1A] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                   <item.icon className="w-8 h-8 text-[#D4AF37] group-hover:text-black" />
                </div>
                <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{item.desc}</p>
                <div className="w-10 h-10 mx-auto rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-black transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Feature Split - Anonymous Chat */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-3">Key Feature</p>
              <h2 className="text-4xl font-serif mb-8">
                Anonymous <br/> Investor Chat
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Connect with verified investors and sellers while maintaining complete anonymity 
                until you're ready to reveal your identity.
              </p>
              
              <div className="relative">
                 <img 
                   src="https://images.unsplash.com/photo-1758964297394-1eab6102f9d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmFsJTIwZGV0YWlsJTIwYWJzdHJhY3QlMjBnb2xkfGVufDF8fHx8MTc2ODQ5NDkwMXww&ixlib=rb-4.1.0&q=80&w=600"
                   alt="Abstract"
                   className="rounded-2xl opacity-50" 
                 />
                 <div className="absolute top-10 left-10 bg-black/80 backdrop-blur border border-white/10 p-4 rounded-xl">
                   <MessageSquare className="w-8 h-8 text-[#D4AF37]" />
                 </div>
              </div>
            </div>
            
            <div className="space-y-4 pt-12">
              {[
                { q: "Identity Protection", a: "Auto-generated investor names (Investor001, Investor002, etc.) ensure your identity is protected." },
                { q: "Privacy First", a: "No phone numbers or email addresses required to start communicating." },
                { q: "Safe Introductions", a: "Platform-mediated introductions when both parties agree to proceed." },
                { q: "Professional Environment", a: "Moderated environment to ensure high-quality, relevant discussions." },
                { q: "Control", a: "Share contact details only when you choose to do so." }
              ].map((faq, i) => (
                <div key={i} className="bg-[#111] p-6 rounded-xl border border-white/5 hover:border-[#D4AF37]/50 transition-colors">
                  <div className="flex justify-between items-center cursor-pointer">
                    <h4 className="font-serif text-lg">{faq.q}</h4>
                    <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#D4AF37]">
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Slider - What Off Market Means */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="container mx-auto mb-12 flex justify-between items-end">
          <div>
            <p className="text-[#D4AF37] uppercase tracking-widest text-sm mb-3">Portfolio Types</p>
            <h2 className="text-4xl font-serif">What "Off-Market" Means</h2>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-full w-12 h-12 p-0 flex items-center justify-center border-gray-700 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
              <ArrowRight className="w-5 h-5 rotate-180" />
            </Button>
            <Button variant="outline" className="rounded-full w-12 h-12 p-0 flex items-center justify-center border-gray-700 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
          {[
            { 
              title: "Development Land", 
              desc: "Zoned land parcels available before public tender or listing. Direct from landowners and developers.",
              img: "1582407947304-fd86f028f716"
            },
            { 
              title: "Property Portfolios", 
              desc: "Multi-property packages sold as a single transaction. Often from estate settlements or corporate divestments.",
              img: "1545324418-cc1a3d272088"
            },
            { 
              title: "Confidential Sales", 
              desc: "High-value properties requiring discretion. Private sales without public marketing campaigns.",
              img: "1486406146926-c627a92ad1ab"
            }
          ].map((item, i) => (
             <div key={i} className="min-w-[300px] md:min-w-[400px] snap-center group relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img 
                  src={`https://images.unsplash.com/photo-${item.img}?auto=format&fit=crop&w=800&q=80`}
                  alt="Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                   <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <p className="text-[#D4AF37] text-sm font-medium mb-1">Exclusive</p>
                     <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
                     <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       {item.desc}
                     </p>
                   </div>
                   <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center">
                         <ArrowRight className="w-5 h-5 -rotate-45" />
                      </div>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="bg-[#D4AF37] rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
             {/* Abstract circles */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full translate-x-1/3 translate-y-1/3" />
             
             <div className="relative z-10 max-w-3xl mx-auto">
               <p className="text-black/70 font-bold uppercase tracking-widest mb-4">Join South Africa's most exclusive investor network</p>
               <h2 className="text-4xl lg:text-6xl font-serif text-black font-bold mb-8">
                 Unlock Off-Market Opportunities
               </h2>
               
               <p className="text-black/80 mb-8 text-lg font-medium">
                  Full access to off-market listings, anonymous chat, and monthly insights for just R99/month
               </p>
               
               <div className="flex justify-center">
                 <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-12 py-6 h-auto text-xl">
                   Get Full Access for R99/month
                 </Button>
               </div>
               
               <div className="mt-8 flex justify-center gap-6 text-sm font-medium text-black/60">
                  <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Cancel anytime</div>
                  <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Instant access</div>
                  <div className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> No hidden fees</div>
               </div>
             </div>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row justify-between items-end gap-8 border-t border-white/10 pt-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-white mb-2">Investors Hub</h2>
              <p className="text-gray-500 max-w-xs text-sm">
                Secure, anonymous, off-market property investment platform for serious professionals.
              </p>
            </div>
            
            <div className="flex gap-8 text-sm text-gray-400">
               <a href="#" className="hover:text-[#D4AF37]">Privacy Policy</a>
               <a href="#" className="hover:text-[#D4AF37]">Terms of Service</a>
               <a href="#" className="hover:text-[#D4AF37]">Contact</a>
            </div>
            
            <div className="text-right">
              <p className="text-[#D4AF37] font-bold text-lg">R99 / Month</p>
              <p className="text-gray-500 text-sm">support@investorshub.co.za</p>
            </div>
          </div>
          
          <div className="mt-12 text-center text-xs text-gray-600">
            &copy; 2024 Investors Hub. All rights reserved.
          </div>
        </div>
      </section>

    </div>
  );
}
