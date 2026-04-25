import { detectIntent } from './detector';
import { searchKB } from './kb';

const cannedReplies: Record<string, string> = {
  greeting:
    "Hello! 👋 Welcome to Sitecraf. We build fast, modern websites using WordPress, Wix Studio, Shopify, and Next.js. How can I help you today?",
  whatsapp:
    "Sure! Chat with us on WhatsApp: +91 9599143235. We typically reply within a few minutes during business hours.",
  contact:
    "Reach Sitecraf on WhatsApp at +91 9599143235 or email info@sitecraf.com. We're based in South Extension Part-2, New Delhi, India.",
};

export type AnswerResult = {
  answer: string;
  source: 'canned' | 'kb' | 'llm_needed';
  snippets?: string[];
};

export function getAnswer(message: string): AnswerResult {
  const intent = detectIntent(message);

  if (cannedReplies[intent]) {
    return { answer: cannedReplies[intent], source: 'canned' };
  }

  const chunks = searchKB(message, 3);
  if (chunks.length > 0) {
    return {
      answer: chunks.map((c) => c.text).join('\n\n'),
      source: 'kb',
      snippets: chunks.map((c) => c.source),
    };
  }

  return { answer: '', source: 'llm_needed' };
}
