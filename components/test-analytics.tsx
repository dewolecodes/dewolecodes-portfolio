"use client";

import { Button } from "@/components/ui/button";

export default function TestAnalytics() {
  const testEvent = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "test_button_click", {
        event_category: "testing",
        event_label: "button_test",
      });
      alert("Test event sent! Check GA4 Real-Time.");
    } else {
      alert("Google Analytics not loaded!");
    }
  };

  return (
    process.env.NODE_ENV === "development" && (
      <Button onClick={testEvent} className="fixed bottom-4 right-4 z-50">
        Test Analytics
      </Button>
    )
  );
}
