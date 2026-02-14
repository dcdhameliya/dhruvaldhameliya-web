# Claude Skills File - dhruvaldhameliya.com

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

- `/` Home (hero with gradient text, "Open to opportunities" badge, staggered fade-in animations, resume download CTA, social icons)
- `/about` About (short story + focus areas)
- `/how-i-work` How I Work (engineering philosophy, workflow, tools, team values)
- `/projects` Projects index (curated, 8 projects total)
- `/projects/[slug]` Project detail pages (case studies)
- `/blog` Blog index (search/tags optional)
- `/blog/[slug]` Blog post pages (MDX)
- `/resume` Resume page (Key Achievements section + download link + summary)
- `/contact` Contact page (location + emails + socials with icons)

### Navigation

- Home, Projects, Blog, About, How I Work, Resume, Contact
- Dark/Light mode toggle in header (ThemeToggle component with circular reveal animation)
- Responsive mobile menu (MobileNav component)
- Footer: copyright + GitHub/LinkedIn icons + Resume download text link

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
- "Open to opportunities" pulsing green badge at top
- Gradient text on name (blue→purple→pink)
- Staggered fade-in animations (animation-delay-100 through 400)
- Primary CTA: "Download Resume" with download icon
- Secondary CTA: "Get in Touch"
- Social links (LinkedIn, GitHub, Email) with icons in hero

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

- Next.js 16 App Router
- TypeScript strict
- Tailwind CSS v4 (CSS-based config: `@import "tailwindcss"` in `globals.css`)
- MDX for blog (local MDX in repo, compiled via `next-mdx-remote/rsc` with `compileMDX`)

### Dark Mode

- Class-based dark mode: `@custom-variant dark (&:where(.dark, .dark *))`
- Inline script in `layout.tsx` prevents FOUC (defaults to light mode, no system preference fallback)
- localStorage persistence only (no system preference detection)
- ThemeToggle component (client-side) with sun/moon icons + spin animation
- **View Transitions API** circular reveal animation on theme toggle (falls back to smooth `.theme-transition` for older browsers)

### UI Enhancements

- Gradient text hero (`.gradient-text` class with dark mode variant)
- Staggered fade-in animations (`.animate-fade-in-up` with delay classes)
- Sticky header with backdrop blur (`bg-background/80 backdrop-blur-lg`)
- Nav link underline animation (`.nav-link::after` gradient)
- Card hover effects: `shadow-sm`, `hover:shadow-md`, `hover:-translate-y-1`
- Color-coded tech tags: `.tag-android` (green), `.tag-ios` (blue), `.tag-web` (purple), `.tag-backend` (yellow)
- Higher text opacity for readability (bumped from /50→/60, /60→/70, /70→/80, /80→/90)

### Libraries in use

- `next-mdx-remote` for MDX compilation (RSC)
- `rehype-pretty-code` + `shiki` for code syntax highlighting
- `reading-time` for estimated read time
- `zod` for frontmatter validation
- `@tailwindcss/typography` for prose styling
- `firebase` for analytics + visitor tracking (project: `dhruvaldhameliya-web`, measurementId: `G-QEKGKE4W3Y`)

### Avoid

- Heavy UI kits that bloat (HeroUI was tried and reverted)
- Client-side only rendering for blog content
- Overuse of animations
- AWS and Google Cloud references (removed from all skills sections)
- Grade percentages in education ("First-class distinction", "4.0 final term")
- Text labels in footer (icons only, except Resume download link)

---

## 5) File/Folder Structure

