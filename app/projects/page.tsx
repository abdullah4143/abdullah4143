import React from "react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

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

const universityFypProjects = [
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

function ProjectGrid({
  projects,
}: {
  projects: typeof productionProjects;
}) {
  return (
    <div className="grid md:grid-cols-3 gap-4 auto-rows-[minmax(280px,auto)]">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className={`h-full ${
            project.size === "large" ? "md:col-span-2" : "md:col-span-1"
          }`}
        >
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
}

export default function ProjectsGallery() {
  return (
    <main>
      <Header />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-24">
        {/* ── Production systems ──────────────────── */}
        <section>
          <p className="mono-kicker mb-4" style={{ color: "var(--accent)" }}>
            Project deployments
          </p>
          <h1
            className="display-heading mb-4"
            style={{ fontSize: "var(--text-3xl)", color: "var(--ink)" }}
          >
            Production Systems
          </h1>
          <p
            className="text-sm mb-12 max-w-xl"
            style={{ color: "var(--ink-2)", fontFamily: "var(--font-inter), sans-serif" }}
          >
            SaaS platforms, CRM products, and client systems — separate from academic work below.
          </p>
          <ProjectGrid projects={productionProjects} />
        </section>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--rule)" }} />

        {/* ── University FYP ──────────────────────── */}
        <section>
          <p className="mono-kicker mb-4" style={{ color: "var(--ink-2)" }}>
            Academic capstone
          </p>
          <h2
            className="display-heading mb-4"
            style={{ fontSize: "var(--text-3xl)", color: "var(--ink)" }}
          >
            University FYP
          </h2>
          <p
            className="text-sm mb-12 max-w-xl"
            style={{ color: "var(--ink-2)", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Final year project — not grouped with production SaaS work above.
          </p>
          <ProjectGrid projects={universityFypProjects} />
        </section>

        {/* ── CTA ─────────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8"
          style={{ borderTop: "1px solid var(--rule)" }}
        >
          <p
            className="text-sm"
            style={{ color: "var(--ink-2)", fontFamily: "var(--font-inter), sans-serif" }}
          >
            Interested in working together?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-150"
            style={{
              background: "var(--accent)",
              color: "var(--accent-ink)",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
