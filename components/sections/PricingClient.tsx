'use client';

import React, { useState } from 'react';

const oneTimePackages = [
  {
    id: "wordpress",
    name: "WordPress Website",
    subtitle: "Self-hosted · PHP · Your Domain",
    price: "₹6,000",
    priceNote: "One-time. You own it outright.",
    timeline: "2–3 weeks",
    isPopular: true,
    badge: "Most Popular",
    description: "For service businesses, agencies, blogs, and SEO-driven brands that need a professional website they can manage themselves.",
    includes: [
      "Up to 4 pages",
      "Mobile-first, SEO-ready build",
      "Easy CMS — your team can update it",
      "Contact form + WhatsApp button",
      "1,000+ plugin ecosystem",
      "2 revision rounds",
      "2-week post-launch support",
      "All logins & IP handed over"
    ],
    notIncluded: [
      "E-commerce / checkout (use Shopify instead)",
      "Fully managed zero-maintenance solution"
    ],
    cta: "Get a Quote →",
    ctaHref: "https://wa.me/919599143235"
  },
  {
    id: "shopify",
    name: "Shopify Store",
    subtitle: "D2C · Product Sellers · E-Commerce",
    price: "₹15,000",
    priceNote: "One-time setup. Shopify plan paid to Shopify.",
    timeline: "2–4 weeks",
    isPopular: false,
    badge: "E-Commerce",
    badgeColor: "default",
    description: "For D2C brands and product sellers who need inventory, payments, and an optimised checkout flow.",
    includes: [
      "Full product catalogue setup",
      "Payment & shipping configured",
      "Optimised checkout to reduce drop-offs",
      "Multi-currency support",
      "2 revision rounds",
      "2-week post-launch support"
    ],
    notIncluded: [
      "Non-e-commerce sites (use WordPress or Wix)",
      "Monthly Shopify plan (₹2,000/mo, paid to Shopify)"
    ],
    cta: "Get a Quote →",
    ctaHref: "https://wa.me/919599143235"
  },
  {
    id: "wix",
    name: "Wix Studio Website",
    subtitle: "Local Businesses · Clinics · Restaurants",
    price: "₹10,000",
    priceNote: "One-time. Wix plan ₹450/mo paid to Wix.",
    timeline: "2–3 weeks",
    isPopular: false,
    badge: "Fastest Launch",
    badgeColor: "default",
    description: "For local businesses, clinics, and restaurants that want a polished site they can fully self-manage without a developer.",
    includes: [
      "Visual builder — edit anything yourself",
      "Fast delivery, professional design",
      "Contact form + booking integration",
      "Shopify migration available",
      "2 revision rounds",
      "2-week post-launch support"
    ],
    notIncluded: [
      "Complex custom code or deep API integrations",
      "Platform plan cost (₹450/mo paid to Wix)"
    ],
    cta: "Get a Quote →",
    ctaHref: "https://wa.me/919599143235"
  },
  {
    id: "nextjs",
    name: "Custom Next.js Website",
    subtitle: "Next.js · Vercel · Zero Hosting Cost",
    price: "₹15,000",
    priceNote: "One-time. ₹0 hosting on Vercel — forever.",
    timeline: "3–5 weeks",
    isPopular: false,
    badge: "Max Performance",
    badgeColor: "default",
    description: "For performance-critical sites and custom web apps. Built from scratch — no templates, no page builders, no platform lock-in.",
    includes: [
      "Up to 10 pages, built from scratch",
      "Near-perfect Google PageSpeed scores",
      "Free hosting on Vercel",
      "SEO metadata + sitemap + robots.txt",
      "100% code ownership transferred",
      "2 revision rounds",
      "2-week post-launch support"
    ],
    notIncluded: [
      "AI chatbot (available as add-on +₹12,000)",
      "Not suited for very fast, low-budget turnarounds"
    ],
    cta: "Get a Quote →",
    ctaHref: "https://wa.me/919599143235"
  },
  {
    id: "ai-chatbot",
    name: "AI Chatbot",
    subtitle: "Hindi · Hinglish · English",
    price: "₹12,000",
    priceNote: "One-time setup. Hosting varies.",
    timeline: "1–3 weeks",
    isPopular: false,
    badge: "Unique in India",
    badgeColor: "cyan",
    description: "An intelligent chatbot trained on your business — products, pricing, FAQs. Handles queries 24/7. Captures leads when you're offline.",
    includes: [
      "Trained on your business data",
      "Hindi, Hinglish & English support",
      "Lead capture & qualification",
      "Website widget (1-line embed)",
      "WhatsApp handoff integration",
      "Up to 50 Q&A pairs in training",
      "1 revision round after testing"
    ],
    notIncluded: [
      "Website build (available as add-on)",
      "CRM integration (available as add-on +₹8,000)"
    ],
    cta: "Get a Quote →",
    ctaHref: "https://wa.me/919599143235"
  },
  {
    id: "ai-images",
    name: "AI Image Generation",
    subtitle: "Product Photos · Banners · Lifestyle",
    price: "₹3,000",
    priceNote: "Per batch of 30–50 images.",
    timeline: "3–5 days",
    isPopular: false,
    badge: "Add-on",
    badgeColor: "default",
    description: "Studio-quality product photos, banners, and lifestyle visuals from your raw images. No photographer needed.",
    includes: [
      "30–50 images per batch",
      "Lifestyle backgrounds & room settings",
      "Brand-consistent style throughout",
      "Web-optimised exports (WebP + JPG)",
      "2 style revisions per batch",
      "Bulk batches available (discount applied)"
    ],
    notIncluded: [
      "Physical photography or videography",
      "Logo or branding design"
    ],
    cta: "Order a Sample Batch →",
    ctaHref: "https://wa.me/919599143235"
  },
  {
    id: "automation",
    name: "Automation & Integrations",
    subtitle: "WhatsApp · CRM · Bookings · Payments",
    price: "₹8,000",
    priceNote: "Per integration. Add-on to any project.",
    timeline: "3–7 days",
    isPopular: false,
    badge: "Add-on",
    badgeColor: "purple",
    description: "Connect your website to WhatsApp, CRM, Google Sheets, payment gateways, and booking calendars. Automate lead flow end-to-end.",
    includes: [
      "WhatsApp + email notifications",
      "Google Sheets / CRM sync",
      "Razorpay / Stripe payment setup",
      "Calendar & booking integration",
      "Form-to-CRM automation",
      "Testing + documentation"
    ],
    notIncluded: [
      "Monthly API costs (paid to third parties)",
      "Website build (quoted separately)"
    ],
    cta: "Discuss Your Needs →",
    ctaHref: "https://wa.me/919599143235"
  }
];

