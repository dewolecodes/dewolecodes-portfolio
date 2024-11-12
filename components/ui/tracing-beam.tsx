"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    },
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative z-10 mx-auto h-full w-full max-w-7xl", className)}
    >
      <div className="absolute -left-4 top-3 hidden md:-left-20 md:block">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-neutral-200 shadow-sm dark:border-neutral-700"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "#f3f6f5" : "#71a295",
              borderColor: scrollYProgress.get() > 0 ? "#f3f6f5" : "#71a295",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-background-base dark:border-neutral-700 dark:bg-background-base-dark"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="currentColor"
            className="text-neutral-300 dark:text-neutral-700"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop
                className="[--stop-color:theme(colors.primary-base)] dark:[--stop-color:theme(colors.primary-base-dark)]"
                stopColor="var(--stop-color)"
                stopOpacity="0"
              ></stop>
              <stop
                className="[--stop-color:theme(colors.primary-base)] dark:[--stop-color:theme(colors.primary-base-dark)]"
                stopColor="var(--stop-color)"
              ></stop>
              <stop
                className="[--stop-color:theme(colors.accent-base)] dark:[--stop-color:theme(colors.accent-base-dark)]"
                offset="0.325"
                stopColor="var(--stop-color)"
              ></stop>
              <stop
                className="[--stop-color:theme(colors.secondary-base)] dark:[--stop-color:theme(colors.secondary-base-dark)]"
                offset="1"
                stopColor="var(--stop-color)"
                stopOpacity="0"
              ></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
