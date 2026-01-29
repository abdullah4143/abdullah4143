"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TerminalHero = () => {
    const [typedText, setTypedText] = useState("");
    const command = "npm init portfolio@latest";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < command.length) {
                setTypedText(prev => prev + command.charAt(i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#0D1117] rounded-lg border border-white/10 overflow-hidden shadow-2xl font-mono text-sm max-w-2xl mx-auto text-left relative z-20">
            <div className="bg-white/5 px-4 py-2 flex gap-2 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="p-6 space-y-2">
                <p className="text-cyan-400">
                    $ {typedText}
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-2.5 h-4 bg-cyan-400 align-middle ml-1"
                    />
                </p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    <p className="text-white/60">... Installing dependencies</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4 }}
                >
                    <p className="text-violet-400">Success: Developer Environment Ready.</p>
                    <p className="text-white">Greetings. I am Abdullah Ashraf.</p>
                    <p className="text-white/40 italic">// Specializing in scalable logic and clean UI.</p>
                </motion.div>
            </div>
        </div>
    );
};
