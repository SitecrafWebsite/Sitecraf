'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col">
      {/* SECTION B — Main Footer Grid */}
      <section className="w-full bg-[#000000] pt-16 pb-8 px-6">
        <div className="w-full md:w-[80%] max-w-none mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
            
            {/* Col 1: Brand */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <Link href="/" className="flex items-center gap-3">
                <svg viewBox="0 0 32 32" className="w-8 h-8">
                  <rect x="16" y="2" width="14" height="14" transform="rotate(45 16 2)" stroke="#00c8c8" strokeWidth="1.5" fill="none" />
                  <rect x="16" y="12" width="14" height="14" transform="rotate(45 16 12)" stroke="#00c8c8" strokeWidth="1.5" fill="none" />
                </svg>
                <span className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-xl tracking-tight">
                  Sitecraf
                </span>
              </Link>
              <p className="text-[#66667a] text-sm max-w-[250px]">
                Websites & AI tools for businesses that mean business.
              </p>
              
              <div className="flex flex-col gap-3">
                <a href="mailto:support@sitecraf.com" className="text-[#8888a0] text-sm hover:text-[#e8e8f0] transition-colors">support@sitecraf.com</a>
                <a href="tel:+919599143235" className="text-[#8888a0] text-sm hover:text-[#e8e8f0] transition-colors">+91 95991 43235</a>
                <span className="text-[#8888a0] text-sm">South Extension Part-2, New Delhi – 110049, India</span>
                <span className="text-[#8888a0] text-sm">Mon–Fri, 10am–7pm IST</span>
              </div>

              <a 
                href="https://wa.me/919599143235" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#b5ff3e] text-[#000000] rounded-full hover:bg-[#c4ff66] hover:shadow-[var(--glow-sm)] active:scale-[0.98] transition-all duration-300 text-sm font-semibold w-fit"
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            {/* Col 2: Services */}
            <div className="flex flex-col">
              <h4 className="text-[#e8e8f0] text-xs uppercase tracking-widest font-semibold mb-5">Services</h4>
              <nav className="flex flex-col">
                <Link href="/#services" className="text-[#66667a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Platform Website (Shopify / Wix Studio)</Link>
                <Link href="/#services" className="text-[#66667a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Custom Coded Website</Link>
                <Link href="/#services" className="text-[#66667a] text-sm hover:text-[#8888a0] transition-colors block mb-3">AI Image Generation</Link>
                <Link href="/#services" className="text-[#66667a] text-sm hover:text-[#8888a0] transition-colors block mb-3">AI Chatbot</Link>
                <Link href="/#services" className="text-[#66667a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Automation & Integrations</Link>
              </nav>
            </div>

            {/* Col 3: Quick Links */}
            <div className="flex flex-col">
              <h4 className="text-[#e8e8f0] text-xs uppercase tracking-widest font-semibold mb-5">Quick Links</h4>
              <nav className="flex flex-col">
                <Link href="/#process" className="text-[#66667a] text-sm hover:text-[#8888a0] transition-colors block mb-3">How I Work</Link>
                <Link href="/#case-studies" className="text-[#66667a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Projects</Link>
                <Link href="/#comparison" className="text-[#66667a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Why Sitecraf</Link>
                <Link href="/#faq" className="text-[#66667a] text-sm hover:text-[#8888a0] transition-colors block mb-3">FAQ</Link>
                <Link href="/#contact" className="text-[#66667a] text-sm hover:text-[#8888a0] transition-colors block mb-3">Contact</Link>
              </nav>
            </div>

            {/* Col 4: Social */}
            <div className="flex flex-col lg:col-span-2">
              <h4 className="text-[#e8e8f0] text-xs uppercase tracking-widest font-semibold mb-5">Social</h4>
              <div className="flex items-center gap-3">
                <a href="https://linkedin.com/company/sitecraf" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/[0.08] rounded-full flex items-center justify-center text-[#8888a0] hover:border-[#b5ff3e]/30 hover:text-[#b5ff3e] transition-colors" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://instagram.com/sitecraf" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/[0.08] rounded-full flex items-center justify-center text-[#8888a0] hover:border-[#b5ff3e]/30 hover:text-[#b5ff3e] transition-colors" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://github.com/brainqurious-antigravityproject" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/[0.08] rounded-full flex items-center justify-center text-[#8888a0] hover:border-[#b5ff3e]/30 hover:text-[#b5ff3e] transition-colors" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>

          </div>

          {/* SECTION C — Bottom Bar */}
          <div className="border-t border-white/[0.05] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#66667a] text-xs text-center md:text-left">
              © {currentYear} Sitecraf. All rights reserved.
            </p>
            <p className="text-[#66667a] text-xs text-center">
              Based in New Delhi, India. Serving clients globally.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-[#66667a] text-xs hover:text-[#8888a0] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-[#66667a] text-xs hover:text-[#8888a0] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
