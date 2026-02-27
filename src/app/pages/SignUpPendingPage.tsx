import React from 'react';
import { Link } from 'react-router';
import { Button } from '@/app/components/Button';
import { Logo } from '@/app/components/Logo';
import { Clock, Mail, Shield, CheckCircle } from 'lucide-react';

export function SignUpPendingPage() {
  const userEmail = localStorage.getItem('userEmail') || 'your email';
  const userName = localStorage.getItem('userName') || 'there';
  
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-black via-[#0A0A0A] to-black">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Logo className="justify-center mb-8" />
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D4AF37]/20 mb-6">
            <Clock className="w-10 h-10 text-[#D4AF37]" />
          </div>
          <h1 className="text-4xl font-serif text-white mb-3">Account Pending Approval</h1>
          <p className="text-gray-400 text-lg">Thank you for registering, {userName.split(' ')[0]}</p>
        </div>
        
        <div className="bg-[#111111] p-8 rounded-xl border border-[#D4AF37]/20">
          <div className="space-y-6">
            <div className="text-center pb-6 border-b border-[#D4AF37]/10">
              <p className="text-gray-300 leading-relaxed">
                Your account registration has been received and is currently under review by our team. 
                This process is in place to maintain the exclusive and secure nature of Investors Hub.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-serif text-white">What happens next?</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#D4AF37]/20">
                    <Shield className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Verification Process</h4>
                    <p className="text-gray-400 text-sm">
                      Our team will review your application to ensure it meets our membership criteria. 
                      This typically takes 24-48 hours.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#D4AF37]/20">
                    <Mail className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Notification</h4>
                    <p className="text-gray-400 text-sm">
                      You'll receive an email at <span className="text-[#D4AF37]">{userEmail}</span> once 
                      your account has been approved.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-[#D4AF37]/20">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Full Access</h4>
                    <p className="text-gray-400 text-sm">
                      Upon approval, you'll gain immediate access to exclusive property opportunities 
                      and our premium platform features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1A1A1A] border border-[#D4AF37]/10 rounded-lg p-5 mt-6">
              <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                <span className="text-[#D4AF37]">●</span> Need immediate assistance?
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                If you have questions about your application or need to update your information, 
                our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </Link>
                <Link to="/faq" className="flex-1">
                  <Button variant="outline" className="w-full">
                    View FAQs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/" className="text-sm text-gray-400 hover:text-[#D4AF37] transition-colors">
            Return to Homepage
          </Link>
        </div>
        
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Application submitted on {new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>
      </div>
    </div>
  );
}
