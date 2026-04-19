// ─── Navigation ──────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  children?: NavItem[];
}

// ─── Hero ────────────────────────────────────────────────
export interface HeroProps {
  badge?: string;
  headline: string;
  highlightWord?: string;
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  stats?: { value: string; label: string }[];
}

// ─── Services ────────────────────────────────────────────
export type ServiceCategory =
  | 'web-app' | 'saas' | 'ai-integration'
  | 'ecommerce' | 'chatbot' | 'design-system'
  | 'mobile' | 'devops';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: ServiceCategory;
  features: string[];
  deliverables?: string[];
  timeline?: string;
  startingPrice?: string;
  icon: string;
  isHighlighted?: boolean;
  isFeatured?: boolean;
}

// ─── Process Steps ───────────────────────────────────────
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
  icon: string;
}

// ─── Case Studies ────────────────────────────────────────
export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string; trend: 'up' | 'down' }[];
  tags: string[];
  duration: string;
  isFeatured?: boolean;
}

// ─── Comparison ──────────────────────────────────────────
export interface ComparisonRow {
  feature: string;
  sitecraf: string | boolean;
  freelancer: string | boolean;
  inHouse: string | boolean;
  largeAgency: string | boolean;
}

// ─── Testimonials ────────────────────────────────────────
export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
  projectType: string;
}

// ─── FAQ ─────────────────────────────────────────────────
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'process' | 'pricing' | 'tech' | 'support';
}

// ─── Newsletter ──────────────────────────────────────────
export interface NewsletterFormData {
  email: string;
  firstName?: string;
}
export type NewsletterStatus = 'idle' | 'loading' | 'success' | 'error';

// ─── Contact Form ────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  budget: BudgetRange;
  projectType: ServiceCategory;
  timeline: ProjectTimeline;
  message: string;
}
export type BudgetRange =
  | 'under-5L' | '5L-15L' | '15L-50L' | '50L-plus' | 'not-sure';
export type ProjectTimeline =
  | 'asap' | '1-3months' | '3-6months' | '6plus' | 'exploring';
export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// ─── Chat ────────────────────────────────────────────────
export type MessageRole = 'user' | 'assistant' | 'system';
export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}
export type ChatStatus = 'idle' | 'loading' | 'error' | 'streaming';
export interface ChatWidgetState {
  isOpen: boolean;
  messages: ChatMessage[];
  status: ChatStatus;
  inputValue: string;
}

// ─── API ─────────────────────────────────────────────────
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}
export interface ContactApiResponse {
  success: boolean;
  message: string;
  ticketId?: string;
}
export interface NewsletterApiResponse {
  success: boolean;
  message: string;
}
