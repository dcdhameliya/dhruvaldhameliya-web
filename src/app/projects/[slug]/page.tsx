import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Prose } from "@/components/Prose";
import { getProjectBySlug, getProjectSlugs } from "@/lib/content";
import { getCanonicalUrl } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = await getProjectBySlug(slug);
    return {
      title: frontmatter.title,
      description: frontmatter.description,
      alternates: { canonical: getCanonicalUrl(`/projects/${slug}`) },
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        ...(frontmatter.coverImage && {
          images: [frontmatter.coverImage],
        }),
      },
    };
  } catch {
    return {};
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  let project;
  try {
    project = await getProjectBySlug(slug);
  } catch {
    notFound();
  }

  const { content, frontmatter } = project;

  return (
    <Container>
      <article>
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {frontmatter.title}
          </h1>
          <p className="mt-2 text-foreground/60">{frontmatter.description}</p>
          {frontmatter.tech.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {frontmatter.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-foreground/70 dark:bg-neutral-800"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
          <div className="mt-4 flex gap-4">
            {frontmatter.liveUrl && (
              <a
                href={frontmatter.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline dark:text-blue-400"
              >
                Live Demo
              </a>
            )}
            {frontmatter.repoUrl && (
              <a
                href={frontmatter.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline dark:text-blue-400"
              >
                Source Code
              </a>
            )}
          </div>
        </header>
        <Prose>{content}</Prose>
      </article>
    </Container>
  );
}
