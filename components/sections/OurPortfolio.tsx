'use client';

import React, { useState, useEffect } from 'react';

type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  points: string[];
  techStack: string;
  accentColor: string;
};

const portfolioProjects: PortfolioProject[] = [
  {
    id: 'creator-portfolio',
    title: 'Creator Portfolio',
    description: 'A high-conversion personal brand hub for a leading digital creator. Built to showcase case studies, capture email leads, and host premium digital products.',
    points: [
      'Ultra-fast page loads',
      'Custom email capture flows',
      'Mobile-optimized reading experience',
    ],
    techStack: 'Next.js · Tailwind CSS · Vercel',
    accentColor: 'var(--color-primary-highlight)', 
  },
  {
    id: 'd2c-launch',
    title: 'D2C Launch Landing Page',
    description: 'An aggressive, conversion-led landing page designed for targeted performance marketing campaigns. Optimized for incoming Instagram and Facebook ad traffic.',
    points: [
      'A/B tested hero layouts',
      'Frictionless single-step form',
      'Sub-second mobile rendering',
    ],
    techStack: 'WordPress · Elementor',
    accentColor: 'var(--color-surface)', 
  },
  {
    id: 'urban-goods',
    title: 'Urban Goods Store',
    description: 'A modern, high-volume e-commerce storefront crafted for an emerging lifestyle brand. Focused on smooth product discovery and a seamless checkout experience.',
    points: [
      'Custom catalog architecture',
      'Frictionless Razorpay checkout',
      'Integrated WhatsApp sales support',
    ],
    techStack: 'Shopify · Custom Theme · Razorpay',
    accentColor: 'var(--color-border)', 
  },
  {
    id: 'exportco-catalogue',
    title: 'ExportCo Catalogue',
    description: 'A professional B2B digital catalog for a Delhi-based global exporter. Designed to attract international buyers, surface key certifications, and drive bulk inquiries.',
    points: [
      'AEO & multilingual SEO ready',
      'Secure wholesale inquiry portal',
      'Dynamic product filtering',
    ],
    techStack: 'Wix Studio · Custom Sections',
    accentColor: 'var(--color-text-faint)', 
  },
];

