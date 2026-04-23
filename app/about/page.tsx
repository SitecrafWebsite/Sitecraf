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
      <section aria-label="About Sitecraf Hero" className="w-full pt-32 pb-20 px-6 bg-[color:var(--color-bg)] flex flex-col items-center text-center">
        <div className="w-full max-w-none mx-auto flex flex-col items-center">

          {/* Eyebrow badge */}
          <div className="flex items-center gap-2 border border-[color:var(--color-primary)]/[0.18] bg-[color:var(--color-primary)]/[0.08] text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-8 anim-reveal is-visible">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-primary)] animate-pulse" />
            New Delhi · Est. 2024
          </div>

          {/* H1 */}
          <h1 className="heading-section font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-6 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
            We Build Websites That Work.<br />
            <span className="text-[color:var(--color-primary)]">Not Just Websites That Look Good.</span>
          </h1>

          {/* Subheading */}
          <p className="font-[family-name:var(--font-body)] text-[length:calc(var(--text-base)*0.9)] md:text-[length:var(--text-base)] text-[color:var(--color-text-muted)] max-w-2xl leading-relaxed mb-10 anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            Sitecraf is a New Delhi-based digital studio — one founder, no middlemen, no retainers. We build fast, conversion-ready websites and AI tools for Indian businesses that want results, not agency theatrics.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 anim-reveal is-visible" style={{ animationDelay: '300ms' }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[48px] bg-[color:var(--color-primary)] text-[color:var(--color-text-inverse)] font-semibold px-8 py-4 rounded-full hover:bg-[color:var(--color-primary-hover)] hover:shadow-[var(--glow-md)] active:scale-95 transition-all duration-300 text-[length:var(--text-sm)]"
            >
              Get a Free Quote →
            </Link>
            <Link
              href="/our-portfolio"
              className="inline-flex items-center justify-center min-h-[48px] border border-[color:var(--color-border)] text-[color:var(--color-text-muted)] font-semibold px-8 py-4 rounded-full hover:border-[color:var(--color-primary)]/40 hover:text-[color:var(--color-primary)] active:scale-95 transition-all duration-300 text-[length:var(--text-sm)]"
            >
              See Our Work
            </Link>
          </div>

          {/* Stats bar */}
          <dl className="mt-16 w-full md:w-[80%] max-w-none mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--color-border)] rounded-2xl overflow-hidden anim-reveal is-visible" style={{ animationDelay: '400ms' }}>
            <div className="bg-[color:var(--color-surface)] px-6 py-6 flex flex-col items-center text-center">
              <dd className="text-[color:var(--color-primary)] font-bold text-3xl font-[family-name:var(--font-display)] leading-none">2 Wks</dd>
              <dt className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest mt-2">Avg. Launch Time</dt>
            </div>
            <div className="bg-[color:var(--color-surface)] px-6 py-6 flex flex-col items-center text-center">
              <dd className="text-[color:var(--color-primary)] font-bold text-3xl font-[family-name:var(--font-display)] leading-none">100%</dd>
              <dt className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest mt-2">IP Ownership Yours</dt>
            </div>
            <div className="bg-[color:var(--color-surface)] px-6 py-6 flex flex-col items-center text-center">
              <dd className="text-[color:var(--color-primary)] font-bold text-3xl font-[family-name:var(--font-display)] leading-none">₹0</dd>
              <dt className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest mt-2">Hidden Charges</dt>
            </div>
            <div className="bg-[color:var(--color-surface)] px-6 py-6 flex flex-col items-center text-center">
              <dd className="text-[color:var(--color-primary)] font-bold text-3xl font-[family-name:var(--font-display)] leading-none">24/7</dd>
              <dt className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest mt-2">Post-Launch Support</dt>
            </div>
          </dl>

        </div>
      </section>

      {/* SECTION 2 — Our Story */}
      <section aria-label="Our Story" className="w-full py-20 px-6 bg-[color:var(--color-surface)]">
        <div className="w-full md:w-[80%] max-w-none mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Narrative */}
          <div className="flex flex-col">

            {/* Eyebrow */}
            <span className="text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] font-semibold mb-4 anim-reveal is-visible">
              Our Story
            </span>

            <h2 className="heading-section font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-8 anim-reveal is-visible">
              Built out of a frustration every Indian founder knows
            </h2>

            <div className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] space-y-6 text-base leading-relaxed">

              <p className="anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
                Every early-stage Indian founder hits the same wall. You approach an agency — they send a 12-page deck, quote ₹8 lakhs, promise a 3-month timeline, assign you an account manager who has never written a line of code, and deliver a WordPress theme with your logo swapped in. You&apos;ve seen it. Maybe you&apos;ve lived it.
              </p>

              <p className="anim-reveal is-visible" style={{ animationDelay: '180ms' }}>
                Sitecraf started as a direct answer to that experience. No account managers. No inflated retainers. No templated thinking. Just one founder in Delhi — handling strategy, design, and development personally — who believes a well-built website should be accessible to every serious Indian business, not just the ones with agency budgets.
              </p>

              <p className="anim-reveal is-visible" style={{ animationDelay: '260ms' }}>
                We use modern technology — Next.js, Shopify, WordPress, Wix Studio, and custom AI integrations — not because it&apos;s fashionable, but because it delivers measurably faster, more secure, and more conversion-ready results than the bloated builds most agencies ship. Every project is quoted upfront, delivered in 2 weeks, and handed over with 100% IP ownership. That&apos;s not a tagline — it&apos;s how every single project runs.
              </p>

            </div>
          </div>

          {/* Right — Stat tiles */}
          <div className="flex flex-col gap-4 anim-reveal is-visible" style={{ animationDelay: '200ms' }}>

            {/* Top row — 2 tiles */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[color:var(--color-bg)] border border-[color:var(--color-border)] rounded-xl p-6 flex flex-col justify-center">
                <dd className="text-[color:var(--color-primary)] font-bold text-3xl font-[family-name:var(--font-display)] leading-none">15+</dd>
                <dt className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest mt-2">Projects Delivered</dt>
              </div>
              <div className="bg-[color:var(--color-bg)] border border-[color:var(--color-border)] rounded-xl p-6 flex flex-col justify-center">
                <dd className="text-[color:var(--color-primary)] font-bold text-3xl font-[family-name:var(--font-display)] leading-none">2 Wks</dd>
                <dt className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest mt-2">Avg. Launch Time</dt>
              </div>
            </div>

            {/* Bottom row — 2 tiles */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[color:var(--color-bg)] border border-[color:var(--color-border)] rounded-xl p-6 flex flex-col justify-center">
                <dd className="text-[color:var(--color-primary)] font-bold text-3xl font-[family-name:var(--font-display)] leading-none">100%</dd>
                <dt className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest mt-2">IP Ownership to You</dt>
              </div>
              <div className="bg-[color:var(--color-bg)] border border-[color:var(--color-border)] rounded-xl p-6 flex flex-col justify-center">
                <dd className="text-[color:var(--color-primary)] font-bold text-3xl font-[family-name:var(--font-display)] leading-none">₹0</dd>
                <dt className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest mt-2">Hidden Charges</dt>
              </div>
            </div>

            {/* Quote pull — founder voice */}
            <blockquote className="mt-2 bg-[color:var(--color-primary)]/[0.06] border-l-2 border-[color:var(--color-primary)] rounded-r-xl px-6 py-5">
              <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text)] text-sm leading-relaxed italic">
                &ldquo;I started Sitecraf because I kept watching good businesses get overcharged for average work. The goal was simple — build things that actually perform, at a price that makes sense.&rdquo;
              </p>
              <footer className="mt-3 text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest font-semibold">
                — Founder, Sitecraf · New Delhi
              </footer>
            </blockquote>

          </div>
        </div>
      </section>

      {/* SECTION 3 — What Makes Us Different */}
      <section aria-label="What Makes Us Different" className="w-full py-20 px-6 bg-[color:var(--color-bg)]">
        <div className="w-full md:w-[80%] max-w-none mx-auto">

          {/* Section header */}
          <div className="mb-14 anim-reveal is-visible">
            <span className="text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] font-semibold mb-4 block">
              Why Us
            </span>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-4">
              Not an agency. Not a freelancer.<br />
              <span className="text-[color:var(--color-primary)]">Something built to be better.</span>
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-base max-w-2xl leading-relaxed">
              We combine the accountability of a solo practitioner with the full capability of a production studio. Here is exactly what that means in practice.
            </p>
          </div>

          {/* Differentiator rows */}
          <div className="flex flex-col divide-y divide-[color:var(--color-border)]">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-x-10 gap-y-4 py-10 items-start anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
              <span className="font-[family-name:var(--font-display)] text-[color:var(--color-primary)] text-4xl font-bold leading-none">
                01
              </span>
              <div>
                <h3 className="heading-sub font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-2">
                  You talk directly to the person building your site
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                  No account managers. No project coordinators. No handoffs to a junior who joined last month. The founder handles strategy, design, and development on every project — which means faster decisions, fewer misunderstandings, and work that actually reflects what you asked for.
                </p>
              </div>
              <div className="bg-[color:var(--color-surface)] border border-[color:var(--color-border)] rounded-xl px-5 py-4 self-start">
                <p className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest mb-1 font-semibold">vs. a typical agency</p>
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                  3–5 people between you and the person doing the work. Briefings get distorted. Timelines stretch. You pay for the overhead.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-x-10 gap-y-4 py-10 items-start anim-reveal is-visible" style={{ animationDelay: '150ms' }}>
              <span className="font-[family-name:var(--font-display)] text-[color:var(--color-primary)] text-4xl font-bold leading-none">
                02
              </span>
              <div>
                <h3 className="heading-sub font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-2">
                  One price. Quoted upfront. Never moves.
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                  Every project starts with a fixed quote — scope, deliverables, and price in writing before work begins. No hourly billing, no revision fees buried in the fine print, no GST added at the final invoice. What you see is what you pay.
                </p>
              </div>
              <div className="bg-[color:var(--color-surface)] border border-[color:var(--color-border)] rounded-xl px-5 py-4 self-start">
                <p className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest mb-1 font-semibold">vs. hourly billing</p>
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                  Hourly models incentivise slowness. The more hours logged, the more they earn. Fixed pricing aligns our incentive with yours — ship fast, ship right.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-x-10 gap-y-4 py-10 items-start anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
              <span className="font-[family-name:var(--font-display)] text-[color:var(--color-primary)] text-4xl font-bold leading-none">
                03
              </span>
              <div>
                <h3 className="heading-sub font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-2">
                  Your code, your design files, your IP — on delivery
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                  The moment a project is delivered, you receive 100% of the assets — source code, design files, domain access, everything. We hold nothing back and keep nothing on retainer. You are never locked in.
                </p>
              </div>
              <div className="bg-[color:var(--color-surface)] border border-[color:var(--color-border)] rounded-xl px-5 py-4 self-start">
                <p className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest mb-1 font-semibold">vs. retainer models</p>
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                  Many studios retain your domain login or CMS access as leverage for monthly fees. We do not. You can take your site anywhere, any time.
                </p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-x-10 gap-y-4 py-10 items-start anim-reveal is-visible" style={{ animationDelay: '250ms' }}>
              <span className="font-[family-name:var(--font-display)] text-[color:var(--color-primary)] text-4xl font-bold leading-none">
                04
              </span>
              <div>
                <h3 className="heading-sub font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-2">
                  AI and SEO are built in — not bolted on later
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                  Every website we build is optimised for search engines, AI discovery (AEO/GEO), and conversion from the first line of code. Schema markup, structured content, performance budgets — these are defaults, not add-ons you pay extra for.
                </p>
              </div>
              <div className="bg-[color:var(--color-surface)] border border-[color:var(--color-border)] rounded-xl px-5 py-4 self-start">
                <p className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest mb-1 font-semibold">vs. SEO as a upsell</p>
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                  Most agencies quote basic design, then charge separately for SEO, performance tuning, and schema. By the time you add it all up, you have spent twice the initial quote.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — Who We Build For */}
      <section aria-label="Who We Build For" className="w-full py-20 px-6 bg-[color:var(--color-surface)]">
        <div className="w-full md:w-[80%] max-w-none mx-auto">

          {/* Section header */}
          <div className="mb-14 anim-reveal is-visible">
            <span className="text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] font-semibold mb-4 block">
              Who We Serve
            </span>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-4">
              We work best with businesses that<br />
              <span className="text-[color:var(--color-primary)]">know what they want to achieve.</span>
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-base max-w-2xl leading-relaxed">
              We are not the right fit for every project — and we are honest about that. Here are the three types of clients we do our best work with.
            </p>
          </div>

          {/* ICP Cards — 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

            {/* ICP Card 1 — The Established Business Owner */}
            <div className="bg-[color:var(--color-bg)] border border-[color:var(--color-border)] rounded-2xl p-8 flex flex-col gap-6 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
              <div className="flex flex-col gap-2">
                <span className="text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] font-semibold">
                  Profile 01
                </span>
                <h3 className="heading-sub font-[family-name:var(--font-display)] text-[color:var(--color-text)] leading-snug">
                  The Established Business Owner
                </h3>
              </div>
              <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed border-l-2 border-[color:var(--color-primary)]/40 pl-4 italic">
                &ldquo;My business is doing well on referrals but my website is embarrassing. It doesn&apos;t reflect the quality of my actual work and I keep losing credibility when prospects Google me.&rdquo;
              </p>
              <div className="flex flex-col gap-3 mt-auto">
                <p className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest font-semibold">What we build for them</p>
                <ul className="flex flex-col gap-2 font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm">
                  {[
                    'Conversion-focused website that matches their service quality',
                    'Clear service pages that answer buyer questions before they ask',
                    'Lead capture flows that work while they sleep',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[color:var(--color-primary)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-[color:var(--color-border)]">
                <p className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest font-semibold mb-2">Common industries</p>
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm">
                  Professional services · Healthcare & clinics · Textile exporters · Real estate · Manufacturing
                </p>
              </div>
            </div>

            {/* ICP Card 2 — The D2C or E-Commerce Founder */}
            <div className="bg-[color:var(--color-bg)] border border-[color:var(--color-border)] rounded-2xl p-8 flex flex-col gap-6 anim-reveal is-visible" style={{ animationDelay: '180ms' }}>
              <div className="flex flex-col gap-2">
                <span className="text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] font-semibold">
                  Profile 02
                </span>
                <h3 className="heading-sub font-[family-name:var(--font-display)] text-[color:var(--color-text)] leading-snug">
                  The D2C or E-Commerce Founder
                </h3>
              </div>
              <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed border-l-2 border-[color:var(--color-primary)]/40 pl-4 italic">
                &ldquo;I need to launch fast and start selling — not spend 4 months going back and forth on a Shopify theme that still doesn&apos;t feel premium. I want it done right the first time.&rdquo;
              </p>
              <div className="flex flex-col gap-3 mt-auto">
                <p className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest font-semibold">What we build for them</p>
                <ul className="flex flex-col gap-2 font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm">
                  {[
                    'Premium Shopify or Wix Studio store live in 2 weeks',
                    'Product structure and checkout flow optimised for conversion',
                    'Mobile-first — because 80% of Indian buyers browse on phone',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[color:var(--color-primary)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-[color:var(--color-border)]">
                <p className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest font-semibold mb-2">Common industries</p>
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm">
                  Fashion & apparel · Food & FMCG · Home décor · Jewellery · Wellness & beauty
                </p>
              </div>
            </div>

            {/* ICP Card 3 — The Growth-Stage Startup */}
            <div className="bg-[color:var(--color-bg)] border border-[color:var(--color-border)] rounded-2xl p-8 flex flex-col gap-6 anim-reveal is-visible" style={{ animationDelay: '260ms' }}>
              <div className="flex flex-col gap-2">
                <span className="text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] font-semibold">
                  Profile 03
                </span>
                <h3 className="heading-sub font-[family-name:var(--font-display)] text-[color:var(--color-text)] leading-snug">
                  The Growth-Stage Startup
                </h3>
              </div>
              <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed border-l-2 border-[color:var(--color-primary)]/40 pl-4 italic">
                &ldquo;We need to move fast — website, AI chatbot, lead automation — without burning our runway on agency invoices that arrive weeks after the work was supposed to be done.&rdquo;
              </p>
              <div className="flex flex-col gap-3 mt-auto">
                <p className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest font-semibold">What we build for them</p>
                <ul className="flex flex-col gap-2 font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm">
                  {[
                    'Fast Next.js website with AI chatbot integration',
                    'Automation workflows — lead capture, CRM sync, WhatsApp alerts',
                    'Built to scale — clean codebase you can hand to your dev team later',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[color:var(--color-primary)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-[color:var(--color-border)]">
                <p className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest font-semibold mb-2">Common industries</p>
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm">
                  SaaS & tech · EdTech · HealthTech · Fintech · B2B services & automation
                </p>
              </div>
            </div>

          </div>

          {/* Not a fit — honest disqualifier row */}
          <div className="bg-[color:var(--color-surface-offset)] border border-[color:var(--color-border)] rounded-2xl px-8 py-6 flex flex-col md:flex-row md:items-center gap-4 anim-reveal is-visible" style={{ animationDelay: '300ms' }}>
            <div className="shrink-0">
              <svg className="w-6 h-6 text-[color:var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                <span className="text-[color:var(--color-text)] font-semibold">We are probably not the right fit if</span> you need a large team of developers on monthly retainer, require enterprise-scale infrastructure management, or are looking for the lowest possible price at the cost of quality. We would rather refer you to someone better suited than take on work we cannot deliver to our standard.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5 — How We Work */}
      <section aria-label="How We Work" className="w-full py-20 px-6 bg-[color:var(--color-bg)]">
        <div className="w-full md:w-[80%] max-w-none mx-auto">

          {/* Section header */}
          <div className="mb-14 anim-reveal is-visible">
            <span className="text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] font-semibold mb-4 block">
              The Process
            </span>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-4">
              What happens after<br />
              <span className="text-[color:var(--color-primary)]">you hit &lsquo;Get a Free Quote&rsquo;</span>
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-base max-w-2xl leading-relaxed">
              Most agencies make the first step feel like a commitment. Ours does not. Here is exactly what to expect — from first message to live site.
            </p>
          </div>

          {/* Steps — vertical timeline on mobile, horizontal on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--color-border)] rounded-2xl overflow-hidden mb-12">

            {/* Step 1 */}
            <div className="bg-[color:var(--color-surface)] p-8 flex flex-col gap-5 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[color:var(--color-primary)]/[0.10] border border-[color:var(--color-primary)]/20 flex items-center justify-center text-[color:var(--color-primary)] font-bold font-[family-name:var(--font-display)] text-sm shrink-0">
                  01
                </span>
                <span className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest font-semibold">
                  Day 1
                </span>
              </div>
              <div>
                <h3 className="heading-sub font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-3">
                  Discovery Call — Free, No Pitch
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                  A 20–30 minute call where we understand your goals, your audience, your timeline, and your budget. You get an honest recommendation — including if we think you do not need us. No sales deck, no follow-up pressure.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto">
                {[
                  'Understand project scope & goals',
                  'Platform recommendation with reasoning',
                  'Honest budget & timeline estimate',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-xs">
                    <svg className="w-3.5 h-3.5 text-[color:var(--color-primary)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-[color:var(--color-surface)] p-8 flex flex-col gap-5 anim-reveal is-visible" style={{ animationDelay: '180ms' }}>
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[color:var(--color-primary)]/[0.10] border border-[color:var(--color-primary)]/20 flex items-center justify-center text-[color:var(--color-primary)] font-bold font-[family-name:var(--font-display)] text-sm shrink-0">
                  02
                </span>
                <span className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest font-semibold">
                  Day 2–3
                </span>
              </div>
              <div>
                <h3 className="heading-sub font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-3">
                  Fixed Quote — Scope, Price, Timeline
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                  Within 48 hours of the call you receive a written quote — one price, full scope, exact deliverables, and a launch date. No vague estimates. No &ldquo;we will confirm after kickoff.&rdquo; You decide with complete information.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto">
                {[
                  'Written scope — no ambiguity on deliverables',
                  'Fixed price — 50% upfront, 50% on delivery',
                  'Launch date confirmed before work starts',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-xs">
                    <svg className="w-3.5 h-3.5 text-[color:var(--color-primary)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-[color:var(--color-surface)] p-8 flex flex-col gap-5 anim-reveal is-visible" style={{ animationDelay: '260ms' }}>
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-[color:var(--color-primary)]/[0.10] border border-[color:var(--color-primary)]/20 flex items-center justify-center text-[color:var(--color-primary)] font-bold font-[family-name:var(--font-display)] text-sm shrink-0">
                  03
                </span>
                <span className="text-[color:var(--color-text-muted)] text-xs uppercase tracking-widest font-semibold">
                  Week 1–2
                </span>
              </div>
              <div>
                <h3 className="heading-sub font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-3">
                  Build, Review & Hand Over
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                  We build. You stay involved — one structured review round, no endless revision loops. On delivery you receive the live site, all source files, domain access, and a handover walkthrough. Everything is yours from day one.
                </p>
              </div>
              <ul className="flex flex-col gap-2 mt-auto">
                {[
                  'One structured review round — clear and efficient',
                  'Live site + source files + domain access on delivery',
                  '30 days post-launch support included, no extra charge',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-xs">
                    <svg className="w-3.5 h-3.5 text-[color:var(--color-primary)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Reassurance strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-[color:var(--color-surface)] border border-[color:var(--color-border)] rounded-2xl px-8 py-6 anim-reveal is-visible" style={{ animationDelay: '320ms' }}>
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[color:var(--color-primary)]/[0.10] border border-[color:var(--color-primary)]/20">
              <svg className="w-5 h-5 text-[color:var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text)] text-sm font-semibold">
                Most enquiries get a response within 4 hours
              </p>
              <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                Send us a message today and you will have a discovery call booked and a written quote in hand before the end of the week — with zero obligation to proceed.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center min-h-[44px] bg-[color:var(--color-primary)] text-[color:var(--color-text-inverse)] font-semibold px-6 py-3 rounded-full hover:bg-[color:var(--color-primary-hover)] active:scale-95 transition-all duration-300 text-[length:var(--text-sm)] sm:ml-auto"
            >
              Start the conversation →
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 6 — Client Voices */}
      <section aria-label="Client Voices" className="w-full py-20 px-6 bg-[color:var(--color-surface)]">
        <div className="w-full md:w-[80%] max-w-none mx-auto">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 anim-reveal is-visible">
            <div>
              <span className="text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] font-semibold mb-4 block">
                Client Stories
              </span>
              <h2 className="heading-section font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-4">
                Real results.<br />
                <span className="text-[color:var(--color-primary)]">Real Indian businesses.</span>
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-base max-w-xl leading-relaxed">
                We let the work speak. Here is what three clients said after their projects went live.
              </p>
            </div>
            <Link
              href="/#testimonials"
              className="shrink-0 self-start md:self-auto inline-flex items-center gap-2 text-[color:var(--color-text-muted)] hover:text-[color:var(--color-primary)] text-[length:var(--text-sm)] font-medium transition-colors duration-200 group"
            >
              Read all client stories
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* 3 Testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 — Dr. Raghav Malhotra / SmileCare Dental */}
            <figure className="bg-[color:var(--color-bg)] border border-[color:var(--color-border)] rounded-2xl p-8 flex flex-col gap-6 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>

              {/* Star rating */}
              <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[color:var(--color-primary)]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1">
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text)] text-sm leading-relaxed">
                  &ldquo;Honestly, I was skeptical — my last developer disappeared after taking half the payment. This time the site went live in under 3 weeks, and patients started booking online from day one. The WhatsApp integration alone saved my receptionist 2 hours a day.&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <figcaption className="flex flex-col gap-1 pt-4 border-t border-[color:var(--color-border)]">
                <span className="font-[family-name:var(--font-display)] text-[color:var(--color-text)] text-sm font-semibold">
                  Dr. Raghav Malhotra
                </span>
                <span className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-xs">
                  Dental Surgeon &amp; Clinic Owner · SmileCare Dental, Dwarka
                </span>
                <span className="mt-2 inline-flex self-start items-center gap-1.5 bg-[color:var(--color-primary)]/[0.08] border border-[color:var(--color-primary)]/20 text-[color:var(--color-primary)] text-[length:var(--text-xs)] px-3 py-1 rounded-full font-medium">
                  Next.js · AI Chatbot
                </span>
              </figcaption>
            </figure>

            {/* Card 2 — Suresh Bhatt / LuxeWeave Fabrics */}
            <figure className="bg-[color:var(--color-bg)] border border-[color:var(--color-border)] rounded-2xl p-8 flex flex-col gap-6 anim-reveal is-visible" style={{ animationDelay: '180ms' }}>

              {/* Star rating */}
              <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[color:var(--color-primary)]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1">
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text)] text-sm leading-relaxed">
                  &ldquo;Humara catalogue 800 products ka tha aur purani website pe update karna ek nightmare tha. Ab meri team khud hi products add karti hai — koi developer ko call nahi karna. Bahut smooth kaam hai.&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <figcaption className="flex flex-col gap-1 pt-4 border-t border-[color:var(--color-border)]">
                <span className="font-[family-name:var(--font-display)] text-[color:var(--color-text)] text-sm font-semibold">
                  Suresh Bhatt
                </span>
                <span className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-xs">
                  Managing Director · LuxeWeave Fabrics, Surat
                </span>
                <span className="mt-2 inline-flex self-start items-center gap-1.5 bg-[color:var(--color-primary)]/[0.08] border border-[color:var(--color-primary)]/20 text-[color:var(--color-primary)] text-[length:var(--text-xs)] px-3 py-1 rounded-full font-medium">
                  Wix Studio · Catalogue
                </span>
              </figcaption>
            </figure>

            {/* Card 3 — Vikram Sharma / PrimeSpace Realty */}
            <figure className="bg-[color:var(--color-bg)] border border-[color:var(--color-border)] rounded-2xl p-8 flex flex-col gap-6 anim-reveal is-visible" style={{ animationDelay: '260ms' }}>

              {/* Star rating */}
              <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[color:var(--color-primary)]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1">
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text)] text-sm leading-relaxed">
                  &ldquo;We were losing leads because follow-ups weren&apos;t happening on time. Now every inquiry goes straight to our CRM with a WhatsApp notification. Our conversion rate on leads has gone up noticeably — the automation paid for itself in two weeks.&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <figcaption className="flex flex-col gap-1 pt-4 border-t border-[color:var(--color-border)]">
                <span className="font-[family-name:var(--font-display)] text-[color:var(--color-text)] text-sm font-semibold">
                  Vikram Sharma
                </span>
                <span className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-xs">
                  Sales Director · PrimeSpace Realty, Noida
                </span>
                <span className="mt-2 inline-flex self-start items-center gap-1.5 bg-[color:var(--color-primary)]/[0.08] border border-[color:var(--color-primary)]/20 text-[color:var(--color-primary)] text-[length:var(--text-xs)] px-3 py-1 rounded-full font-medium">
                  WordPress · Lead Automation
                </span>
              </figcaption>
            </figure>

          </div>
        </div>
      </section>

      {/* SECTION 7 — Final CTA */}
      <section aria-label="Start Your Project" className="w-full py-20 px-6 bg-[color:var(--color-bg)]">
        <div className="w-full md:w-[80%] max-w-none mx-auto">

          {/* CTA card — dark surface, not full-bleed lime */}
          <div className="relative overflow-hidden bg-[color:var(--color-surface)] border border-[color:var(--color-border)] rounded-3xl px-8 py-16 md:px-16 flex flex-col items-center text-center anim-reveal is-visible">

            {/* Subtle background accent glow — top right */}
            <div
              className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-[0.07]"
              style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            {/* Subtle background accent glow — bottom left */}
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-[0.05]"
              style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            {/* Eyebrow */}
            <div className="relative flex items-center gap-2 border border-[color:var(--color-primary)]/[0.18] bg-[color:var(--color-primary)]/[0.08] text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-primary)] animate-pulse" />
              No pitch. No pressure. Just an honest conversation.
            </div>

            {/* Heading */}
            <h2 className="relative heading-section font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-6 max-w-3xl">
              Tell us what you&apos;re building.<br />
              <span className="text-[color:var(--color-primary)]">We&apos;ll tell you exactly what it&apos;ll cost.</span>
            </h2>

            {/* Subheading */}
            <p className="relative font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-base max-w-2xl leading-relaxed mb-10">
              Most enquiries get a written quote within 24 hours. No agency decks,
              no discovery &ldquo;workshops&rdquo; that cost ₹50,000 before work even starts.
              One conversation. One fixed price. One launch date.
            </p>

            {/* CTAs */}
            <div className="relative flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[48px] bg-[color:var(--color-primary)] text-[color:var(--color-text-inverse)] font-semibold px-8 py-4 rounded-full hover:bg-[color:var(--color-primary-hover)] hover:shadow-[var(--glow-md)] active:scale-95 transition-all duration-300 text-[length:var(--text-sm)]"
              >
                Get a Free Quote →
              </Link>
              <a
                href="https://wa.me/919599143235"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-[48px] border border-[color:var(--color-border)] text-[color:var(--color-text-muted)] font-semibold px-8 py-4 rounded-full hover:border-[color:var(--color-primary)]/40 hover:text-[color:var(--color-primary)] active:scale-95 transition-all duration-300 text-[length:var(--text-sm)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust strip — 4 micro-signals */}
            <div className="relative w-full border-t border-[color:var(--color-border)] pt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Response within 4 hours' },
                { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Fixed price, no surprises' },
                { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', label: '100% IP ownership on delivery' },
                { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', label: '30-day post-launch support' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center">
                  <svg className="w-5 h-5 text-[color:var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-xs leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
