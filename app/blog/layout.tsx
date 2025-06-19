import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Nabeel Hassan Blog",
    default: "Blog | Nabeel Hassan",
  },
  description:
    "Personal blog sharing development insights, experiences, and learnings",
  openGraph: {
    title: "Blog | Nabeel Hassan",
    description:
      "Personal blog sharing development insights, experiences, and learnings",
    type: "website",
  },
};

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-background-base dark:bg-background-base-dark">
      {children}
    </div>
  );
}
