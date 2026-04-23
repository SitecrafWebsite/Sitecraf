'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    slug: "shopify-vs-wix-studio-for-indian-businesses",
    title: "Shopify vs Wix Studio for Indian Businesses: Which One Actually Saves You Money?",
    excerpt: "Most Indian service businesses are paying Shopify's e-commerce fees for a website that never sells a single product online. If you only need a professional catalogue site, you're likely overpaying by ₹20,000–₹40,000 a year. Here's how to know which platform you actually need.",
    category: "Platforms",
    readTime: "6 min read",
    date: "April 2026",
    featured: true,
    seoTag: "High Intent",
    author: "Sitecraf",
    image: "https://picsum.photos/seed/shopifywix/800/600"
  },
  {
    slug: "why-most-small-business-websites-dont-rank",
    title: "Why Most Small Business Websites Don't Rank — Even After Going Live",
    excerpt: "Going live is not the same as being found. Most small business websites are technically invisible to Google the day they launch — not because the design is wrong, but because of 5 fixable gaps most developers skip. This covers all of them.",
    category: "SEO",
    readTime: "7 min read",
    date: "April 2026",
    featured: false,
    seoTag: "SEO",
    author: "Sitecraf",
    image: "https://picsum.photos/seed/smallbizseo/800/600"
  },
  {
    slug: "what-is-aeo-answer-engine-optimization",
    title: "What Is AEO? A Straightforward Guide for Business Owners",
    excerpt: "Google is no longer the only place customers look for answers. ChatGPT, Perplexity, and Google AI Overviews are now answering questions your website should be answering. AEO is how you show up there — and it's simpler than most people think.",
    category: "AEO",
    readTime: "5 min read",
    date: "April 2026",
    featured: false,
    seoTag: "AEO",
    author: "Sitecraf",
    image: "https://picsum.photos/seed/aeoguide/800/600"
  },
  {
    slug: "when-an-ai-chatbot-is-worth-it",
    title: "When an AI Chatbot Is Actually Worth It for a Small Business",
    excerpt: "A chatbot that qualifies leads and answers FAQs at 2am can be a genuine growth tool. But for most small businesses, it's an expensive distraction. This guide gives you a clear framework to decide — based on your enquiry volume, not the hype.",
    category: "AI Tools",
    readTime: "5 min read",
    date: "April 2026",
    featured: false,
    seoTag: "AI",
    author: "Sitecraf",
    image: "https://picsum.photos/seed/aichatbot/800/600"
  },
  {
    slug: "wordpress-vs-nextjs-for-seo",
    title: "WordPress vs Next.js for SEO: Which Wins for Indian Businesses?",
    excerpt: "Both platforms can rank. The real question is which one fits your team, your content volume, and your performance budget. Getting this wrong means months of migration pain later. This breaks down the decision by business type, not developer preference.",
    category: "Platforms",
    readTime: "6 min read",
    date: "April 2026",
    featured: false,
    seoTag: "SEO",
    author: "Sitecraf",
    image: "https://picsum.photos/seed/wpvsnextjs/800/600"
  },
  {
    slug: "core-web-vitals-guide-india",
    title: "Core Web Vitals Explained for Indian Business Owners",
    excerpt: "Google uses page speed as a ranking signal — and most Indian business websites built on shared hosting fail all three Core Web Vital tests. LCP, INP, and CLS explained in plain English, with the exact fixes a Delhi web developer should be making on your site.",
    category: "Performance",
    readTime: "5 min read",
    date: "April 2026",
    featured: false,
    seoTag: "Performance",
    author: "Sitecraf",
    image: "https://picsum.photos/seed/corevitals/800/600"
  },
  {
    slug: "what-is-geo-generative-engine-optimization",
    title: "What Is GEO? How to Get ChatGPT and Gemini to Recommend Your Business",
    excerpt: "SEO gets you on Google. GEO gets your business recommended inside ChatGPT and Gemini. For Indian SMEs, this is the biggest untapped visibility opportunity of 2026 — and most competitors haven't started yet.",
    category: "GEO",
    readTime: "5 min read",
    date: "April 2026",
    featured: false,
    seoTag: "GEO",
    author: "Sitecraf",
    image: "https://picsum.photos/seed/geochatgpt/800/600"
  }
];

