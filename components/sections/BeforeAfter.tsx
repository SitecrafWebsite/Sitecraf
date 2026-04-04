'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const imagePairs = [
  {
    id: 1,
    source: 'https://images.unsplash.com/photo-1584552190146-5251361793ce?q=80&w=800&auto=format&fit=crop',
    generated: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop',
    alt: 'AI generated banner image for home furnishing brand India'
  },
  {
    id: 2,
    source: 'https://images.unsplash.com/photo-1580828326061-4b1c85352e80?q=80&w=800&auto=format&fit=crop',
    generated: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    alt: 'sofa fabric banner image generation India'
  },
  {
    id: 3,
    source: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?q=80&w=800&auto=format&fit=crop',
    generated: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop',
    alt: 'AI generated banner image for home furnishing brand India'
  }
];

export default function BeforeAfter() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.transformation-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="ai-images" ref={sectionRef} className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
            AI Image Generation Portfolio
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-xl)]">
            From Raw Fabric Photo to Stunning Banner
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 max-w-2xl leading-relaxed">
            400+ AI-generated images delivered for home furnishing brands. Each banner created from a single fabric photograph.
          </p>
        </div>

        {/* Image Grid */}
        <div className="flex flex-col gap-12">
          {imagePairs.map((pair, index) => (
            <div 
              key={pair.id}
              className="transformation-card bg-[#111111] border border-white/[0.08] rounded-2xl overflow-hidden opacity-0 translate-y-8 transition-all duration-[700ms] ease-[var(--t-base)]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* LEFT — Source Photo */}
                <div className="flex-1 relative border-b md:border-b-0 md:border-r border-white/[0.06]">
                  <div className="absolute top-4 left-4 z-10 bg-[#ef4444]/[0.08] border border-[#ef4444]/[0.12] px-4 py-1.5 rounded-full backdrop-blur-sm">
                    <span className="text-[#ef4444] text-[length:var(--text-xs)] font-semibold uppercase tracking-widest">
                      Source Photo
                    </span>
                  </div>
                  <div className="aspect-square md:aspect-video relative overflow-hidden bg-[#000000]">
                    <Image 
                      src={pair.source} 
                      alt="Raw fabric source photo" 
                      fill
                      className="object-cover opacity-80 grayscale-[20%]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* RIGHT — AI Generated */}
                <div className="flex-1 relative">
                  <div className="absolute top-4 left-4 z-10 bg-[#22c55e]/[0.08] border border-[#22c55e]/[0.12] px-4 py-1.5 rounded-full backdrop-blur-sm">
                    <span className="text-[#22c55e] text-[length:var(--text-xs)] font-semibold uppercase tracking-widest">
                      AI Generated
                    </span>
                  </div>
                  <div className="aspect-square md:aspect-video relative overflow-hidden bg-[#000000]">
                    <Image 
                      src={pair.generated} 
                      alt={pair.alt} 
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-16 flex justify-center">
          <Link 
            href="#contact" 
            className="flex items-center justify-center min-h-[48px] px-8 py-4 bg-[#b5ff3e] text-[#000000] rounded-full hover:bg-[#c4ff66] hover:shadow-[var(--glow-sm)] active:scale-95 transition-all duration-300 text-[length:var(--text-sm)] font-semibold"
          >
            Get AI Images for Your Brand →
          </Link>
        </div>

      </div>
    </section>
  );
}
