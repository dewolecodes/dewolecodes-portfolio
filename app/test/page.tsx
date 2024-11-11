"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

// Style 1: Sleek Developer Style
export function SectionHeader1({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn("relative py-2", className, {
        "text-center": align === "center",
        "text-right": align === "right",
      })}
    >
      <div
        className={cn(
          "flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 md:gap-6",
          {
            "justify-center": align === "center",
            "justify-end": align === "right",
          },
        )}
      >
        {/* Title - Using your exact colors */}
        <span className="font-space-grotesk text-lg font-medium tracking-wide text-default-base dark:text-default-base-dark sm:text-xl md:text-2xl">
          {title}
        </span>

        {/* Gradient Line with your color scheme */}
        <div className="h-[1px] w-16 bg-gradient-to-r from-primary-base via-accent-base to-transparent dark:from-primary-base-dark dark:via-accent-base-dark sm:w-24 md:w-32" />

        {/* Description with proper color opacity */}
        <span className="font-space-grotesk text-sm tracking-wide text-primary-base dark:text-primary-base-dark sm:text-base">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

// Style 2: Developer Terminal Style
export function SectionHeader2({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn("relative py-2", className, {
        "text-center": align === "center",
        "text-right": align === "right",
      })}
    >
      <div
        className={cn("flex flex-col gap-3 sm:flex-row sm:items-center", {
          "justify-center": align === "center",
          "justify-end": align === "right",
        })}
      >
        {/* Terminal-style container */}
        <div className="group inline-flex items-center gap-3 rounded-lg border border-primary-base/20 bg-background-base/80 px-4 py-2 backdrop-blur-sm dark:border-primary-base-dark/20 dark:bg-background-base-dark/80">
          {/* Dots */}
          <div className="flex gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary-base/30 dark:bg-primary-base-dark/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-accent-base/30 dark:bg-accent-base-dark/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-secondary-base/30 dark:bg-secondary-base-dark/30" />
          </div>

          {/* Title */}
          <span className="font-space-grotesk text-lg font-medium tracking-wide text-default-base dark:text-default-base-dark sm:text-xl md:text-2xl">
            {title}
          </span>
        </div>

        {/* Comment-style description */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary-base/20 dark:bg-primary-base-dark/20 sm:w-12" />
          <span className="font-space-grotesk text-sm text-primary-base dark:text-primary-base-dark sm:text-base">
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
}

// Alternative version with different styling
export function SectionHeader2Alt({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn("relative py-2", className, {
        "text-center": align === "center",
        "text-right": align === "right",
      })}
    >
      <div
        className={cn("flex flex-col gap-3 sm:flex-row sm:items-center", {
          "justify-center": align === "center",
          "justify-end": align === "right",
        })}
      >
        {/* Code-block style title */}
        <div className="inline-flex items-center gap-4">
          <div className="font-space-grotesk text-sm text-primary-base/80 dark:text-primary-base-dark/80">
            const
          </div>
          <div className="flex items-center gap-2">
            <span className="font-space-grotesk text-lg font-medium tracking-wide text-default-base dark:text-default-base-dark sm:text-xl md:text-2xl">
              {title}
            </span>
            <span className="font-space-grotesk text-sm text-primary-base/80 dark:text-primary-base-dark/80">
              = {"{"}
            </span>
          </div>
        </div>

        {/* Variable style description */}
        <div className="flex items-center gap-3">
          <span className="font-space-grotesk text-sm text-primary-base dark:text-primary-base-dark sm:text-base">
            {subtitle}
          </span>
          <span className="font-space-grotesk text-sm text-primary-base/80 dark:text-primary-base-dark/80">
            {"}"}
          </span>
        </div>
      </div>
    </div>
  );
}

// Style 3: Modern IDE Style
export function SectionHeader3({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn("relative py-2", className, {
        "text-center": align === "center",
        "text-right": align === "right",
      })}
    >
      <div
        className={cn("flex flex-col gap-3 sm:flex-row sm:items-center", {
          "justify-center": align === "center",
          "justify-end": align === "right",
        })}
      >
        {/* File tab style container */}
        <div className="inline-flex flex-col">
          <div className="flex items-center gap-2">
            <div className="flex h-6 items-center gap-2 rounded-t-lg border-x border-t border-primary-base/20 bg-background-base px-3 dark:border-primary-base-dark/20 dark:bg-background-base-dark">
              <div className="h-1.5 w-1.5 rounded-full bg-accent-base/40 dark:bg-accent-base-dark/40" />
              <span className="font-space-grotesk text-sm text-primary-base dark:text-primary-base-dark">
                {subtitle}.tsx
              </span>
            </div>
          </div>
          <div className="flex items-baseline gap-3 rounded-b-lg rounded-tr-lg border border-primary-base/20 bg-background-base/80 px-4 py-2 dark:border-primary-base-dark/20 dark:bg-background-base-dark/80">
            <span className="font-space-grotesk text-sm text-primary-base/70 dark:text-primary-base-dark/70">
              export const
            </span>
            <span className="font-space-grotesk text-lg font-medium tracking-wide text-default-base dark:text-default-base-dark sm:text-xl md:text-2xl">
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Style 4: Git Branch Style
export function SectionHeader4({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn("relative py-2", className, {
        "text-center": align === "center",
        "text-right": align === "right",
      })}
    >
      <div
        className={cn("flex flex-col gap-3 sm:flex-row sm:items-center", {
          "justify-center": align === "center",
          "justify-end": align === "right",
        })}
      >
        {/* Branch visualization */}
        <div className="inline-flex items-center gap-3">
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-primary-base dark:text-primary-base-dark"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 3v12" />
              <circle cx="6" cy="18" r="3" />
              <path d="M6 9a9 9 0 0 0 9 9" />
              <circle cx="18" cy="18" r="3" />
            </svg>
            <span className="font-space-grotesk text-lg font-medium tracking-wide text-default-base dark:text-default-base-dark sm:text-xl md:text-2xl">
              {title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-accent-base/10 px-2 py-0.5 font-space-grotesk text-sm text-primary-base dark:bg-accent-base-dark/10 dark:text-primary-base-dark">
              main
            </span>
            <span className="font-mono text-sm text-primary-base/70 dark:text-primary-base-dark/70">
              /{" "}
            </span>
            <span className="rounded-full bg-primary-base/10 px-2 py-0.5 font-space-grotesk text-sm text-primary-base dark:bg-primary-base-dark/10 dark:text-primary-base-dark">
              {subtitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Showcase component to display all styles
export default function SectionHeadersShowcase() {
  return (
    <div className="min-h-screen space-y-16 bg-background-base p-8 dark:bg-background-base-dark">
      <h1 className="mb-12 text-center text-4xl font-bold">
        Section Header Styles
      </h1>

      <div className="space-y-24">
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">
            Style 1: Refined Developer Style
          </h2>
          <SectionHeader1
            title="Skills"
            subtitle="my tech stack"
            align="left"
          />
          <SectionHeader1
            title="Projects"
            subtitle="recent works"
            align="center"
          />
          <SectionHeader1
            title="Experience"
            subtitle="professional journey"
            align="right"
          />
        </div>
        <div className="space-y-12 bg-background-base dark:bg-background-base-dark">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-default-base dark:text-default-base-dark">
              Terminal Style
            </h3>
            <SectionHeader2
              title="Skills"
              subtitle="my tech stack"
              align="left"
            />
            <SectionHeader2
              title="Projects"
              subtitle="recent works"
              align="center"
            />
            <SectionHeader2
              title="Experience"
              subtitle="professional journey"
              align="right"
            />
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-default-base dark:text-default-base-dark">
              Code Block Style
            </h3>
            <SectionHeader2Alt
              title="Skills"
              subtitle="my tech stack"
              align="left"
            />
            <SectionHeader2Alt
              title="Projects"
              subtitle="recent works"
              align="center"
            />
            <SectionHeader2Alt
              title="Experience"
              subtitle="professional journey"
              align="right"
            />
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-default-base dark:text-default-base-dark">
              IDE Style
            </h3>
            <SectionHeader3 title="Skills" subtitle="tech-stack" align="left" />
            <SectionHeader3 title="Projects" subtitle="works" align="center" />
            <SectionHeader3
              title="Experience"
              subtitle="journey"
              align="right"
            />
          </div>

          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-default-base dark:text-default-base-dark">
              Git Branch Style
            </h3>
            <SectionHeader4 title="Skills" subtitle="tech-stack" align="left" />
            <SectionHeader4 title="Projects" subtitle="works" align="center" />
            <SectionHeader4
              title="Experience"
              subtitle="journey"
              align="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
