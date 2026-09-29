import { Mail, FileDown, Sparkles, Image as ImageIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "../data/personal";
import ThemeToggle from "./ThemeToggle";

interface HeaderProfileProps {
  onNavigateToContact?: () => void;
}

export default function HeaderProfile({ onNavigateToContact }: HeaderProfileProps) {
  const hasPhoto = personal.profileImage && !personal.profileImage.startsWith("YOUR_");
  const hasAboutPhoto = personal.aboutImage && !personal.aboutImage.startsWith("YOUR_");
  const displayImage = hasPhoto ? personal.profileImage : hasAboutPhoto ? personal.aboutImage : null;

  return (
    <header className="card-surface relative overflow-hidden rounded-3xl p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 sm:p-8">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-purple/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-blue/15 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Side: Profile Avatar (GP) & Details */}
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          {/* GP Circle Avatar with Glow */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-brand opacity-60 blur-md" />
            <div className="relative h-24 w-24 rounded-full bg-gradient-brand p-[3px] shadow-glow sm:h-28 sm:w-28">
              <div className="avatar-circle flex h-full w-full items-center justify-center rounded-full bg-bg-card select-none shadow-sm">
                <span className="avatar-text font-display text-3xl font-extrabold text-accent-purple sm:text-4xl tracking-wider">
                  GP
                </span>
              </div>
            </div>
          </div>

          {/* Text Info */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-purple/30 bg-accent-purple/10 px-3 py-1 text-xs font-semibold text-accent-purple">
              <Sparkles size={13} />
              <span>Available for projects & roles</span>
            </div>

            <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              <span className="text-gradient">{personal.name}</span>
            </h1>

            <p className="mt-1 text-base font-semibold text-accent-blue sm:text-lg">
              {personal.title}
            </p>

            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {personal.description}
            </p>
          </div>
        </div>

        {/* Right Side: Image Frame & Action Controls */}
        <div className="flex flex-col items-center gap-4 sm:flex-row lg:flex-col lg:items-end">
          {/* Profile Image Frame (Small Size) */}
          <div className="image-frame-box relative group overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-1 shadow-md backdrop-blur-md transition-all duration-300 hover:border-accent-purple/60 hover:shadow-glow-sm w-24 sm:w-28 lg:w-32">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-bg-card/80">
              {displayImage ? (
                <img
                  src={displayImage}
                  alt={`${personal.name} portrait`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center bg-gradient-to-br from-accent-purple/15 via-bg-card to-accent-blue/15">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-glow-sm">
                    <ImageIcon size={20} />
                  </div>
                  <span className="text-xs font-bold text-ink">Image Frame</span>
                  <span className="text-[10px] text-ink-muted">Add image in src/assets/images</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Controls & Social Links */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {personal.resumeFile && (
              <a
                href={personal.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary gap-2 text-xs sm:text-sm"
              >
                <FileDown size={15} />
                <span>Resume</span>
              </a>
            )}

            {/* Social Icons */}
            <div className="flex items-center gap-1.5">
              {personal.social?.github && (
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="header-icon-btn focus-ring flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-muted transition-all duration-300 hover:scale-105 hover:border-accent-purple hover:bg-accent-purple/10 hover:text-accent-purple"
                >
                  <FaGithub size={15} />
                </a>
              )}

              {personal.social?.linkedin && (
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="header-icon-btn focus-ring flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-muted transition-all duration-300 hover:scale-105 hover:border-accent-purple hover:bg-accent-purple/10 hover:text-accent-purple"
                >
                  <FaLinkedin size={15} />
                </a>
              )}

              {(personal.social?.email || personal.email) && (
                <button
                  type="button"
                  onClick={onNavigateToContact}
                  aria-label="Contact me"
                  className="header-icon-btn focus-ring flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-muted transition-all duration-300 hover:scale-105 hover:border-accent-purple hover:bg-accent-purple/10 hover:text-accent-purple"
                >
                  <Mail size={15} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
