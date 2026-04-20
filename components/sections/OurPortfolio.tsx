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
    description: 'A modern dental clinic website built with Next.js, featuring seamless appointment booking, service showcase, and an AI-powered chatbot for real-time patient assistance.',
    points: [
      'Next.js for high performance and scalability',
      'Integrated AI chatbot using ChatGPT API',
      'Appointment booking & service exploration',
      'Responsive design optimized for healthcare'
    ],
    techStack: 'Next.js · Tailwind CSS · ChatGPT API',
    accentColor: 'var(--color-primary-highlight)',
    desktopImage: '/our-portfolio-images/custom_dental_project_desktop_view.webp',
    mobileImage: '/our-portfolio-images/custom_dental_project_mobile_view.webp',
  },
  {
    id: 'nutriguideai',
    title: 'NutriGuideAI – AI-Powered Nutrition Assistant',
    description: 'An AI-driven nutrition platform that delivers personalized diet guidance, meal planning, and health insights through an intelligent chatbot interface.',
    points: [
      'Built with modern web technologies for fast and scalable performance',
      'AI-powered chatbot providing personalized nutrition recommendations',
      'Smart meal planning and dietary guidance based on user input',
      'Real-time interaction for queries related to diet and wellness'
    ],
    techStack: 'Next.js · AI Integration · Fast Performance',
    accentColor: 'var(--color-surface)',
    desktopImage: '/our-portfolio-images/custom_healthcare_project_desktop_view.webp',
    mobileImage: '/our-portfolio-images/custom_healthcare_project_mobile_view.webp',
  },
  {
    id: 'prowebservices',
    title: 'ProWebServices – Personal Portfolio & Web Services Platform',
    description: 'A modern personal portfolio and web services website showcasing professional expertise, services, and projects with a clean UI and strong personal branding.',
    points: [
      'Built using Next.js for fast performance and SEO optimization',
      'Clean and professional portfolio layout to showcase services and projects',
      'Strong personal branding with clear service positioning',
      'Structured sections for projects, skills, and contact engagement'
    ],
    techStack: 'Next.js · Tailwind CSS · React',
    accentColor: 'var(--color-border)',
    desktopImage: '/our-portfolio-images/custom_portfolio_project_desktop_view.webp',
    mobileImage: '/our-portfolio-images/custom_portfolio_project_mobile_view.webp',
  },
  {
    id: 'nexforge',
    title: 'NexForge – Digital Services Agency Platform',
    description: 'A modern digital services agency website built on WordPress, showcasing scalable solutions like web development, SEO, marketing, and AI-powered services with a strong business-focused design.',
    points: [
      'Built on WordPress for flexibility and easy content management',
      'Service-focused structure covering digital marketing, SEO, and web design',
      'Clean, dark-themed modern UI aligned with tech agency positioning',
      'Clear service segmentation for better user navigation'
    ],
    techStack: 'WordPress · SEO Ready · UI/UX',
    accentColor: 'var(--color-text-faint)',
    desktopImage: '/our-portfolio-images/agency_project_desktop_view.webp',
    mobileImage: '/our-portfolio-images/agency_project_mobile_view.webp',
  },
  {
    id: 'luxeweave',
    title: 'LuxeWeave – Home Furnishing Fabric Platform',
    description: 'A premium home furnishing website built on Wix, showcasing fabric collections and enabling a strong wholesale network with over 800+ distributors and partners.',
    points: [
      'Built on Wix for easy management and scalable catalogue updates',
      'Designed for a large wholesale and distributor network (800+ partners)',
      'Premium, luxury-focused UI to reflect high-quality fabric collections',
      'Structured product categorization for better browsing experience'
    ],
    techStack: 'Wix Studio · Custom Sections · Wholesale Network',
    accentColor: 'var(--color-primary-dim)',
    desktopImage: '/our-portfolio-images/wix_fabric_catalogue_project_desktop_view.webp',
    mobileImage: '/our-portfolio-images/wix_fabric_catalogue_project_mobile_view.webp',
  },
  {
    id: 'nordlight',
    title: 'NordLight – Fashion Ecommerce Store',
    description: 'A modern Shopify-based fashion ecommerce store showcasing apparel like dresses, blazers, and jackets with a clean, premium UI focused on seamless shopping experience.',
    points: [
      'Built on Shopify for scalable and secure ecommerce operations',
      'Clean, minimal UI aligned with modern fashion brand aesthetics',
      'Structured product categories (dresses, blazers, jackets, accessories)',
      'High-quality product presentation with grid-based layout',
      'Optimized user journey for browsing and purchasing',
      'Fully responsive design ensuring smooth experience across devices'
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
                          className="object-cover"
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

      </div>
    </section>
  );
}
