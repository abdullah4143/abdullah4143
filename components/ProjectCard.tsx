"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    repoUrl: string;
    liveUrl: string;
    size?: string;
}

export default function ProjectCard({ title, description, tags, repoUrl, liveUrl }: ProjectProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0D1117] rounded-xl border border-white/10 overflow-hidden shadow-2xl group hover:border-cyan-500/50 flex flex-col h-full"
        >
            {/* Window Header */}
            <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/10 text-white/30">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest truncate max-w-[150px]">
                    <FileCode size={12} /> {title.toLowerCase().replace(/\s+/g, '_')}.tsx
                </div>
                <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Editor Body */}
            <div className="p-6 space-y-4 font-mono flex-1 flex flex-col">
                <div className="space-y-1">
                    <p className="text-pink-400 text-xs">import <span className="text-white">Project</span> from <span className="text-cyan-400">'@portfolio/work'</span>;</p>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tighter">
                        {title}
                    </h3>
                </div>

                <p className="text-sm text-white/50 leading-relaxed min-h-[60px] flex-1 line-clamp-4">
                    <span className="text-violet-400 font-bold">const</span> <span className="text-blue-400 font-bold">summary</span> = <span className="text-white">"{description}"</span>;
                </p>

                {/* Tech Stack Rendering */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {tags.map((tag) => (
                        <span key={tag} className="text-[10px] text-cyan-400/70 bg-cyan-400/5 border border-cyan-400/20 px-2 py-0.5 rounded">
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-white/5 mt-auto">
                    {repoUrl === "PRIVATE" ? (
                        <span className="flex items-center gap-2 text-[10px] font-bold text-white/20 cursor-not-allowed">
                            <Github size={14} /> PRIVATE_REPO
                        </span>
                    ) : (
                        <a href={repoUrl} target="_blank" className="flex items-center gap-2 text-[10px] font-bold text-white/40 hover:text-white transition-colors">
                            <Github size={14} /> REPO_URL
                        </a>
                    )}
                    {liveUrl === "STAGING_ONLY" ? (
                        <span className="flex items-center gap-2 text-[10px] font-bold text-yellow-500/50 cursor-not-allowed">
                            <span className="w-2 h-2 rounded-full bg-yellow-500/50 animate-pulse" /> LOCAL_ENV_ONLY
                        </span>
                    ) : (
                        <a href={liveUrl} target="_blank" className="flex items-center gap-2 text-[10px] font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                            <ExternalLink size={14} /> EXECUTE_LIVE
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
