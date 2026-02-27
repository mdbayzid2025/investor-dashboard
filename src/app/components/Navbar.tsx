import React from 'react';
import { Link, useLocation } from 'react-router';
import { Logo } from './Logo';
import { Button } from './Button';

export function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#D4AF37]'
                    : 'text-gray-300 hover:text-[#D4AF37]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" to="/dashboard" className="hidden lg:flex">
              Dashboard
            </Button>
            <Button variant="outline" to="/admin" className="hidden lg:flex">
              Admin
            </Button>
            <Button variant="outline" to="/login">
              Login
            </Button>
            <Button to="/signup">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}