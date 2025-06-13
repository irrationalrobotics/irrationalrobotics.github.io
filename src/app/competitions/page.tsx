"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { HighlightText } from "@/components/highlight-text";

import {
  CalendarDays,
  Users,
  Trophy,
  Clock,
  Map,
  Target,
  Zap,
  Star,
  Award,
  ChevronRight,
  Gamepad2,
  Bot,
  CircuitBoard,
  Rocket
} from "lucide-react";

export default function CompetitionsPage() {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/4 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Trophy className="w-4 h-4 mr-2" />
              VEX Robotics Competition
            </Badge>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
              VEX <HighlightText type="gradient">Competitions</HighlightText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Where robotics engineering meets competitive challenge in the ultimate test of innovation and skill
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button asChild size="lg" className="group">
                <Link href="/axiom">
                  <Bot className="w-4 h-4 mr-2" />
                  Team Axiom Results
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group">
                <Link href="/theorem">
                  <CircuitBoard className="w-4 h-4 mr-2" />
                  Team Theorem Results
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Season Section with Enhanced Design */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary">
              <CalendarDays className="w-4 h-4 mr-2" />
              2025-2026 Season
            </Badge>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              VRC <HighlightText type="gradient">Push Back</HighlightText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This year's game challenges teams to build robots that can strategically gather and dispense objects
              into scoring zones while defending their territories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border border-primary/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Gamepad2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">VRC Push Back</h3>
                      <p className="text-muted-foreground">
                        Strategic gameplay meets mechanical precision in this year's challenge
                      </p>
                    </div>
                  </div>
                </div>
                {/* Floating accent elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-bounce delay-300" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full animate-bounce delay-700" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Strategic Scoring</h3>
                </div>
                <p className="text-muted-foreground">
                  Teams must balance offensive scoring with defensive territory protection
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Fast-Paced Action</h3>
                </div>
                <p className="text-muted-foreground">
                  Quick decision-making and robot agility are key to success
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Rocket className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Innovation Required</h3>
                </div>
                <p className="text-muted-foreground">
                  Teams must develop creative solutions for efficient object manipulation
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competition Structure Section - Redesigned */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary">
              <Map className="w-4 h-4 mr-2" />
              Competition Pathway
            </Badge>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Path to <HighlightText type="gradient">World Championship</HighlightText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              VEX Robotics Competition follows a progressive structure that takes teams from local events
              to the ultimate global championship
            </p>
          </motion.div>

          {/* Progressive Competition Cards */}
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Local Level */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Map className="w-8 h-8 text-blue-500" />
                      </div>
                      <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30">
                        Level 1
                      </Badge>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                      Local Tournaments
                      <Badge variant="outline" className="text-xs">20-40 Teams</Badge>
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      The foundation of competitive robotics where teams begin their journey,
                      gaining experience and earning qualification spots.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-sm">Community hosted events</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-sm">Regional qualification spots</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-sm">Skills and team awards</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-sm">Elimination brackets</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Regional Level */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 p-8 flex items-center justify-center lg:order-last">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Award className="w-8 h-8 text-purple-500" />
                      </div>
                      <Badge className="bg-purple-500/20 text-purple-600 border-purple-500/30">
                        Level 2
                      </Badge>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                      Regional Championships
                      <Badge variant="outline" className="text-xs">40-80 Teams</Badge>
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Elevated competition bringing together the best teams from local tournaments
                      across larger geographic regions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span className="text-sm">Multi-day events</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span className="text-sm">State championship spots</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span className="text-sm">Enhanced judging</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span className="text-sm">Higher competition level</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* World Level */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-primary/20">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Trophy className="w-8 h-8 text-primary" />
                      </div>
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        World Championship
                      </Badge>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                      VEX World Championship
                      <Badge variant="outline" className="text-xs">1,600+ Teams</Badge>
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      The pinnacle of VEX Robotics Competition where the world's best teams
                      compete for the ultimate honor in robotics.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">40+ countries represented</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">Dallas, Texas venue</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">VEX Excellence Award</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">Global networking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Match Structure Section - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary">
              <Clock className="w-4 h-4 mr-2" />
              Match Format
            </Badge>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Competition <HighlightText type="gradient">Match Structure</HighlightText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every VEX match follows a precise two-phase format that tests both
              programming excellence and real-time piloting skills
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Match Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <div className="bg-card rounded-2xl p-8 border shadow-sm">
                <h3 className="text-xl font-semibold mb-6 text-center">Match Timeline (2:00 Total)</h3>
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-2">
                        <Bot className="w-8 h-8 text-orange-500" />
                      </div>
                      <div className="text-sm font-medium">Autonomous</div>
                      <div className="text-xs text-muted-foreground">0:15</div>
                    </div>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full" />
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-2">
                        <Gamepad2 className="w-8 h-8 text-green-500" />
                      </div>
                      <div className="text-sm font-medium">Driver Control</div>
                      <div className="text-xs text-muted-foreground">1:45</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Match Phases */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group overflow-hidden">
                  <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Bot className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Autonomous Period</h3>
                        <Badge className="bg-orange-500/20 text-orange-600 border-orange-500/30 text-xs">
                          15 Seconds
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Robots operate solely through pre-programmed instructions without any driver input,
                      showcasing the team's programming expertise and strategic planning.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span className="text-sm">Pre-programmed robot behavior</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span className="text-sm">Autonomous bonus points available</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span className="text-sm">Tests programming skills</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span className="text-sm">Strategic positioning crucial</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group overflow-hidden">
                  <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Gamepad2 className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Driver Control Period</h3>
                        <Badge className="bg-green-500/20 text-green-600 border-green-500/30 text-xs">
                          1:45 Minutes
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Team members take direct control using handheld controllers, requiring quick thinking,
                      precise driving skills, and real-time strategic adaptation.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm">Direct robot control</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm">Real-time strategy adaptation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm">Driving skill showcase</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm">Alliance coordination</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Axiom Competition History */}
      <section className="py-16 bg-[#14142A] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Team Axiom Competition History</h2>
            <p className="text-blue-200/80 max-w-2xl mx-auto">
              Follow Team 14142A Axiom's journey through VEX Robotics competitions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 text-white border-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-blue-300" />
                  2025-2026 Season
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p>
                    Team Axiom is preparing for its first competitive season in the VEX Robotics Competition.
                    Stay tuned for upcoming competition results and highlights!
                  </p>

                  <div className="p-6 bg-white/5 rounded-lg text-center">
                    <Target className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Upcoming Competitions</h3>
                    <p className="text-blue-200/80">
                      Our competition schedule will be announced soon. Check back for updates!
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <Button asChild variant="outline" className="border-white/30 hover:bg-white/10 text-white">
                      <Link href="/axiom">
                        More About Team Axiom
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <div className="h-10"/> {/* Added space for Theorem section below */ }
      <section className="py-16 bg-[#132D1F] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Team Theorem Competition History</h2>
            <p className="text-emerald-200/80 max-w-2xl mx-auto">
              Follow Team 14142T Theorem's journey through VEX Robotics competitions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#1A3D2A]/80 text-white border-emerald-600/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-emerald-400" />
                  2025-2026 Season
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p>
                    Team Theorem is preparing for its first competitive season in the VEX Robotics Competition.
                    Stay tuned for upcoming competition results and highlights!
                  </p>

                  <div className="p-6 bg-emerald-950/40 rounded-lg text-center border border-emerald-600/10">
                    <Target className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Upcoming Competitions</h3>
                    <p className="text-emerald-200/80">
                      Our competition schedule will be announced soon. Check back for updates!
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <Button asChild variant="outline" className="border-emerald-600/30 hover:bg-emerald-950/40 text-white">
                      <Link href="/theorem">
                        More About Team Theorem
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
