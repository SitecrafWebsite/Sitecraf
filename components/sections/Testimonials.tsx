'use client';

import React from 'react';
import { Testimonial } from '@/types';

const testimonialData: Testimonial[] = [
  {
    id: '1',
    quote: "Honestly, I was skeptical about getting a custom website — my last developer disappeared after taking half the payment. This time the site went live in under 3 weeks, and patients started booking online from day one. The WhatsApp integration alone saved my receptionist 2 hours a day.",
    name: "Dr. Raghav Malhotra",
    role: "Dental Surgeon & Clinic Owner",
    company: "SmileCare Dental, Dwarka",
    location: "New Delhi",
    projectType: "Next.js · AI Chatbot"
  },
  {
    id: '2',
    quote: "We launched our Shopify store during the festive season and hit ₹2L in sales in the first 10 days. The checkout flow is so clean — almost zero cart abandonment compared to what we had before. Worth every rupee.",
    name: "Aanya Kapoor",
    role: "Co-founder",
    company: "NordLight Fashion",
    location: "Mumbai",
    projectType: "Shopify · E-Commerce"
  },
  {
    id: '3',
    quote: "Humara catalogue 800+ products ka tha aur purani website pe update karna ek nightmare tha. Ab meri team khud hi products add karti hai — koi developer ko call nahi karna. Bahut smooth kaam hai.",
    name: "Suresh Bhatt",
    role: "Managing Director",
    company: "LuxeWeave Fabrics",
    location: "Surat, Gujarat",
    projectType: "Wix Studio · Catalogue"
  },
  {
    id: '4',
    quote: "Our old site looked like it was built in 2015. The new WordPress build made us look like a proper agency — we started closing bigger retainers within a month of launch. The SEO structure they built is solid.",
    name: "Karan Nair",
    role: "Founder",
    company: "NexForge Digital",
    location: "Bangalore",
    projectType: "WordPress · Agency Site"
  },
  {
    id: '5',
    quote: "We needed to serve personalised diet plans at scale without a huge support team. The AI chatbot they built handles 300+ user queries a day without any intervention. It's become the core of our product.",
    name: "Priya Iyer",
    role: "Product Lead",
    company: "NutriGuideAI",
    location: "Pune",
    projectType: "Next.js · AI Integration"
  },
  {
    id: '6',
    quote: "We were losing leads because follow-ups weren't happening on time. Now every inquiry goes straight to our CRM with a WhatsApp notification. Our conversion rate on leads has gone up noticeably — the automation paid for itself in two weeks.",
    name: "Vikram Sharma",
    role: "Sales Director",
    company: "PrimeSpace Realty",
    location: "Noida, UP",
    projectType: "WordPress · Lead Automation"
  },
  {
    id: '7',
    quote: "I'd been meaning to fix my portfolio for two years. They built it in 12 days and it ranks on Google for my target keywords already. Got my first inbound client inquiry through the site within the first month.",
    name: "Arjun Mehta",
    role: "UI/UX Freelancer",
    company: "Self-employed",
    location: "Hyderabad",
    projectType: "Next.js · Portfolio"
  },
  {
    id: '8',
    quote: "The brief was simple: make it look premium without the premium budget. They delivered exactly that. The site went live in 2 weeks and my wholesale buyers actually commented on how professional it looks. That doesn't happen often.",
    name: "Meera Joshi",
    role: "Founder",
    company: "GreenStem Organics",
    location: "Jaipur, Rajasthan",
    projectType: "Wix Studio · Brand Site"
  }
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-quote">
        &quot;{testimonial.quote}&quot;
      </p>
      <div className="testimonial-footer">
        <div className="testimonial-info">
          <span className="testimonial-name">{testimonial.name}</span>
          <span className="testimonial-meta">
            {testimonial.role}, {testimonial.company}
          </span>
          <span className="testimonial-meta-extra">
            {testimonial.location} • {testimonial.projectType}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Split data into two rows
  const row1 = testimonialData.slice(0, 4);
  const row2 = testimonialData.slice(4, 8);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-inner">
        {/* Header */}
        <div className="testimonials-header">
          <span className="testimonials-eyebrow">
            CLIENT STORIES
          </span>
          <h2 className="testimonials-heading">
            Real Results. Real Businesses. Real India.
          </h2>
          <p className="testimonials-description">
            From Delhi clinics to Surat wholesalers — businesses across India trust us to build websites that actually work.
          </p>
        </div>

        {/* Scrolling Rows */}
        <div className="testimonials-rows">
          {/* Row 1: Left to Right */}
          <div className="testimonials-row">
            <div className="testimonials-track testimonials-marquee-left">
              {[...row1, ...row1].map((testimonial, idx) => (
                <TestimonialCard key={`${testimonial.id}-r1-${idx}`} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="testimonials-row">
            <div className="testimonials-track testimonials-marquee-right">
              {[...row2, ...row2].map((testimonial, idx) => (
                <TestimonialCard key={`${testimonial.id}-r2-${idx}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
