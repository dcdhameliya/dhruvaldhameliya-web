import Link from "next/link";
import type { Project } from "@/lib/content";

function getPlatformIcon(tech: string[]) {
  const isIOS = tech.some((t) => t.toLowerCase() === "swift");
  const isAndroid = tech.some((t) =>
    ["kotlin", "java"].includes(t.toLowerCase())
  );

  if (isIOS) {
    return (
      <svg
        className="inline-block w-5 h-5 mr-2 -mt-0.5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-label="iOS"
      >
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </svg>
    );
  }

  if (isAndroid) {
    return (
      <svg
        className="inline-block w-5 h-5 mr-2 -mt-0.5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-label="Android"
      >
        <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.5 11.5 0 0 0-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C2.92 11.03 1 14.22 1 17.8h22c0-3.58-1.92-6.77-5.4-8.32zM8.06 15.2c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2zm7.88 0c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2z" />
      </svg>
    );
  }

  return null;
}

export function ProjectCard({ project }: { project: Project }) {
  const platformIcon = getPlatformIcon(project.frontmatter.tech);

  return (
    <article className="group rounded-lg border border-neutral-200 p-5 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600">
      <Link href={`/projects/${project.slug}`} className="block">
        <h3 className="text-lg font-semibold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {platformIcon}
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
