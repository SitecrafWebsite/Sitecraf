'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  name: string;
  subheading: string;
  category: string;
  description: string;
  url: string;
  image: string;
  accent: string;
}

const projects: Project[] = [
  {
    id: 'learningt',
    name: 'LearninGT',
    subheading: 'Where Will Meets Knowledge',
    category: 'LMS / EDTECH',
    description: 'We developed a comprehensive Learning Management System (LMS) designed to bridge the gap between skill acquisition and practical application. High-performance Next.js frontend with integrated video hosting and student tracking.',
    url: 'learningt.com',
    image: 'https://picsum.photos/seed/edu/1000/800',
    accent: '#b5ff3e'
  },
  {
    id: 'furnishing',
    name: 'Fabric Brand',
    subheading: 'Showcase Excellence',
    category: 'MANUFACTURING / EXPORT',
    description: 'A visual-first catalogue website for a leading fabric exporter. Migrated from Shopify to Wix Studio to save ₹18K/year while adding advanced AI-generated fabric banners and collections.',
    url: 'exportcatalogue.in',
    image: 'https://picsum.photos/seed/fabric/1000/800',
    accent: '#00c8c8'
  },
  {
    id: 'security',
    name: 'Suraksha Pro',
    subheading: 'Trust & Surveillance',
    category: 'SECURITY SERVICES',
    description: 'Zero-cost hosting custom website built with Next.js and deployed to Vercel. Features a high-converting lead capture system and instant notification integration via WhatsApp API.',
    url: 'surakshapro.in',
    image: 'https://picsum.photos/seed/security/1000/800',
    accent: '#b5ff3e'
  }
];

export default function OurWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const next = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="our-work" className="py-24 bg-[#000000] px-6 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-[length:var(--text-2xl)] font-[family-name:var(--font-display)] font-bold tracking-tight bg-[linear-gradient(135deg,#b5ff3e_0%,#4ade80_100%)] bg-clip-text text-transparent">
            Our Work
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#b5ff3e]/40 to-transparent mt-4" />
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]"
            >
              {/* Left Content */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-[length:var(--text-xl)] font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] mb-1">
                    {activeProject.name}
                  </h3>
                  <p className="text-[#8888a0] text-sm uppercase tracking-widest font-medium mb-4">
                    {activeProject.subheading}
                  </p>
                  
                  <div className="inline-block px-3 py-1 bg-white/[0.05] border border-white/[0.08] rounded-md text-[#66667a] text-[10px] tracking-[0.2em] uppercase mb-8">
                    {activeProject.category}
                  </div>

                  <p className="font-[family-name:var(--font-body)] text-[#8888a0] leading-relaxed mb-10 max-w-md">
                    {activeProject.description}
                  </p>

                  <Link
                    href="#contact"
                    className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm transition-all hover:pr-10 active:scale-95"
                  >
                    <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                    LET&apos;S DISCUSS YOUR PROJECT
                    <span className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                  </Link>
                </motion.div>
              </div>

              {/* Right Visual Mockup */}
              <div className="relative group">
                <div 
                  className="absolute -inset-4 bg-gradient-to-br from-[#b5ff3e]/10 to-transparent blur-2xl opacity-50 transition-opacity group-hover:opacity-70" 
                  style={{ backgroundImage: `radial-gradient(circle at 50% 50%, ${activeProject.accent}20 0%, transparent 70%)` }}
                />
                
                <div className="relative bg-[#111111] border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl">
                  {/* Browser Bar */}
                  <div className="h-10 bg-[#181818] border-b border-white/[0.08] flex items-center px-4 gap-4">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                    <div className="flex-1 bg-black/40 h-6 rounded-md flex items-center px-3 gap-2">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      <span className="text-[10px] text-white/30 font-mono tracking-tight">{activeProject.url}</span>
                    </div>
                  </div>
                  
                  {/* Screenshot */}
                  <div className="aspect-[4/3] relative grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500">
                    <Image
                      src={activeProject.image}
                      alt={activeProject.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-16 md:mt-24">
            {/* Arrows */}
            <div className="flex gap-4">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-[#b5ff3e] hover:text-[#b5ff3e] transition-all active:scale-95"
              >
                ←
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-[#b5ff3e] hover:text-[#b5ff3e] transition-all active:scale-95"
              >
                →
              </button>
            </div>

            {/* Pagination Pills */}
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`transition-all duration-300 rounded-full h-1.5 ${
                    i === activeIndex ? 'w-8 bg-[#b5ff3e]' : 'w-1.5 bg-white/10 hover:bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-[radial-gradient(circle,rgba(181,255,62,0.03)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
}
