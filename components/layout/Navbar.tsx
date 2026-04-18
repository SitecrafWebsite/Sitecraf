'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      
      // Handle scrolled state for background
      setIsScrolled(currentScrollY > 20);
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#b5ff3e] text-[#000000] px-4 py-2 rounded-lg z-[100] font-medium"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ease-[var(--t-base)] bg-transparent ${
          scrollDirection === 'down' && isScrolled 
            ? '-translate-y-full' 
            : 'translate-y-0'
        }`}
      >
        <div className="w-full md:w-[80%] max-w-none mx-auto px-6 h-full flex items-center justify-between">
          
          {/* LEFT — SVG Logo + Brand Name */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg 
              viewBox="0 0 32 32" 
              className="w-8 h-8 transition-all duration-300 group-hover:drop-shadow-[var(--glow-sm)]"
            >
              <rect x="16" y="2" width="14" height="14" transform="rotate(45 16 2)" stroke="#00c8c8" strokeWidth="1.5" fill="none" />
              <rect x="16" y="12" width="14" height="14" transform="rotate(45 16 12)" stroke="#00c8c8" strokeWidth="1.5" fill="none" />
            </svg>
            <span className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-xl tracking-tight">
              Sitecraf
            </span>
          </Link>

          {/* CENTER — Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={`text-sm transition-colors duration-200 ${
                    isActive 
                      ? 'text-[#b5ff3e]' 
                      : 'text-[#8888a0] hover:text-[#e8e8f0]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT — Action cluster (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/quote" 
              className="border border-[#b5ff3e]/[0.18] text-[#b5ff3e] text-sm font-medium px-5 py-2 rounded-full hover:bg-[#b5ff3e]/[0.08] hover:shadow-[var(--glow-sm)] transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* MOBILE — Hamburger Menu Button */}
          <button
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 z-50 border border-dotted border-[#d5f208]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
          >
            <span 
              className={`w-6 h-[2px] bg-[#e8e8f0] rounded-full transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
              }`} 
            />
            <span 
              className={`w-6 h-[2px] bg-[#e8e8f0] rounded-full transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`} 
            />
            <span 
              className={`w-6 h-[2px] bg-[#e8e8f0] rounded-full transition-transform duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
              }`} 
            />
          </button>
        </div>

        {/* MOBILE — Drawer */}
        <div 
          className={`md:hidden absolute top-[72px] left-0 right-0 overflow-hidden transition-all duration-300 ease-[var(--t-base)] ${
            isMobileMenuOpen ? 'max-h-[100dvh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-[#0a0a0a] border-b border-white/[0.08] flex flex-col px-6 py-4 shadow-2xl">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg py-4 border-b border-white/[0.04] transition-colors active:text-[#b5ff3e] active:bg-white/[0.02] ${
                    isActive ? 'text-[#b5ff3e]' : 'text-[#8888a0] hover:text-[#e8e8f0]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            
            <div className="pt-6 pb-4 flex flex-col gap-6">
              <Link 
                href="/quote" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center border border-[#b5ff3e]/[0.18] text-[#b5ff3e] font-medium px-6 py-4 rounded-full hover:bg-[#b5ff3e]/[0.08] active:scale-[0.98] active:bg-[#b5ff3e]/[0.12] transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
