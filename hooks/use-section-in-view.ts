import { useActiveSectionContext } from "@/contexts/active-section-context";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/lib/types";

/**
 * Common threshold patterns for different section types:
 *
 * - Hero/Landing: Default thresholds work well (0.2 mobile, 0.5 desktop)
 * - About/Content: Higher threshold for focused reading (0.3 mobile, 0.8 desktop)
 * - Projects/Gallery: Lower threshold for complex layouts (0.2 mobile, 0.3 desktop)
 * - Contact/Footer: Default thresholds work well (0.2 mobile, 0.5 desktop)
 */

interface SectionInViewOptions {
  /** Threshold for mobile devices (< 768px). Default: 0.2 */
  mobileThreshold?: number;
  /** Threshold for desktop devices (>= 768px). Default: 0.5 */
  desktopThreshold?: number;
  /** Override both mobile and desktop thresholds */
  threshold?: number;
}

/**
 * Hook to track when a section enters the viewport and update active navigation
 *
 * @param sectionName - The name of the section to track
 * @param options - Configuration for responsive thresholds
 * @returns Object with ref to attach to the section element
 *
 * @example
 * ```tsx
 * // Use default thresholds (0.2 mobile, 0.5 desktop)
 * const { ref } = useSectionInView("home");
 *
 * // Custom thresholds for different section needs
 * const { ref } = useSectionInView("about", {
 *   mobileThreshold: 0.3,
 *   desktopThreshold: 0.8
 * });
 * ```
 */
export function useSectionInView(
  sectionName: SectionName,
  options: SectionInViewOptions = {},
) {
  const [isMobile, setIsMobile] = useState(false);

  const { mobileThreshold = 0.2, desktopThreshold = 0.5, threshold } = options;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate threshold based on device type and options
  const getThreshold = () => {
    // If a custom threshold is provided, use it directly (overrides everything)
    if (threshold !== undefined) {
      return threshold;
    }

    // Use responsive thresholds
    return isMobile ? mobileThreshold : desktopThreshold;
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
