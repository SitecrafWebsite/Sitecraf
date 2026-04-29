'use client';

import React from 'react';
import Link from 'next/link';
import BrandLogo from '@/components/layout/BrandLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo" style={{ backgroundColor: '#000000', borderTop: '1px solid white/[0.05]' }}>
      <div 
        className="footer-inner" 
        style={{ 
          width: '100%',
          maxWidth: 'none',
          margin: '0 auto', 
          padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem'
        }}
      >
        <div className="md:w-[80%] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* 1) BRAND COLUMN */}
        <div className="footer-column footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <BrandLogo
            iconClassName="h-[60px] w-[60px]"
            textClassName="text-[1.875rem]"
          />
          <p className="footer-description" style={{ fontSize: '16px', color: '#8888a0', lineHeight: 1.6, maxWidth: '280px', fontFamily: 'var(--font-body)' }}>
            Fast websites for growing Indian businesses. WordPress, Shopify, Wix Studio, and custom Next.js — built to convert, not just impress.
          </p>
          
        </div>

        {/* 2) SERVICES COLUMN */}
        <div className="footer-column footer-services" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 className="footer-heading" style={{ fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#b5ff3e', fontFamily: 'var(--font-display)' }}>
            Services
          </h3>
          <ul className="footer-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <li><Link href="/services#service-wordpress" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>WordPress Websites</Link></li>
            <li><Link href="/services#service-shopify" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Shopify Stores</Link></li>
            <li><Link href="/services#service-wix" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Wix Studio Websites</Link></li>
            <li><Link href="/services#service-nextjs" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Custom Next.js Builds</Link></li>
            <li><Link href="/services#service-chatbot" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>AI Chatbots</Link></li>
            <li><Link href="/services#service-ai-images" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>AI Image Generation</Link></li>
          </ul>
        </div>

        {/* 3) QUICK LINKS COLUMN */}
        <div className="footer-column footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 className="footer-heading" style={{ fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#b5ff3e', fontFamily: 'var(--font-display)' }}>
            Quick Links
          </h3>
          <ul className="footer-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <li><Link href="/" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Home</Link></li>
            <li><Link href="/services" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Services</Link></li>
            <li><Link href="/pricing" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Pricing</Link></li>
            <li><Link href="/blog" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Blog</Link></li>
            <li><Link href="/privacy-policy" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Terms of Service</Link></li>
          </ul>
        </div>

        {/* 4) CONTACT COLUMN */}
        <div className="footer-column footer-contact" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 className="footer-heading" style={{ fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#b5ff3e', fontFamily: 'var(--font-display)' }}>
            Contact
          </h3>
          <ul className="footer-contact-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '16px', color: '#8888a0', lineHeight: 1.5, fontFamily: 'var(--font-body)' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" className="mt-1 flex-shrink-0 text-[#b5ff3e]" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>New Delhi, India<br />Serving clients across India and abroad</span>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" className="flex-shrink-0 text-[#b5ff3e]" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <a href="tel:+919599143235" className="footer-link hover:text-[#e8e8f0]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', fontFamily: 'var(--font-body)', transition: 'color 0.2s ease' }}>
                +91 95991 43235
              </a>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" className="flex-shrink-0 text-[#b5ff3e]" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:info@sitecraf.com" className="footer-link hover:text-[#e8e8f0]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', fontFamily: 'var(--font-body)', transition: 'color 0.2s ease' }}>
                info@sitecraf.com
              </a>
            </li>
            <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '16px', color: '#66667a', fontWeight: 500, fontFamily: 'var(--font-body)', letterSpacing: '0.05em' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" className="flex-shrink-0 text-[#b5ff3e]" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>Mon–Sat · 10:00 AM – 7:00 PM IST</span>
            </li>
          </ul>
          
          <a
            href="https://wa.me/919599143235"
            className="footer-whatsapp"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Sitecraf on WhatsApp"
            style={{
              marginTop: '0.5rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.875rem 1.75rem',
              backgroundColor: '#b5ff3e',
              color: '#000000',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 700,
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              width: 'fit-content',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px rgba(181, 255, 62, 0.2)'
            }}
          >
            WhatsApp Chat
          </a>
        </div>
        </div>
      </div>

      {/* 5) FOOTER BOTTOM */}
      <div 
        className="footer-bottom" 
        style={{ 
          borderTop: '1px solid white/[0.05]', 
          padding: '2.5rem 1.5rem', 
          textAlign: 'center' 
        }}
      >
        <div className="md:w-[80%] mx-auto w-full">
          <p style={{ fontSize: '11px', color: '#66667a', margin: 0, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-body)' }}>
            © {currentYear} Sitecraf · New Delhi, India · Built for Indian businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
