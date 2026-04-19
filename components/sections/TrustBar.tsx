import React from 'react';
import Image from 'next/image';

const technologies = [
  { name: "WordPress",    icon: "https://cdn.simpleicons.org/wordpress/8888a0"     },
  { name: "WooCommerce",  icon: "https://cdn.simpleicons.org/woocommerce/8888a0"   },
  { name: "Shopify",      icon: "https://cdn.simpleicons.org/shopify/8888a0"       },
  { name: "Wix Studio",   icon: "https://cdn.simpleicons.org/wix/8888a0"           },
  { name: "Next.js",      icon: "https://cdn.simpleicons.org/nextdotjs/8888a0"     },
  { name: "React",        icon: "https://cdn.simpleicons.org/react/8888a0"         },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/8888a0"   },
  { name: "Vercel",       icon: "https://cdn.simpleicons.org/vercel/8888a0"        },
  { name: "TypeScript",   icon: "https://cdn.simpleicons.org/typescript/8888a0"    }
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
                <div className="relative h-6 w-6">
                  <Image 
                    src={tech.icon} 
                    alt={tech.name} 
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
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
