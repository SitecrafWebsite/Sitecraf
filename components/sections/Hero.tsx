'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HeroProps } from '@/types';

const defaultProps: HeroProps = {
  badge: "Website • AI Chatbot • Image Generation • Automation",
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

  const formattedBadge = badge?.replace(/·/g, "•");
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!headline) return;
    let i = 0;
    const len = headline.length;
    const interval = setInterval(() => {
      i += 1;
      setDisplayedText(headline.substring(0, i));
      if (i >= len) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [headline]);

  const renderHeadline = (textToRender: string) => {
    if (!highlightWord) return <>{textToRender}</>;

    const highlightStartIndex = headline?.indexOf(highlightWord) ?? -1;

    if (highlightStartIndex === -1 || textToRender.length <= highlightStartIndex) {
      return <>{textToRender}</>;
    }

    const beforeHighlight = textToRender.substring(0, highlightStartIndex);
    const highlightedPart = textToRender.substring(
      highlightStartIndex,
      Math.min(textToRender.length, highlightStartIndex + highlightWord.length)
    );
    const afterHighlight = textToRender.substring(highlightStartIndex + highlightWord.length);

    return (
      <>
        {beforeHighlight}
        <span className="text-[#b5ff3e]">{highlightedPart}</span>
        {afterHighlight}
      </>
    );
  };

  const animClass = "anim-reveal";
  const stateClass = "is-visible";

  const statsContent = stats && stats.length > 0 && (
    <div
      className={`grid grid-cols-2 md:flex md:flex-row items-center justify-center md:justify-start gap-8 md:gap-12 md:mt-16 pt-8 md:pt-12 border-t border-white/[0.06] w-full ${animClass} ${stateClass}`}
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
  );

  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">
        <div className="hero-content">
          {/* Badge */}
          {formattedBadge && (
            <div
              className={`inline-flex flex-wrap items-center justify-center gap-1.5 md:gap-2 border border-[#b5ff3e]/[0.18] bg-[#b5ff3e]/[0.08] text-[#b5ff3e] text-[length:var(--text-xs)] text-center uppercase tracking-[0.12em] px-4 py-2 rounded-[2rem] mb-8 ${animClass} ${stateClass}`}
              style={{ transitionDelay: '0ms' }}
            >
              {/* <span className="w-1.5 h-1.5 rounded-full bg-[#b5ff3e] animate-pulse shrink-0" /> */}
              <span className="leading-relaxed">{formattedBadge}</span>
            </div>
          )}

          {/* Headline */}
          <h1
            className={`heading-section grid font-[family-name:var(--font-display)] text-[#e8e8f0] text-[length:calc(var(--heading-section)*1.44)] md:text-[length:calc(var(--heading-section)*1.2)] ${animClass} ${stateClass}`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* Invisible placeholder for grid height constraints */}
            <span className="invisible col-start-1 row-start-1" aria-hidden="true">
              {renderHeadline(headline || '')}
              <span className="inline-block w-[3px] ml-1" />
            </span>
            <span className="col-start-1 row-start-1">
              {renderHeadline(displayedText)}
              <span className="inline-block w-[3px] h-[0.8em] bg-[#b5ff3e] ml-1 animate-pulse" aria-hidden="true" />
            </span>
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
              href={ctaPrimary?.href || "#"}
              className="flex items-center justify-center min-h-[48px] bg-[#b5ff3e] text-[#000000] font-semibold px-8 py-4 rounded-full hover:bg-[#c4ff66] hover:shadow-[var(--glow-md)] active:scale-95 active:bg-[#a3e635] transition-all duration-300 text-[length:var(--text-sm)]"
            >
              {ctaPrimary?.label}
            </Link>
            <Link
              href={ctaSecondary?.href || "#"}
              className="flex items-center justify-center min-h-[48px] border border-[#b5ff3e]/[0.18] text-[#b5ff3e] px-8 py-4 rounded-full hover:bg-[#b5ff3e]/[0.08] hover:shadow-[var(--glow-sm)] active:scale-95 transition-all duration-300 text-[length:var(--text-sm)]"
            >
              {ctaSecondary?.label}
            </Link>
          </div>

          {/* Stats Row for Desktop (Hidden on Mobile) */}
          <div className="hidden lg:block w-full">
            {statsContent}
          </div>
        </div>

        {/* Robot video visual */}
        <div className="hero-visual">
          <div className="hero-video-frame">
            <video
              className="hero-video"
              src="/hero_section_robot.webm"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Stats Row for Mobile (Hidden on Desktop) */}
        <div className="lg:hidden w-full">
          {statsContent}
        </div>
      </div>
    </section>
  );
}
