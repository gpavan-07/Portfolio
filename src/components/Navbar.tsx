import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { personal } from "../data/personal";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Tech Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Coding Profiles", id: "coding-profiles" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-bg/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="focus-ring rounded font-display text-lg font-bold tracking-tight"
        >
          {personal.name}
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeId === link.id
                  ? "text-accent-purple"
                  : "text-ink-muted hover:text-ink"
              }`}
              aria-current={activeId === link.id ? "page" : undefined}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={personal.resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FileDown size={16} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={`grid overflow-hidden border-b border-white/10 bg-bg/95 backdrop-blur-md transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-b-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="section-shell flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`focus-ring rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors ${
                  activeId === link.id ? "bg-white/5 text-accent-purple" : "text-ink-muted"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={personal.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline mt-2 justify-center"
              onClick={() => setIsOpen(false)}
            >
              <FileDown size={16} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
