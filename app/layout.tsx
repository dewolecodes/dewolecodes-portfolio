import type { Metadata, Viewport } from "next";
import { Raleway, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/contexts/theme-provider";
import "./globals.css";
import ActiveSectionContextProvider from "@/contexts/active-section-context";
import { ToastProvider } from "@/contexts/toast-context";
import { SparklesBackground } from "@/components/layout/sparkles-background";
import { cn } from "@/lib/utils";
import { AnalyticsProviders } from "@/app/_providers";

// Raleway for body text
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
});

// Space Grotesk for headings
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  // Basic
  title: {
    default: "Akinbola Abdulrahmon Adewole | Web Developer",
    template: "%s | Akinbola Abdulrahmon",
  },
  description:
    "Hey, I'm Dewole! A Web Developer specialized in building modern web applications with React, Next.js, and TypeScript. Crafting responsive, user-centric solutions with clean code and optimal performance.",
  metadataBase: new URL("https://dewolecodes-portfolio.vercel.app/"),
  applicationName: "Dewole Portfolio",

  // Keywords and Categories
  keywords: [
    "Dewole",
    "Codes",
    "Dewole Codes",
    "Akinbola Abdulrahmon",
    "Akinbola Abdulrahmon Adewole",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "UI Developer",
    "JavaScript Developer",
    "Full Stack Developer",
    "Software Developer",
    "Software Engineer",
    "Node.js Developer",
    "Web Development Portfolio",
    "React Portfolio",
    "Frontend Portfolio",
    "Modern Web Development",
    "Web Designer",
    "UI/UX Development",
    "Portfolio",
  ],
  category: "portfolio",

  // Creator Info
  authors: [
    {
      name: "Akinbola Abdulrahmon",
      url: "https://dewolecodes-portfolio.vercel.app/",
    },
  ],
  creator: "Akinbola Abdulrahmon",
  publisher: "Akinbola Abdulrahmon",

  // Verification
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      me: [
        "https://github.com/dewolecodes",
        "https://www.linkedin.com/in/akinbola-abdulrahmon-0b7828274/",
      ],
    },
  },

  // Alternate Languages/Versions
  alternates: {
    canonical: "https://dewolecodes-portfolio.vercel.app/",
    languages: {
      "en-US": "https://dewolecodes-portfolio.vercel.app/",
    },
  },

  // OpenGraph
  openGraph: {
    type: "website",
    siteName: "Akinbola Abdulrahmon Portfolio",
    title: "Akinbola Abdulrahmon | Web Developer",
    description:
      "Hey, I'm Dewole Codes! A Web Developer specialized in building modern web applications with React, Next.js, and TypeScript.",
    url: "https://dewolecodes-portfolio.vercel.app/",
    locale: "en_US",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Akinbola Abdulrahmon | Web Developer",
    description:
      "Web Developer specialized in building modern web applications with React, Next.js, and TypeScript.",
    creator: "@dewolecodes_",
    site: "@dewolecodes_",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Other Important SEO Tags
  referrer: "origin-when-cross-origin",
  classification: "Portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f6f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1714" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  interactiveWidget: "resizes-visual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={cn(
          raleway.variable,
          spaceGrotesk.variable,
          "bg-background-base font-raleway text-default-base selection:bg-primary-base/30 dark:bg-background-base-dark dark:text-default-base-dark dark:selection:bg-primary-base-dark/40",
        )}
      >
        <AnalyticsProviders>
          <ToastProvider>
            <ActiveSectionContextProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <SparklesBackground />
                {children}
              </ThemeProvider>
            </ActiveSectionContextProvider>
          </ToastProvider>
        </AnalyticsProviders>
      </body>
    </html>
  );
}
