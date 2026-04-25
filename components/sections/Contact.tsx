'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');



  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-[800px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b5ff3e]/[0.08] border border-[#b5ff3e]/[0.14] mb-6">
            <span className="text-[#b5ff3e] text-[length:var(--text-xs)] font-medium">
              ⚡ Typically reply within 4 hours on weekdays
            </span>
          </div>
          <h2 className="heading-section font-[family-name:var(--font-display)] text-[#e8e8f0]">
            Tell Us About Your Project
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-4 max-w-xl mx-auto leading-relaxed">
            Describe what you need — we&apos;ll reply within 4 hours on weekdays with a clear recommendation and a rough price range. No commitment, no sales call.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#111111] p-6 rounded-2xl border border-white/[0.08] flex flex-col items-center text-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#b5ff3e]/[0.08] border border-[#b5ff3e]/[0.14] flex items-center justify-center text-[#b5ff3e]">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <h4 className="heading-sub text-[#e8e8f0]">Email</h4>
            <a href="mailto:info@sitecraf.com" className="text-[#8888a0] text-sm hover:text-[#b5ff3e] transition-colors">info@sitecraf.com →</a>
          </div>
          <div className="bg-[#111111] p-6 rounded-2xl border border-white/[0.08] flex flex-col items-center text-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#b5ff3e]/[0.08] border border-[#b5ff3e]/[0.14] flex items-center justify-center text-[#b5ff3e]">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <h4 className="heading-sub text-[#e8e8f0]">WhatsApp</h4>
            <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="text-[#8888a0] text-sm hover:text-[#b5ff3e] transition-colors">+91 95991 43235</a>
          </div>
          <div className="bg-[#111111] p-6 rounded-2xl border border-white/[0.08] flex flex-col items-center text-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#b5ff3e]/[0.08] border border-[#b5ff3e]/[0.14] flex items-center justify-center text-[#b5ff3e]">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <h4 className="heading-sub text-[#e8e8f0]">Location</h4>
            <span className="text-[#8888a0] text-sm">South Ex, New Delhi</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Note: Do not use non-deterministic attributes here. Hydration mismatches can occur if browser extensions inject attributes like fdprocessedid. */}
          {/* Form */}
          <form 
            onSubmit={async (e) => {
              e.preventDefault();
              setStatus('loading');
              try {
                const formData = new FormData(e.currentTarget);
                const response = await fetch("https://formsubmit.co/ajax/info@sitecraf.com", {
                  method: "POST",
                  body: formData
                });
                if (response.ok) {
                  setStatus('success');
                } else {
                  setStatus('error');
                }
              } catch (err) {
                setStatus('error');
              }
            }} 
            className="flex flex-col gap-6 bg-[#111111] p-8 rounded-2xl border border-white/[0.08] relative overflow-hidden"
          >
            {/* Hidden Config Fields for FormSubmit */}
            <input type="hidden" name="_subject" value="New Project Inquiry - Sitecraf" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#8888a0] text-sm font-medium">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required 
                  suppressHydrationWarning
                  className="bg-[#000000] border border-white/[0.08] rounded-lg px-4 py-3 text-[#e8e8f0] focus:border-[#b5ff3e]/40 focus:outline-none transition-colors" 
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#8888a0] text-sm font-medium">Business</label>
                <input 
                  type="text" 
                  name="business"
                  suppressHydrationWarning
                  className="bg-[#000000] border border-white/[0.08] rounded-lg px-4 py-3 text-[#e8e8f0] focus:border-[#b5ff3e]/40 focus:outline-none transition-colors" 
                  placeholder="Business name (optional)"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#8888a0] text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  suppressHydrationWarning
                  className="bg-[#000000] border border-white/[0.08] rounded-lg px-4 py-3 text-[#e8e8f0] focus:border-[#b5ff3e]/40 focus:outline-none transition-colors" 
                  placeholder="Your email address"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#8888a0] text-sm font-medium">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  suppressHydrationWarning
                  className="bg-[#000000] border border-white/[0.08] rounded-lg px-4 py-3 text-[#e8e8f0] focus:border-[#b5ff3e]/40 focus:outline-none transition-colors" 
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#8888a0] text-sm font-medium">Service</label>
                <select 
                  name="service"
                  required
                  defaultValue=""
                  suppressHydrationWarning
                  className="bg-[#000000] border border-white/[0.08] rounded-lg px-4 py-3 text-[#e8e8f0] focus:border-[#b5ff3e]/40 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="wordpress">WordPress Website</option>
                  <option value="wix-studio">Wix Studio Website</option>
                  <option value="shopify">Shopify E-commerce</option>
                  <option value="nextjs">Custom Next.js Web App</option>
                  <option value="chatbot">AI Chatbot</option>
                  <option value="ai-images">AI Image Generation</option>
                  <option value="advice">Not sure — need advice</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#8888a0] text-sm font-medium">Budget</label>
                <select 
                  name="budget"
                  required
                  defaultValue=""
                  suppressHydrationWarning
                  className="bg-[#000000] border border-white/[0.08] rounded-lg px-4 py-3 text-[#e8e8f0] focus:border-[#b5ff3e]/40 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select budget range</option>
                  <option value="under-10k">Under ₹10,000</option>
                  <option value="10k-20k">₹10,000–₹20,000</option>
                  <option value="20k-50k">₹20,000–₹50,000</option>
                  <option value="above-50k">Above ₹50,000</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#8888a0] text-sm font-medium">Message</label>
              <textarea 
                name="message"
                required 
                rows={4} 
                className="bg-[#000000] border border-white/[0.08] rounded-lg px-4 py-3 text-[#e8e8f0] focus:border-[#b5ff3e]/40 focus:outline-none transition-colors resize-y"
                placeholder="What does your business do, and what do you need from a website?"
              ></textarea>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'} 
                suppressHydrationWarning
                className="w-full bg-[#b5ff3e] text-[#000000] font-semibold px-8 py-4 rounded-lg hover:bg-[#c4ff66] hover:shadow-[var(--glow-sm)] active:scale-[0.98] transition-all duration-300 disabled:opacity-70"
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent! We\'ll reply within 4 hours ✓' : status === 'error' ? 'Error. Please try again.' : 'Send Message →'}
              </button>
              
              <p className="text-[#66667a] text-[length:var(--text-xs)] text-center font-medium">
                No GST. Transparent pricing. 100% ownership guarantee.
              </p>
            </div>
          </form>

          {/* WhatsApp CTA */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full h-px bg-white/[0.05]" />
            <p className="text-[#8888a0] text-sm">More comfortable on WhatsApp?</p>
            <a 
              href="https://wa.me/919599143235" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366]/[0.1] border border-[#25D366]/[0.2] text-[#25D366] rounded-full hover:bg-[#25D366]/[0.15] hover:border-[#25D366]/[0.3] transition-all duration-300 font-semibold group text-center text-[13px] md:text-base"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Message Us on WhatsApp →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
