import React from 'react';
import {
  siWordpress,
  siWoocommerce,
  siShopify,
  siWix,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siVercel,
  siTypescript
} from 'simple-icons';

const technologies = [
  { name: "WordPress",    iconPath: siWordpress.path     },
  { name: "WooCommerce",  iconPath: siWoocommerce.path   },
  { name: "Shopify",      iconPath: siShopify.path       },
  { name: "Wix Studio",   iconPath: siWix.path           },
  { name: "Next.js",      iconPath: siNextdotjs.path     },
  { name: "React",        iconPath: siReact.path         },
  { name: "Tailwind CSS", iconPath: siTailwindcss.path   },
  { name: "Vercel",       iconPath: siVercel.path        },
  { name: "TypeScript",   iconPath: siTypescript.path    }
];

export default function TrustBar() {
  return (
    <section className="w-full bg-[#0a0a0a] border-y border-white/[0.05] py-6">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full md:w-[80%] max-w-none mx-auto px-6">
        <span className="flex-shrink-0 text-[#66667a] text-[length:var(--text-xs)] uppercase tracking-[0.12em] whitespace-nowrap">
          Platforms & Technologies
        </span>
        
        <div 
          className="flex-1 overflow-hidden w-full"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <div className="marquee-track gap-12">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <div className="relative h-6 w-6 flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="#8888a0" 
                    className="w-full h-full"
                    aria-label={tech.name}
                    role="img"
                  >
                    <title>{tech.name}</title>
                    <path d={tech.iconPath} />
                  </svg>
                </div>
                <span className="font-[family-name:var(--font-body)] font-semibold text-[#8888a0] text-[length:var(--text-xs)] uppercase tracking-[0.1em] whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
