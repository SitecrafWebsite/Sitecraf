import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/services',
          '/pricing',
          '/blog',
          '/privacy',
          '/terms',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/static/',
        ],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'CCBot',
          'anthropic-ai',
          'Claude-Web',
          'Google-Extended',
          'PerplexityBot',
          'Bytespider',
          'Amazonbot',
        ],
        disallow: '/',
      },
    ],
    sitemap: 'https://sitecraf.com/sitemap.xml',
  }
}
