'use client';

import { motion } from 'framer-motion';
import { Heart, Star, Award, Zap, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type HcbTransaction = {
  amount_cents: number;
};

const tiers = [
  {
    name: 'Supporter',
    price: '$25+',
    desc: 'Help us get started with foundational resources.',
    icon: Heart,
    perks: ['Tax deductable donation', 'Thank You email', 'Support our mission']
  },
  {
    name: 'Pi Level Sponsor',
    price: '$314+',
    desc: 'Make a real impact on our engineering capabilities.',
    icon: Star,
    perks: ['Everything in Supporter', 'Name or Small Logo on our website', 'Social Media Shoutout', 'Recognition in Competition Materials']
  },
  {
    name: 'Golden Level Sponsor',
    price: '$610+',
    desc: 'Major structural impact on our seasonal goals.',
    icon: Award,
    popular: true,
    perks: ['Everything in Supporter', 'A Medium Logo on most of our team materials', '2 Social Media shoutouts', 'Thank You card', 'Recognition in Competition Materials']
  },
  {
    name: 'Pythagoras Level Sponsor',
    price: '$1,414+',
    desc: 'Full sponsor recognition across the entire organization.',
    icon: Zap,
    perks: ['Everything in Supporter', 'The Best Logo placement on all materials', 'A Featured Post on all our channels', 'Thank You letter', 'Featured in end-of-season sponsor spotlight', 'Recognition in Competition Materials']
  }
];

const partners = [
  { level: 'Pythagoras', names: ['EnLiSense', 'King Buffet'] },
  { level: 'Golden', names: ['RTX', 'AT&T', 'Siemens'] },
  { level: 'Pi', names: ['Woofy Club'] }
];

const partnerLogos: Record<string, { light: string; dark?: string }> = {
  EnLiSense: { light: '/sponsors/enlisense_logo_LightMode.svg', dark: '/sponsors/enlisense_logo_darkMode.svg' },
  'King Buffet': { light: '/sponsors/kingbuffet.png' },
  RTX: { light: '/sponsors/rtx.png' },
  'AT&T': { light: '/sponsors/att.png' },
  Siemens: { light: '/sponsors/siemens.png' },
  'Woofy Club': { light: '/sponsors/woofyclub.png' }
};

export default function DonatePage() {
  const slug = 'org_dkupJZ';
  const cacheKey = `hcb-total-raised-${slug}`;
  const [totalRaised, setTotalRaised] = useState<number | null>(null);
  const [displayRaised, setDisplayRaised] = useState(0);
  const displayRaisedRef = useRef(0);

  useEffect(() => {
    try {
      const cached = window.localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = Number(cached);
        if (Number.isFinite(parsed) && parsed >= 0) {
          setTotalRaised(parsed);
          setDisplayRaised(parsed);
          displayRaisedRef.current = parsed;
        }
      }
    } catch {
      // Ignore localStorage failures.
    }

    async function fetchTransactionsPage(organizationSlug: string, page: number) {
      const res = await fetch(
        `https://hcb.hackclub.com/api/v3/organizations/${organizationSlug}/transactions?page=${page}`
      );
      if (!res.ok) throw new Error('Failed to fetch transactions');
      return (await res.json()) as HcbTransaction[];
    }

    async function fetchAllTransactions(organizationSlug: string) {
      const all: HcbTransaction[] = [];
      let page = 1;
      const MAX_PAGES = 100;
      const BATCH_SIZE = 6;

      while (page <= MAX_PAGES) {
        const pages = Array.from(
          { length: Math.min(BATCH_SIZE, MAX_PAGES - page + 1) },
          (_, i) => page + i
        );
        const batch = await Promise.all(
          pages.map((pageNumber) => fetchTransactionsPage(organizationSlug, pageNumber))
        );

        let reachedEnd = false;
        for (const pageData of batch) {
          if (!Array.isArray(pageData) || pageData.length === 0) {
            reachedEnd = true;
            break;
          }
          all.push(...pageData);
        }

        if (reachedEnd) break;
        page += pages.length;
      }

      return all;
    }

    async function fetchTotalRaised() {
      try {
        const transactions = await fetchAllTransactions(slug);
        const raised = transactions
          .filter((t) => t.amount_cents > 0)
          .reduce((sum, t) => sum + t.amount_cents, 0) / 100;

        setTotalRaised(raised);
        try {
          window.localStorage.setItem(cacheKey, String(raised));
        } catch {
          // Ignore localStorage failures.
        }
      } catch (e) {
        console.error("HCB API Error:", e);
      }
    }

    fetchTotalRaised();

    const interval = window.setInterval(fetchTotalRaised, 60_000);
    return () => window.clearInterval(interval);
  }, [cacheKey, slug]);

  useEffect(() => {
    if (totalRaised === null) return;

    const start = displayRaisedRef.current;
    const end = totalRaised;
    const durationMs = 900;
    const startTime = performance.now();
    let rafId = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;
      setDisplayRaised(current);
      displayRaisedRef.current = current;
      if (progress < 1) rafId = window.requestAnimationFrame(animate);
    };

    rafId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(rafId);
  }, [totalRaised]);

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
            Investment
          </div>
          <h1 className="text-[10vw] font-black leading-[0.85] tracking-tighter md:text-[8vw] lg:text-[120px]">
            FUEL THE <br />
            <span className="text-neutral-200 dark:text-neutral-800 uppercase">REVOLUTION.</span>
          </h1>
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-lg leading-relaxed text-neutral-500 italic uppercase tracking-widest">
              Every donation accelerates our progress toward the world stage.
            </p>
            <div className="border border-black dark:border-white p-6 space-y-2 min-w-[200px]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 italic">Total Raised</p>
              <p className="text-4xl font-black italic tracking-tighter">
                ${Math.round(displayRaised).toLocaleString()}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tiers Grid */}
      <section className="mt-64">
        <div className="mb-12 border-b border-black/10 dark:border-white/10 pb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-400">Sponsorship Tiers</h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-black/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-white dark:bg-black p-8 space-y-8 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <tier.icon className="h-5 w-5" />
                  {tier.popular && <span className="bg-black dark:bg-white px-2 py-0.5 text-[8px] font-bold text-white dark:text-black uppercase tracking-widest">Most Popular</span>}
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tighter uppercase">{tier.name}</h3>
                  <p className="text-4xl font-black italic mt-2">{tier.price}</p>
                </div>
                <p className="text-xs font-medium text-neutral-500 leading-relaxed italic">{tier.desc}</p>
                <div className="space-y-2 pt-4">
                  {tier.perks.map((perk) => (
                    <div key={perk} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1 w-1 rounded-full bg-black dark:bg-white shrink-0" />
                      <p className="text-[10px] font-bold uppercase tracking-widest leading-none">{perk}</p>
                    </div>
                  ))}
                </div>
              </div>
              <a 
                href="https://hcb.hackclub.com/donations/start/irrationalrobotics" 
                target="_blank"
                className="group flex items-center justify-between border border-black dark:border-white p-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black mt-12"
              >
                Donate Now
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
        <p className="mt-12 text-[10px] font-bold uppercase tracking-widest text-neutral-400 text-center">
          Questions about sponsorship? Contact our partnership team at irrationalvexrobotics@gmail.com
        </p>
      </section>

      {/* Meet Our Partners */}
      <section className="mt-64">
        <div className="mb-24 flex items-end justify-between border-b border-black/10 dark:border-white/10 pb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-400 italic">Meet Our Partners</h2>
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 italic">Fueling Innovation</span>
        </div>

        <div className="space-y-12">
          {partners.map((group) => {
            const isPythagoras = group.level === 'Pythagoras';
            const isGolden = group.level === 'Golden';

            const tileSizeClass = isPythagoras
              ? 'min-h-[300px] px-8 py-9'
              : isGolden
              ? 'min-h-[250px] px-7 py-8'
              : 'min-h-[210px] px-6 py-7';

            const logoHeightClass = isPythagoras
              ? 'h-44 md:h-48'
              : isGolden
              ? 'h-36 md:h-40'
              : 'h-28 md:h-32';

            const nameSizeClass = isPythagoras
              ? 'text-[13px]'
              : isGolden
              ? 'text-[12px]'
              : 'text-[11px]';

            const sectionGridClass = isPythagoras
              ? 'grid-cols-1 md:grid-cols-2'
              : isGolden
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
            const isSinglePi = group.level === 'Pi' && group.names.length === 1;

            return (
              <div key={group.level} className="space-y-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-xs font-black uppercase tracking-[0.45em] text-neutral-500 dark:text-neutral-300 italic">
                    {group.level}
                  </h3>
                  <div className="h-px flex-1 bg-black/15 dark:bg-white/15" />
                </div>

                <div className={`grid gap-4 ${sectionGridClass}`}>
                  {group.names.map((name) => (
                    <div
                      key={`${group.level}-${name}`}
                      className={`group flex flex-col justify-between bg-white text-center transition-all hover:bg-neutral-50 dark:bg-black dark:hover:bg-neutral-950 ${tileSizeClass} ${isSinglePi ? 'w-full max-w-[440px] lg:col-start-2' : ''}`}
                    >
                      <div className={`flex items-center justify-center ${logoHeightClass}`}>
                        {partnerLogos[name] ? (
                          <>
                            <Image
                              src={partnerLogos[name].light}
                              alt={`${name} logo`}
                              width={420}
                              height={200}
                              className={`h-full w-full object-contain ${partnerLogos[name].dark ? 'dark:hidden' : ''} ${name === 'RTX' ? 'brightness-0 dark:brightness-100' : ''}`}
                            />
                            {partnerLogos[name].dark && (
                              <Image
                                src={partnerLogos[name].dark}
                                alt={`${name} logo`}
                                width={420}
                                height={200}
                                className="hidden h-full w-full object-contain dark:block"
                              />
                            )}
                          </>
                        ) : (
                          <span className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                            [LOGO]
                          </span>
                        )}
                      </div>

                      <p className={`mt-5 font-black uppercase tracking-[0.22em] text-neutral-700 dark:text-neutral-200 ${nameSizeClass}`}>
                        {name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
