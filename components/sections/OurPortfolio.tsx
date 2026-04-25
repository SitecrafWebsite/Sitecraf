'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  points: string[];
  techStack: string;
  accentColor: string;
  desktopImage: string;
  mobileImage: string;
};

const portfolioProjects: PortfolioProject[] = [
  {
    id: 'smilecare',
    title: 'SmileCare – Modern Dental Care Platform',
    description: 'A dental clinic needed more than a pretty website — they needed patients to book appointments online without calling. We built a fast Next.js site with an AI chatbot that answers patient questions 24/7 and a seamless booking flow that removed the front-desk bottleneck.',
    points: [
      'AI chatbot handles FAQs and appointment pre-qualification',
      'Booking flow integrated directly into clinic calendar',
      'Mobile-first — most dental searches happen on phone',
      'Loads under 2 seconds for better Google ranking'
    ],
    techStack: 'Next.js · Tailwind CSS · ChatGPT API',
    accentColor: 'var(--color-primary-highlight)',
    desktopImage: '/our-portfolio-images/custom_dental_project_desktop_view.webp',
    mobileImage: '/our-portfolio-images/custom_dental_project_mobile_view.webp',
  },
  {
    id: 'nutriguideai',
    title: 'NutriGuideAI – AI-Powered Nutrition Assistant',
    description: 'A nutrition startup wanted to offer personalised diet guidance at scale — without hiring a team of nutritionists. We built an AI-powered web platform where users get real-time meal plans and dietary advice through an intelligent chatbot interface.',
    points: [
      'Personalised recommendations without human intervention',
      'Handles unlimited simultaneous user queries',
      'Built for fast iteration — new features shipped weekly',
      'Clean UI that makes complex nutrition data feel simple'
    ],
    techStack: 'Next.js · AI Integration · Fast Performance',
    accentColor: 'var(--color-surface)',
    desktopImage: '/our-portfolio-images/custom_healthcare_project_desktop_view.webp',
    mobileImage: '/our-portfolio-images/custom_healthcare_project_mobile_view.webp',
  },
  {
    id: 'prowebservices',
    title: 'ProWebServices – Personal Portfolio & Web Services Platform',
    description: 'A freelance web developer needed a personal site that positioned them as a senior professional, not just another developer-for-hire. We built a sharp Next.js portfolio that leads with outcomes, not just a list of skills.',
    points: [
      'Clear service positioning above the fold',
      'Project case studies structured to build trust',
      'Fast load time — sub-1.5 seconds on mobile',
      'SEO-optimised to rank for local service searches'
    ],
    techStack: 'Next.js · Tailwind CSS · React',
    accentColor: 'var(--color-border)',
    desktopImage: '/our-portfolio-images/custom_portfolio_project_desktop_view.webp',
    mobileImage: '/our-portfolio-images/custom_portfolio_project_mobile_view.webp',
  },
  {
    id: 'nexforge',
    title: 'NexForge – Digital Services Agency Platform',
    description: 'A digital agency needed a WordPress site that felt enterprise-grade — not like a theme download. We built a dark-themed, service-focused site with clean navigation that makes it easy for prospects to find exactly what they need.',
    points: [
      'Service pages structured for conversion, not just description',
      'SEO architecture built from the ground up',
      'WordPress CMS — team can update content independently',
      'Modern dark UI that sets them apart from local competitors'
    ],
    techStack: 'WordPress · SEO Ready · UI/UX',
    accentColor: 'var(--color-text-faint)',
    desktopImage: '/our-portfolio-images/agency_project_desktop_view.webp',
    mobileImage: '/our-portfolio-images/agency_project_mobile_view.webp',
  },
  {
    id: 'luxeweave',
    title: 'LuxeWeave – Home Furnishing Fabric Platform',
    description: 'A fabric wholesaler with 800+ distributor partners needed a catalogue site their team could manage without a developer on call. We built a premium Wix Studio site with structured product categories and a UI that reflects the quality of their collections.',
    points: [
      'Self-manageable catalogue — no dev needed for updates',
      'Supports 800+ partner network with structured navigation',
      'Premium visual design that commands wholesale credibility',
      'Mobile-optimised for buyers browsing on the go'
    ],
    techStack: 'Wix Studio · Custom Sections · Wholesale Network',
    accentColor: 'var(--color-primary-dim)',
    desktopImage: '/our-portfolio-images/wix_fabric_catalogue_project_desktop_view.webp',
    mobileImage: '/our-portfolio-images/wix_fabric_catalogue_project_mobile_view.webp',
  },
  {
    id: 'nordlight',
    title: 'NordLight – Fashion Ecommerce Store',
    description: 'A fashion brand launching online needed a Shopify store that felt premium from the first scroll — and made buying effortless. We built a clean, minimal store with product categories, high-quality presentation, and an optimised checkout flow.',
    points: [
      'Shopify store live and taking orders within 3 weeks',
      'Product grid optimised for browse-to-buy conversion',
      'Category structure — dresses, blazers, jackets, accessories',
      'Fully responsive — same premium feel on every device'
    ],
    techStack: 'Shopify · UI/UX · Ecommerce Store',
    accentColor: 'var(--color-primary-hover)',
    desktopImage: '/our-portfolio-images/shopify_clothing_project_desktop_view.webp',
    mobileImage: '/our-portfolio-images/shopify_clothing_project_mobile_view.png',
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
            REAL PROJECTS. REAL RESULTS.
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
            Work We're Proud to Put Our Name On
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
            From dental clinics in Delhi to fashion stores selling nationwide — here's what we've shipped for real businesses.
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
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 w-full">

                  {/* LEFT SIDE: Project Details (~30% on desktop) */}
                  <div
                    className="our-portfolio-left w-full lg:w-[35%]"
                    style={{
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
                    className="our-portfolio-right w-full lg:w-[65%] mt-16 md:mt-20 lg:mt-0"
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      paddingRight: '12%',
                      paddingBottom: '3rem' // Extra space at bottom so phone doesn't overflow card
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
                        borderRadius: '12px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-md)',
                        zIndex: 5
                      }}
                    >
                      {project.desktopImage ? (
                        <Image
                          src={project.desktopImage}
                          alt={`${project.title} Desktop`}
                          fill
                          className="object-cover object-top"
                        />
                      ) : (
                        <>
                          <div style={{ position: 'absolute', inset: 0, background: project.accentColor, opacity: 0.05 }} />
                          <span style={{ position: 'relative', color: 'var(--color-text-faint)', fontWeight: 600, letterSpacing: '0.05em', fontSize: 'var(--text-xs)' }}>
                            Desktop View
                          </span>
                        </>
                      )}
                    </div>

                    {/* Placeholder Mobile Frame */}
                    <div
                      className="mockup-phone"
                      style={{
                        position: 'absolute',
                        bottom: '0%', // Aligned with the bottom padding of container
                        right: '0%',
                        width: '24%',
                        minWidth: '94px',
                        maxWidth: '160px',
                        aspectRatio: '9/19',
                        backgroundColor: 'var(--color-surface)',
                        border: '5px solid var(--color-bg)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-lg)',
                        zIndex: 10
                      }}
                    >
                      {project.mobileImage ? (
                        <Image
                          src={project.mobileImage}
                          alt={`${project.title} Mobile`}
                          fill
                          className="object-cover object-top"
                        />
                      ) : (
                        <>
                          <div style={{ position: 'absolute', inset: 0, background: project.accentColor, opacity: 0.1 }} />
                          <span style={{ position: 'relative', color: 'var(--color-text-faint)', fontSize: '0.65rem', fontWeight: 600, textAlign: 'center', padding: '0.5rem' }}>
                            Mobile View
                          </span>
                        </>
                      )}
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

        {/* CTA Button */}
        <div className="flex justify-center mt-6">
          <a title="contact link" href="#contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#b5ff3e] text-[#000000] rounded-full hover:bg-[#c4ff66] hover:shadow-[var(--glow-md)] active:scale-[0.98] transition-all duration-300 font-semibold text-center">
            <span>Like What You See? Let&apos;s Build Yours →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
