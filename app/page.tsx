import Header from '@/components/Header';
import { TerminalHero } from '@/components/TerminalHero';
import GitTimeline from '@/components/GitTimeline';
import StatsGrid from '@/components/StatsGrid';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />

      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black font-mono tracking-tighter mb-6 uppercase">
            System_Init: <span className="text-cyan-400">Abdullah_Ashraf</span>
          </h1>
          <p className="text-white/40 font-mono mb-12 tracking-widest uppercase text-xs">
            // Full-Stack Developer & Logic Architect
          </p>

          <TerminalHero />
        </div>
      </section>

      {/* The Scroll-Linked Git Timeline */}
      <GitTimeline />

      {/* System Metrics Bento Grid */}
      <StatsGrid />
    </main>
  );
}

