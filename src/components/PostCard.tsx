import Link from "next/link";
import type { BlogPost } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group rounded-xl border border-neutral-200 p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:shadow-neutral-900/50">
      <Link href={`/blog/${post.slug}`} className="block">
        <h3 className="text-lg font-semibold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {post.frontmatter.title}
        </h3>
        <p className="mt-1 text-sm text-foreground/70">
          {formatDate(post.frontmatter.date)}
          <span className="mx-2">&middot;</span>
          {post.readingTime}
        </p>
        <p className="mt-2 text-sm text-foreground/90 leading-relaxed">
          {post.frontmatter.description}
        </p>
        {post.frontmatter.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
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
