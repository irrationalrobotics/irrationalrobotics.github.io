"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { HighlightText } from "@/components/highlight-text";

import {
  BookOpen, Code, Lightbulb, Wrench, CircuitBoard, Share2, Trophy, Users, Target,
  Calendar, MapPin, Rocket, Star, Zap, TrendingUp, Award, Clock, Heart,
  ChevronRight, ExternalLink, Github, Globe, Mail
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const [stats, setStats] = useState({
    yearsActive: 0,
    totalMembers: 0,
    projectsCompleted: 0,
    hoursLogged: 0
  });

  useEffect(() => {
    // Animate organization stats
    const targetStats = {
      yearsActive: 1,
      totalMembers: 10,
      projectsCompleted: 0,
      hoursLogged: 15
    };

    const duration = 2500;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setStats({
        yearsActive: Math.round(targetStats.yearsActive * easedProgress),
        totalMembers: Math.round(targetStats.totalMembers * easedProgress),
        projectsCompleted: Math.round(targetStats.projectsCompleted * easedProgress),
        hoursLogged: Math.round(targetStats.hoursLogged * easedProgress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/4 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
              <Heart className="w-4 h-4 mr-2" />
              Est. 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
              About <HighlightText type="gradient">Irrational Robotics</HighlightText>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Where mathematical precision meets limitless creativity in the pursuit of robotics excellence
            </p>

            {/* Organization Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto"
            >
              <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                <div className="text-2xl font-bold text-primary">{stats.yearsActive}</div>
                <div className="text-xs text-muted-foreground">Years Active</div>
              </div>
              <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                <div className="text-2xl font-bold text-primary">{stats.totalMembers}</div>
                <div className="text-xs text-muted-foreground">Members</div>
              </div>
              <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                <div className="text-2xl font-bold text-primary">{stats.projectsCompleted}</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                <div className="text-2xl font-bold text-primary">{stats.hoursLogged}+</div>
                <div className="text-xs text-muted-foreground">Hours</div>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button asChild size="lg">
                <Link href="/axiom">
                  <Star className="w-4 h-4 mr-2" />
                  Meet Team Axiom
                </Link>
              </Button>
              <Button asChild size="lg">
                <Link href="/theorem">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Meet Team Theorem
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Timeline */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a group of passionate students to a competitive robotics organization
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-primary opacity-30"></div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative flex items-center mb-16"
              >
                <div className="w-1/2 pr-8 text-right">
                  <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-end gap-3 mb-3">
                        <span className="text-primary font-medium">2023</span>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">The Beginning</h3>
                      <p className="text-muted-foreground text-sm">
                        A group of select students from various FIRST and VEX teams came together with a shared vision of competitive excellence.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="aspect-video rounded-lg overflow-hidden bg-primary/5 flex items-center justify-center">
                      <div className="text-center">
                        <Users className="h-12 w-12 text-primary/40 mx-auto mb-2" />
                        <p className="text-muted-foreground text-sm">Formation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex items-center mb-16"
              >
                <div className="w-1/2 pr-8">
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="aspect-video rounded-lg overflow-hidden bg-primary/5 flex items-center justify-center">
                      <div className="text-center">
                        <Rocket className="h-12 w-12 text-primary/40 mx-auto mb-2" />
                        <p className="text-muted-foreground text-sm">First Teams</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                <div className="w-1/2 pl-8">
                  <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-primary font-medium">2024</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Team Formation</h3>
                      <p className="text-muted-foreground text-sm">
                        We established Team Axiom and Team Theorem, each with unique identities and specialized focuses in VEX Robotics.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative flex items-center"
              >
                <div className="w-1/2 pr-8 text-right">
                  <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-end gap-3 mb-3">
                        <span className="text-primary font-medium">Present</span>
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Competitive Excellence</h3>
                      <p className="text-muted-foreground text-sm">
                        Continuing our mission to excel in VEX competitions while inspiring the next generation of engineers in Allen, Texas.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 animate-pulse"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="aspect-video rounded-lg overflow-hidden bg-primary/5 flex items-center justify-center">
                      <div className="text-center">
                        <Trophy className="h-12 w-12 text-primary/40 mx-auto mb-2" />
                        <p className="text-muted-foreground text-sm">Growing Strong</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Enhanced Mission & Values */}
      <FeatureSection
        title="Our Foundation"
        description="The principles that guide our approach to robotics and innovation"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To continue competitive VEX Robotics excellence in our community while fostering innovation and teamwork.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
            <p className="text-muted-foreground">
              Collaboration, continuous learning, and pushing the boundaries of what's possible in robotics and engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Goal</h3>
            <p className="text-muted-foreground">
              Excellence in VEX Robotics competitions, winning awards, and inspiring the next generation of engineers.
            </p>
          </motion.div>
        </div>
      </FeatureSection>

      {/* Enhanced Team Showcase */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Teams</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Two distinct teams, one shared mission of robotics excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Team Axiom */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <Card className="overflow-hidden border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 h-full bg-gradient-to-br from-card to-blue-500/5">
                <div className="h-32 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-lg border border-white/30">
                        A
                      </div>
                      <div>
                        <Badge className="bg-white/20 text-white border-white/30">
                          14142A
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-blue-600 group-hover:text-blue-500 transition-colors">
                    Team Axiom
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our foundational team, focused on winning every VEX Robotics competition!
                  </p>

                  {/* Team Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-500/10 rounded-lg p-3 text-center border border-blue-500/20">
                      <div className="text-lg font-bold text-blue-600">5</div>
                      <div className="text-xs text-muted-foreground">Members</div>
                    </div>
                    <div className="bg-blue-500/10 rounded-lg p-3 text-center border border-blue-500/20">
                      <div className="text-lg font-bold text-blue-600">15+</div>
                      <div className="text-xs text-muted-foreground">Hours</div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-500/30">
                      Driver Control
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-500/30">
                      Autonomous Systems
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-500/30">
                      Competition Ready
                    </Badge>
                  </div>

                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href="/axiom">
                      <Star className="w-4 h-4 mr-2" />
                      Explore Team Axiom
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Team Theorem */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <Card className="overflow-hidden border-green-500/20 hover:border-green-400/40 transition-all duration-300 h-full bg-gradient-to-br from-card to-green-500/5">
                <div className="h-32 bg-gradient-to-br from-green-600 via-green-500 to-emerald-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-lg border border-white/30">
                        T
                      </div>
                      <div>
                        <Badge className="bg-white/20 text-white border-white/30">
                          14142T
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-green-600 group-hover:text-green-500 transition-colors">
                    Team Theorem
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                      Our Innovation team, focused on experimental approaches and rapid iteration.
                  </p>

                  {/* Team Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-500/10 rounded-lg p-3 text-center border border-green-500/20">
                      <div className="text-lg font-bold text-green-600">5</div>
                      <div className="text-xs text-muted-foreground">Members</div>
                    </div>
                    <div className="bg-green-500/10 rounded-lg p-3 text-center border border-green-500/20">
                      <div className="text-lg font-bold text-green-600">0+</div>
                      <div className="text-xs text-muted-foreground">Hours</div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/30">
                      Rapid Prototyping
                    </Badge>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/30">
                      Innovation R&D
                    </Badge>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/30">
                      Smart Systems
                    </Badge>
                  </div>

                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/theorem">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      Explore Team Theorem
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Team Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  What Makes Each Team Unique
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-blue-600 flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Team Axiom Approach
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        Precision engineering and design
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        Competition-focused development cycles
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        Systematic testing and optimization
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-green-600 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" />
                      Team Theorem Approach
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        Experimental techniques and rapid iteration
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        Innovation-driven development process
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        Research-based problem solving
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section - Redesigned for better visual appeal */}
      <FeatureSection
        title="Our Approach"
        description="We combine mathematical principles with engineering creativity to develop innovative robotics solutions through a systematic methodology."
      >
        <div className="w-full max-w-4xl">
          {/* Main approach cards stacked vertically */}
          <div className="space-y-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-6 bg-card/50 rounded-2xl p-6 border border-border/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Build & Iterate</h3>
                <p className="text-muted-foreground">
                  We construct prototypes, test rigorously, and refine our designs through multiple iterations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-6 bg-card/50 rounded-2xl p-6 border border-border/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Program & Optimize</h3>
                <p className="text-muted-foreground">
                  We write code that is optimized and modular, ensuring our robots operate efficiently and effectively.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6 bg-card/50 rounded-2xl p-6 border border-border/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <CircuitBoard className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Integrate & Test</h3>
                <p className="text-muted-foreground">
                  We combine all systems into a cohesive robot and conduct comprehensive testing before competition.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </FeatureSection>

      {/* Support Us Section*/}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl mb-4">
              Feeling Inspired?
            </h2>
            <p className="text-muted-foreground mb-8">
              If our story and mission resonate with you, consider supporting us! Your donation helps us continue innovating and inspiring the next generation of engineers.
            </p>
            <Button asChild size="lg">
              <Link href="/donate">
                Donate to Irrational Robotics
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* About VEX Section - Simplified and less text-heavy */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About <HighlightText type="gradient">VEX Robotics</HighlightText></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The world's largest high school robotics competition, challenging students to innovate and excel.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Competition Format</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Teams design robots for annual game challenges, competing in qualification and elimination rounds.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Skills Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Students gain hands-on experience in programming, engineering design, and project management.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Global Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with thousands of students worldwide who share a passion for robotics and innovation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/competitions">
                Learn About Competitions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
