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
      "Up to 8 pages",
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const websitePackages = oneTimePackages.slice(0, 4);
  const aiPackages = oneTimePackages.slice(4, 7);

  return (
    <>
      {/* SECTION 2 — Billing Toggle + Pricing Cards */}
      <section aria-label="Pricing Packages" className="w-full py-16 px-6 bg-[var(--color-bg)]">
        <div className="w-full md:w-[80%] max-w-none mx-auto">

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
                  <div className="absolute top-6 right-6 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--color-primary-border)]">
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
                        <span className={`inline-block px-2.5 py-1 rounded-full text-[length:var(--text-xs)] border ${
                          pkg.badgeColor === 'cyan'
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
                        <span className={`inline-block px-2.5 py-1 rounded-full text-[length:var(--text-xs)] border ${
                          pkg.badgeColor === 'cyan'
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

      {/* SECTION 3 — "What's Always Included" Strip */}
      <section aria-label="What's Included" className="w-full py-14 bg-[#0a0a0a] text-center">
        <div className="max-w-[var(--content-wide)] mx-auto px-6 anim-reveal is-visible">
          <span className="text-[#b5ff3e] text-xs uppercase tracking-widest block mb-2">Every Project, No Exceptions</span>
          <h2 className="heading-section font-[family-name:var(--font-display)] text-[#e8e8f0] mb-10">
            What you always get — regardless of package
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
            <div className="bg-[#111111] border border-white/[0.06] rounded-xl p-5 flex flex-col items-center">
              <svg className="w-6 h-6 text-[#b5ff3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-[#8888a0] text-xs text-center mt-2">₹0 Hidden Charges</span>
            </div>
            <div className="bg-[#111111] border border-white/[0.06] rounded-xl p-5 flex flex-col items-center">
              <svg className="w-6 h-6 text-[#b5ff3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-[#8888a0] text-xs text-center mt-2">Fixed Quote Upfront</span>
            </div>
            <div className="bg-[#111111] border border-white/[0.06] rounded-xl p-5 flex flex-col items-center">
              <svg className="w-6 h-6 text-[#b5ff3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="text-[#8888a0] text-xs text-center mt-2">100% IP Ownership</span>
            </div>
            <div className="bg-[#111111] border border-white/[0.06] rounded-xl p-5 flex flex-col items-center">
              <svg className="w-6 h-6 text-[#b5ff3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[#8888a0] text-xs text-center mt-2">2-Wk Post-Launch Support</span>
            </div>
            <div className="bg-[#111111] border border-white/[0.06] rounded-xl p-5 flex flex-col items-center">
              <svg className="w-6 h-6 text-[#b5ff3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-[#8888a0] text-xs text-center mt-2">WhatsApp Communication</span>
            </div>
            <div className="bg-[#111111] border border-white/[0.06] rounded-xl p-5 flex flex-col items-center">
              <svg className="w-6 h-6 text-[#b5ff3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span className="text-[#8888a0] text-xs text-center mt-2">No GST Charged</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Comparison Table */}
      <section aria-label="Comparison Table" className="w-full py-20 bg-[#000000]">
        <div className="max-w-[var(--content-wide)] mx-auto px-6 anim-reveal is-visible">
          <span className="block text-[#b5ff3e] text-xs uppercase tracking-widest mb-2">How We Compare</span>
          <h2 className="heading-section font-[family-name:var(--font-display)] text-[#e8e8f0] mb-3">
            Why Sitecraf beats the alternatives
          </h2>
          <p className="text-[#8888a0] text-lg max-w-2xl">
            An honest breakdown — so you can choose with full information.
          </p>

          <div className="overflow-x-auto mt-10 pb-4 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-[#111111] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#b5ff3e] [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] min-w-[680px]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#111111]">
                    <th className="text-[#66667a] text-xs uppercase tracking-widest px-6 py-4 text-left font-normal w-[35%]">
                      Feature
                    </th>
                    <th className="text-[#b5ff3e] text-xs uppercase tracking-widest px-6 py-4 text-center font-normal bg-[#b5ff3e]/[0.04] border-x border-[#b5ff3e]/[0.12]">
                      Sitecraf ★
                    </th>
                    <th className="text-[#66667a] text-xs uppercase tracking-widest px-6 py-4 text-center font-normal">
                      Cheap Freelancer
                    </th>
                    <th className="text-[#66667a] text-xs uppercase tracking-widest px-6 py-4 text-center font-normal">
                      DIY Builder
                    </th>
                    <th className="text-[#66667a] text-xs uppercase tracking-widest px-6 py-4 text-center font-normal">
                      Web Agency
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className={`${idx % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#111111]'} hover:bg-[#1c1c28] transition-colors duration-200`}>
                      <td className="px-6 py-4 text-[#e8e8f0] text-sm border-t border-white/[0.04]">{row.feature}</td>
                      <td className="px-6 py-4 text-center bg-[#b5ff3e]/[0.04] border-x border-[#b5ff3e]/[0.12] border-t border-white/[0.04]">
                        {typeof row.sitecraf === 'boolean' 
                          ? (row.sitecraf ? <span className="text-[#22c55e] font-bold">✓</span> : <span className="text-[#ef4444] font-bold">✗</span>)
                          : <span className="text-[#b5ff3e] font-semibold text-sm">{row.sitecraf}</span>}
                      </td>
                      <td className="px-6 py-4 text-center border-t border-white/[0.04]">
                        {typeof row.freelancer === 'boolean' 
                          ? (row.freelancer ? <span className="text-[#22c55e] font-bold">✓</span> : <span className="text-[#ef4444] font-bold">✗</span>)
                          : <span className="text-[#8888a0] text-sm">{row.freelancer}</span>}
                      </td>
                      <td className="px-6 py-4 text-center border-t border-white/[0.04]">
                        {typeof row.diy === 'boolean' 
                          ? (row.diy ? <span className="text-[#22c55e] font-bold">✓</span> : <span className="text-[#ef4444] font-bold">✗</span>)
                          : <span className="text-[#8888a0] text-sm">{row.diy}</span>}
                      </td>
                      <td className="px-6 py-4 text-center border-t border-white/[0.04]">
                        {typeof row.agency === 'boolean' 
                          ? (row.agency ? <span className="text-[#22c55e] font-bold">✓</span> : <span className="text-[#ef4444] font-bold">✗</span>)
                          : <span className="text-[#8888a0] text-sm">{row.agency}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <p className="text-[#66667a] text-xs text-center mt-4">
            ★ Comparison based on typical India market rates, 2025. DIY = Wix free plan / Canva websites.
          </p>
        </div>
      </section>

      {/* SECTION 5 — FAQ (Pricing-specific) */}
      <section aria-label="Pricing FAQs" className="w-full py-20 bg-[#0a0a0a]">
        <div className="max-w-[var(--content-wide)] mx-auto px-6 anim-reveal is-visible">
          <span className="block text-[#b5ff3e] text-xs uppercase tracking-widest mb-2">Pricing FAQs</span>
          <h2 className="heading-section font-[family-name:var(--font-display)] text-[#e8e8f0] mb-10">
            Every pricing question — answered
          </h2>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-white/[0.05] py-5 cursor-pointer" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                <div className="flex justify-center items-center relative">
                  <h3 className={`heading-sub font-[family-name:var(--font-display)] transition-colors text-center pr-8 pl-8 ${openFaq === idx ? 'text-[#b5ff3e]' : 'text-[#e8e8f0] hover:text-[#b5ff3e]'}`}>
                    {faq.q}
                  </h3>
                  <svg className={`absolute right-0 w-4 h-4 text-[#66667a] transition-transform duration-300 flex-shrink-0 ${openFaq === idx ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[#8888a0] text-sm leading-relaxed pb-2 text-center">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — "Not Sure Which Plan?" CTA Banner */}
      <section aria-label="Not Sure Which Plan" className="w-full py-16 bg-[#b5ff3e]">
        <div className="max-w-[var(--content-wide)] mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 anim-reveal is-visible">
          <div className="flex-1">
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[#000000]">
              Still not sure? Let&apos;s figure it out together.
            </h2>
            <p className="text-[#000000]/70 mt-3 max-w-md">
              Tell us what you need on WhatsApp. We&apos;ll recommend the right package — honestly. Even if it means telling you a cheaper option works fine.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-start md:items-end w-full md:w-auto">
            <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="bg-[#000000] text-[#b5ff3e] rounded-full px-8 py-4 font-semibold hover:bg-[#111111] transition-colors w-full md:w-auto text-center flex items-center justify-center gap-2">
              💬 Chat on WhatsApp
            </a>
            <a href="mailto:support@sitecraf.com" className="border border-[#000000]/20 text-[#000000] rounded-full px-8 py-4 font-semibold hover:bg-[#000000]/[0.08] transition-colors w-full md:w-auto text-center flex items-center justify-center gap-2">
              📧 Email Us Instead
            </a>
            <span className="text-[#000000]/50 text-xs w-full text-center md:text-right">
              Free 30-min consultation. No commitment.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
