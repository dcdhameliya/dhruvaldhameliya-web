import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Prose } from "@/components/Prose";
import { getPostBySlug, getBlogSlugs } from "@/lib/content";
import { generateArticleJsonLd, getCanonicalUrl } from "@/lib/seo";
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
      <article>
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {frontmatter.title}
          </h1>
          <p className="mt-3 text-sm text-foreground/60">
            {formatDate(frontmatter.date)}
            <span className="mx-2">&middot;</span>
            {readingTime}
          </p>
          {frontmatter.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-foreground/70 dark:bg-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <Prose>{content}</Prose>
      </article>
    </Container>
  );
}
