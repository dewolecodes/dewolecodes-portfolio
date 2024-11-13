"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { Code2, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { ProjectData } from "@/lib/types";
import Image from "next/image";
import ProjectImagePlaceholder from "./project-image-placeholder";

export default function FeaturedProjectCard({
  project,
}: {
  project: ProjectData;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClampable, setIsClampable] = useState(false);
  const [imageError, setImageError] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      setIsClampable(
        textRef.current.scrollHeight > textRef.current.clientHeight,
      );
    }
  }, [project.description]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative flex h-[32rem] flex-col overflow-hidden rounded-lg border border-primary-base/30 bg-background-base/80 backdrop-blur-sm transition-colors hover:border-primary-base/50 dark:border-primary-base-dark/10 dark:bg-background-base-dark/80 dark:hover:border-primary-base-dark/30">
        {/* Project Header */}
        <div className="border-b border-primary-base/10 bg-primary-base/5 px-5 py-4 dark:border-primary-base-dark/10 dark:bg-primary-base-dark/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Code2 className="h-4 w-4 text-primary-base dark:text-primary-base-dark" />
              <h3 className="bg-gradient-to-r from-primary-base to-accent-base bg-clip-text font-space-grotesk text-sm font-medium text-transparent transition-colors dark:from-primary-base-dark dark:to-accent-base-dark">
                {project.title}
              </h3>
            </div>
            {project.featured && (
              <span className="rounded-full bg-primary-base/10 px-2 py-0.5 text-xs text-primary-base dark:bg-primary-base-dark/10 dark:text-primary-base-dark">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Project Image Section */}
        <div className="relative h-[50%] w-full overflow-hidden border-b border-primary-base/30 dark:border-primary-base-dark/20">
          {!imageError && project.cover ? (
            <>
              <Image
                src={project.cover.url}
                alt={project.cover.alt}
                width={1200}
                height={675}
                className="h-full w-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-[1.03]"
                onError={() => setImageError(true)}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={90}
              />
            </>
          ) : (
            <ProjectImagePlaceholder />
          )}
        </div>

        {/* Content section */}
        <div className="flex flex-1 flex-col justify-between p-5">
          <div className="space-y-4">
            {/* Description */}
            <div className="relative">
              <div
                onClick={() => isClampable && setIsExpanded(!isExpanded)}
                className={isClampable ? "cursor-pointer" : ""}
              >
                <p
                  ref={textRef}
                  className={`text-sm leading-relaxed text-default-base/70 dark:text-default-base-dark/70 ${
                    !isExpanded ? "line-clamp-3" : ""
                  }`}
                >
                  {project.description}
                </p>
              </div>

              {isClampable && (
                <div
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-1 flex cursor-pointer items-center gap-1 font-mono text-xs text-primary-base/60 transition-colors hover:text-primary-base dark:text-primary-base-dark/60 dark:hover:text-primary-base-dark"
                >
                  <span className="text-accent-base dark:text-accent-base-dark">
                    $
                  </span>
                  <div className="flex items-center gap-1">
                    <span>{isExpanded ? "show less" : "read more"}</span>
                    {isExpanded ? (
                      <ChevronUp className="h-3 w-3" />
                    ) : (
                      <ChevronDown className="h-3 w-3" />
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-1.5 rounded-full bg-primary-base/10 px-2.5 py-1 text-xs text-primary-base dark:bg-primary-base-dark/10 dark:text-primary-base-dark"
                >
                  <Icon className="h-3 w-3" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-4 flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-primary-base/20 bg-primary-base/5 px-3 py-1.5 text-sm text-primary-base transition-all hover:border-primary-base/40 hover:bg-primary-base/10 dark:border-primary-base-dark/20 dark:bg-primary-base-dark/5 dark:text-primary-base-dark dark:hover:border-primary-base-dark/40 dark:hover:bg-primary-base-dark/10"
              >
                <FiGithub className="h-4 w-4" />
                <span>View Code</span>
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-primary-base/20 bg-primary-base/5 px-3 py-1.5 text-sm text-primary-base transition-all hover:border-primary-base/40 hover:bg-primary-base/10 dark:border-primary-base-dark/20 dark:bg-primary-base-dark/5 dark:text-primary-base-dark dark:hover:border-primary-base-dark/40 dark:hover:bg-primary-base-dark/10"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
