'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Project = {
  id: string;
  client: string;
  label: string;
  industry: string;
  type: string;
  tech: string[];
  timeline: string;
  price: string;
  liveUrl: string | null;
  videoUrl: string | null;
  isFeatured: boolean;
  badge: string;
  badgeColor: 'cyan' | 'gold' | 'lime' | 'purple';
  headline: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string; trend: 'up' | 'down' }[];
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    id: "security-appliances",
    client: "Security Appliances Brand",
    label: "Real Client · Identity Protected",
    industry: "Security & Surveillance",
    type: "Custom Coded Website",
    tech: ["HTML/CSS/JS", "Vercel", "Mobile-First", "SEO"],
    timeline: "2 weeks",
    price: "₹15,000",
    liveUrl: null,
    videoUrl: null,
    isFeatured: true,
    badge: "Client Work",
    badgeColor: "cyan",
    headline: "Professional Website for a Security Services Business — ₹0 Hosting Forever",
    challenge: "The client needed a credible, professional website to win B2B contracts but had no budget for recurring hosting fees. Existing website options quoted ₹3,000–₹5,000/month.",
    solution: "Custom-coded HTML/CSS/JS website deployed on Vercel's free tier. Zero monthly hosting cost — permanently. Mobile-first, fast-loading, and fully SEO-optimised from day one.",
    results: [
      { metric: "Monthly Hosting", value: "₹0", trend: "down" },
      { metric: "Page Load Speed", value: "<1.5s", trend: "up" },
      { metric: "Delivery Time", value: "2 weeks", trend: "up" },
      { metric: "Mobile Score", value: "98/100", trend: "up" }
    ]
  },
  {
    id: "ikhar-fashion",
    client: "Ikhar",
    label: "Real Client · Fashion Brand",
    industry: "Fashion & Apparel",
    type: "Shopify Website",
    tech: ["Shopify", "Custom Theme", "Mobile-First", "Product Catalogue"],
    timeline: "3 weeks",
    price: "₹18,000",
    liveUrl: null,
    videoUrl: null,
    isFeatured: false,
    badge: "Client Work",
    badgeColor: "cyan",
    headline: "Fashion Brand Website on Shopify — Clean Catalogue, Mobile-First",
    challenge: "Ikhar needed a professional online presence to showcase their fashion collections to buyers and retail partners. The brief: clean, editorial, fast on mobile.",
    solution: "Custom Shopify website with an editorial layout, organised product catalogue, and optimised mobile experience. Delivered in 3 weeks with full handover.",
    results: [
      { metric: "Platform", value: "Shopify", trend: "up" },
      { metric: "Delivery", value: "3 weeks", trend: "up" },
      { metric: "Collections Live", value: "100%", trend: "up" }
    ]
  },
  {
    id: "home-furnishing-wix",
    client: "Home Furnishing Brand",
    label: "Client Work · Coming Soon",
    industry: "Fabric · Home Furnishing",
    type: "Wix Studio + AI Images",
    tech: ["Wix Studio", "Velo Code", "AI Image Generation", "B2B"],
    timeline: "3 weeks",
    price: "₹20,000",
    liveUrl: null,
    videoUrl: null,
    isFeatured: false,
    badge: "In Progress",
    badgeColor: "gold",
    headline: "Multi-Collection Showcase Website for Fabric Exporter — 400+ AI Banners",
    challenge: "A home furnishing brand dealing in sofa and curtain fabrics needed a professional B2B showcase site with 100+ collection pages — and no photography budget for banners.",
    solution: "Wix Studio website with custom Velo logic for dynamic collection filtering. AI-generated lifestyle banner images for every collection — studio quality at a fraction of photography cost.",
    results: [
      { metric: "Collections", value: "100+", trend: "up" },
      { metric: "AI Banners Made", value: "400+", trend: "up" },
      { metric: "Photo Budget", value: "₹0", trend: "down" }
    ],
    isComingSoon: true
  },
  {
    id: "smilecare-dental",
    client: "SmileCare Dental",
    label: "Demo Project · Healthcare",
    industry: "Healthcare · Dental Clinic",
    type: "Next.js + AI Chatbot + Booking",
    tech: ["Next.js", "AI Chatbot", "Google Calendar API", "Hindi NLP", "Vercel"],
    timeline: "3 weeks",
    price: "From ₹25,000",
    liveUrl: "https://smile-care-xi.vercel.app",
    videoUrl: null,
    isFeatured: false,
    badge: "Demo Project",
    badgeColor: "lime",
    headline: "Dental Clinic Website with 24/7 AI Chatbot + Calendar Booking",
    challenge: "Dental clinics lose leads after hours when no one answers calls or WhatsApp. Patients expect to book appointments online, not wait for a callback.",
    solution: "Full Next.js website with an integrated AI chatbot (Hindi, Hinglish, English) trained on clinic FAQs and services. Step-by-step booking flow synced with Google Calendar — captures appointments 24/7 automatically.",
    results: [
      { metric: "Languages", value: "3", trend: "up" },
      { metric: "Booking", value: "24/7", trend: "up" },
      { metric: "Lead Capture", value: "Auto", trend: "up" }
    ]
  },
  {
    id: "nutriguide-ai",
    client: "NutriGuide AI",
    label: "Demo Project · Health & AI",
    industry: "Health & Wellness · AI",
    type: "Next.js + AI Nutrition Engine",
    tech: ["Next.js", "Gemini AI", "Personalization", "Vercel"],
    timeline: "2 weeks",
    price: "From ₹20,000",
    liveUrl: "https://nutritionai-blue.vercel.app",
    videoUrl: null,
    isFeatured: false,
    badge: "Demo Project",
    badgeColor: "lime",
    headline: "AI-Powered Personalised Nutrition Planner Web App",
    challenge: "Generic nutrition apps give one-size-fits-all advice. The goal was to show a personalised, AI-driven experience that adapts to each user's health goals and dietary preferences.",
    solution: "Next.js web app integrated with Gemini AI to generate custom weekly nutrition plans, meal suggestions, and wellness insights based on user inputs. Clean, fast, mobile-optimised.",
    results: [
      { metric: "AI Model", value: "Gemini", trend: "up" },
      { metric: "Personalisation", value: "100%", trend: "up" },
      { metric: "Load Speed", value: "<2s", trend: "up" }
    ]
  },
  {
    id: "prowebservices-portfolio",
    client: "ProWebServices — Pramod Verma",
    label: "Personal Portfolio",
    industry: "Developer Portfolio",
    type: "Next.js Portfolio Site",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "SEO"],
    timeline: "2 weeks",
    price: "From ₹15,000",
    liveUrl: "https://pramodverma-webservices-portfolio.vercel.app",
    videoUrl: null,
    isFeatured: false,
    badge: "Personal Work",
    badgeColor: "purple",
    headline: "Developer Portfolio for a Web & Automation Expert — Delhi",
    challenge: "Building a personal portfolio that's both a credibility signal for clients AND ranks in search for Delhi-based web development queries.",
    solution: "Clean, fast Next.js portfolio with SEO-optimised content, project showcases, and a contact flow. Deployed on Vercel with near-zero running cost.",
    results: [
      { metric: "Performance", value: "98/100", trend: "up" },
      { metric: "Delivery", value: "2 weeks", trend: "up" },
      { metric: "Hosting Cost", value: "₹0", trend: "down" }
    ]
  }
];

