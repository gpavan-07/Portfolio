import type { IconType } from "react-icons";
import { SiGithub, SiLeetcode, SiCodechef, SiHackerrank, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

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
    username: "gpavan-07",
    url: "https://github.com/gpavan-07",
    description: "Explore my projects and contributions.",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    color: "#FFA116",
    username: "gpavan_07",
    url: "https://leetcode.com/u/gpavan_07/",
    description: "Follow my problem-solving practice.",
  },
  {
    name: "GFG",
    icon: SiGeeksforgeeks,
    color: "#2F8D46",
    username: "gpavanvar8l",
    url: "https://www.geeksforgeeks.org/profile/gpavanvar8l",
    description: "Practice problems, articles, and coding scores.",
  },
  {
    name: "CodeChef",
    icon: SiCodechef,
    color: "#5B4638",
    username: "gpavan_07",
    url: "https://www.codechef.com/users/gpavan_07",
    description: "See my competitive programming contests.",
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    color: "#00EA64",
    username: "gpavanvasu_07",
    url: "https://www.hackerrank.com/profile/gpavanvasu_07",
    description: "Check out my skill certifications and challenges.",
  },
  {
    name: "Codeforces",
    icon: SiCodeforces,
    color: "#1F8ACB",
    username: "gpavanvasu.07",
    url: "https://codeforces.com/profile/gpavanvasu.07",
    description: "View my competitive programming journey.",
  },

];
