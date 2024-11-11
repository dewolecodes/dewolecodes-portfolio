"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { navigationItems } from "@/lib/data";
import { RiCodeSSlashLine, RiArrowUpLine } from "react-icons/ri";

export function Footer() {
  return (
    <footer className="relative mt-8 border-t border-primary-base/20 bg-gradient-to-b from-background-base/50 to-background-base/80 py-12 backdrop-blur-sm dark:border-primary-base-dark/10 dark:from-background-base-dark/50 dark:to-background-base-dark/80">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute right-8 top-3 -translate-y-1/2 rounded-xl border border-primary-base/10 bg-background-base/80 p-3 text-primary-base backdrop-blur-sm transition-colors hover:border-primary-base/20 hover:text-accent-base dark:border-primary-base-dark/10 dark:bg-background-base-dark/80 dark:text-primary-base-dark dark:hover:border-primary-base-dark/20 dark:hover:text-accent-base-dark"
      >
        <RiArrowUpLine className="h-5 w-5" />
      </motion.button>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-3">
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
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:justify-end">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-default-base transition-colors hover:text-accent-base dark:text-default-base-dark dark:hover:text-accent-base-dark"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-primary-base/5 pt-8 text-sm dark:border-primary-base-dark/5 md:flex-row">
          {/* Developer signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm"
          >
            <span className="text-primary-base-dark">
              &copy; {new Date().getFullYear()}
            </span>{" "}
            <span className="text-default-base dark:text-default-base-dark/60">
              All rights reserved
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
