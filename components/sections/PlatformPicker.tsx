'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const platforms = [
  {
    id: 'wordpress',
    name: 'WordPress',
    logo: 'https://cdn.simpleicons.org/wordpress/b5ff3e',
    tagline: 'Best for content, SEO & flexible business sites',
    description: 'The world\'s most widely used CMS. Ideal for service businesses, blogs, portfolios, and any site that needs strong SEO control, a large plugin ecosystem, and easy long-term content management.',
    bestFor: [
      'Service businesses & agencies',
      'Blogs & news portals',
      'Portfolio & brochure sites',
      'SEO-driven content strategies'
    ],
    notIdealFor: 'Businesses that want a fully hosted, zero-maintenance platform or a complex product store out of the box',
    startingAt: '₹12,000',
    timeline: '2–3 weeks',
    badge: 'Most Popular'
  },
  {
    id: 'shopify',
    name: 'Shopify',
    logo: 'https://cdn.simpleicons.org/shopify/b5ff3e',
    tagline: 'Best for online stores & D2C e-commerce',
    description: 'The leading e-commerce platform. Built for selling products online — from single-product stores to large catalogues with inventory, payment, and shipping management built in.',
    bestFor: [
      'D2C product brands',
      'Online stores with inventory',
      'Businesses needing payment + shipping',
      'Multi-currency or international selling'
    ],
    notIdealFor: 'Non-e-commerce businesses — you would be paying for store features you will never use',
    startingAt: '₹18,000',
    timeline: '2–4 weeks',
    badge: 'E-Commerce'
  },
  {
    id: 'wix-studio',
    name: 'Wix Studio',
    logo: 'https://cdn.simpleicons.org/wix/b5ff3e',
    tagline: 'Best for fast, editable business websites',
    description: 'A modern visual builder with professional-grade design control. Great for businesses that want a polished, fast-loading website their own team can edit and update without any technical knowledge.',
    bestFor: [
      'Local service businesses',
      'Restaurants, clinics & studios',
      'Teams who want to self-manage content',
      'Fast turnaround projects'
    ],
    notIdealFor: 'High-traffic sites, complex custom functionality, or businesses that need deep SEO control',
    startingAt: '₹10,000',
    timeline: '1–2 weeks',
    badge: 'Fastest Launch'
  },
  {
    id: 'webflow',
    name: 'Webflow',
    logo: 'https://cdn.simpleicons.org/webflow/b5ff3e',
    tagline: 'Best for design-first brands & agencies',
    description: 'A powerful visual development platform combining design freedom with a built-in CMS. Ideal for brands where visual identity is a priority and where content needs to be structured and scalable.',
    bestFor: [
      'Creative agencies & studios',
      'Brand-driven business websites',
      'CMS-powered marketing sites',
      'Design-forward portfolios'
    ],
    notIdealFor: 'Non-technical teams that need very simple day-to-day editing or businesses on a tight budget',
    startingAt: '₹20,000',
    timeline: '2–4 weeks',
    badge: 'Design-First'
  },
  {
    id: 'nextjs',
    name: 'Next.js (Custom)',
    logo: 'https://cdn.simpleicons.org/nextdotjs/b5ff3e',
    tagline: 'Best for performance, SEO & custom functionality',
    description: 'Built from scratch with Next.js — no templates, no page builders. The highest performance option for businesses that need custom features, AEO-ready structure, bespoke integrations, or a website that doubles as a web application.',
    bestFor: [
      'Performance-critical business sites',
      'Custom web apps & portals',
      'AEO + SEO-first builds',
      'Complex integrations & APIs'
    ],
    notIdealFor: 'Businesses with very simple requirements or those needing a very fast, low-budget turnaround',
    startingAt: '₹22,000',
    timeline: '3–5 weeks',
    badge: 'Max Performance'
  }
];

