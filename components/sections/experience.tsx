"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "../common/experience-card";
import { SectionHeader } from "../ui/section-header";
import { experienceData } from "@/lib/data";
import TerminalInfo from "../ui/terminal-info";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Experience() {
  const { ref } = useSectionInView("experience", 0.5);

  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-12 px-4 py-16 md:px-6"
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
          <div className="w-px bg-gradient-to-b from-primary-base/30 via-primary-base/20 to-transparent dark:from-primary-base-dark/30 dark:via-primary-base-dark/20" />
        </div>

        {/* Experience Items */}
        {experienceData.experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative grid gap-8 md:grid-cols-2 md:gap-16"
          >
            {/* Connector Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-6">
              <div className="h-[10px] w-[10px] rounded-full border-2 border-primary-base/30 bg-primary-base dark:border-primary-base-dark/30 dark:bg-primary-base-dark" />
            </div>

            {/* Card - Alternating Layout */}
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
