import { Metadata } from 'next';
import PricingClient from '@/components/sections/PricingClient';

export const metadata: Metadata = {
  title: 'Pricing — Website, AI Chatbot & Automation | Sitecraf Delhi',
  description: 'Transparent, flat pricing for website development, AI chatbots, AI image generation, and automation. No hidden fees. No GST. Starting from ₹3,000. Based in New Delhi, India.',
  keywords: [
    'website development pricing India',
    'affordable website development Delhi',
    'AI chatbot price India',
    'Shopify website cost India',
    'Next.js website price Delhi',
    'web development packages India',
    'digital agency pricing New Delhi',
    'website cost for small business India'
  ],
  openGraph: {
    title: 'Pricing — Flat, Transparent Web & AI Services | Sitecraf',
    description: 'No hidden fees. No GST. Flat pricing for websites, AI chatbots, image generation, and automation. New Delhi.',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: { canonical: 'https://sitecraf.com/pricing' }
};

export default function PricingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[var(--color-bg)]">

      {/* SECTION 1 — Page Hero */}
      <section aria-label="Pricing Hero" className="w-full pt-32 pb-20 px-6 bg-[var(--color-bg)]">
        <div className="w-full md:w-[80%] max-w-none mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-start justify-center gap-2 border border-[var(--color-primary-border)] bg-[var(--color-primary)]/[0.08] text-[var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] px-4 py-2 rounded-full mb-8 anim-reveal is-visible text-center leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse flex-shrink-0 mt-1.5" />
            Transparent Pricing · No Hidden Fees · New Delhi
          </div>

          {/* H1 */}
          <h1 className="heading-section font-[family-name:var(--font-display)] text-[var(--color-text)] mb-6 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
            Flat Prices. No Surprises.<br />
            <span className="text-[var(--color-primary)]">From ₹3,000.</span>
          </h1>

          {/* Subtext */}
          <p className="font-[family-name:var(--font-body)] text-[var(--color-text-muted)] text-[length:var(--text-base)] max-w-2xl mx-auto mt-4 leading-relaxed anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            Every project is quoted upfront at a fixed price before we start.
            You know exactly what you&apos;re paying — no GST, no hourly billing, no revision fees buried in the fine print.
          </p>

          {/* Stats Bar */}
          <div className="mt-12 border-t border-b border-[var(--color-border)] py-8 anim-reveal is-visible" style={{ animationDelay: '300ms' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-8">
              <div className="flex flex-col items-center">
                <span className="text-[var(--color-primary)] font-bold text-[length:var(--text-lg)] md:text-[length:var(--text-xl)] font-[family-name:var(--font-display)]">From ₹3,000</span>
                <span className="text-[var(--color-text-muted)] text-[10px] md:text-xs uppercase tracking-widest mt-1">Starting Price</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[var(--color-primary)] font-bold text-[length:var(--text-lg)] md:text-[length:var(--text-xl)] font-[family-name:var(--font-display)]">₹0</span>
                <span className="text-[var(--color-text-muted)] text-[10px] md:text-xs uppercase tracking-widest mt-1">Hidden Fees</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[var(--color-primary)] font-bold text-[length:var(--text-lg)] md:text-[length:var(--text-xl)] font-[family-name:var(--font-display)]">50% After</span>
                <span className="text-[var(--color-text-muted)] text-[10px] md:text-xs uppercase tracking-widest mt-1">You Approve</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[var(--color-primary)] font-bold text-[length:var(--text-lg)] md:text-[length:var(--text-xl)] font-[family-name:var(--font-display)]">₹0 GST</span>
                <span className="text-[var(--color-text-muted)] text-[10px] md:text-xs uppercase tracking-widest mt-1">Ever Charged</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <PricingClient />
    </main>
  );
}
