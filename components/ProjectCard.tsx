"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  liveUrl: string;
  size?: string;
  category?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  repoUrl,
  liveUrl,
  category,
}: ProjectProps) {
  const hasLiveUrl = liveUrl !== "STAGING_ONLY";
  const hasRepoUrl = repoUrl !== "PRIVATE";
  const href = hasLiveUrl ? liveUrl : hasRepoUrl ? repoUrl : null;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="card-shimmer group relative flex flex-col h-full rounded-xl overflow-hidden"
      style={{
        background: "var(--paper-2)",
        border: "1px solid var(--rule)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 24px oklch(72% 0.20 48 / 0.18)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--rule)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Accent top line */}
      <div
        className="h-px w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent), transparent)",
        }}
      />

      <div className="p-7 flex flex-col flex-1 gap-5">
        {category && (
          <p className="mono-kicker" style={{ color: "var(--accent)" }}>
            {category}
          </p>
        )}

        <h3
          className="text-xl font-semibold leading-tight"
          style={{
            color: "var(--ink)",
            fontFamily: "var(--font-inter), sans-serif",
            letterSpacing: "-0.025em",
          }}
        >
          {title}
        </h3>

        <p
          className="text-sm leading-relaxed flex-1"
          style={{
            color: "var(--ink-2)",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded text-xs"
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

        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid var(--rule)" }}
        >
          {!hasRepoUrl && !hasLiveUrl ? (
            <span
              className="inline-flex items-center gap-1 text-xs"
              style={{
                color: "var(--ink-3)",
                fontFamily: "var(--font-jetbrains), monospace",
              }}
            >
              <Lock size={10} /> Private
            </span>
          ) : (
            <span
              className="text-xs font-mono"
              style={{
                color: "var(--ink-3)",
                fontFamily: "var(--font-jetbrains), monospace",
              }}
            >
              {hasLiveUrl ? "Live" : "GitHub"}
            </span>
          )}

          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium transition-colors duration-150"
              style={{
                color: "var(--ink-2)",
                fontFamily: "var(--font-inter), sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--ink-2)";
              }}
            >
              View <ArrowUpRight size={13} />
            </a>
          ) : (
            <span
              className="text-xs"
              style={{
                color: "var(--ink-3)",
                fontFamily: "var(--font-inter), sans-serif",
              }}
            >
              NDA
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
