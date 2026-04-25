import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — WordPress, Shopify, Wix Studio & Next.js Websites | Sitecraf Delhi',
  description: 'Sitecraf builds WordPress, Shopify, Wix Studio, and custom Next.js websites for Indian businesses. AI chatbots in Hindi & English. AI image generation. Fixed pricing from ₹6,000. New Delhi.',
  keywords: [
    'website development services New Delhi',
    'Shopify to Wix Studio migration India',
    'AI chatbot Hindi English India',
    'custom website development Delhi',
    'AI image generation India',
    'business automation India',
    'Next.js website developer Delhi',
    'website developer for Indian B2B brands'
  ],
  openGraph: {
    title: 'Services — Website, AI Chatbot & Automation | Sitecraf New Delhi',
    description: 'Custom websites, Shopify migrations, AI chatbots in Hindi & English, AI image generation — flat pricing, 3-week delivery, New Delhi.',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: { canonical: 'https://sitecraf.com/services' }
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[var(--color-bg)]">
      {/* SECTION 1 — Page Hero */}
      <section aria-label="Services Hero" className="w-full pt-32 pb-20 px-6 bg-[var(--color-bg)]">
        <div className="w-full md:w-[80%] max-w-none mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-start justify-center gap-2 border border-[var(--color-primary-border)] bg-[var(--color-primary)]/[0.08] text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-8 anim-reveal is-visible text-center leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse flex-shrink-0 mt-1.5" />
            6 Services · Fixed Pricing · New Delhi
          </div>

          {/* H1 */}
          <h1 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)] mb-6 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
            Websites, AI Chatbots &amp; Automation<br />
            <span className="text-[var(--color-primary)]">Built for Indian Businesses.</span>
          </h1>

          {/* Subheading */}
          <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-base)] max-w-2xl mx-auto mt-4 leading-relaxed anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            WordPress, Shopify, Wix Studio, or custom Next.js — we build the right website for your budget and your business. Flat pricing. 2–3 week delivery. No hidden fees.
          </p>

          {/* Stats Bar */}
          <div className="mt-12 border-t border-b border-[var(--color-border)] py-8 anim-reveal is-visible" style={{ animationDelay: '300ms' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-8">
              <div className="flex flex-col items-center">
                <span className="text-[var(--color-primary)] font-bold text-[length:var(--text-lg)] md:text-[length:var(--text-xl)] font-[family-name:var(--font-display)]">6 Services</span>
                <span className="text-[var(--color-text-muted)] text-[10px] md:text-xs uppercase tracking-widest mt-1">Available</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[var(--color-primary)] font-bold text-[length:var(--text-lg)] md:text-[length:var(--text-xl)] font-[family-name:var(--font-display)]">From ₹6,000</span>
                <span className="text-[var(--color-text-muted)] text-[10px] md:text-xs uppercase tracking-widest mt-1">Starting Price</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[var(--color-primary)] font-bold text-[length:var(--text-lg)] md:text-[length:var(--text-xl)] font-[family-name:var(--font-display)]">2–3 Weeks</span>
                <span className="text-[var(--color-text-muted)] text-[10px] md:text-xs uppercase tracking-widest mt-1">Avg. Delivery</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[var(--color-primary)] font-bold text-[length:var(--text-lg)] md:text-[length:var(--text-xl)] font-[family-name:var(--font-display)]">₹0</span>
                <span className="text-[var(--color-text-muted)] text-[10px] md:text-xs uppercase tracking-widest mt-1">Hidden Fees</span>
              </div>
            </div>
          </div>

          {/* Service Jump Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 anim-reveal is-visible" style={{ animationDelay: '400ms' }}>
            {[
              { label: 'WordPress', href: '#service-wordpress' },
              { label: 'Shopify', href: '#service-shopify' },
              { label: 'Wix Studio', href: '#service-wix' },
              { label: 'Next.js', href: '#service-nextjs' },
              { label: 'AI Chatbot', href: '#service-chatbot' },
              { label: 'AI Images', href: '#service-ai-images' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-full text-[length:var(--text-xs)] font-medium border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2 — Service Finder / Intent Selector */}
      <section aria-label="Find Your Service" className="w-full py-16 px-6 bg-[var(--color-surface)]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">

          {/* Header */}
          <div className="mb-10 text-center anim-reveal is-visible">
            <span className="block text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
              Find Your Fit
            </span>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)] mb-3">
              Not sure where to start?
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-base)] max-w-xl mx-auto">
              Pick what describes your situation — we&apos;ll point you to the right service.
            </p>
          </div>

          {/* Intent Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>

            {/* Tile 1 — Website */}
            <a href="#service-wordpress" className="group bg-[var(--color-surface-2)] border border-[var(--color-border)] hover:border-[var(--color-primary-border)] hover:bg-[var(--color-primary)]/[0.04] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 cursor-pointer">
              <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              </div>
              <div className="flex-grow">
                <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-sm)] leading-relaxed mb-3 italic">
                  &ldquo;My business doesn&apos;t have a proper website — or my current one is embarrassing.&rdquo;
                </p>
                <p className="font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">
                  You need a website.
                </p>
                <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)]">
                  WordPress, Shopify, Wix Studio, or Next.js — depending on your goals.
                </p>
              </div>
              <div className="flex items-center gap-1 text-[var(--color-primary)] text-[length:var(--text-xs)] font-semibold uppercase tracking-widest group-hover:gap-2 transition-all duration-200">
                See Website Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

            {/* Tile 2 — AI Tools */}
            <a href="#service-chatbot" className="group bg-[var(--color-surface-2)] border border-[var(--color-border)] hover:border-[var(--color-primary-border)] hover:bg-[var(--color-primary)]/[0.04] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 cursor-pointer">
              <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  <path d="M8 10h.01M12 10h.01M16 10h.01"/>
                </svg>
              </div>
              <div className="flex-grow">
                <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-sm)] leading-relaxed mb-3 italic">
                  &ldquo;I&apos;m spending too much time answering the same customer questions — or my product images look bad.&rdquo;
                </p>
                <p className="font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">
                  You need AI tools.
                </p>
                <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)]">
                  An AI Chatbot handles queries 24/7. AI Image Generation fixes your product visuals.
                </p>
              </div>
              <div className="flex items-center gap-1 text-[var(--color-primary)] text-[length:var(--text-xs)] font-semibold uppercase tracking-widest group-hover:gap-2 transition-all duration-200">
                See AI Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

            {/* Tile 3 — Automation */}
            <a href="#service-automation" className="group bg-[var(--color-surface-2)] border border-[var(--color-border)] hover:border-[var(--color-primary-border)] hover:bg-[var(--color-primary)]/[0.04] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 cursor-pointer">
              <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <div className="flex-grow">
                <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-sm)] leading-relaxed mb-3 italic">
                  &ldquo;My website exists — but leads don&apos;t reach me, or my tools don&apos;t talk to each other.&rdquo;
                </p>
                <p className="font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">
                  You need automation.
                </p>
                <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)]">
                  We connect WhatsApp, CRM, Google Sheets, booking calendars, and payment gateways to your site.
                </p>
              </div>
              <div className="flex items-center gap-1 text-[var(--color-primary)] text-[length:var(--text-xs)] font-semibold uppercase tracking-widest group-hover:gap-2 transition-all duration-200">
                See Automation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>

          </div>

          {/* Bottom nudge */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)]">
              Still not sure? Book a free 30-minute call — we&apos;ll tell you exactly what you need (and what you don&apos;t).
            </p>
            <a
              href="https://wa.me/919599143235"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[var(--color-primary)] text-[#000000] rounded-full px-5 py-2.5 text-[length:var(--text-xs)] font-semibold hover:bg-[var(--color-primary-hover)] transition-colors duration-200"
            >
              Book a Free Call →
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 3 — Individual Service Cards */}
      <section aria-label="Our Services" className="w-full py-20 px-6 bg-[var(--color-bg)]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">

          {/* Section Header */}
          <div className="mb-12 anim-reveal is-visible">
            <span className="block text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">Our Services</span>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)] mb-4">
              Six ways we help Indian businesses grow
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-base)] max-w-2xl">
              Each service is scoped, quoted, and delivered separately. Pick one or combine them — no bundle pressure.
            </p>
          </div>

          <div className="flex flex-col gap-6">

            {/* CARD 1 — WordPress */}
            <div id="service-wordpress" className="bg-[var(--color-surface)] border border-[var(--color-primary-border)] rounded-2xl p-6 md:p-8 relative anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
              <div className="absolute top-6 right-6 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--color-primary-border)]">
                Most Popular
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center mb-6">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </div>
                  <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-2">WordPress Website</h3>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-2">Best for: service businesses, agencies, blogs &amp; SEO-driven content strategies.</p>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-6">The world&apos;s most widely used CMS — ideal for any site needing strong SEO control, a large plugin ecosystem, and easy long-term content management.</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Service businesses & agencies',
                      'Blogs & news portals',
                      'Portfolio & brochure sites',
                      'SEO-driven content strategies'
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-text)] text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 mt-1.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[var(--color-text-faint)] text-xs italic">NOT for: Teams that want a fully managed, no-maintenance solution — though managed WordPress hosting can solve this for most businesses.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-2xl p-8 text-center w-full">
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-2">Global Market Share</span>
                    <span className="text-[var(--color-primary)] font-bold text-5xl font-[family-name:var(--font-display)]">43%</span>
                    <span className="block text-[var(--color-text-muted)] text-sm mt-2">of all websites globally run on WordPress</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Timeline</span>
                    <span className="text-[var(--color-text)] font-medium">2–3 weeks</span>
                  </div>
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Starting At</span>
                    <span className="text-[var(--color-text)] font-medium">₹6,000</span>
                  </div>
                </div>
                <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-medium hover:underline">Get a Quote →</a>
              </div>
            </div>

            {/* CARD 2 — Shopify */}
            <div id="service-shopify" className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 relative anim-reveal is-visible" style={{ animationDelay: '150ms' }}>
              <div className="absolute top-6 right-6 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--color-primary-border)]">
                E-Commerce
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center mb-6">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
                    </svg>
                  </div>
                  <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-2">Shopify Store</h3>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-2">Best for: D2C product brands, online stores &amp; businesses needing inventory, payments &amp; shipping.</p>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-6">The leading e-commerce platform — built for selling products online, from single-product stores to large catalogues with inventory, payment, and shipping management built in.</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'D2C product brands',
                      'Online stores with inventory management',
                      'Businesses needing payment + shipping',
                      'Multi-currency or international selling'
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-text)] text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 mt-1.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[var(--color-text-faint)] text-xs italic">NOT for: Non-e-commerce businesses — you would be paying for store features you will never use.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-2xl p-8 text-center w-full">
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-2">Shopify Powers</span>
                    <span className="text-[var(--color-primary)] font-bold text-5xl font-[family-name:var(--font-display)]">4.4M</span>
                    <span className="block text-[var(--color-text-muted)] text-sm mt-2">online stores worldwide — the most trusted e-commerce platform</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Timeline</span>
                    <span className="text-[var(--color-text)] font-medium">2–4 weeks</span>
                  </div>
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Starting At</span>
                    <span className="text-[var(--color-text)] font-medium">₹15,000</span>
                  </div>
                </div>
                <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-medium hover:underline">Get a Quote →</a>
              </div>
            </div>

            {/* CARD 3 — Wix Studio */}
            <div id="service-wix" className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 relative anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
              <div className="absolute top-6 right-6 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--color-primary-border)]">
                Fastest Launch
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center mb-6">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-2">Wix Studio Website</h3>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-2">Best for: local businesses, restaurants, clinics, studios &amp; teams who want to self-manage content.</p>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-6">A modern visual builder with professional-grade design control. Great for businesses that want a polished, fast-loading website their own team can edit and update without any technical knowledge.</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Local service businesses',
                      'Restaurants, clinics & studios',
                      'Teams who want to self-manage content',
                      'Fast turnaround projects'
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-text)] text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 mt-1.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[var(--color-text-faint)] text-xs italic">NOT for: Businesses needing complex custom functionality, deep API integrations, or very advanced SEO control.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-2xl p-8 text-center w-full">
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-2">Fastest Delivery</span>
                    <span className="text-[var(--color-primary)] font-bold text-5xl font-[family-name:var(--font-display)]">2–3</span>
                    <span className="block text-[var(--color-text-muted)] text-sm mt-2">weeks from brief to live — fastest launch of all 4 platforms</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Timeline</span>
                    <span className="text-[var(--color-text)] font-medium">2–3 weeks</span>
                  </div>
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Starting At</span>
                    <span className="text-[var(--color-text)] font-medium">₹10,000</span>
                  </div>
                </div>
                <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-medium hover:underline">Get a Quote →</a>
              </div>
            </div>

            {/* CARD 4 — Next.js */}
            <div id="service-nextjs" className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 relative anim-reveal is-visible" style={{ animationDelay: '250ms' }}>
              <div className="absolute top-6 right-6 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--color-primary-border)]">
                Max Performance
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center mb-6">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </div>
                  <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-2">Custom Next.js Website</h3>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-2">Best for: performance-critical sites, custom web apps, AEO + SEO-first builds &amp; complex integrations.</p>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-6">Built from scratch with Next.js — no templates, no page builders. The highest performance option for businesses that need custom features, AEO-ready structure, bespoke integrations, or a website that doubles as a web application.</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Performance-critical business sites',
                      'Custom web apps & portals',
                      'AEO + SEO-first builds',
                      'Complex integrations & APIs'
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-text)] text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 mt-1.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[var(--color-text-faint)] text-xs italic">NOT for: Businesses with very simple requirements or those needing a very fast, low-budget turnaround.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-2xl p-8 text-center w-full">
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-2">Google PageSpeed</span>
                    <span className="text-[var(--color-primary)] font-bold text-5xl font-[family-name:var(--font-display)]">99/100</span>
                    <span className="block text-[var(--color-text-muted)] text-sm mt-2">consistently achievable on custom Next.js builds</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Timeline</span>
                    <span className="text-[var(--color-text)] font-medium">3–5 weeks</span>
                  </div>
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Starting At</span>
                    <span className="text-[var(--color-text)] font-medium">₹15,000</span>
                  </div>
                </div>
                <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-medium hover:underline">Get a Quote →</a>
              </div>
            </div>

            {/* ROW — AI Chatbot + AI Images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* CARD 5 — AI Chatbot */}
              <div id="service-chatbot" className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex flex-col relative anim-reveal is-visible" style={{ animationDelay: '300ms' }}>
                <div className="absolute top-6 right-6 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-[var(--color-primary-border)]">
                  Hindi + English
                </div>
                <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    <path d="M8 10h.01M12 10h.01M16 10h.01"/>
                  </svg>
                </div>
                <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-2">AI Chatbot</h3>
                <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-6 flex-grow">For businesses losing leads after hours — handles queries 24/7 in Hindi, Hinglish &amp; English.</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Hindi, Hinglish & English (unique in India)',
                    'Trained on your products, pricing & FAQs',
                    'Lead capture & qualification while you\'re offline',
                    '1-line embed widget — works on any website'
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--color-text)] text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 mt-1.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="block text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest mb-1">Timeline</span>
                      <span className="text-[var(--color-text)] text-sm font-medium">1–3 weeks</span>
                    </div>
                    <div>
                      <span className="block text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest mb-1">Starting At</span>
                      <span className="text-[var(--color-text)] text-sm font-medium">₹12,000</span>
                    </div>
                  </div>
                  <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] text-sm font-medium hover:underline">Get a Quote →</a>
                </div>
              </div>

              {/* CARD 6 — AI Image Generation */}
              <div id="service-ai-images" className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 flex flex-col relative anim-reveal is-visible" style={{ animationDelay: '350ms' }}>
                <div className="absolute top-6 right-6 bg-white/5 text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-[var(--color-border)]">
                  Add-on Available
                </div>
                <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-2">AI Image Generation</h3>
                <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-6 flex-grow">For businesses with bad product photos — professional visuals at a fraction of studio cost.</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'E-commerce catalog & product visuals',
                    'Batch delivery — multiple images at once',
                    'On-brand styling & background replacement',
                    'No studio booking, no photographer fees'
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--color-text)] text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 mt-1.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="block text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest mb-1">Timeline</span>
                      <span className="text-[var(--color-text)] text-sm font-medium">3–5 days</span>
                    </div>
                    <div>
                      <span className="block text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest mb-1">Starting At</span>
                      <span className="text-[var(--color-text)] text-sm font-medium">₹3,000</span>
                    </div>
                  </div>
                  <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] text-sm font-medium hover:underline">Get a Quote →</a>
                </div>
              </div>

            </div>

            {/* CARD 7 — Automation */}
            <div id="service-automation" className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 relative anim-reveal is-visible" style={{ animationDelay: '400ms' }}>
              <div className="absolute top-6 right-6 bg-white/5 text-[var(--color-text-muted)] text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--color-border)]">
                Add-on Available
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div className="w-10 h-10 bg-[var(--color-primary)]/[0.08] rounded-xl flex items-center justify-center mb-6">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <h3 className="text-[length:var(--text-lg)] font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] mb-2">Automation &amp; API Integrations</h3>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] mb-6">For businesses where leads go missing or tools don&apos;t talk to each other — connect everything automatically.</p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'WhatsApp + email lead notifications — instant alerts',
                      'CRM & Google Sheets sync — zero manual data entry',
                      'Calendar & booking integrations',
                      'Payment gateway setup — Razorpay & Stripe'
                    ].map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-text)] text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40 mt-1.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-2xl p-8 text-center w-full">
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-2">Fastest Turnaround</span>
                    <span className="text-[var(--color-primary)] font-bold text-5xl font-[family-name:var(--font-display)]">3–7</span>
                    <span className="block text-[var(--color-text-muted)] text-sm mt-2">days from brief to live automation</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Timeline</span>
                    <span className="text-[var(--color-text)] font-medium">3–7 days</span>
                  </div>
                  <div>
                    <span className="block text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-1">Starting At</span>
                    <span className="text-[var(--color-text)] font-medium">₹8,000</span>
                  </div>
                </div>
                <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] font-medium hover:underline">Get a Quote →</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — How It Works */}
      <section aria-label="How It Works" className="w-full py-20 px-6 bg-[var(--color-bg)]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">

          {/* Header */}
          <div className="mb-16 anim-reveal is-visible">
            <span className="block text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">Our Process</span>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)] mb-4">
              From first call to live website
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-base)] max-w-2xl">
              No surprises. No delays. No ghosting after payment.
            </p>
          </div>

          {/* Timeline — horizontal desktop, vertical mobile */}
          <div className="relative anim-reveal is-visible" style={{ animationDelay: '100ms' }}>

            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-[var(--color-border)]" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4">

              {/* Step 1 */}
              <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-4 lg:text-center">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-surface)] border border-[var(--color-primary-border)] flex items-center justify-center z-10 relative">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--color-primary)] text-[#000] text-[10px] font-bold flex items-center justify-center">1</span>
                </div>
                <div>
                  <div className="inline-flex items-center bg-[var(--color-surface-2)] text-[var(--color-text-muted)] rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-widest mb-2">30 min</div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">Free Discovery Call</h3>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] leading-relaxed">We listen. You explain. We recommend the right solution — no hard sell.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-4 lg:text-center">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-surface)] border border-[var(--color-primary-border)] flex items-center justify-center z-10 relative">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--color-primary)] text-[#000] text-[10px] font-bold flex items-center justify-center">2</span>
                </div>
                <div>
                  <div className="inline-flex items-center bg-[var(--color-surface-2)] text-[var(--color-text-muted)] rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-widest mb-2">48 hrs</div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">Written Quote & Scope</h3>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] leading-relaxed">Fixed price. Exact deliverables. 50% advance to begin.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-4 lg:text-center">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-surface)] border border-[var(--color-primary-border)] flex items-center justify-center z-10 relative">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <line x1="3" y1="9" x2="21" y2="9"/>
                      <line x1="9" y1="21" x2="9" y2="9"/>
                    </svg>
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--color-primary)] text-[#000] text-[10px] font-bold flex items-center justify-center">3</span>
                </div>
                <div>
                  <div className="inline-flex items-center bg-[var(--color-surface-2)] text-[var(--color-text-muted)] rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-widest mb-2">3–5 days</div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">Design & Content Setup</h3>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] leading-relaxed">Visual mockup first. You approve before a single line of code is written.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-4 lg:text-center">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-surface)] border border-[var(--color-primary-border)] flex items-center justify-center z-10 relative">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                      <polyline points="16 18 22 12 16 6"/>
                      <polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--color-primary)] text-[#000] text-[10px] font-bold flex items-center justify-center">4</span>
                </div>
                <div>
                  <div className="inline-flex items-center bg-[var(--color-surface-2)] text-[var(--color-text-muted)] rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-widest mb-2">1–3 weeks</div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">Build & Review</h3>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] leading-relaxed">Live staging link. WhatsApp updates. 2 rounds of revisions included.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-4 lg:text-center">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-surface)] border border-[var(--color-primary-border)] flex items-center justify-center z-10 relative">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]">
                      <path d="m22 2-7 20-4-9-9-4Z"/>
                      <path d="M22 2 11 13"/>
                    </svg>
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--color-primary)] text-[#000] text-[10px] font-bold flex items-center justify-center">5</span>
                </div>
                <div>
                  <div className="inline-flex items-center bg-[var(--color-surface-2)] text-[var(--color-text-muted)] rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-widest mb-2">24 hrs</div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">Final Delivery & Setup</h3>
                  <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] leading-relaxed">Domain mapping. Security setup. Hands-on training. You pay the final 50%.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom trust strip */}
          <div className="mt-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            <div>
              <p className="font-[family-name:var(--font-display)] font-semibold text-[var(--color-text)] text-[length:var(--text-base)] mb-1">
                Ready to start?
              </p>
              <p className="text-[var(--color-text-muted)] text-[length:var(--text-sm)] max-w-xl">
                Step 1 is always free. Book a 30-minute call — we will map out exactly what you need before you spend a rupee.
              </p>
            </div>
            <a
              href="https://wa.me/919599143235"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[var(--color-primary)] text-[#000000] rounded-full px-6 py-3 font-semibold text-[length:var(--text-sm)] hover:bg-[var(--color-primary-hover)] transition-colors duration-200"
            >
              Book a Free Call →
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 5 — Pricing Anchor / Transparency Strip */}
      <section aria-label="Pricing Overview" className="w-full py-16 px-6 bg-[var(--color-surface)]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">

          {/* Header */}
          <div className="mb-10 anim-reveal is-visible">
            <span className="block text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">Transparent Pricing</span>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)] mb-3">
              What does it actually cost?
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-base)] max-w-2xl">
              All prices are fixed. No GST. No hidden charges. No hourly billing. Ever.
            </p>
          </div>

          {/* Pricing tiles grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>

            {[
              { label: 'WordPress Website', href: '#service-wordpress', price: 'From ₹6,000', timeline: '2–3 weeks', badge: 'Most Popular' },
              { label: 'Shopify Store', href: '#service-shopify', price: 'From ₹15,000', timeline: '2–4 weeks', badge: 'E-Commerce' },
              { label: 'Wix Studio Website', href: '#service-wix', price: 'From ₹10,000', timeline: '2–3 weeks', badge: 'Fastest Launch' },
              { label: 'Custom Next.js', href: '#service-nextjs', price: 'From ₹15,000', timeline: '3–5 weeks', badge: 'Max Performance' },
              { label: 'AI Chatbot', href: '#service-chatbot', price: 'From ₹12,000', timeline: '1–3 weeks', badge: 'Hindi + English' },
              { label: 'AI Image Generation', href: '#service-ai-images', price: 'From ₹3,000', timeline: '3–5 days', badge: 'Add-on' },
              { label: 'Automation & APIs', href: '#service-automation', price: 'From ₹8,000', timeline: '3–7 days', badge: 'Add-on' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group bg-[var(--color-surface-2)] border border-[var(--color-border)] hover:border-[var(--color-primary-border)] hover:bg-[var(--color-primary)]/[0.04] rounded-xl p-5 flex flex-col gap-2 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="font-[family-name:var(--font-body)] text-[var(--color-text)] font-medium text-[length:var(--text-sm)] leading-snug">{item.label}</span>
                </div>
                <span className="text-[var(--color-primary)] font-bold text-[length:var(--text-lg)] font-[family-name:var(--font-display)]">{item.price}</span>
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-[var(--color-border)]">
                  <span className="text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest">{item.timeline}</span>
                  <span className="text-[var(--color-primary)] text-[10px] group-hover:translate-x-0.5 transition-transform duration-200">↗</span>
                </div>
              </a>
            ))}

            {/* 8th tile — CTA */}
            <a
              href="https://wa.me/919599143235"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-primary)]/[0.08] border border-[var(--color-primary-border)] hover:bg-[var(--color-primary)]/[0.14] rounded-xl p-5 flex flex-col justify-between gap-2 transition-all duration-200"
            >
              <span className="font-[family-name:var(--font-display)] font-bold text-[var(--color-primary)] text-[length:var(--text-base)] leading-snug">Need a custom quote?</span>
              <p className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] leading-relaxed">Message us on WhatsApp — response within 2 hours.</p>
              <span className="text-[var(--color-primary)] font-semibold text-[length:var(--text-xs)] mt-auto">Get a Quote →</span>
            </a>

          </div>

          {/* Trust line */}
          <p className="text-[var(--color-text-faint)] text-[length:var(--text-xs)] mt-8 anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            * Starting prices are for standard scope. Complex or custom requirements are quoted separately after the free discovery call.
          </p>

        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section aria-label="Services FAQ" className="w-full py-20 px-6 bg-[var(--color-bg)]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">

          <div className="mb-12 anim-reveal is-visible">
            <span className="block text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">Common Questions</span>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)] mb-3">
              Questions we get asked every week
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-base)] max-w-2xl">
              Straight answers. No marketing fluff.
            </p>
          </div>

          <div className="flex flex-col anim-reveal is-visible" style={{ animationDelay: '100ms' }}>

            <details className="group border-b border-[var(--color-border)] py-5">
              <summary className="text-[var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Which platform is right for my business — WordPress, Shopify, Wix Studio, or Next.js?
                <svg className="w-5 h-5 flex-shrink-0 ml-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-muted)] mt-3 leading-relaxed pt-2">
                Quick rule of thumb: if you sell products online, Shopify. If you want the fastest launch and self-manage content, Wix Studio. If SEO and blogging matter most, WordPress. If you need maximum performance or custom functionality, Next.js. We cover this in detail in the free discovery call — and we will tell you honestly if a cheaper option is the better fit.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] py-5">
              <summary className="text-[var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                How long does a project take from start to finish?
                <svg className="w-5 h-5 flex-shrink-0 ml-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-muted)] mt-3 leading-relaxed pt-2">
                Most website projects are delivered in 2–3 weeks. Shopify and Next.js projects take 2–5 weeks depending on complexity. AI Chatbots take 1–3 weeks. Automation integrations are the fastest — usually 3–7 days. Every project gets a fixed timeline in writing before we begin, and we do not move that deadline without notifying you first.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] py-5">
              <summary className="text-[var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                How is payment structured?
                <svg className="w-5 h-5 flex-shrink-0 ml-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-muted)] mt-3 leading-relaxed pt-2">
                50% upfront, 50% before final delivery. You do not pay the second half until you have seen and approved the finished website. No full upfront payment. No surprise invoices. Payment via bank transfer, Razorpay, or Wise.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] py-5">
              <summary className="text-[var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Will I own the website after delivery?
                <svg className="w-5 h-5 flex-shrink-0 ml-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-muted)] mt-3 leading-relaxed pt-2">
                100%. Every line of code, every design file, every image — transferred to you completely on final payment. No license fees, no retainer required to keep your site running, no dependency on us to make changes. You own it outright.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] py-5">
              <summary className="text-[var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Do you provide content and copy for the website?
                <svg className="w-5 h-5 flex-shrink-0 ml-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-muted)] mt-3 leading-relaxed pt-2">
                Basic copywriting is included — we write headings, service descriptions, and CTAs based on your brief. You provide the specifics: your services, pricing, team details, and any photos or brand materials you have. If you need full content strategy or long-form copy, that is quoted separately.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] py-5">
              <summary className="text-[var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                What if I need changes after the site goes live?
                <svg className="w-5 h-5 flex-shrink-0 ml-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-muted)] mt-3 leading-relaxed pt-2">
                Two revision rounds are included in every project. After launch, you get 2 weeks of free support. After that, small changes are ₹500 each. Larger updates are quoted separately — we always send a clear price before touching anything.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] py-5">
              <summary className="text-[var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Can the AI chatbot speak in Hindi?
                <svg className="w-5 h-5 flex-shrink-0 ml-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-muted)] mt-3 leading-relaxed pt-2">
                Yes — this is one of our core differentiators. The chatbot handles queries in Hindi, Hinglish, and English. It detects the visitor&apos;s language automatically and responds accordingly. You can also set a default language based on your audience.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] py-5">
              <summary className="text-[var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Do you work with international clients?
                <svg className="w-5 h-5 flex-shrink-0 ml-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-muted)] mt-3 leading-relaxed pt-2">
                Yes. We work with clients across India, UAE, UK, and the US. All communication happens via WhatsApp and email. Payments accepted via bank transfer, Razorpay, or Wise.
              </p>
            </details>

            <details className="group border-b border-[var(--color-border)] py-5">
              <summary className="text-[var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[var(--color-primary)] transition-colors">
                Do I need to buy a Shopify plan to start a migration to Wix Studio?
                <svg className="w-5 h-5 flex-shrink-0 ml-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-[var(--color-text-muted)] mt-3 leading-relaxed pt-2">
                No. You only need your existing Shopify login credentials. We export your content and rebuild it on Wix Studio. You can cancel your Shopify subscription after your domain is transferred and the new site is live.
              </p>
            </details>

          </div>

        </div>
      </section>

      {/* SECTION 7 — Final CTA */}
      <section aria-label="Get Started" className="w-full py-20 px-6 bg-[var(--color-surface)]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">

          <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl px-8 md:px-14 py-14 flex flex-col items-start gap-8 anim-reveal is-visible">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[var(--color-primary-border)] bg-[var(--color-primary)]/[0.08] text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Free Discovery Call — No Commitment
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 w-full">

              {/* Left — Heading + trust */}
              <div className="max-w-2xl">
                <h2 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)] mb-4">
                  Not sure yet? That&apos;s exactly what the free call is for.
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-base)] leading-relaxed mb-8">
                  Bring your questions, your budget, your existing website — or just the problem you&apos;re trying to solve. In 30 minutes we&apos;ll tell you exactly what you need, what it costs, and how long it takes. No sales pitch. No obligation to proceed.
                </p>

                {/* Micro-proof strip */}
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[var(--color-primary)] font-bold text-xl font-[family-name:var(--font-display)]">2–3 Weeks</span>
                    <span className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] uppercase tracking-widest">Avg. Delivery</span>
                  </div>
                  <div className="w-px h-8 bg-[var(--color-border)]" />
                  <div className="flex flex-col">
                    <span className="text-[var(--color-primary)] font-bold text-xl font-[family-name:var(--font-display)]">₹0</span>
                    <span className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] uppercase tracking-widest">Hidden Fees</span>
                  </div>
                  <div className="w-px h-8 bg-[var(--color-border)]" />
                  <div className="flex flex-col">
                    <span className="text-[var(--color-primary)] font-bold text-xl font-[family-name:var(--font-display)]">50% After</span>
                    <span className="text-[var(--color-text-muted)] text-[length:var(--text-xs)] uppercase tracking-widest">You Approve</span>
                  </div>
                </div>
              </div>

              {/* Right — CTAs stacked */}
              <div className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[220px]">
                <a
                  href="https://wa.me/919599143235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-[#000000] rounded-full px-8 py-4 font-semibold text-[length:var(--text-base)] hover:bg-[var(--color-primary-hover)] transition-colors duration-200 whitespace-nowrap text-center"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Book Free Call on WhatsApp
                </a>
                <Link
                  href="/#our-portfolio"
                  className="inline-flex items-center justify-center gap-2 border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary-border)] hover:text-[var(--color-primary)] rounded-full px-8 py-4 font-medium text-[length:var(--text-sm)] transition-all duration-200 whitespace-nowrap"
                >
                  View Our Work →
                </Link>
              </div>

            </div>

            {/* Bottom trust line */}
            <div className="w-full pt-6 border-t border-[var(--color-border)] flex flex-wrap items-center gap-6 text-[var(--color-text-muted)] text-[length:var(--text-xs)]">
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Response within 2 hours
              </span>
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Fixed price · no hidden fees
              </span>
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-primary)]"><polyline points="20 6 9 17 4 12"/></svg>
                50% only after you approve the design
              </span>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
