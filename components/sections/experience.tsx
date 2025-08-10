"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "@/components/cards/experience-card";
import { SectionHeader } from "@/components/ui/section-header";
import { experienceData } from "@/lib/data";
import TerminalInfo from "@/components/ui/terminal-info";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { fadeInUp, getStaggerDelay } from "@/lib/animation-presets";

export default function Experience() {
  const { ref } = useSectionInView("experience", {
    desktopThreshold: 0.3,
  });

  // Sort experiences so that:
  // 1. Current jobs ("Present") come first
  // 2. Then, sort by end date (most recent first)
  const sortedExperienceData = [...experienceData.experiences].sort((a, b) => {
    // If a is current and b is not, a comes first
    if (a.dates.end === "Present" && b.dates.end !== "Present") return -1;
    // If b is current and a is not, b comes first
    if (a.dates.end !== "Present" && b.dates.end === "Present") return 1;

    // If both are current, sort by start date (most recent first)
    if (a.dates.end === "Present" && b.dates.end === "Present") {
      return (
        new Date(b.dates.start).getTime() - new Date(a.dates.start).getTime()
      );
    }

    // If both are past jobs, sort by end date (most recent first)
    return new Date(b.dates.end).getTime() - new Date(a.dates.end).getTime();
  });

  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-28 px-4 pb-10 sm:pb-12 lg:pb-16"
    >
      <SectionHeader
        title={experienceData.title}
        subtitle={experienceData.subtitle}
        align="left"
      />

      {/* Terminal-style intro */}
      <div className="mb-16 mt-6 w-fit">
        <TerminalInfo
          command={experienceData.terminalInfo.command}
          flag={experienceData.terminalInfo.flag}
          content={experienceData.terminalInfo.content}
        />
      </div>

      {/* Experience Grid with Connection Lines */}
      <div className="relative grid gap-12 md:gap-16">
        {/* Connector Line */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-px bg-gradient-to-b from-primary-base/40 via-primary-base/30 to-transparent dark:from-primary-base-dark/40 dark:via-primary-base-dark/30" />
        </div>

        {/* Experience Items */}
        {sortedExperienceData.map((experience, index) => (
          <motion.div
            key={experience.id}
            variants={fadeInUp}
            custom={getStaggerDelay(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative grid gap-8 md:grid-cols-2 md:gap-16"
          >
            {/* Connector Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-6">
              <div className="h-[10px] w-[10px] rounded-full border-2 border-primary-base/30 bg-primary-base dark:border-primary-base-dark/30 dark:bg-primary-base-dark" />
            </div>

            {/* Card - Alternating Layout (only on md+) */}
            <div
              className={index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}
            >
              <ExperienceCard
                experience={experience}
                isRight={index % 2 !== 0}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
