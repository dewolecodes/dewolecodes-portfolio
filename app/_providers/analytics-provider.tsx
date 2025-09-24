"use client";

import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/integrations/google-analytics";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  // Use the environment variable if present; otherwise default to the
  // measurement ID the user requested we install.
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-QGHB3FYZCK";
  // const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY; // For future PostHog integration

  return (
    <>
      {/* Google Analytics */}
      {gaId && <GoogleAnalytics GA_MEASUREMENT_ID={gaId} />}

      {/* Content */}
      {children}

      {/* Vercel Analytics */}
      <Analytics />

      {/* PostHog Analytics - Add when needed */}
      {/* {posthogKey && <PostHogProvider apiKey={posthogKey}>{children}</PostHogProvider>} */}
    </>
  );
}
