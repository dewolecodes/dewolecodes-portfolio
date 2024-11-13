import type { Metadata, Viewport } from "next";
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
  title: {
    default: "Nabeel Hassan | Frontend Developer",
    template: "%s | Nabeel's Portfolio",
  },
  description:
    "Hey, I’m Nabeel! Welcome to my portfolio, I'm a Frontend Developer specializing in React, Next.js, and modern web technologies. Building innovative web solutions with clean, efficient code.",
  keywords: [
    "Nabeel Hassan",
    "Nabeel",
    "Hassan",
    "Hassan Umar Hassan",
    "Portfolio",
    "Web Developer",
    "Web Designer",
    "Software Engineer",
    "Software Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
  ],
  authors: {
    name: "Nabeel Hassan",
    url: "https://nabeelhassan.dev",
  },
  creator: "Nabeel Hassan",
  publisher: "Nabeel Hassan",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.svg",
        color: "#71a295",
      },
    ],
  },
  metadataBase: new URL("https://nabeelhassan.dev"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Nabeel Hassan | Frontend Developer",
    description:
      "Hey, I’m Nabeel! Welcome to my portfolio, I'm a Frontend Developer specializing in React, Next.js, and modern web technologies. Building innovative web solutions with clean, efficient code.",
    url: "https://nabeelhassan.dev",
    siteName: "Nabeel Hassan | Frontend Developer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Nabeel Hassan - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabeel Hassan | Frontend Developer",
    description:
      "Hey, I’m Nabeel! Welcome to my portfolio, I'm a Frontend Developer specializing in React, Next.js, and modern web technologies. Building innovative web solutions with clean, efficient code.",
    creator: "@nabeelhassan_",
    images: ["/twitter-image.png"],
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification", // Optional
    me: ["nabeelhassan.dev", "mailto:hassanhauda@gmail.com"],
  },
  category: "portfolio",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f6f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1714" },
  ],
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
            defaultTheme="system"
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
