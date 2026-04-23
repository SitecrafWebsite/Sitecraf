'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    slug: "shopify-vs-wix-studio-for-indian-businesses",
    title: "Shopify vs Wix Studio for Indian Businesses: Which One Actually Saves You Money?",
    excerpt: "If you only need a professional catalogue website, Shopify may be costing you far more than necessary. Here is when Wix Studio is the smarter move for Indian service businesses and B2B brands.",
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
    excerpt: "Publishing a website is not the same as building an SEO-ready website. These are the technical and content gaps most businesses miss.",
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
    excerpt: "Search is changing. This guide explains Answer Engine Optimization in plain English and how to make your website easier for AI tools like ChatGPT, Perplexity, and Google AI Overviews to find and cite your business.",
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
    excerpt: "Not every business needs a chatbot. This guide explains exactly when it makes commercial sense — and when it is just unnecessary complexity.",
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
    excerpt: "Both can rank well. But the right choice depends on your content volume, technical resources, and how much control you want over performance and structured data.",
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
    excerpt: "Google uses page experience as a ranking signal. Here is what LCP, INP, and CLS actually mean — and what a website developer in Delhi can do to fix them on your site.",
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
    excerpt: "GEO (Generative Engine Optimization) is the emerging practice of making your business visible inside ChatGPT, Gemini, and Copilot responses — not just on Google. Here is what it means for Indian businesses and how it differs from SEO and AEO.",
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
  "Web Development",
  "AI Chatbots",
  "Pricing",
  "Hiring"
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

  return (
    <main className="flex flex-col min-h-screen bg-[#000000]">
      {/* SECTION 1 — Hero */}
      <section aria-label="Blog Hero" className="w-full pt-32 pb-16 px-6 bg-[color:var(--color-bg)] text-center">
        <div className="w-full md:w-[80%] max-w-none mx-auto flex flex-col items-center">
          <div className="text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-6 anim-reveal is-visible">
            Insights & Guides
          </div>
          <h1 className="heading-section font-[family-name:var(--font-display)] text-[color:var(--color-text)] tracking-tight leading-tight mb-6 anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
            Articles That Help You Build <span className="text-[color:var(--color-primary)]">Smarter</span> Online
          </h1>
          <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-lg max-w-3xl leading-relaxed mb-8 anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            Straightforward writing on websites, SEO, AEO, GEO, AI chatbots, automation, and digital growth — created for Indian business owners who want clarity, not jargon.
          </p>
          <div className="flex flex-wrap justify-center gap-3 anim-reveal is-visible" style={{ animationDelay: '300ms' }}>
            <span className="bg-[color:var(--color-surface)] border border-white/[0.06] rounded-full px-3 py-1.5 text-[color:var(--color-text-muted)] text-xs">SEO-ready</span>
            <span className="bg-[color:var(--color-surface)] border border-white/[0.06] rounded-full px-3 py-1.5 text-[color:var(--color-text-muted)] text-xs">AEO-friendly</span>
            <span className="bg-[color:var(--color-surface)] border border-white/[0.06] rounded-full px-3 py-1.5 text-[color:var(--color-text-muted)] text-xs">Written for decision-makers</span>
          </div>
        </div>
      </section>

      <div className="w-full md:w-[80%] max-w-none mx-auto border-t border-[color:var(--color-border)]"></div>

      {/* SECTION 2 — Featured Article */}
      {featuredPost && (
        <section aria-label="Featured Article" className="w-full py-10 px-6 bg-[#000000]">
          <div className="w-full md:w-[80%] max-w-none mx-auto">
            <div className="bg-[#0a0a0a] border border-[#b5ff3e]/[0.18] rounded-3xl overflow-hidden flex flex-col lg:flex-row anim-reveal is-visible">
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
                  <span className="bg-[#111111] border border-white/[0.08] text-[#e8e8f0] text-xs px-3 py-1 rounded-full">{featuredPost.category}</span>
                  <span className="bg-[#b5ff3e]/[0.1] text-[#b5ff3e] text-xs px-3 py-1 rounded-full">{featuredPost.seoTag}</span>
                  <span className="text-[#66667a] text-xs">{featuredPost.date}</span>
                  <span className="bg-[#b5ff3e] text-[#000000] text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider ml-auto">Updated for 2026</span>
                </div>
                <h2 className="heading-sub font-[family-name:var(--font-display)] text-[#e8e8f0] mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-base mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <ul className="space-y-3 mb-8 font-[family-name:var(--font-body)] text-sm text-[#8888a0]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#b5ff3e] mt-0.5">•</span>
                    <span><strong className="text-[#e8e8f0] font-medium">Who this is for:</strong> Manufacturers, exporters, and service businesses comparing platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b5ff3e] mt-0.5">•</span>
                    <span><strong className="text-[#e8e8f0] font-medium">What you&apos;ll learn:</strong> When Shopify is overkill, when Wix Studio wins, and when custom code is worth it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#b5ff3e] mt-0.5">•</span>
                    <span><strong className="text-[#e8e8f0] font-medium">Why it matters now:</strong> Platform fees quietly eat margins if you only need a catalogue site</span>
                  </li>
                </ul>
                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-6 border-t border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#111111] border border-white/[0.08] flex items-center justify-center text-[#e8e8f0] text-xs font-bold">
                      S
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#e8e8f0] text-sm font-medium">{featuredPost.author}</span>
                      <span className="text-[#66667a] text-xs">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center justify-center bg-[#b5ff3e] text-[#000000] font-semibold px-6 py-3 rounded-full hover:bg-[#c4ff66] transition-colors text-sm">
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3 — Category Filter Bar */}
      <section aria-label="Category Filters" className="w-full py-6 px-6 bg-[#000000] sticky top-[72px] z-30 border-b border-white/[0.08] backdrop-blur-md bg-[#000000]/80">
        <div className="w-full md:w-[80%] max-w-none mx-auto">
          <div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap gap-3 scrollbar-hide anim-reveal is-visible">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#b5ff3e] text-[#000000] rounded-full px-5 py-2 text-sm font-semibold'
                    : 'border border-white/[0.08] text-[#8888a0] rounded-full px-5 py-2 text-sm hover:text-[#e8e8f0] hover:border-white/[0.16]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-4 text-[#66667a] text-xs font-[family-name:var(--font-body)] anim-reveal is-visible">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Article Grid */}
      <section aria-label="Articles" className="w-full py-8 px-6 bg-[#000000]">
        <div className="w-full md:w-[80%] max-w-none mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col h-full bg-[#0a0a0a] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/[0.16] hover:-translate-y-1 transition-all duration-300 anim-reveal is-visible" style={{ animationDelay: `${index * 100}ms` }}>
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
                    <span className="bg-[#111111] border border-white/[0.08] text-[#e8e8f0] text-xs px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-[#66667a] text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="heading-sub font-[family-name:var(--font-display)] text-[#e8e8f0] mb-3 group-hover:text-[#b5ff3e] transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.08]">
                    <span className="text-[#66667a] text-xs">{post.date}</span>
                    <span className="text-[#b5ff3e] text-sm font-medium group-hover:translate-x-1 transition-transform">Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-[#8888a0] anim-reveal is-visible">
              No articles found in this category.
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5 — AEO / SEO Value Strip */}
      <section aria-label="Why This Blog Exists" className="w-full py-16 px-6 bg-[#0a0a0a]">
        <div className="w-full md:w-[80%] max-w-none mx-auto text-center md:text-left">
          <div className="text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-4 anim-reveal is-visible">
            Why This Blog Exists
          </div>
          <h2 className="heading-section font-[family-name:var(--font-display)] text-[#e8e8f0] mb-6 anim-reveal is-visible">
            Built for humans first — and easier for search engines to trust
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-lg max-w-3xl mb-12 anim-reveal is-visible">
            Our content is written to be useful, scannable, and specific. That helps readers make decisions faster, and it also makes the information easier for search engines and AI engines to interpret.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 anim-reveal is-visible">
            <div className="bg-[#111111] border border-white/[0.06] rounded-2xl p-6 text-left hover:border-white/[0.12] transition-colors">
              <h3 className="heading-sub font-[family-name:var(--font-display)] text-[#e8e8f0] mb-3">Clear structure</h3>
              <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-sm leading-relaxed">
                Short paragraphs, strong headings, and direct answers make articles easier to read and easier to summarize.
              </p>
            </div>
            <div className="bg-[#111111] border border-white/[0.06] rounded-2xl p-6 text-left hover:border-white/[0.12] transition-colors">
              <h3 className="heading-sub font-[family-name:var(--font-display)] text-[#e8e8f0] mb-3">Specific expertise</h3>
              <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-sm leading-relaxed">
                We write about websites, SEO, AI chatbots, and growth strategy from actual project experience — not recycled generic advice.
              </p>
            </div>
            <div className="bg-[#111111] border border-white/[0.06] rounded-2xl p-6 text-left hover:border-white/[0.12] transition-colors">
              <h3 className="heading-sub font-[family-name:var(--font-display)] text-[#e8e8f0] mb-3">Commercial clarity</h3>
              <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-sm leading-relaxed">
                Every guide is written to help a business owner make a better decision, not just attract empty traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Newsletter / Lead Capture CTA */}
      <section aria-label="Newsletter" className="w-full py-20 px-6 bg-[#000000]">
        <div className="w-full md:w-[80%] max-w-none mx-auto">
          <div className="bg-[#0a0a0a] border border-[#b5ff3e]/[0.18] rounded-3xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center anim-reveal is-visible">
            <div>
              <div className="text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-4">
                Stay Updated
              </div>
              <h2 className="heading-section font-[family-name:var(--font-display)] text-[#e8e8f0] mb-6">
                Get useful ideas — not spam
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-base leading-relaxed mb-8">
                Occasional emails about websites, SEO, AI tools, and digital growth. Practical insights only. No fluff. No daily noise.
              </p>
              <ul className="space-y-3 font-[family-name:var(--font-body)] text-[#e8e8f0] text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#b5ff3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  New articles
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#b5ff3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Launch tips
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#b5ff3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Pricing insights
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#b5ff3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  AI and automation ideas
                </li>
              </ul>
            </div>
            
            <div className="bg-[#111111] border border-white/[0.06] rounded-2xl p-8">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full bg-[#111111] border border-white/[0.08] rounded-full px-5 py-4 text-[#e8e8f0] focus:border-[#b5ff3e]/40 focus:outline-none transition-colors font-[family-name:var(--font-body)]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#b5ff3e] text-[#000000] rounded-full px-6 py-4 font-semibold hover:bg-[#c4ff66] transition-colors active:scale-[0.98]"
                  >
                    Subscribe
                  </button>
                  <p className="text-center text-[#66667a] text-xs mt-2 font-[family-name:var(--font-body)]">
                    We usually email 1–2 times per month.
                  </p>
                </form>
              ) : (
                <div className="bg-[#111111] border border-[#b5ff3e]/[0.18] rounded-2xl p-6 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-12 h-12 bg-[#b5ff3e]/[0.1] rounded-full flex items-center justify-center mx-auto mb-4 text-[#b5ff3e]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="heading-sub font-[family-name:var(--font-display)] text-[#e8e8f0] mb-2">Thanks — you&apos;re on the list.</h3>
                  <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-sm">You&apos;ll hear from us when something genuinely useful is published.</p>
                </div>
              )}
              
              <div className="mt-8 pt-6 border-t border-white/[0.08] text-center">
                <p className="text-[#8888a0] text-sm mb-3 font-[family-name:var(--font-body)]">Prefer direct help instead?</p>
                <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-[#b5ff3e] hover:text-[#c4ff66] font-medium text-sm transition-colors group">
                  Talk on WhatsApp 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Bottom CTA Banner */}
      <section aria-label="Call to Action" className="w-full py-16 px-6 bg-[#b5ff3e] text-center">
        <div className="w-full md:w-[80%] max-w-none mx-auto anim-reveal is-visible">
          <h2 className="heading-section font-[family-name:var(--font-display)] text-[#000000] mb-4">
            Need help applying this to your business?
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#000000]/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Reading is useful. Execution is better. If you want help with your website, SEO, chatbot, or automation setup, let&apos;s talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#000000] text-[#b5ff3e] rounded-full px-8 py-4 font-semibold hover:bg-[#111111] hover:shadow-lg transition-all active:scale-95">
              Book a Free Call →
            </a>
            <Link href="/services" className="inline-flex items-center justify-center border border-[#000000]/20 text-[#000000] rounded-full px-8 py-4 font-semibold hover:bg-[#000000]/5 transition-all active:scale-95">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
