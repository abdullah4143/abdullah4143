"use client";
import React, { useRef, useEffect, useMemo } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const CYCLES = 4;     // how many left-right swings as you scroll through the page
const AMP    = 14;    // max px swing each side from center
const W      = 44;    // container width px
const CENTER = W / 2; // 22

export default function PathBall() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { damping: 25, stiffness: 180, restDelta: 0.001 });

  const containerRef = useRef<HTMLDivElement>(null);
  const hRef = useRef(0);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) hRef.current = containerRef.current.clientHeight;
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Ball moves down the track AND sways left-right
  const ballY = useTransform(smooth, (v) => v * Math.max(0, hRef.current - 12));
  const ballX = useTransform(smooth, (v) => Math.sin(v * CYCLES * Math.PI * 2) * AMP);

  // Build SVG guide path — matches the ball's motion exactly
  // viewBox 0 0 44 1000 with preserveAspectRatio="none" maps x→container px, y→container %
  const guidePath = useMemo(() => {
    const steps = 160;
    let d = `M ${CENTER} 0`;
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      const x = Math.sin(t * CYCLES * Math.PI * 2) * AMP + CENTER;
      const y = t * 1000;
      d += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
    }
    return d;
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed left-3 z-40 pointer-events-none hidden lg:block"
      style={{ top: "15vh", height: "70vh", width: W }}
    >
      {/* Dashed guide path */}
      <svg
        width={W}
        height="100%"
        viewBox={`0 0 ${W} 1000`}
        preserveAspectRatio="none"
        className="absolute inset-0"
        aria-hidden="true"
      >
        <path
          d={guidePath}
          fill="none"
          stroke="var(--rule-2)"
          strokeWidth="1"
          strokeDasharray="3 7"
          opacity="0.5"
        />
      </svg>

      {/* Glowing ball riding the path */}
      <motion.div
        aria-hidden="true"
        className="absolute rounded-full"
        style={{
          top: ballY,
          left: CENTER,
          x: ballX,
          translateX: "-50%",
          translateY: "-50%",
          width: 11,
          height: 11,
          background: "var(--accent)",
          boxShadow: [
            "0 0 0 2px oklch(72% 0.20 48 / 0.2)",
            "0 0 10px oklch(72% 0.20 48 / 0.9)",
            "0 0 26px oklch(72% 0.20 48 / 0.5)",
            "0 0 52px oklch(72% 0.20 48 / 0.2)",
          ].join(", "),
        }}
      />

      {/* End cap dots */}
      <div
        className="absolute rounded-full"
        style={{
          top: 0, left: CENTER - 3, width: 6, height: 6,
          background: "var(--rule-2)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          bottom: 0, left: CENTER - 3, width: 6, height: 6,
          background: "var(--rule-2)",
        }}
      />
    </div>
  );
}
