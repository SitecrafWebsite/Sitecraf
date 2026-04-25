import { GoogleGenAI } from '@google/genai';

const SYSTEM_PROMPT = `You are the AI assistant for Sitecraf, a web development agency based in South Extension Part-2, New Delhi, India.

About Sitecraf:
- Services: WordPress development, Wix Studio, Shopify, Next.js development, AI Chatbot integration, SEO, Business Automation
- Speciality: Website development and migrations (Shopify to Wix Studio, etc.)
- Contact: WhatsApp +919599143235 | Email: info@sitecraf.com
- Location: New Delhi, India

Guidelines:
- Be concise, friendly, and professional
- Answer questions about web development, services, pricing, and timelines
- For project inquiries or sales questions, encourage the user to reach out via WhatsApp or the contact form
- Do not make up specific pricing — suggest contacting Sitecraf for custom quotes
- Keep responses brief and helpful`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (!process.env.GEMINI_API_KEY) {
    return new Response(JSON.stringify({ error: 'GEMINI_API_KEY not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  const history = messages
    .slice(0, -1)
    .filter((m: { role: string }) => m.role === 'user' || m.role === 'assistant')
    .map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

  const lastMessage = messages.at(-1);

  const contents = [
    ...history,
    { role: 'user', parts: [{ text: lastMessage.content }] },
  ];

  const response = await ai.models.generateContentStream({
    model: 'gemini-2.0-flash',
    contents,
    config: { systemInstruction: SYSTEM_PROMPT },
  });

  const stream = new ReadableStream({
    async start(controller) {
      const enc = new TextEncoder();
      try {
        for await (const chunk of response) {
          const text = chunk.text;
          if (text) {
            controller.enqueue(enc.encode(text));
          }
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
