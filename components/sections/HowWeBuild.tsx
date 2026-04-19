'use client';

import React from 'react';
import Link from 'next/link';

export default function HowWeBuild() {
  return (
    <section id="how-we-build" className="why-work-section">
      <div className="w-full md:w-[80%] max-w-none mx-auto px-6">
        {/* Header */}
        <header className="why-work-header">
          <p className="why-work-eyebrow">DESIGN + ENGINEERING</p>
          <h2 className="why-work-heading">
            Websites That Think. <br className="hidden md:block" />
            Built for Leads, Not Just Looks.
          </h2>
          <p className="why-work-subheading">
            From first scroll to final enquiry, we design every page to lower friction 
            and increase qualified conversations.
          </p>
        </header>

        {/* Big Card */}
        <div className="why-work-card">
          {/* Visual Panel */}
          <div className="why-work-visual">
            <div className="why-work-visual-overlay" />
          </div>

          {/* Content Area */}
          <div className="why-work-content">
            <div className="why-work-columns">
              {/* Column 1 */}
              <div className="why-work-column">
                <h3 className="why-work-column-title">How we build websites that convert</h3>
                <ul className="why-work-list">
                  <li className="why-work-item">
                    <h4 className="why-work-item-title">Strategy Before Pixels</h4>
                    <p className="why-work-item-body">
                      Every project starts with a deep dive into your business goals, target audience, and customer psychology to map the perfect journey.
                    </p>
                  </li>
                  <li className="why-work-item">
                    <h4 className="why-work-item-title">Platform & Code Selection</h4>
                    <p className="why-work-item-body">
                      We choose the right stack — Next.js, Shopify, or Wix Studio — matched strictly to your scalability needs and operational complexity.
                    </p>
                  </li>
                  <li className="why-work-item">
                    <h4 className="why-work-item-title">SEO & AEO Built-In</h4>
                    <p className="why-work-item-body">
                      Beyond meta tags, we optimize for Answer Engine Optimization, ensuring your brand wins in traditional search and AI-driven results.
                    </p>
                  </li>
                  <li className="why-work-item">
                    <h4 className="why-work-item-title">Launch in Weeks</h4>
                    <p className="why-work-item-body">
                      Our iterative ship-then-optimize model gets you to market faster without sacrificing code quality or design integrity.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="why-work-column">
                <h3 className="why-work-column-title">Why Sitecraf over another agency</h3>
                <ul className="why-work-list">
                  <li className="why-work-item">
                    <h4 className="why-work-item-title">Senior-Level Thinking</h4>
                    <p className="why-work-item-body">
                      No junior account managers. You work directly with engineers who understand ROI as much as they do React and performance.
                    </p>
                  </li>
                  <li className="why-work-item">
                    <h4 className="why-work-item-title">Performance-First Engineering</h4>
                    <p className="why-work-item-body">
                      We prioritize Core Web Vitals and near-zero hosting costs, building assets that load instantly and perform reliably under load.
                    </p>
                  </li>
                  <li className="why-work-item">
                    <h4 className="why-work-item-title">Fixed & Transparent Pricing</h4>
                    <p className="why-work-item-body">
                      No hourly billing surprises. You receive a fixed-price quote based on a clear scope, ensuring your budget delivers maximum impact.
                    </p>
                  </li>
                  <li className="why-work-item">
                    <h4 className="why-work-item-title">Lead-First Lead Flows</h4>
                    <p className="why-work-item-body">
                      We don&apos;t just build contact forms; we integrate WhatsApp and CRM flows that turn passive traffic into active business conversations.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="why-work-ctas">
              <Link href="#pricing" className="why-work-cta-secondary">
                See Pricing
              </Link>
              <Link href="#contact" className="why-work-cta-primary">
                Plan My Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
