import {
  Home,
  FolderGit2,
  Cpu,
  GraduationCap,
  Briefcase,
  Award,
  Terminal,
  Mail,
} from "lucide-react";

export type TabId =
  | "home"
  | "projects"
  | "skills"
  | "education"
  | "experience"
  | "certifications"
  | "coding-profiles"
  | "contact";

export interface NavItem {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "skills", label: "Tech Skills", icon: Cpu },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "coding-profiles", label: "Coding Profiles", icon: Terminal },
  { id: "contact", label: "Contact", icon: Mail },
];

interface SidebarNavProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
}

export default function SidebarNav({ activeTab, onSelectTab }: SidebarNavProps) {
  return (
    <aside className="w-full shrink-0 border-b border-white/10 bg-bg-card/50 p-3 backdrop-blur-md md:w-64 md:border-b-0 md:border-r md:p-5 transition-colors duration-300">
      {/* Mobile Horizontal Slidebar */}
      <div className="md:hidden">
        <p className="mb-2.5 px-1 text-xs font-bold uppercase tracking-wider text-ink-muted">
          Navigation Slidebar
        </p>
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1 scroll-smooth">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectTab(item.id)}
                className={`focus-ring flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-brand text-white shadow-glow"
                    : "bg-white/5 text-ink-muted hover:bg-white/10 hover:text-ink"
                }`}
              >
                <Icon
                  size={16}
                  className={isActive ? "text-white" : "text-accent-purple"}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop Vertical Sidebar */}
      <div className="hidden md:block">
        <div className="mb-4 px-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-ink-muted">
            Menu Sidebar
          </p>
        </div>
        <nav className="flex flex-col gap-1.5" aria-label="Sidebar Navigation">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectTab(item.id)}
                className={`focus-ring group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 text-left ${
                  isActive
                    ? "bg-gradient-brand text-white shadow-glow"
                    : "text-ink-muted hover:bg-white/5 hover:text-ink"
                }`}
              >
                <Icon
                  size={18}
                  className={`transition-transform duration-300 ${
                    isActive
                      ? "scale-110 text-white"
                      : "group-hover:scale-125 text-accent-purple"
                  }`}
                />
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
