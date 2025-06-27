import { type Variants, useReducedMotion } from "framer-motion";

// Animation Constants
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
} as const;

export const EASING = {
  smooth: [0.22, 1, 0.36, 1] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
  sharp: [0.4, 0, 0.2, 1] as const,
} as const;

// Animation Factory Functions
export const useDuration = (duration: number) => {
  const shouldReduceMotion = useReducedMotion();
  return shouldReduceMotion ? 0 : duration;
};

// Common Variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      delay,
      ease: EASING.smooth,
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      delay,
    },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      delay,
      ease: EASING.smooth,
    },
  }),
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      delay,
      ease: EASING.smooth,
    },
  }),
};

// Container Variants
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      duration: ANIMATION_DURATION.fast,
    },
  },
};

export const fastStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
      duration: ANIMATION_DURATION.fast,
    },
  },
};

// Header Specific Animations
export const headerSlideDown: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.smooth,
    },
  },
};

export const nameReveal: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "auto",
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
    },
  },
};

// Utility Functions
export const getAnimationConfig = (shouldReduceMotion: boolean | null) => ({
  duration: shouldReduceMotion ? 0 : ANIMATION_DURATION.normal,
  ease: EASING.smooth,
});

export const getStaggerDelay = (index: number, baseDelay = 0.1) =>
  baseDelay + index * 0.05;

// Page Transitions
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};
