"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollBall() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 200,
    restDelta: 0.001,
  });

  const trackRef = useRef<HTMLDivElement>(null);
  const [trackH, setTrackH] = useState(0);

  useEffect(() => {
    const update = () => {
      if (trackRef.current) setTrackH(trackRef.current.clientHeight);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Ball moves from 0 → (trackH - 12) pixels from top
  const ballY = useTransform(smooth, [0, 1], [0, Math.max(0, trackH - 12)]);
  // Track fill height as percentage
  const fillH = useTransform(smooth, (v) => `${v * 100}%`);

  return (
    <div
      ref={trackRef}
      className="fixed right-5 z-50 pointer-events-none hidden lg:flex flex-col items-center"
      style={{ top: "18vh", height: "64vh", width: "2px" }}
    >
      {/* Static background track */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ background: "var(--rule)" }}
      />

      {/* Animated fill */}
      <motion.div
        className="absolute left-0 right-0 top-0 rounded-full origin-top"
        style={{
          height: fillH,
          background:
            "linear-gradient(to bottom, var(--accent), var(--accent-2))",
        }}
      />

      {/* Glowing ball at the tip */}
      <motion.div
        className="absolute rounded-full"
        style={{
          top: ballY,
          left: "50%",
          x: "-50%",
          width: 12,
          height: 12,
          background: "var(--accent)",
          boxShadow: [
            "0 0 0 2px oklch(72% 0.20 48 / 0.25)",
            "0 0 12px oklch(72% 0.20 48 / 0.9)",
            "0 0 28px oklch(72% 0.20 48 / 0.5)",
            "0 0 56px oklch(72% 0.20 48 / 0.2)",
          ].join(", "),
        }}
      />

      {/* Tiny dot at bottom of track */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
        style={{ background: "var(--rule-2)" }}
      />

      {/* Tiny dot at top of track */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
        style={{ background: "var(--rule-2)" }}
      />
    </div>
  );
}
