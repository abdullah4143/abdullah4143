"use client";
import React from 'react';
import { Folder } from 'lucide-react';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';

const myProjects = [
    {
        title: "SSM CRM",
        description: "Custom-built CRM for managing multi-business inbound call records and client data synchronization.",
        tags: ["CRM", "Database", "Node.js"],
        repoUrl: "PRIVATE",
        liveUrl: "STAGING_ONLY",
        size: "large"
    },
    {
        title: "AsaanKisaan",
        description: "Final Year Project: A specialized platform for agricultural management and farmer empowerment.",
        tags: ["Mobile", "React Native", "Firebase"],
        repoUrl: "PRIVATE",
        liveUrl: "STAGING_ONLY",
        size: "normal"
    },
    {
        title: "So Special Mechanic",
        description: "Digital presence and service management system built for a freelance automotive client.",
        tags: ["Freelance", "Web App", "UI/UX"],
        repoUrl: "PRIVATE",
        liveUrl: "STAGING_ONLY",
        size: "normal"
    }
];

export default function ProjectsGallery() {
    return (
        <main className="relative min-h-screen">
            <Header />
            <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-12">
                    <Folder className="text-cyan-400" />
                    <h2 className="text-2xl font-black uppercase tracking-tighter italic">/Project_Deployments</h2>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                    {myProjects.map((project, idx) => (
                        <div
                            key={idx}
                            className={`h-full ${project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'}`}
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