export default function OurPortfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % portfolioProjects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="our-portfolio" className="our-portfolio-section">
      <div 
        className="our-portfolio-inner" 
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: 'clamp(4rem, 10vw, 8rem) 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem'
        }}
      >
        {/* Section Header */}
        <header className="our-portfolio-header text-center">
          <span className="text-[length:var(--text-xs)] uppercase tracking-widest text-[#b5ff3e] block mb-3 font-semibold">
            Our Work
          </span>
          <h2 
            className="our-portfolio-heading heading-section" 
            style={{ 
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text)',
              marginBottom: '1rem',
              lineHeight: '1.15',
              letterSpacing: '-0.02em',
              fontWeight: 700
            }}
          >
            Our Portfolio
          </h2>
          <p 
            className="our-portfolio-subheading" 
            style={{ 
              fontSize: 'var(--text-base)', 
              color: 'var(--color-text-muted)', 
              maxWidth: '60ch', 
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Real websites engineered for Indian visionary brands. Fast, responsive, and relentlessly focused on conversion.
          </p>
        </header>

        {/* 
          Slider Container 
        */}
        <div
          className="our-portfolio-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          aria-label="Portfolio slider"
          style={{ overflow: 'hidden', position: 'relative' }}
        >
          <div
            className="our-portfolio-track"
            style={{
              display: 'flex',
              width: '100%',
              transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {portfolioProjects.map((project) => (
              <article
                key={project.id}
                className="our-portfolio-slide"
                style={{
                  flex: '0 0 100%',
                  minWidth: 0,
                  display: 'flex',
                  flexDirection: 'column', 
                  gap: '3rem',
                  padding: 'clamp(1.5rem, 5vw, 3rem)',
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: '24px',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <div className="flex flex-col lg:flex-row gap-12 w-full">
                  
                  {/* LEFT SIDE: Project Details (~30% on desktop) */}
                  <div 
                    className="our-portfolio-left" 
                    style={{ 
                      flex: '1 1 300px', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'center' 
                    }}
                  >
                    <h3 
                      className="our-portfolio-project-title heading-sub"
                      style={{ 
                        fontFamily: 'var(--font-display)',
                        color: 'var(--color-text)',
                        marginBottom: '1rem',
                        fontWeight: 700
                      }}
                    >
                      {project.title}
                    </h3>
                    
                    <p 
                      className="our-portfolio-project-desc"
                      style={{ 
                        fontSize: 'var(--text-sm)', 
                        color: 'var(--color-text-muted)', 
                        lineHeight: 1.6,
                        marginBottom: '1.5rem'
                      }}
                    >
                      {project.description}
                    </p>
                    
                    <ul 
                      className="our-portfolio-project-points"
                      style={{ 
                        listStyle: 'none', 
                        padding: 0, 
                        margin: '0 0 2rem 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                      }}
                    >
                      {project.points.map((point, idx) => (
                        <li 
                          key={idx} 
                          className="our-portfolio-project-point"
                          style={{
                            fontSize: '13px',
                            color: 'var(--color-text-muted)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}
                        >
                          <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>•</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div 
                      className="our-portfolio-project-tech"
                      style={{
                        paddingTop: '1.5rem',
                        borderTop: '1px solid var(--color-divider)',
                        fontSize: '12px',
                        color: 'var(--color-text-faint)',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {project.techStack}
                    </div>
                  </div>

                  {/* RIGHT SIDE: Mockups (~70% on desktop) */}
                  <div 
                    className="our-portfolio-right" 
                    style={{ 
                      flex: '2 1 500px', 
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      paddingRight: '10%' // Padding to make room for mobile frame overlap
                    }}
                  >
                    {/* Placeholder Laptop Frame */}
                    <div 
                      className="mockup-laptop"
                      style={{
                        width: '100%',
                        aspectRatio: '16/10',
                        backgroundColor: 'var(--color-surface-2)',
                        border: '8px solid var(--color-bg)',
                        borderRadius: '12px 12px 0 0',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-md)'
                      }}
                    >
                      <div style={{ position: 'absolute', inset: 0, background: project.accentColor, opacity: 0.05 }} />
                      <span style={{ position: 'relative', color: 'var(--color-text-faint)', fontWeight: 600, letterSpacing: '0.05em' }}>
                        Desktop View
                      </span>
                    </div>

                    {/* Placeholder Mobile Frame */}
                    <div 
                      className="mockup-phone"
                      style={{
                        position: 'absolute',
                        bottom: '-10%',
                        right: '0%',
                        width: '26%',
                        minWidth: '120px',
                        aspectRatio: '9/19',
                        backgroundColor: 'var(--color-surface)',
                        border: '6px solid var(--color-bg)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-lg)',
                        zIndex: 10
                      }}
                    >
                      <div style={{ position: 'absolute', inset: 0, background: project.accentColor, opacity: 0.1 }} />
                      <span style={{ position: 'relative', color: 'var(--color-text-faint)', fontSize: '0.75rem', fontWeight: 600, textAlign: 'center', padding: '0.5rem' }}>
                        Mobile View
                      </span>
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Minimal Progress Dots (Purely visual indicator) */}
        <div 
          className="our-portfolio-dots" 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '0.5rem',
            marginTop: '1rem'
          }}
        >
          {portfolioProjects.map((_, index) => (
            <div
              key={index}
              className={`our-portfolio-dot ${index === activeIndex ? 'is-active' : ''}`}
              style={{
                width: index === activeIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: index === activeIndex ? 'var(--color-primary)' : 'var(--color-border)',
                transition: 'all 300ms ease-in-out'
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
