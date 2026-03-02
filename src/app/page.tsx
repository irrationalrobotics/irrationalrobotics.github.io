'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 md:pt-48 md:pb-48">
      {/* Hero Section */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="inline-block border border-black dark:border-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
            Texas Region 5
          </div>
          <h1 className="text-[12vw] font-black leading-[0.85] tracking-tighter md:text-[10vw] lg:text-[150px]">
            IRRATIONAL<br />
            <span className="text-neutral-200 dark:text-neutral-800 uppercase">ROBOTICS</span>
          </h1>
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-lg leading-relaxed text-neutral-500 italic">
              A hyper-performance robotics organization dedicated to engineering excellence, competitive dominance, and the future of VEX V5.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/axiom"
                className="group flex items-center justify-center gap-4 bg-black dark:bg-white px-10 py-5 text-sm font-bold uppercase tracking-widest text-white dark:text-black transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200"
              >
                14142A Axiom
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/donate"
                className="flex items-center justify-center border border-black/10 dark:border-white/10 px-10 py-5 text-sm font-bold uppercase tracking-widest text-black dark:text-white transition-all hover:border-black dark:hover:border-white"
              >
                Support Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="mt-64 grid grid-cols-1 gap-24 lg:grid-cols-2">
        <div className="space-y-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-400">Our Philosophy</h2>
          <h3 className="text-5xl font-bold leading-tight tracking-tighter md:text-6xl uppercase italic">
            PRECISION <br />
            OVER LUCK.
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {[
              {
                title: 'INNOVATION',
                desc: 'We rebuild from the ground up until the solution is undeniable.'
              },
              {
                title: 'RELIABILITY',
                desc: 'Championships are won on consistency. We engineer for the 100th match, not just the first.'
              },
              {
                title: 'PERFORMANCE',
                desc: 'We optimize for the 1%, where championships are won.'
              },
              {
                title: 'COMMUNITY',
                desc: 'Elevating our region by sharing knowledge and building partnerships.'
              }
            ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4"
            >
              <div className="h-px w-8 bg-black dark:bg-white" />
              <h4 className="text-sm font-black tracking-widest">{item.title}</h4>
              <p className="text-sm leading-relaxed text-neutral-500 italic">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Teams Grid */}
      <section className="mt-64">
        <div className="mb-12 flex items-end justify-between border-b border-black/10 dark:border-white/10 pb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-400">The Registry</h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-black/10 dark:bg-white/10 lg:grid-cols-2">
            <Link
              href="/axiom"
              className="group relative bg-white dark:bg-black p-12 transition-all hover:bg-neutral-50 dark:hover:bg-neutral-950"
            >
              <div className="space-y-12">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-neutral-400">EST. 2025</span>
                  <span className="bg-black dark:bg-white px-2 py-0.5 text-[10px] font-bold text-white dark:text-black">ACTIVE</span>
                </div>
              <h3 className="text-6xl font-black tracking-tighter md:text-8xl">14142A</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium uppercase tracking-widest">AXIOM</p>
                <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2" />
              </div>
            </div>
          </Link>

          <Link
            href="/theorem"
            className="group relative bg-white dark:bg-black p-12 transition-all hover:bg-neutral-50 dark:hover:bg-neutral-950"
          >
            <div className="space-y-12 opacity-40 transition-all group-hover:opacity-100">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-neutral-400">EST. 2026</span>
                <span className="border border-black dark:border-white px-2 py-0.5 text-[10px] font-bold">PREVIEW</span>
              </div>
              <h3 className="text-6xl font-black tracking-tighter md:text-8xl">14142T</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium uppercase tracking-widest">THEOREM</p>
                <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2" />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
