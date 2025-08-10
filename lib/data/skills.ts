import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiFramer,
  SiFirebase,
  SiMysql,
  SiNotion,
  SiEslint,
  SiPrettier,
  SiHtml5,
  SiCss3,
  SiPostman,
} from "react-icons/si";
import { SkillsContent } from "@/lib/types";

export const skillsContent: SkillsContent = {
  title: "Skills",
  subtitle: "tech stack",
  terminalInfo: {
    command: "skill",
    flag: "list",
    content:
      "Some few technologies and tools I work with to bring ideas to life",
  },
  groups: [
    {
      title: "Core Technologies",
      skills: [
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss3 },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Vercel", icon: SiVercel },
        { name: "Notion", icon: SiNotion },
        { name: "Figma", icon: SiFigma },
        { name: "Framer", icon: SiFramer },
        { name: "ESLint", icon: SiEslint },
        { name: "Prettier", icon: SiPrettier },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Express.js", icon: SiExpress },
        { name: "REST APIs", icon: SiNodedotjs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
        { name: "Firebase", icon: SiFirebase },
        { name: "Postman", icon: SiPostman },
      ],
    },
  ],
};
