"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "./experience-card";
import { SectionHeader } from "./section-header";
import { experienceData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-16 md:px-6">
      <SectionHeader title="Experience" subtitle="journey" align="left" />

      {/* Terminal-style description */}
      <div className="mx-auto mt-6 max-w-2xl">
        <div className="mb-12 rounded-lg border border-primary-base/20 bg-background-base/50 p-3 font-mono text-sm dark:border-primary-base-dark/10 dark:bg-background-base-dark/50">
          <span className="text-accent-base dark:text-accent-base-dark">
            $ career
          </span>
          <span className="ml-2 text-primary-base/70 dark:text-primary-base-dark/70">
            --path
          </span>
          <span className="ml-2 text-primary-base-dark">
            &gt;&gt;&gt; Building & growing through meaningful challenges
          </span>
        </div>
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
