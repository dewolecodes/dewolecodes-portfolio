"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "./ui/section-header";
import { contactData } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  User,
  Send,
  MessageSquare,
  ArrowRight,
  Code2,
} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import TerminalInfo from "./ui/terminal-info";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    // Add your form submission logic here
    setTimeout(() => {
      setIsSending(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="px-4 py-16 md:px-6">
      <SectionHeader
        title={contactData.title}
        subtitle={contactData.subtitle}
        align="left"
      />

      {/* Terminal-style description */}
      <div className="mx-auto mt-6 max-w-xl">
        <TerminalInfo
          command={contactData.terminalInfo.command}
          flag={contactData.terminalInfo.flag}
          content={contactData.terminalInfo.content}
        />
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-5 md:gap-12">
        {/* Info Section */}
        <div className="space-y-6 md:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            className="rounded-lg border border-primary-base/30 bg-background-base/80 p-6 backdrop-blur-sm dark:border-primary-base-dark/10 dark:bg-background-base-dark/80"
          >
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 font-space-grotesk text-lg font-medium text-primary-base dark:text-primary-base-dark">
                <Code2 className="h-5 w-5" />
                Let&apos;s Connect
              </h3>
              <p className="text-default-base/80 dark:text-default-base-dark/80">
                Have a project in mind or want to discuss opportunities? Drop me
                a message or email me directly at{" "}
                <Link
                  href={`mailto:${contactData.email}`}
                  className="inline-flex items-center gap-1 text-accent-base underline decoration-dashed underline-offset-4 transition-colors hover:text-accent-base/80 dark:text-accent-base-dark dark:hover:text-accent-base-dark/80"
                >
                  {contactData.email}
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </p>

              {/* Quick Links */}
              <div className="mt-6 flex flex-col gap-3">
                <motion.a
                  href={contactData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 rounded-lg border border-primary-base/10 bg-primary-base/5 px-4 py-3 text-primary-base transition-colors hover:bg-primary-base/10 dark:border-primary-base-dark/10 dark:bg-primary-base-dark/5 dark:text-primary-base-dark dark:hover:bg-primary-base-dark/10"
                >
                  <SiGithub className="h-5 w-5" />
                  <span className="text-sm">Follow on GitHub</span>
                </motion.a>
                <motion.a
                  href={contactData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 rounded-lg border border-primary-base/10 bg-primary-base/5 px-4 py-3 text-primary-base transition-colors hover:bg-primary-base/10 dark:border-primary-base-dark/10 dark:bg-primary-base-dark/5 dark:text-primary-base-dark dark:hover:bg-primary-base-dark/10"
                >
                  <SiLinkedin className="h-5 w-5" />
                  <span className="text-sm">Connect on LinkedIn</span>
                </motion.a>
                <motion.a
                  href={contactData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 rounded-lg border border-primary-base/10 bg-primary-base/5 px-4 py-3 text-primary-base transition-colors hover:bg-primary-base/10 dark:border-primary-base-dark/10 dark:bg-primary-base-dark/5 dark:text-primary-base-dark dark:hover:bg-primary-base-dark/10"
                >
                  <FaXTwitter className="h-5 w-5" />
                  <span className="text-sm">Follow on X (Twitter)</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          className="relative md:col-span-3"
        >
          <div className="rounded-lg border border-primary-base/30 bg-background-base/80 p-6 backdrop-blur-sm dark:border-primary-base-dark/10 dark:bg-background-base-dark/80">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs text-default-base dark:text-default-base-dark">
                    NAME
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-base dark:text-primary-base-dark" />
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      required
                      className="border-primary-base/30 pl-10 dark:border-primary-base-dark/10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-default-base dark:text-default-base-dark">
                    EMAIL
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-base dark:text-primary-base-dark" />
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      required
                      className="border-primary-base/30 pl-10 dark:border-primary-base-dark/10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-default-base dark:text-default-base-dark">
                  MESSAGE
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-primary-base dark:text-primary-base-dark" />
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Your message..."
                    required
                    rows={6}
                    className="border-primary-base/30 pl-10 dark:border-primary-base-dark/10"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSending}
                className="w-full gap-2 bg-primary-base text-white hover:bg-primary-base/90 dark:bg-primary-base-dark dark:hover:bg-primary-base-dark/90"
              >
                {isSending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
