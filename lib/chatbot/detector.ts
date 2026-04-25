export type Intent =
  | 'greeting'
  | 'whatsapp'
  | 'services'
  | 'pricing'
  | 'process'
  | 'contact'
  | 'faq'
  | 'unknown';

const patterns: [Intent, RegExp][] = [
  ['greeting', /^(hi|hello|hey|namaste|hii|helo|namaskar|hy)\b/i],
  ['whatsapp', /whatsapp|direct chat|chat directly/i],
  ['services', /service|website|shopify|wix|design|develop|kya karta|what do you/i],
  ['pricing', /price|pricing|cost|kitna|how much|charges|fees|rate|budget/i],
  ['process', /process|timeline|steps|kaise|how does|how do|workflow|stages/i],
  ['contact', /contact|reach|email|phone|call|number|connect/i],
  ['faq', /seo|mobile|revision|support|refund|guarantee|hosting/i],
];

export function detectIntent(message: string): Intent {
  for (const [intent, pattern] of patterns) {
    if (pattern.test(message)) return intent;
  }
  return 'unknown';
}
