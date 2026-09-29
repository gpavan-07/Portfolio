import { useState, type FormEvent } from "react";
import { Mail, Send, AlertCircle } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { personal } from "../data/personal";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactCards = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
  { label: "LinkedIn", value: "Connect with me", href: personal.social.linkedin, icon: FaLinkedin },
  { label: "GitHub", value: "See my code", href: personal.social.github, icon: FaGithub },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "not-configured">("idle");

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.subject.trim()) next.subject = "Please add a subject.";
    if (!form.message.trim()) next.message = "Please write a message.";
    else if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // NOTE: No backend is connected yet, so we don't pretend the message was
    // sent. Wire this up to Formspree, EmailJS, or your own API endpoint —
    // e.g. call fetch("YOUR_ENDPOINT", { method: "POST", body: ... }) here,
    // then swap the status below to a real success/error state.
    setStatus("not-configured");
  };

  const inputClass = (hasError?: string) =>
    `w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus-ring transition-colors ${
      hasError
        ? "border-red-500/60 focus-visible:border-red-500"
        : "border-white/10 hover:border-white/25 focus-visible:border-accent-purple/50"
    }`;

  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-heading mt-2">Let's Connect</h2>
          <p className="section-sub mx-auto">
            Have a project idea, opportunity, or just want to say hello? Feel free to reach out.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.label !== "Email" ? "_blank" : undefined}
                  rel={card.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="card-surface card-hover focus-ring flex items-center gap-4 p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand/15 text-accent-purple">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-ink-muted">{card.label}</p>
                    <p className="text-sm font-semibold">{card.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} noValidate className="card-surface p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-muted">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className={inputClass(errors.name)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className={inputClass(errors.email)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink-muted">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                className={inputClass(errors.subject)}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1.5 text-xs text-red-400">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className={inputClass(errors.message)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              <Send size={16} />
              Send Message
            </button>

            {status === "not-configured" && (
              <div
                role="status"
                className="mt-4 flex items-start gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-300"
              >
                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                <span>
                  This form isn't connected to a backend yet, so your message wasn't sent.
                  Wire it up to Formspree, EmailJS, or your own API in{" "}
                  <code className="rounded bg-white/10 px-1 py-0.5 text-xs">src/components/Contact.tsx</code>.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
