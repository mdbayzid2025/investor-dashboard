import React from 'react';
import { Link } from 'react-router';
import { Button } from '@/app/components/Button';
import { Logo } from '@/app/components/Logo';
import { Mail, Lock, ArrowRight, CheckCircle } from 'lucide-react';

export function PasswordResetDemoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-black via-[#0A0A0A] to-black">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <Logo className="justify-center mb-8" />
          <h1 className="text-4xl font-serif text-white mb-2">Password Reset Demo</h1>
          <p className="text-gray-400">Test the complete password reset flow</p>
        </div>
        
        <div className="bg-[#111111] p-8 rounded-xl border border-[#D4AF37]/20 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h2 className="text-2xl font-serif text-white">How It Works</h2>
              <p className="text-sm text-gray-400">Follow these steps to test password reset</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="bg-[#1A1A1A] p-5 rounded-lg border border-[#D4AF37]/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37] text-black font-bold flex items-center justify-center">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-2">Request Password Reset</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Click "Forgot Password?" on the login page and enter any email address (e.g., demo@test.com)
                  </p>
                  <Link to="/forgot-password">
                    <Button variant="outline" className="text-xs py-2">
                      Go to Forgot Password
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-[#1A1A1A] p-5 rounded-lg border border-[#D4AF37]/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37] text-black font-bold flex items-center justify-center">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-2">Click Demo Reset Link</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    After submitting your email, you'll see a <strong className="text-[#D4AF37]">Demo Mode</strong> button that simulates clicking the email link. This takes you directly to the password reset page.
                  </p>
                  <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded p-3 inline-flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-gray-300">Normally, you'd receive this link via email</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-[#1A1A1A] p-5 rounded-lg border border-[#D4AF37]/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37] text-black font-bold flex items-center justify-center">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-2">Create New Password</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Enter a new password (minimum 8 characters) and confirm it. You'll see real-time password strength indicators and requirement checks.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Lock className="w-4 h-4 text-[#D4AF37]" />
                    <span>Password strength meter included</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="bg-[#1A1A1A] p-5 rounded-lg border border-[#D4AF37]/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37] text-black font-bold flex items-center justify-center">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-2">Success & Sign In</h3>
                  <p className="text-gray-400 text-sm">
                    After successfully resetting your password, you'll see a confirmation screen and be redirected to the login page. Use your new password to sign in!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/forgot-password">
            <Button className="w-full flex items-center justify-center gap-2">
              Start Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" className="w-full">
              Back to Login
            </Button>
          </Link>
        </div>
        
        {/* Additional Info */}
        <div className="mt-6 text-center">
          <div className="bg-[#111111] border border-[#D4AF37]/20 rounded-lg p-6">
            <h3 className="text-white font-serif text-lg mb-3">💡 Demo Features</h3>
            <ul className="text-sm text-gray-400 space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>No actual emails are sent - perfect for testing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Real-time password validation and strength checking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Show/hide password toggles for better UX</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Professional success confirmations with timestamps</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
