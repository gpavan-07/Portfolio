import { ArrowUpRight } from "lucide-react";
import type { CodingProfile } from "../data/codingProfiles";

export default function CodingProfileCard({ profile }: { profile: CodingProfile }) {
  const Icon = profile.icon;
  const isWhiteIcon = profile.color.toUpperCase() === "#FFFFFF" || profile.color.toUpperCase() === "#FFF";

  return (
    <a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-surface card-hover focus-ring group flex flex-col items-center gap-3 p-8 text-center"
    >
      <Icon
        size={44}
        style={isWhiteIcon ? undefined : { color: profile.color }}
        className={`transition-transform duration-300 group-hover:scale-110 ${isWhiteIcon ? "icon-adaptive-white" : ""}`}
        aria-hidden="true"
      />
      <span className="font-display text-base font-semibold">{profile.name}</span>
      <span className="text-sm text-ink-muted">{profile.username}</span>
      <p className="text-xs text-ink-dim">{profile.description}</p>
      <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent-purple opacity-80 transition-all duration-300 group-hover:gap-1.5 group-hover:opacity-100">
        Visit Profile
        <ArrowUpRight size={15} />
      </span>
    </a>
  );
}
