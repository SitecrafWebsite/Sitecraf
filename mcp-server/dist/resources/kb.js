import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const KB_DIR = path.resolve(__dirname, "..", "..", "..", "kb");
export function registerKbResources(server) {
    server.resource("services", "sitecraf://services", { description: "Sitecraf services documentation" }, async (uri) => {
        const text = await fs.readFile(path.join(KB_DIR, "services.md"), "utf8");
        return {
            contents: [{ uri: uri.href, mimeType: "text/markdown", text }],
        };
    });
    server.resource("faq", "sitecraf://faq", { description: "Sitecraf FAQ documentation" }, async (uri) => {
        const text = await fs.readFile(path.join(KB_DIR, "faq.md"), "utf8");
        return {
            contents: [{ uri: uri.href, mimeType: "text/markdown", text }],
        };
    });
}