// COMPONENT_START
export default function CaseStudiesClient() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => {
        if (activeFilter === 'Client Work') return p.badgeColor === 'cyan';
        if (activeFilter === 'Demo Projects') return p.badgeColor === 'lime';
        if (activeFilter === 'Personal') return p.badgeColor === 'purple';
        return true;
      });

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalOpen(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const getBadgeClasses = (color: string) => {
    switch (color) {
      case 'cyan': return 'text-[#00c8c8] border-[#00c8c8]/20 bg-[#00c8c8]/[0.08]';
      case 'gold': return 'text-[#d19900] border-[#d19900]/20 bg-[#d19900]/[0.08]';
      case 'lime': return 'text-[#b5ff3e] border-[#b5ff3e]/20 bg-[#b5ff3e]/[0.08]';
      case 'purple': return 'text-[#a86fdf] border-[#a86fdf]/20 bg-[#a86fdf]/[0.08]';
      default: return 'text-[#8888a0] border-white/[0.08] bg-[#111111]';
    }
  };

  return (
    <>
      {/* SECTION 2 — Project Grid */}
      <section aria-label="Project Grid" className="w-full py-12 px-6 bg-[#000000]">
        <div className="w-full md:w-[80%] max-w-none mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 anim-reveal is-visible">
            {['All', 'Client Work', 'Demo Projects', 'Personal'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  activeFilter === tab
                    ? 'bg-[#b5ff3e] text-[#000000] font-medium'
                    : 'border border-white/[0.08] text-[#8888a0] hover:text-[#e8e8f0]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => {
              const isFeatured = project.isFeatured;
              return (
                <div
                  key={project.id}
                  onClick={() => openModal(project)}
                  className={`bg-[#0a0a0a] border ${isFeatured ? 'border-[#b5ff3e]/[0.18]' : 'border-white/[0.08]'} rounded-2xl p-6 flex flex-col cursor-pointer hover:scale-[1.01] hover:shadow-[var(--glow-sm)] transition-all duration-300 anim-reveal is-visible`}
                  style={{ animationDelay: `${(index % 3) * 100}ms` }}
                >
                  {/* Top: badge + industry */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className={`px-2.5 py-1 rounded-md text-xs border ${getBadgeClasses(project.badgeColor)}`}>
                      {project.badge}
                    </span>
                    <span className="text-[#8888a0] text-xs">{project.industry}</span>
                  </div>

                  {/* Visual Area */}
                  <div className="mb-6">
                    {project.liveUrl && !project.isComingSoon ? (
                      <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#111111]">
                        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                        </div>
                        <iframe
                          src={project.liveUrl}
                          className="w-full h-[208px] md:h-[192px] border-0 pointer-events-none"
                          loading="lazy"
                          title={project.client}
                          sandbox="allow-scripts allow-same-origin"
                        />
                      </div>
                    ) : project.isComingSoon ? (
                      <div className="bg-[#0d0d0d] rounded-xl h-[208px] md:h-[192px] flex flex-col items-center justify-center border border-dashed border-white/[0.08]">
                        <svg className="w-8 h-8 text-[#66667a] mb-2 animate-[spin_3s_linear_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-[#66667a] text-sm">Preview Coming Soon</span>
                      </div>
                    ) : (
                      <div className="bg-[#0d0d0d] rounded-xl h-[208px] md:h-[192px] flex flex-col items-center justify-center border border-dashed border-white/[0.08]">
                        <svg className="w-8 h-8 text-[#66667a] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="text-[#66667a] text-sm">Preview on Request</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="heading-sub font-[family-name:var(--font-display)] text-[#e8e8f0] mb-4">
                    {project.headline}
                  </h3>

                  {/* Key Metrics */}
                  <div className="flex gap-6 mb-6">
                    {project.results.slice(0, 3).map((res, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[#b5ff3e] font-bold text-lg">{res.value}</span>
                        <span className="text-[#66667a] text-xs">{res.metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="inline-flex items-center h-7 whitespace-nowrap bg-[#111111] border border-white/[0.08] rounded-md px-2.5 text-[#8888a0] text-xs">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="inline-flex items-center h-7 whitespace-nowrap bg-[#111111] border border-white/[0.08] rounded-md px-2.5 text-[#8888a0] text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Bottom */}
                  <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between mt-auto">
                    <span className="bg-[#111111] border border-white/[0.08] rounded-md px-2.5 py-1 text-[#8888a0] text-xs">
                      ⏱ {project.timeline}
                    </span>
                    <span className="text-[#b5ff3e] text-sm font-medium">View Details →</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA Banner */}
      <section aria-label="Call to Action" className="w-full py-16 px-6 bg-[#b5ff3e] flex flex-col items-center text-center">
        <div className="w-full md:w-[80%] max-w-none mx-auto flex flex-col items-center anim-reveal is-visible">
          <h2 className="heading-section font-[family-name:var(--font-display)] text-[#000000] mb-4 text-center">
            Seen enough? Let&apos;s build yours.
          </h2>
          <p className="text-[#000000]/70 text-[length:var(--text-base)] max-w-xl mx-auto text-center mt-4">
            Every project starts with a free 30-minute call. No commitment. Just clarity on what you need, what it&apos;ll cost, and how fast we can deliver.
          </p>
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#000000] text-[#b5ff3e] rounded-full px-8 py-4 font-semibold hover:bg-[#111111] transition-colors">
              Book a Free Call →
            </a>
            <Link href="/services" className="inline-flex items-center justify-center border border-[#000000]/20 text-[#000000] rounded-full px-8 py-4 font-semibold hover:bg-[#000000]/[0.08] transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modalOpen && selectedProject && (
        <>
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" onClick={closeModal}></div>
          <div className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-[#0a0a0a] border border-white/[0.08] rounded-2xl overflow-hidden flex flex-col max-w-5xl mx-auto">
            
            {/* TOP BAR */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/[0.08] shrink-0">
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 rounded-md text-xs border ${getBadgeClasses(selectedProject.badgeColor)}`}>
                  {selectedProject.badge}
                </span>
                <span className="text-[#e8e8f0] font-medium hidden sm:inline">{selectedProject.client}</span>
                <span className="text-[#8888a0] text-sm hidden sm:inline">·</span>
                <span className="text-[#8888a0] text-sm">{selectedProject.industry}</span>
              </div>
              <button onClick={closeModal} className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center hover:border-[#b5ff3e]/40 hover:text-[#b5ff3e] text-[#8888a0] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* MAIN AREA */}
            <div className="flex flex-col md:flex-row flex-grow overflow-hidden">
              
              {/* LEFT COLUMN */}
              <div className="w-full md:w-[60%] p-4 md:p-6 border-b md:border-b-0 md:border-r border-white/[0.08] flex flex-col gap-6 overflow-y-auto md:overflow-hidden">
                {/* PREVIEW AREA */}
                {selectedProject.videoUrl ? (
                  <video autoPlay loop muted playsInline className="w-full rounded-xl bg-[#111111]" style={{ aspectRatio: '16/9' }}>
                    <source src={selectedProject.videoUrl} type="video/mp4" />
                  </video>
                ) : selectedProject.liveUrl && !selectedProject.isComingSoon ? (
                  <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#111111]">
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                      <span className="flex-1 mx-3 bg-[#1a1a1a] rounded text-[#66667a] text-xs px-3 py-1 truncate">
                        {selectedProject.liveUrl}
                      </span>
                    </div>
                    <iframe
                      src={selectedProject.liveUrl}
                      className="w-full border-0 bg-white h-[512px] md:h-[600px]"
                      loading="lazy"
                      title={`Live preview of ${selectedProject.client}`}
                      sandbox="allow-scripts allow-same-origin"
                    />
                  </div>
                ) : (
                  <div className="bg-[#111111] rounded-xl aspect-video flex items-center justify-center text-[#66667a] text-sm border border-dashed border-white/[0.08]">
                    {selectedProject.isComingSoon ? "Website in progress — preview coming soon" : "Live preview available on request"}
                  </div>
                )}

                {/* Tech tags row */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="inline-flex items-center h-7 whitespace-nowrap bg-[#111111] border border-white/[0.08] rounded-md px-2.5 text-[#8888a0] text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="w-full md:w-[40%] p-4 md:p-6 overflow-y-auto flex flex-col gap-6">
                <h2 className="heading-sub font-[family-name:var(--font-display)] text-[#e8e8f0]">
                  {selectedProject.headline}
                </h2>

                <div>
                  <div className="text-[#b5ff3e] text-xs uppercase tracking-widest mb-2">The Challenge</div>
                  <p className="text-[#8888a0] text-sm leading-relaxed">{selectedProject.challenge}</p>
                </div>

                <div>
                  <div className="text-[#b5ff3e] text-xs uppercase tracking-widest mb-2">Our Solution</div>
                  <p className="text-[#8888a0] text-sm leading-relaxed">{selectedProject.solution}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {selectedProject.results.map((res, i) => (
                    <div key={i} className="bg-[#111111] rounded-xl p-4 text-center border border-white/[0.04]">
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-[#b5ff3e] font-bold text-xl font-[family-name:var(--font-display)]">{res.value}</span>
                        {res.trend === 'up' ? (
                          <span className="text-[#22c55e] text-base leading-none">↑</span>
                        ) : (
                          <span className="text-[#b5ff3e] text-base leading-none">↓</span>
                        )}
                      </div>
                      <div className="text-[#66667a] text-xs mt-1">{res.metric}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="text-[#8888a0] text-xs bg-[#111111] rounded-lg px-3 py-2 border border-white/[0.04]">⏱ {selectedProject.timeline}</span>
                  <span className="text-[#8888a0] text-xs bg-[#111111] rounded-lg px-3 py-2 border border-white/[0.04]">💰 {selectedProject.price}</span>
                  <span className="text-[#8888a0] text-xs bg-[#111111] rounded-lg px-3 py-2 border border-white/[0.04]">🏷 {selectedProject.type}</span>
                </div>

                <div className="mt-auto pt-4 flex flex-col gap-3">
                  {selectedProject.liveUrl && !selectedProject.isComingSoon && (
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-[#b5ff3e] text-[#000000] rounded-full px-6 py-3 text-sm font-semibold w-full text-center hover:bg-[#c4ff66] transition-colors">
                      Visit Live Site ↗
                    </a>
                  )}
                  <a href="https://wa.me/919599143235" target="_blank" rel="noopener noreferrer" className="border border-[#b5ff3e]/[0.18] text-[#b5ff3e] rounded-full px-6 py-3 text-sm font-semibold w-full text-center hover:bg-[#b5ff3e]/[0.08] transition-colors">
                    💬 Discuss a Similar Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
