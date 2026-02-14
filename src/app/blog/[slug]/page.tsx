import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Prose } from "@/components/Prose";
import Link from "next/link";
import { getPostBySlug, getBlogSlugs, getRelatedPosts } from "@/lib/content";
import {
  generateArticleJsonLd,
  generateBreadcrumbJsonLd,
  getCanonicalUrl,
} from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = await getPostBySlug(slug);
    return {
      title: frontmatter.title,
      description: frontmatter.description,
      alternates: { canonical: getCanonicalUrl(`/blog/${slug}`) },
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        type: "article",
        publishedTime: frontmatter.date,
        modifiedTime: frontmatter.updated,
        ...(frontmatter.coverImage && {
          images: [frontmatter.coverImage],
        }),
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { content, frontmatter, readingTime } = post;
  const relatedPosts = await getRelatedPosts(slug, frontmatter.tags);

  return (
    <Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleJsonLd({ ...frontmatter, slug })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: frontmatter.title, url: `/blog/${slug}` },
            ])
          ),
        }}
      />
      <nav className="mb-4 text-sm text-foreground/60">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link
          href="/blog"
          className="hover:text-foreground transition-colors"
        >
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground/80">{frontmatter.title}</span>
      </nav>
      <article>
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {frontmatter.title}
          </h1>
          <p className="mt-3 text-sm text-foreground/70">
            {formatDate(frontmatter.date)}
            <span className="mx-2">&middot;</span>
            {readingTime}
          </p>
          {frontmatter.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-foreground/80 transition-colors hover:bg-blue-50 hover:text-blue-700 dark:bg-neutral-800 dark:hover:bg-blue-500/10 dark:hover:text-blue-300"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </header>
        <Prose>{content}</Prose>
      </article>

      {relatedPosts.length > 0 && (
        <section className="mt-16 border-t border-neutral-200 pt-10 dark:border-neutral-800">
          <h2 className="text-xl font-semibold tracking-tight">
            Related Posts
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group rounded-xl border border-neutral-200 p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700"
              >
                <h3 className="text-sm font-semibold leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {related.frontmatter.title}
                </h3>
                <p className="mt-2 text-xs text-foreground/60">
                  {formatDate(related.frontmatter.date)}
                  <span className="mx-1">&middot;</span>
                  {related.readingTime}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </Container>
  );
}
