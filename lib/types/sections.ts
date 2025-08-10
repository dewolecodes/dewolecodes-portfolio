import { LucideIcon } from "lucide-react";
import { BaseSection, Icon, TerminalInfo } from "@/lib/types/common";

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

export type AboutContent = BaseSection & {
  image: {
    src: string;
    alt: string;
  };
  description: {
    details: string[];
  };
  interests: Array<{
    type: string;
    items: string[];
  }>;
};

export type SkillGroup = {
  title: string;
  skills: Array<{
    name: string;
    icon: Icon;
  }>;
};

export type SkillsContent = BaseSection & {
  terminalInfo: TerminalInfo;
  groups: SkillGroup[];
};

export type ContactContent = BaseSection & {
  description: string;
  email: string;
  socials: {
    [key: string]: string;
  };
};

// Testimonials
export type Testimonial = {
  id: string;
  quote: string;
  author: {
    name: string;
    role?: string;
    company?: string;
    avatarUrl?: string;
  };
};

export type TestimonialsContent = BaseSection & {
  terminalInfo: TerminalInfo;
  items: Testimonial[];
};
