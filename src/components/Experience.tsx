
import { Briefcase } from "lucide-react";
import { experience, openToWorkMessage } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">My journey</p>
          <h2 className="section-heading mt-2">Experience / Internships</h2>
          <p className="section-sub mx-auto">My professional journey</p>
        </div>

        {experience.length > 0 ? (
          <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-5">
            {experience.map((item) => (
              <div key={item.role + item.period} className="card-surface card-hover p-5">
                <p className="text-sm font-semibold text-accent-purple">{item.period}</p>
                <h3 className="mt-1 font-display text-base font-semibold sm:text-lg">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">{item.organization}</p>
                <p className="mt-2 text-sm text-ink-dim">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="card-surface mx-auto mt-14 flex max-w-xl flex-col items-center gap-4 p-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand/15 text-accent-purple">
              <Briefcase size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold">
              Open to internships and opportunities.
            </h3>
            <p className="text-sm text-ink-muted">{openToWorkMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}
