import type { NextConfig } from 'next';

const securityHeaders = [

  // ✅ HSTS — force HTTPS for 2 years, include subdomains
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },

  // ✅ Prevent clickjacking
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },

  // ✅ Prevent MIME type sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },

  // ✅ Control referrer information
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },

  // ✅ Disable browser features not used by this site
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  },

  // ✅ XSS Protection (legacy browsers)
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },

  // ✅ DNS Prefetch Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },

  // ✅ Content Security Policy — hardened
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",

      // Scripts — self + Next.js inline runtime (nonce not available in static headers)
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",

      // Styles — self + inline (Tailwind requires this)
      "style-src 'self' 'unsafe-inline' https://api.fontshare.com https://fonts.googleapis.com",

      // Fonts
      "font-src 'self' https://api.fontshare.com https://fonts.gstatic.com",

      // Images — self + data URIs + external image sources used on site
      "img-src 'self' data: blob: https://res.cloudinary.com https://images.unsplash.com https://www.google-analytics.com",

      // API connections — self only (OpenAI and FormSubmit called server-side)
      "connect-src 'self' https://formsubmit.co https://www.google-analytics.com",

      // Frames — deny all
      "frame-src 'none'",

      // Objects — deny all
      "object-src 'none'",

      // Base URI — prevent base tag hijacking
      "base-uri 'self'",

      // Form submissions — self only
      "form-action 'self'",

      // Upgrade insecure requests
      "upgrade-insecure-requests",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/terms',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  turbopack: {},
  webpack: (config, { dev }) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: /mcp-server/,
    };
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
