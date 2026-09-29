export interface ExperienceEntry {
  role: string;
  organization: string;
  period: string;
  description: string;
}

// Leave this array empty to show the "open to opportunities" message.
// Add entries here once you have real internship/work experience:
// { role: "Software Engineering Intern", organization: "Company", period: "Jun 2026 - Aug 2026", description: "..." }
export const experience: ExperienceEntry[] = [];

export const openToWorkMessage =
  "I am actively looking for opportunities to gain real-world experience and contribute to meaningful projects.";
