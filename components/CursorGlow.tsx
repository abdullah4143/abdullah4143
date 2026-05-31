"use client";
import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export default function CursorGlow() {
  const rawX = useMotionValue(-400);
  const rawY = useMotionValue(-400);

  // Slow spring for the large soft glow
  const glowSX = useSpring(rawX, { damping: 28, stiffness: 120 });
  const glowSY = useSpring(rawY, { damping: 28, stiffness: 120 });
  const glowX = useTransform(glowSX, (v) => v - 200);
  const glowY = useTransform(glowSY, (v) => v - 200);

  // Fast spring for the sharp trailing ring
  const ringSX = useSpring(rawX, { damping: 40, stiffness: 400 });
  const ringSY = useSpring(rawY, { damping: 40, stiffness: 400 });
  const ringX = useTransform(ringSX, (v) => v - 14);
  const ringY = useTransform(ringSY, (v) => v - 14);

  // Very fast for the sharp center dot
  const dotSX = useSpring(rawX, { damping: 55, stiffness: 700 });
  const dotSY = useSpring(rawY, { damping: 55, stiffness: 700 });
  const dotX = useTransform(dotSX, (v) => v - 4);
  const dotY = useTransform(dotSY, (v) => v - 4);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [rawX, rawY]);

  return (
    <>
      {/* Large soft amber glow */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[1]"
        style={{
          translateX: glowX,
          translateY: glowY,
          background:
            "radial-gradient(circle, oklch(72% 0.20 48 / 0.13) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Amber ring (medium lag) */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{
          translateX: ringX,
          translateY: ringY,
          width: 28,
          height: 28,
          border: "1.5px solid oklch(72% 0.20 48 / 0.55)",
          boxShadow: "0 0 8px oklch(72% 0.20 48 / 0.3)",
        }}
      />

      {/* Sharp amber dot (almost no lag) */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          translateX: dotX,
          translateY: dotY,
          width: 8,
          height: 8,
          background: "oklch(72% 0.20 48)",
          boxShadow:
            "0 0 8px oklch(72% 0.20 48 / 0.9), 0 0 16px oklch(72% 0.20 48 / 0.5)",
        }}
      />
    </>
  );
}
