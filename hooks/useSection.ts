// hooks/useSection.ts
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "@/lib/types";

export function useSection(sectionName: SectionName) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Convert section name to lowercase to match SectionName type
            const normalizedName = sectionName.toLowerCase() as SectionName;
            setActiveSection(normalizedName);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -35% 0px",
        threshold: 0.5,
      },
    );

    const element = document.getElementById(sectionName);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionName, timeOfLastClick, setActiveSection]);
}
