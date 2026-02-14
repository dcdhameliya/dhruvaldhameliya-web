import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { getAllTags, getPostsByTag } from "@/lib/content";
import { getCanonicalUrl } from "@/lib/seo";

type Props = {
  params: Promise<{ tag: string }>;
};

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  return {
    title: `Posts tagged "${decoded}"`,
    description: `All blog posts tagged with "${decoded}" by Dhruval Dhameliya.`,
    alternates: { canonical: getCanonicalUrl(`/blog/tag/${tag}`) },
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const posts = await getPostsByTag(decoded);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <Container>
      <div className="flex items-center gap-3">
        <Link
          href="/blog"
          className="text-sm text-foreground/60 hover:text-foreground transition-colors"
        >
          &larr; All posts
        </Link>
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">
        Tagged &ldquo;{decoded}&rdquo;
      </h1>
      <p className="mt-2 text-foreground/70">
        {posts.length} {posts.length === 1 ? "post" : "posts"}
      </p>
      <div className="mt-10 space-y-10">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
}
