'use client';

import React from 'react';
import Link from 'next/link';
import { CaseStudy } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const caseStudies: CaseStudy[] = [
  {
    id: 'security-services-website',
    client: 'Security Services Brand',
    industry: 'Security & Surveillance',
    title: 'Custom Website Deployed Free — Zero Monthly Hosting Cost',
    description: 'Built a professional custom-coded website for a security services business that needed an online presence on a tight budget. Deployed on Vercel at ₹0/month hosting cost, eliminating ongoing platform fees while delivering a fast, mobile-optimised website.',
    challenge: 'Business needed a professional website but couldn\'t justify recurring hosting costs.',
    solution: 'Custom HTML/CSS/JS website deployed on Vercel — free forever.',
    results: [
      { metric: 'Monthly Hosting Cost', value: '₹0', trend: 'down' },
      { metric: 'Page Load Speed', value: '<1.5s', trend: 'up' },
      { metric: 'Delivery Time', value: '2 weeks', trend: 'up' }
    ],
    tags: ['Custom Code', 'Vercel', 'Mobile-First', 'SEO'],
    duration: '2 weeks',
    isFeatured: true
  },
  {
    id: 'home-furnishing-website',
    client: 'Home Furnishing Brand (Name withheld)',
    industry: 'Fabric · Sofa & Curtain',
    title: 'Showcase Website for Fabric Exporter on Wix Studio',
    description: 'Built a multi-collection showcase website for a home furnishing brand dealing in sofa and curtain fabrics. Designed with Velo code for dynamic collection filtering. Client also received AI-generated banner images for 100+ fabric collections.',
    challenge: 'Brand needed professional online presence to support B2B sales conversations.',
    solution: 'Wix Studio website with custom Velo logic + AI banner images per collection.',
    results: [
      { metric: 'Collections Showcased', value: '100+', trend: 'up' },
      { metric: 'Banner Images Generated', value: '400+', trend: 'up' }
    ],
    tags: ['Wix Studio', 'Velo Code', 'AI Images', 'B2B'],
    duration: '3 weeks'
  },
  {
    id: 'dental-clinic-demo',
    client: 'SmileCare Dental — Demo Project',
    industry: 'Healthcare · Dental Clinic',
    title: 'Booking System + Multilingual AI Chatbot for Dental Clinic',
    description: 'Demo project showcasing a dental clinic website with a step-by-step appointment booking flow integrated with Google Calendar API, and an AI chatbot responding in Hindi, Hinglish, and English. Built to demonstrate capability for clinic and healthcare clients.',
    challenge: 'Clinics lose leads when no one answers calls or WhatsApp at night.',
    solution: 'Chatbot + calendar booking that captures appointments 24/7 automatically.',
    results: [
      { metric: 'Languages Supported', value: '3', trend: 'up' },
      { metric: 'Booking Automation', value: '100%', trend: 'up' }
    ],
    tags: ['Next.js', 'AI Chatbot', 'Calendar API', 'Hindi NLP'],
    duration: 'Demo — 3 weeks'
  }
];

