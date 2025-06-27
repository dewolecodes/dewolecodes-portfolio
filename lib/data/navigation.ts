import { NavItem, BlogNavItem } from "../types";

export const navigationItems: NavItem[] = [
  {
    name: "About",
    href: "#about",
    homeHref: "#about",
    fullHref: "/#about",
    label: "About section",
  },
  {
    name: "Projects",
    href: "#projects",
    homeHref: "#projects",
    fullHref: "/#projects",
    label: "Projects section",
  },
  {
    name: "Skills",
    href: "#skills",
    homeHref: "#skills",
    fullHref: "/#skills",
    label: "Skills section",
  },
  {
    name: "Experience",
    href: "#experience",
    homeHref: "#experience",
    fullHref: "/#experience",
    label: "Experience section",
  },
  {
    name: "Blog",
    href: "/blog",
    homeHref: "/blog",
    fullHref: "/blog",
    label: "Blog page",
  },
  {
    name: "Contact me",
    href: "#contact",
    homeHref: "#contact",
    fullHref: "/#contact",
    label: "Contact section",
  },
] as const;

export const blogNavigationItems: BlogNavItem[] = [
  {
    name: "All Posts",
    href: "/blog",
    homeHref: "/blog",
    fullHref: "/blog",
    label: "All blog posts",
  },
  {
    name: "About Me",
    href: "/#about",
    homeHref: "/#about",
    fullHref: "/#about",
    label: "About the author",
  },
  {
    name: "Contact Me",
    href: "/#contact",
    homeHref: "/#contact",
    fullHref: "/#contact",
    label: "Contact section",
  },
] as const;
