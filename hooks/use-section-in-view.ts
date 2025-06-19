import { useActiveSectionContext } from "@/contexts/active-section-context";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/lib/types";

export function useSectionInView(sectionName: SectionName, threshold?: number) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Use industry standards as defaults, but allow custom overrides
  const getThreshold = () => {
    // Projects section has a lower threshold on mobile
    if (sectionName === "projects" && isMobile) {
      return 0.2;
    }

    // If a custom threshold is provided, use it directly
    if (threshold !== undefined) {
      return threshold;
    }

    // Otherwise, use industry standard thresholds
    return isMobile ? 0.1 : 0.3; // 10% mobile, 30% desktop - industry standard
  };

  const { ref, inView } = useInView({
    threshold: getThreshold(),
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      console.log(`Setting active section to: ${sectionName}`);
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
