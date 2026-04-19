'use client';

import React from 'react';
import { ComparisonRow } from '@/types';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const rows: ComparisonRow[] = [
  {
    feature: 'Time to first working website',
    sitecraf: '2–3 weeks',
    freelancer: '4–10 weeks',
    inHouse: '1–2 weeks',
    largeAgency: '6–12 weeks'
  },
  {
    feature: 'Fixed-price quote upfront',
    sitecraf: true,
    freelancer: false,
    inHouse: false,
    largeAgency: false
  },
  {
    feature: 'Mobile-first, SEO & AEO optimised',
    sitecraf: true,
    freelancer: false,
    inHouse: false,
    largeAgency: true
  },
  {
    feature: 'WordPress, Shopify, Wix & Next.js',
    sitecraf: true,
    freelancer: false,
    inHouse: false,
    largeAgency: true
  },
  {
    feature: 'AI chatbot available as add-on',
    sitecraf: true,
    freelancer: false,
    inHouse: false,
    largeAgency: true
  },
  {
    feature: 'AI image generation for your site',
    sitecraf: true,
    freelancer: false,
    inHouse: false,
    largeAgency: false
  },
  {
    feature: '100% code & asset ownership',
    sitecraf: true,
    freelancer: false,
    inHouse: true,
    largeAgency: false
  },
  {
    feature: 'Typical project cost',
    sitecraf: '₹12K–₹80K+',
    freelancer: '₹5K–₹25K',
    inHouse: '₹40K–₹2L+',
    largeAgency: '₹80K–₹5L+'
  },
  {
    feature: 'Post-launch support included',
    sitecraf: true,
    freelancer: false,
    inHouse: true,
    largeAgency: false
  },
  {
    feature: 'WhatsApp & CRM integrations',
    sitecraf: true,
    freelancer: false,
    inHouse: false,
    largeAgency: true
  },
];

const renderCellContent = (value: string | boolean) => {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="text-[#22c55e] font-bold text-base">✓</span>
    ) : (
      <span className="text-[#ef4444] font-bold text-base">✗</span>
    );
  }
  return <span className="text-[#8888a0] text-[length:var(--text-sm)]">{value}</span>;
};

function ComparisonTableRow({ row, index }: { row: ComparisonRow, index: number }) {
  const revealRef = useScrollReveal(0.15);
  return (
    <tr 
      ref={revealRef as any}
      className={`group transition-colors duration-200 hover:bg-[#1c1c28] anim-reveal ${
        index % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#111111]'
      }`}
    >
      <td className="text-[#e8e8f0] text-[length:var(--text-sm)] px-6 py-4 font-medium font-[family-name:var(--font-body)]">
        {row.feature}
      </td>
      <td className="px-6 py-4 text-center bg-[#b5ff3e]/[0.04] border-x border-[#b5ff3e]/[0.12] group-hover:bg-[#b5ff3e]/[0.08] transition-colors duration-200">
        {renderCellContent(row.sitecraf)}
      </td>
      <td className="px-6 py-4 text-center">
        {renderCellContent(row.freelancer)}
      </td>
      <td className="px-6 py-4 text-center">
        {renderCellContent(row.inHouse)}
      </td>
      <td className="px-6 py-4 text-center">
        {renderCellContent(row.largeAgency)}
      </td>
    </tr>
  );
}

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-24 bg-[#000000] px-6">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <div className="mb-12 text-center flex flex-col items-center">
          <span className="block text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
            Why Sitecraf
          </span>
          <h2 className="heading-section font-[family-name:var(--font-display)] text-[#e8e8f0]">
            Sitecraf vs Freelancer vs In-House vs Agency
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[#8888a0] mt-3 max-w-2xl leading-relaxed mx-auto">
            Every option has trade-offs. Here is an honest comparison — so you can choose what actually fits your business, budget, and timeline.
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full overflow-x-auto pb-4">
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] min-w-[700px]">
            <table className="w-full border-collapse text-left">
              
              {/* Header Row */}
              <thead>
                <tr className="bg-[#111111]">
                  <th className="text-[#66667a] text-[length:var(--text-xs)] uppercase tracking-widest px-6 py-4 font-normal">
                    Feature
                  </th>
                  <th className="text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-widest px-6 py-4 text-center bg-[#b5ff3e]/[0.04] border-x border-[#b5ff3e]/[0.12] font-normal">
                    Sitecraf ★
                  </th>
                  <th className="text-[#66667a] text-[length:var(--text-xs)] uppercase tracking-widest px-6 py-4 text-center font-normal">
                    Cheap Freelancer
                  </th>
                  <th className="text-[#66667a] text-[length:var(--text-xs)] uppercase tracking-widest px-6 py-4 text-center font-normal">
                    DIY Website Builder
                  </th>
                  <th className="text-[#66667a] text-[length:var(--text-xs)] uppercase tracking-widest px-6 py-4 text-center font-normal">
                    Web Agency
                  </th>
                </tr>
              </thead>

              {/* Data Rows */}
              <tbody className="anim-stagger">
                {rows.map((row, index) => (
                  <ComparisonTableRow key={index} row={row} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-6 text-[#66667a] text-[length:var(--text-xs)] text-center font-[family-name:var(--font-body)]">
          ★ Comparison based on typical market rates in India, 2025. DIY = Wix free plan / Canva websites.
        </p>

      </div>
    </section>
  );
}