export default function PlatformPicker() {
  const [activePlatform, setActivePlatform] = useState('wordpress');
  const active = platforms.find(p => p.id === activePlatform)!;
  const revealRef = useScrollReveal(0.1);

  return (
    <section id="platform-picker" className="py-24 bg-[#000000] px-6">
      <div className="w-full md:w-[80%] max-w-none mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3 block anim-reveal is-visible">
            Platform Guidance
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-xl)] anim-reveal is-visible">
            Which Platform Is Right for Your Business?
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 max-w-2xl anim-reveal is-visible">
            Every platform has a purpose. We recommend the right one based on your goals — not ours.
          </p>
        </div>

        {/* Two-zone layout */}
        <div
          ref={revealRef as any}
          className="mt-12 flex flex-col lg:flex-row gap-6 anim-reveal is-visible"
        >
          {/* LEFT — Tab selector */}
          <div className="w-full lg:w-[38%] flex flex-col gap-2">
            {platforms.map(platform => (
              <button
                key={platform.id}
                onClick={() => setActivePlatform(platform.id)}
                className={`relative flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-200 ${
                  activePlatform === platform.id
                    ? 'bg-[#b5ff3e]/[0.06] border border-[#b5ff3e]/[0.25]'
                    : 'border border-transparent hover:bg-white/[0.03] hover:border-white/[0.06]'
                }`}
              >
                {/* Active accent line */}
                {activePlatform === platform.id && (
                  <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-[#b5ff3e] rounded-full" />
                )}
                {/* Logo */}
                <Image
                  src={platform.logo}
                  alt={platform.name}
                  width={28}
                  height={28}
                  className="object-contain flex-shrink-0"
                />
                
                {/* Middle */}
                <div className="flex flex-col gap-0.5">
                  <span className={`font-[family-name:var(--font-display)] font-semibold text-[length:var(--text-sm)] ${
                    activePlatform === platform.id ? 'text-[#e8e8f0]' : 'text-[#8888a0]'
                  }`}>
                    {platform.name}
                  </span>
                  <span className={`font-[family-name:var(--font-body)] text-[length:var(--text-xs)] leading-snug hidden sm:block ${
                    activePlatform === platform.id ? 'text-[#8888a0]' : 'text-[#66667a]'
                  }`}>
                    {platform.tagline}
                  </span>
                </div>

                {/* Right badge */}
                {activePlatform === platform.id && (
                  <span className="bg-[#b5ff3e]/[0.12] text-[#b5ff3e] text-[length:var(--text-xs)] font-medium px-2.5 py-1 rounded-full whitespace-nowrap ml-auto">
                    {platform.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* RIGHT — Detail panel */}
          <div className="w-full lg:w-[62%]">
            <div className="bg-[#0a0a0a] border border-[#b5ff3e]/[0.18] rounded-2xl p-8 flex flex-col gap-6 min-h-[460px]">
              
              {/* BLOCK 1 — Platform identity row */}
              <div className="flex items-center gap-4">
                <Image src={active.logo} alt={active.name} width={40} height={40} className="object-contain flex-shrink-0" />
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-lg)]">
                  {active.name}
                </h3>
                <span className="bg-[#b5ff3e]/[0.12] text-[#b5ff3e] text-[length:var(--text-xs)] px-3 py-1.5 rounded-full font-medium ml-auto whitespace-nowrap">
                  {active.badge}
                </span>
              </div>

              {/* BLOCK 2 — Tagline */}
              <div className="text-[#b5ff3e] font-[family-name:var(--font-body)] text-[length:var(--text-sm)] font-medium">
                {active.tagline}
              </div>

              {/* BLOCK 3 — Description paragraph */}
              <p className="text-[#8888a0] font-[family-name:var(--font-body)] text-[length:var(--text-sm)] leading-relaxed">
                {active.description}
              </p>

              {/* BLOCK 4 — Best For list */}
              <div>
                <div className="text-[#e8e8f0] text-[length:var(--text-xs)] uppercase tracking-widest font-semibold mb-3">
                  Best for
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {active.bestFor.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#b5ff3e]/60 flex-shrink-0" />
                      <span className="text-[#8888a0] text-[length:var(--text-xs)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BLOCK 5 — Not Ideal For strip */}
              <div className="bg-[#111111] border border-white/[0.06] rounded-xl px-5 py-4 flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-[#66667a] mt-0.5">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <div>
                  <span className="text-[#66667a] text-[length:var(--text-xs)] uppercase tracking-wider font-semibold mb-1 block">
                    Not ideal for
                  </span>
                  <p className="text-[#66667a] text-[length:var(--text-xs)] leading-relaxed">
                    {active.notIdealFor}
                  </p>
                </div>
              </div>

              {/* BLOCK 6 — Meta + CTA row */}
              <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                <div className="flex gap-4">
                  <div className="bg-[#111111] border border-white/[0.06] rounded-full px-4 py-2 flex flex-col items-center gap-0.5 min-w-[120px]">
                    <span className="text-[#66667a] text-[length:var(--text-xs)] uppercase tracking-wider">Starting at</span>
                    <span className="text-[#e8e8f0] font-semibold text-[length:var(--text-sm)]">{active.startingAt}</span>
                  </div>
                  <div className="bg-[#111111] border border-white/[0.06] rounded-full px-4 py-2 flex flex-col items-center gap-0.5 min-w-[120px]">
                    <span className="text-[#66667a] text-[length:var(--text-xs)] uppercase tracking-wider">Timeline</span>
                    <span className="text-[#e8e8f0] font-semibold text-[length:var(--text-sm)]">{active.timeline}</span>
                  </div>
                </div>
                <Link href="#contact" className="bg-[#b5ff3e] text-[#000000] rounded-full px-6 py-3 font-semibold text-[length:var(--text-sm)] hover:bg-[#c4ff66] transition-all duration-300 active:scale-95 whitespace-nowrap">
                  Get a Quote →
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-8 bg-[#0a0a0a] border border-white/[0.06] rounded-2xl px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 anim-reveal is-visible">
          <div>
            <p className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-[length:var(--text-base)]">
              Not sure which platform fits your business?
            </p>
            <p className="text-[#8888a0] text-[length:var(--text-sm)] mt-1 max-w-xl">
              Book a free 30-minute call — we will recommend the right platform based on your goals, traffic expectations, and budget. No hard sell. Just a clear recommendation.
            </p>
          </div>
          <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="bg-[#b5ff3e] text-[#000000] rounded-full px-8 py-4 font-semibold text-[length:var(--text-sm)] hover:bg-[#c4ff66] hover:shadow-[0_0_20px_rgba(181,255,62,0.25)] transition-all duration-300 active:scale-95 flex-shrink-0">
            Book a Free Call →
          </a>
        </div>

      </div>
    </section>
  );
}
