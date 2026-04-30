# Sitecraf — Claude Context

## Stack
Next.js 15, TypeScript, Tailwind CSS, Vercel (deploy), NVIDIA LLM API

## Key Files
- Chatbot API: app/api/chatbot/route.ts
- Contact Form: components/sections/Contact.tsx  
- Config: next.config.ts
- Deps: package.json

## Security Fix Queue (VulnSensei Audit)
- [ ] Rate limiting → app/api/chatbot/route.ts
- [ ] Security headers → next.config.ts
- [ ] Prompt injection sanitization → app/api/chatbot/route.ts
- [ ] Contact form → move to /api/contact + honeypot
- [ ] Remove firebase-tools → package.json
- [ ] Source maps off → next.config.ts
- [ ] robots.ts → disallow /api/*
- [ ] Delete /privacy-policy & /terms-of-service routes

## Commands
npm run dev | npm run build | npm run lint