"use client";
import React from 'react';

export default function StatsGrid() {
    return (
        <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2 p-8 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-md">
                    <h3 className="font-mono text-cyan-500 text-xs mb-4 uppercase">/Primary_Stack</h3>
                    <div className="flex flex-wrap gap-3">
                        {['NextJS', 'TypeScript', 'Node.js', 'PostgreSQL', 'Framer Motion'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono">{tech}</span>
                        ))}
                    </div>
                </div>
                <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-md">
                    <h3 className="font-mono text-violet-500 text-xs mb-4 uppercase">/Uptime</h3>
                    <p className="text-3xl font-bold font-mono tracking-tighter">24/7/365</p>
                </div>
                <div className="p-8 bg-cyan-500 text-black rounded-3xl">
                    <h3 className="font-mono text-[10px] font-black uppercase mb-4 tracking-widest">Availability</h3>
                    <p className="text-xl font-black italic uppercase leading-none">Open for Deployment</p>
                </div>
            </div>
        </section>
    );
}
