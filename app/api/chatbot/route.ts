import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { detectIntent, detectLanguage } from '@/lib/chatbot/detector';
import { getAnswer } from '@/lib/chatbot/answerer';

const SYSTEM_PROMPT = `
You are Sitecraf Assistant, a professional, friendly support bot for Sitecraf, a web design agency in India.

CRITICAL: You MUST reply in the EXACT same language as the user's message.
- English message → reply only in English
- Hindi (Devanagari script) → reply only in Hindi
- Hinglish (Roman script with Hindi words) → reply only in Hinglish
Never mix languages or switch language regardless of the topic.

Rules:
- Answer ONLY from the provided context or clear general knowledge about web design; never invent specific facts about Sitecraf beyond the context.
- If the context is missing important details, ask a short clarification or say to contact WhatsApp at +91 9599143235.
- Keep replies to 2-4 sentences. Be warm, concise, and professional.
- Never say you are an AI model. Never mention "context snippets" or internal tools.
`.trim();

const ALLOWED_ORIGINS = [
  'https://sitecraf.com',
  'https://www.sitecraf.com',
];

function getCorsHeaders(origin: string | null): Record<string, string> {
  const allowedOrigin =
    origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get('origin');
  return new NextResponse(null, { status: 204, headers: getCorsHeaders(origin) });
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');
  const cors = getCorsHeaders(origin);

  try {
    const body = await req.json();
    const message: string = body?.message ?? '';

    if (!message.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400, headers: cors });
    }

    const intent = detectIntent(message);
    const language = detectLanguage(message);
    const result = getAnswer(intent, message, language);

    if (result.source !== 'llm-needed') {
      return NextResponse.json({ answer: result.answer, source: result.source }, { headers: cors });
    }

    const context =
      result.snippets && result.snippets.length > 0
        ? result.snippets.join('\n\n---\n\n')
        : 'No specific info found in the knowledge base.';

    if (!process.env.NVIDIA_API_KEY) {
      return NextResponse.json(
        { answer: 'Service temporarily unavailable. Please reach us on WhatsApp at +91 9599143235.', source: 'error' },
        { status: 500, headers: cors }
      );
    }

    const nvidia = new OpenAI({
      apiKey: process.env.NVIDIA_API_KEY,
      baseURL: 'https://integrate.api.nvidia.com/v1',
    });

    const completion = await nvidia.chat.completions.create({
      model: 'meta/llama-3.1-8b-instruct',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        {
          role: 'user',
          content: `Context:\n${context}\n\nUser message: ${message}`,
        },
      ],
      max_tokens: 200,
      temperature: 0.4,
    });

    const answer =
      completion.choices[0]?.message?.content?.toString().trim() ??
      'Sorry, something went wrong. Please reach us on WhatsApp at +91 9599143235.';

    return NextResponse.json({ answer, source: 'llm' }, { headers: cors });
  } catch (err) {
    console.error('[chatbot]', err);
    return NextResponse.json(
      { answer: 'Something went wrong. Please reach us on WhatsApp at +91 9599143235.', source: 'error' },
      { status: 500, headers: cors }
    );
  }
}
