import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerBlogTools } from "./tools/blog.js";
import { registerKbResources } from "./resources/kb.js";

const server = new McpServer({ name: "sitecraf", version: "1.0.0" });

registerBlogTools(server);
registerKbResources(server);

const transport = new StdioServerTransport();
await server.connect(transport);
