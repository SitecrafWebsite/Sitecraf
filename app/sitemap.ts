import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sitecraf.com'

  return [
    {
      url: `${base}/`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/services`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/pricing`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/privacy`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
