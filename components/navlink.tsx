import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface NavLinkProps {
  href: string;
  label?: string;
  name: string;
}

export function NavLink({ href, label, name }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative px-3 py-2"
      role="menuitem"
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className="relative font-medium text-default-base/70 transition-colors duration-200 hover:text-default-base dark:text-default-base-dark/70 dark:hover:text-default-base-dark"
        animate={{
          y: isHovered ? -1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        {name}
        {isHovered && (
          <motion.span
            className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary-base dark:bg-primary-base-dark"
            layoutId="navbar-underline"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 24,
            }}
          />
        )}
      </motion.span>
    </Link>
  );
}
