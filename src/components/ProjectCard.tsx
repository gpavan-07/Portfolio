import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const hasImage = project.image && !project.image.startsWith("YOUR_");
  const hasGithub = project.githubUrl && !project.githubUrl.startsWith("YOUR_");
  const hasLive = project.liveUrl && !project.liveUrl.startsWith("YOUR_");

  return (
    <article className="card-surface card-hover group flex flex-col overflow-hidden">
      <div className="relative aspect-video w-full overflow-hidden bg-white/5">
        {hasImage ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-ink-dim">
            <FolderGit2 size={40} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card/70 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-ink-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {(hasGithub || hasLive) && (
          <div className="mt-6 flex gap-3">
            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1 !py-2.5 text-sm transition-transform duration-300 hover:scale-[1.02]"
              >
                <FaGithub size={16} />
                GitHub
              </a>
            )}
            {hasLive && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 !py-2.5 text-sm"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
