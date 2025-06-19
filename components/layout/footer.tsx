"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { navigationItems } from "@/lib/data";
import { RiCodeSSlashLine } from "react-icons/ri";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Trigger initial animation after a small delay
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const footerVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.footer
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={footerVariants}
      className="relative z-10 mt-8 border-t border-primary-base/40 bg-gradient-to-b from-background-base/50 to-background-base/80 py-12 backdrop-blur-sm dark:border-primary-base-dark/20 dark:from-background-base-dark/50 dark:to-background-base-dark/80"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1.2px,transparent_1px),linear-gradient(to_bottom,#80808012_1.2px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <motion.div
            custom={0}
            variants={contentVariants}
            className="flex items-center gap-3"
          >
            <Link href="/" className="flex items-center gap-3">
              {/* Light mode logo */}
              <div className="relative h-[35px] w-[35px] dark:hidden">
                <Image
                  src="/images/light-logo.png"
                  alt="Personal logo"
                  fill
                  sizes="(max-width: 30px) 100vw, 30px"
                  className="object-contain"
                />
              </div>
              {/* Dark mode logo */}
              <div className="relative hidden h-[35px] w-[35px] dark:block">
                <Image
                  src="/images/dark-logo.png"
                  alt="Personal logo"
                  fill
                  sizes="(max-width: 30px) 100vw, 30px"
                  className="object-contain"
                />
              </div>
            </Link>
          </motion.div>

          {/* Navigation */}
          <motion.div
            custom={1}
            variants={contentVariants}
            className="flex flex-wrap items-center justify-center gap-6 text-sm md:justify-end"
          >
            {navigationItems.map((item) => {
              const isBlog = item.name === "Blog";
              return (
                <Link
                  key={item.name}
                  href={item.fullHref}
                  className={cn(
                    "group inline-flex items-center text-default-base transition-colors hover:text-accent-base dark:text-default-base-dark dark:hover:text-accent-base-dark",
                    isBlog &&
                      "group flex items-center gap-1 rounded-full border border-primary-base/10 bg-primary-base/[0.1] px-3 py-1 transition-colors hover:border-primary-base/20 hover:bg-primary-base/[0.15] dark:border-primary-base-dark/10 dark:bg-primary-base-dark/[0.1] dark:hover:border-primary-base-dark/20 dark:hover:bg-primary-base-dark/[0.15]",
                  )}
                >
                  <span className="relative top-[1px]">{item.name}</span>
                  {isBlog && (
                    <ArrowUpRight className="relative h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  )}
                </Link>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-primary-base/5 pt-8 text-sm dark:border-primary-base-dark/5 md:flex-row">
          {/* Developer signature */}
          <motion.div
            custom={2}
            variants={contentVariants}
            className="flex items-center gap-2"
          >
            <RiCodeSSlashLine className="h-4 w-4 text-primary-base dark:text-primary-base-dark" />
            <span className="text-default-base dark:text-default-base-dark">
              Design & Development by{" "}
              <Link
                href="https://github.com/NabsCodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-base-dark transition-colors hover:text-accent-base dark:hover:text-accent-base-dark"
              >
                Hassan Umar Hassan
              </Link>
            </span>
          </motion.div>

          {/* Copyright */}
          <motion.div custom={3} variants={contentVariants} className="text-sm">
            <span className="text-primary-base-dark">
              &copy; {new Date().getFullYear()}
            </span>{" "}
            <span className="text-default-base dark:text-default-base-dark/90">
              All rights reserved
            </span>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
