import React from 'react';
import { Link } from 'react-router';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#D4AF37]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="block mb-6">
              <span className="text-2xl font-serif text-white">Investors<span className="text-[#D4AF37]">Hub</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              South Africa's premier off-market property network. Connecting verified investors with exclusive opportunities in a secure, anonymous environment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-[#D4AF37] transition-colors">How It Works</Link></li>
              <li><Link to="/pricing" className="hover:text-[#D4AF37] transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/faq" className="hover:text-[#D4AF37] transition-colors">FAQ</Link></li>
              <li><Link to="/dashboard/help" className="hover:text-[#D4AF37] transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span>1 Sandton Drive, Sandton<br />Johannesburg, 2196</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span>+27 (11) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span>support@investorshub.co.za</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Investors Hub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span>Made with precision in South Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}