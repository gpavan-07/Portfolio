import type { Skill } from "../data/skills";

export default function SkillCard({ name, icon: Icon, color }: Skill) {
  const isWhiteIcon = color.toUpperCase() === "#FFFFFF" || color.toUpperCase() === "#FFF";

  return (
    <div className="card-surface card-hover flex flex-col items-center justify-center gap-2.5 p-4 text-center">
      <div className="flex h-10 w-10 items-center justify-center">
        <Icon
          size={30}
          style={{ color: isWhiteIcon ? undefined : color }}
          className={isWhiteIcon ? "icon-adaptive-white" : ""}
          aria-hidden="true"
        />
      </div>
      <span className="text-xs sm:text-sm font-semibold text-ink leading-tight">{name}</span>
    </div>
  );
}
