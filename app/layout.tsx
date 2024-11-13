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
  title: {
    default: "Nabeel Hassan | Frontend Developer",
    template: "%s | Nabeel's Portfolio",
  },
  description:
    "Hey, I’m Nabeel! Welcome to my portfolio, where I showcase innovative web development projects built with tools like React, Next.js, and more. Dive in to explore my work, highlighting the skills and creativity that drive my passion for building high-quality digital solutions.",
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
  creator: "Nabeel Hassan",
  publisher: "Nabeel Hassan",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
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
      "Hey, I’m Nabeel! Welcome to my portfolio, where I showcase innovative web development projects built with tools like React, Next.js, and more. Dive in to explore my work, highlighting the skills and creativity that drive my passion for building high-quality digital solutions.",
    url: "https://nabeelhassan.dev",
    siteName: "Nabeel Hassan | Frontend Developer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Make sure to add this image in your public folder
        width: 1200,
        height: 630,
        alt: "Nabeel's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabeel Hassan | Frontend Developer",
    description:
      "Hey, I’m Nabeel! Welcome to my portfolio, where I showcase innovative web development projects built with tools like React, Next.js, and more. Dive in to explore my work, highlighting the skills and creativity that drive my passion for building high-quality digital solutions.",
    creator: "@nabeelhassan_", // Replace with your Twitter handle
    images: ["/twitter-image.png"], // Make sure to add this image in your public folder
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  verification: {
    google: "your-google-site-verification", // Replace with your Google verification code
    yandex: "your-yandex-verification", // Optional
    me: ["nabeelhassan.dev", "mailto:hassanhauda@gmail.com"], // Replace with your email
  },
  category: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
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
