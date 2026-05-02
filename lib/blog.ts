import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  readTime: string
  featured: boolean
  seoTag: string
  image: string
  tags: string[]
  imageAlt?: string
  ogTitle?: string
  ogDescription?: string
  faqs?: Array<{ q: string; a: string }>
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { ...(data as Omit<BlogPost, 'content' | 'slug'>), slug, content }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''))
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
  
  // Sort posts by date in descending order
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}
