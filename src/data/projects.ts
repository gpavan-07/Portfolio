export type ProjectCategory = "Web Development" | "Java" | "Python" | "AI/ML";

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  githubUrl: string;
  liveUrl: string;
}

// Replace `image` with your own screenshot path, and the URL placeholders
// with real links. Leave a URL as "" to hide that button on the card.
export const projects: Project[] = [
  {
    title: "Student Management System",
    description:
      "A web application designed to manage student records, attendance, and academic information efficiently.",
    image: "YOUR_PROJECT_IMAGE",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    category: "Web Development",
    githubUrl: "YOUR_PROJECT_GITHUB_URL",
    liveUrl: "YOUR_PROJECT_LIVE_URL",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A responsive application for tracking income, expenses, budgets, and personal financial activity.",
    image: "YOUR_PROJECT_IMAGE",
    technologies: ["React", "JavaScript", "CSS", "Node.js"],
    category: "Web Development",
    githubUrl: "YOUR_PROJECT_GITHUB_URL",
    liveUrl: "YOUR_PROJECT_LIVE_URL",
  },
  {
    title: "AI/ML Project",
    description:
      "An intelligent application demonstrating the use of machine learning to solve a practical real-world problem.",
    image: "YOUR_PROJECT_IMAGE",
    technologies: ["Python", "Machine Learning", "Flask"],
    category: "AI/ML",
    githubUrl: "YOUR_PROJECT_GITHUB_URL",
    liveUrl: "YOUR_PROJECT_LIVE_URL",
  },
];

export const projectFilters: Array<ProjectCategory | "All"> = [
  "All",
  "Web Development",
  "Java",
  "Python",
  "AI/ML",
];
