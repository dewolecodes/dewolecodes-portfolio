import { Terminal, Code2, Boxes, ArrowRight } from "lucide-react";
import { HeroContent } from "@/lib/types";

export const heroContent: HeroContent = {
  intro: " Available for hire ",
  // intro: " CODE • CREATE • INNOVATE ",
  description:
    // "Software developer who enjoys building things for the web. Whether it's a full website or a specific feature, I create solutions that work well and look good. Discover my portfolio and explore my work.",
       "Frontend-focused developer with a knack for building reliable full-stack applications. I specialize in crafting engaging, responsive, and scalable user interfaces.",
  personal: {
    name: "Akinbola Abdulrahmon",
    nickname: "Dewole Codes",
  },
  currentRole: {
    title: "Frontend Engineer",
    filename: "current_role.tsx",
  },
  roles: [
    { icon: Terminal, label: "Software Engineer" },
    { icon: Code2, label: "Frontend Developer" },
    { icon: Boxes, label: "Full Stack Developer" },
    { icon: ArrowRight, label: "Freelance Developer" },
    // Add more roles as needed
  ],
  cta: {
    primary: {
      href: "#projects",
    },
    secondary: {
      href: "file:///C:/Users/USER/Downloads/Akinbola_Abdulrahmon_Resume%20(4).pdf",
    },
  },
  social: {
    github: "https://github.com/dewolecodes",
    linkedin: "https://www.linkedin.com/in/akinbola-abdulrahmon-0b7828274/",
  },
};