```
src/
  app/
    layout.tsx           # Root layout with AnalyticsProvider, inline dark mode script (light default), Header+Footer
    page.tsx             # Home: hero (gradient text, opportunity badge, resume CTA, social icons) + featured projects + latest posts
    globals.css          # Tailwind v4 CSS config + custom animations (fade-in, gradient-text, nav-link, theme-reveal, spin-once, tag colors)
    about/page.tsx
    how-i-work/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    blog/page.tsx
    blog/[slug]/page.tsx
    resume/page.tsx      # Key Achievements section + experience + education + skills
    contact/page.tsx     # Icons: Location, Email, LinkedIn, GitHub (all emails in one section)
    not-found.tsx
    sitemap.ts
    robots.ts
  components/
    Header.tsx           # Sticky nav + backdrop blur + ThemeToggle + MobileNav + nav-link underline animation
    MobileNav.tsx        # Client component for hamburger menu
    ThemeToggle.tsx      # Client component: localStorage, View Transitions API circular reveal, spin animation
    Footer.tsx           # Copyright + GitHub/LinkedIn icons + Resume download text link
    AnalyticsProvider.tsx # Client component for Firebase init + first-visit visitor tracking
    TrackedLink.tsx      # Analytics-tracked <a> wrapper
    Container.tsx
    Prose.tsx
    ProjectCard.tsx      # Platform icons + color-coded tech tags + hover lift + shadow
    PostCard.tsx         # Blue-tinted tags + hover lift + shadow
    mdx-components.tsx
  content/
    blog/*.mdx           # 10 blog posts (Android/mobile engineering topics)
    projects/*.mdx       # 8 projects: CodeView, YdPlayer, BuzzExpress, Diamonds on Call,
                         #            TES, Sober Love, Green Clippings, Khaliques SA
  lib/
    content.ts           # Zod schemas + MDX loaders (compileMDX) + reading-time
    seo.ts               # Canonical URLs, JSON-LD generators (Article, Person)
    utils.ts             # formatDate, cn (class merger)
    firebase.ts          # Firebase init (NO env gating, checks config presence)
    analytics.ts         # Event helpers (trackOutboundClick, trackContactClick, trackResumeDownload, trackVisitorDetails)
public/
  images/
    favicon.webp         # Main favicon (default favicon.ico removed)
  dhruval_resume.pdf     # Resume PDF for download
ecosystem.config.js      # PM2 deployment config (port 3000, Firebase env vars)
.env.production.local    # Firebase config (committed, highest priority in Next.js env loading)
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
- `.env.production.local` committed to repo (contains Firebase config, baked into JS bundle at build time)

---

## 9) Analytics / Tracking (Firebase project: `dhruvaldhameliya-web`)

### Firebase Analytics

- Firebase Analytics via `firebase` SDK (client-side only)
- `AnalyticsProvider` component in layout.tsx initializes on mount
- `TrackedLink` component wraps `<a>` with event tracking
- Events tracked: `page_view` (automatic), `outbound_click`, `contact_click`, `resume_download`, `visitor_details`
- **NO env gating** - checks for Firebase config presence instead (firebaseConfig.apiKey)
- Config lives in `.env.production.local` (highest priority, committed to repo)
- measurementId: `G-QEKGKE4W3Y`
- Key files: `src/lib/firebase.ts`, `src/lib/analytics.ts`, `src/components/AnalyticsProvider.tsx`,
  `src/components/TrackedLink.tsx`

### Visitor Tracking (first visit)

- On first visit, collects: IP address (via `api.ipify.org`), user agent, platform, language, screen resolution, viewport size, timezone, referrer
- Logged as `visitor_details` custom event with all fields as event parameters
- Uses `localStorage` flag (`visitor_tracked`) to fire only once per browser
- Triggered automatically by `AnalyticsProvider` after Firebase init

### BigQuery Export

- Firebase Analytics linked to **Google BigQuery** for event exploration
- Daily export (free tier) - events appear in BigQuery ~24 hours after collection
- BigQuery dataset: `analytics_XXXXXXX` in project `dhruvaldhameliya-web`
- Tables: `events_YYYYMMDD` (one per day)
- All custom events (`visitor_details`, `outbound_click`, etc.) automatically exported
- Query via [console.cloud.google.com/bigquery](https://console.cloud.google.com/bigquery)

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

## 12) User Details & Content

### Personal Info
- **Name**: Dhruval Dhameliya
- **Location**: Santa Clara, CA (Bay Area)
- **Emails**: hello@dhruvaldhameliya.com, work@dhruvaldhameliya.com, dhruvalcd@gmail.com
- **Social**: GitHub (dcdhameliya), LinkedIn (dcdhameliya)

### Experience (chronological order: Meta → NJIT → KG Krunch)
1. **Meta** (Mar 2025 - Present) - Software Engineer, Android
   - Instagram Monetization Client Platform
   - **Owns experimentation logic for Reels** (NOT monetization delivery)
2. **NJIT TA** (Jan 2023 - May 2024) - CS 338 Android Development with Dr. Baruch Schieber
3. **KG Krunch Solutions** (Dec 2019 - Jun 2022) - Senior Mobile Developer (7 detailed bullets)

### Education
- M.S. Computer Science - NJIT (GPA 3.4)
- B.E. Computer Engineering - SSASIT/GTU (CGPA 8.34)
- Diploma Computer Engineering - Tapi/GTU (CGPA 9.42)

### Skills Order (ALWAYS: Android-first, iOS-second, React-third)
- Languages: Kotlin, Java, Swift, TypeScript, JavaScript, Python
- Mobile: Android (Jetpack Compose, MVVM), iOS (SwiftUI, Combine)
- Web & Backend: React, React Native, Next.js, Node.js, Express
- Tools: Git, Firebase, Docker, CI/CD

### Projects (8 total)
**Featured** (home page):
1. CodeView - Android Library (GitHub)
2. YdPlayer - Video Player Library (GitHub)

**iOS** (Apple icon):
- Diamonds on Call, TES, Sober Love, Green Clippings, Khaliques SA

**Android** (Android icon):
- BuzzExpress, CodeView, YdPlayer

### Blog (10 posts)
1. How I Approach System Design as a Mobile App Engineer (2025-12-15)
2. Lessons From Building Android Features Used at Scale (2025-11-28)
3. My Principles for Writing Maintainable Android Code (2025-11-10)
4. Jetpack Compose Architecture Patterns That Scale (2025-10-22)
5. Common Android Architecture Mistakes (and How I Avoid Them) (2025-10-05)
6. State Management in Jetpack Compose: What Works in Practice (2025-09-15)
7. Handling App Complexity Without Over-Engineering (2025-09-01)
8. From Feature Request to Production: How I Think End-to-End (2025-08-18)
9. What I Focus On When Performance Actually Matters in Android Apps (2025-08-01)
10. How I Think About Performance Bottlenecks in Android (2025-07-15)

---

## 13) Important Patterns (NEVER violate)

### Never Add These Back
- ❌ AWS, Google Cloud in skills
- ❌ "Built with Next.js" in footer
- ❌ Grade percentages in education ("First-class distinction", "4.0 final term")
- ❌ Three separate "Email" sections (must be one section with all emails)
- ❌ Text labels in footer for socials (icons only, Resume link is exception)
- ❌ Env gating for Firebase (check config presence instead)
- ❌ System preference fallback for dark mode (light mode default only)
- ❌ HeroUI or similar heavy UI kits (tried and reverted)

### Always Include
- ✅ Platform icons on project cards (Android/iOS based on tech stack)
- ✅ Icons on contact page: Location (map pin), Email (envelope), LinkedIn, GitHub
- ✅ Footer icons: GitHub, LinkedIn (no text) + Resume download text link
- ✅ Skills ordered: Android → iOS → React (in all 4 sections)
- ✅ Experience ordered: Meta → NJIT → KG Krunch
- ✅ Meta role: "owns experimentation" (NOT monetization delivery)
- ✅ All three emails in ONE "Email" section with `ml-6` indentation
- ✅ Dark mode toggle in header with circular reveal animation
- ✅ Favicon at `/images/favicon.webp` (no `src/app/favicon.ico`)
- ✅ Resume PDF at `/dhruval_resume.pdf`
- ✅ "Open to opportunities" badge on home page
- ✅ Key Achievements section on resume page

---

## 14) Current Status

✅ **Production-ready** - All features implemented, build passing (29 static pages)
- Next.js 16 + Tailwind v4 + TypeScript + MDX
- Firebase Analytics working (no env gating) + BigQuery export linked
- Visitor tracking on first visit (IP, device, timezone, referrer)
- Dark/Light mode with localStorage (light default, circular reveal animation)
- Recruiter-friendly: opportunity badge, one-click resume download, social icons in hero, Key Achievements
- 8 projects with platform icons + color-coded tech tags
- 10 blog posts (Android/mobile engineering topics)
- Contact page with location + 3 emails + social icons
- Footer with GitHub/LinkedIn icons + Resume download link
- All SEO metadata, sitemap, robots.txt
- PM2 ecosystem config for deployment
- `.env.production.local` committed for build-time Firebase config

---
