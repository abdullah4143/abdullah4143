"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
    { name: '/Root', path: '/' },
    { name: '/Projects', path: '/projects' },
    { name: '/Ping', path: '/contact' },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#0B0F1A]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">System_Online</span>
                </div>

                <nav className="hidden md:flex gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`text-xs font-mono tracking-widest uppercase hover:text-cyan-400 transition-colors ${pathname === item.path ? 'text-cyan-400' : 'text-white/60'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="md:hidden text-xs font-mono text-white/40">MENU</div>
            </div>
        </motion.header>
    );
}
