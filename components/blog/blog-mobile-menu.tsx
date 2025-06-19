"use client";

import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "@/lib/data";
import { useSmartNavigation } from "@/hooks/use-smart-navigation";
import { useActiveSectionContext } from "@/contexts/active-section-context";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface BlogMobileMenuProps {
  isOpen: boolean;
  isScrolled: boolean;
  onClose: () => void;
}

export function BlogMobileMenu({
  isOpen,
  isScrolled,
  onClose,
}: BlogMobileMenuProps) {
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
                "mx-auto overflow-hidden rounded-lg bg-background-base/95 p-6 shadow-lg backdrop-blur-md dark:bg-background-base-dark/95",
                isScrolled &&
                  "border border-primary-base/30 dark:border-primary-base-dark/20",
              )}
            >
              <nav className="max-w-lg">
                <div className="flex flex-col space-y-6">
                  {navigationItems.map((item, i) => {
                    const isBlog = item.name === "Blog";
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
                            "group relative flex w-fit items-center text-lg transition-colors",
                            isBlog &&
                              "rounded-full border border-primary-base/10 bg-primary-base/[0.1] px-4 py-2 transition-colors hover:border-primary-base/20 hover:bg-primary-base/[0.15] dark:border-primary-base-dark/10 dark:bg-primary-base-dark/[0.1] dark:hover:border-primary-base-dark/20 dark:hover:bg-primary-base-dark/[0.15]",
                            isItemActive(item.name)
                              ? "text-primary-base dark:text-accent-base-dark"
                              : "text-default-base/70 hover:text-accent-base dark:text-default-base-dark/70 dark:hover:text-accent-base-dark",
                          )}
                        >
                          <span className="relative">
                            {item.name}
                            {!isBlog && isItemActive(item.name) && (
                              <motion.span
                                layoutId="mobile-active-indicator"
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

                  {/* Portfolio Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.05,
                      ease: "easeOut",
                    }}
                    className="pt-2"
                  >
                    <Link
                      href="/"
                      onClick={onClose}
                      className="inline-block rounded-lg bg-primary-base px-5 py-2.5 text-sm text-white shadow-lg transition-colors hover:bg-primary-base/90 dark:bg-primary-base-dark dark:hover:bg-primary-base-dark/90"
                    >
                      Portfolio
                    </Link>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