const retainers = [
  {
    name: "Monthly Care Plan",
    price: "₹3,500/mo",
    description: "For clients who want ongoing support after launch.",
    includes: [
      "Up to 4 hours of changes/month",
      "Priority WhatsApp support",
      "Monthly performance report",
      "Minor content & image updates"
    ],
    cta: "Ask About Care Plan"
  },
  {
    name: "Growth Retainer",
    price: "₹8,000/mo",
    description: "For businesses actively growing their digital presence.",
    includes: [
      "Up to 10 hours of dev/month",
      "New pages & feature additions",
      "SEO updates & blog publishing",
      "Chatbot retraining as needed",
      "Monthly strategy call (30 min)"
    ],
    cta: "Ask About Growth Plan"
  }
];

const comparisonData = [
  { feature: "Fixed-price quote upfront", sitecraf: true, freelancer: false, diy: false, agency: false },
  { feature: "Mobile-first & SEO optimised", sitecraf: true, freelancer: false, diy: false, agency: true },
  { feature: "AI chatbot add-on available", sitecraf: true, freelancer: false, diy: false, agency: true },
  { feature: "AI image generation", sitecraf: true, freelancer: false, diy: false, agency: false },
  { feature: "100% IP ownership to you", sitecraf: true, freelancer: true, diy: true, agency: false },
  { feature: "Hindi/Hinglish chatbot", sitecraf: true, freelancer: false, diy: false, agency: false },
  { feature: "Post-launch support included", sitecraf: "2 wks free", freelancer: false, diy: false, agency: "₹ extra" },
  { feature: "Avg. delivery time", sitecraf: "2–3 wks", freelancer: "4–10 wks", diy: "1–2 wks", agency: "6–12 wks" },
  { feature: "No GST charged", sitecraf: true, freelancer: false, diy: false, agency: false },
  { feature: "Typical project cost", sitecraf: "₹6K–₹60K", freelancer: "₹5K–₹20K", diy: "₹500–₹5K/mo", agency: "₹1L–₹5L+" }
];

