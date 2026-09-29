import { projectFilters, type ProjectCategory } from "../data/projects";

interface Props {
  active: ProjectCategory | "All";
  onChange: (value: ProjectCategory | "All") => void;
}

export default function ProjectFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filter projects by category">
      {projectFilters.map((filter) => {
        const isActive = filter === active;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            aria-pressed={isActive}
            className={`focus-ring rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              isActive
                ? "bg-gradient-brand text-white shadow-glow-sm"
                : "border border-white/10 bg-white/5 text-ink-muted hover:border-accent-purple/40 hover:text-ink"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
