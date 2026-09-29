// ─────────────────────────────────────────────────────────────
// EDIT ME: this file is the single source of truth for all of
// your personal details. Replace every YOUR_* placeholder below.
// ─────────────────────────────────────────────────────────────

import profileImg from "../assets/images/profile.jpg";

export const personal = {
  name: "G Pavan",
  firstName: "Pavan",
  title: "Computer Science Student | Full Stack Developer",
  tagline: "Build. Learn. Grow.",
  description:
    "I am a passionate developer who enjoys building modern web applications, solving real-world problems, and continuously learning new technologies.",
  aboutParagraph:
    "I am a Computer Science student with a strong interest in web development, problem solving, and building scalable applications. I enjoy turning ideas into real-world solutions and continuously learning new technologies.",

  email: "YOUR_EMAIL",
  phone: "YOUR_PHONE",
  location: "Hyderabad, India",

  // Profile and About images imported from src/assets/images/profile.jpg
  profileImage: profileImg,
  aboutImage: profileImg,

  resumeFile: "YOUR_RESUME_FILE", // e.g. "/resume.pdf" in the public/ folder

  social: {
    github: "YOUR_GITHUB_PROFILE",
    linkedin: "YOUR_LINKEDIN_PROFILE",
    email: "YOUR_EMAIL",
  },

  aboutCards: [
    { label: "Education", value: "Bachelor's in Computer Science" },
    { label: "Location", value: "Hyderabad, India" },
    { label: "Current Focus", value: "Web Development" },
    { label: "Career Goal", value: "Full Stack Developer" },
  ],
};

export type Personal = typeof personal;
