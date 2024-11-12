"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { RiArrowUpLine } from "react-icons/ri";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlButton = () => {
    const currentScrollY = window.scrollY;
    const threshold = window.innerHeight * 0.5; // Lowered threshold

    if (currentScrollY > threshold) {
      if (
        currentScrollY < lastScrollY ||
        currentScrollY + window.innerHeight >=
          document.documentElement.scrollHeight
      ) {
        // Scrolling up or reached bottom of page
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }
    } else {
      // Below the threshold
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  };

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15); // Adjust 500 to control speed
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlButton);
    return () => {
      window.removeEventListener("scroll", controlButton);
    };
  }, [lastScrollY]);

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      aria-label="Scroll to top"
      className="absolute right-8 top-3 -translate-y-1/2 rounded-xl border border-primary-base/10 bg-background-base/80 p-3 text-primary-base backdrop-blur-sm transition-colors hover:border-primary-base/20 hover:text-accent-base dark:border-primary-base-dark/10 dark:bg-background-base-dark/80 dark:text-primary-base-dark dark:hover:border-primary-base-dark/20 dark:hover:text-accent-base-dark"
    >
      <RiArrowUpLine className="h-5 w-5" />
      <span className="sr-only">Scroll to top of page</span>
    </motion.button>
  );
};

export default ScrollToTopButton;
