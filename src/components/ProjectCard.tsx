import Link from "next/link";
import type { Project } from "@/lib/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-lg border border-neutral-200 p-5 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600">
      <Link href={`/projects/${project.slug}`} className="block">
        <h3 className="text-lg font-semibold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {project.frontmatter.title}
        </h3>
        <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
          {project.frontmatter.description}
        </p>
        {project.frontmatter.tech.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.frontmatter.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-foreground/70 dark:bg-neutral-800"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}
