"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { aboutContent } from "@/lib/data";
import { MonitorPlay, Trophy } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="px-4 py-16 md:px-6">
      <SectionHeader
        title={aboutContent.title}
        subtitle={aboutContent.subtitle}
        align="left"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
      >
        {/* Image Section */}
        <motion.div
          variants={itemVariants}
          className="mx-auto w-full max-w-xs lg:col-span-5 lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-2xl border border-primary-base/20 bg-background-base shadow-md dark:border-primary-base-dark/20 dark:bg-background-base-dark">
            <div className="relative aspect-[3/4] w-full sm:aspect-[4/5]">
              {/* Terminal-style header */}
              <div className="absolute left-0 top-0 z-10 w-full border-b border-primary-base/10 bg-background-base px-4 py-2 backdrop-blur-sm dark:border-primary-base-dark/10 dark:bg-background-base-dark/90">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
                  <span className="ml-2 font-mono text-xs text-primary-base/70 dark:text-primary-base-dark/70">
                    nabeel.webp
                  </span>
                </div>
              </div>

              <div className="relative h-full w-full">
                <Image
                  src={aboutContent.image.src}
                  alt={aboutContent.image.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                  quality={95}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div variants={itemVariants} className="lg:col-span-7">
          {/* Terminal-style intro */}
          <div className="mb-6 rounded-lg border border-primary-base/20 bg-background-base/50 p-3 font-mono text-sm dark:border-primary-base-dark/10 dark:bg-background-base-dark/50">
            <span className="text-accent-base dark:text-accent-base-dark">
              $ whoami
            </span>
            <span className="ml-2 text-primary-base/70 dark:text-primary-base-dark/70">
              --info
            </span>
            <span className="ml-2 text-primary-base-dark">
              &gt;&gt;&gt; {aboutContent.description.intro}
            </span>
          </div>

          {/* Description */}
          <div className="space-y-4">
            {aboutContent.description.details.map((detail, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-pretty font-raleway leading-relaxed text-default-base/80 dark:text-default-base-dark/80"
              >
                {detail}
              </motion.p>
            ))}
          </div>

          {/* Interests & Motivations */}
          <motion.div
            variants={itemVariants}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {aboutContent.interests.map((section, index) => (
              <div
                key={index}
                className="rounded-lg border border-primary-base/30 bg-background-base/50 px-5 py-4 transition-colors duration-300 hover:border-primary-base/50 dark:border-primary-base-dark/10 dark:bg-background-base-dark/50 dark:hover:border-primary-base-dark/30"
              >
                {/* Header */}
                <div className="flex items-center gap-2">
                  {index === 0 ? (
                    <MonitorPlay className="h-4 w-4 text-primary-base dark:text-primary-base-dark" />
                  ) : (
                    <Trophy className="h-4 w-4 text-primary-base dark:text-primary-base-dark" />
                  )}
                  <h3 className="font-space-grotesk text-sm font-medium text-primary-base-dark">
                    {section.type}
                  </h3>
                </div>

                {/* List */}
                <div className="mt-4">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="border-l-2 border-primary-base/20 py-2 pl-4 text-sm text-default-base/80 transition-colors duration-300 hover:border-primary-base/50 hover:text-default-base dark:border-primary-base-dark/20 dark:text-default-base-dark/80 dark:hover:border-primary-base-dark/40 dark:hover:text-default-base-dark"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
