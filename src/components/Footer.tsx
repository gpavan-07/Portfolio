import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "../data/personal";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Tech Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Coding Profiles", id: "coding-profiles" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 py-16">
      <div className="section-shell flex flex-col items-center text-center">
        <h2 className="font-display text-xl font-bold">{personal.name}</h2>
        <p className="mt-1 text-sm text-ink-muted">{personal.title}</p>
        <p className="mt-3 max-w-md text-sm text-ink-dim">
          Building a better tomorrow, one line of code at a time.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-muted transition-colors hover:text-accent-purple"
          >
            <FaGithub size={17} />
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-muted transition-colors hover:text-accent-purple"
          >
            <FaLinkedin size={17} />
          </a>
          <a
            href={`mailto:${personal.social.email}`}
            aria-label="Send an email"
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-muted transition-colors hover:text-accent-purple"
          >
            <Mail size={17} />
          </a>
        </div>

        <nav className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="focus-ring rounded text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="focus-ring mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent-purple hover:underline"
        >
          Back to Top
          <ArrowUp size={15} />
        </button>

        <p className="mt-8 text-xs text-ink-dim">
          © {year} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
