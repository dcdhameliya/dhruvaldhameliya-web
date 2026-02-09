# Claude Skills File — dhruvaldhameliya.com

> Project: Personal website + blog for Dhruval Dhameliya
> Stack: Next.js (App Router) + TypeScript + Tailwind + MDX
> Hosting: VPS (CloudPanel) behind Nginx reverse proxy
> Goals: clean UX, strong SEO, fast performance, easy blogging workflow

---

## 0) Identity & Scope

### Site identity (dhruvaldhameliya.com)

- This is **Dhruval's professional personal brand** site.
- Tone: **polished, clear, recruiter-friendly**.
- Content: **finalized** posts + curated projects (no WIP dumps).
- Experiments, tools, raw notes go to **dcdhameliya.com** (not here).

### Primary audiences

- Recruiters / hiring managers
- Engineers reading blog
- Networking (LinkedIn traffic)

### Non-goals

- No heavy dashboard product
- No random lab experiments
- No duplicated content from other domain

---

## 1) Required Pages & IA

### Routes

- `/` Home (hero, highlights, featured projects, latest posts)
- `/about` About (short story + focus areas)
- `/how-i-work` How I Work (engineering philosophy, workflow, tools, team values)
- `/projects` Projects index (curated)
- `/projects/[slug]` Project detail pages (case studies)
- `/blog` Blog index (search/tags optional)
- `/blog/[slug]` Blog post pages (MDX)
- `/resume` Resume page (download link + summary)
- `/contact` Contact page (email + socials)

### Navigation

- Home, Projects, Blog, About, How I Work, Resume, Contact
- Footer: copyright, socials.

---

## 2) SEO Requirements (must-have)

### Golden rule (non-negotiable)

**Search engines must receive fully rendered HTML at request time or build time.**
If the page is only rendered client-side (JS shell + `useEffect`), SEO is unreliable and slower.

### Global

- Proper `<title>`/description per page
- Canonical URLs
- Open Graph + Twitter cards
- `robots.txt`
- `sitemap.xml`
- Article JSON-LD for blog posts
- Clean slugs, no query-string permalinks
- Performance: LCP < 2.5s (best effort), avoid heavy client JS

### Blog post metadata fields (frontmatter)

- `title`
- `description`
- `date` (ISO)
- `updated` (optional)
- `tags` (string[])
- `coverImage` (optional)
- `draft` (boolean, default false)

---

## 3) Content Rules (branding consistency)

### Home page copy style

- Simple, confident, not hypey
- Show impact via outcomes, not buzzwords

### Project case study template

- Problem
- Role & constraints
- Approach (architecture, trade-offs)
- Result / impact (metrics if possible)
- What I'd improve

### Blog style

- Structured headings
- Include "Key takeaways"
- Keep intros short
- Use diagrams/snippets when helpful

### How I Work page

- Engineering philosophy (principles)
- Workflow (understand → design → build → review)
- Tools & stack overview
- Team values / what I look for in teams

---

## 4) Tech Stack Decisions (locked)

### Core

- Next.js App Router
- TypeScript strict
- Tailwind CSS (v4, CSS-based config)
- MDX for blog (local MDX in repo, compiled via `next-mdx-remote/rsc`)

### Libraries in use

- `next-mdx-remote` for MDX compilation (RSC)
- `rehype-pretty-code` + `shiki` for code syntax highlighting
- `reading-time` for estimated read time
- `zod` for frontmatter validation
- `@tailwindcss/typography` for prose styling
- `firebase` for analytics (project: `dhruvaldhameliya-web`)

### Avoid

- Heavy UI kits that bloat (unless truly needed)
- Client-side only rendering for blog content
- Overuse of animations

---

## 5) File/Folder Structure

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    about/page.tsx
    how-i-work/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    blog/page.tsx
    blog/[slug]/page.tsx
    resume/page.tsx
    contact/page.tsx
    not-found.tsx
    sitemap.ts
    robots.ts
  components/
    Header.tsx
    MobileNav.tsx        # client component for hamburger menu
    Footer.tsx
    Container.tsx
    Prose.tsx
    ProjectCard.tsx
    PostCard.tsx
    mdx-components.tsx
  content/
    blog/*.mdx
    projects/*.mdx
  lib/
    content.ts           # Zod schemas + MDX loaders (compileMDX)
    seo.ts               # canonical URLs, JSON-LD generators
    utils.ts             # formatDate, cn
    firebase.ts          # Firebase init + analytics (production-only)
    analytics.ts         # Event helpers (outbound_click, contact_click, resume_download)
public/
  images/
ecosystem.config.js      # PM2 deployment config
```

---

## 6) Rendering Strategy (SEO-safe)

### Blog pages

- Prefer **SSG/ISR** for speed.
- Use `generateStaticParams()` for slugs.

### SSR allowed when needed

- Use SSR for truly dynamic content
- Still ensure the response contains full HTML

### Never do

- Fetch post content only in `useEffect`
- Render empty shell then hydrate content

---

## 7) Performance Rules

- Use `next/image` for images
- Prefer system font stack (no external font loading)
- Keep bundle lean; avoid unnecessary client components
- Use server components by default; mark client components only when required

---

## 8) Deployment (VPS + CloudPanel)

### Runtime

- Node.js 20 LTS
- Build: `npm run build`
- Run: `npm run start` on port `3000` (or configurable)
- Reverse proxy: CloudPanel/Nginx → `127.0.0.1:3000`
- SSL: Let's Encrypt in CloudPanel
- Process manager: PM2 (`ecosystem.config.js`)
- Next.js output: `standalone`

---

## 9) Analytics / Tracking (Firebase project: `dhruvaldhameliya-web`)

- Firebase Analytics via `firebase` SDK (client-side only)
- `AnalyticsProvider` component in layout.tsx initializes on mount
- `TrackedLink` component wraps `<a>` with event tracking
- Events tracked: `page_view` (automatic), `outbound_click`, `contact_click`, `resume_download`
- Production-only: gated by `NEXT_PUBLIC_ENV=production` in `src/lib/firebase.ts`
- Config lives in `.env.local` (gitignored), template in `.env.example`
- Key files: `src/lib/firebase.ts`, `src/lib/analytics.ts`, `src/components/AnalyticsProvider.tsx`,
  `src/components/TrackedLink.tsx`

---

## 10) Claude Working Style (how to act)

When asked to implement or modify:

1. Propose the smallest clean change first.
2. Prefer server components.
3. Keep UI minimal and modern.
4. Maintain SEO + accessibility.
5. Don't introduce new dependencies unless clearly beneficial.
6. Write code that runs without manual "fix later" steps.

---

## 11) "Definition of Done" for features

A feature is done when:

- Route works
- Lint/typecheck passes
- SEO metadata exists
- Mobile layout looks good
- Lighthouse/perf not obviously degraded
- No client-only rendering for core content (HTML is rendered at request/build time)

---

## 12) Starter Content Suggestions (first 3 posts)

- "How I approach system design as a mobile engineer"
- "Jetpack Compose architecture patterns that scale"
- "Building a monetization system: lessons & tradeoffs"

---
