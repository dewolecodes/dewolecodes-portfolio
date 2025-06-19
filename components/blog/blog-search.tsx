"use client";

import { Search, Tag, X } from "lucide-react";
import { motion } from "framer-motion";

interface BlogSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  allTags: string[];
  clearFilters: () => void;
  resultsCount: number;
}

export function BlogSearch({
  searchQuery,
  setSearchQuery,
  selectedTag,
  setSelectedTag,
  allTags,
  clearFilters,
  resultsCount,
}: BlogSearchProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mb-12 space-y-6"
    >
      {/* Search Bar */}
      <div className="relative max-w-md">
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          <Search className="h-4 w-4 text-primary-base/60 dark:text-primary-base-dark/60" />
        </div>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-primary-base/20 bg-background-base/60 py-3 pl-10 pr-10 text-default-base backdrop-blur-sm transition-all placeholder:text-primary-base/60 focus:border-accent-base focus:outline-none focus:ring-2 focus:ring-accent-base/20 dark:border-primary-base-dark/20 dark:bg-background-base-dark/60 dark:text-default-base-dark dark:placeholder:text-primary-base-dark/60 dark:focus:border-accent-base-dark dark:focus:ring-accent-base-dark/20"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-base/60 transition-colors hover:text-accent-base dark:text-primary-base-dark/60 dark:hover:text-accent-base-dark"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Tag Filter */}
      {allTags.length > 0 && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 font-mono text-sm text-primary-base dark:text-primary-base-dark">
              <Tag className="h-4 w-4" />
              <span>Topics:</span>
            </div>

            {/* All Button */}
            <button
              onClick={() => setSelectedTag("")}
              className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-all ${
                !selectedTag
                  ? "bg-accent-base text-white shadow-lg dark:bg-accent-base-dark"
                  : "bg-primary-base/10 text-primary-base hover:bg-accent-base/20 dark:bg-primary-base-dark/10 dark:text-primary-base-dark dark:hover:bg-accent-base-dark/20"
              }`}
            >
              All
            </button>

            {/* Tag Buttons */}
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)}
                className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-all ${
                  selectedTag === tag
                    ? "bg-accent-base text-white shadow-lg dark:bg-accent-base-dark"
                    : "bg-primary-base/10 text-primary-base hover:bg-accent-base/20 dark:bg-primary-base-dark/10 dark:text-primary-base-dark dark:hover:bg-accent-base-dark/20"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Clear all filters and results count */}
          {(searchQuery || selectedTag) && (
            <div className="flex items-center gap-3">
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-1.5 text-xs text-red-600 transition-colors hover:bg-red-500/20 dark:text-red-400"
              >
                <X className="h-3 w-3" />
                Clear all filters
              </button>

              {/* Results count */}
              <div className="font-mono text-sm text-primary-base/70 dark:text-primary-base-dark/70">
                {resultsCount} post{resultsCount !== 1 ? "s" : ""} found
                {searchQuery && ` for "${searchQuery}"`}
                {selectedTag && ` in "${selectedTag}"`}
              </div>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
