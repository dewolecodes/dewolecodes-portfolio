"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { BlogPost } from "@/lib/types/blog";
import { BlogMarkdown } from "@/components/blog/blog-markdown";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="mx-auto">
      <article className="relative">
        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Terminal-style breadcrumb */}
          <div className="mb-6 font-mono text-sm">
            <Link
              href="/blog"
              className="text-accent-base hover:text-accent-base/80 dark:text-accent-base-dark dark:hover:text-accent-base-dark/80"
            >
              blog
            </Link>
            <span className="ml-2 text-primary-base/70 dark:text-primary-base-dark/70">
              {">"}
            </span>
            <span className="ml-2 text-default-base dark:text-default-base-dark">
              {post.slug}
            </span>
          </div>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center rounded-md bg-accent-base/10 px-2 py-1 text-xs font-medium text-accent-base ring-1 ring-inset ring-accent-base/20 dark:bg-accent-base-dark/10 dark:text-accent-base-dark dark:ring-accent-base-dark/20">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 font-raleway text-4xl font-bold text-default-base dark:text-default-base-dark md:text-5xl">
            {post.title}
            <span className="text-accent-base dark:text-accent-base-dark">
              .
            </span>
          </h1>

          {/* Excerpt */}
          <p className="mb-8 text-xl text-primary-base dark:text-primary-base-dark">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-primary-base dark:text-primary-base-dark">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-md bg-primary-base/10 px-2 py-1 text-xs font-medium text-primary-base dark:bg-primary-base-dark/10 dark:text-primary-base-dark"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-lg border border-primary-base/20 bg-background-base/60 p-8 backdrop-blur-sm dark:border-primary-base-dark/20 dark:bg-background-base-dark/60 lg:px-12"
        >
          <BlogMarkdown content={post.content} />
        </motion.div>

        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 border-t border-primary-base/20 pt-8 dark:border-primary-base-dark/20"
        >
          {/* Next/Previous Post Navigation */}
          <div className="mb-8 flex justify-between gap-4">
            <div className="flex-1">
              {/* TODO: Add previous post logic */}
              {/* <Link 
                href={`/blog/${previousPost?.slug}`}
                className="block rounded-lg border border-primary-base/20 p-4 transition-colors hover:bg-secondary-base/50 dark:border-primary-base-dark/20 dark:hover:bg-secondary-base-dark/50"
              >
                <span className="text-sm text-primary-base dark:text-primary-base-dark">Previous</span>
                <h3 className="font-medium text-default-base dark:text-default-base-dark">{previousPost?.title}</h3>
              </Link> */}
            </div>
            <div className="flex-1 text-right">
              {/* TODO: Add next post logic */}
              {/* <Link 
                href={`/blog/${nextPost?.slug}`}
                className="block rounded-lg border border-primary-base/20 p-4 transition-colors hover:bg-secondary-base/50 dark:border-primary-base-dark/20 dark:hover:bg-secondary-base-dark/50"
              >
                <span className="text-sm text-primary-base dark:text-primary-base-dark">Next</span>
                <h3 className="font-medium text-default-base dark:text-default-base-dark">{nextPost?.title}</h3>
              </Link> */}
            </div>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent-base transition-colors hover:text-accent-base/80 dark:text-accent-base-dark dark:hover:text-accent-base-dark/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>
        </motion.div>
      </article>
    </div>
  );
}
