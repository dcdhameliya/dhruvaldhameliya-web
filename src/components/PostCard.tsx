import Link from "next/link";
import type { BlogPost } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <h3 className="text-lg font-semibold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {post.frontmatter.title}
        </h3>
        <p className="mt-1 text-sm text-foreground/60">
          {formatDate(post.frontmatter.date)}
          <span className="mx-2">&middot;</span>
          {post.readingTime}
        </p>
        <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
          {post.frontmatter.description}
        </p>
        {post.frontmatter.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-foreground/70 dark:bg-neutral-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}
