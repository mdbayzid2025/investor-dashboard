import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/app/components/Button';

export function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20">
      {/* Header */}
      <section className="bg-[#111111] py-20 border-b border-[#D4AF37]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about membership, listing a property, or our verification process? 
            Our team is ready to assist.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-serif text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email Us</h4>
                      <p className="text-gray-400 mb-1">General Inquiries:</p>
                      <a href="mailto:info@investorshub.co.za" className="text-[#D4AF37] hover:underline block">info@investorshub.co.za</a>
                      <p className="text-gray-400 mt-2 mb-1">Support:</p>
                      <a href="mailto:support@investorshub.co.za" className="text-[#D4AF37] hover:underline block">support@investorshub.co.za</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Call Us</h4>
                      <p className="text-gray-400 mb-1">Mon-Fri from 8am to 5pm.</p>
                      <a href="tel:+27111234567" className="text-[#D4AF37] hover:underline">+27 (11) 123-4567</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Visit Us</h4>
                      <p className="text-gray-400">
                        1 Sandton Drive<br />
                        Sandton, Johannesburg<br />
                        2196, South Africa
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#111111] p-8 rounded-xl border border-[#D4AF37]/20">
                <h3 className="text-xl font-serif text-white mb-4">Frequently Asked Questions</h3>
                <p className="text-gray-400 mb-6">
                  Find quick answers to common questions about our platform, pricing, and privacy policies.
                </p>
                <Button variant="outline" className="w-full justify-center">
                  Visit Help Center
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#111111] p-8 md:p-10 rounded-xl border border-[#D4AF37]/20">
              <h3 className="text-2xl font-serif text-white mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full bg-[#0A0A0A] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full bg-[#0A0A0A] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-[#0A0A0A] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                  <select 
                    id="subject"
                    className="w-full bg-[#0A0A0A] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Membership Support</option>
                    <option>Listing Assistance</option>
                    <option>Partnership Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-[#0A0A0A] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <Button className="w-full justify-center py-4 text-base">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
