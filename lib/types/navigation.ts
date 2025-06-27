import { SectionName } from "./common";

export type NavItem = {
  name: Capitalize<SectionName>;
  href: string;
  homeHref: string;
  fullHref: string;
  label?: string;
};

export type BlogNavItem = {
  name: "All Posts" | "About Me" | "Contact Me";
  href: string;
  homeHref: string;
  fullHref: string;
  label?: string;
};
