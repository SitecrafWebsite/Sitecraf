import { Metadata } from 'next';
import CaseStudiesClient from '@/components/sections/CaseStudiesClient';

export const metadata: Metadata = {
  title: 'Case Studies — Real Projects by Sitecraf | Web & AI Work, New Delhi',
  description: 'See real websites, AI chatbots, and AI image generation work built by Sitecraf. Projects for security, fashion, healthcare, nutrition, and portfolio clients across India.',
  keywords: [
    'website development case studies India',
    'Sitecraf projects portfolio',
    'AI chatbot project India',
    'Shopify website India case study',
    'Next.js project New Delhi',
    'web developer portfolio India',
    'AI image generation project India'
  ],
  openGraph: {
    title: 'Case Studies — Real Projects by Sitecraf',
    description: '6 projects across security, fashion, healthcare, AI nutrition, and portfolio — built by Sitecraf, New Delhi.',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: { canonical: 'https://sitecraf.com/case-studies' }
};

export default function CaseStudiesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#000000]">
      {/* SECTION 1 — Page Hero */}
      <section aria-label="Case Studies Hero" className="w-full pt-32 pb-16 px-6 bg-[#000000]">
        <div className="w-full md:w-[80%] max-w-none mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-[#b5ff3e]/[0.18] bg-[#b5ff3e]/[0.08] text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-8 anim-reveal is-visible">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b5ff3e] animate-pulse" />
            Our Work
          </div>
          
          <h1 className="font-[family-name:var(--font-display)] font-bold text-[length:var(--text-3xl)] text-[#e8e8f0] tracking-[-0.02em] leading-[1.15] anim-reveal is-visible" style={{ animationDelay: '100ms' }}>
            Six Projects. <span className="text-[#b5ff3e]">Real Results.</span>
          </h1>
          
          <p className="text-[#8888a0] text-[length:var(--text-base)] max-w-2xl mx-auto mt-4 anim-reveal is-visible" style={{ animationDelay: '200ms' }}>
            Websites, AI chatbots, and AI-generated images — built for Indian businesses and global clients. Every project is scoped, delivered on time, and handed over with 100% IP ownership.
          </p>

          <div className="mt-12 border-t border-b border-white/[0.06] py-8 anim-reveal is-visible" style={{ animationDelay: '300ms' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col">
                <span className="text-[#b5ff3e] font-bold text-2xl font-[family-name:var(--font-display)]">6 Projects</span>
                <span className="text-[#8888a0] text-xs uppercase tracking-widest mt-1">Showcased</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#b5ff3e] font-bold text-2xl font-[family-name:var(--font-display)]">5 Industries</span>
                <span className="text-[#8888a0] text-xs uppercase tracking-widest mt-1">Covered</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#b5ff3e] font-bold text-2xl font-[family-name:var(--font-display)]">3 Countries</span>
                <span className="text-[#8888a0] text-xs uppercase tracking-widest mt-1">Served</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#b5ff3e] font-bold text-2xl font-[family-name:var(--font-display)]">100% IP</span>
                <span className="text-[#8888a0] text-xs uppercase tracking-widest mt-1">Yours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudiesClient />
    </main>
  );
}
