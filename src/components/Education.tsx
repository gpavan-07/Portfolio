import { GraduationCap } from "lucide-react";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Academic path</p>
          <h2 className="section-heading mt-2">Education</h2>
          <p className="section-sub mx-auto">My academic background</p>
        </div>

        <ol className="relative mx-auto mt-14 max-w-2xl border-l border-white/10 pl-8 sm:pl-10">
          {education.map((entry) => (
            <li key={entry.period} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[2.55rem] flex h-6 w-6 items-center justify-center rounded-full bg-gradient-brand shadow-glow-sm sm:-left-[3.05rem]">
                <GraduationCap size={13} className="text-white" />
              </span>
              <div className="card-surface card-hover p-5">
                <p className="text-sm font-semibold text-accent-purple">{entry.period}</p>
                <h3 className="mt-1 font-display text-base font-semibold sm:text-lg">
                  {entry.degree}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">{entry.institution}</p>
                <p className="mt-1 text-sm text-ink-dim">{entry.score}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
