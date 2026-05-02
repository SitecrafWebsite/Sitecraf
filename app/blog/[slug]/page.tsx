import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { compileMDX } from 'next-mdx-remote/rsc'
import { getAllPostSlugs, getPostBySlug, BlogPost } from '@/lib/blog'

const RELATED_POSTS: Record<string, string[]> = {
  '5-signs-your-website-is-costing-you-customers': [
    'why-your-website-isnt-getting-leads',
    'landing-page-vs-full-website',
    'why-most-small-business-websites-dont-rank'
  ],
  'chatgpt-recommended-competitor-geo': [
    'what-is-geo-generative-engine-optimization',
    'what-is-aeo-answer-engine-optimization',
    'seo-aeo-geo-guide-for-small-business'
  ],
  'landing-page-vs-full-website': [
    '5-signs-your-website-is-costing-you-customers',
    'why-your-website-isnt-getting-leads',
    'website-vs-instagram-do-you-need-a-website'
  ],
  'seo-aeo-geo-guide-for-small-business': [
    'what-is-aeo-answer-engine-optimization',
    'what-is-geo-generative-engine-optimization',
    'why-most-small-business-websites-dont-rank'
  ],
  'seo-cost-small-business-malaysia-india': [
    'seo-aeo-geo-guide-for-small-business',
    'why-most-small-business-websites-dont-rank',
    'wordpress-vs-nextjs-for-seo'
  ],
  'website-vs-instagram-do-you-need-a-website': [
    'landing-page-vs-full-website',
    '5-signs-your-website-is-costing-you-customers',
    'why-your-website-isnt-getting-leads'
  ],
  'what-is-aeo-answer-engine-optimization': [
    'what-is-geo-generative-engine-optimization',
    'chatgpt-recommended-competitor-geo',
    'seo-aeo-geo-guide-for-small-business'
  ],
  'what-is-geo-generative-engine-optimization': [
    'what-is-aeo-answer-engine-optimization',
    'chatgpt-recommended-competitor-geo',
    'seo-aeo-geo-guide-for-small-business'
  ],
  'why-most-small-business-websites-dont-rank': [
    'why-your-website-isnt-getting-leads',
    '5-signs-your-website-is-costing-you-customers',
    'wordpress-vs-nextjs-for-seo'
  ],
  'why-your-website-isnt-getting-leads': [
    '5-signs-your-website-is-costing-you-customers',
    'landing-page-vs-full-website',
    'why-most-small-business-websites-dont-rank'
  ],
  'wordpress-vs-nextjs-for-seo': [
    'why-most-small-business-websites-dont-rank',
    'seo-cost-small-business-malaysia-india',
    'seo-aeo-geo-guide-for-small-business'
  ],
}

