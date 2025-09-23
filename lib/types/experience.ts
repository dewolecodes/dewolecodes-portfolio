import { BaseSection } from "@/lib/types/common";

export type Experience = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship" | "Learning";
  dates: {
    start: string;
    end: string | "Present";
  };
  description: string;
  achievements: string[];
  current: boolean;
};

export type ExperienceContent = BaseSection & {
  experiences: Array<Experience>;
};
