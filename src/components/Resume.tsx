import { FileDown, Eye } from "lucide-react";
import { personal } from "../data/personal";

export default function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-accent-violet/25 via-bg-card to-accent-blue/10 p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-radial-purple blur-3xl" />
          <h2 className="section-heading relative">Interested in working with me?</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-ink-muted">
            Download my resume to learn more about my education, skills, projects, and
            experience.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={personal.resumeFile}
              download
              className="btn-primary"
            >
              <FileDown size={16} />
              Download Resume
            </a>
            <a href={personal.resumeFile} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Eye size={16} />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
