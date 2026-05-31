"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "Jun 2025 — Present",
    role: "Independent Full-Stack Developer",
    company: "Freelance",
    description:
      "Architecting and shipping custom SaaS products, CRM platforms, and client-facing systems across healthcare, logistics, and services. Building from first commit to production deployment.",
    tags: ["Next.js", "NestJS", "Supabase", "PostgreSQL", "BullMQ"],
  },
  {
    period: "May 2025 — Jun 2025",
    role: "Software Engineer",
    company: "SyncaAI",
    description:
      "Built React-based interfaces and Python backend services for production AI workflows. Contributed to core AI integration modules and system optimisation.",
    tags: ["Python", "React", "AI APIs", "Node.js"],
  },
];

export default function GitTimeline() {
  return (
    <section
      id="experience"
      className="py-24 px-6"
      style={{ borderTop: "1px solid var(--rule)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <Briefcase size={16} style={{ color: "var(--accent)" }} />
          <p className="mono-kicker">Career / Experience</p>
        </div>

        <div>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 py-12"
              style={{ borderBottom: "1px solid var(--rule)" }}
            >
              <div className="pt-1">
                <p
                  className="text-xs"
                  style={{
                    color: "var(--ink-2)",
                    fontFamily: "var(--font-jetbrains), monospace",
                    letterSpacing: "0.05em",
                    fontSize: "var(--text-xs)",
                  }}
                >
                  {exp.period}
                </p>
              </div>

              <div>
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{
                    color: "var(--ink)",
                    fontFamily: "var(--font-inter), sans-serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {exp.role}
                </h3>
                <p
                  className="text-sm mb-5"
                  style={{
                    color: "var(--accent)",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  {exp.company}
                </p>
                <p
                  className="text-sm leading-relaxed mb-6 max-w-xl"
                  style={{
                    color: "var(--ink-2)",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tech-pill px-2.5 py-1 rounded text-xs cursor-default"
                      style={{
                        border: "1px solid var(--rule-2)",
                        color: "var(--ink-3)",
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: "var(--text-xs)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
