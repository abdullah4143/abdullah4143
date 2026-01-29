"use client";
import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth out the movement with spring physics
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150); // Offset by half the width
      mouseY.set(e.clientY - 150); // Offset by half the height
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-[1] opacity-40 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-[80px]"
    />
  );
}
