'use client';

import { motion } from 'framer-motion';

export default function TheoremPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 md:pt-48 md:pb-48">
      <section className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="inline-block border border-black/10 dark:border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
            Preview
          </div>
          <h1 className="text-[12vw] font-black leading-[0.85] tracking-tighter md:text-[10vw] lg:text-[150px]">
            14142T<br />
            <span className="text-neutral-200 dark:text-neutral-800">THEOREM</span>
          </h1>
          <div className="space-y-12">
            <p className="max-w-2xl text-xl leading-relaxed text-neutral-400 italic">
              The second division of Irrational Robotics is currently under development. Theorem will represent the expansion of our engineering philosophy and competitive reach.
            </p>
            <div className="h-px w-full bg-black/10 dark:bg-white/10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Status</p>
                <p className="text-xl font-black italic">INCUBATING</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Season</p>
                <p className="text-xl font-black italic">2026-2027</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Registry</p>
                <p className="text-xl font-black italic">PENDING</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="mt-64 border-t border-black/10 dark:border-white/10 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-400 italic">Coming Next Year</h2>
            <h3 className="text-5xl font-black tracking-tighter uppercase leading-none italic">THE NEXT <br /> GENERATION.</h3>
          </div>
          <p className="text-sm font-medium leading-relaxed text-neutral-500 uppercase tracking-widest italic">
            Expanding the irrational ecosystem. Theorem will serve as the next evolution in our quest for robotics excellence. Stay updated through our official channels.
          </p>
        </div>
      </section>
    </div>
  );
}
