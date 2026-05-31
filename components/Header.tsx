"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4"
    >
      <nav
        className="flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300"
        style={{
          background: scrolled
            ? "oklch(11% 0.025 35 / 0.95)"
            : "oklch(11% 0.025 35 / 0.7)",
          border: "1px solid var(--rule-2)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: scrolled
            ? "0 8px 32px oklch(0% 0 0 / 0.5), 0 0 0 1px oklch(72% 0.20 48 / 0.05)"
            : "0 4px 16px oklch(0% 0 0 / 0.2)",
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="px-3 py-1.5 rounded-full text-sm font-bold tracking-tight transition-all duration-150"
          style={{
            color: "var(--ink)",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          AA
        </Link>

        <span
          className="w-px h-4 mx-1"
          style={{ background: "var(--rule-2)" }}
          aria-hidden="true"
        />

        {/* Nav links */}
        {isHome ? (
          navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="relative px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-150"
              style={{
                color: "var(--ink-2)",
                fontFamily: "var(--font-inter), sans-serif",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--ink)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--ink-2)";
              }}
            >
              {label}
            </a>
          ))
        ) : (
          [
            { label: "Work", href: "/projects" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="relative px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-150"
                style={{
                  color: active ? "var(--ink)" : "var(--ink-2)",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--paper-3)" }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <span className="relative">{label}</span>
              </Link>
            );
          })
        )}

        {/* CTA */}
        <a
          href={isHome ? "#contact" : "/contact"}
          className="ml-1 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-150"
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
          Hire Me
        </a>
      </nav>
    </motion.header>
  );
}
