'use client';

import React from 'react';
import Link from 'next/link';
import { Service } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services: Service[] = [
  {
    id: 'platform-website',
    title: 'Platform Website (Shopify / Wix Studio)',
    description: 'Already on Shopify just to showcase your brand — not to sell? You could be paying ₹2,000/month when ₹450/month does the same job beautifully. I migrate your Shopify site to Wix Studio with identical design and save you ₹18,000+ every year. Best for manufacturers, exporters, and local businesses that need trust-building online presence — not an online store.',
    category: 'web-app',
    features: [
      'Shopify → Wix Studio migration',
      'Identical design & layout preserved',
      'Save ₹18,000+/year on platform cost',
      'Editable by your team after delivery',
      'New platform websites from scratch',
      'Webflow / Framer builds available'
    ],
    timeline: '1–3 weeks',
    startingPrice: 'From ₹15,000',
    icon: 'Layout',
    isHighlighted: true
  },
  {
    id: 'custom-website',
    title: 'Custom Coded Website',
    description: 'For businesses that need speed, SEO performance, and custom functionality — built from scratch with Next.js or plain HTML/CSS. No templates, no page builders. Deployed on Vercel for near-zero hosting cost.',
    category: 'web-app',
    features: [
      'Next.js / HTML + CSS builds',
      'Mobile-first & SEO optimised',
      'Deployed free on Vercel',
      'Contact forms & booking flows'
    ],
    timeline: '2–5 weeks',
    startingPrice: 'From ₹20,000',
    icon: 'Code'
  },
  {
    id: 'ai-image-generation',
    title: 'AI Image Generation',
    description: 'Need product photos, website banners, or marketing creatives but don\'t have a photography budget? I generate studio-quality images from your raw product photos — fast, affordable, and brand-consistent. Specialised in home furnishing, fabric, and lifestyle brands.',
    category: 'ai-integration',
    features: [
      'Website banners from fabric photos',
      'Product photography alternative',
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
    description: 'An intelligent chatbot trained on your business — products, pricing, FAQs, contact details. Handles visitor queries 24/7 in Hindi, Hinglish, or English. Captures leads even when you\'re offline.',
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
    description: 'Connect your website with WhatsApp, CRM, Google Sheets, payment gateways, or booking calendars. Automate lead notifications, form responses, and appointment confirmations. Available as add-on to any project.',
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
      <div className="flex-1 flex flex-col">
        <div className="w-10 h-10 bg-[#b5ff3e]/[0.08] rounded-lg flex items-center justify-center mb-4">
          <span className="text-[#b5ff3e] text-[length:var(--text-xs)] font-mono">{service.icon}</span>
        </div>
        <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-[length:var(--text-lg)]">
          {service.title}
        </h3>
        <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] mt-2 leading-relaxed">
          {service.description}
        </p>
        
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#b5ff3e]/40 flex-shrink-0" />
              <span className="text-[#44445a] text-[length:var(--text-xs)]">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[#44445a] text-[length:var(--text-xs)]">Timeline: {service.timeline}</span>
            <span className="text-[#44445a] text-[length:var(--text-xs)]">Starts at: {service.startingPrice}</span>
          </div>
          <Link 
            href={`/services/${service.id}`}
            className="text-[#b5ff3e] text-[length:var(--text-sm)] font-medium hover:text-[#00e5e5] transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
      
      {/* Code Mockup Column */}
      <div className="hidden lg:flex flex-1 items-center justify-center">
        <pre className="bg-[#111111] text-[#b5ff3e] text-[length:var(--text-xs)] p-6 rounded-xl border border-white/[0.05] w-full overflow-x-auto">
          <code>
{`model Tenant {
  id        String   @id @default(cuid())
  name      String
  tier      PlanTier @default(STARTER)
  users     User[]
  createdAt DateTime @default(now())
}`}
          </code>
        </pre>
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
      <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-[length:var(--text-base)]">
        {service.title}
      </h3>
      <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] mt-2 leading-relaxed flex-1">
        {service.description}
      </p>
      
      <div className="mt-4 flex flex-col gap-2">
        {service.features.slice(0, 3).map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#b5ff3e]/40 flex-shrink-0" />
            <span className="text-[#44445a] text-[length:var(--text-xs)] truncate">{feature}</span>
          </div>
        ))}
        {service.features.length > 3 && (
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-transparent flex-shrink-0" />
            <span className="text-[#44445a] text-[length:var(--text-xs)] italic">+ {service.features.length - 3} more</span>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-5 pt-4 border-t border-white/[0.05] text-[#44445a] text-[length:var(--text-xs)]">
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
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
            What I Build
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-xl)]">
            Services for Indian B2B Brands
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 max-w-2xl">
            Website. Chatbot. Images. Automation. One person. Transparent pricing.
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