const faqs = [
  {
    q: "Why is the quote fixed? What if my project grows in scope?",
    a: "Fixed pricing protects both sides. Your quote is based on a clear written scope. If you want to add features not in the original scope, we quote those separately — you always approve before we start additional work."
  },
  {
    q: "Is the 50% upfront payment refundable?",
    a: "The upfront payment is used to begin work immediately — research, design, and setup. If you cancel before we deliver any design files or previews, we refund 75% of the upfront. After design approval, the deposit is non-refundable."
  },
  {
    q: "Do you charge GST?",
    a: "No. We are not GST-registered, so there is no GST added to your invoice. What you see in the quote is exactly what you pay — nothing more."
  },
  {
    q: "What payment methods do you accept?",
    a: "UPI, bank transfer (NEFT/RTGS/IMPS), Razorpay (cards, net banking, wallets), and international payments via Wise or Payoneer. We do not accept cash."
  },
  {
    q: "Can I get a discount if I bundle multiple services?",
    a: "Yes. If you order a website + AI chatbot together, or a website + AI images together, we offer a bundled discount of ₹2,000–₹5,000 depending on the combination. Ask on WhatsApp before placing your order."
  },
  {
    q: "What happens if I'm not satisfied with the final result?",
    a: "Every project includes 2 revision rounds where you can request changes. We work until you're satisfied within the agreed scope. If there's a genuine quality issue, we fix it free of charge."
  },
  {
    q: "Do I need to pay for hosting separately?",
    a: "For custom Next.js websites deployed on Vercel — hosting is free, forever. For Wix Studio, the platform plan (₹450/mo) is paid directly to Wix by you. For WordPress, hosting is typically ₹200–₹500/mo paid to your host of choice. We don't mark up hosting costs."
  },
  {
    q: "Can I pay in USD or another currency?",
    a: "Yes. International clients can pay in USD, GBP, EUR, or AED via Wise or Payoneer. The price is converted at the day's live exchange rate — no hidden forex markup."
  }
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-success)] mt-0.5 flex-shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CrossIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text-faint)] mt-0.5 flex-shrink-0">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function PricingClient() {
  const [billingTab, setBillingTab] = useState('one-time');

  const websitePackages = oneTimePackages.slice(0, 4);
  const aiPackages = oneTimePackages.slice(4, 7);

  return (
    <>
      {/* SECTION 2 — Billing Toggle + Pricing Cards */}
      <section aria-label="Pricing Packages" className="w-full py-16 px-6 bg-[var(--color-bg)]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">

          {/* TOGGLE */}
          <div className="flex justify-center mb-12 anim-reveal is-visible">
            <div className="inline-flex bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full p-1 gap-1">
              <button
                onClick={() => setBillingTab('one-time')}
                className={billingTab === 'one-time'
                  ? 'bg-[var(--color-primary)] text-[#000000] rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200'
                  : 'text-[var(--color-text-muted)] rounded-full px-6 py-2 text-sm hover:text-[var(--color-text)] transition-colors duration-200'}
              >
                One-Time Projects
              </button>
              <button
                onClick={() => setBillingTab('retainer')}
                className={billingTab === 'retainer'
                  ? 'bg-[var(--color-primary)] text-[#000000] rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200'
                  : 'text-[var(--color-text-muted)] rounded-full px-6 py-2 text-sm hover:text-[var(--color-text)] transition-colors duration-200'}
              >
                Monthly Retainers
              </button>
            </div>
          </div>

          {billingTab === 'one-time' ? (
            <div className="flex flex-col gap-8 anim-reveal is-visible">

              {/* Website Packages group label */}
              <div>
                <p className="text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-4">Website Packages</p>

                {/* Featured card — WordPress */}
                <div className="bg-[var(--color-surface)] border border-[var(--color-primary-border)] rounded-2xl p-8 lg:p-10 relative overflow-hidden mb-4">
                  <div className="inline-block mb-4 md:mb-0 md:absolute md:top-6 md:right-6 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--color-primary-border)]">
                    {oneTimePackages[0].badge}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mt-1 mb-1">
                        {oneTimePackages[0].name}
                      </h3>
                      <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] uppercase tracking-widest mb-4">{oneTimePackages[0].subtitle}</p>
                      <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] leading-relaxed mb-6">{oneTimePackages[0].description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                        {oneTimePackages[0].includes.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckIcon />
                            <span className="text-[var(--color-text)] text-[length:var(--text-sm)]">{item}</span>
                          </div>
                        ))}
                        {oneTimePackages[0].notIncluded.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CrossIcon />
                            <span className="text-[var(--color-text-faint)] text-[length:var(--text-sm)] line-through">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col justify-between gap-6">
                      <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-2xl p-8 text-center">
                        <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-2">Starting From</span>
                        <span className="text-[var(--color-primary)] font-bold font-[family-name:var(--font-display)] text-5xl">{oneTimePackages[0].price}</span>
                        <span className="block text-[var(--color-text-muted)] text-xs mt-2">{oneTimePackages[0].priceNote}</span>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                        <div>
                          <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Timeline</span>
                          <span className="text-[var(--color-text)] font-medium text-sm">{oneTimePackages[0].timeline}</span>
                        </div>
                        <a href={oneTimePackages[0].ctaHref} target="_blank" rel="noopener noreferrer"
                          className="bg-[var(--color-primary)] text-[#000000] rounded-full px-6 py-3 font-semibold text-sm hover:bg-[var(--color-primary-hover)] transition-colors duration-200">
                          {oneTimePackages[0].cta}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3-col grid — Shopify, Wix, Next.js */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {websitePackages.slice(1).map((pkg) => (
                    <div key={pkg.id} className="bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary-border)] rounded-2xl p-6 flex flex-col transition-colors duration-200">
                      <div className="mb-4">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-[length:var(--text-xs)] border ${pkg.badgeColor === 'cyan'
                          ? 'text-[var(--color-blue)] border-[var(--color-blue-highlight)] bg-[var(--color-blue)]/[0.08]'
                          : 'text-[var(--color-primary)] border-[var(--color-primary-border)] bg-[var(--color-primary)]/[0.08]'
                          }`}>
                          {pkg.badge}
                        </span>
                        <h3 className="text-[length:var(--text-base)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mt-3 mb-1">{pkg.name}</h3>
                        <p className="text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest">{pkg.subtitle}</p>
                      </div>

                      <div className="py-4 border-y border-[var(--color-border)] mb-4">
                        <span className="text-[var(--color-primary)] font-bold font-[family-name:var(--font-display)] text-3xl">{pkg.price}</span>
                        <span className="block text-[var(--color-text-muted)] text-[10px] mt-1">{pkg.priceNote}</span>
                      </div>

                      <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] leading-relaxed mb-4">{pkg.description}</p>

                      <div className="flex-1 flex flex-col gap-2 mb-6">
                        {pkg.includes.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckIcon />
                            <span className="text-[var(--color-text)] text-[length:var(--text-xs)]">{item}</span>
                          </div>
                        ))}
                        {pkg.notIncluded.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CrossIcon />
                            <span className="text-[var(--color-text-faint)] text-[length:var(--text-xs)] line-through">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)] mt-auto">
                        <span className="text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest">{pkg.timeline}</span>
                        <a href={pkg.ctaHref} target="_blank" rel="noopener noreferrer"
                          className="text-[var(--color-primary)] border border-[var(--color-primary-border)] rounded-full px-4 py-2 text-[length:var(--text-xs)] font-semibold hover:bg-[var(--color-primary)]/[0.08] transition-colors duration-200">
                          {pkg.cta}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI & Automation group label */}
              <div>
                <p className="text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-4">AI & Automation Add-ons</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {aiPackages.map((pkg) => (
                    <div key={pkg.id} className="bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary-border)] rounded-2xl p-6 flex flex-col transition-colors duration-200">
                      <div className="mb-4">
                        <span className={`inline-block px-2.5 py-1 rounded-full text-[length:var(--text-xs)] border ${pkg.badgeColor === 'cyan'
                          ? 'text-[var(--color-blue)] border-[var(--color-blue-highlight)] bg-[var(--color-blue)]/[0.08]'
                          : pkg.badgeColor === 'purple'
                            ? 'text-[var(--color-purple)] border-[var(--color-purple-highlight)] bg-[var(--color-purple)]/[0.08]'
                            : 'text-[var(--color-primary)] border-[var(--color-primary-border)] bg-[var(--color-primary)]/[0.08]'
                          }`}>
                          {pkg.badge}
                        </span>
                        <h3 className="text-[length:var(--text-base)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mt-3 mb-1">{pkg.name}</h3>
                        <p className="text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest">{pkg.subtitle}</p>
                      </div>

                      <div className="py-4 border-y border-[var(--color-border)] mb-4">
                        <span className="text-[var(--color-primary)] font-bold font-[family-name:var(--font-display)] text-3xl">{pkg.price}</span>
                        <span className="block text-[var(--color-text-muted)] text-[10px] mt-1">{pkg.priceNote}</span>
                      </div>

                      <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] leading-relaxed mb-4">{pkg.description}</p>

                      <div className="flex-1 flex flex-col gap-2 mb-6">
                        {pkg.includes.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckIcon />
                            <span className="text-[var(--color-text)] text-[length:var(--text-xs)]">{item}</span>
                          </div>
                        ))}
                        {pkg.notIncluded.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CrossIcon />
                            <span className="text-[var(--color-text-faint)] text-[length:var(--text-xs)] line-through">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)] mt-auto">
                        <span className="text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest">{pkg.timeline}</span>
                        <a href={pkg.ctaHref} target="_blank" rel="noopener noreferrer"
                          className="text-[var(--color-primary)] border border-[var(--color-primary-border)] rounded-full px-4 py-2 text-[length:var(--text-xs)] font-semibold hover:bg-[var(--color-primary)]/[0.08] transition-colors duration-200">
                          {pkg.cta}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            <div className="anim-reveal is-visible">
              <p className="text-[var(--color-text-muted)] text-sm max-w-lg mx-auto text-center mb-10">
                Retainers are for existing clients or new clients who want ongoing support. No long-term lock-in — pause or cancel with 15 days notice.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {retainers.map((plan, idx) => (
                  <div key={idx} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 flex flex-col">
                    <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)]">{plan.name}</h3>
                    <div className="text-[var(--color-primary)] font-bold text-2xl font-[family-name:var(--font-display)] mt-3">{plan.price}</div>
                    <p className="text-[var(--color-text-muted)] text-sm mt-3">{plan.description}</p>
                    <div className="mt-6 flex-1 flex flex-col gap-3">
                      {plan.includes.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckIcon />
                          <span className="text-[var(--color-text)] text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer"
                      className="mt-8 border border-[var(--color-primary-border)] text-[var(--color-primary)] rounded-full px-5 py-3 text-sm font-semibold hover:bg-[var(--color-primary)]/[0.08] transition-colors w-full text-center">
                      {plan.cta} →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3 — What's Always Included */}
      <section aria-label="What's Always Included" className="w-full py-16 px-6 bg-[var(--color-surface)]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">

          {/* Header */}
          <div className="mb-10 anim-reveal is-visible">
            <span className="block text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
              Included in Every Project
            </span>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)] mb-3">
              No matter which service you choose
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-base)] max-w-2xl">
              These are non-negotiables — baked into every project, at every price point.
            </p>
          </div>

          {/* Trust items — 2-col on mobile, 3-col on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>

            {/* High-priority items — larger visual weight */}
            <div className="bg-[var(--color-surface-2)] border border-[var(--color-primary-border)] rounded-xl p-6 flex items-start gap-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="font-[family-name:var(--font-display)] font-semibold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">₹0 Hidden Charges</p>
                <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] leading-relaxed">What you see in the quote is exactly what you pay. No surprises on the final invoice.</p>
              </div>
            </div>

            <div className="bg-[var(--color-surface-2)] border border-[var(--color-primary-border)] rounded-xl p-6 flex items-start gap-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <p className="font-[family-name:var(--font-display)] font-semibold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">Fixed Quote Upfront</p>
                <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] leading-relaxed">You receive a written fixed-price quote before any work begins. No hourly billing, ever.</p>
              </div>
            </div>

            <div className="bg-[var(--color-surface-2)] border border-[var(--color-primary-border)] rounded-xl p-6 flex items-start gap-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <div>
                <p className="font-[family-name:var(--font-display)] font-semibold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">50% Only After Approval</p>
                <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] leading-relaxed">Second payment only after you have seen and approved the finished work. Not before.</p>
              </div>
            </div>

            {/* Standard items — normal visual weight */}
            <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl p-6 flex items-start gap-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <div>
                <p className="font-[family-name:var(--font-display)] font-semibold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">100% IP Ownership</p>
                <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] leading-relaxed">Every file, every line of code — transferred to you on final payment. No lock-in.</p>
              </div>
            </div>

            <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl p-6 flex items-start gap-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-[family-name:var(--font-display)] font-semibold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">2 Weeks Post-Launch Support</p>
                <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] leading-relaxed">Free fixes and small tweaks for two weeks after your site goes live. No extra charge.</p>
              </div>
            </div>

            <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-xl p-6 flex items-start gap-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)] flex-shrink-0 mt-0.5">
                <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <div>
                <p className="font-[family-name:var(--font-display)] font-semibold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">No GST Charged</p>
                <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] leading-relaxed">We are not GST-registered. Your invoice total is your final payment — nothing added on top.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4 — Comparison Table */}
      <section aria-label="Comparison Table" className="w-full py-16 px-6 bg-[var(--color-bg)]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">

          {/* Header */}
          <div className="mb-10 anim-reveal is-visible">
            <span className="block text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
              How We Compare
            </span>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)] mb-3">
              Pick what&apos;s right for your business
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-base)] max-w-2xl">
              An honest look at how Sitecraf compares to the alternatives — so you can make the right call.
            </p>
          </div>

          {/* Table — horizontal scroll on mobile */}
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-border)] anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
            <table className="w-full min-w-[640px] text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="py-4 px-6 text-[var(--color-text-muted)] text-[length:var(--text-xs)] uppercase tracking-widest font-medium w-[32%] bg-[var(--color-surface)]">
                    Feature
                  </th>
                  <th className="py-4 px-6 text-[length:var(--text-xs)] uppercase tracking-widest font-semibold w-[17%] bg-[var(--color-primary)]/[0.06] text-[var(--color-primary)] border-x border-[var(--color-primary-border)]">
                    Sitecraf
                  </th>
                  <th className="py-4 px-6 text-[var(--color-text-muted)] text-[length:var(--text-xs)] uppercase tracking-widest font-medium w-[17%] bg-[var(--color-surface)]">
                    Freelancer
                  </th>
                  <th className="py-4 px-6 text-[var(--color-text-muted)] text-[length:var(--text-xs)] uppercase tracking-widest font-medium w-[17%] bg-[var(--color-surface)]">
                    DIY Builder
                  </th>
                  <th className="py-4 px-6 text-[var(--color-text-muted)] text-[length:var(--text-xs)] uppercase tracking-widest font-medium w-[17%] bg-[var(--color-surface)]">
                    Agency
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-[var(--color-border)] last:border-0 ${idx % 2 === 0 ? 'bg-[var(--color-bg)]' : 'bg-[var(--color-surface)]'}`}
                  >
                    <td className="py-4 px-6 text-[var(--color-text)] text-[length:var(--text-sm)]">
                      {row.feature}
                    </td>
                    {/* Sitecraf — highlighted column */}
                    <td className="py-4 px-6 bg-[var(--color-primary)]/[0.06] border-x border-[var(--color-primary-border)]">
                      {row.sitecraf === true ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-success)]">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : row.sitecraf === false ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text-faint)]">
                          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      ) : (
                        <span className="text-[var(--color-primary)] font-semibold text-[length:var(--text-xs)]">{row.sitecraf}</span>
                      )}
                    </td>
                    {/* Freelancer */}
                    <td className="py-4 px-6">
                      {row.freelancer === true ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-success)]">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : row.freelancer === false ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text-faint)]">
                          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      ) : (
                        <span className="text-[var(--color-text-muted)] text-[length:var(--text-xs)]">{row.freelancer}</span>
                      )}
                    </td>
                    {/* DIY */}
                    <td className="py-4 px-6">
                      {row.diy === true ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-success)]">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : row.diy === false ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text-faint)]">
                          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      ) : (
                        <span className="text-[var(--color-text-muted)] text-[length:var(--text-xs)]">{row.diy}</span>
                      )}
                    </td>
                    {/* Agency */}
                    <td className="py-4 px-6">
                      {row.agency === true ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-success)]">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : row.agency === false ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text-faint)]">
                          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      ) : (
                        <span className="text-[var(--color-text-muted)] text-[length:var(--text-xs)]">{row.agency}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footnote */}
          <p className="text-[var(--color-text-faint)] text-[length:var(--text-xs)] mt-4 anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            Based on market research. Freelancer and agency costs vary widely. Last updated 2026.
          </p>

        </div>
      </section>

      {/* SECTION 5 — Pricing FAQ */}
      <section aria-label="Pricing FAQ" className="w-full py-16 px-6 bg-[var(--color-surface)]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">

          {/* Header — left aligned */}
          <div className="mb-10 anim-reveal is-visible">
            <span className="block text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
              Pricing FAQ
            </span>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)] mb-3">
              Questions we get asked every week
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-base)] max-w-2xl">
              Honest answers about money, timelines, and what happens if things go wrong.
            </p>
          </div>

          {/* FAQ Accordions */}
          <div className="flex flex-col anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
            {faqs.map((faq, idx) => (
              <details key={idx} className="group border-b border-[var(--color-border)] py-5">
                <summary className="text-[var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 flex-shrink-0 ml-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-[var(--color-text-muted)] mt-3 leading-relaxed pt-2">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          {/* Inline nudge */}
          <div className="pt-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)]">
              Still have a question not answered above?
            </p>
            <a
              href="https://wa.me/919599143235"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] border border-[var(--color-primary-border)] rounded-full px-5 py-2 text-[length:var(--text-sm)] font-semibold hover:bg-[var(--color-primary)]/[0.08] transition-colors duration-200 flex-shrink-0"
            >
              Ask on WhatsApp →
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 6 — Final CTA */}
      <section aria-label="Get in Touch" className="w-full py-20 px-6 bg-[var(--color-bg)]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">

          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 anim-reveal is-visible">

            {/* Left — Copy */}
            <div className="max-w-xl">
              <span className="block text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
                Ready to Start?
              </span>
              <h2 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)] mb-4">
                Most clients hear back<br />
                <span className="text-[var(--color-primary)]">within 2 hours.</span>
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-base)] leading-relaxed mb-6">
                Tell us what you need on WhatsApp — we&apos;ll send a fixed quote, no obligation.
                No discovery calls, no lengthy forms. Just a clear price and a start date.
              </p>

              {/* Trust strip */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  "Fixed quote in writing",
                  "No GST",
                  "50% only after approval",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[var(--color-text-muted)] text-[length:var(--text-xs)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTAs + social proof */}
            <div className="flex flex-col items-start md:items-end gap-6 flex-shrink-0">

              {/* Primary CTA */}
              <a
                href="https://wa.me/919599143235"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-[#000000] rounded-full px-7 py-3.5 font-semibold text-[length:var(--text-sm)] hover:bg-[var(--color-primary-hover)] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.5 2C6.253 2 2 6.253 2 11.5c0 1.938.573 3.745 1.557 5.254L2 22l5.412-1.538A9.451 9.451 0 0011.5 21C16.747 21 21 16.747 21 11.5S16.747 2 11.5 2z" />
                </svg>
                Chat on WhatsApp
              </a>

              {/* Secondary CTA */}
              <a
                href="mailto:hello@sitecraf.com"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] border border-[var(--color-primary-border)] rounded-full px-7 py-3.5 font-semibold text-[length:var(--text-sm)] hover:bg-[var(--color-primary)]/[0.08] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                Email Us Instead
              </a>

              {/* Social proof */}
              <p className="text-[var(--color-text-faint)] text-[length:var(--text-xs)] text-right max-w-[220px]">
                Typically reply within 2 hours<br />Mon–Sat, 9 AM – 9 PM IST
              </p>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
