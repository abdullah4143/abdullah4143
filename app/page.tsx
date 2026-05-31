"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import { TerminalHero } from "@/components/TerminalHero";
import StatsGrid from "@/components/StatsGrid";
import GitTimeline from "@/components/GitTimeline";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import {
  Globe,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

// ── Data ─────────────────────────────────────────────────

const marqueeItems = [
  "PDC RCM AI", "GenC", "VISOLINK", "DiBara Masonry",
  "So Special Mechanic", "AsaanKisaan", "Next.js 16",
  "NestJS", "Supabase", "Flutter", "BullMQ", "PostgreSQL",
  "Twilio", "React 19", "TypeScript", "Framer Motion",
];

const services = [
  {
    icon: Globe,
    title: "SaaS Development",
    description:
      "End-to-end SaaS platforms — multi-tenancy, auth, payments, subscriptions, and production deployment. I own the full stack.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Supabase"],
  },
  {
    icon: SlidersHorizontal,
    title: "CRM & Automation",
    description:
      "Lead pipelines, scraping workflows, queued workers, and operations dashboards. Business logic that actually runs.",
    tech: ["BullMQ", "Redis", "Playwright", "NestJS"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform Flutter apps with smooth UX, native feel, GetX state management, and REST API backends.",
    tech: ["Flutter", "GetX", "Firebase", "REST"],
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "AI voice agents, clinical scribes, NLP pipelines, and LLM API integrations that go into real production systems.",
    tech: ["Claude API", "Retell AI", "Python", "Twilio"],
  },
];

const techGroups = [
  {
    group: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "Python", "BullMQ"],
  },
  {
    group: "Database",
    items: ["PostgreSQL", "Supabase", "MongoDB", "Redis", "Prisma"],
  },
  {
    group: "Mobile",
    items: ["Flutter", "GetX", "React Native"],
  },
  {
    group: "Cloud & DevOps",
    items: ["Docker", "AWS EC2", "Vercel", "Nginx", "GitHub Actions"],
  },
  {
    group: "AI & APIs",
    items: ["Claude API", "Retell AI", "Twilio", "OpenAI", "Hugging Face"],
  },
];

const productionProjects = [
  {
    title: "PDC RCM AI",
    category: "Healthcare SaaS",
    description:
      "Dental revenue-cycle platform — insurance verification, claims, AI voice calls via Retell, clinical scribe via Claude Sonnet, and multi-tenant clinic operations with Supabase RLS.",
    tags: ["Next.js", "NestJS", "Supabase", "BullMQ", "Claude", "Retell AI"],
    repoUrl: "PRIVATE",
    liveUrl: "STAGING_ONLY",
    size: "large",
  },
  {
    title: "GenC",
    category: "AI SaaS",
    description:
      "Multi-tenant AI creator platform — Supabase auth with OTP, invite flows, edge functions, and AI content generation workflows.",
    tags: ["Next.js", "Supabase", "pnpm", "Edge Functions"],
    repoUrl: "PRIVATE",
    liveUrl: "STAGING_ONLY",
    size: "normal",
  },
  {
    title: "VISOLINK",
    category: "CRM SaaS",
    description:
      "CRM automation platform — marketplace scrapers (Playwright / Apify), listing automation, queued workers, and an internal ops studio dashboard.",
    tags: ["NestJS", "Next.js", "BullMQ", "Playwright", "Redis"],
    repoUrl: "PRIVATE",
    liveUrl: "STAGING_ONLY",
    size: "normal",
  },
  {
    title: "SSM CRM",
    category: "Business SaaS",
    description:
      "CRM for multi-business inbound call records, client data sync, and operational workflows across business units.",
    tags: ["CRM", "Node.js", "Database"],
    repoUrl: "PRIVATE",
    liveUrl: "STAGING_ONLY",
    size: "normal",
  },
  {
    title: "So Special Mechanic",
    category: "Client Product",
    description:
      "Automotive service platform — customer booking, mechanic workflows, tire quotes, maps integration, payments, and a Flutter companion app.",
    tags: ["Next.js", "Express", "Flutter", "Supabase"],
    repoUrl: "PRIVATE",
    liveUrl: "STAGING_ONLY",
    size: "normal",
  },
  {
    title: "DiBara Masonry",
    category: "B2B Automation",
    description:
      "Subcontractor lead ingestion, enrichment, SMS campaign waves via Twilio, and a real-time ops dashboard for outreach teams.",
    tags: ["NestJS", "PostgreSQL", "Twilio", "BullMQ", "Next.js"],
    repoUrl: "https://github.com/abdullah4143/DiBara-Masonry",
    liveUrl: "STAGING_ONLY",
    size: "normal",
  },
];

const universityProjects = [
  {
    title: "AsaanKisaan",
    category: "University FYP",
    description:
      "AgTech platform for farmers — Flutter mobile app with AI plant disease detection (Hugging Face), marketplace, voice assistant, GetX state management, and a Blazor + MongoDB backend with chat.",
    tags: ["Flutter", "Blazor", "MongoDB", "Gemini AI", "Node.js"],
    repoUrl: "PRIVATE",
    liveUrl: "STAGING_ONLY",
    size: "large",
  },
];

