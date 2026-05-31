"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Package, Users, Clock, Code } from "lucide-react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  detail: string;
  icon: React.ElementType;
}

const stats: Stat[] = [
  {
    value: 7,
    suffix: "+",
    label: "Production systems",
    detail: "SaaS, CRM, mobile, AI",
    icon: Package,
  },
  {
    value: 3,
    suffix: " yrs",
    label: "Full-stack experience",
    detail: "Building since 2022",
    icon: Clock,
  },
  {
    value: 10,
    suffix: "+",
    label: "Technologies mastered",
    detail: "End-to-end stack ownership",
    icon: Users,
  },
  {
    value: 5,
    suffix: "+",
    label: "Happy clients",
    detail: "Startups & businesses",
    icon: Code,
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsGrid() {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ borderTop: "1px solid var(--rule)" }}
    >
      {/* Moving dash decoration */}
      <div className="moving-dash absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto">
        <p className="mono-kicker mb-16">By the numbers</p>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: "var(--rule)" }}
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative px-7 py-10 overflow-hidden cursor-default"
                style={{ background: "var(--paper)" }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "var(--accent-subtle-2)" }}
                />

                <Icon
                  size={18}
                  className="mb-4"
                  style={{ color: "var(--accent)" }}
                />

                <p
                  className="display-heading mb-2 relative"
                  style={{
                    fontSize: "var(--text-display)",
                    color: "var(--accent)",
                  }}
                >
                  <CountUp target={s.value} suffix={s.suffix} />
                </p>
                <p
                  className="text-sm font-semibold mb-1"
                  style={{
                    color: "var(--ink)",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  {s.label}
                </p>
                <p
                  className="text-xs"
                  style={{
                    color: "var(--ink-2)",
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  {s.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
