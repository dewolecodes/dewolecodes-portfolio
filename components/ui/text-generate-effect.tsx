"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TextGenerateEffect({ words }: { words: string }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= words.length) {
        setDisplayText(words.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="relative">
      <p className="text-pretty text-base leading-relaxed">
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="ml-[1px] inline-block h-5 w-[2px] bg-primary-base dark:bg-primary-base-dark"
        />
      </p>
    </div>
  );
}
