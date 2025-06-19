"use client";

import { usePathname } from "next/navigation";
import { NavItem } from "../lib/types";

export function useSmartNavigation() {
  const pathname = usePathname();

  const getNavigationHref = (item: NavItem): string => {
    // If we're on the home page, use anchor links
    if (pathname === "/") {
      return item.homeHref;
    }

    // If we're on any other page (like blog), use full routes to go back to home
    if (item.name === "Blog") {
      return item.href; // Blog should always go to /blog
    }

    return item.fullHref; // Use full href to navigate back to home page sections
  };

  const isHomePage = pathname === "/";
  const isBlogPage = pathname.startsWith("/blog");

  return {
    getNavigationHref,
    pathname,
    isHomePage,
    isBlogPage,
  };
}