// ── Helpers ───────────────────────────────────────────────

function SectionDivider() {
  return (
    <div className="relative overflow-hidden" style={{ height: "1px" }}>
      <div style={{ background: "var(--rule)", height: "1px" }} />
      <motion.div
        initial={{ scaleX: 0, originX: "0%" }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--accent), var(--accent-2), transparent)",
          height: "1px",
        }}
      />
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const stagger = {
  show: { transition: { staggerChildren: 0.08 } },
};

// ── Page ──────────────────────────────────────────────────

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <Header />

      {/* ── HERO ────────────────────────────────────────── */}
      <TerminalHero />

      {/* ── MARQUEE STRIP ───────────────────────────────── */}
      <div
        className="overflow-hidden py-4"
        style={{
          borderTop: "1px solid var(--rule)",
          borderBottom: "1px solid var(--rule)",
          background: "var(--paper-2)",
        }}
        aria-hidden="true"
      >
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-5 mx-5 whitespace-nowrap"
              style={{
                color: "var(--ink-3)",
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "var(--text-xs)",
                letterSpacing: "0.12em",
              }}
            >
              {item}
              <span
                className="inline-block w-1 h-1 rounded-full"
                style={{ background: "var(--accent)", opacity: 0.5 }}
              />
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ────────────────────────────────────── */}
      <SectionDivider />
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} className="mb-16">
              <p className="mono-kicker mb-4" style={{ color: "var(--accent)" }}>
                What I build
              </p>
              <h2
                className="display-heading max-w-lg"
                style={{ fontSize: "var(--text-3xl)", color: "var(--ink)" }}
              >
                End-to-end software for ambitious products.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="group relative rounded-xl p-7 flex flex-col gap-5 overflow-hidden cursor-default"
                    style={{
                      background: "var(--paper-2)",
                      border: "1px solid var(--rule)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--accent)";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 0 28px oklch(72% 0.20 48 / 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--rule)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {/* Hover gradient bg */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                      style={{ background: "var(--accent-subtle)" }}
                    />

                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ duration: 0.22 }}
                      className="relative w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: "var(--accent-subtle)",
                        border: "1px solid var(--rule-2)",
                      }}
                    >
                      <Icon size={18} style={{ color: "var(--accent)" }} />
                    </motion.div>

                    <div className="relative flex flex-col gap-3 flex-1">
                      <h3
                        className="text-base font-semibold"
                        style={{
                          color: "var(--ink)",
                          fontFamily: "var(--font-inter), sans-serif",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed flex-1"
                        style={{
                          color: "var(--ink-2)",
                          fontFamily: "var(--font-inter), sans-serif",
                        }}
                      >
                        {s.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {s.tech.map((t) => (
                          <span
                            key={t}
                            className="tech-pill px-2 py-0.5 rounded text-xs"
                            style={{
                              border: "1px solid var(--rule-2)",
                              color: "var(--ink-3)",
                              fontFamily: "var(--font-jetbrains), monospace",
                              fontSize: "0.6rem",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────── */}
      <SectionDivider />
      <StatsGrid />

      {/* ── TECH STACK ──────────────────────────────────── */}
      <SectionDivider />
      <section id="stack" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="mono-kicker mb-4" style={{ color: "var(--accent)" }}>
              Tech stack
            </p>
            <h2
              className="display-heading"
              style={{ fontSize: "var(--text-3xl)", color: "var(--ink)" }}
            >
              The tools I ship with.
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {techGroups.map((group, gi) => (
              <motion.div
                key={group.group}
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 items-start"
              >
                <p className="mono-kicker pt-1.5">{group.group}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: gi * 0.05 + ii * 0.04,
                        duration: 0.3,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="tech-pill inline-flex items-center px-3.5 py-1.5 rounded-full text-sm cursor-default"
                      style={{
                        border: "1px solid var(--rule-2)",
                        color: "var(--ink-2)",
                        fontFamily: "var(--font-inter), sans-serif",
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ALL PROJECTS ────────────────────────────────── */}
      <SectionDivider />
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Production systems */}
          <div>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp} className="mb-16">
                <p className="mono-kicker mb-4" style={{ color: "var(--accent)" }}>
                  Project deployments
                </p>
                <h2
                  className="display-heading"
                  style={{ fontSize: "var(--text-3xl)", color: "var(--ink)" }}
                >
                  Production systems.
                </h2>
                <p
                  className="text-sm mt-4 max-w-xl"
                  style={{ color: "var(--ink-2)", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  SaaS platforms, CRM products, and client systems shipped to real users.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(280px,auto)]">
                {productionProjects.map((project, i) => (
                  <motion.div key={i} variants={fadeUp} className="h-full">
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider between subsections */}
          <div
            className="relative overflow-hidden"
            style={{ height: "1px", background: "var(--rule)" }}
          />

          {/* University FYP */}
          <div>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp} className="mb-16">
                <p className="mono-kicker mb-4" style={{ color: "var(--ink-2)" }}>
                  Academic capstone
                </p>
                <h2
                  className="display-heading"
                  style={{ fontSize: "var(--text-3xl)", color: "var(--ink)" }}
                >
                  University FYP.
                </h2>
                <p
                  className="text-sm mt-4 max-w-xl"
                  style={{ color: "var(--ink-2)", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Final year project — full-stack, AI-integrated, built to production standards.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4 auto-rows-[minmax(280px,auto)]">
                {universityProjects.map((project, i) => (
                  <motion.div key={i} variants={fadeUp} className="h-full">
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── EXPERIENCE ──────────────────────────────────── */}
      <SectionDivider />
      <GitTimeline />

      {/* ── CONTACT ─────────────────────────────────────── */}
      <SectionDivider />
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, oklch(72% 0.20 48 / 0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div className="flex flex-col justify-center">
              <p className="mono-kicker mb-8" style={{ color: "var(--accent)" }}>
                Let&apos;s work together
              </p>
              <h2
                className="display-heading mb-8"
                style={{ fontSize: "var(--text-display)", color: "var(--ink)" }}
              >
                Have a project in mind?
              </h2>
              <p
                className="text-base leading-relaxed mb-10 max-w-md"
                style={{
                  color: "var(--ink-2)",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                I&apos;m available for freelance projects, contract work, and
                full-time roles. If you need a developer who delivers — let&apos;s talk.
              </p>

              <div className="mb-10">
                <p className="mono-kicker mb-2">Email</p>
                <a
                  href="mailto:ashrafabdullah681@gmail.com"
                  className="text-base font-medium transition-colors duration-150 flex items-center gap-2 group"
                  style={{
                    color: "var(--ink)",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                  }}
                >
                  <Mail size={15} style={{ color: "var(--accent)" }} />
                  ashrafabdullah681@gmail.com
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>

              <div className="flex gap-3">
                {[
                  {
                    label: "GitHub",
                    href: "https://github.com/abdullah4143",
                    icon: Github,
                  },
                  {
                    label: "LinkedIn",
                    href: "https://linkedin.com/in/abdullah4143",
                    icon: Linkedin,
                  },
                ].map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-150 group"
                    style={{
                      border: "1px solid var(--rule-2)",
                      color: "var(--ink-2)",
                      fontFamily: "var(--font-inter), sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--accent)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "var(--rule-2)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--ink-2)";
                    }}
                  >
                    <Icon size={15} />
                    {label}
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-start justify-center h-full rounded-xl p-10 gap-4"
                  style={{
                    background: "var(--paper-2)",
                    border: "1px solid var(--accent)",
                    boxShadow: "0 0 24px oklch(72% 0.20 48 / 0.15)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-base"
                    style={{
                      background: "var(--accent-subtle)",
                      border: "1px solid var(--accent)",
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    className="text-xl font-semibold"
                    style={{
                      color: "var(--ink)",
                      fontFamily: "var(--font-inter), sans-serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Message sent.
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      color: "var(--ink-2)",
                      fontFamily: "var(--font-inter), sans-serif",
                    }}
                  >
                    I&apos;ll get back to you within a day.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="rounded-xl p-8 space-y-6"
                  style={{
                    background: "var(--paper-2)",
                    border: "1px solid var(--rule)",
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                      { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                    ].map(({ id, label, type, placeholder }) => (
                      <div key={id} className="space-y-2">
                        <label htmlFor={id} className="mono-kicker block">
                          {label}
                        </label>
                        <input
                          id={id}
                          name={id}
                          type={type}
                          placeholder={placeholder}
                          required
                          className="w-full px-4 py-3 rounded-lg text-sm bg-transparent transition-all duration-150"
                          style={{
                            border: "1px solid var(--rule-2)",
                            color: "var(--ink)",
                            fontFamily: "var(--font-inter), sans-serif",
                            outline: "none",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "var(--accent)";
                            e.currentTarget.style.boxShadow =
                              "0 0 0 3px var(--accent-subtle)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = "var(--rule-2)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="mono-kicker block">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm bg-transparent resize-none transition-all duration-150"
                      style={{
                        border: "1px solid var(--rule-2)",
                        color: "var(--ink)",
                        fontFamily: "var(--font-inter), sans-serif",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.boxShadow =
                          "0 0 0 3px var(--accent-subtle)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--rule-2)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 group"
                    style={{
                      background: "var(--accent)",
                      color: "var(--accent-ink)",
                      fontFamily: "var(--font-inter), sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--accent-2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--accent)";
                    }}
                  >
                    Send Message
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer
        className="px-6 py-8"
        style={{ borderTop: "1px solid var(--rule)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="text-sm"
            style={{
              color: "var(--ink-3)",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            Abdullah Ashraf — Full-Stack Developer, Islamabad
          </p>
          <a
            href="mailto:ashrafabdullah681@gmail.com"
            className="text-xs font-mono transition-colors duration-150"
            style={{
              color: "var(--ink-3)",
              fontFamily: "var(--font-jetbrains), monospace",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--ink-3)";
            }}
          >
            ashrafabdullah681@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
