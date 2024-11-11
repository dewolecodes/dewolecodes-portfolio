import { LucideIcon } from "lucide-react";

export type NavItem = {
  name: string;
  href: string;
  label?: string;
};

export type HeroContent = {
  intro: string;
  description: string;
  personal: {
    name: string;
    nickname: string;
  };
  currentRole: {
    title: string;
    filename: string;
  };
  roles: Array<{
    icon: LucideIcon;
    label: string;
  }>;
  cta: {
    primary: {
      href: string;
    };
    secondary: {
      href: string;
    };
  };
  social: {
    github: string;
    linkedin: string;
  };
};

export type AboutContent = {
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
  };
  description: {
    intro: string;
    details: string[];
  };
  interests: Array<{
    type: string;
    items: string[];
  }>;
};

// types.ts - Add this to your existing types
export type SkillGroup = {
  title: string;
  skills: Array<{
    name: string;
    icon: React.FC<{ className?: string }>; // This will be a react-icons component
  }>;
};

export type SkillsContent = {
  title: string;
  subtitle: string;
  description: string;
  groups: SkillGroup[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  // status: "building" | "featured" | "default";
  featured: boolean;
  cover: {
    url: string;
    alt: string;
  };
  tech: Array<{
    name: string;
    icon: React.FC<{ className?: string }>;
  }>;
  links: {
    github?: string;
    live?: string;
  };
  details?: {
    challenge: string;
    solution: string;
    keyFeatures: string[];
  };
};

export type ExperienceContent = {
  title: string;
  subtitle: string;
  experiences: Experience[];
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship";
  dates: {
    start: string;
    end: string | "Present";
  };
  description: string;
  achievements: string[];
};

export type ContactContent = {
  title: string;
  subtitle: string;
  description: string;
  email: string;
  socials: {
    [key: string]: string;
  };
};
