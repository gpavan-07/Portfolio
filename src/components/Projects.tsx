import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "../data/projects";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">My work</p>
          <h2 className="section-heading mt-2">Projects</h2>
          <p className="section-sub mx-auto">A showcase of my recent work</p>
        </div>

        <div className="mt-10">
          <ProjectFilter active={filter} onChange={setFilter} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 transition-all duration-300 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-ink-muted">
            No projects in this category yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
