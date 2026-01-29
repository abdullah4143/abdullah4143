"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Terminal, Calendar } from 'lucide-react';

const experiences = [
    {
        date: "JUNE 2025 - PRESENT",
        role: "Independent Full Stack Developer",
        company: "Freelance / Self-Employed",
        task: "git checkout -b freelance/innovation",
        details: "Architecting custom digital solutions and CRMs for diverse business sectors.",
        tech: ["Next.js", "Tailwind", "CRM Logic"]
    },
    {
        date: "MAY 2025 - JUNE 2025",
        role: "Software Engineer",
        company: "SyncaAI",
        task: "Commit: a72b91c - AI Integration Modules",
        details: "Contributed to core AI features and system optimization during tenure.",
        tech: ["Python", "React", "AI/ML APIs"]
    }
];

export default function GitTimeline() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="py-24 px-6 relative" id="history">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-16">
                    <Terminal className="text-cyan-400" size={24} />
                    <h2 className="text-2xl font-bold tracking-tighter uppercase">/History_Log</h2>
                </div>

                <div className="relative">
                    {/* The Git Branch Line */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-[11px] top-0 w-[2px] h-full bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent z-0"
                    />

                    {/* Experience Nodes */}
                    <div className="space-y-24">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative pl-12 group"
                            >
                                {/* Git Node (Commit Dot) */}
                                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#0B0F1A] border-2 border-cyan-400 z-10 flex items-center justify-center group-hover:bg-cyan-400 transition-colors">
                                    <div className="w-1.5 h-1.5 bg-cyan-400 group-hover:bg-[#0B0F1A] rounded-full transition-colors" />
                                </div>

                                {/* Content Card */}
                                <div className="bg-white/[0.02] border border-white/10 p-8 rounded-2xl backdrop-blur-md group-hover:border-cyan-500/30 transition-all shadow-lg hover:shadow-cyan-500/5">
                                    <div className="flex flex-wrap items-center gap-4 mb-4 text-[10px] font-bold text-white/40">
                                        <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded">
                                            <Calendar size={12} className="text-violet-400" /> {exp.date}
                                        </span>
                                        <span className="text-cyan-400 italic break-words">{exp.task}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-tighter">
                                        {exp.role}
                                    </h3>
                                    <p className="text-violet-400 font-bold mb-6 text-sm">{exp.company}</p>

                                    <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xl">
                                        {exp.details}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 bg-cyan-500/5 border border-cyan-500/20 rounded text-[10px] text-cyan-400 font-bold tracking-widest uppercase">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
