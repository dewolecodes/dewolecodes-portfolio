"use client";

import { useTheme } from "next-themes";
import { SparklesCore } from "@/components/ui/sparkles";

export function SparklesBackground() {
  const { theme } = useTheme();

  return (
    <div className="pointer-events-none fixed inset-0 h-full w-full">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.4}
        maxSize={theme === "dark" ? 1.2 : 1.6}
        particleDensity={theme === "dark" ? 120 : 140}
        particleColor={theme === "dark" ? "#71a295" : "#365e53"}
      />
    </div>
  );
}
