import fs from "fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import readingTime from "reading-time";
import { z } from "zod";
import { mdxComponents } from "@/components/mdx-components";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");
const PROJECTS_DIR = path.join(process.cwd(), "src/content/projects");

// --- Schemas ---

export const BlogFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  updated: z.string().optional(),
  tags: z.array(z.string()).default([]),
  coverImage: z.string().optional(),
  draft: z.boolean().default(false),
});
export type BlogFrontmatter = z.infer<typeof BlogFrontmatterSchema>;

export const ProjectFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tech: z.array(z.string()).default([]),
  coverImage: z.string().optional(),
  liveUrl: z.string().optional(),
  repoUrl: z.string().optional(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
});
export type ProjectFrontmatter = z.infer<typeof ProjectFrontmatterSchema>;

// --- Types ---

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  readingTime: string;
};

export type BlogPostWithContent = BlogPost & {
  content: React.ReactElement;
};

export type Project = {
  slug: string;
  frontmatter: ProjectFrontmatter;
};

export type ProjectWithContent = Project & {
  content: React.ReactElement;
};

// --- Helpers ---

async function getSlugs(dir: string): Promise<string[]> {
  try {
    const files = await fs.readdir(dir);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

const rehypePrettyCodeOptions = {
  theme: "github-dark-dimmed",
  keepBackground: true,
};

// --- Blog ---

export async function getAllPosts(): Promise<BlogPost[]> {
  const slugs = await getSlugs(BLOG_DIR);
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const source = await fs.readFile(
        path.join(BLOG_DIR, `${slug}.mdx`),
        "utf-8"
      );

      const { frontmatter } = await compileMDX<Record<string, unknown>>({
        source,
        options: { parseFrontmatter: true },
      });

      const parsed = BlogFrontmatterSchema.parse(frontmatter);

      if (parsed.draft && process.env.NODE_ENV === "production") {
        return null;
      }

      const stats = readingTime(source);

      return {
        slug,
        frontmatter: parsed,
        readingTime: stats.text,
      };
    })
  );

  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPostWithContent> {
  const source = await fs.readFile(
    path.join(BLOG_DIR, `${slug}.mdx`),
    "utf-8"
  );

  const { content, frontmatter } = await compileMDX<Record<string, unknown>>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
      },
    },
  });

  const parsed = BlogFrontmatterSchema.parse(frontmatter);
  const stats = readingTime(source);

  return {
    slug,
    frontmatter: parsed,
    readingTime: stats.text,
    content,
  };
}

export async function getBlogSlugs(): Promise<string[]> {
  return getSlugs(BLOG_DIR);
}

// --- Projects ---

export async function getAllProjects(): Promise<Project[]> {
  const slugs = await getSlugs(PROJECTS_DIR);
  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const source = await fs.readFile(
        path.join(PROJECTS_DIR, `${slug}.mdx`),
        "utf-8"
      );

      const { frontmatter } = await compileMDX<Record<string, unknown>>({
        source,
        options: { parseFrontmatter: true },
      });

      const parsed = ProjectFrontmatterSchema.parse(frontmatter);

      if (parsed.draft && process.env.NODE_ENV === "production") {
        return null;
      }

      return {
        slug,
        frontmatter: parsed,
      };
    })
  );

  return projects
    .filter((project): project is Project => project !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export async function getProjectBySlug(
  slug: string
): Promise<ProjectWithContent> {
  const source = await fs.readFile(
    path.join(PROJECTS_DIR, `${slug}.mdx`),
    "utf-8"
  );

  const { content, frontmatter } = await compileMDX<Record<string, unknown>>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
      },
    },
  });

  const parsed = ProjectFrontmatterSchema.parse(frontmatter);

  return {
    slug,
    frontmatter: parsed,
    content,
  };
}

export async function getProjectSlugs(): Promise<string[]> {
  return getSlugs(PROJECTS_DIR);
}
