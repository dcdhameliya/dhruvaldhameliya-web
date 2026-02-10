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
      <section className="py-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Dhruval Dhameliya
        </h1>
        <p className="mt-2 text-lg font-medium text-foreground/60">
          Software Engineer, Android @ Meta (Instagram)
        </p>
        <p className="mt-4 max-w-xl text-lg text-foreground/70 leading-relaxed">
          Owning experimentation on Instagram Reels monetization. I write
          about mobile engineering, system design, and lessons learned
          shipping at scale.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            View Projects
          </Link>
          <Link
            href="/blog"
            className="rounded-lg border border-foreground/20 px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            Read Blog
          </Link>
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
              className="text-sm text-foreground/60 hover:text-foreground"
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
              className="text-sm text-foreground/60 hover:text-foreground"
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