const categories = [
  "All",
  "SEO",
  "AEO",
  "GEO",
  "Platforms",
  "AI Tools",
  "Performance",
];

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);
  const filteredPosts = activeCategory === 'All'
    ? regularPosts
    : regularPosts.filter(post => post.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  const cardCTAs: Record<string, string> = {
    "shopify-vs-wix-studio-for-indian-businesses": "See the Cost Breakdown →",
    "why-most-small-business-websites-dont-rank":  "Find Your SEO Gaps →",
    "what-is-aeo-answer-engine-optimization":      "Understand AEO in 5 mins →",
    "when-an-ai-chatbot-is-worth-it":              "See If You Need One →",
    "wordpress-vs-nextjs-for-seo":                 "Find the Right Stack →",
    "core-web-vitals-guide-india":                 "Fix Your Vitals →",
    "what-is-geo-generative-engine-optimization":  "Get Found by AI →",
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#000000]">
      {/* SECTION 1 — Hero */}
      <section aria-label="Blog Hero" className="w-full pt-32 pb-16 px-6 bg-[color:var(--color-bg)] text-center">
        <div className="w-full md:w-[80%] max-w-none mx-auto flex flex-col items-center">
          <div className="text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-6 anim-reveal is-visible">
            FOR INDIAN BUSINESS OWNERS
          </div>
          <h1 className="heading-section font-[family-name:var(--font-display)] text-[color:var(--color-text)] tracking-tight leading-tight mb-6 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
            The Website & Growth Blog Indian Businesses <span className="text-[color:var(--color-primary)]">Actually Bookmark</span>
          </h1>
          <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-lg max-w-3xl leading-relaxed mb-8 anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            No fluff. No recycled advice. Just practical guides on websites, SEO, AEO, GEO, AI chatbots, and automation — written from real projects for Indian founders and SMEs who want results, not theory.
          </p>
          <div className="flex flex-wrap justify-center gap-3 anim-reveal is-visible" style={{ animationDelay: '300ms' }}>
            <span className="bg-[color:var(--color-surface)] border border-white/[0.06] rounded-full px-3 py-1.5 text-[color:var(--color-text-muted)] text-xs">Jargon-free</span>
            <span className="bg-[color:var(--color-surface)] border border-white/[0.06] rounded-full px-3 py-1.5 text-[color:var(--color-text-muted)] text-xs">India-specific context</span>
            <span className="bg-[color:var(--color-surface)] border border-white/[0.06] rounded-full px-3 py-1.5 text-[color:var(--color-text-muted)] text-xs">Built from real projects</span>
          </div>
        </div>
      </section>

      <div className="w-full md:w-[80%] max-w-none mx-auto border-t border-[color:var(--color-border)]"></div>

      {/* SECTION 2 — Featured Article */}
      {featuredPost && (
        <section aria-label="Featured Article" className="w-full py-16 px-6 bg-[color:var(--color-bg)]">
          <div className="w-full max-w-[var(--content-wide)] mx-auto">
            <div className="bg-[color:var(--color-surface)] border border-[color:var(--color-primary)]/[0.18] rounded-3xl overflow-hidden flex flex-col lg:flex-row anim-reveal is-visible">
              <div className="w-full lg:w-1/2 h-64 lg:h-auto relative">
                <Image 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  fill
                  className="object-cover absolute inset-0"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="bg-[color:var(--color-surface-offset)] border border-white/[0.08] text-[color:var(--color-text)] text-xs px-3 py-1 rounded-full">{featuredPost.category}</span>
                  <span className="bg-[color:var(--color-primary)]/[0.1] text-[color:var(--color-primary)] text-xs px-3 py-1 rounded-full">{featuredPost.seoTag}</span>
                  <span className="text-[color:var(--color-text-muted)] text-xs">{featuredPost.date}</span>
                  <span className="bg-[color:var(--color-primary)] text-[color:var(--color-bg)] text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider ml-auto">Updated for 2026</span>
                </div>
                <h2 className="heading-sub font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-base mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <ul className="space-y-3 mb-8 font-[family-name:var(--font-body)] text-sm text-[color:var(--color-text-muted)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[color:var(--color-primary)] mt-0.5">•</span>
                    <span><strong className="text-[color:var(--color-text)] font-medium">Who this saves money for:</strong> Manufacturers, exporters, and service businesses paying Shopify fees they don&apos;t need</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[color:var(--color-primary)] mt-0.5">•</span>
                    <span><strong className="text-[color:var(--color-text)] font-medium">What you&apos;ll walk away knowing:</strong> Exactly when Shopify is the right call — and when it&apos;s quietly costing you ₹30,000+ a year more than necessary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[color:var(--color-primary)] mt-0.5">•</span>
                    <span><strong className="text-[color:var(--color-text)] font-medium">Why read this now:</strong> Platform fees compound. The sooner you&apos;re on the right one, the more margin you protect.</span>
                  </li>
                </ul>
                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-6 border-t border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[color:var(--color-surface-offset)] border border-white/[0.08] flex items-center justify-center text-[color:var(--color-text)] text-xs font-bold">
                      S
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[color:var(--color-text)] text-sm font-medium">{featuredPost.author}</span>
                      <span className="text-[color:var(--color-text-muted)] text-xs">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center justify-center bg-[color:var(--color-primary)] text-[color:var(--color-bg)] font-semibold px-6 py-3 rounded-full hover:bg-[color:var(--color-primary-hover)] transition-colors text-sm">
                    Read the Full Guide →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3 — Category Filter Bar */}
      <section aria-label="Category Filters" className="w-full py-6 px-6 bg-[color:var(--color-bg)] border-b border-[color:var(--color-border)]/[0.08]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">
          <div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap gap-3 scrollbar-hide anim-reveal is-visible">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[color:var(--color-primary)] text-[color:var(--color-bg)] rounded-full px-5 py-2 text-sm font-semibold'
                    : 'border border-white/[0.08] text-[color:var(--color-text-muted)] rounded-full px-5 py-2 text-sm hover:text-[color:var(--color-text)] hover:border-white/[0.16]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-4 text-[color:var(--color-text-muted)] text-xs font-[family-name:var(--font-body)] anim-reveal is-visible">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} — pick a topic or read them all.
          </div>
        </div>
      </section>

      {/* SECTION 4 — Article Grid */}
      <section aria-label="Articles" className="w-full py-8 px-6 bg-[color:var(--color-bg)]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col h-full bg-[color:var(--color-surface)] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/[0.16] hover:-translate-y-1 transition-all duration-300 anim-reveal is-visible" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-full aspect-[16/10] relative overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[color:var(--color-surface-offset)] border border-white/[0.08] text-[color:var(--color-text)] text-xs px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-[color:var(--color-text-muted)] text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="heading-sub font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-3 group-hover:text-[color:var(--color-primary)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.08]">
                    <span className="text-[color:var(--color-text-muted)] text-xs">{post.date}</span>
                    <span className="text-[color:var(--color-primary)] text-sm font-medium group-hover:translate-x-1 transition-transform">{cardCTAs[post.slug] ?? "Read More →"}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <div className="text-center py-20 anim-reveal is-visible">
              <p className="text-[color:var(--color-text-muted)] mb-2">
                No articles in this category yet.
              </p>
              <p className="text-[color:var(--color-text-muted)] text-sm mb-6">
                We&apos;re publishing new guides every month — or browse all articles.
              </p>
              <button
                onClick={() => setActiveCategory('All')}
                className="inline-flex items-center justify-center bg-[color:var(--color-primary)] text-[color:var(--color-bg)] rounded-full px-6 py-3 text-sm font-semibold hover:bg-[color:var(--color-primary-hover)] transition-colors"
              >
                Browse All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5 — AEO / SEO Value Strip */}
      <section aria-label="Why This Blog Exists" className="w-full py-16 px-6 bg-[color:var(--color-surface)]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto text-center md:text-left">
          <div className="text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-4 anim-reveal is-visible">
            WHY THESE GUIDES WORK
          </div>
          <h2 className="heading-section font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-6 anim-reveal is-visible">
            Every Article Is Written to Help You Decide — Not Just Understand
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-lg max-w-3xl mb-12 anim-reveal is-visible">
            There&apos;s no shortage of content about websites and SEO. Most of it is written to rank on Google, not to help a business owner make a faster, smarter decision. We write differently — and here&apos;s what that means in practice.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 anim-reveal is-visible">
            <div className="bg-[color:var(--color-surface-offset)] border border-white/[0.06] rounded-2xl p-6 text-left hover:border-white/[0.12] transition-colors">
              <h3 className="heading-sub font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-3">You get the answer, not just the background</h3>
              <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                Every guide leads with the decision or recommendation first. No 500-word intros about &apos;the digital landscape&apos; before you get to the point.
              </p>
            </div>
            <div className="bg-[color:var(--color-surface-offset)] border border-white/[0.06] rounded-2xl p-6 text-left hover:border-white/[0.12] transition-colors">
              <h3 className="heading-sub font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-3">Written from actual projects, not research tabs</h3>
              <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                Our guides come from work we&apos;ve done for Indian businesses across Delhi, Mumbai, and Bangalore — not recycled advice from US SaaS blogs repackaged for Indian audiences.
              </p>
            </div>
            <div className="bg-[color:var(--color-surface-offset)] border border-white/[0.06] rounded-2xl p-6 text-left hover:border-white/[0.12] transition-colors">
              <h3 className="heading-sub font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-3">Every guide helps you act, not just learn</h3>
              <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm leading-relaxed">
                We write about websites, SEO, AI tools, and automation with one goal: by the end, you know what to do next. Whether that&apos;s a platform decision, a dev brief, or a call to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Newsletter / Lead Capture CTA */}
      <section aria-label="Newsletter" className="w-full py-20 px-6 bg-[color:var(--color-bg)]">
        <div className="w-full max-w-[var(--content-wide)] mx-auto">
          <div className="bg-[color:var(--color-surface)] border border-[color:var(--color-primary)]/[0.18] rounded-3xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center anim-reveal is-visible">
            <div>
              <div className="text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-4">
                FREE — STRAIGHT TO YOUR INBOX
              </div>
              <h2 className="heading-section font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-6">
                The Shortcut Indian Business Owners Use to Stay Ahead Online
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-base leading-relaxed mb-8">
                A short, practical email — sent 1–2 times a month — with one genuinely useful idea for your website, SEO, or digital growth. No padding. No sponsored content. Just the kind of insight that usually costs a consulting call.
              </p>
              <ul className="space-y-3 font-[family-name:var(--font-body)] text-[color:var(--color-text)] text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[color:var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  One actionable tip per email (not a content dump)
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[color:var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  India-specific — platforms, pricing, and context that actually applies here
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[color:var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Real examples from projects we&apos;ve worked on
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[color:var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Occasional early access to guides before they&apos;re published
                </li>
              </ul>
            </div>
            
            <div className="bg-[color:var(--color-surface-offset)] border border-white/[0.06] rounded-2xl p-8">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                  <p className="font-[family-name:var(--font-display)] text-[color:var(--color-text)] font-semibold text-base mb-2">
                    Join other Indian business owners
                  </p>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-[color:var(--color-surface)] border border-white/[0.08] rounded-full px-5 py-4 text-[color:var(--color-text)] focus:border-[color:var(--color-primary)]/40 focus:outline-none transition-colors font-[family-name:var(--font-body)]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[color:var(--color-primary)] text-[color:var(--color-bg)] rounded-full px-6 py-4 font-semibold hover:bg-[color:var(--color-primary-hover)] transition-colors active:scale-[0.98]"
                  >
                    Send Me the Next Issue →
                  </button>
                  <p className="text-center text-[color:var(--color-text-muted)] text-xs mt-2 font-[family-name:var(--font-body)]">
                    No spam. Plain text. Unsubscribe with one click.
                  </p>
                </form>
              ) : (
                <div className="bg-[color:var(--color-surface)] border border-[color:var(--color-primary)]/[0.18] rounded-2xl p-6 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-12 h-12 bg-[color:var(--color-primary)]/[0.1] rounded-full flex items-center justify-center mx-auto mb-4 text-[color:var(--color-primary)]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="heading-sub font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-2">Thanks — you&apos;re on the list.</h3>
                  <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-sm">You&apos;ll hear from us when something genuinely useful is published.</p>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Bottom CTA Banner */}
      <section
        aria-label="Start a Project"
        className="w-full py-20 px-6 bg-[color:var(--color-primary)]"
      >
        <div className="w-full max-w-[var(--content-wide)] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 anim-reveal is-visible">

          {/* Left — Heading + Body */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-block text-[color:var(--color-bg)] text-[length:var(--text-xs)] uppercase tracking-[0.14em] opacity-70 mb-5">
              Let&apos;s Put This Into Practice
            </div>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[color:var(--color-bg)] mb-5 leading-tight">
              Reading gets you clarity.<br />Working with us gets you results.
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[color:var(--color-bg)]/70 text-[length:var(--text-base)] leading-relaxed max-w-xl">
              If something you read here resonated — a platform decision, an SEO gap,
              a chatbot idea — bring it to us. We&apos;ll give you a clear recommendation
              and a rough price range. No sales script. No pressure.
            </p>
          </div>

          {/* Right — CTAs stacked */}
          <div className="flex flex-col gap-4 min-w-fit">
            <a
              href="https://wa.me/919599143235"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[color:var(--color-bg)] text-[color:var(--color-primary)] font-semibold rounded-full px-8 py-4 hover:opacity-90 transition-all active:scale-95 whitespace-nowrap"
            >
              Chat on WhatsApp →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-[color:var(--color-bg)]/30 text-[color:var(--color-bg)] font-semibold rounded-full px-8 py-4 hover:border-[color:var(--color-bg)]/60 hover:bg-[color:var(--color-bg)]/8 transition-all active:scale-95 whitespace-nowrap text-center"
            >
              Get a Free Quote
            </a>
            <p className="text-[color:var(--color-bg)]/50 text-xs text-center font-[family-name:var(--font-body)]">
              Replies within 4 hours on weekdays
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
