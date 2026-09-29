import type { IconType } from "react-icons";
import { SiGithub, SiLeetcode, SiCodechef, SiHackerrank, SiCodeforces } from "react-icons/si";

export interface CodingProfile {
  name: string;
  icon: IconType;
  color: string;
  username: string;
  url: string;
  description: string;
}

export const codingProfiles: CodingProfile[] = [
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
    username: "YOUR_USERNAME",
    url: "YOUR_GITHUB_PROFILE",
    description: "Explore my projects and contributions.",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    color: "#FFA116",
    username: "YOUR_USERNAME",
    url: "YOUR_LEETCODE_PROFILE",
    description: "Follow my problem-solving practice.",
  },
  {
    name: "CodeChef",
    icon: SiCodechef,
    color: "#5B4638",
    username: "YOUR_USERNAME",
    url: "YOUR_CODECHEF_PROFILE",
    description: "See my competitive programming contests.",
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    color: "#00EA64",
    username: "YOUR_USERNAME",
    url: "YOUR_HACKERRANK_PROFILE",
    description: "Check out my skill certifications and challenges.",
  },
  {
    name: "Codeforces",
    icon: SiCodeforces,
    color: "#1F8ACB",
    username: "YOUR_USERNAME",
    url: "YOUR_CODEFORCES_PROFILE",
    description: "View my competitive programming journey.",
  },
];
