import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on engineering, architecture, and lessons learned building software.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Container>
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <p className="mt-2 text-foreground/60">
        Thoughts on engineering, architecture, and lessons learned.
      </p>
      {posts.length > 0 ? (
        <div className="mt-10 space-y-10">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-foreground/60">No posts yet. Check back soon.</p>
      )}
    </Container>
  );
}
