'use client';

import { motion } from 'framer-motion';

export default function VexPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 md:pt-48 md:pb-48">
      <section className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="inline-block border border-black dark:border-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
            The Competition
          </div>
          <h1 className="text-[10vw] font-black leading-[0.85] tracking-tighter md:text-[8vw] lg:text-[120px]">
            VEX V5 <br />
            <span className="text-neutral-200 dark:text-neutral-800 uppercase">Competition</span>
          </h1>
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-neutral-500 italic uppercase tracking-widest">
              VEX Robotics Competition (VRC) is the largest and fastest-growing middle school and high school robotics program globally.
            </p>
          </div>
        </motion.div>
      </section>

        {/* Philosophy Section */}
        <section className="mt-64 grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-400 italic">Game Context</h2>
            <h3 className="text-5xl font-black tracking-tighter uppercase leading-none italic">THE <br /> GAME.</h3>
          </div>
          <div className="space-y-12">
              <p className="text-sm font-medium leading-relaxed text-neutral-500 uppercase tracking-widest italic">
                Each year, a new game is released. For the 2025-2026 season, teams compete in &quot;Push Back,&quot; a strategic game of precision movement and rapid scoring.
              </p>
            <div className="h-px w-full bg-black/10 dark:bg-white/10" />
            <div className="grid grid-cols-1 gap-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">The Hardware</p>
                <p className="text-xl font-black italic mt-2 uppercase">V5 CONTROL SYSTEM</p>
                <p className="text-xs font-medium text-neutral-400 leading-relaxed italic mt-4 uppercase">High-torque smart motors, internal processors, and inertial sensors that allow for absolute position tracking and machine learning integration.</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">The Software</p>
                <p className="text-xl font-black italic mt-2 uppercase">C++ / PROS</p>
                <p className="text-xs font-medium text-neutral-400 leading-relaxed italic mt-4 uppercase">Custom Sequencing, Odometry, Pathing, PID and many other algorithms to succeed in autonomous and in teleoperated modes.</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">The Strategy</p>
                <p className="text-xl font-black italic mt-2 uppercase">GAME THEORY</p>
                <p className="text-xs font-medium text-neutral-400 leading-relaxed italic mt-4 uppercase">Real-time adaptation. We analyze alliance capabilities and opponent patterns to optimize for the winning 2-minute run.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Qualification Section */}
        <section className="mt-64">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-400">The Road to Worlds</h2>
              <h3 className="text-5xl font-black tracking-tighter uppercase italic">Qualification <br /> Metrics.</h3>
            </div>
            <div className="space-y-8 text-sm text-neutral-500 uppercase tracking-widest italic font-medium">
              <div className="p-8 border border-black/5 dark:border-white/5 space-y-4">
                <p className="text-black dark:text-white font-black">Tournament Champions</p>
                <p className="text-[10px]">Winning the elimination bracket at a local or regional event secures a spot in the next tier of competition.</p>
              </div>
              <div className="p-8 border border-black/5 dark:border-white/5 space-y-4">
                <p className="text-black dark:text-white font-black">Excellence Award</p>
                <p className="text-[10px]">The highest honor in VEX. Awarded to the team that exemplifies overall excellence in building, programming, and sportsmanship.</p>
              </div>
              <div className="p-8 border border-black/5 dark:border-white/5 space-y-4">
                <p className="text-black dark:text-white font-black">Skills Challenge</p>
                <p className="text-[10px]">Individual performance metrics. Teams compete for the highest combined Driver and Autonomous scores globally.</p>
              </div>
            </div>
          </div>
        </section>
  
          {/* Worlds Note */}
          <section className="mt-64 border-t border-black/10 dark:border-white/10 pt-32 text-center">
          <div className="mx-auto max-w-xl space-y-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-400">The Ultimate Goal</h2>
            <h3 className="text-5xl font-black tracking-tighter md:text-7xl italic uppercase">THE WORLD <br /> CHAMPIONSHIP.</h3>
            <p className="text-sm font-medium uppercase tracking-widest text-neutral-400 italic leading-loose">
              Thousands of teams. Dozens of nations. One world stage. We engineer every component with this single objective in mind.
            </p>
          </div>
        </section>
    </div>
  );
}
