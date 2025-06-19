import { NotFoundPage } from "@/components/layout/not-found-page";

export const metadata = {
  title: "404 - Blog Post Not Found",
  description:
    "The blog post you're looking for doesn't exist. Browse all blog posts or explore my portfolio.",
};

export default function BlogNotFound() {
  return (
    <NotFoundPage
      context="blog"
      errorMessage="Post not found"
      title="Blog Post Not Found"
      description="The blog post you're looking for doesn't exist or may have been moved."
      actions={[
        {
          href: "/blog",
          label: "Back to Blog",
          iconName: "arrowLeft",
          variant: "primary",
        },
        {
          href: "/",
          label: "Portfolio",
          iconName: "home",
          variant: "secondary",
        },
      ]}
      suggestions={[
        "Check the URL for typos",
        "Browse all blog posts from the main blog page",
        "Use the search functionality to find specific topics",
        "Explore my portfolio and other projects",
      ]}
    />
  );
}
