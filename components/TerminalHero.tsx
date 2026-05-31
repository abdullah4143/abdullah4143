"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const specializations = [
  "SaaS platforms",
  "mobile apps",
  "CRM systems",
  "AI products",
];

export const TerminalHero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((p) => (p + 1) % specializations.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-12 overflow-hidden">
      {/* Floating ambient orbs */}
      <div
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(72% 0.20 48 / 0.09) 0%, transparent 70%)",
          animation: "float-orb 18s ease-in-out infinite",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(72% 0.20 48 / 0.06) 0%, transparent 70%)",
          animation: "float-orb-2 22s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Decorative grid dots */}
      <div
        className="absolute top-24 right-0 w-64 h-64 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, var(--rule-2) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content — two-column grid */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Left: text ────────────────────────────────── */}
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono"
              style={{
                border: "1px solid var(--rule-2)",
                background: "var(--accent-subtle)",
                color: "var(--accent)",
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "var(--text-xs)",
                letterSpacing: "0.1em",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent)", boxShadow: "0 0 6px var(--accent)" }}
              />
              Available for hire
            </span>
            <span className="mono-kicker">Islamabad, PK</span>
          </motion.div>

          {/* Name — large and prominent */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold mb-3"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "var(--ink)",
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
            }}
          >
            Abdullah Ashraf
          </motion.p>

          {/* "I build [cycling]" */}
          <div className="mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="display-heading"
              style={{ fontSize: "var(--text-display-xl)", color: "var(--ink-2)" }}
            >
              I build
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="display-heading"
              style={{
                fontSize: "var(--text-display-xl)",
                color: "var(--accent)",
                minHeight: "1.05em",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: "0.2em" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "-0.15em" }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {specializations[idx]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Value prop subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-base leading-relaxed mb-10 max-w-lg"
            style={{ color: "var(--ink-2)", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Full-stack development for startups and growing businesses — from
            architecture and database design to deployment and beyond.
            I ship production-grade software, fast.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="#projects"
              className="pulse-ring inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-150"
              style={{
                background: "var(--accent)",
                color: "var(--accent-ink)",
                fontFamily: "var(--font-inter), sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              }}
            >
              <Zap size={15} />
              See My Work
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-150 group"
              style={{
                border: "1px solid var(--rule-2)",
                color: "var(--ink-2)",
                fontFamily: "var(--font-inter), sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--ink-2)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--rule-2)";
              }}
            >
              Hire Me
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Mini stats bar — "4 active products" removed */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
          >
            {[
              { value: "7+", label: "Production systems" },
              { value: "3 yrs", label: "Full-stack experience" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-2">
                <span
                  className="text-xl font-bold"
                  style={{ color: "var(--accent)", fontFamily: "var(--font-inter), sans-serif", letterSpacing: "-0.03em" }}
                >
                  {s.value}
                </span>
                <span className="mono-kicker" style={{ fontSize: "0.65rem" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: cartoon avatar ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          {/* Outer glow ring */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, oklch(72% 0.20 48 / 0.18) 0%, transparent 70%)",
              filter: "blur(32px)",
            }}
          />

          {/* Avatar card */}
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              border: "1px solid oklch(72% 0.20 48 / 0.25)",
              boxShadow: "0 0 60px oklch(72% 0.20 48 / 0.12), 0 24px 48px oklch(0% 0 0 / 0.5)",
              background: "var(--paper-2)",
              width: "clamp(260px, 36vw, 420px)",
              aspectRatio: "3 / 4",
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px z-10"
              style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
            />

            <Image
              src="/avatar-me.png"
              alt="Abdullah Ashraf — Full-Stack Developer"
              fill
              className="object-cover object-top"
              priority
            />

            {/* Bottom name overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 p-5 z-10"
              style={{
                background: "linear-gradient(to top, oklch(7% 0.02 35 / 0.95) 0%, transparent 100%)",
              }}
            >
              <p
                className="font-semibold text-sm"
                style={{ color: "var(--ink)", fontFamily: "var(--font-inter), sans-serif", letterSpacing: "-0.02em" }}
              >
                Abdullah Ashraf
              </p>
              <p className="mono-kicker mt-0.5" style={{ fontSize: "0.62rem", color: "var(--accent)" }}>
                Full-Stack Developer · Islamabad
              </p>
            </div>
          </div>

          {/* Floating badge — "Open to work" */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-4 -left-4 lg:-left-8 flex items-center gap-2 px-4 py-2.5 rounded-2xl"
            style={{
              background: "var(--paper-3)",
              border: "1px solid var(--rule-2)",
              boxShadow: "0 8px 24px oklch(0% 0 0 / 0.4)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: "oklch(72% 0.22 145)", boxShadow: "0 0 8px oklch(72% 0.22 145 / 0.6)" }}
            />
            <span className="mono-kicker" style={{ fontSize: "0.62rem" }}>Open to work</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
