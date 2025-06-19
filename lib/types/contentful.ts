import { Document } from "@contentful/rich-text-types";
import { Asset, Entry, EntrySkeletonType } from "contentful";

// Author content type
export interface AuthorSkeleton extends EntrySkeletonType {
  contentTypeId: "author";
  fields: {
    name: string;
    bio?: string;
    avatar?: Asset;
    website?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export type AuthorEntry = Entry<AuthorSkeleton>;

// Blog post content type
export interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: "blogPost";
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: Document;
    featuredImage?: Asset;
    author: AuthorEntry;
    tags?: string[];
    publishedDate: string;
    readingTime?: number;
    seo?: {
      metaTitle?: string;
      metaDescription?: string;
    };
  };
}

export type BlogPostEntry = Entry<BlogPostSkeleton>;

// Category content type (optional)
export interface CategorySkeleton extends EntrySkeletonType {
  contentTypeId: "category";
  fields: {
    name: string;
    slug: string;
    description?: string;
  };
}

export type CategoryEntry = Entry<CategorySkeleton>;

// Type guards for better type safety
export const isBlogPost = (
  entry: Entry<EntrySkeletonType>,
): entry is BlogPostEntry => {
  return entry.sys.contentType.sys.id === "blogPost";
};

export const isAuthor = (
  entry: Entry<EntrySkeletonType>,
): entry is AuthorEntry => {
  return entry.sys.contentType.sys.id === "author";
};
