"use client";

import { AnalyticsProvider } from "@/app/_providers/analytics-provider";

interface AnalyticsProvidersProps {
  children: React.ReactNode;
}

export function AnalyticsProviders({ children }: AnalyticsProvidersProps) {
  return <AnalyticsProvider>{children}</AnalyticsProvider>;
}
