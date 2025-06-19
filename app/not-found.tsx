import { NotFoundPage } from "@/components/layout/not-found-page";

export const metadata = {
  title: "404 - Page Not Found",
  description:
    "The page you're looking for doesn't exist. Browse my portfolio or read my latest blog posts.",
};

export default function NotFound() {
  return (
    <NotFoundPage
      context="portfolio"
      errorMessage="Page not found"
      title="Oops! Page Not Found"
      description="The page you're looking for doesn't exist or may have been moved."
      actions={[
        {
          href: "/",
          label: "Back to Portfolio",
          iconName: "home",
          variant: "primary",
        },
        {
          href: "/blog",
          label: "Browse Blog",
          iconName: "arrowLeft",
          variant: "secondary",
        },
      ]}
      suggestions={[
        "Check the URL for typos",
        "Browse my portfolio and projects",
        "Read my latest blog posts",
        "Get in touch via the contact section",
      ]}
    />
  );
}
