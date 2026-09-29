import { skillCategories } from "../data/skills";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">What I work with</p>
          <h2 className="section-heading mt-2">Tech Skills</h2>
          <p className="section-sub mx-auto">
            Languages, frameworks, and tools I use to design, build, and ship software.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title} className="card-surface p-6">
              <h3 className="font-display text-lg font-semibold">{category.title}</h3>
              <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-3">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
