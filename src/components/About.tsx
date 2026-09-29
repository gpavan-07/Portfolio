import { GraduationCap, MapPin, Compass, Target } from "lucide-react";
import { personal } from "../data/personal";

const ICONS = [GraduationCap, MapPin, Compass, Target];

export default function About() {
  const hasPhoto = personal.aboutImage && !personal.aboutImage.startsWith("YOUR_");

  return (
    <section id="about" className="py-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/10 shadow-card">
            {hasPhoto ? (
              <img
                src={personal.aboutImage}
                alt={`${personal.name} working on a laptop`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-violet/20 to-accent-blue/10">
                <Compass size={56} className="text-ink-dim" />
              </div>
            )}
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full bg-gradient-radial-purple blur-2xl" />
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">Get to know me</p>
          <h2 className="section-heading mt-2">About Me</h2>
          <p className="mt-4 text-ink-muted">{personal.aboutParagraph}</p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {personal.aboutCards.map((card, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <div
                  key={card.label}
                  className="card-surface card-hover flex items-start gap-3 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand/15 text-accent-purple">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-ink-muted">{card.label}</p>
                    <p className="text-sm font-semibold">{card.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
