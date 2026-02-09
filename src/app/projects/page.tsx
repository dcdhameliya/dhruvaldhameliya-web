import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "A curated collection of projects and case studies.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <Container>
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mt-2 text-foreground/60">
        A curated collection of projects and case studies.
      </p>
      {projects.length > 0 ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-foreground/60">
          No projects yet. Check back soon.
        </p>
      )}
    </Container>
  );
}
