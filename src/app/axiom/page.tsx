"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useSWR from "swr";
import {
  Trophy, Users, Code, CircuitBoard, Heart, ExternalLink
} from "lucide-react";
import { HighlightText } from "@/components/highlight-text";
const token = process.env.NEXT_PUBLIC_ROBOTEVENTS_API_TOKEN || "";
const headers = { Authorization: `Bearer ${token}` };
const fetcher = (url: string) => fetch(url, { headers }).then(r => r.json()).then(data => data.data);

export default function AxiomPage() {
  const slug = 184646; // RobotEvents Slug for Team Axiom
  const season_slug = 197;

  const { data: events } = useSWR<{
    id: number;
    name: string;
    start: string;
    end: string;
    awards_finalized: boolean;
    season: { id: number };
    sku: string;
    level: string;
  }[]>(
    `https://www.robotevents.com/api/v2/teams/${slug}/events`,
    fetcher,
    { refreshInterval: 86_400_000 }
  );


  const { data: rankings } = useSWR<{
      event: { id: number };
      wins: number;
      losses: number;
      ties: number;
      wp: number;
      ap: number;
      sp: number;
      rank: number;
    }[]>(
    `https://www.robotevents.com/api/v2/teams/${slug}/rankings`,
    fetcher,
    { refreshInterval: 86_400_000 }
  );
  
  const completed_comps = events
    ? events
        .filter((e) => e.season.id === season_slug)
        .map((e) => {
          const ranking = rankings?.find((r) => r.event.id === e.id);
          return {
            ...e,
            ...(ranking && { rank: ranking.rank, wins: ranking.wins, losses: ranking.losses, ties: ranking.ties, wp: ranking.wp, ap: ranking.ap, sp: ranking.sp })
          };
        })
        .filter((e) => rankings?.some((r) => r.event.id === e.id))
    : [];
  
  function formatDate(dateStr: string, removeYear = false) {
    const options: Intl.DateTimeFormatOptions = { timeZone: 'UTC', year: removeYear ? 'numeric' : undefined, month: 'long', day: 'numeric' };
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, options);
  }

  function formatDateRange(startStr: string, endStr: string, removeYear = false) {
    const options: Intl.DateTimeFormatOptions = { timeZone: 'UTC', year: removeYear ? 'numeric' : undefined, month: 'long', day: 'numeric' };
    const startDate = new Date(startStr);
    const endDate = new Date(endStr);
    
    const startFormatted = startDate.toLocaleDateString(undefined, options);
    const endFormatted = endDate.toLocaleDateString(undefined, options);
    
    // Extract day and month/year from formatted dates
    const [startMonth, startDay, startYear] = startFormatted.split(' ');
    const [endMonth, endDay, endYear] = endFormatted.split(' ');
    
    // Add ordinal suffix to days
    const addOrdinal = (day: string) => {
      const d = parseInt(day);
      const suffixIndex = (d % 100 > 3 && d % 100 < 21) ? 0 : (d % 10 > 3 ? 0 : d % 10);
      const suffix = ['th', 'st', 'nd', 'rd'][suffixIndex];
      return d + suffix;
    };
    
    if (startMonth === endMonth && startYear === endYear) {
      // Same month and year
      return `${startMonth} ${removeYear ? startDay.slice(0,-1) : addOrdinal(startDay)}-${removeYear ? endDay : addOrdinal(endDay)}${removeYear ? ` ${startYear}` : ''}`;
    } else if (startYear === endYear) {
      // Same year, different months
      return `${startMonth} ${removeYear ? startDay.slice(0,-1) : addOrdinal(startDay)}-${endMonth} ${removeYear ? endDay : addOrdinal(endDay)}${removeYear ? ` ${startYear}` : ''}`;
    } else {
      // Different years
      return `${startMonth} ${removeYear ? startDay.slice(0,-1) : addOrdinal(startDay)}, ${startYear}-${endMonth} ${removeYear ? endDay : addOrdinal(endDay)}${removeYear ? ` ${startYear}` : ''}`;
    }
  }

  const teamMembers = [
    {
      name: "Kevin Ye",
      role: "Team Lead & Driver & Fabrication",
      description: "Main Builder & Designer",
      image: "/images/axiom/kevin.jpg",
      link: undefined
    },
    {
      name: "Abhirama Sonny",
      role: "Programming",
      description: "Main Autonomous",
      image: "/images/axiom/abhirama.png",
      link: "https://abhiramasonny.com"
    },
    {
      name: "Shyam Devanathan",
      role: "Fabrication & Programming",
      description: "Design & Prototyping",
      image: "/images/axiom/shyam.jpg",
      link: undefined
    },
    {
      name: "Johnathan Luu",
      role: "Fabrication & Marketing",
      description: "Pneumatics & Strategy",
      image: "/images/axiom/johnathan.jpeg",
      link: undefined
    },
    {
      name: "Chenghao Huang",
      role: "Fabrication & Marketing",
      description: "Tool Specialist & Design",
      image: "/images/theorem/cheng.webp",
      link: undefined
    },
    {
      name: "Aditya Sriram",
      role: "Fabrication & Programming & Marketing",
      description: "Finance & Strategy",
      image: "/images/axiom/adi.jpg",
      link: undefined
    },
    {
      name: "Alex Richards",
      role: "Fabrication",
      description: "Build",
      image: "/images/axiom/alex.jpg",
      link: undefined
    },
    {
      name: "Aryan Padarthi",
      role: "Marketing",
      description: "Team Outreach & Branding",
      image: "/images/theorem/aryan.png",
      link: undefined
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="flex items-center justify-center overflow-hidden" style={{ height: "calc(100vh - 88px)" }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <h1 className="font-bold mb-6 text-white tracking-tighter" style={{ fontSize: "clamp(2.5rem, 12vw, 120px)" }}>
                Team <HighlightText type="gradient">Axiom</HighlightText>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed font-light"
              >
                VEX Robotics Team 14142A
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto mb-12"
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">8</div>
                  <p className="text-sm text-white/60">Team Members</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">2</div>
                  <p className="text-sm text-white/60">Competitions</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">2025-26</div>
                  <p className="text-sm text-white/60">Active Season</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 justify-center"
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <Link href="#team">Meet the Team</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/competitions">Results</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="team" className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            The Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 hover:border-blue-500/30 transition-colors h-full overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                    {member.image && (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                      <p className="text-blue-400 text-sm font-medium mb-4">{member.role}</p>
                      <p className="text-white/60 text-sm leading-relaxed">{member.description}</p>
                    </div>
                    {member.link && (
                      <a
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium mt-4 inline-flex items-center gap-1 group"
                      >
                        View Profile
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-24 pt-24 border-t border-white/10"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">The Full Team</h3>
            <Card className="bg-white/5 border-white/10 overflow-hidden max-w-3xl mx-auto">
              <div className="w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative aspect-video">
          <img
            src="/teampic2.png"
            alt="Team Axiom"
            className="w-full h-full object-cover"
          />

              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Competition Results - Minimal Table */}
      <section className="py-24 bg-black/50 border-t border-white/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Competition History
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {completed_comps.map((comp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <a href={`https://www.robotevents.com/robot-competitions/vex-robotics-competition/${comp.sku}.html`} target="_blank" rel="noopener noreferrer" className={comp.level === "Signature" ? "hover:text-amber-300": "hover:text-blue-300"}>
                    <h3 className="font-semibold text-lg">{comp.name?.split(":")[0]}</h3>
                    </a>
                    <p className="text-white/50 text-sm">{formatDate(comp.start)!=formatDate(comp.end) ? `${formatDateRange(comp.start, comp.end, true)}` : formatDate(comp.start, true)}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div>
                    <p className="text-white/50 text-xs mb-1">Rank</p>
                    <p className="text-blue-400 font-semibold">{comp.rank}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-1">Record</p>
                    <p className="text-blue-400 font-semibold">{comp.wins}W - {comp.ties && comp.ties > 0 ? `${comp.ties}T - ` : ""}{comp.losses}L</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-1">WP</p>
                    <p className="text-blue-400 font-semibold">{comp.wp}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-1">AP</p>
                    <p className="text-blue-400 font-semibold">{comp.ap}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-1">SP</p>
                    <p className="text-blue-400 font-semibold">{comp.sp}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Robot <HighlightText type="gradient">2025-2026</HighlightText>
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-lg p-12 md:p-20 flex items-center justify-center mb-12 min-h-80"
            >
              <div className="text-center">
                <CircuitBoard className="w-16 h-16 text-blue-400/50 mx-auto mb-4" />
                <p className="text-white/60">Robot visualization coming soon</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-500/30 transition-colors"
              >
                <Code className="w-6 h-6 text-blue-400 mb-3" />
                <h3 className="font-semibold text-lg mb-2">Software</h3>
                <p className="text-white/60 text-sm">Advanced autonomous programming with PROS. Optimized for precision and competitive performance.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-500/30 transition-colors"
              >
                <Trophy className="w-6 h-6 text-blue-400 mb-3" />
                <h3 className="font-semibold text-lg mb-2">Mechanics</h3>
                <p className="text-white/60 text-sm">Precision-engineered drivetrain and manipulation systems. Designed for reliability and efficiency.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-24 bg-black/50 border-t border-white/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Team Axiom</h2>
            <p className="text-white/70 mb-8">
              Help us compete at the highest level. Your support fuels innovation.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <Link href="/donate" className="inline-flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Donate
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
