import { Mail, ArrowRight, FileDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "../data/personal";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const hasPhoto = personal.profileImage && !personal.profileImage.startsWith("YOUR_");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="animate-fade-up">
          <p className="eyebrow">Hi, I'm</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{personal.name}</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-ink-muted">{personal.title}</p>
          <p className="section-sub">{personal.description}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button type="button" onClick={scrollToProjects} className="btn-primary">
              View My Projects
              <ArrowRight size={16} />
            </button>
            <a
              href={personal.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FileDown size={16} />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-purple/40 hover:text-accent-purple"
            >
              <FaGithub size={19} />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-purple/40 hover:text-accent-purple"
            >
              <FaLinkedin size={19} />
            </a>
            <a
              href={`mailto:${personal.social.email}`}
              aria-label="Send an email"
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-purple/40 hover:text-accent-purple"
            >
              <Mail size={19} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto animate-fade-in">
          <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80">
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-brand opacity-70 blur-2xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-brand p-[3px] shadow-glow">
              <div className="h-full w-full overflow-hidden rounded-full bg-bg-card">
                {hasPhoto ? (
                  <img
                    src={personal.profileImage}
                    alt={`Portrait of ${personal.name}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center font-display text-6xl font-bold text-ink-dim">
                    {personal.firstName?.charAt(0) || "Y"}
                  </div>
                )}
              </div>
            </div>

            <div
              className="absolute -right-4 top-6 rotate-6 select-none animate-float font-display text-sm italic text-accent-purple/80 sm:-right-8 sm:text-base"
              aria-hidden="true"
            >
              Build
            </div>
            <div
              className="absolute -left-6 top-1/2 -rotate-3 select-none animate-float font-display text-sm italic text-accent-blue/80 sm:text-base"
              style={{ animationDelay: "1.5s" }}
              aria-hidden="true"
            >
              Learn
            </div>
            <div
              className="absolute -right-2 bottom-4 rotate-3 select-none animate-float font-display text-sm italic text-accent-purple/80 sm:text-base"
              style={{ animationDelay: "3s" }}
              aria-hidden="true"
            >
              Grow
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
