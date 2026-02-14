import type { MetadataRoute } from "next";
import { getAllPosts, getAllProjects, getAllTags } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, projects, tags] = await Promise.all([
    getAllPosts(),
    getAllProjects(),
    getAllTags(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/how-i-work",
    "/projects",
    "/blog",
    "/resume",
    "/contact",
  ].map((route) => ({
    url: `https://dhruvaldhameliya.com${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://dhruvaldhameliya.com/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.updated || post.frontmatter.date),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `https://dhruvaldhameliya.com/projects/${project.slug}`,
    lastModified: new Date(project.frontmatter.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const tagRoutes: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `https://dhruvaldhameliya.com/blog/tag/${tag}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes, ...projectRoutes, ...tagRoutes];
}
