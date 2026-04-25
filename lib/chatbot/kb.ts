import fs from 'fs';
import path from 'path';
import Fuse from 'fuse.js';

interface Chunk {
  text: string;
  source: string;
}

let fuseCache: Fuse<Chunk> | null = null;

function chunkMarkdown(content: string, source: string): Chunk[] {
  const sections = content.split(/\n(?=##+ )/).filter(Boolean);
  return sections
    .map((section) => ({ text: section.trim(), source }))
    .filter((chunk) => chunk.text.length >= 30);
}

function loadKB(): Fuse<Chunk> {
  if (fuseCache) return fuseCache;

  const kbDir = path.join(process.cwd(), 'kb');
  const files = fs.readdirSync(kbDir).filter((f) => f.endsWith('.md'));

  const chunks: Chunk[] = [];
  for (const file of files) {
    const content = fs.readFileSync(path.join(kbDir, file), 'utf-8');
    chunks.push(...chunkMarkdown(content, file.replace('.md', '')));
  }

  fuseCache = new Fuse(chunks, {
    keys: ['text'],
    threshold: 0.4,
    includeScore: true,
    minMatchCharLength: 3,
  });

  return fuseCache;
}

export function searchKB(query: string, topK = 3): Chunk[] {
  const fuse = loadKB();
  const results = fuse.search(query, { limit: topK });
  return results.map((r) => r.item);
}
