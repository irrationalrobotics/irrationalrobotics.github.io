"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy, Users, Code, CircuitBoard, Heart, ExternalLink
} from "lucide-react";
import { HighlightText } from "@/components/highlight-text";

export default function AxiomPage() {
  const teamMembers = [
    {
      name: "Kevin Ye",
      role: "Driver & Builder",
      description: "Main Builder & Designer",
      image: "/images/axiom/kev.png",
      link: undefined
    },
    {
      name: "Abhirama Sonny",
      role: "Programmer",
      description: "Autonomous & Strategy",
      image: "/images/axiom/abhirama.png",
      link: "https://abhiramasonny.com"
    },
    {
      name: "Shyam Devanathan",
      role: "Builder & Programmer",
      description: "Design & Builder",
      image: "/images/axiom/shyam.jpg",
      link: undefined
    },
    {
      name: "Johnathan Luu",
      role: "Builder",
      description: "Pneumatics & Design",
      image: "/images/axiom/johnathan.webp",
      link: undefined
    },
    {
      name: "Chenghao Huang",
      role: "Builder",
      description: "Pneumatics & Design",
      image: "/images/theorem/cheng.webp",
      link: undefined
    },
    {
      name: "Aditya Sriram",
      role: "Builder & Programmer",
      description: "Finance & Design",
      image: "/images/axiom/adi.jpg",
      link: undefined
    },
    {
      name: "Alex Richards",
      role: "Builder",
      description: "Building the Robot",
      image: "/images/axiom/alex.jpg",
      link: undefined
    },
    {
      name: "Aryan Padarthi",
      role: "Programmer",
      description: "Driver Control",
      image: "/images/axiom/aryan.png",
      link: undefined
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative w-screen flex items-center justify-center overflow-hidden" style={{ height: "calc(100vh - 88px)" }}>
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
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">3</div>
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
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative">
                <img
                  src="/teampic.png"
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
            {[
              {
                name: "For the Love of Bots I",
                date: "August 25, 2025",
                rank: "18th",
                record: "4W - 2L",
                wp: "8", ap: "25", sp: "105"
              },
              {
                name: "Garland ISD Mixed",
                date: "August 20, 2025",
                rank: "21st",
                record: "4W - 3L",
                wp: "8", ap: "20", sp: "71"
              }
            ].map((comp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{comp.name}</h3>
                    <p className="text-white/50 text-sm">{comp.date}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div>
                    <p className="text-white/50 text-xs mb-1">Rank</p>
                    <p className="text-blue-400 font-semibold">{comp.rank}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-1">Record</p>
                    <p className="text-blue-400 font-semibold">{comp.record}</p>
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
