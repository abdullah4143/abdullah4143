"use client";
import { Send, Terminal, Mail, Github, Linkedin } from 'lucide-react';
import Header from '@/components/Header';

export default function ContactPage() {
    return (
        <main className="relative min-h-screen">
            <Header />
            <div className="min-h-screen bg-[#0B0F1A] pt-40 px-6 font-mono">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

                    {/* Connection Details */}
                    <div>
                        <div className="inline-flex items-center gap-2 text-cyan-400 mb-6">
                            <Terminal size={18} />
                            <span className="text-xs font-bold tracking-[0.4em] uppercase">Connect_Interface</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black italic mb-10 tracking-tighter uppercase leading-none">
                            Ping<br />The <span className="text-cyan-400 underline decoration-white/5">Server.</span>
                        </h1>

                        <div className="space-y-8 mt-16">
                            <div className="group cursor-pointer">
                                <p className="text-[10px] text-white/20 font-bold mb-2 uppercase tracking-widest">Protocol: Email</p>
                                <p className="text-xl text-white/70 group-hover:text-cyan-400 transition-colors">abdullah.ashraf4143@gmail.com</p>
                            </div>
                            <div className="flex gap-8 pt-4">
                                <a href="https://github.com/abdullah4143" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-full hover:border-cyan-400 transition-all text-white/40 hover:text-cyan-400">
                                    <Github />
                                </a>
                                <a href="https://linkedin.com/in/abdullah4143" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-full hover:border-violet-400 transition-all text-white/40 hover:text-violet-400">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* System Form */}
                    <div className="bg-white/[0.02] border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Mail size={120} />
                        </div>

                        <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-cyan-500/50 uppercase tracking-widest">/Sender_Identity</label>
                                <input type="text" placeholder="FULL NAME" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-cyan-400 transition-colors font-light text-white" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-cyan-500/50 uppercase tracking-widest">/Return_Path</label>
                                <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-cyan-400 transition-colors font-light text-white" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-cyan-500/50 uppercase tracking-widest">/Data_Payload</label>
                                <textarea rows={4} placeholder="ENTER YOUR MESSAGE..." className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-cyan-400 transition-colors font-light resize-none text-white"></textarea>
                            </div>

                            <button className="w-full py-5 bg-cyan-500 text-[#0B0F1A] font-black uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3">
                                <Send size={18} /> Execute_Send
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}
