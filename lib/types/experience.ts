import { BaseSection } from "./common";

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
  current: boolean;
};

export type ExperienceContent = BaseSection & {
  experiences: Array<Experience>;
};
