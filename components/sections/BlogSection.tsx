'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const featuredPosts = [
  {
    slug: "shopify-vs-wix-studio-for-indian-businesses",
    title: "Shopify vs Wix Studio: Which One Actually Saves You Money?",
    excerpt: "If you only need a professional catalogue website, Shopify may be costing you far more than necessary.",
    category: "Platforms",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/shopifywix/800/600"
  },
  {
    slug: "why-most-small-business-websites-dont-rank",
    title: "Why Most Small Business Websites Don't Rank",
    excerpt: "Publishing a website is not the same as building an SEO-ready website. These are the gaps most businesses miss.",
    category: "SEO",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/smallbizseo/800/600"
  },
  {
    slug: "what-is-aeo-answer-engine-optimization",
    title: "What Is AEO? A Straightforward Guide",
    excerpt: "Search is changing. This guide explains Answer Engine Optimization and how to make your website easier for AI tools.",
    category: "AEO",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/aeoguide/800/600"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
              Insights & Guides
            </span>
            <h2 className="heading-section font-[family-name:var(--font-display)] text-[#e8e8f0]">
              Articles That Help You Build <span className="text-[#b5ff3e]">Smarter</span> Online
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 leading-relaxed">
              Straightforward writing on websites, SEO, AEO, and AI — created for Indian business owners.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center min-h-[48px] px-6 py-2 border border-white/[0.08] text-[#e8e8f0] rounded-full hover:border-[#b5ff3e] hover:text-[#b5ff3e] transition-all duration-300 text-[length:var(--text-sm)] font-medium whitespace-nowrap"
          >
            Read All Articles →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug} 
              className="group flex flex-col h-full bg-[#111111] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[#b5ff3e]/[0.2] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-full aspect-[16/10] relative overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#1a1a1a] border border-white/[0.08] text-[#e8e8f0] text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
                  <span className="text-[#66667a] text-[10px]">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] mb-3 group-hover:text-[#b5ff3e] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.05]">
                  <span className="text-[#b5ff3e] text-xs font-semibold group-hover:translate-x-1 transition-transform">Read Article →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-16 flex justify-center">
          <Link 
            href="/blog" 
            className="flex items-center justify-center min-h-[48px] px-8 py-4 bg-[#b5ff3e] text-[#000000] rounded-full hover:bg-[#c4ff66] hover:shadow-[var(--glow-sm)] active:scale-95 transition-all duration-300 text-[length:var(--text-sm)] font-semibold"
          >
            Visit Our Blog →
          </Link>
        </div>

      </div>
    </section>
  );
}
