'use client';

import React from 'react';
import Link from 'next/link';
import { Service } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services: Service[] = [
  {
    id: 'platform-website',
    title: 'Platform Website (WordPress / Shopify / Wix Studio)',
    description: 'The right platform for your business depends on your goals — not just your budget. We build on WordPress for content-rich and SEO-driven sites, Shopify for e-commerce, and Wix Studio for fast-editable business websites. Every build is mobile-first, performance-optimised, and handed over with 100% ownership.',
    category: 'web-app',
    features: [
      'WordPress — SEO-ready, plugin-powered',
      'Shopify — optimised store & checkout',
      'Wix Studio — fast, editable, affordable',
      'Mobile-first on every platform',
      'Platform migration with design preserved'
    ],
    timeline: '2–4 weeks',
    startingPrice: 'From ₹12,000',
    icon: 'Layout',
    isHighlighted: true,
    hostingNote: {
      label: "Web Hosting & Managed Servers",
      points: [
        "Managed hosting on Hostinger, SiteGround, or AWS",
        "99.9% uptime SLA with daily backups",
        "SSL, CDN, and security hardening included",
        "Server setup, migration, and ongoing management",
        "Shared hosting from ₹3,000/yr to VPS and dedicated servers"
      ]
    }
  },
  {
    id: 'custom-website',
    title: 'Custom Coded Website',
    description: 'For businesses that need maximum speed, SEO performance, and bespoke functionality — built from scratch with Next.js or HTML/CSS. No templates, no page builders. Fully mobile-optimised, AEO-ready, and deployed on Vercel for near-zero hosting cost.',
    category: 'web-app',
    features: [
      'Next.js / HTML + CSS builds',
      'Mobile-first & SEO + AEO optimised',
      'Deployed free on Vercel',
      'Custom forms, flows & integrations'
    ],
    timeline: '2–5 weeks',
    startingPrice: 'From ₹20,000',
    icon: 'Code'
  },
  {
    id: 'ai-image-generation',
    title: 'AI Image Generation',
    description: "Need product photos, website banners, or marketing creatives without a photography budget? We generate studio-quality visuals from your existing photos — brand-consistent, fast, and scalable. Suitable for any product-based business: fashion, furniture, electronics, food, lifestyle, and more.",
    category: 'ai-integration',
    features: [
      'Product visuals for any industry',
      'Website banners & marketing creatives',
      'Brand-consistent style across images',
      'Bulk generation available'
    ],
    timeline: '2–5 days per batch',
    startingPrice: 'From ₹5,000/batch',
    icon: 'Image'
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot for Your Website',
    description: "An intelligent chatbot trained on your business — products, pricing, FAQs, and contact details. Handles visitor queries 24/7 in Hindi, Hinglish, or English. Captures and qualifies leads automatically, even when you are offline.",
    category: 'chatbot',
    features: [
      'Hindi, Hinglish & English support',
      'Trained on your business data',
      'Lead capture & qualification',
      'Website widget — easy to embed'
    ],
    timeline: '1–3 weeks',
    startingPrice: 'From ₹12,000',
    icon: 'MessageSquare'
  },
  {
    id: 'automation',
    title: 'Automation & API Integrations',
    description: 'Connect your website with WhatsApp, CRM, Google Sheets, payment gateways, or booking calendars. Automate lead notifications, form responses, and appointment confirmations. Available as an add-on to any project.',
    category: 'ai-integration',
    features: [
      'WhatsApp + email notifications',
      'Calendar & booking integrations',
      'CRM / Google Sheets sync',
      'Payment gateway setup'
    ],
    timeline: 'Add-on: 3–7 days',
    startingPrice: 'From ₹8,000',
    icon: 'Zap'
  }
];

