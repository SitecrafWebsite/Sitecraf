# CLAUDE-SITECRAF.md

Behavioral and project-specific guidelines to reduce LLM coding mistakes in the Sitecraf Next.js project.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Project-Specific Rules
- **Stack:** TypeScript, Next.js 15 (App Router), CSS custom properties + CSS modules.
- **Styling:** Use **Nexus CSS tokens** (`var(...)`) and CSS modules. **DO NOT use TailwindCSS**.
- **Structure:**
  - Components go in `components/` or `components/sections/`.
  - App entry point is `app/`. Do not arbitrarily change `app/page.tsx` section order.
  - Data, logic, and hooks reside in `lib/`, `content/`, `hooks/`, and `types/`.
- **Single Source of Truth:** The GitHub repo is the single source of truth. Edit actual files under this repo. Do not create a separate Next.js project. Make sure things run in the installed Node environment.

## 2. Think Before Coding
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 3. Simplicity First
- **Minimum code that solves the problem. Nothing speculative.**
- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No heavy new runtime dependencies without explicit instruction.

## 4. Surgical Changes
- **Touch only what you must. Clean up only your own mess.**
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- Every changed line should trace directly to the user's request.

## 5. Goal-Driven Execution
- Define success criteria. Loop until verified.
- For structural changes, validate via `npm run lint` and `npm run build`.
