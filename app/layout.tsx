import type { Metadata } from "next";
import { Raleway, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";

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
  title: "Nabeel's Portfolio | Frontend Developer",
  description:
    "Explore Nabeel's portfolio showcasing innovative web development and design projects. Discover skills in React, Next.js, and UI/UX design.",
  keywords: [
    "Nabeel",
    "portfolio",
    "web developer",
    "web designer",
    "Software Engineer",
    "Software Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: {
    name: "Nabeel",
    url: "https://nabeelhassan.dev",
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={`${raleway.variable} ${spaceGrotesk.variable} bg-background-base font-raleway text-default-base selection:bg-primary-base/30 dark:bg-background-base-dark dark:text-default-base-dark dark:selection:bg-primary-base-dark/40`}
      >
        <ActiveSectionContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
