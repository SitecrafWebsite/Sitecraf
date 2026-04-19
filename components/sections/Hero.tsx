'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { HeroProps } from '@/types';

const ParticleSphere = dynamic(
  () => import('@/components/3d/ParticleSphere'),
  { 
    ssr: false,
    loading: () => null
  }
);

const defaultProps: HeroProps = {
  badge: "Website · AI Chatbot · Image Generation · Automation",
  headline: "Professional Website Development Company in Delhi",
  highlightWord: "Delhi",
  subheadline: "From WordPress and Shopify to custom Next.js solutions — we design, develop, and launch fast, mobile-optimised, SEO, AEO, and GEO-ready websites for businesses across every industry. Transparent pricing. Full ownership. No agency overhead.",
  ctaPrimary: { label: "See Our Work →", href: "#case-studies" },
  ctaSecondary: { label: "Get a Free Quote", href: "#contact" },
  stats: [
    { value: "10+", label: "Projects Delivered" },
    { value: "2 Wks", label: "Avg. First Delivery" },
    { value: "100%", label: "IP Ownership Yours" },
    { value: "₹0", label: "Hidden Charges" }
  ]
};

export default function Hero(props: Partial<HeroProps>) {
  const {
    badge,
    headline,
    highlightWord,
    subheadline,
    ctaPrimary,
    ctaSecondary,
    stats
  } = { ...defaultProps, ...props };

  const [isMounted, setIsMounted] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    let i = 0;
    const timer = setInterval(() => {
      if (i <= headline.length) {
        setDisplayText(headline.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    
    return () => clearInterval(timer);
  }, [headline, isMounted]);

  const renderHeadline = () => {
    if (!highlightWord) return displayText;
    const index = displayText.indexOf(highlightWord.substring(0, Math.min(highlightWord.length, Math.max(0, displayText.length - headline.indexOf(highlightWord)))));
    
    // Check if the highlightWord is starting to appear
    const highlightStartIndex = headline.indexOf(highlightWord);
    
    if (displayText.length <= highlightStartIndex) {
      return displayText;
    }

    const beforeHighlight = displayText.substring(0, highlightStartIndex);
    const highlightedPart = displayText.substring(highlightStartIndex, highlightStartIndex + highlightWord.length);
    const afterHighlight = displayText.substring(highlightStartIndex + highlightWord.length);

    return (
      <>
        {beforeHighlight}
        <span className="text-[#b5ff3e]">{highlightedPart}</span>
        {afterHighlight}
      </>
    );
  };

  const animClass = "anim-reveal";
  const stateClass = isMounted ? "is-visible" : "";

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-[calc(72px+2rem)] pb-16 px-6 overflow-hidden bg-[#000000]">
      <ParticleSphere />

      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[80%] max-w-none mx-auto">
        <div className="w-full lg:w-[60%] md:w-[65%] flex flex-col items-center md:items-start pr-0 md:pr-8">
          {/* Badge */}
          {badge && (
            <div
              className={`flex items-center gap-2 border border-[#b5ff3e]/[0.18] bg-[#b5ff3e]/[0.08] text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-8 ${animClass} ${stateClass}`}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#b5ff3e] animate-pulse" />
              {badge}
            </div>
          )}

          {/* Headline */}
          <h1
            className={`heading-section font-[family-name:var(--font-display)] text-[#e8e8f0] text-[length:calc(var(--heading-section)*1.44)] md:text-[length:calc(var(--heading-section)*1.2)] ${animClass} ${stateClass}`}
            style={{ transitionDelay: '100ms' }}
          >
            {renderHeadline()}
            <span className="inline-block w-[3px] h-[0.8em] bg-[#b5ff3e] ml-1 animate-pulse" aria-hidden="true" />
          </h1>

          {/* Subheadline */}
          <p
            className={`font-[family-name:var(--font-body)] text-[length:calc(var(--text-base)*0.9)] text-[#8888a0] mt-6 leading-relaxed ${animClass} ${stateClass}`}
            style={{ transitionDelay: '200ms' }}
          >
            {subheadline}
          </p>

          {/* CTA Row */}
          <div
            className={`flex flex-wrap gap-4 justify-center md:justify-start mt-10 ${animClass} ${stateClass}`}
            style={{ transitionDelay: '300ms' }}
          >
            <Link
              href={ctaPrimary.href}
              className="flex items-center justify-center min-h-[48px] bg-[#b5ff3e] text-[#000000] font-semibold px-8 py-4 rounded-full hover:bg-[#c4ff66] hover:shadow-[var(--glow-md)] active:scale-95 active:bg-[#a3e635] transition-all duration-300 text-[length:var(--text-sm)]"
            >
              {ctaPrimary.label}
            </Link>
            <Link
              href={ctaSecondary.href}
              className="flex items-center justify-center min-h-[48px] border border-[#b5ff3e]/[0.18] text-[#b5ff3e] px-8 py-4 rounded-full hover:bg-[#b5ff3e]/[0.08] hover:shadow-[var(--glow-sm)] active:scale-95 transition-all duration-300 text-[length:var(--text-sm)]"
            >
              {ctaSecondary.label}
            </Link>
          </div>

          {/* Stats Row */}
          {stats && stats.length > 0 && (
            <div
              className={`grid grid-cols-2 md:flex md:flex-row items-center justify-center md:justify-start gap-8 md:gap-12 mt-16 pt-12 border-t border-white/[0.06] w-full ${animClass} ${stateClass}`}
              style={{ transitionDelay: '400ms' }}
            >
              {stats.map((stat, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center md:items-start">
                    <span className="font-[family-name:var(--font-display)] font-bold text-[#b5ff3e] text-2xl whitespace-nowrap">
                      {stat.value}
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-xs)] uppercase tracking-widest mt-1">
                      {stat.label}
                    </span>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="hidden md:block w-px h-8 bg-white/[0.06]" />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
