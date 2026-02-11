import Link from "next/link";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { ProjectCard } from "@/components/ProjectCard";
import { getAllPosts, getAllProjects } from "@/lib/content";
import { generatePersonJsonLd } from "@/lib/seo";

export default async function HomePage() {
  const [posts, projects] = await Promise.all([
    getAllPosts(),
    getAllProjects(),
  ]);

  const featuredProjects = projects.filter((p) => p.frontmatter.featured);
  const latestPosts = posts.slice(0, 3);

  return (
    <Container>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonJsonLd()),
        }}
      />

      {/* Hero */}
      <section className="py-16 sm:py-20">
        {/* Availability badge */}
        <div className="animate-fade-in-up mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities
          </span>
        </div>

        <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="gradient-text">Dhruval Dhameliya</span>
        </h1>
        <p className="animate-fade-in-up animation-delay-200 mt-3 text-lg font-medium text-foreground/70 sm:text-xl">
          Software Engineer, Android @ Meta (Instagram)
        </p>
        <p className="animate-fade-in-up animation-delay-200 mt-5 max-w-xl text-lg text-foreground/80 leading-relaxed">
          Owning experimentation on Instagram Reels monetization. I write
          about mobile engineering, system design, and lessons learned
          shipping at scale.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up animation-delay-300 mt-8 flex flex-wrap items-center gap-4">
          <a
            href="/dhruval_resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-foreground/90 hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Resume
          </a>
          <Link
            href="/contact"
            className="rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-all hover:bg-foreground/5 hover:border-foreground/40 hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>

        {/* Social links */}
        <div className="animate-fade-in-up animation-delay-400 mt-6 flex items-center gap-4">
          <a
            href="https://linkedin.com/in/dcdhameliya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/60 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <span className="text-foreground/20">|</span>
          <a
            href="https://github.com/dcdhameliya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/60 transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <span className="text-foreground/20">|</span>
          <a
            href="mailto:hello@dhruvaldhameliya.com"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Email
          </a>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-12 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-sm text-foreground/70 hover:text-foreground"
            >
              View all
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Latest Posts */}
      {latestPosts.length > 0 && (
        <section className="py-12 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Latest Posts
            </h2>
            <Link
              href="/blog"
              className="text-sm text-foreground/70 hover:text-foreground"
            >
              View all
            </Link>
          </div>
          <div className="mt-6 space-y-8">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
