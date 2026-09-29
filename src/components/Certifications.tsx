import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Recognition</p>
          <h2 className="section-heading mt-2">Certifications & Achievements</h2>
          <p className="section-sub mx-auto">
            Placeholder entries below — swap them for your real credentials in
            <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5 text-xs">src/data/certifications.ts</code>.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <div key={cert.title} className="card-surface card-hover flex flex-col p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand/15 text-accent-purple">
                <Award size={20} />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{cert.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{cert.organization}</p>
              <p className="text-xs text-ink-dim">{cert.year}</p>
              <p className="mt-3 flex-1 text-sm text-ink-dim">{cert.description}</p>
              {cert.certificateUrl && (
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-purple hover:underline"
                >
                  View Certificate
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