const mdxComponents = {
  img: ({ src, alt }: { src?: string; alt?: string }) => {
    if (!src) return null

    return (
      <figure className="my-8 overflow-hidden rounded-[10px] border border-white/10 bg-[color:var(--color-surface)]">
        {/* MDX content uses mixed local/remote assets, so a native img keeps sizing flexible here. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? ''}
          className="block h-auto w-full object-contain"
          loading="lazy"
        />
      </figure>
    )
  },
}

export async function generateStaticParams() {
  return getAllPostSlugs().map(slug => ({ slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const title = post.ogTitle ?? post.title
  const description = post.ogDescription ?? post.description

  return {
    title: `${title} | Sitecraf Blog`,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image }] : undefined,
    },
    alternates: { canonical: `https://sitecraf.com/blog/${slug}` },
  }
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const relatedSlugs = RELATED_POSTS[slug] ?? []
  const relatedPosts = relatedSlugs
    .map((s) => getPostBySlug(s))
    .filter((p): p is BlogPost => p !== null)

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: false },
    components: mdxComponents,
  })

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author },
    image: post.image || undefined,
    publisher: {
      '@type': 'Organization',
      name: 'Sitecraf',
      url: 'https://sitecraf.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <main className="flex flex-col min-h-screen bg-[#000000]">
        <section className="w-full pt-32 pb-12 px-6 bg-[color:var(--color-bg)]">
          <div className="w-full md:w-[80%] max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[color:var(--color-text-muted)] text-sm mb-8 hover:text-[color:var(--color-primary)] transition-colors"
            >
              &larr; Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[color:var(--color-primary)] text-xs uppercase tracking-widest font-medium">
                {post.category}
              </span>
              {post.seoTag && (
                <span className="bg-[color:var(--color-surface)] border border-white/[0.08] text-[color:var(--color-text-muted)] text-xs px-2 py-0.5 rounded-full">
                  {post.seoTag}
                </span>
              )}
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-[color:var(--color-text)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-[color:var(--color-text-muted)] text-sm mb-10">
              <span>{post.author}</span>
              <span>&middot;</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </div>

            {post.image && (
              <div className="relative mb-12 h-64 w-full overflow-hidden rounded-[10px] border border-white/10 bg-[color:var(--color-surface)] md:h-96">
                <Image
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>
            )}
          </div>
        </section>

        <section className="w-full pb-24 px-6 bg-[color:var(--color-bg)]">
          <div className="w-full md:w-[80%] max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none
              prose-headings:font-[family-name:var(--font-display)]
              prose-headings:text-[color:var(--color-text)]
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-[color:var(--color-text-muted)] prose-p:leading-relaxed
              prose-li:text-[color:var(--color-text-muted)]
              prose-strong:text-[color:var(--color-text)]
              prose-a:text-[color:var(--color-primary)] prose-a:no-underline hover:prose-a:underline
              prose-table:border-collapse
              prose-th:border prose-th:border-white/10 prose-th:bg-[color:var(--color-surface)] prose-th:px-4 prose-th:py-2 prose-th:text-[color:var(--color-text)]
              prose-td:border prose-td:border-white/10 prose-td:px-4 prose-td:py-2 prose-td:text-[color:var(--color-text-muted)]
              prose-hr:border-white/10
              prose-code:text-[color:var(--color-primary)] prose-code:bg-[color:var(--color-surface)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-img:my-0 prose-img:w-full prose-img:h-auto prose-img:max-w-full prose-img:rounded-[10px]
            ">
              {content}
            </article>

            <div className="mt-16 pt-8 border-t border-[color:var(--color-border)]">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[color:var(--color-text-muted)] text-sm hover:text-[color:var(--color-primary)] transition-colors"
              >
                &larr; Back to Blog
              </Link>
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section aria-label="Related Posts" className="w-full py-16 px-6 bg-[color:var(--color-surface)]">
            <div className="w-full md:w-[80%] max-w-4xl mx-auto">
              <div className="mb-10">
                <span className="block text-[color:var(--color-primary)] text-xs uppercase tracking-widest mb-3">
                  Related Posts
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-[color:var(--color-text)] text-2xl md:text-3xl font-bold">
                  Continue Reading
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group flex flex-col bg-[color:var(--color-surface)] border border-[color:var(--color-border)] hover:border-[color:var(--color-primary)]/40 rounded-2xl p-6 transition-colors duration-200"
                  >
                    <span className="text-[color:var(--color-primary)] text-[10px] uppercase tracking-widest font-medium mb-3">
                      {related.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-[color:var(--color-text)] font-bold text-base leading-snug mb-3 group-hover:text-[color:var(--color-primary)] transition-colors duration-200">
                      {related.title}
                    </h3>
                    <p className="text-[color:var(--color-text-muted)] text-sm leading-relaxed line-clamp-2 flex-grow mb-4">
                      {related.description}
                    </p>
                    <span className="text-[color:var(--color-text-faint)] text-xs mt-auto">
                      {related.readTime}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {post.faqs && post.faqs.length > 0 && (
          <section aria-label="FAQ" className="w-full py-16 px-6 bg-[color:var(--color-surface)]">
            <div className="w-full md:w-[80%] max-w-4xl mx-auto">
              <div className="mb-10">
                <span className="block text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
                  FAQ
                </span>
                <h2 className="heading-section font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-3">
                  Questions about this topic
                </h2>
              </div>
              <div className="flex flex-col">
                {post.faqs.map((faq, idx) => (
                  <details key={idx} className="group border-b border-[color:var(--color-border)] py-5">
                    <summary className="text-[color:var(--color-text)] font-semibold cursor-pointer list-none flex justify-between items-center hover:text-[color:var(--color-primary)] transition-colors">
                      {faq.q}
                      <svg className="w-5 h-5 flex-shrink-0 ml-4 text-[color:var(--color-text-muted)] group-hover:text-[color:var(--color-primary)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="text-[color:var(--color-text-muted)] mt-3 leading-relaxed pt-2">{faq.a}</p>
                  </details>
                ))}
              </div>
              <div className="pt-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-[color:var(--color-text-muted)] text-[length:var(--text-sm)]">
                  Still have a question not answered above?
                </p>
                <a
                  href="https://wa.me/919599143235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--color-primary)] border border-[color:var(--color-primary-border)] rounded-full px-5 py-2 text-[length:var(--text-sm)] font-semibold hover:bg-[color:var(--color-primary)]/[0.08] transition-colors duration-200 flex-shrink-0"
                >
                  Ask on WhatsApp →
                </a>
              </div>
            </div>
          </section>
        )}

        <section aria-label="Get in Touch" className="w-full py-20 px-6 bg-[color:var(--color-bg)]">
          <div className="w-full md:w-[80%] max-w-4xl mx-auto">
            <div className="bg-[color:var(--color-surface)] border border-[color:var(--color-border)] rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
              <div className="max-w-xl">
                <span className="block text-[color:var(--color-primary)] text-[length:var(--text-xs)] uppercase tracking-widest mb-3">
                  Ready to Start?
                </span>
                <h2 className="heading-section font-[family-name:var(--font-display)] text-[color:var(--color-text)] mb-4">
                  Most clients hear back<br />
                  <span className="text-[color:var(--color-primary)]">within 2 hours.</span>
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[color:var(--color-text-muted)] text-[length:var(--text-base)] leading-relaxed mb-6">
                  Tell us what you need on WhatsApp - we&apos;ll send a fixed quote, no obligation.
                  No discovery calls, no lengthy forms. Just a clear price and a start date.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {["Fixed quote in writing", "No GST", "50% only after approval"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[color:var(--color-primary)]">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[color:var(--color-text-muted)] text-[length:var(--text-xs)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-6 flex-shrink-0">
                <a
                  href="https://wa.me/919599143235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[color:var(--color-primary)] text-[#000000] rounded-full px-7 py-3.5 font-semibold text-[length:var(--text-sm)] hover:bg-[color:var(--color-primary-hover)] transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M11.5 2C6.253 2 2 6.253 2 11.5c0 1.938.573 3.745 1.557 5.254L2 22l5.412-1.538A9.451 9.451 0 0011.5 21C16.747 21 21 16.747 21 11.5S16.747 2 11.5 2z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:hello@sitecraf.com"
                  className="inline-flex items-center gap-2 text-[color:var(--color-primary)] border border-[color:var(--color-primary-border)] rounded-full px-7 py-3.5 font-semibold text-[length:var(--text-sm)] hover:bg-[color:var(--color-primary)]/[0.08] transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  Email Us Instead
                </a>
                <p className="text-[color:var(--color-text-faint)] text-[length:var(--text-xs)] text-right max-w-[220px]">
                  Typically reply within 2 hours<br />Mon-Sat, 9 AM - 9 PM IST
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
