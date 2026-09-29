import { GraduationCap, MapPin, Compass, Target, ArrowRight, FolderGit2, Cpu } from "lucide-react";
import { personal } from "../data/personal";
import type { TabId } from "./SidebarNav";

const ICONS = [GraduationCap, MapPin, Compass, Target];

interface HomeViewProps {
  onSelectTab: (tab: TabId) => void;
}

export default function HomeView({ onSelectTab }: HomeViewProps) {
  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      {/* Intro & Tagline Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 html.light:border-slate-200 bg-gradient-to-r from-accent-purple/10 via-white/5 to-accent-blue/10 html.light:from-accent-purple/10 html.light:via-slate-50 html.light:to-accent-blue/10 p-6 sm:p-8">
        <p className="eyebrow">Welcome to my portfolio</p>
        <h2 className="mt-2 font-display text-2xl font-extrabold text-ink sm:text-3xl">
          Hi, I&apos;m <span className="text-gradient">{personal.name}</span>
        </h2>
        <p className="mt-3 text-base leading-relaxed text-ink-muted sm:text-lg">
          {personal.aboutParagraph}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onSelectTab("projects")}
            className="btn-primary gap-2 text-sm"
          >
            <span>Explore Projects</span>
            <FolderGit2 size={16} />
          </button>
          <button
            type="button"
            onClick={() => onSelectTab("skills")}
            className="btn-outline gap-2 text-sm"
          >
            <span>View Skills</span>
            <Cpu size={16} />
          </button>
          <button
            type="button"
            onClick={() => onSelectTab("contact")}
            className="btn-outline gap-2 text-sm"
          >
            <span>Get In Touch</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* About Section Full Width */}
      <div className="space-y-6">
        <div>
          <h3 className="font-display text-xl font-bold text-ink">About & Focus</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted max-w-3xl">
            {personal.description}
          </p>
        </div>

        {/* Highlights Grid - Full Width 4 Columns */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {personal.aboutCards?.map((card, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={card.label}
                className="card-surface card-hover flex items-start gap-3.5 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand/15 text-accent-purple">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-ink-muted">{card.label}</p>
                  <p className="text-sm font-semibold text-ink">{card.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
