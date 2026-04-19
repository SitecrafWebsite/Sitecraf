'use client';

import React from 'react';
import { Layout, Target, ShoppingBag, MessageSquare, Zap, Camera } from 'lucide-react';

type ServiceCard = {
  id: string;
  title: string;
  lead: string;
  points: string[];
  icon: React.ElementType;
  accent: 'portfolio' | 'landing' | 'ecommerce' | 'chatbots' | 'automation' | 'images';
};

const serviceCards: ServiceCard[] = [
  {
    id: 'portfolio',
    title: 'Portfolio Design',
    lead: 'Showcase your craft with clarity and credibility.',
    points: [
      'Clean responsive layouts',
      'Case study structure',
      'Easy content updates'
    ],
    icon: Layout,
    accent: 'portfolio'
  },
  {
    id: 'landing',
    title: 'Landing Pages',
    lead: 'Turn traffic into conversations with high-impact conversion.',
    points: [
      'Conversion-led architecture',
      'A/B test readiness',
      'Core Web Vitals optimized'
    ],
    icon: Target,
    accent: 'landing'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Store',
    lead: 'Shop setups that sell like hot chai on a winter morning.',
    points: [
      'Shopify & WooCommerce expertise',
      'Optimized checkout flows',
      'WhatsApp sales support'
    ],
    icon: ShoppingBag,
    accent: 'ecommerce'
  },
  {
    id: 'chatbots',
    title: 'AI Chatbots',
    lead: 'Capture and qualify leads 24/7 via web and WhatsApp.',
    points: [
      'Multilingual lead capture',
      'Smart routing & qualification',
      'CRM & Google Sheets sync'
    ],
    icon: MessageSquare,
    accent: 'chatbots'
  },
  {
    id: 'automation',
    title: 'Automation & API Integrations',
    lead: 'Remove manual busywork and connect your digital tools.',
    points: [
      'Lead notification workflows',
      'Custom SaaS integrations',
      'Operations dashboards'
    ],
    icon: Zap,
    accent: 'automation'
  },
  {
    id: 'images',
    title: 'AI Image Generation',
    lead: 'Studio-quality product visuals without the studio cost.',
    points: [
      'E-commerce catalog visuals',
      'Batch photo enhancement',
      'On-brand styling templates'
    ],
    icon: Camera,
    accent: 'images'
  }
];

export default function ServicesOverview() {
  return (
    <section id="what-we-build" className="what-we-build-section">
      <div className="what-we-build-inner">
        <header className="what-we-build-header">
          <p className="what-we-build-eyebrow">WHAT WE BUILD</p>
          <h2 className="what-we-build-heading">Innovative Web Services</h2>
          <p className="what-we-build-subheading">
            For every Indian visionary ready to scale — from first portfolio to full-stack platforms.
          </p>
        </header>

        <div className="what-we-build-grid">
          {serviceCards.map((card) => (
            <article key={card.id} className="what-we-build-card">
              <div className="what-we-build-card-icon">
                <card.icon size={20} />
              </div>

              <h3 className="what-we-build-card-title">{card.title}</h3>
              <p className="what-we-build-card-lead">{card.lead}</p>

              <ul className="what-we-build-card-points">
                {card.points.map((point) => (
                  <li key={point} className="what-we-build-card-point">
                    <span className="what-we-build-card-point-bullet">•</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className={`what-we-build-card-image what-we-build-card-image--${card.accent}`}>
                <div className="what-we-build-card-image-overlay" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
