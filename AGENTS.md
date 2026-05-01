<claude-mem-context>
# Memory Context

# [Sitecraf] recent context, 2026-05-01 1:20am GMT+5:30

Legend: 🎯session 🔴bugfix 🟣feature 🔄refactor ✅change 🔵discovery ⚖️decision 🚨security_alert 🔐security_note
Format: ID TIME TYPE TITLE
Fetch details: get_observations([IDs]) | Search: mem-search skill

Stats: 31 obs (10,213t read) | 294,665t work | 97% savings

### Apr 30, 2026
1 11:37p 🟣 Rate Limiting Added to Chatbot API
2 " 🔵 Sitecraf Chatbot Route Pre-Modification State
3 11:39p ✅ Implementation Plan Saved for Chatbot Rate Limiting
4 " 🟣 lib/rateLimit.ts Created in Sitecraf Project
5 " 🔵 Second Chat Route Exists: app/api/chat/route.ts
6 11:40p 🔴 app/api/chatbot/route.ts Updated with Rate Limit, Safe JSON Parse, Length Guard
7 11:45p ✅ next.config.ts: Security Headers + Disable Source Maps
8 11:46p 🔵 next.config.ts Pre-Change Baseline State
S4 Add metadataBase to metadata export in app/layout.tsx for Sitecraf Next.js project (Apr 30, 11:46 PM)
9 11:51p 🔵 app/layout.tsx Metadata Structure — Pre-Change State
S5 Sitecraf Next.js project: security hardening, metadata fixes, privacy page migration, and footer link updates (Apr 30, 11:51 PM)
### May 1, 2026
10 12:02a 🔵 app/privacy-policy/page.tsx — Full Content Discovered
11 " 🔵 app/privacy/page.tsx Is Stub — Needs Full Content from privacy-policy
12 " 🟣 app/privacy/page.tsx Replaced with Full Legal Content
S6 Fix prompt injection vulnerability in app/api/chatbot/route.ts — 4 targeted security changes (May 1, 12:03 AM)
13 12:18a 🔐 Prompt Injection Protection Added to Chatbot Route
14 12:19a 🔵 Chatbot Route Pre-Patch State Confirmed
15 " 🔐 sanitizeMessage Function and Hardened SYSTEM_PROMPT Applied
16 " 🔵 Separate app/api/chat/route.ts References Chatbot Endpoint
17 " 🔴 All Four Prompt Injection Patches Applied to Chatbot Route
S7 Migrate Sitecraf contact form from direct client-side FormSubmit to a secure server-side Next.js API route (May 1, 12:21 AM)
18 12:29a 🟣 Contact Form API Route with Rate Limiting, Sanitization, and Honeypot
19 " 🔵 Contact.tsx Still Submits Directly to FormSubmit with Hardcoded Email
20 " 🟣 Contact Form API Route with Rate Limiting, Sanitization, and Honeypot
21 12:36a 🔵 Contact.tsx Still Calls FormSubmit Directly from Client — Not Yet Migrated to API Route
22 " 🟣 Contact.tsx Migrated to POST JSON to /api/contact
S8 Chatbot LLM route migration: proxy to Render backend instead of NVIDIA direct call (May 1, 12:38 AM)
23 12:47a ⚖️ Chatbot LLM Calls Migrated from Direct NVIDIA API to Render Backend Proxy
24 " 🔵 Sitecraf Chatbot Route Architecture — Pre-Migration State
S9 Update Contact.tsx to use internal /api/contact route with honeypot spam protection (May 1, 12:48 AM)
25 12:53a 🟣 Contact Form Migrated to Internal API Route
26 " 🔴 Honeypot Input Made Controlled React Component
S10 Update CSP connect-src in next.config.ts: replace NVIDIA API with Render backend URL (May 1, 12:53 AM)
27 1:02a ✅ CSP connect-src Updated: Removed NVIDIA API, Added Render Backend
28 " 🔵 Verification Criteria for CSP connect-src Change
S12 Apply fix to Chatbot.tsx: hardcode relative URL, remove CHATBOT_API_BASE_URL constant and env var reference (May 1, 1:04 AM)
29 1:06a 🔵 Chatbot.tsx Uses Conditional URL — Not Hardcoded Render URL
30 " 🔵 CHATBOT_API_BASE_URL Sourced from NEXT_PUBLIC_CHATBOT_API_BASE_URL Env Var
S11 Audit fetch() calls in Sitecraf to determine if chatbot calls Render directly or via Vercel proxy (May 1, 1:06 AM)
31 1:07a 🔴 Removed CHATBOT_API_BASE_URL Constant from Chatbot.tsx
S13 Fix Chatbot.tsx to always use relative /api/chatbot URL — remove CHATBOT_API_BASE_URL constant and conditional URL logic (May 1, 1:15 AM)
**Investigated**: Chatbot.tsx full structure: CHATBOT_API_BASE_URL constant at lines 7-8, conditional URL block at lines 47-49, fetch call at line 51. File confirmed 222 lines pre-edit, 217 lines post-edit.

**Learned**: Two edits required due to tool retry behavior — both constant removal and URL replacement were applied twice (idempotent). Final confirmed state via Read at line 44: `const url = '/api/chatbot'` with no CHATBOT_API_BASE_URL anywhere in file.

**Completed**: Both edits successfully applied to components/ui/Chatbot.tsx: (1) removed CHATBOT_API_BASE_URL constant (lines 7-8, reading NEXT_PUBLIC_CHATBOT_API_BASE_URL env var); (2) replaced 3-line conditional URL block with `const url = '/api/chatbot'`. File now 217 lines. Chatbot always calls Vercel proxy, never Render directly.

**Next Steps**: User advised to remove NEXT_PUBLIC_CHATBOT_API_BASE_URL from Vercel environment variables dashboard — it is now dead code in the deployment config. No further code changes pending.


Access 295k tokens of past work via get_observations([IDs]) or mem-search skill.
</claude-mem-context>