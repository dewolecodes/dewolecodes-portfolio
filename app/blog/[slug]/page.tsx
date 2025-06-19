"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/data/blog-data";
import { BlogPost } from "@/lib/types/blog";
import { Footer } from "@/components/layout/footer";
import { BlogHeader } from "@/components/blog/blog-header";
import { BlogPostContent } from "@/components/blog/blog-post-content";
import { BlogLoading } from "@/components/blog/blog-loading";
import { use } from "react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundPost = getPostBySlug(resolvedParams.slug);
    if (!foundPost) {
      notFound();
    }
    setPost(foundPost);
    setIsLoading(false);
  }, [resolvedParams.slug]);

  if (isLoading) {
    return <BlogLoading />;
  }

  if (!post) {
    return notFound();
  }

  return (
    <>
      {/* Blog Header with Reading Progress */}
      <BlogHeader showProgress={true} />

      {/* Main Content */}
      <main className="relative mx-auto w-full max-w-4xl px-4 py-12 pt-24 sm:pt-28 md:pt-32 lg:pt-24">
        <BlogPostContent post={post} />
      </main>

      <Footer />
    </>
  );
}
