'use client';

import React from 'react';
import Link from 'next/link';

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
          <span className="footer-logo" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#e8e8f0', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
            Sitecraf
          </span>
          <p className="footer-description" style={{ fontSize: '16px', color: '#8888a0', lineHeight: 1.6, maxWidth: '280px', fontFamily: 'var(--font-body)' }}>
            We engineer fast, conversion-focused websites for Indian startups and SMEs, leveraging platforms like WordPress, Shopify, Wix Studio, and custom Next.js solutions.
          </p>
          
          {/* Social Icons row */}
          <div className="footer-socials" style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <a 
              href="#" 
              className="footer-social-link" 
              aria-label="Visit Sitecraf on LinkedIn"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white/[0.05]',
                border: '0.5px solid #b5ff3e',
                color: '#8888a0',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              in
            </a>
            <a 
              href="#" 
              className="footer-social-link" 
              aria-label="Visit Sitecraf on Instagram"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white/[0.05]',
                border: '0.5px solid #b5ff3e',
                color: '#8888a0',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              ig
            </a>
            <a 
              href="#" 
              className="footer-social-link" 
              aria-label="Visit Sitecraf on Twitter (X)"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white/[0.05]',
                border: '0.5px solid #b5ff3e',
                color: '#8888a0',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              x
            </a>
          </div>
        </div>

        {/* 2) SERVICES COLUMN */}
        <div className="footer-column footer-services" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 className="footer-heading" style={{ fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#b5ff3e', fontFamily: 'var(--font-display)' }}>
            Services
          </h3>
          <ul className="footer-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <li><a href="#" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Portfolio Design</a></li>
            <li><a href="#" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Landing Pages</a></li>
            <li><a href="#" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>E-Commerce Stores</a></li>
            <li><a href="#" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>AI Chatbots</a></li>
            <li><a href="#" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Automation & API Integrations</a></li>
            <li><a href="#" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>AI Image Generation</a></li>
          </ul>
        </div>

        {/* 3) QUICK LINKS COLUMN */}
        <div className="footer-column footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 className="footer-heading" style={{ fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#b5ff3e', fontFamily: 'var(--font-display)' }}>
            Quick Links
          </h3>
          <ul className="footer-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <li><Link href="/" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Home</Link></li>
            <li><Link href="#our-portfolio" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Our Portfolio</Link></li>
            <li><Link href="#how-we-build" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Services</Link></li>
            <li><Link href="#pricing" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Pricing</Link></li>
            <li><Link href="#blog" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Blog</Link></li>
            <li><Link href="#contact" className="footer-link hover:text-[#b5ff3e]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', transition: 'color 0.2s ease', fontFamily: 'var(--font-body)' }}>Contact</Link></li>
          </ul>
        </div>

        {/* 4) CONTACT COLUMN */}
        <div className="footer-column footer-contact" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 className="footer-heading" style={{ fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#b5ff3e', fontFamily: 'var(--font-display)' }}>
            Contact
          </h3>
          <ul className="footer-contact-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ fontSize: '16px', color: '#8888a0', lineHeight: 1.5, fontFamily: 'var(--font-body)' }}>
              New Delhi, India<br />
              Serving clients across India and abroad
            </li>
            <li>
              <a href="tel:+919599143235" className="footer-link hover:text-[#e8e8f0]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', fontFamily: 'var(--font-body)', transition: 'color 0.2s ease' }}>
                +91 95991 43235
              </a>
            </li>
            <li>
              <a href="mailto:hello@sitecraf.in" className="footer-link hover:text-[#e8e8f0]" style={{ fontSize: '16px', color: '#8888a0', textDecoration: 'none', fontFamily: 'var(--font-body)', transition: 'color 0.2s ease' }}>
                hello@sitecraf.in
              </a>
            </li>
            <li style={{ fontSize: '16px', color: '#66667a', fontWeight: 500, fontFamily: 'var(--font-body)', letterSpacing: '0.05em' }}>
              Mon–Sat · 10:00 AM – 7:00 PM IST
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
            © {currentYear} Sitecraf. Built with precision in New Delhi.
          </p>
        </div>
      </div>
    </footer>
  );
}