function FeaturedCaseStudyCard({ featured }: { featured: CaseStudy }) {
  const revealRef = useScrollReveal(0.15);
  return (
    <div 
      ref={revealRef as any}
      className="bg-[#0a0a0a] border border-[#b5ff3e]/[0.18] rounded-2xl overflow-hidden flex flex-col lg:flex-row anim-reveal card-hover"
    >
      <div className="p-8 lg:p-12 lg:w-3/5 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-[#b5ff3e]/[0.08] text-[#b5ff3e] text-[length:var(--text-xs)] px-3 py-1 rounded-full font-medium">
            {featured.client}
          </span>
          <span className="text-[#44445a] text-[length:var(--text-xs)] uppercase tracking-widest">
            {featured.industry}
          </span>
        </div>
        
        <h3 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-2xl md:text-3xl mb-4 leading-tight">
          {featured.title}
        </h3>
        
        <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-base)] leading-relaxed mb-8 flex-1">
          {featured.description}
        </p>
        
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {featured.tags.map(tag => (
            <span key={tag} className="text-[#8888a0] text-[length:var(--text-xs)] border border-white/[0.08] rounded-md px-2.5 py-1 bg-[#111111]">
              {tag}
            </span>
          ))}
          <span className="text-[#44445a] text-[length:var(--text-xs)] ml-2">
            ⏱ {featured.duration}
          </span>
        </div>

        <Link 
          href={`/case-studies/${featured.id}`}
          className="inline-flex items-center text-[#b5ff3e] text-[length:var(--text-sm)] font-medium hover:text-[#00e5e5] transition-colors w-max"
        >
          Read Full Case Study →
        </Link>
      </div>
      
      <div className="bg-[#111111] border-t lg:border-t-0 lg:border-l border-white/[0.06] p-8 lg:p-12 lg:w-2/5 flex flex-col justify-center gap-8">
        <h4 className="text-[#44445a] text-[length:var(--text-xs)] uppercase tracking-widest font-[family-name:var(--font-body)]">
          Key Outcomes
        </h4>
        <div className="flex flex-col gap-8">
          {featured.results.map((result, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-display)] font-bold text-[#b5ff3e] text-4xl">
                  {result.value}
                </span>
                <span className={`text-lg ${result.trend === 'up' ? 'text-[#22c55e]' : 'text-[#b5ff3e]'}`}>
                  {result.trend === 'up' ? '↑' : '↓'}
                </span>
              </div>
              <span className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] mt-1">
                {result.metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RegularCaseStudyCard({ study }: { study: CaseStudy }) {
  const revealRef = useScrollReveal(0.15);
  return (
    <div 
      ref={revealRef as any}
      className="bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-8 flex flex-col anim-reveal card-hover"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[#e8e8f0] font-medium text-[length:var(--text-sm)]">
          {study.client}
        </span>
        <span className="w-1 h-1 rounded-full bg-[#44445a]" />
        <span className="text-[#44445a] text-[length:var(--text-xs)] uppercase tracking-widest">
          {study.industry}
        </span>
      </div>
      
      <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#e8e8f0] text-xl mb-3">
        {study.title}
      </h3>
      
      <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-sm)] leading-relaxed mb-6 flex-1">
        {study.description}
      </p>

      <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/[0.06] mb-6">
        {study.results.map((result, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="font-[family-name:var(--font-display)] font-bold text-[#b5ff3e] text-2xl">
                {result.value}
              </span>
              <span className={`text-sm ${result.trend === 'up' ? 'text-[#22c55e]' : 'text-[#b5ff3e]'}`}>
                {result.trend === 'up' ? '↑' : '↓'}
              </span>
            </div>
            <span className="font-[family-name:var(--font-body)] text-[#44445a] text-[length:var(--text-xs)] mt-1">
              {result.metric}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex gap-2">
          {study.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[#8888a0] text-[length:var(--text-xs)] border border-white/[0.08] rounded-md px-2 py-1 bg-[#111111]">
              {tag}
            </span>
          ))}
          {study.tags.length > 2 && (
            <span className="text-[#44445a] text-[length:var(--text-xs)] px-1 py-1">
              +{study.tags.length - 2}
            </span>
          )}
        </div>
        <Link 
          href={`/case-studies/${study.id}`}
          className="text-[#b5ff3e] hover:text-[#00e5e5] transition-colors"
          aria-label={`Read case study about ${study.client}`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const featured = caseStudies.find(c => c.isFeatured);
  const regular = caseStudies.filter(c => !c.isFeatured);

  return (
    <section id="case-studies" className="py-24 bg-[#000000] px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
              Projects
            </span>
            <h2 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-xl)]">
              Real Work. Real Results.
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 leading-relaxed">
              A mix of live client projects and capability demos — honest about which is which.
            </p>
          </div>
          <Link 
            href="#contact" 
            className="inline-flex items-center justify-center min-h-[48px] px-6 py-2 border border-white/[0.08] text-[#e8e8f0] rounded-full hover:border-white/[0.16] hover:text-[#b5ff3e] transition-all duration-300 text-[length:var(--text-sm)] font-medium whitespace-nowrap"
          >
            Discuss Your Project →
          </Link>
        </div>

        <div className="flex flex-col gap-8">
          {/* Featured Case Study */}
          {featured && (
            <FeaturedCaseStudyCard featured={featured} />
          )}

          {/* Regular Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 anim-stagger">
            {regular.map((study) => (
              <RegularCaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-16 flex justify-center">
          <Link 
            href="#contact" 
            className="flex items-center justify-center min-h-[48px] px-8 py-4 bg-[#b5ff3e] text-[#000000] rounded-full hover:bg-[#c4ff66] hover:shadow-[var(--glow-sm)] active:scale-95 transition-all duration-300 text-[length:var(--text-sm)] font-semibold"
          >
            Discuss Your Project →
          </Link>
        </div>

      </div>
    </section>
  );
}
