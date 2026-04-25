import { z } from "zod";
import matter from "gray-matter";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.resolve(__dirname, "..", "..", "..", "content", "blog");
function safeSlug(slug) {
    if (/[/\\]|\.\./.test(slug))
        return null;
    return path.join(BLOG_DIR, `${slug}.mdx`);
}
const FrontmatterPatch = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Must be YYYY-MM-DD").optional(),
    author: z.string().optional(),
    category: z.string().optional(),
    readTime: z.string().optional(),
    featured: z.boolean().optional(),
    seoTag: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
});
export function registerBlogTools(server) {
    server.tool("list_blog_posts", "List all blog posts with their frontmatter metadata", {}, async () => {
        const files = (await fs.readdir(BLOG_DIR)).filter((f) => f.endsWith(".mdx"));
        const posts = await Promise.all(files.map(async (f) => {
            const raw = await fs.readFile(path.join(BLOG_DIR, f), "utf8");
            return matter(raw).data;
        }));
        return { content: [{ type: "text", text: JSON.stringify(posts, null, 2) }] };
    });
    server.tool("get_blog_post", "Get the full content and frontmatter of a blog post by slug", { slug: z.string().describe("Post slug — the filename without .mdx") }, async ({ slug }) => {
        const filePath = safeSlug(slug);
        if (!filePath) {
            return { content: [{ type: "text", text: "Invalid slug" }], isError: true };
        }
        try {
            const raw = await fs.readFile(filePath, "utf8");
            const { data, content } = matter(raw);
            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify({ frontmatter: data, content }, null, 2),
                    },
                ],
            };
        }
        catch {
            return {
                content: [{ type: "text", text: `Post "${slug}" not found` }],
                isError: true,
            };
        }
    });
    server.tool("create_blog_post", "Create a new MDX blog post. Fails if a post with the same slug already exists.", {
        slug: z.string().describe("URL-friendly slug, used as the filename"),
        title: z.string(),
        description: z.string(),
        date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Must be YYYY-MM-DD"),
        author: z.string().default("Sitecraf"),
        category: z.string(),
        readTime: z.string().describe('e.g. "5 min read"'),
        featured: z.boolean().default(false),
        seoTag: z.string(),
        image: z.string().describe("Relative image path"),
        tags: z.array(z.string()),
        ogTitle: z.string(),
        ogDescription: z.string(),
        content: z.string().describe("MDX body content (after the frontmatter)"),
    }, async ({ slug, content, ...frontmatter }) => {
        const filePath = safeSlug(slug);
        if (!filePath) {
            return { content: [{ type: "text", text: "Invalid slug" }], isError: true };
        }
        try {
            await fs.access(filePath);
            return {
                content: [{ type: "text", text: `Post "${slug}" already exists` }],
                isError: true,
            };
        }
        catch {
            // file does not exist — proceed
        }
        const mdx = matter.stringify(content, { slug, ...frontmatter });
        await fs.writeFile(filePath, mdx, "utf8");
        return { content: [{ type: "text", text: `Created ${slug}.mdx` }] };
    });
    server.tool("update_blog_post", "Update frontmatter and/or body of an existing blog post", {
        slug: z.string().describe("Slug of the post to update"),
        frontmatter: FrontmatterPatch.optional().describe("Frontmatter fields to patch (partial — omitted fields are preserved)"),
        content: z
            .string()
            .optional()
            .describe("New body content — replaces existing body if provided"),
    }, async ({ slug, frontmatter: patch, content: newBody }) => {
        const filePath = safeSlug(slug);
        if (!filePath) {
            return { content: [{ type: "text", text: "Invalid slug" }], isError: true };
        }
        let raw;
        try {
            raw = await fs.readFile(filePath, "utf8");
        }
        catch {
            return {
                content: [{ type: "text", text: `Post "${slug}" not found` }],
                isError: true,
            };
        }
        const { data, content: existingBody } = matter(raw);
        const merged = { ...data, ...(patch ?? {}) };
        const body = newBody ?? existingBody;
        await fs.writeFile(filePath, matter.stringify(body, merged), "utf8");
        return { content: [{ type: "text", text: `Updated ${slug}.mdx` }] };
    });
}
