"use client";

import Link from "next/link";
import { Home, ArrowLeft, Search, FileText } from "lucide-react";

interface ActionButton {
  href: string;
  label: string;
  iconName: string;
  variant: "primary" | "secondary";
}

interface NotFoundPageProps {
  /** Context for the terminal breadcrumb (e.g., "blog", "error") */
  context: string;
  /** Specific error message for breadcrumb (e.g., "Post not found", "Page not found") */
  errorMessage: string;
  /** Main heading text */
  title: string;
  /** Description paragraph */
  description: string;
  /** Action buttons to display */
  actions: ActionButton[];
  /** List of helpful suggestions for the user */
  suggestions: string[];
}

// Icon mapping function
const getIcon = (iconName: string) => {
  const icons = {
    home: Home,
    arrowLeft: ArrowLeft,
    search: Search,
    fileText: FileText,
  };
  return icons[iconName as keyof typeof icons] || Home;
};

export function NotFoundPage({
  context,
  errorMessage,
  title,
  description,
  actions,
  suggestions,
}: NotFoundPageProps) {
  return (
    <main className="relative mx-auto w-full max-w-7xl px-4 py-12 pt-24 sm:pt-28 md:pt-32 lg:pt-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-8">
          {/* Terminal-style error code */}
          <div className="mb-6 font-mono text-6xl font-bold text-primary-base/20 dark:text-primary-base-dark/20 md:text-8xl">
            404
          </div>

          {/* Terminal-style breadcrumb */}
          <div className="mb-6 font-mono text-sm">
            <span className="text-accent-base dark:text-accent-base-dark">
              {context}
            </span>
            <span className="ml-2 text-primary-base/70 dark:text-primary-base-dark/70">
              {">"}
            </span>
            <span className="ml-2 text-default-base dark:text-default-base-dark">
              {errorMessage}
            </span>
          </div>

          <h1 className="mb-6 font-raleway text-3xl font-bold text-default-base dark:text-default-base-dark md:text-4xl">
            {title}
            <span className="text-accent-base dark:text-accent-base-dark">
              .
            </span>
          </h1>

          <p className="mb-8 text-lg text-primary-base dark:text-primary-base-dark">
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            {actions.map((action, index) => {
              const Icon = getIcon(action.iconName);
              const isPrimary = action.variant === "primary";

              return (
                <Link
                  key={index}
                  href={action.href}
                  className={
                    isPrimary
                      ? "inline-flex items-center gap-2 rounded-lg bg-accent-base px-6 py-3 text-white transition-all duration-200 hover:bg-accent-base/90 motion-safe:hover:scale-105 dark:bg-accent-base-dark dark:hover:bg-accent-base-dark/90"
                      : "inline-flex items-center gap-2 rounded-lg border border-primary-base/20 bg-background-base/60 px-6 py-3 text-default-base backdrop-blur-sm transition-all duration-200 hover:bg-background-base/80 motion-safe:hover:scale-105 dark:border-primary-base-dark/20 dark:bg-background-base-dark/60 dark:text-default-base-dark dark:hover:bg-background-base-dark/80"
                  }
                >
                  <Icon className="h-4 w-4" />
                  {action.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Suggestions */}
        <div className="mt-12 rounded-lg border border-primary-base/20 bg-background-base/60 p-6 backdrop-blur-sm dark:border-primary-base-dark/20 dark:bg-background-base-dark/60">
          <h3 className="mb-3 font-space-grotesk text-lg font-semibold text-default-base dark:text-default-base-dark">
            What you can do:
          </h3>

          <ul className="space-y-2 text-sm text-primary-base dark:text-primary-base-dark">
            {suggestions.map((suggestion, index) => (
              <li key={index}>• {suggestion}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
