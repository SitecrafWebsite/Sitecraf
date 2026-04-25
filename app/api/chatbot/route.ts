import { getAnswer } from '@/lib/chatbot/answerer';

const NVIDIA_BASE = 'https://integrate.api.nvidia.com/v1';

const SYSTEM_PROMPT = `You are the AI assistant for Sitecraf, a web development agency based in South Extension Part-2, New Delhi, India.

About Sitecraf:
- Services: WordPress development, Wix Studio, Shopify, Next.js development, AI Chatbot integration, SEO, Business Automation
- Contact: WhatsApp +919599143235 | Email: info@sitecraf.com

Guidelines:
- Be concise, friendly, and professional
- For project inquiries or pricing, encourage WhatsApp or contact form
- Do not make up specific pricing — suggest contacting Sitecraf for custom quotes`;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const lastMessage = messages.at(-1);
  const userText: string = lastMessage?.content ?? '';

  const { answer, source } = getAnswer(userText);

  if (source === 'canned' || source === 'kb') {
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(new TextEncoder().encode(answer));
        controller.close();
      },
    });
    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  if (!process.env.NVIDIA_API_KEY) {
    return new Response(JSON.stringify({ error: 'NVIDIA_API_KEY not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const history = messages
    .filter((m: { role: string }) => m.role === 'user' || m.role === 'assistant')
    .map((m: { role: string; content: string }) => ({
      role: m.role,
      content: m.content,
    }));

  const nvidiaRes = await fetch(`${NVIDIA_BASE}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NVIDIA_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'mistralai/mistral-small-4-119b',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...history],
      stream: true,
    }),
  });

  if (!nvidiaRes.ok || !nvidiaRes.body) {
    return new Response(JSON.stringify({ error: 'NVIDIA API error' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const stream = new ReadableStream({
    async start(controller) {
      const reader = nvidiaRes.body!.getReader();
      const dec = new TextDecoder();
      const enc = new TextEncoder();

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const raw = dec.decode(value);
          for (const line of raw.split('\n')) {
            const trimmed = line.trim();
            if (!trimmed.startsWith('data:')) continue;
            const payload = trimmed.slice(5).trim();
            if (payload === '[DONE]') break;

            try {
              const parsed = JSON.parse(payload);
              const delta = parsed?.choices?.[0]?.delta?.content;
              if (delta) controller.enqueue(enc.encode(delta));
            } catch {
              // skip malformed SSE lines
            }
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
