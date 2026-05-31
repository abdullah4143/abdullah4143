"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/abdullah4143",
    icon: Github,
    handle: "abdullah4143",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abdullah4143",
    icon: Linkedin,
    handle: "in/abdullah4143",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <Header />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── Left — letter intent ──────────────── */}
          <div className="flex flex-col justify-center">
            <p className="mono-kicker mb-8" style={{ color: "var(--accent)" }}>
              Connect / Open to opportunities
            </p>

            <h1
              className="display-heading mb-8"
              style={{ fontSize: "var(--text-display)", color: "var(--ink)" }}
            >
              Let&apos;s build something real.
            </h1>

            <p
              className="text-base leading-relaxed mb-12 max-w-md"
              style={{ color: "var(--ink-2)", fontFamily: "var(--font-inter), sans-serif" }}
            >
              I&apos;m a full-stack developer based in Islamabad, available for
              freelance projects, contract work, and full-time roles. Drop a
              message or reach out directly.
            </p>

            {/* Direct email */}
            <div className="mb-10">
              <p className="mono-kicker mb-2">Email</p>
              <a
                href="mailto:ashrafabdullah681@gmail.com"
                className="text-base font-medium transition-colors duration-150"
                style={{ color: "var(--ink)", fontFamily: "var(--font-inter), sans-serif" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                }}
              >
                ashrafabdullah681@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {socials.map(({ label, href, icon: Icon, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-150"
                  style={{
                    border: "1px solid var(--rule-2)",
                    color: "var(--ink-2)",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--ink-3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--ink-2)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--rule-2)";
                  }}
                >
                  <Icon size={15} />
                  <span>{handle}</span>
                  <ArrowUpRight
                    size={11}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right — form ──────────────────────── */}
          <div>
            {submitted ? (
              <div
                className="flex flex-col items-start justify-center h-full rounded-xl p-10 gap-4"
                style={{ background: "var(--paper-2)", border: "1px solid var(--rule)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "var(--accent-subtle)", border: "1px solid var(--accent)" }}
                >
                  <span style={{ color: "var(--accent)" }}>✓</span>
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "var(--ink)", fontFamily: "var(--font-inter), sans-serif", letterSpacing: "-0.02em" }}
                >
                  Message sent.
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--ink-2)", fontFamily: "var(--font-inter), sans-serif" }}
                >
                  I&apos;ll get back to you within a day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl p-8 space-y-6"
                style={{ background: "var(--paper-2)", border: "1px solid var(--rule)" }}
              >
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} className="space-y-2">
                    <label
                      htmlFor={id}
                      className="mono-kicker block"
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      placeholder={placeholder}
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm bg-transparent transition-colors duration-150"
                      style={{
                        border: "1px solid var(--rule-2)",
                        color: "var(--ink)",
                        fontFamily: "var(--font-inter), sans-serif",
                        outline: "none",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-subtle)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--rule-2)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>
                ))}

                <div className="space-y-2">
                  <label htmlFor="message" className="mono-kicker block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about the project..."
                    required
                    className="w-full px-4 py-3 rounded-lg text-sm bg-transparent resize-none transition-colors duration-150"
                    style={{
                      border: "1px solid var(--rule-2)",
                      color: "var(--ink)",
                      fontFamily: "var(--font-inter), sans-serif",
                      outline: "none",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-subtle)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--rule-2)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-sm font-semibold transition-all duration-150"
                  style={{
                    background: "var(--accent)",
                    color: "var(--accent-ink)",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "oklch(72% 0.22 255)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