function FeaturedServiceCard({ service }: { service: Service }) {
  const revealRef = useScrollReveal(0.15);
  return (
    <div 
      ref={revealRef as any}
      className="md:col-span-2 bg-[#0a0a0a] border border-[#b5ff3e]/[0.18] rounded-2xl p-8 flex flex-col lg:flex-row gap-8 anim-reveal card-hover"
    >
      <div className="flex flex-col">
        <div className="w-10 h-10 bg-[#b5ff3e]/[0.08] rounded-lg flex items-center justify-center mb-4">
          <span className="text-[#b5ff3e] text-[length:var(--text-xs)] font-mono">{service.icon}</span>
        </div>
        <h3 className="heading-sub font-[family-name:var(--font-display)] text-[#e8e8f0]">
          {service.title}
        </h3>
        <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] mt-2 leading-relaxed">
          {service.description}
        </p>
        
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#b5ff3e]/40 flex-shrink-0" />
              <span className="text-[#66667a] text-[length:var(--text-xs)]">{feature}</span>
            </div>
          ))}
        </div>

        {service.hostingNote && (
          <>
            <hr className="hosting-divider" />
            <div className="hosting-note">
              <p className="hosting-label">
                {service.hostingNote.label}
              </p>
              <ul className="hosting-points">
                {service.hostingNote.points.map((point, idx) => (
                  <li key={idx} className="hosting-point">
                    <span className="hosting-dot" aria-hidden="true">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <div className="mt-auto pt-6 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[#66667a] text-[length:var(--text-xs)]">Timeline: {service.timeline}</span>
            <span className="text-[#66667a] text-[length:var(--text-xs)]">Starts at: {service.startingPrice}</span>
          </div>
          <Link 
            href={`/services/${service.id}`}
            className="text-[#b5ff3e] text-[length:var(--text-sm)] font-medium hover:text-[#00e5e5] transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

function RegularServiceCard({ service }: { service: Service }) {
  const revealRef = useScrollReveal(0.15);
  return (
    <div 
      ref={revealRef as any}
      className="bg-[#0a0a0a] border border-white/[0.08] rounded-xl p-6 flex flex-col anim-reveal card-hover"
    >
      <div className="w-10 h-10 bg-[#b5ff3e]/[0.08] rounded-lg flex items-center justify-center mb-4">
        <span className="text-[#b5ff3e] text-[length:var(--text-xs)] font-mono">{service.icon}</span>
      </div>
      <h3 className="heading-sub font-[family-name:var(--font-display)] text-[#e8e8f0]">
        {service.title}
      </h3>
      <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] mt-2 leading-relaxed flex-1">
        {service.description}
      </p>
      
      <div className="mt-4 flex flex-col gap-2">
        {service.features.slice(0, 3).map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#b5ff3e]/40 flex-shrink-0" />
            <span className="text-[#66667a] text-[length:var(--text-xs)] truncate">{feature}</span>
          </div>
        ))}
        {service.features.length > 3 && (
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-transparent flex-shrink-0" />
            <span className="text-[#66667a] text-[length:var(--text-xs)] italic">+ {service.features.length - 3} more</span>
          </div>
        )}
      </div>

      {service.hostingNote && (
        <>
          <hr className="hosting-divider" />
          <div className="hosting-note">
            <p className="hosting-label">
              {service.hostingNote.label}
            </p>
            <ul className="hosting-points">
              {service.hostingNote.points.map((point, idx) => (
                <li key={idx} className="hosting-point">
                  <span className="hosting-dot" aria-hidden="true">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      <div className="flex justify-between mt-5 pt-4 border-t border-white/[0.05] text-[#66667a] text-[length:var(--text-xs)]">
        <span>{service.timeline}</span>
        <span>{service.startingPrice}</span>
      </div>
    </div>
  );
}

export default function ServicesOverview() {
  const featuredService = services.find(s => s.isHighlighted);
  const regularServices = services.filter(s => !s.isHighlighted);

  return (
    <section id="services" className="py-24 bg-[#000000] px-6">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-12">
          <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
            What I Build
          </span>
          <h2 className="heading-section font-[family-name:var(--font-display)] text-[#e8e8f0]">
            What We Build
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 max-w-2xl">
            WordPress, Shopify, Next.js, Wix Studio, and custom-coded — the right platform for every business goal. Mobile-first. SEO & AEO-optimised. Transparent pricing.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 anim-stagger">
          
          {/* Featured Card (Spans 2 columns on desktop/tablet) */}
          {featuredService && (
            <FeaturedServiceCard service={featuredService} />
          )}

          {/* Regular Cards */}
          {regularServices.map((service) => (
            <RegularServiceCard key={service.id} service={service} />
          ))}

        </div>

        {/* Section CTA */}
        <div className="mt-16 flex justify-center">
          <Link 
            href="#contact" 
            className="flex items-center justify-center min-h-[48px] px-8 py-4 bg-[#b5ff3e] text-[#000000] rounded-full hover:bg-[#00e5e5] hover:shadow-[var(--glow-sm)] active:scale-95 transition-all duration-300 text-[length:var(--text-sm)] font-semibold"
          >
            Book a Call →
          </Link>
        </div>
      </div>
    </section>
  );
}
