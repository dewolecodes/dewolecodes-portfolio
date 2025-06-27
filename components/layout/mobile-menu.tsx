"use client";

import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "@/lib/data";
import { useSmartNavigation } from "@/hooks/use-smart-navigation";
import { useActiveSectionContext } from "@/contexts/active-section-context";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { NavItem } from "@/lib/types";

interface MobileMenuProps {
  isOpen: boolean;
  isScrolled: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, isScrolled, onClose }: MobileMenuProps) {
  const { getNavigationHref, isBlogPage } = useSmartNavigation();
  const { activeSection } = useActiveSectionContext();

  // Function to determine if a nav item is active
  const isItemActive = (itemName: string) => {
    if (isBlogPage) {
      return itemName === "Blog";
    }
    return activeSection.toLowerCase() === itemName.toLowerCase();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background-base/60 backdrop-blur-[2px] dark:bg-background-base-dark/60"
            onClick={onClose}
          />

          {/* Menu Container */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 right-0 top-0 z-50 mt-[80px]"
          >
            <motion.div
              initial={false}
              animate={{
                width: isScrolled ? "95%" : "100%",
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className={cn(
                "mx-auto rounded-lg bg-background-base/95 p-4 shadow-lg backdrop-blur-md dark:bg-background-base-dark/95",
                isScrolled &&
                  "border border-primary-base/30 dark:border-primary-base-dark/20",
              )}
            >
              <nav className="max-w-lg">
                <div className="flex flex-col space-y-6">
                  {navigationItems.map((item: NavItem, i: number) => {
                    const isBlog = item.name === "Blog";
                    const isContact = item.name === "Contact me";
                    const isActive = isItemActive(item.name);

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: i * 0.05,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={getNavigationHref(item)}
                          onClick={onClose}
                          className={cn(
                            "group relative flex w-fit items-center text-lg transition-all duration-200",
                            // Blog specific styles
                            isBlog &&
                              "rounded-lg border border-primary-base/10 bg-primary-base/[0.1] px-4 py-2 hover:border-primary-base/20 hover:bg-primary-base/[0.15] dark:border-primary-base-dark/10 dark:bg-primary-base-dark/[0.1] dark:hover:border-primary-base-dark/20 dark:hover:bg-primary-base-dark/[0.15]",
                            // Contact button styles
                            isContact && [
                              "cursor-pointer rounded-lg px-5 py-2.5 text-center text-base shadow-lg transition-all duration-200",
                              isActive
                                ? "bg-primary-base text-white shadow-primary-base/30 dark:bg-primary-base-dark dark:text-white dark:shadow-primary-base-dark/30"
                                : "bg-secondary-base text-default-base shadow-secondary-base/20 hover:bg-primary-base hover:text-white hover:shadow-xl dark:bg-secondary-base-dark dark:text-default-base-dark dark:shadow-secondary-base-dark/20 dark:hover:bg-primary-base-dark dark:hover:text-white",
                            ],
                            // Regular nav item text colors
                            !isContact && [
                              isActive
                                ? "text-primary-base dark:text-accent-base-dark"
                                : "text-default-base/70 hover:text-accent-base dark:text-default-base-dark/70 dark:hover:text-accent-base-dark",
                            ],
                          )}
                        >
                          <span className="relative">
                            {item.name}
                            {!isBlog && !isContact && isActive && (
                              <motion.span
                                layoutId="main-mobile-active-indicator"
                                className="absolute -bottom-1 left-0 right-0 h-0.5 w-full bg-primary-base dark:bg-primary-base-dark"
                                initial={false}
                                transition={{
                                  type: "spring",
                                  stiffness: 380,
                                  damping: 30,
                                }}
                              />
                            )}
                          </span>
                          {isBlog && (
                            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </nav>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
