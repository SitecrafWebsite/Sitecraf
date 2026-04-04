'use client';

import React from 'react';
import Link from 'next/link';

export default function WebDevDeepDive() {
  return (
    <section id="cost-savings" className="py-24 bg-[#0a0a0a] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
            Save ₹18,000 Every Year
          </span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-[#e8e8f0] text-[length:var(--text-xl)]">
            Still on Shopify Just to Showcase Your Brand?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-base)] leading-relaxed mb-6">
              Many home furnishing manufacturers, fabric exporters, and B2B brands use Shopify as a showcase website — not to sell online. They&apos;re paying ₹2,000+/month for features they simply don&apos;t need.
            </p>
            <p className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-base)] leading-relaxed mb-6">
              I migrate your existing Shopify website to Wix Studio — preserving every element of your design, collections, and content — at just ₹450/month. That&apos;s a direct saving of ₹18,600/year, starting from month one.
            </p>
            <p className="font-[family-name:var(--font-body)] text-[#e8e8f0] text-[length:var(--text-base)] font-semibold leading-relaxed mb-8">
              Same website. Same design. Same trust. A fraction of the cost.
            </p>

            <div className="mb-8">
              <h4 className="text-[#e8e8f0] font-semibold mb-4 text-sm uppercase tracking-wider">Who this is for:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-[#8888a0] text-sm">
                  <span className="text-[#b5ff3e] mt-0.5">✓</span> Home furnishing & fabric manufacturers with a Shopify site
                </li>
                <li className="flex items-start gap-3 text-[#8888a0] text-sm">
                  <span className="text-[#b5ff3e] mt-0.5">✓</span> Exporters who showcase collections but don&apos;t sell online
                </li>
                <li className="flex items-start gap-3 text-[#8888a0] text-sm">
                  <span className="text-[#b5ff3e] mt-0.5">✓</span> Any brand that wants a professional website without Shopify pricing
                </li>
                <li className="flex items-start gap-3 text-[#8888a0] text-sm">
                  <span className="text-red-500 mt-0.5">✗</span> Not for businesses actively selling products through their Shopify store
                </li>
              </ul>
            </div>

            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center min-h-[48px] px-8 py-4 bg-[#b5ff3e] text-[#000000] rounded-full hover:bg-[#c4ff66] hover:shadow-[var(--glow-sm)] transition-all duration-300 text-[length:var(--text-sm)] font-semibold"
            >
              Check If You Qualify →
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-[#111111] border border-white/[0.08] p-6 rounded-2xl flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-red-500 font-bold text-xl">₹2,000/mo</span>
              </div>
              <div>
                <h4 className="text-[#e8e8f0] font-medium">Typical Shopify cost</h4>
                <p className="text-[#8888a0] text-sm mt-1">For showcase sites</p>
              </div>
            </div>

            <div className="bg-[#111111] border border-[#b5ff3e]/[0.18] p-6 rounded-2xl flex items-center gap-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#b5ff3e]/[0.05] to-transparent pointer-events-none" />
              <div className="w-16 h-16 rounded-full bg-[#b5ff3e]/20 flex items-center justify-center flex-shrink-0 relative z-10">
                <span className="text-[#b5ff3e] font-bold text-xl">₹450/mo</span>
              </div>
              <div className="relative z-10">
                <h4 className="text-[#e8e8f0] font-medium">Wix Studio equivalent</h4>
                <p className="text-[#8888a0] text-sm mt-1">Monthly cost</p>
              </div>
            </div>

            <div className="bg-[#111111] border border-white/[0.08] p-6 rounded-2xl flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#00c8c8]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[#00c8c8] font-bold text-xl">₹18,600/yr</span>
              </div>
              <div>
                <h4 className="text-[#e8e8f0] font-medium">Your annual savings</h4>
                <p className="text-[#8888a0] text-sm mt-1">After migration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
