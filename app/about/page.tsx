import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Sitecraf — Website & AI Development Studio, New Delhi',
  description: 'Sitecraf is a New Delhi-based digital studio building custom websites, AI chatbots, and automation tools for Indian B2B brands. Transparent pricing. 3-week delivery. 100% IP ownership.',
  keywords: [
    'about sitecraf',
    'website developer New Delhi',
    'AI chatbot developer India',
    'freelance web developer New Delhi',
    'B2B website development India',
    'custom website development Delhi',
    'digital studio New Delhi India'
  ],
  openGraph: {
    title: 'About Sitecraf — Website & AI Development Studio, New Delhi',
    description: 'New Delhi-based studio building websites and AI tools for Indian B2B brands. Transparent pricing, fast delivery, full IP ownership.',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://sitecraf.com/about'
  }
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#000000]">
      {/* SECTION 1 — Page Hero */}
      <section aria-label="About Sitecraf Hero" className="w-full pt-32 pb-20 px-6 bg-[#000000] flex flex-col items-center text-center">
        <div className="w-full md:w-[80%] max-w-none mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2 border border-[#b5ff3e]/[0.18] bg-[#b5ff3e]/[0.08] text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-8 anim-reveal is-visible">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5ff3e] animate-pulse" />
            About Sitecraf
          </div>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-[length:calc(var(--text-3xl)*0.9)] md:text-[length:var(--text-3xl)] text-[#e8e8f0] tracking-[-0.02em] leading-[1.15] mb-6 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
            The Studio Behind Your Digital Growth
          </h1>
          <p className="font-[family-name:var(--font-body)] text-[length:calc(var(--text-base)*0.9)] md:text-[length:var(--text-base)] text-[#8888a0] max-w-2xl leading-relaxed mb-10 anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            We are a New Delhi-based digital studio — not a 50-person agency. Just sharp execution, transparent pricing, and work that actually converts visitors into clients.
          </p>
          <div className="anim-reveal is-visible" style={{ animationDelay: '300ms' }}>
            <Link href="/case-studies" className="inline-flex items-center justify-center min-h-[48px] bg-[#b5ff3e] text-[#000000] font-semibold px-8 py-4 rounded-full hover:bg-[#c4ff66] hover:shadow-[var(--glow-md)] active:scale-95 transition-all duration-300 text-[length:var(--text-sm)]">
              See Our Work →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Our Story / Mission */}
      <section aria-label="Our Story" className="w-full py-20 px-6 bg-[#0a0a0a]">
        <div className="w-full md:w-[80%] max-w-none mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl text-[#e8e8f0] mb-8 anim-reveal is-visible">
              We started Sitecraf because Indian B2B brands deserved better
            </h2>
            <div className="font-[family-name:var(--font-body)] text-[#8888a0] space-y-6 text-base leading-relaxed anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
              <p>
                For too long, Indian businesses have been stuck paying bloated agency prices for mediocre, slow, and templated websites riddled with hidden costs. The traditional agency model is broken—it prioritizes account management over actual execution, leaving founders frustrated with endless delays and subpar results.
              </p>
              <p>
                We built Sitecraf on a different foundation: direct engagement, modern technology like Next.js and AI, flat transparent pricing, and lightning-fast delivery. When you work with us, you&apos;re partnering with a studio based in Delhi that understands the nuances of serving clients across India and globally.
              </p>
              <p>
                The outcome? Our clients receive 100% IP ownership from day one. No retainer traps, no hostage situations with your domain or code. We also integrate cutting-edge, bilingual AI tools built specifically for the Indian market, ensuring your business stays ahead of the curve.
              </p>
            </div>
          </div>
          
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            <div className="bg-[#111111] border border-white/[0.06] rounded-xl p-6 flex flex-col justify-center">
              <dt className="text-[#8888a0] text-xs uppercase tracking-widest order-2 mt-2">Projects Delivered</dt>
              <dd className="text-[#b5ff3e] font-bold text-3xl font-[family-name:var(--font-display)] order-1">10+</dd>
            </div>
            <div className="bg-[#111111] border border-white/[0.06] rounded-xl p-6 flex flex-col justify-center">
              <dt className="text-[#8888a0] text-xs uppercase tracking-widest order-2 mt-2">Avg. First Delivery</dt>
              <dd className="text-[#b5ff3e] font-bold text-3xl font-[family-name:var(--font-display)] order-1">3 Wks</dd>
            </div>
            <div className="bg-[#111111] border border-white/[0.06] rounded-xl p-6 flex flex-col justify-center">
              <dt className="text-[#8888a0] text-xs uppercase tracking-widest order-2 mt-2">IP Ownership to You</dt>
              <dd className="text-[#b5ff3e] font-bold text-3xl font-[family-name:var(--font-display)] order-1">100%</dd>
            </div>
            <div className="bg-[#111111] border border-white/[0.06] rounded-xl p-6 flex flex-col justify-center">
              <dt className="text-[#8888a0] text-xs uppercase tracking-widest order-2 mt-2">Hidden Charges</dt>
              <dd className="text-[#b5ff3e] font-bold text-3xl font-[family-name:var(--font-display)] order-1">₹0</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* SECTION 3 — How We're Different (Values) */}
      <section aria-label="How We're Different" className="w-full py-20 px-6 bg-[#000000]">
        <div className="w-full md:w-[80%] max-w-none mx-auto">
          <div className="text-center md:text-left mb-16 anim-reveal is-visible">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl text-[#e8e8f0] mb-4">
              Not an agency. Not a freelancer. Something better.
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-lg max-w-2xl">
              We combine the accountability of a solo practitioner with the capability of a full studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-8 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-[#b5ff3e]/[0.08] rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b5ff3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 12l10 10 10-10L12 2z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[#e8e8f0] mb-3">
                You talk to the person doing the work
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[#8888a0] leading-relaxed">
                No account managers, no handoffs. The founder handles strategy, design, and development personally.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-8 anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-[#b5ff3e]/[0.08] rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b5ff3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[#e8e8f0] mb-3">
                Flat pricing. Zero surprises.
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[#8888a0] leading-relaxed">
                Every project is quoted upfront. No hourly billing, no GST, no revision fees hidden in the fine print.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-8 anim-reveal is-visible" style={{ animationDelay: '300ms' }}>
              <div className="w-12 h-12 bg-[#b5ff3e]/[0.08] rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b5ff3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[#e8e8f0] mb-3">
                Your IP. Always.
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[#8888a0] leading-relaxed">
                Every line of code, every design asset — transferred to you on delivery. We build it, you own it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Who We Serve */}
      <section aria-label="Who We Serve" className="w-full py-20 px-6 bg-[#0a0a0a]">
        <div className="w-full md:w-[80%] max-w-none mx-auto">
          <div className="text-center md:text-left mb-12 anim-reveal is-visible">
            <h2 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl text-[#e8e8f0] mb-4">
              Built for Indian B2B brands that mean business
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-lg max-w-3xl">
              From textile exporters in Surat to automation-first startups in Bangalore — we build for businesses that need a professional digital presence without paying ₹5–10L to a bloated agency.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pb-6 mb-8 font-[family-name:var(--font-body)] anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
            {['Textile & Home Furnishing', 'Manufacturing', 'Exports & Trading', 'Professional Services', 'D2C Brands', 'SaaS & Tech Startups', 'Real Estate', 'Healthcare & Clinics', 'Education & Coaching'].map((tag, i) => (
              <span key={i} className="border border-white/[0.08] text-[#8888a0] text-sm px-4 py-2 rounded-full hover:border-[#b5ff3e]/30 hover:text-[#b5ff3e] transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8 font-[family-name:var(--font-body)] text-[#e8e8f0] anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            {[
              'Websites optimized for Indian internet speeds',
              'AI chatbots in Hindi + English',
              'Pricing designed for Indian business budgets',
              'GST-free invoicing',
              'WhatsApp-first communication',
              'Delivery timelines that respect your launch date'
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#b5ff3e] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 5 — CTA Banner */}
      <section aria-label="Call to Action" className="w-full py-16 px-6 bg-[#b5ff3e] flex flex-col items-center text-center">
        <div className="w-full md:w-[80%] max-w-none mx-auto flex flex-col items-center anim-reveal is-visible">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl text-[#000000] mb-4">
            Ready to build something that actually converts?
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#000000]/70 text-lg max-w-2xl mb-10">
            Get a free 30-minute consultation. No pitch decks, no agency theatrics — just an honest conversation about what you need and what it&apos;ll cost.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="inline-flex items-center justify-center min-h-[48px] bg-[#000000] text-[#b5ff3e] font-semibold px-8 py-4 rounded-full hover:bg-[#111111] hover:shadow-lg active:scale-95 transition-all duration-300 text-[length:var(--text-sm)]">
              Get a Free Quote
            </Link>
            <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center min-h-[48px] border border-[#000000]/20 text-[#000000] font-semibold px-8 py-4 rounded-full hover:bg-[#000000]/5 active:scale-95 transition-all duration-300 text-[length:var(--text-sm)]">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
