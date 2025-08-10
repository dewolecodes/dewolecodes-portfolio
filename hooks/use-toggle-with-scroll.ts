import { useRef, useState } from "react";

type ToggleWithScrollOptions = {
  delayMs?: number;
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
};

export function useToggleWithScroll(options?: ToggleWithScrollOptions) {
  const topRef = useRef<HTMLDivElement>(null);
  const firstExpandedRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    setIsExpanded((prev) => {
      const next = !prev;
      const delay = options?.delayMs ?? 50;
      const behavior = options?.behavior ?? "smooth";
      const block = options?.block ?? "start";
      setTimeout(() => {
        if (next) {
          firstExpandedRef.current?.scrollIntoView({ behavior, block });
        } else {
          topRef.current?.scrollIntoView({ behavior, block });
        }
      }, delay);
      return next;
    });
  };

  return { isExpanded, setIsExpanded, toggle, topRef, firstExpandedRef };
}
